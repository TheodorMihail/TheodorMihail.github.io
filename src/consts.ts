/** Single source of truth for site-wide strings and links. */
export const SITE = {
  name: 'Theodor Mihail Holban',
  role: 'Senior Unity Engineer & Architect',
  tagline: 'Mobile, multiplayer & live games',
  location: 'Romania · Remote',
  url: 'https://theodormihail.github.io',
  description:
    'Senior Unity engineer and architect with 14 years building mobile, multiplayer, VR and cross-platform games — from 100M+ download live titles to server-authoritative multiplayer.',
} as const;

/** Headline figures. Keep these defensible — they are the first claim a visitor reads. */
export const STATS = [
  { value: '14 yrs', label: 'in Unity & C#' },
  { value: '13', label: 'titles shipped' },
  { value: '100M+', label: 'downloads reached' },
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
