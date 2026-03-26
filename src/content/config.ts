import { defineCollection, z } from 'astro:content';

// Books collection - book metadata and landing page content
const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    published_at: z.coerce.date(),
    author: z.string(),
    image_cover: z.string(),
    page_count: z.number().optional(),
    downloads: z.array(z.object({
      format: z.enum(['pdf', 'epub']),
      url: z.string(),
      size: z.string().optional(),
    })).optional(),
    purchaseLinks: z.array(z.object({
      store: z.enum(['amazon', 'kindle', 'gumroad', 'other']),
      label: z.string(),
      url: z.string(),
    })).optional(),
    chapters: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

// Book chapters collection
const bookChapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter_number: z.number(),
    book: z.string(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    howTo: z.object({
      name: z.string(),
      description: z.string(),
      total_time: z.string().optional(),
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })),
    }).optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published_at: z.coerce.date(),
    updated_at: z.coerce.date().optional(),
    image_hero: z.string().optional(),
    image_og: z.string().optional(),
    keywords: z.union([
      z.array(z.string()),
      z.string().transform((s) => s.split(',').map((k) => k.trim()))
    ]).optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.preprocess(
      (val) => typeof val === 'string' ? val.split(',').map(t => t.trim()).filter(Boolean) : val,
      z.array(z.string()).optional()
    ),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    twitter_title: z.string().optional(),
    twitter_description: z.string().optional(),
    breadcrumbs: z.string().optional(),
    things: z.string().optional(),
    authors: z.array(z.object({
      id: z.string(),
      role: z.enum(['author', 'reviewer', 'contributor']),
      updated_at: z.string(),
    })).optional(),
    show_authors: z.boolean().optional(),
    show_dates: z.boolean().optional(),
    language: z.string().default('en').optional(),
    /** External URL (used in directory sections for "Visit Website" links) */
    url: z.string().optional(),
    /** Pricing info (used in directory sections) */
    pricing: z.string().optional(),
  }),
});

const catalogItems = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string().optional(),
    tags: z.preprocess(
      (val) => typeof val === 'string' ? val.split(',').map(t => t.trim()).filter(Boolean) : val,
      z.array(z.string()).optional()
    ),
    pricing: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image_hero: z.string().optional(),
    image_og: z.string().optional(),
    full_width: z.boolean().default(false),
    blog_grid: z.boolean().default(false),
    blog_grid_title: z.string().optional(),
    blog_grid_limit: z.number().default(9),
    language: z.string().default('en').optional(),
    show_authors: z.boolean().optional(),
    show_dates: z.boolean().optional(),
  }),
});

export const collections = { articles, pages, books, 'book-chapters': bookChapters, 'catalog-items': catalogItems };
