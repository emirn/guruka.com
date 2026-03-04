/**
 * Astro Integration for PDF Thumbnail Generation
 *
 * Generates first-page WebP thumbnails for local PDFs at build time.
 * Scans built HTML files for <a href="/assets/...pdf"> links, generates
 * a preview image, and injects an <img> thumbnail into the link.
 *
 * Configuration via data/site-config.json → pdf:
 * - generate_thumbnail: enable/disable (default: false)
 * - generate_thumbnail_max_size: skip PDFs larger than this KB (default: 200)
 */

import type { AstroIntegration } from 'astro';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createPrefixedLogger } from './log-prefix.js';

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export function pdfThumbnails(): AstroIntegration {
  return {
    name: 'pdf-thumbnails',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);
        const projectRoot = path.resolve(distDir, '..');

        // Load config
        const configPath = path.join(projectRoot, 'data/site-config.json');
        let config: Record<string, any> = {};
        try {
          config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
        } catch {
          logger.warn('Could not load site-config.json, skipping PDF thumbnails');
          return;
        }

        const log = createPrefixedLogger(logger, config.branding?.site?.url || '', 'pdf-thumbnails');

        const pdfConfig = config.pdf || {};
        if (!pdfConfig.generate_thumbnail) {
          return;
        }

        const maxSizeKB = pdfConfig.generate_thumbnail_max_size || 200;
        log.info(`Generating PDF thumbnails...`);

        // Find all HTML files in dist/
        const htmlFiles: string[] = [];
        async function walkDir(dir: string) {
          const entries = await fs.readdir(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              await walkDir(fullPath);
            } else if (entry.name.endsWith('.html')) {
              htmlFiles.push(fullPath);
            }
          }
        }
        await walkDir(distDir);

        // Regex to find PDF links: <a href="/assets/...pdf"...>...</a>
        const pdfLinkRegex = /<a\s([^>]*href="(\/assets\/[^"]+\.pdf)"[^>]*)>([\s\S]*?)<\/a>/gi;

        let generated = 0;
        let skipped = 0;
        let failed = 0;

        // Track which PDFs we've already processed to avoid duplicate work
        const processedPdfs = new Map<string, string | null>(); // pdfPath -> thumbnailWebPath or null if failed

        for (const htmlFile of htmlFiles) {
          let html = await fs.readFile(htmlFile, 'utf-8');

          // Reset regex lastIndex for each file
          pdfLinkRegex.lastIndex = 0;
          const replacements: Array<{ original: string; replacement: string }> = [];

          let match;
          while ((match = pdfLinkRegex.exec(html)) !== null) {
            const fullMatch = match[0];
            const attrs = match[1];
            const pdfHref = match[2]; // e.g. /assets/cases/legal-billing-review/agreement.pdf
            const linkContent = match[3];

            // Skip if already has a thumbnail image
            if (fullMatch.includes('pdf-preview-thumb')) {
              continue;
            }

            const pdfPath = path.join(distDir, pdfHref);

            // Check if we already processed this PDF
            if (processedPdfs.has(pdfPath)) {
              const thumbWebPath = processedPdfs.get(pdfPath);
              if (thumbWebPath) {
                const pdfFileName = path.basename(pdfHref);
                const replacement = buildThumbnailLink(attrs, thumbWebPath, pdfFileName, linkContent);
                replacements.push({ original: fullMatch, replacement });
              }
              continue;
            }

            // Verify PDF exists
            if (!(await fileExists(pdfPath))) {
              skipped++;
              processedPdfs.set(pdfPath, null);
              continue;
            }

            // Check file size
            const stat = await fs.stat(pdfPath);
            const sizeKB = stat.size / 1024;
            if (sizeKB > maxSizeKB) {
              log.info(`  Skipped (${Math.round(sizeKB)}KB > ${maxSizeKB}KB): ${pdfHref}`);
              skipped++;
              processedPdfs.set(pdfPath, null);
              continue;
            }

            // Build thumbnail path
            const pdfDir = path.dirname(pdfPath);
            const pdfBaseName = path.basename(pdfHref, '.pdf');
            const thumbFileName = `${pdfBaseName}-preview.webp`;
            const thumbPath = path.join(pdfDir, thumbFileName);
            const thumbWebPath = path.dirname(pdfHref) + '/' + thumbFileName;

            // Check if thumbnail already exists
            if (await fileExists(thumbPath)) {
              log.info(`  Exists: ${thumbWebPath}`);
              processedPdfs.set(pdfPath, thumbWebPath);
              const pdfFileName = path.basename(pdfHref);
              const replacement = buildThumbnailLink(attrs, thumbWebPath, pdfFileName, linkContent);
              replacements.push({ original: fullMatch, replacement });
              generated++;
              continue;
            }

            // Generate thumbnail
            try {
              const { PDFToImage } = await import('pdf-to-image-generator');
              const pdfToImage = new PDFToImage(pdfPath);
              const pages = await pdfToImage.convert({
                pages: [1],
                type: 'webp',
                viewportScale: 1.5,
              });

              // Library returns array of page buffers
              if (pages && pages.length > 0) {
                const pageResult = pages[0];
                // pageResult may be a Buffer or object with content/path
                let buffer: Buffer;
                if (Buffer.isBuffer(pageResult)) {
                  buffer = pageResult;
                } else if (pageResult?.content) {
                  buffer = Buffer.isBuffer(pageResult.content) ? pageResult.content : Buffer.from(pageResult.content);
                } else if (pageResult?.path) {
                  buffer = await fs.readFile(pageResult.path);
                } else {
                  throw new Error('Unexpected pdf-to-image-generator output format');
                }

                await fs.writeFile(thumbPath, buffer);
                log.info(`  Generated: ${thumbWebPath}`);
                processedPdfs.set(pdfPath, thumbWebPath);

                const pdfFileName = path.basename(pdfHref);
                const replacement = buildThumbnailLink(attrs, thumbWebPath, pdfFileName, linkContent);
                replacements.push({ original: fullMatch, replacement });
                generated++;
              } else {
                throw new Error('No pages returned from PDF conversion');
              }
            } catch (err) {
              log.warn(`  Failed: ${pdfHref} — ${err instanceof Error ? err.message : err}`);
              processedPdfs.set(pdfPath, null);
              failed++;
            }
          }

          // Apply replacements
          if (replacements.length > 0) {
            for (const { original, replacement } of replacements) {
              html = html.replace(original, replacement);
            }
            await fs.writeFile(htmlFile, html);
          }
        }

        const parts = [];
        if (generated > 0) parts.push(`${generated} generated`);
        if (skipped > 0) parts.push(`${skipped} skipped`);
        if (failed > 0) parts.push(`${failed} failed`);
        if (parts.length > 0) {
          log.info(`PDF thumbnails: ${parts.join(', ')}`);
        } else {
          log.info(`PDF thumbnails: no PDF links found`);
        }
      },
    },
  };
}

function buildThumbnailLink(
  attrs: string,
  thumbWebPath: string,
  pdfFileName: string,
  linkContent: string,
): string {
  // Add pdf-preview-link class to existing attrs
  let newAttrs = attrs;
  if (newAttrs.includes('class="')) {
    newAttrs = newAttrs.replace('class="', 'class="pdf-preview-link ');
  } else {
    newAttrs += ' class="pdf-preview-link"';
  }

  const label = linkContent.trim() || pdfFileName;
  return `<a ${newAttrs}><img src="${thumbWebPath}" alt="Preview of ${pdfFileName}" class="pdf-preview-thumb" /><span class="pdf-preview-label">${label}</span></a>`;
}
