import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const resumeCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resume' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const caseStudiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    skills: z.array(z.string()),
  }),
});

export const collections = {
  about: aboutCollection,
  resume: resumeCollection,
  'case-studies': caseStudiesCollection,
};
