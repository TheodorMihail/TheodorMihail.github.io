/**
 * Shipped commercial titles. Array order is the display order, curated for
 * impact rather than chronology.
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
    name: 'Idle Miner Tycoon',
    studio: 'Kolibri Games',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Live title delivering continuous feature implementations, content updates, bug fixes and tuning to one of the largest player bases in the genre.',
    note: '100M+ downloads',
    highlight: true,
  },
  {
    name: 'Idle Mail Tycoon',
    studio: 'Kolibri Games',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Full ownership from initial development through to release, covering core systems, gameplay and live content tuning, followed by ongoing live operations with feature flags, phased rollouts and A/B testing. Exceeded company store performance targets by over 20%.',
    highlight: true,
  },
  {
    name: 'Illuvium: Zero',
    studio: 'Illuvium',
    role: 'Technical Lead & Architect',
    platforms: ['PC', 'Mobile'],
    blurb:
      'Real-time multiplayer strategy title developed from initial concept through to live release. Server-authoritative client/server architecture ensuring determinism and security, supported by custom tooling and CI/CD.',
    highlight: true,
  },
  {
    name: 'Ordinem',
    studio: 'Playa3ull Games',
    role: 'Senior Unity Engineer',
    platforms: ['PC'],
    blurb:
      'Delivered 200+ card implementations for a turn-based card game, including the base mechanics for a significant portion of the set, within a three-month deadline.',
    highlight: true,
  },
  {
    name: "Rubik's Match 3",
    studio: 'Nordlight',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Joined the META team during development and saw the title through to launch, implementing UI systems, daily quest flows, menu-layer features and a localization system, then continuing on post-release content updates.',
    highlight: true,
  },
  {
    name: 'Immersed',
    studio: 'Immersed',
    role: 'Senior Unity Architect',
    platforms: ['VR', 'PC', 'Mobile'],
    blurb:
      'VR collaboration platform. Rebuilt the UDP/TCP network layer, achieving a 90% improvement in session stability, and extended the MRTK framework with custom gesture tracking that improved accuracy by 50%.',
    highlight: true,
  },
  {
    name: 'Empire Bingo: Win Real Cash',
    studio: 'Empire Games',
    role: 'Unity Architect',
    platforms: ['Mobile'],
    blurb:
      'Real-money casino platform architected from the ground up, with security and modularity as the primary constraints. Built on SOLID principles, MVC, Zenject and state machines, with the Unity IAP plugin handling transactions. MVP delivered 30% ahead of schedule.',
    highlight: true,
  },
  {
    name: 'Wahoo RGT',
    studio: 'Road Grand Tours',
    role: 'Senior Unity Engineer',
    platforms: ['PC', 'Mobile', 'TVs'],
    blurb:
      'Cross-platform cycling simulation. Rewrote the network module to support stable real-time online races and events, and optimised UI and gameplay systems across five platforms.',
    highlight: true,
  },
  {
    name: "Starvin' Martian",
    studio: 'Playa3ull Games',
    role: 'Senior Unity Engineer',
    platforms: ['PC'],
    blurb:
      'Gameplay systems covering buildings, upgrades and production, together with the real-time multiplayer foundation built on Mirror, including on-demand Docker server provisioning and backend-backed session persistence.',
    highlight: true,
  },

  // Counted into the "+ N more shipped titles" line rather than named.
  { name: 'Idle Nightclub Tycoon', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'Keto Krash', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'JL Paris Advent Calendar', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
  { name: 'Princess Cruises', studio: '', role: '', platforms: ['Mobile'], blurb: '', highlight: false },
];
