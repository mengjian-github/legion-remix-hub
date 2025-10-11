import type { ArtifactPath } from './artifact-paths';

// Trinket and Jewelry Traits
export interface ItemTrait {
  name: string;
  slots: string[];
  priority: number;
  description: string;
}

export const itemTraits: ItemTrait[] = [
  {
    name: 'Touch of Malice',
    slots: ['Necklace', 'Trinkets'],
    priority: 1,
    description: 'High damage proc that scales with item level. Recommended x2.'
  },
  {
    name: 'Terror from Below',
    slots: ['Trinkets', 'Rings'],
    priority: 2,
    description: 'Powerful damage proc from below. Recommended x2.'
  },
  {
    name: 'Volatile Magics',
    slots: ['Necklace', 'Rings'],
    priority: 3,
    description: 'Increases spell damage with volatile magic procs.'
  },
  {
    name: 'Storm Surger',
    slots: ['Necklace', 'Trinkets'],
    priority: 1,
    description: 'Lightning damage procs. Excellent for healers and casters.'
  }
];

// Spec-specific detailed information
export interface SpecGuide {
  classId: string;
  specName: string;
  role: 'Tank' | 'Healer' | 'DPS';

  // SEO
  metaDescription: string;

  // Artifact recommendations
  bestArtifactPath: string; // Path ID
  alternateArtifactPaths: Array<{
    pathId: string;
    reason: string;
  }>;

  // Recommended traits
  recommendedTraits: string[]; // Trait names

  // Stats
  statPriority: string[];

  // Leveling info
  levelingTips: string[];

  // Rotation basics
  rotationOverview: {
    title: string;
    priority: string[];
  };

  // Bronze spending
  bronzePriority: string[];

  // Build recommendations
  builds: {
    leveling?: string;
    openWorld?: string;
    mythicPlus?: string;
    raid?: string;
  };

  // Tier ranking
  groupTier?: 'S' | 'A' | 'B' | 'C';
  soloTier?: 'S' | 'A' | 'B' | 'C';
  heroicWorldTier?: boolean;
}

export const specGuides: SpecGuide[] = [
  // PALADIN SPECS
  {
    classId: 'paladin',
    specName: 'Holy',
    role: 'Healer',
    metaDescription: 'Complete Holy Paladin guide for Legion Remix. Learn the best Arcane artifact path, optimal talents, stat priorities, and leveling strategies to dominate as a healer in Legion Remix 2025.',

    bestArtifactPath: 'arcane',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Better for DPS-focused healing in dungeons' },
      { pathId: 'fel', reason: 'If playing more aggressively with damage' }
    ],

    recommendedTraits: ['Storm Surger', 'Terror from Below', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Critical Strike',
      'Haste',
      'Mastery',
      'Versatility (from Artifact traits only)'
    ],

    levelingTips: [
      'Start with Nature or Arcane path for survivability while learning',
      'Switch to Arcane path at max level for optimal healing output',
      'Use Heroic World Tier when healing in groups for 500% bonus rewards',
      'Prioritize intellect gear - always take highest item level',
      'Complete Infinite Research daily quests for Warband XP bonuses',
      'Instant queue times make dungeon farming extremely efficient for Bronze'
    ],

    rotationOverview: {
      title: 'Holy Paladin Healing Priority',
      priority: [
        'Holy Shock on cooldown (primary heal and Holy Power generator)',
        'Light of Dawn for AoE healing when 3+ allies need healing',
        'Word of Glory for single-target emergency heals',
        'Flash of Light as filler heal',
        'Beacon of Light on tank at all times',
        'Use Divine Protection and Lay on Hands for emergency situations'
      ]
    },

    bronzePriority: [
      '1. Upgrade Artifact Weapon with Bronze to unlock all trait paths',
      '2. Purchase highest item level gear from Bronze vendors',
      '3. Collect tier set pieces (Radiant Lightbringer Armor recommended)',
      '4. Buy Felscorched Charger mount at level 80 (FREE first unlock)',
      '5. Transmog sets and cosmetic rewards',
      '6. Housing decorations (Phase 5)'
    ],

    builds: {
      leveling: 'Focus on damage talents to quest faster while maintaining healing capability',
      openWorld: 'Balanced build with survivability and moderate damage output',
      mythicPlus: 'Maximum throughput healing with AoE talents for dungeon content',
      raid: 'Single-target and tank healing optimization with cooldown management'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: false
  },

  {
    classId: 'paladin',
    specName: 'Protection',
    role: 'Tank',
    metaDescription: 'Master Protection Paladin in Legion Remix with our comprehensive guide. Discover the best Fel artifact path, tanking talents, stat priorities, and strategies for dungeons, raids, and solo content.',

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Better for AoE threat generation in Mythic+' },
      { pathId: 'arcane', reason: 'Fun alternative with skill-based gameplay' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Strength',
      'Haste',
      'Mastery',
      'Versatility',
      'Critical Strike'
    ],

    levelingTips: [
      'Fel path provides best damage output for faster leveling',
      'Use Heroic World Tier for solo play - Protection can handle the difficulty',
      'Instant queue times make dungeon grinding incredibly efficient',
      'Always prioritize highest item level - survivability scales with gear',
      'Self-healing makes you nearly unkillable at max gear',
      'Great for farming Bronze through repeated dungeon runs'
    ],

    rotationOverview: {
      title: 'Protection Paladin Rotation',
      priority: [
        'Shield of the Righteous to maintain active mitigation',
        'Judgment on cooldown for Holy Power generation',
        'Blessed Hammer or Hammer of the Righteous for AoE threat',
        'Consecration to maintain ground AoE',
        'Avenger\'s Shield for ranged pull and interrupt',
        'Use cooldowns (Ardent Defender, Guardian of Ancient Kings) for heavy damage'
      ]
    },

    bronzePriority: [
      '1. Max out Artifact Weapon - essential for survivability and damage',
      '2. Acquire tier set bonuses for increased power',
      '3. Purchase high item level trinkets and jewelry',
      '4. Unlock Felscorched Charger at level 80',
      '5. Cosmetic rewards and transmog collections',
      '6. Alt character mount unlocks (20,000 Bronze each)'
    ],

    builds: {
      leveling: 'AoE damage focused with self-healing for efficient questing',
      openWorld: 'Balanced survivability and damage with Fel path for solo content',
      mythicPlus: 'Maximum threat generation and cooldown management for dungeons',
      raid: 'Single-target threat with defensive cooldown optimization'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },

  {
    classId: 'paladin',
    specName: 'Retribution',
    role: 'DPS',
    metaDescription: 'Comprehensive Retribution Paladin guide for Legion Remix. Learn the best Fel artifact path, top DPS talents, stat priorities, and dominate both solo and group content in Legion Remix.',

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Superior for heavy AoE and dungeon content' },
      { pathId: 'arcane', reason: 'Good for solo survivability while maintaining damage' },
      { pathId: 'nature', reason: 'Extra survivability for challenging solo content' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Strength',
      'Mastery',
      'Critical Strike',
      'Haste',
      'Versatility (from Artifact trait "Limits Unbound")'
    ],

    levelingTips: [
      'Fel path deals massive damage for fast leveling',
      'Can use Heroic World Tier with self-healing for 500% bonus rewards',
      'Divine Shield and Lay on Hands provide excellent "panic buttons"',
      'Blessing of Freedom allows you to ignore slows and roots',
      'Strong burst damage makes elite quest mobs easy',
      'Excellent solo spec - can handle difficult content alone'
    ],

    rotationOverview: {
      title: 'Retribution Paladin DPS Rotation',
      priority: [
        'Templars Verdict as Holy Power spender (3+ Holy Power)',
        'Crusader Strike on cooldown for Holy Power generation',
        'Judgment on cooldown - always keep debuff active on target',
        'Blade of Justice when available for Holy Power',
        'Wake of Ashes for burst AoE and Holy Power generation',
        'Divine Storm for AoE when 3+ targets',
        'Use Avenging Wrath on cooldown for maximum uptime'
      ]
    },

    bronzePriority: [
      '1. Artifact Weapon upgrades - critical for DPS scaling',
      '2. Tier set acquisition for major damage bonuses',
      '3. High item level weapons and trinkets',
      '4. Felscorched Charger mount (FREE at 80)',
      '5. Transmog sets - Retribution has amazing appearances',
      '6. Toys and collectibles'
    ],

    builds: {
      leveling: 'AoE damage with self-healing for efficient solo questing',
      openWorld: 'Balanced damage and utility for world content',
      mythicPlus: 'AoE cleave build with Storm path for dungeon efficiency',
      raid: 'Pure single-target damage with Fel path optimization'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },

  // ROGUE SPECS
  {
    classId: 'rogue',
    specName: 'Subtlety',
    role: 'DPS',
    metaDescription: 'Master Subtlety Rogue in Legion Remix with our detailed guide. Discover the best artifact paths, optimal talents, stat priorities, and strategies to maximize your damage and stealth gameplay.',

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Better for AoE-heavy content and Mythic+' },
      { pathId: 'nature', reason: 'Adds survivability for solo challenging content' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Mastery',
      'Critical Strike',
      'Versatility',
      'Haste'
    ],

    levelingTips: [
      'Stealth allows you to skip unnecessary mobs while questing',
      'Burst damage from Shadow Dance makes elites easy',
      'Cloak of Shadows provides immunity to magic effects',
      'Vanish serves as combat drop and emergency escape',
      'Shadowstep provides excellent mobility for questing',
      'High skill ceiling but extremely rewarding when played well'
    ],

    rotationOverview: {
      title: 'Subtlety Rogue DPS Priority',
      priority: [
        'Symbols of Death on cooldown for damage buff',
        'Shadow Dance windows - use Shadowstrike spam',
        'Eviscerate as finisher at 5+ combo points',
        'Backstab for combo point generation',
        'Shadow Blades for burst damage windows',
        'Shuriken Storm for AoE when 3+ targets',
        'Keep Nightblade DoT active on priority targets'
      ]
    },

    bronzePriority: [
      '1. Artifact Weapon - essential for combo point generation scaling',
      '2. Tier sets for major damage increases',
      '3. High item level daggers and trinkets',
      '4. Felscorched Shadeprowler mount at level 80',
      '5. Rogue-themed transmog sets',
      '6. Toys and utilities'
    ],

    builds: {
      leveling: 'Burst damage with stealth efficiency for fast questing',
      openWorld: 'Balanced damage with utility and mobility',
      mythicPlus: 'AoE burst with Storm path for dungeon content',
      raid: 'Pure single-target with Fel path optimization'
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: false
  },

  {
    classId: 'rogue',
    specName: 'Assassination',
    role: 'DPS',
    metaDescription: 'Complete Assassination Rogue guide for Legion Remix. Learn optimal artifact paths, poison builds, stat priorities, and strategies for maximizing DoT damage in all content.',

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'nature', reason: 'Synergizes well with damage over time playstyle' },
      { pathId: 'storm', reason: 'For AoE poison spreading in dungeons' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Mastery',
      'Critical Strike',
      'Versatility',
      'Haste'
    ],

    levelingTips: [
      'Apply poisons and bleeds, then let DoTs do the work',
      'Excellent for multi-target questing - spread poisons efficiently',
      'Stealth past unnecessary encounters',
      'Strong sustained damage for boss encounters',
      'Crimson Vial provides reliable self-healing',
      'Can maintain DPS while moving - great for mechanics'
    ],

    rotationOverview: {
      title: 'Assassination Rogue DPS Rotation',
      priority: [
        'Maintain Garrote and Rupture DoTs on all targets',
        'Envenom as finisher at 4-5 combo points',
        'Mutilate for combo point generation',
        'Fan of Knives for AoE combo point generation',
        'Vendetta on cooldown for burst windows',
        'Exsanguinate to amplify bleed damage',
        'Keep poisons active at all times'
      ]
    },

    bronzePriority: [
      '1. Artifact upgrades for poison and bleed scaling',
      '2. Tier set bonuses',
      '3. High item level daggers',
      '4. Felscorched Shadeprowler mount',
      '5. Transmog collections',
      '6. Quality of life items'
    ],

    builds: {
      leveling: 'Multi-DoT spread for efficient mob killing',
      openWorld: 'Sustained damage with mobility',
      mythicPlus: 'AoE poison spread optimization',
      raid: 'Single-target DoT maintenance and burst'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: false
  },

  {
    classId: 'rogue',
    specName: 'Outlaw',
    role: 'DPS',
    metaDescription: 'Outlaw Rogue Legion Remix guide covering the best artifact paths, Roll the Bones strategies, stat priorities, and tips for both solo and group pirate gameplay.',

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Excellent for Blade Flurry AoE in dungeons' },
      { pathId: 'arcane', reason: 'Fun gameplay with disc mechanics' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Versatility',
      'Critical Strike',
      'Haste',
      'Mastery'
    ],

    levelingTips: [
      'Roll the Bones RNG can be powerful or frustrating',
      'Blade Flurry makes AoE questing very efficient',
      'Grappling Hook provides unique mobility for terrain',
      'Between the Eyes stuns work great on quest mobs',
      'Riposte gives extra defensive utility',
      'Fun and flashy playstyle with pirate theme'
    ],

    rotationOverview: {
      title: 'Outlaw Rogue DPS Priority',
      priority: [
        'Roll the Bones for buff management (re-roll for True Bearing ideally)',
        'Between the Eyes at 5+ combo points during Adrenaline Rush',
        'Dispatch as finisher at 5+ combo points',
        'Sinister Strike for combo point generation',
        'Blade Flurry for AoE damage (2+ targets)',
        'Adrenaline Rush on cooldown for burst',
        'Killing Spree for additional burst damage'
      ]
    },

    bronzePriority: [
      '1. Artifact Weapon for combat dice improvements',
      '2. Tier sets',
      '3. Weapons and trinkets',
      '4. Felscorched Shadeprowler mount',
      '5. Pirate-themed transmogs',
      '6. Toys'
    ],

    builds: {
      leveling: 'AoE focused with Blade Flurry for mob packs',
      openWorld: 'Balanced with mobility talents',
      mythicPlus: 'AoE cleave optimization with Storm path',
      raid: 'Single-target with optimal Roll the Bones usage'
    },

    groupTier: 'B',
    soloTier: 'A',
    heroicWorldTier: false
  }
];

// Helper function to get spec guide
export function getSpecGuide(classId: string, specName: string): SpecGuide | undefined {
  return specGuides.find(
    guide => guide.classId === classId && guide.specName.toLowerCase() === specName.toLowerCase()
  );
}

// Helper to get all specs for a class
export function getClassSpecs(classId: string): SpecGuide[] {
  return specGuides.filter(guide => guide.classId === classId);
}
