# Editing site content

Everything below is data, not markup, so none of it needs component changes.

## Identity, stats and contact links

`src/consts.ts`. Name, role, platforms, location, hero intro, meta description, the three hero
stat figures, and every contact URL.

Stat labels are arrays, one string per rendered line, so line breaks are deliberate rather than
left to the browser:

```ts
{ value: '13', label: ['titles shipped or', 'contributed to'] }
```

## Experience (the career timeline)

One Markdown file per role in `src/content/experience/`. Filenames are prefixed with a number
purely for ordering on disk; the actual sort comes from the `order` field (1 = most recent).

```markdown
---
company: Studio Name
role: Senior Unity Engineer
start: Jan 2024          # display strings, not dates
end: Present             # "Present" renders the green Current badge
location: City, Country (Remote)
product: Game Name, what it is    # optional, shown in italics
tech: [Unity, 'C#', Netcode]       # quote anything with a #
order: 1
---

- Bullet describing what you built. **Bold** works for product names.
- Another bullet.
```

To add a role: create the file, set `order`, and bump the `order` of everything below it.

## Shipped titles (the work grid)

`src/data/titles.ts`: one object per title. `highlight: true` renders a full card;
`highlight: false` only adds to the "+ N more shipped titles" count at the bottom of the section,
without naming the title.

`platforms` is restricted by the `Platform` type to exactly four values: `PC`, `Mobile`, `TVs`,
`VR`. Technologies such as multiplayer or networking belong in the `blurb`, never here. TypeScript
will reject anything outside the four.

`note` renders as a green badge on the card art. Use it sparingly, for a genuine headline
figure like "100M+ downloads".

### Adding cover art

1. Put the image in `src/assets/titles/`. **Must be 16:9 landscape**, ideally 1280x720 or larger.
   Cards crop to 16:9 with `object-fit: cover`, so a portrait source gets reduced to a thin
   horizontal strip through its middle.

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

One Markdown file per project in `src/content/projects/`. The filename is the URL slug, so
`space-invaders.md` serves at `/projects/space-invaders/`. Sort order comes from `order` (1 first).

```markdown
---
title: Space Invaders
tagline: One line, shown in green under the title
role: Solo developer
year: '2025'                    # quote it, or YAML reads it as a number
status: In development          # optional
blurb: Card copy. Kept short, since the grid has to stay scannable.
tags: [Progression, Boss Fights] # card chips: what it is
tech: [Unity 6, 'C#', Zenject]  # detail page header: how it is built
repoUrl: https://github.com/TheodorMihail/SpaceInvaders
playUrl: /play/space-invaders/  # optional, see below
cover: ../../assets/projects/space-invaders/gameplay.png
gallery:
  - ../../assets/projects/space-invaders/talents.png
highlights:
  - Bullet shown in the sidebar on the detail page
hasPage: true
order: 1
---

Long-form write-up in Markdown. `##` headings render as section headers.
```

**Any value containing a colon must be quoted**, or YAML parses it as a nested key and the build
fails.

### Images

Put them in `src/assets/projects/<slug>/` and reference them by relative path from the Markdown
file. Astro converts them to WebP and generates a `srcset`, so commit the full-resolution source.

`cover` is used **only by the card**, where it crops to 16:9, so use landscape. The detail page
shows `gallery` instead, uncropped in a grid below the write-up. To show the cover shot there too,
list it in `gallery` as well, which is what `space-invaders.md` does.

That split is deliberate: a full-width hero image pushes the technical content below the fold, and
on a project page the writing is the thing worth reading first.

### Projects with nothing to show

Set `hasPage: false` and omit `cover`. The card then links straight out to `repoUrl` with an
external-link glyph instead of to a detail page, and no detail page is generated.

With no `cover`, the card art falls back to a generated module diagram
(`src/components/ModuleDiagram.astro`), so the grid keeps its shape without needing a screenshot.
It is decorative and drawn from design tokens, so it needs no per-project configuration and follows
any palette change automatically. `base-architecture.md` is the working example.

## Card chips vs the stack

`tags` renders as chips on the card and should say **what the project is**, in the visitor's terms:
gameplay mechanics for a game, systems provided for a library. `tech` renders only in the detail
page header and says **how it is built**. With no `tags`, the card falls back to `tech`.

### The playable build slot

Until `playUrl` is set, the detail page shows a dashed "Playable build" placeholder where the game
will go. Setting `playUrl` replaces it and adds a "Play in browser" button next to "View source".

### Adding a project

1. Create `src/content/projects/<slug>.md`.
2. Drop images in `src/assets/projects/<slug>/`.
3. Set `order`, and bump anything that should sort below it.

No component or route changes. The homepage grid and the detail routes both read the collection.
