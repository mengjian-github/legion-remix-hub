export interface Dungeon {
  id: string;
  name: string;
  minLevel: number;
  maxLevel: number;
  bosses: number;
  location: string;
  description: string;
  estimatedXP: number; // Approximate XP per run
  estimatedTime: number; // Minutes
  bronzeReward: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const dungeons: Dungeon[] = [
  {
    id: 'eye-of-azshara',
    name: 'Eye of Azshara',
    minLevel: 10,
    maxLevel: 80,
    bosses: 5,
    location: 'Azsuna',
    description: 'Fast outdoor dungeon with efficient mob density',
    estimatedXP: 45000,
    estimatedTime: 15,
    bronzeReward: 1500,
    difficulty: 'Easy'
  },
  {
    id: 'return-to-karazhan-lower',
    name: 'Return to Karazhan: Lower',
    minLevel: 45,
    maxLevel: 80,
    bosses: 4,
    location: 'Deadwind Pass',
    description: 'Classic Karazhan halls with dense trash and multiple skip options.',
    estimatedXP: 52000,
    estimatedTime: 22,
    bronzeReward: 2100,
    difficulty: 'Hard'
  },
  {
    id: 'return-to-karazhan-upper',
    name: 'Return to Karazhan: Upper',
    minLevel: 45,
    maxLevel: 80,
    bosses: 4,
    location: 'Deadwind Pass',
    description: 'Tower climb culminating in an intense Shade of Medivh encounter.',
    estimatedXP: 54000,
    estimatedTime: 24,
    bronzeReward: 2200,
    difficulty: 'Hard'
  },
  {
    id: 'darkheart-thicket',
    name: 'Darkheart Thicket',
    minLevel: 10,
    maxLevel: 80,
    bosses: 4,
    location: 'Val\'sharah',
    description: 'Compact dungeon with high mob density',
    estimatedXP: 42000,
    estimatedTime: 14,
    bronzeReward: 1400,
    difficulty: 'Easy'
  },
  {
    id: 'maw-of-souls',
    name: 'Maw of Souls',
    minLevel: 10,
    maxLevel: 80,
    bosses: 3,
    location: 'Helheim',
    description: 'Short, quick dungeon ideal for speed runs',
    estimatedXP: 38000,
    estimatedTime: 12,
    bronzeReward: 1200,
    difficulty: 'Easy'
  },
  {
    id: 'neltharions-lair',
    name: 'Neltharion\'s Lair',
    minLevel: 10,
    maxLevel: 80,
    bosses: 4,
    location: 'Highmountain',
    description: 'Linear dungeon with steady progression',
    estimatedXP: 43000,
    estimatedTime: 16,
    bronzeReward: 1500,
    difficulty: 'Medium'
  },
  {
    id: 'halls-of-valor',
    name: 'Halls of Valor',
    minLevel: 10,
    maxLevel: 80,
    bosses: 5,
    location: 'Stormheim',
    description: 'Longer dungeon with challenging bosses',
    estimatedXP: 50000,
    estimatedTime: 20,
    bronzeReward: 1800,
    difficulty: 'Medium'
  },
  {
    id: 'black-rook-hold',
    name: 'Black Rook Hold',
    minLevel: 10,
    maxLevel: 80,
    bosses: 4,
    location: 'Val\'sharah',
    description: 'Medium length dungeon with varied encounters',
    estimatedXP: 46000,
    estimatedTime: 18,
    bronzeReward: 1600,
    difficulty: 'Medium'
  },
  {
    id: 'vault-of-the-wardens',
    name: 'Vault of the Wardens',
    minLevel: 10,
    maxLevel: 80,
    bosses: 4,
    location: 'Azsuna',
    description: 'Prison-themed dungeon with unique mechanics',
    estimatedXP: 44000,
    estimatedTime: 17,
    bronzeReward: 1500,
    difficulty: 'Medium'
  },
  {
    id: 'court-of-stars',
    name: 'Court of Stars',
    minLevel: 45,
    maxLevel: 80,
    bosses: 3,
    location: 'Suramar',
    description: 'Mythic-only dungeon with stealth mechanics',
    estimatedXP: 48000,
    estimatedTime: 19,
    bronzeReward: 2000,
    difficulty: 'Hard'
  },
  {
    id: 'arcway',
    name: 'The Arcway',
    minLevel: 45,
    maxLevel: 80,
    bosses: 5,
    location: 'Suramar',
    description: 'Mythic-only dungeon beneath Suramar City',
    estimatedXP: 49000,
    estimatedTime: 19,
    bronzeReward: 2000,
    difficulty: 'Hard'
  },
  {
    id: 'cathedral-of-eternal-night',
    name: 'Cathedral of Eternal Night',
    minLevel: 45,
    maxLevel: 80,
    bosses: 4,
    location: 'Broken Shore',
    description: 'Challenging dungeon with fel corruption',
    estimatedXP: 52000,
    estimatedTime: 22,
    bronzeReward: 2200,
    difficulty: 'Hard'
  },
  {
    id: 'seat-of-the-triumvirate',
    name: 'Seat of the Triumvirate',
    minLevel: 45,
    maxLevel: 80,
    bosses: 4,
    location: 'Mac\'Aree',
    description: 'Void-themed dungeon on Argus',
    estimatedXP: 51000,
    estimatedTime: 21,
    bronzeReward: 2100,
    difficulty: 'Hard'
  }
];

export interface FarmingMethod {
  id: string;
  name: string;
  bronzePerHour: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  requirements?: string;
  tips: string[];
}

export const farmingMethods: FarmingMethod[] = [
  {
    id: 'dungeon-spam',
    name: 'Dungeon Spam (Tank/Healer)',
    bronzePerHour: 8000,
    difficulty: 'Easy',
    description: 'Fast queue dungeons for consistent Bronze income',
    tips: [
      'Focus on fast dungeons like Maw of Souls and Eye of Azshara',
      'Use Heroic World Tier for bonus XP and Bronze',
      'Combine with Infinite Research dailies'
    ]
  },
  {
    id: 'world-quests',
    name: 'World Quest Circuit',
    bronzePerHour: 6000,
    difficulty: 'Easy',
    description: 'Complete World Quests for 200 Bronze each',
    tips: [
      'Prioritize quick World Quests',
      'Use flying mount for efficiency',
      'Stack multiple quests in same area'
    ]
  },
  {
    id: 'rare-farming',
    name: 'Rare Elite Farming',
    bronzePerHour: 7500,
    difficulty: 'Medium',
    description: 'Farm rare spawns across Broken Isles',
    requirements: 'Flying mount recommended',
    tips: [
      'Use raid group finder for popular rares',
      'Focus on Argus rares for higher Bronze drops',
      'Track respawn timers'
    ]
  },
  {
    id: 'raid-farming',
    name: 'Legacy Raid Farming',
    bronzePerHour: 5000,
    difficulty: 'Easy',
    description: 'Solo old Legion raids for Bronze caches',
    tips: [
      'Clear Emerald Nightmare weekly',
      'Run Tomb of Sargeras for tier sets',
      'Antorus for best rewards'
    ]
  },
  {
    id: 'treasure-hunting',
    name: 'Treasure Hunting',
    bronzePerHour: 4500,
    difficulty: 'Easy',
    description: 'Collect Bronze Caches from treasures',
    requirements: 'Treasure addon helpful',
    tips: [
      'Bronze Caches substantially increased in recent update',
      'Combine with World Quest routes',
      'Use treasure-finding addons'
    ]
  },
  {
    id: 'scenario-spam',
    name: 'Scenario Spam',
    bronzePerHour: 9000,
    difficulty: 'Medium',
    description: 'Farm Legion scenarios with premade groups',
    requirements: 'Premade group recommended',
    tips: [
      'Form efficient farming groups',
      'Skip unnecessary objectives',
      'Focus on high Bronze reward scenarios'
    ]
  }
];

// Helper functions
export const getBestXPDungeons = () => {
  return [...dungeons]
    .sort((a, b) => (b.estimatedXP / b.estimatedTime) - (a.estimatedXP / a.estimatedTime))
    .slice(0, 5);
};

export const getBestBronzeDungeons = () => {
  return [...dungeons]
    .sort((a, b) => (b.bronzeReward / b.estimatedTime) - (a.bronzeReward / a.estimatedTime))
    .slice(0, 5);
};

export const getEarlyLevelDungeons = () => {
  return dungeons.filter(d => d.minLevel <= 25);
};
