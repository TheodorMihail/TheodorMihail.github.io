/**
 * Shipped commercial titles, newest first.
 *
 * `platforms` uses a fixed vocabulary of four values: PC, Mobile, TVs, VR.
 * Never put technologies (multiplayer, networking) in this list.
 *
 * To add cover art: drop the image in `src/assets/titles/`, import it at the
 * top of this file, and set it as `cover`. Cards render a styled fallback
 * while `cover` is undefined, so entries never need to wait on artwork.
 */
export type Platform = 'PC' | 'Mobile' | 'TVs' | 'VR';

export interface Title {
  name: string;
  studio: string;
  role: string;
  platforms: Platform[];
  blurb: string;
  /** Optional headline figure, e.g. "100M+ downloads". */
  note?: string;
  /** Store or product page, when one is public. */
  url?: string;
  cover?: ImageMetadata;
  /** Full card, or counted into the "+ N more shipped titles" line. */
  highlight: boolean;
}

export const TITLES: Title[] = [
  {
    name: 'Illuvium: Zero',
    studio: 'Illuvium',
    role: 'Technical Lead & Architect',
    platforms: ['PC', 'Mobile'],
    blurb:
      'Real-time multiplayer strategy taken from greenfield to live release. Server-authoritative client/server architecture for determinism and security, custom tooling and CI/CD, then live operations with feature flags, phased rollouts and A/B tests.',
    highlight: true,
  },
  {
    name: 'Immersed',
    studio: 'Immersed',
    role: 'Senior Unity Architect',
    platforms: ['VR', 'PC', 'Mobile'],
    blurb:
      'VR collaboration platform. Rebuilt the UDP/TCP network layer for a 90% gain in session stability, and extended the MRTK framework with custom gesture tracking that lifted accuracy by 50%.',
    highlight: true,
  },
  {
    name: 'Empire Bingo: Win Real Cash',
    studio: 'Empire Games',
    role: 'Unity Architect',
    platforms: ['Mobile'],
    blurb:
      'Real-money casino platform architected from scratch around security and modularity. SOLID, MVC, Zenject and state machines throughout, with the Unity IAP plugin handling transactions. MVP landed 30% ahead of schedule.',
    highlight: true,
  },
  {
    name: 'Idle Miner Tycoon',
    studio: 'Kolibri Games',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Live idle title worked on alongside 50+ engineers, shipping continuous content updates and tuning to one of the largest player bases in the genre.',
    note: '100M+ downloads',
    highlight: true,
  },
  {
    name: 'Idle Mail Tycoon',
    studio: 'Kolibri Games',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Owned end to end from scratch to release, covering core systems, gameplay and live content tuning. Exceeded company store performance targets by over 20%.',
    highlight: true,
  },
  {
    name: 'Wahoo RGT',
    studio: 'Road Grand Tours',
    role: 'Senior Unity Engineer',
    platforms: ['PC', 'Mobile', 'TVs'],
    blurb:
      'Cross-platform cycling simulation. Rewrote the network module for stable real-time online races and events, and optimised UI and gameplay systems across five platforms.',
    highlight: true,
  },
  {
    name: 'Ordinem',
    studio: 'Playa3ull Games',
    role: 'Senior Unity Engineer',
    platforms: ['PC'],
    blurb:
      'Delivered 200+ card implementations, including base mechanics for a large share of the set, against a three-month deadline.',
    highlight: true,
  },
  {
    name: "Starvin' Martian",
    studio: 'Playa3ull Games',
    role: 'Senior Unity Engineer',
    platforms: ['PC'],
    blurb:
      'Gameplay systems for buildings, upgrades and production, plus the real-time multiplayer foundation on Mirror with on-demand Docker server provisioning and backend-backed session persistence.',
    highlight: true,
  },
  {
    name: "Rubik's Match 3",
    studio: 'Nordlight',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Embedded in the META team on a live title, building UI systems, daily quest flows, menu-layer features and a localization system, shipped as ongoing content updates.',
    highlight: true,
  },

  // Counted into the "+ N more shipped titles" line rather than named.
  { name: 'Idle Nightclub Tycoon', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'Keto Krash', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'JL Paris Advent Calendar', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'Princess Cruises', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
];
