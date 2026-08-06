// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User-site repo (theodormihail.github.io) serves from the domain root,
// so no `base` is needed here — keep it that way, the Unity WebGL loader
// in a later phase resolves its asset paths relative to the root.
export default defineConfig({
  site: 'https://theodormihail.github.io',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
