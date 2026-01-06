import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    keywords: z.string().optional(),
    author: z.object({
      name: z.string(),
      bio: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
