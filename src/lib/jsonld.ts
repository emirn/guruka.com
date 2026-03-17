import type { CollectionEntry } from 'astro:content';
import type { SiteConfig } from './config';
import { getDefaultAuthor } from './config';
import { getCategoryUrl } from './categories';

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbList(
  config: SiteConfig,
  items: Array<{ name: string; url: string }>
): object {
  const siteUrl = config.seo.canonical_domain || config.branding.site.url;

  const itemListElement: BreadcrumbItem[] = [
    {
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    ...items.map((item, index) => ({
      position: index + 2,
      name: item.name,
      item: `${siteUrl}${item.url.startsWith('/') ? item.url : '/' + item.url}`,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generate BlogPosting JSON-LD schema for an article
 */
export function generateBlogPosting(
  config: SiteConfig,
  article: CollectionEntry<'articles'>,
  canonicalUrl: string
): object {
  const { data } = article;
  const siteUrl = config.seo.canonical_domain || config.branding.site.url;

  // Build publisher object
  const publisher: Record<string, unknown> = {
    '@type': 'Organization',
    name: config.seo.json_ld?.organization_name || config.branding.site.name,
  };

  if (config.seo.json_ld?.organization_logo) {
    const logoUrl = config.seo.json_ld.organization_logo.startsWith('http')
      ? config.seo.json_ld.organization_logo
      : `${siteUrl}${config.seo.json_ld.organization_logo}`;
    publisher.logo = {
      '@type': 'ImageObject',
      url: logoUrl,
    };
  }

  // Build the BlogPosting schema
  const blogPosting: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    datePublished: data.published_at.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    publisher,
  };

  // Optional fields
  if (data.description) {
    blogPosting.description = data.description;
  }

  if (data.updated_at) {
    blogPosting.dateModified = data.updated_at.toISOString();
  } else {
    blogPosting.dateModified = data.published_at.toISOString();
  }

  // Build author(s) from IArticleAuthorEntry + project config for rich E-E-A-T data
  const authorEntries = data.authors?.filter((a: { role: string }) => a.role === 'author' || a.role === 'contributor') || [];
  if (authorEntries.length > 0 && config.authors?.length) {
    const authorJsonLd = authorEntries.map((entry: { id: string }) => {
      const authorInfo = config.authors?.find(a => a.id === entry.id) as Record<string, any> | undefined;
      if (!authorInfo) return null;
      const person: Record<string, unknown> = {
        '@type': 'Person',
        name: authorInfo.name,
      };
      if (authorInfo.url) person.url = authorInfo.url;
      if (authorInfo.image) person.image = authorInfo.image;
      if (authorInfo.jobTitle) person.jobTitle = authorInfo.jobTitle;
      if (authorInfo.sameAs?.length) person.sameAs = authorInfo.sameAs;
      return person;
    }).filter(Boolean);
    if (authorJsonLd.length > 0) {
      blogPosting.author = authorJsonLd.length === 1 ? authorJsonLd[0] : authorJsonLd;
    } else {
      // Fallback to string author
      const authorName = data.author || getDefaultAuthor(config);
      blogPosting.author = { '@type': 'Person', name: authorName };
    }
  } else {
    // Fallback to legacy string author field
    const authorName = data.author || getDefaultAuthor(config);
    const authorObj: Record<string, unknown> = { '@type': 'Person', name: authorName };
    const configAuthor = config.authors?.find(a => a.name === authorName) as Record<string, any> | undefined;
    if (configAuthor?.url) authorObj.url = configAuthor.url;
    if (configAuthor?.image) authorObj.image = configAuthor.image;
    if (configAuthor?.jobTitle) authorObj.jobTitle = configAuthor.jobTitle;
    if (configAuthor?.sameAs?.length) authorObj.sameAs = configAuthor.sameAs;
    blogPosting.author = authorObj;
  }

  // Image - use OG image or hero image
  const imageUrl = data.image_og || data.image_hero;
  if (imageUrl) {
    const fullImageUrl = imageUrl.startsWith('http')
      ? imageUrl
      : `${siteUrl}${imageUrl}`;
    blogPosting.image = fullImageUrl;
  } else if (config.seo.default_og_image) {
    const fullImageUrl = config.seo.default_og_image.startsWith('http')
      ? config.seo.default_og_image
      : `${siteUrl}${config.seo.default_og_image}`;
    blogPosting.image = fullImageUrl;
  }

  // Keywords
  if (data.keywords && data.keywords.length > 0) {
    blogPosting.keywords = data.keywords.join(', ');
  }

  return blogPosting;
}

/**
 * Generate article breadcrumbs with optional category
 */
export function generateArticleBreadcrumbs(
  config: SiteConfig,
  article: CollectionEntry<'articles'>
): object {
  const breadcrumbItems: Array<{ name: string; url: string }> = [];

  // Add first category if categories are enabled and article has categories
  if (config.categories?.enabled && article.data.categories?.length) {
    const firstCategory = article.data.categories[0];
    breadcrumbItems.push({
      name: firstCategory,
      url: getCategoryUrl(firstCategory, config),
    });
  }

  // Add the article itself
  breadcrumbItems.push({
    name: article.data.title,
    url: `/${article.slug}/`,
  });

  return generateBreadcrumbList(config, breadcrumbItems);
}
