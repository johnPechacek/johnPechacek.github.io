import type { CollectionEntry } from 'astro:content';

// Drafts show on the dev server for review, never in production builds
export const isVisible = ({ data }: CollectionEntry<'case-studies'>) =>
  import.meta.env.DEV || !data.draft;
