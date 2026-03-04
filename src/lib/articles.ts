import { getCollection, type CollectionEntry } from 'astro:content';

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
