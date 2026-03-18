import { type CollectionEntry } from 'astro:content';
import { getConfig, type SiteConfig, getAuthorUrl, getAuthorById } from './config';
import { getPublishedArticles } from './articles';

/**
 * Get all unique authors from published articles (resolved from site config)
 */
export async function getAllAuthors(config?: SiteConfig): Promise<Array<{
  id: string;
  name: string;
  url: string;
  slug: string;
  pageUrl: string;
  count: number;
}>> {
  const cfg = config || getConfig();
  const articles = await getPublishedArticles();
  const authorCounts = new Map<string, number>();

  const defaultAuthorId = cfg.authors?.[0]?.id;
  for (const article of articles) {
    if (defaultAuthorId) {
      // All articles are attributed to the default (first) author
      authorCounts.set(defaultAuthorId, (authorCounts.get(defaultAuthorId) || 0) + 1);
    }
  }

  const results: Array<{
    id: string;
    name: string;
    url: string;
    slug: string;
    pageUrl: string;
    count: number;
  }> = [];

  for (const [id, count] of authorCounts) {
    const author = getAuthorById(id, cfg);
    if (author) {
      results.push({
        id: author.id,
        name: author.name,
        url: author.url,
        slug: author.id,
        pageUrl: getAuthorUrl(author.id),
        count,
      });
    }
  }

  return results.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

/**
 * Get published articles by author ID
 */
export async function getArticlesByAuthor(
  authorId: string,
  config?: SiteConfig
): Promise<CollectionEntry<'articles'>[]> {
  const cfg = config || getConfig();
  const articles = await getPublishedArticles();

  // Default author ID (first in config)
  const defaultAuthorId = cfg.authors?.[0]?.id;

  return articles
    .filter((article) => {
      // All articles are attributed to the default (first) author
      return authorId === defaultAuthorId;
    })
    .sort((a, b) => {
      const dateA = a.data.published_at?.getTime() || 0;
      const dateB = b.data.published_at?.getTime() || 0;
      return dateB - dateA;
    });
}

/**
 * Find author by slug (reverse lookup)
 */
export function findAuthorBySlug(slug: string, config?: SiteConfig): { id: string; name: string; url: string } | undefined {
  const cfg = config || getConfig();
  return cfg.authors?.find(a => a.id === slug);
}
