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
    role: z.string(),
    timeline: z.string(),
    team: z.string(),
    outcome: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      context: z.string().optional(),
      label: z.string(),
    })).optional(),
  }),
});

export const collections = {
  about: aboutCollection,
  resume: resumeCollection,
  'case-studies': caseStudiesCollection,
};
