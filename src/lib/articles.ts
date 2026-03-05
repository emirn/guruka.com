import { getCollection, type CollectionEntry } from 'astro:content';
import type { SiteConfig } from './config';

/**
 * Get all published articles (excludes future-dated articles)
 * Articles without a published_at date are treated as published
 */
export async function getPublishedArticles(): Promise<CollectionEntry<'articles'>[]> {
  const articles = await getCollection('articles');
  const now = new Date();

  const published: CollectionEntry<'articles'>[] = [];
  const skipped: { slug: string; publishedAt: Date }[] = [];

  for (const article of articles) {
    const publishedAt = article.data.published_at;
    if (!publishedAt || publishedAt <= now) {
      published.push(article);
    } else {
      skipped.push({ slug: article.slug, publishedAt });
    }
  }

  if (skipped.length > 0) {
    console.warn(`[articles] ${skipped.length} article(s) skipped (published_at in the future):`);
    for (const s of skipped) {
      console.warn(`  - ${s.slug} (published_at: ${s.publishedAt.toISOString().slice(0, 10)})`);
    }
  }

  return published;
}

/** Extract language from an article slug (e.g., "en/blog/foo" → "en") */
export function getArticleLang(slug: string, config?: SiteConfig): string {
  if (!config?.i18n?.enabled) return config?.i18n?.defaultLanguage || 'en';
  const langs = config.i18n.languages?.map(l => l.code) || [];
  const first = slug.split('/')[0];
  if (langs.includes(first)) return first;
  return config.i18n.defaultLanguage || 'en';
}

/** Strip language prefix from an article slug (e.g., "en/blog/foo" → "blog/foo") */
export function getArticleBaseSlug(slug: string, config?: SiteConfig): string {
  if (!config?.i18n?.enabled) return slug;
  const langs = config.i18n.languages?.map(l => l.code) || [];
  const first = slug.split('/')[0];
  if (langs.includes(first)) return slug.split('/').slice(1).join('/');
  return slug;
}

/** Get published articles filtered by language */
export async function getPublishedArticlesByLang(lang?: string, config?: SiteConfig): Promise<CollectionEntry<'articles'>[]> {
  const articles = await getPublishedArticles();
  if (!lang || !config?.i18n?.enabled) return articles;
  return articles.filter(a => getArticleLang(a.slug, config) === lang);
}

/** Extract language from a page slug (e.g., "es/games/speed-match" → "es") */
export function getPageLang(slug: string, config?: SiteConfig): string {
  if (!config?.i18n?.enabled) return config?.i18n?.defaultLanguage || 'en';
  const langs = config.i18n.languages?.map(l => l.code) || [];
  const first = slug.split('/')[0];
  if (langs.includes(first)) return first;
  return config.i18n.defaultLanguage || 'en';
}

/** Strip language prefix from a page slug (e.g., "es/games/speed-match" → "games/speed-match") */
export function getPageBaseSlug(slug: string, config?: SiteConfig): string {
  if (!config?.i18n?.enabled) return slug;
  const langs = config.i18n.languages?.map(l => l.code) || [];
  const first = slug.split('/')[0];
  if (langs.includes(first)) return slug.split('/').slice(1).join('/');
  return slug;
}
