// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User-site repo (theodormihail.github.io) serves from the domain root,
// so no `base` is needed here — keep it that way, the Unity WebGL loader
// in a later phase resolves its asset paths relative to the root.
// Pages nothing on the site links to. They stay out of the sitemap so search engines are not
// handed them, but a GitHub Pages URL is public to anyone who has it: unlisted, not private.
const UNLISTED = ['/play/kickbox-trainer/'];

export default defineConfig({
  site: 'https://theodormihail.github.io',
  integrations: [
    sitemap({
      filter: (page) => !UNLISTED.some((path) => page.endsWith(path)),
    }),
  ],
  build: {
    format: 'directory',
  },
});
