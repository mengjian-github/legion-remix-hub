export interface BronzeReward {
  id: string;
  name: string;
  type: 'mount' | 'pet' | 'transmog' | 'toy' | 'ensemble';
  cost: number;
  source: string;
  description: string;
  category?: string;
}

export const bronzeRewards: BronzeReward[] = [
  // Mounts
  {
    id: 'violet-spellwing',
    name: 'Violet Spellwing',
    type: 'mount',
    cost: 150000,
    source: 'Antorus Heroic',
    description: 'Previously unobtainable mount returning in Legion Remix',
    category: 'Rare Mounts'
  },
  {
    id: 'shackled-urzul',
    name: 'Shackled Ur\'zul',
    type: 'mount',
    cost: 200000,
    source: 'Antorus Mythic',
    description: 'Unique Ur\'zul model mount',
    category: 'Rare Mounts'
  },
  {
    id: 'green-urzul',
    name: 'Maddened Ur\'zul',
    type: 'mount',
    cost: 180000,
    source: 'Infinite Bazaar',
    description: 'Green recolor of Ur\'zul',
    category: 'Rare Mounts'
  },
  {
    id: 'purple-urzul',
    name: 'Corrupted Ur\'zul',
    type: 'mount',
    cost: 180000,
    source: 'Infinite Bazaar',
    description: 'Purple recolor of Ur\'zul',
    category: 'Rare Mounts'
  },
  {
    id: 'red-urzul',
    name: 'Burning Ur\'zul',
    type: 'mount',
    cost: 180000,
    source: 'Infinite Bazaar',
    description: 'Red recolor of Ur\'zul',
    category: 'Rare Mounts'
  },
  {
    id: 'fel-bonesteed',
    name: 'Felfire Bonesteed',
    type: 'mount',
    cost: 120000,
    source: 'Infinite Bazaar',
    description: 'Fel-themed skeletal horse',
    category: 'Bonesteeds'
  },
  {
    id: 'green-bonesteed',
    name: 'Ghastly Bonesteed',
    type: 'mount',
    cost: 100000,
    source: 'Infinite Bazaar',
    description: 'Green bonesteed variant',
    category: 'Bonesteeds'
  },
  {
    id: 'fel-bat',
    name: 'Fel Terrorwing',
    type: 'mount',
    cost: 95000,
    source: 'Infinite Bazaar',
    description: 'Fel-corrupted bat mount',
    category: 'Fel Bats'
  },
  {
    id: 'green-fel-bat',
    name: 'Vile Terrorwing',
    type: 'mount',
    cost: 90000,
    source: 'Infinite Bazaar',
    description: 'Green bat variant',
    category: 'Fel Bats'
  },
  {
    id: 'golden-courser',
    name: 'Gilded Courser',
    type: 'mount',
    cost: 110000,
    source: 'Infinite Bazaar',
    description: 'Elegant gold courser',
    category: 'Coursers'
  },
  {
    id: 'silver-courser',
    name: 'Moonlit Courser',
    type: 'mount',
    cost: 100000,
    source: 'Infinite Bazaar',
    description: 'Silver courser variant',
    category: 'Coursers'
  },
  {
    id: 'jade-manasaber',
    name: 'Jade Manasaber',
    type: 'mount',
    cost: 85000,
    source: 'Infinite Bazaar',
    description: 'Jade-colored Nightborne mount',
    category: 'Manasabers'
  },
  {
    id: 'azure-manasaber',
    name: 'Azure Manasaber',
    type: 'mount',
    cost: 85000,
    source: 'Infinite Bazaar',
    description: 'Blue manasaber',
    category: 'Manasabers'
  },
  {
    id: 'obsidian-basilisk',
    name: 'Obsidian Basilisk',
    type: 'mount',
    cost: 75000,
    source: 'Infinite Bazaar',
    description: 'Dark stone basilisk',
    category: 'Basilisks'
  },
  {
    id: 'ruby-basilisk',
    name: 'Ruby Basilisk',
    type: 'mount',
    cost: 75000,
    source: 'Infinite Bazaar',
    description: 'Red crystal basilisk',
    category: 'Basilisks'
  },
  {
    id: 'lightforged-talbuk',
    name: 'Lightforged Talbuk',
    type: 'mount',
    cost: 65000,
    source: 'Infinite Bazaar',
    description: 'Argus-themed talbuk',
    category: 'Argus Mounts'
  },
  {
    id: 'fel-talbuk',
    name: 'Fel Talbuk',
    type: 'mount',
    cost: 65000,
    source: 'Infinite Bazaar',
    description: 'Fel-corrupted talbuk',
    category: 'Argus Mounts'
  },

  // Pets
  {
    id: 'fel-piglet',
    name: 'Fel Piglet',
    type: 'pet',
    cost: 15000,
    source: 'Infinite Bazaar',
    description: 'Tiny fel-corrupted pig',
    category: 'Battle Pets'
  },
  {
    id: 'demonic-pepe',
    name: 'Demonic Pepe',
    type: 'pet',
    cost: 25000,
    source: 'Infinite Bazaar',
    description: 'Pepe dressed as a demon',
    category: 'Battle Pets'
  },
  {
    id: 'baby-urzul',
    name: 'Wretched Hatchling',
    type: 'pet',
    cost: 30000,
    source: 'Infinite Bazaar',
    description: 'Baby Ur\'zul pet',
    category: 'Battle Pets'
  },
  {
    id: 'fel-wisp',
    name: 'Felbound Wisp',
    type: 'pet',
    cost: 20000,
    source: 'Infinite Bazaar',
    description: 'Fel-corrupted wisp companion',
    category: 'Battle Pets'
  },
  {
    id: 'legion-imp',
    name: 'Legion Imp',
    type: 'pet',
    cost: 18000,
    source: 'Infinite Bazaar',
    description: 'Small Legion demon',
    category: 'Battle Pets'
  },

  // Transmog Ensembles
  {
    id: 'tomb-of-sargeras-leather',
    name: 'Tomb of Sargeras Leather Ensemble',
    type: 'ensemble',
    cost: 45000,
    source: 'Infinite Bazaar',
    description: 'Complete Tomb of Sargeras leather transmog',
    category: 'Tier Sets'
  },
  {
    id: 'tomb-of-sargeras-plate',
    name: 'Tomb of Sargeras Plate Ensemble',
    type: 'ensemble',
    cost: 45000,
    source: 'Infinite Bazaar',
    description: 'Complete Tomb of Sargeras plate transmog',
    category: 'Tier Sets'
  },
  {
    id: 'tomb-of-sargeras-mail',
    name: 'Tomb of Sargeras Mail Ensemble',
    type: 'ensemble',
    cost: 45000,
    source: 'Infinite Bazaar',
    description: 'Complete Tomb of Sargeras mail transmog',
    category: 'Tier Sets'
  },
  {
    id: 'tomb-of-sargeras-cloth',
    name: 'Tomb of Sargeras Cloth Ensemble',
    type: 'ensemble',
    cost: 45000,
    source: 'Infinite Bazaar',
    description: 'Complete Tomb of Sargeras cloth transmog',
    category: 'Tier Sets'
  },
  {
    id: 'antorus-leather',
    name: 'Antorus Leather Ensemble',
    type: 'ensemble',
    cost: 50000,
    source: 'Infinite Bazaar',
    description: 'Complete Antorus leather transmog',
    category: 'Tier Sets'
  },
  {
    id: 'antorus-plate',
    name: 'Antorus Plate Ensemble',
    type: 'ensemble',
    cost: 50000,
    source: 'Infinite Bazaar',
    description: 'Complete Antorus plate transmog',
    category: 'Tier Sets'
  },
  {
    id: 'antorus-mail',
    name: 'Antorus Mail Ensemble',
    type: 'ensemble',
    cost: 50000,
    source: 'Infinite Bazaar',
    description: 'Complete Antorus mail transmog',
    category: 'Tier Sets'
  },
  {
    id: 'antorus-cloth',
    name: 'Antorus Cloth Ensemble',
    type: 'ensemble',
    cost: 50000,
    source: 'Infinite Bazaar',
    description: 'Complete Antorus cloth transmog',
    category: 'Tier Sets'
  },

  // Toys
  {
    id: 'fel-portal-toy',
    name: 'Portable Fel Portal',
    type: 'toy',
    cost: 12000,
    source: 'Infinite Bazaar',
    description: 'Summon a fel portal toy',
    category: 'Toys'
  },
  {
    id: 'demon-disguise',
    name: 'Demon Costume',
    type: 'toy',
    cost: 10000,
    source: 'Infinite Bazaar',
    description: 'Transform into a demon temporarily',
    category: 'Toys'
  },
  {
    id: 'legion-banner',
    name: 'Legion Banner',
    type: 'toy',
    cost: 8000,
    source: 'Infinite Bazaar',
    description: 'Plant a Legion banner',
    category: 'Toys'
  }
];

// Calculate total Bronze needed for all rewards
export const totalBronzeCost = bronzeRewards.reduce((sum, reward) => sum + reward.cost, 0);

// Group rewards by category
export const rewardsByCategory = bronzeRewards.reduce((acc, reward) => {
  const category = reward.category || 'Other';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(reward);
  return acc;
}, {} as Record<string, BronzeReward[]>);

// Get rewards by type
export const getRewardsByType = (type: BronzeReward['type']) => {
  return bronzeRewards.filter(reward => reward.type === type);
};

export interface RewardSpotlightHighlight {
  name: string;
  requirement: string;
  note?: string;
}

export interface RewardSpotlight {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: RewardSpotlightHighlight[];
}

export const rewardSpotlights: RewardSpotlight[] = [
  {
    id: 'sargerei-ensembles',
    title: 'Sargerei Commander Ensembles',
    subtitle: 'Four fel-tinted armor sets tied to Remix achievement milestones.',
    image: '/images/game/sargerei-commander.jpg',
    highlights: [
      {
        name: "Ensemble: Sargerei Commander's Felscorned Regalia",
        requirement: 'Complete the Legion Remix campaign quest “Shape a New Legend” (To Fel and Back).'
      },
      {
        name: "Ensemble: Sargerei Commander's Voidscarred Regalia",
        requirement: 'Finish 100 Heroic World Tier World Quests (Heroic Broken Isles World Quests IV).'
      },
      {
        name: "Ensemble: Sargerei Commander's Lightbound Regalia",
        requirement: 'Clear all Legion raids on Mythic during Remix (Mythic Legion Remix Raids).'
      },
      {
        name: "Ensemble: Sargerei Commander's Hellforged Regalia",
        requirement: 'Defeat any Timeworn Keystone dungeon at level 30+ (Timeworn Keystone Hero).'
      }
    ]
  },
  {
    id: 'zone-capstones',
    title: 'Zone & Campaign Capstones',
    subtitle: 'Complete zone meta achievements to collect pets, illusions, and weapon skins.',
    image: '/images/game/felshatter-illusion.jpg',
    highlights: [
      {
        name: "Warden's Companion (Azsuna)",
        requirement: 'Finish any two Azsuna achievements (Campaign, Tour, Looking for Group, or Court of Farondis).'
      },
      {
        name: 'Illusion: Felshatter (Val\'sharah)',
        requirement: 'Complete any two Val\'sharah achievements, including Looking for Group: Val\'sharah.'
      },
      {
        name: 'Duskytooth Fel Snooter (Highmountain)',
        requirement: 'Finish two Highmountain achievements such as Campaign or Highmountain Tribe Exalted.'
      },
      {
        name: 'Sinister Fel Arsenal (Stormheim)',
        requirement: 'Complete any two Stormheim achievements including Halls of Valor + Maw of Souls clears.'
      },
      {
        name: "Kaldorei Queen's Royal Vestments (Suramar)",
        requirement: 'Complete two Suramar achievements, e.g., The Arcway + Court of Stars or Insurrection.'
      },
      {
        name: "Fallen King's Corrupted Blades (Broken Shore)",
        requirement: 'Complete three Broken Shore objectives including Breaching the Tomb and Tomb of Sargeras.'
      }
    ]
  },
  {
    id: 'argus-legacies',
    title: 'Argus Legacy Rewards',
    subtitle: 'Chase end-of-season weapons and shields from the Burning Throne era.',
    image: '/images/game/mannoroth-shield.jpg',
    highlights: [
      {
        name: 'Bulwark of Mannoroth',
        requirement: 'Complete two Argus achievements such as Tour Argus or Seat of the Triumvirate. '
      },
      {
        name: 'Felscorned Scythe of the Unmaker',
        requirement: 'Defeat Antorus, the Burning Throne on Mythic difficulty during Remix.'
      },
      {
        name: 'Violet Spellwing',
        requirement: 'Earn 150,000 Bronze once Phase 4 unlocks the Antorus vendors.'
      }
    ]
  },
  {
    id: 'housing-decor',
    title: 'Remix Housing Decor',
    subtitle: 'Unlock account-wide props when Infinite Echoes opens on December 9, 2025.',
    image: '/images/game/housing-decor-items.jpg',
    highlights: [
      {
        name: 'Fel Crystal Arrangements',
        requirement: 'Purchase from Infinite Echoes decor vendors with Bronze once Phase 5 begins.',
        note: 'Available account-wide after purchase.'
      },
      {
        name: 'Legendary Weapon Displays',
        requirement: 'Collect weapon replicas such as Corrupted Shalamayne to place in your home.'
      },
      {
        name: 'Nightborne Pavilion Set',
        requirement: 'Complete Suramar catch-up activities in Phase 5 to unlock vendor stock.'
      }
    ]
  }
];
