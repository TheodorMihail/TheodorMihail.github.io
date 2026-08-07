import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Imported directly, since astro:content's `z` re-export is deprecated in Astro 7.
import { z } from 'zod';

/** One file per role. Body holds the bullet list of what was built. */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    /** Display strings, not dates, e.g. "Mar 2023" or "Present". */
    start: z.string(),
    end: z.string(),
    location: z.string(),
    /** The product worked on, shown under the company. */
    product: z.string().optional(),
    tech: z.array(z.string()).default([]),
    /** Ascending, where 1 is the most recent role. */
    order: z.number(),
  }),
});

/**
 * One file per personal project. Body is the long-form write-up rendered on
 * the detail page. See CONTENT.md for the add-a-project flow.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line under the title, on both the card and the detail page. */
      tagline: z.string(),
      role: z.string(),
      year: z.string(),
      /** Short state string, e.g. "In development" or "Released". */
      status: z.string().optional(),
      /** Card copy. Kept separate from the body so the grid stays scannable. */
      blurb: z.string(),
      /** Stack, shown on the detail page header only. */
      tech: z.array(z.string()).default([]),
      /** Card chips. What the project is, not how it is built. Falls back to `tech`. */
      tags: z.array(z.string()).default([]),
      repoUrl: z.url(),
      /** Set once a playable build exists, which turns on the play button. */
      playUrl: z.string().optional(),
      /** With no cover, the card falls back to the generated module diagram. */
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      /** Bullets shown beside the write-up on the detail page. */
      highlights: z.array(z.string()).default([]),
      /**
       * False for projects with nothing to show beyond the repo, so the card
       * links straight out to GitHub instead of to a detail page.
       */
      hasPage: z.boolean().default(true),
      /** Ascending, where 1 sorts first. */
      order: z.number(),
    }),
});

export const collections = { experience, projects };
