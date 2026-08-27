/**
 * Stamp for the committed Space Invaders WebGL build.
 *
 * Update both fields whenever the build under public/play/space-invaders is
 * replaced. `version` mirrors bundleVersion in the game's ProjectSettings;
 * `updated` is the date the build was put on the site, in ISO form so the
 * rendered format stays independent of it.
 */
export const PLAY_BUILD = {
  version: '0.1.0',
  updated: '2026-08-27',
} as const;

/** Fixed locale, so the output does not vary with the build machine. */
export function formatBuildDate(iso: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}
