/**
 * Shipped commercial titles, newest first.
 *
 * To add cover art: drop the image in `src/assets/titles/`, import it at the
 * top of this file, and set it as `cover`. Cards render a styled fallback
 * while `cover` is undefined, so entries never need to wait on artwork.
 */
export interface Title {
  name: string;
  studio: string;
  /** Display string — "2023–2025", "Contract". */
  years: string;
  role: string;
  platforms: string[];
  blurb: string;
  /** Optional headline figure, e.g. "100M+ downloads". */
  note?: string;
  /** Store or product page, when one is public. */
  url?: string;
  cover?: ImageMetadata;
  /** Full card vs. compact mention in the "also shipped" line. */
  highlight: boolean;
}

export const TITLES: Title[] = [
  {
    name: 'Illuvium: Zero',
    studio: 'Illuvium',
    years: '2023–2025',
    role: 'Technical Lead & Architect',
    platforms: ['PC'],
    blurb:
      'Multiplayer strategy game taken from greenfield to live release. Server-authoritative client–server architecture, custom tooling and CI/CD, then live ops.',
    highlight: true,
  },
  {
    name: 'Immersed',
    studio: 'Immersed',
    years: '2022–2023',
    role: 'Senior Unity Architect',
    platforms: ['VR', 'Desktop'],
    blurb:
      'VR collaboration platform. Rebuilt the UDP/TCP networking layer for a 90% gain in session stability, and pushed gesture tracking accuracy up 50% with custom MRTK extensions.',
    highlight: true,
  },
  {
    name: 'Empire Bingo: Win Real Cash',
    studio: 'Empire Games',
    years: '2021–2022',
    role: 'Unity Architect',
    platforms: ['Mobile'],
    blurb:
      'Real-money mobile casino platform architected from scratch around security and modularity. MVP landed 30% ahead of schedule.',
    highlight: true,
  },
  {
    name: 'Idle Miner Tycoon',
    studio: 'Kolibri Games',
    years: '2020–2021',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Live idle title worked on alongside 50+ engineers in a continuous live-ops environment.',
    note: '100M+ downloads',
    highlight: true,
  },
  {
    name: 'Idle Mail Tycoon',
    studio: 'Kolibri Games',
    years: '2020–2021',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile'],
    blurb:
      'Owned end to end from scratch to release — core systems and gameplay. Exceeded company store performance targets by over 20%.',
    highlight: true,
  },
  {
    name: 'Wahoo RGT',
    studio: 'Road Grand Tours',
    years: '2019–2020',
    role: 'Senior Unity Engineer',
    platforms: ['Mobile', 'Desktop', 'Apple TV'],
    blurb:
      'Cross-platform cycling simulation. Rewrote the network module for stable real-time online races across five platforms.',
    highlight: true,
  },
  {
    name: 'Ordinem',
    studio: 'Playa3ull Games',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['PC'],
    blurb:
      'Delivered 200+ card implementations, including base mechanics for a large share of the set, against a three-month deadline.',
    highlight: true,
  },
  {
    name: "Starvin' Martian",
    studio: 'Playa3ull Games',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['PC'],
    blurb:
      'Gameplay systems for buildings, upgrades and production, plus the multiplayer foundation on Mirror with Docker-based server provisioning and session persistence.',
    highlight: true,
  },
  {
    name: "Rubik's Match 3",
    studio: 'Nordlight',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['Mobile'],
    blurb:
      'Embedded in the META team on a live title — UI systems, daily quest flows, menu-layer features and localization.',
    highlight: true,
  },

  // Shown as a compact "also shipped" line rather than full cards.
  {
    name: 'Idle Nightclub Tycoon',
    studio: 'Contract',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['Mobile'],
    blurb: '',
    highlight: false,
  },
  {
    name: 'Keto Krash',
    studio: 'Contract',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['Mobile'],
    blurb: '',
    highlight: false,
  },
  {
    name: 'JL Paris Advent Calendar',
    studio: 'Contract',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['Mobile'],
    blurb: '',
    highlight: false,
  },
  {
    name: 'Princess Cruises',
    studio: 'Contract',
    years: 'Contract',
    role: 'Unity Contractor',
    platforms: ['Mobile'],
    blurb: '',
    highlight: false,
  },
];
