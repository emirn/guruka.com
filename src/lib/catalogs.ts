import type { SiteConfig, CatalogConfig } from './config';
import { getCollection } from 'astro:content';

export function getCatalogs(config: SiteConfig): CatalogConfig[] {
  return config.catalogs || [];
}

export function getCatalogByPath(urlPath: string, config: SiteConfig): CatalogConfig | undefined {
  return getCatalogs(config).find((c) => c.path === urlPath);
}

/** Get all items for a catalog (filtered by catalog id prefix in slug) */
export async function getCatalogItems(catalogId: string) {
  let items: Awaited<ReturnType<typeof getCollection<'catalog-items'>>>;
  try {
    items = await getCollection('catalog-items');
  } catch {
    return [];
  }
  return items
    .filter((item) => item.slug.startsWith(`${catalogId}/`))
    .sort((a, b) => (a.data.order - b.data.order) || a.data.title.localeCompare(b.data.title));
}

/** Strip catalog-id prefix from slug: "tools/supabase" → "supabase" */
export function getItemSlug(fullSlug: string): string {
  const idx = fullSlug.indexOf('/');
  return idx >= 0 ? fullSlug.slice(idx + 1) : fullSlug;
}

/** Collect unique categories from items */
export function getUniqueCategories(items: Array<{ data: { category?: string } }>): string[] {
  const cats = new Set<string>();
  for (const item of items) {
    if (item.data.category) cats.add(item.data.category);
  }
  return [...cats].sort();
}

/** Build Google Favicons URL for a domain */
export function getFaviconUrl(url: string, size = 32): string {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
  } catch {
    return '';
  }
}
