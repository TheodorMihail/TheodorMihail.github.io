# Editing site content

Everything below is data, not markup — none of it needs component changes.

## Identity, stats and contact links

`src/consts.ts`. Name, role, tagline, location, meta description, the three hero stat figures,
and every contact URL.

## Experience (the career timeline)

One Markdown file per role in `src/content/experience/`. Filenames are prefixed with a number
purely for ordering on disk; the actual sort comes from the `order` field (1 = most recent).

```markdown
---
company: Studio Name
role: Senior Unity Engineer
start: Jan 2024          # display strings, not dates
end: Present             # "Present" renders the green Current badge
location: City, Country — Remote
product: Game Name — what it is    # optional, shown in italics
tech: [Unity, 'C#', Netcode]       # quote anything with a #
order: 1
---

- Bullet describing what you built. **Bold** works for product names.
- Another bullet.
```

To add a role: create the file, set `order`, and bump the `order` of everything below it.

## Shipped titles (the work grid)

`src/data/titles.ts` — one object per title. `highlight: true` renders a full card;
`highlight: false` drops it into the compact "Also shipped" line at the bottom of the section.

`note` renders as a green badge on the card art — use it sparingly, for a genuine headline
figure like "100M+ downloads".

### Adding cover art

1. Put the image in `src/assets/titles/` (16:9 crops look best — they're the card's aspect ratio).
2. Import it at the top of `titles.ts` and set it as `cover`:

```ts
import illuviumZero from '../assets/titles/illuvium-zero.jpg';
// ...
{ name: 'Illuvium: Zero', cover: illuviumZero, /* ... */ }
```

Astro converts and resizes it automatically. Cards without a `cover` show an initials tile, so a
title never has to wait for artwork.

## Profile photo

Save it as `src/assets/profile.jpg` (`.png` and `.webp` also work). The About section picks it up
automatically and reflows to a two-column layout. With no file present, the text runs full width.

## About and contact copy

Prose lives in `src/components/About.astro` and `src/components/Contact.astro`.

## Personal projects

Not built yet — see the plan. Will be `src/content/projects/`, one Markdown file per project.
