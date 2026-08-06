# theodormihail.github.io

Personal portfolio site covering experience, personal projects, and (soon) a playable browser build of
[Space Invaders](https://github.com/TheodorMihail/SpaceInvaders).

Live at **https://theodormihail.github.io**

## Stack

[Astro](https://astro.build) static site, no UI framework, deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
```

Requires Node 22.12+ (Astro 7's minimum). Developed on Node 24 LTS, which is what CI uses.
