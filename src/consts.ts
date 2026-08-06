/** Single source of truth for site-wide strings and links. */
export const SITE = {
  name: 'Theodor Mihail Holban',
  role: 'Senior Unity Engineer & Architect',
  tagline: 'Mobile, multiplayer & live games',
  location: 'Romania · Remote',
  url: 'https://theodormihail.github.io',
  description:
    'Unity developer and architect with 14 years building games across mobile, PC, VR and multiplayer, from scalable architecture and performance work to leading teams on real-time multiplayer titles.',
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
