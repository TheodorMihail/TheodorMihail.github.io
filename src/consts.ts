/**
 * Single source of truth for site-wide strings and links.
 * Phase 1 values are placeholders — replaced with real copy in Phase 2.
 */
export const SITE = {
  name: 'Theodor Mihail',
  /** Shown under the name in the hero and in the <title> suffix. */
  role: 'Unity / gameplay engineer',
  url: 'https://theodormihail.github.io',
  description:
    'Unity and gameplay engineer building game architecture that scales — clean systems, tested code, shipped projects.',
} as const;

/** TODO(phase-2): replace with real contact details. */
export const LINKS = {
  github: 'https://github.com/TheodorMihail',
  linkedin: '',
  email: '',
} as const;

export const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
