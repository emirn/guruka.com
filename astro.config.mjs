// @ts-check
import { defineConfig } from 'astro/config';
import { existsSync, readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
// Note: Pagefind is run as a post-build step via CLI (see package.json build script)
// The astro-pagefind integration is kept for dev server middleware only
import pagefind from 'astro-pagefind';
import { validateImages } from './src/integrations/validate-images.js';
import { ogImages } from './src/integrations/og-images.js';
import { pdfThumbnails } from './src/integrations/pdf-thumbnails.js';
import { sitemapCopy } from './src/integrations/sitemap-copy.js';
import { localGoogleFonts } from './src/integrations/local-google-fonts.js';

// Load site config if available
function getSiteConfig() {
  try {
    const configPath = './data/site-config.json';
    if (existsSync(configPath)) {
      return JSON.parse(readFileSync(configPath, 'utf-8'));
    }
  } catch {}
  return null;
}

// Scan public/ directory for index.html files to include in sitemap
function getPublicSitemapUrls(siteUrl) {
  const publicDir = './public';
  if (!existsSync(publicDir)) return [];
  const urls = [];
  function walk(dir, relPath) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(join(dir, entry.name), relPath + entry.name + '/');
      } else if (entry.name === 'index.html' && relPath !== '') {
        const urlPath = '/' + relPath.split('/').map(s => encodeURIComponent(s)).join('/');
        urls.push(siteUrl + urlPath);
      }
    }
  }
  walk(publicDir, '');
  return urls.sort();
}

// https://astro.build/config
// Note: Using object form (not function form) for defineConfig to ensure integration hooks run properly
const siteConfig = getSiteConfig();
const siteUrl = siteConfig?.branding?.site?.url;
if (!siteUrl) {
  throw new Error('Missing site URL: data/site-config.json must have branding.site.url');
}
const siteName = siteConfig?.branding?.site?.name;
if (!siteName) {
  throw new Error('Missing site name: data/site-config.json must have branding.site.name');
}

// Always include pagefind integration for dev server middleware
// ogImages BEFORE validateImages so OG images exist during validation
const publicSitemapUrls = getPublicSitemapUrls(siteUrl);
const sitemapConfig = publicSitemapUrls.length > 0 ? { customPages: publicSitemapUrls } : {};
const integrations = [...(siteConfig?.branding?.typography?.local_fonts ? [localGoogleFonts()] : []), sitemap(sitemapConfig), mdx(), pagefind(), ogImages(), pdfThumbnails(), validateImages(), sitemapCopy()];

// Conditionally add React integration
if (siteConfig?.integrations?.react) {
  try {
    const react = (await import('@astrojs/react')).default;
    integrations.push(react());
  } catch {
    console.warn('Warning: @astrojs/react not installed. Install it with: npm install @astrojs/react react react-dom');
  }
}

// Redirects from site config (set in project's template_settings.redirects)
const redirects = siteConfig?.redirects || {};

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  redirects,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  },
  integrations
});
