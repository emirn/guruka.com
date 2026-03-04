import type { APIRoute } from 'astro';
import { getConfig } from '../lib/config';

export const GET: APIRoute = () => {
  const config = getConfig();
  const siteUrl = config.branding.site.url.replace(/\/+$/, '');

  let body = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

  if (config.robots_txt?.additional_rules) {
    body += `\n${config.robots_txt.additional_rules.trim()}\n`;
  }

  if (config.llms_txt?.enabled) {
    body += `\n# See also: ${siteUrl}/llms.txt\n`;
  }

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
