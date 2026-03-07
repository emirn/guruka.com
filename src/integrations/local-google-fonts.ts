/**
 * Astro Integration for Local Google Fonts
 *
 * Downloads Google Fonts at build/dev time and serves them locally,
 * eliminating CDN round-trips that cause visible font flash (FOUT).
 *
 * Logic:
 * - Reads typography.google_fonts from data/site-config.json
 * - Fetches CSS from Google Fonts API with woff2-capable User-Agent
 * - Downloads each woff2 file to public/fonts/
 * - Rewrites CSS URLs to /fonts/<filename>
 * - Writes rewritten CSS to public/fonts/google-fonts.css
 * - If fetch fails (no network), skips silently — BaseLayout CDN link is fallback
 */

import type { AstroIntegration } from 'astro';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createPrefixedLogger } from './log-prefix.js';

export function localGoogleFonts(): AstroIntegration {
  return {
    name: 'local-google-fonts',
    hooks: {
      'astro:config:setup': async ({ config, logger }) => {
        const projectRoot = config.root ? fileURLToPath(config.root) : process.cwd();
        const fontsDir = path.join(projectRoot, 'public', 'fonts');
        const cssOutputPath = path.join(fontsDir, 'google-fonts.css');

        // Check if fonts already downloaded (skip on dev server restarts)
        try {
          await fs.access(cssOutputPath);
          // CSS exists — check if it has content
          const existing = await fs.readFile(cssOutputPath, 'utf-8');
          if (existing.length > 0) {
            logger.info('Fonts already downloaded, skipping');
            return;
          }
        } catch {
          // File doesn't exist, proceed with download
        }

        // Load site config
        const configPath = path.join(projectRoot, 'data', 'site-config.json');
        let siteConfig: Record<string, any>;
        try {
          siteConfig = JSON.parse(await fs.readFile(configPath, 'utf-8'));
        } catch {
          logger.warn('Could not load site-config.json, skipping font download');
          return;
        }

        const log = createPrefixedLogger(logger, siteConfig.branding?.site?.url || '', 'local-google-fonts');

        const googleFonts: string[] = siteConfig.typography?.google_fonts;
        if (!googleFonts || googleFonts.length === 0) {
          log.info('No google_fonts configured, skipping');
          return;
        }

        // Build Google Fonts CSS URL
        const familyParams = googleFonts.map(f => `family=${f}`).join('&');
        const cssUrl = `https://fonts.googleapis.com/css2?${familyParams}&display=swap`;

        log.info(`Downloading fonts: ${googleFonts.join(', ')}`);

        // Fetch CSS with woff2-capable User-Agent
        let cssText: string;
        try {
          const response = await fetch(cssUrl, {
            headers: {
              // Chrome UA to get woff2 format (smaller, better compression)
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
          });
          if (!response.ok) {
            log.warn(`Google Fonts API returned ${response.status}, skipping`);
            return;
          }
          cssText = await response.text();
        } catch (err) {
          log.warn(`Failed to fetch Google Fonts CSS (no network?), skipping: ${err instanceof Error ? err.message : err}`);
          return;
        }

        // Parse CSS to find all font file URLs
        const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g;
        const fontUrls = new Set<string>();
        let match: RegExpExecArray | null;
        while ((match = urlRegex.exec(cssText)) !== null) {
          fontUrls.add(match[1]);
        }

        if (fontUrls.size === 0) {
          log.warn('No font file URLs found in CSS, skipping');
          return;
        }

        // Create fonts directory
        await fs.mkdir(fontsDir, { recursive: true });

        // Download each font file and rewrite CSS
        let rewrittenCss = cssText;
        let downloaded = 0;

        for (const url of fontUrls) {
          // Extract filename from URL (last path segment)
          const urlPath = new URL(url).pathname;
          const filename = urlPath.split('/').pop()!;

          const localPath = path.join(fontsDir, filename);

          try {
            const fontResponse = await fetch(url);
            if (!fontResponse.ok) {
              log.warn(`Failed to download ${filename}: HTTP ${fontResponse.status}`);
              continue;
            }
            const buffer = Buffer.from(await fontResponse.arrayBuffer());
            await fs.writeFile(localPath, buffer);
            downloaded++;
          } catch (err) {
            log.warn(`Failed to download ${filename}: ${err instanceof Error ? err.message : err}`);
            continue;
          }

          // Rewrite URL in CSS to local path
          rewrittenCss = rewrittenCss.split(url).join(`/fonts/${filename}`);
        }

        // Write rewritten CSS
        await fs.writeFile(cssOutputPath, rewrittenCss);

        log.info(`Downloaded ${downloaded} font files, wrote google-fonts.css`);
      },
    },
  };
}
