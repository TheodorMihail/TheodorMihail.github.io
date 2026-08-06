/**
 * Single source of truth for site-wide strings and links.
 *
 * Each section of the page has a distinct job, so avoid repeating the same
 * capability list in more than one place. The full technical range belongs
 * in the About section; per-title specifics belong on the cards.
 */
export const SITE = {
  name: 'Theodor Mihail Holban',
  role: 'Senior Unity Engineer & Architect',
  /** Platforms only. Technologies belong in About or on a title card. */
  platforms: 'PC · Mobile · TVs · VR',
  location: 'Romania · Remote',
  url: 'https://theodormihail.github.io',
  /** Displayed in the hero. Positioning, not a capability list. */
  intro: 'I design game systems that hold up in production, and lead the teams that ship them.',
  /** Meta description only, never rendered on the page, so keyword density is fine here. */
  description:
    'Senior Unity engineer and architect with 14 years shipping games on PC, mobile, TVs and VR. Real-time and turn-based multiplayer, server-authoritative networking, performance optimisation and live operations.',
} as const;

/** Headline figures. Keep these defensible: they are the first claim a visitor reads. */
export const STATS = [
  { value: '14 yrs', label: 'in Unity & C#' },
  { value: '13', label: 'titles shipped or contributed to' },
  { value: '100M+', label: 'downloads across those titles' },
] as const;

export const LINKS = {
  email: 'holbantheodormihail@gmail.com',
  linkedin: 'https://www.linkedin.com/in/theodor-mihail-holban',
  github: 'https://github.com/TheodorMihail',
} as const;

export const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
