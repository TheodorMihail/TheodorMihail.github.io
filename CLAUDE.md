# Project rules

Personal portfolio site. Astro 7 static site on Node 24, deployed to GitHub Pages from `main`.

## Structure

- `src/consts.ts`: site-wide strings and links. Single source of truth; don't hardcode the
  name, role, or contact details in components.
- `src/styles/tokens.css`: design tokens as CSS custom properties. All colour, type, spacing
  and motion values come from here.
- `src/layouts/BaseLayout.astro`: head/meta, nav, footer, starfield. Every page uses it.
- `src/components/`: one `.astro` file per component, styles scoped in the same file.
- `src/pages/`: routes.
- `public/`: copied verbatim to the site root. Contains `.nojekyll`, which must not be deleted.

## Conventions

- **No UI framework and no client-side JS** unless something genuinely needs it. This is content,
  not an app, and the whole point is that it stays fast and simple.
- **No Tailwind.** Component-scoped `<style>` blocks reading from `tokens.css`.
- **Never hardcode a colour, font, or spacing value** in a component. Add a token instead.
- **Never use em dashes (`—`)** in copy, comments or docs. Use a comma, colon, or a new
  sentence instead. This applies to everything in the repo.
- Prefer semantic HTML: real `<a>`/`<button>`, landmarks, one `<h1>` per page.
- Every animation must be disabled under `prefers-reduced-motion`.
- Images go through Astro's `<Image>` from `astro:assets` so they're optimised and sized. Only
  files that must keep their exact path (e.g. Unity WebGL output) belong in `public/`.

## Deployment

- Push to `main` → `.github/workflows/deploy.yml` builds and publishes. No manual step.
- `astro.config.mjs` has no `base`, because this is a user site served from the domain root. Adding a
  `base` would break the Unity WebGL loader's asset paths.

## Adding content

See `CONTENT.md` for how to add a project or a job to the site.
