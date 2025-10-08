export interface RemixPhase {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  features: string[];
  focus: string;
}

export const remixPhases: RemixPhase[] = [
  {
    id: 'phase-1',
    name: 'Phase 1: Skies of Fire',
    startDate: new Date('2025-10-07'),
    endDate: new Date('2025-10-20'),
    description: 'Launch window covering Broken Isles leveling content and the first raid unlocks.',
    features: [
      'Broken Isles leveling zones and Class Halls',
      'Emerald Nightmare & Trial of Valor raids',
      'Timeworn Keystone dungeons (season start)',
      'Heroic World Tier and Timewarped Obelisks',
      'Infinite Artifact Weapons unlock'
    ],
    focus: 'Leveling, early gearing, and system onboarding'
  },
  {
    id: 'phase-2',
    name: 'Phase 2: Rise of the Nightfallen',
    startDate: new Date('2025-10-21'),
    endDate: new Date('2025-11-03'),
    description: 'Suramar story progression alongside Karazhan and the Nighthold.',
    features: [
      'Return to Karazhan mega-dungeon',
      'The Nighthold raid',
      'Suramar campaign chapters',
      'Nightborne-themed transmogs and mounts'
    ],
    focus: 'Suramar progression and gear upgrades'
  },
  {
    id: 'phase-3',
    name: 'Phase 3: Legionfall',
    startDate: new Date('2025-11-04'),
    endDate: new Date('2025-11-17'),
    description: 'Broken Shore campaign culminates with the Tomb of Sargeras.',
    features: [
      'Broken Shore and Legionfall daily content',
      'Cathedral of Eternal Night dungeon',
      'Tomb of Sargeras raid',
      'Class mount finale quests'
    ],
    focus: 'Raid progression and class campaign finales'
  },
  {
    id: 'phase-4',
    name: 'Phase 4: Argus Eternal',
    startDate: new Date('2025-11-18'),
    endDate: new Date('2025-12-08'),
    description: 'Argus zones and Antorus, the Burning Throne return in full.',
    features: [
      'Argus zones: Krokuun, Mac\'Aree, Antoran Wastes',
      'Seat of the Triumvirate dungeon',
      'Antorus, the Burning Throne raid',
      'Violet Spellwing and late Legion rewards'
    ],
    focus: 'Endgame raiding and rare collection farming'
  },
  {
    id: 'phase-5',
    name: 'Phase 5: Infinite Echoes',
    startDate: new Date('2025-12-09'),
    endDate: new Date('2026-01-19'),
    description: 'Catch-up window with remix-original activities and housing decor.',
    features: [
      'Infinite Echoes catch-up activities',
      'Remix housing decor catalog',
      'All Bronze vendors fully unlocked',
      'Bonus buffs, drops, and rotating events'
    ],
    focus: 'Late-season catch-up, alt gearing, and cosmetics cleanup'
  }
];

export const eventDates = {
  start: new Date('2025-10-07'),
  end: new Date('2026-01-19'),
  durationWeeks: 15
};

export const getCurrentPhase = (): RemixPhase | null => {
  const now = new Date();
  return remixPhases.find(phase => now >= phase.startDate && now <= phase.endDate) || null;
};

export const getNextPhase = (): RemixPhase | null => {
  const now = new Date();
  return remixPhases.find(phase => now < phase.startDate) || null;
};

export const getDaysUntilEnd = (): number => {
  const now = new Date();
  const end = eventDates.end;
  const diff = end.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const getDaysUntilPhase = (phase: RemixPhase): number => {
  const now = new Date();
  const diff = phase.startDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
