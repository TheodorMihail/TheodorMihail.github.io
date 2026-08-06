import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Imported directly — astro:content's `z` re-export is deprecated in Astro 7.
import { z } from 'zod';

/** One file per role. Body holds the bullet list of what was built. */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    /** Display strings, not dates — "Mar 2023", "Present". */
    start: z.string(),
    end: z.string(),
    location: z.string(),
    /** The product worked on, shown under the company. */
    product: z.string().optional(),
    tech: z.array(z.string()).default([]),
    /** Ascending — 1 is the most recent role. */
    order: z.number(),
  }),
});

export const collections = { experience };
