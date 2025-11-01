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
  seoFocusKeyword?: string;
  seoSecondaryKeywords?: string[];
  seoTopics?: string[];
  seoSupportingConcepts?: string[];

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

  // Engagement
  engagementActions?: Array<{
    title: string;
    description: string;
    href: string;
    actionLabel: string;
  }>;
}

export const specGuides: SpecGuide[] = [
  // PALADIN SPECS
  {
    classId: 'paladin',
    specName: 'Holy',
    role: 'Healer',
    metaDescription: 'Holy Paladin Legion Remix guide covering the best Arcane artifact path, optimal talents, stat priorities, and leveling strategies—your quick Legion Remix Holy Paladin build overview and Legion Remix paladin guide starting point.',
    seoFocusKeyword: 'Holy Paladin Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix Holy Paladin guide',
      'Holy Paladin Legion Remix talents',
      'Legion Remix holy paladin build'
    ],
    seoTopics: [
      'raid healing rotations',
      'Arcane artifact route planning',
      'Bronze vendor triage',
      'Mythic+ sustain cooldowns'
    ],
    seoSupportingConcepts: [
      'Beacon of Light swap logic',
      'Aura Mastery coverage plans',
      'Infusion of Light proc usage',
      'Divine Toll opener alignment'
    ],

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
    engagementActions: [
      {
        title: 'Holy Paladin Raid Planner',
        description: 'Slot Aura Mastery, Avenging Crusader, and Blessing rotations into a Holy Paladin Legion Remix raid timeline before pull.',
        href: '/guides/raids',
        actionLabel: 'Build healing plan'
      },
      {
        title: 'Bronze Spending Matrix',
        description: 'Check which Legion Remix Holy Paladin trinkets, weapons, and tier slots deserve Bronze first each reset.',
        href: '/calculator',
        actionLabel: 'Rank upgrades'
      },
      {
        title: 'Daily Sustain Tracker',
        description: 'Log world quests, keystones, and Kirin Tor emissaries to keep Holy Paladin Legion Remix alts stocked on Infinite Knowledge.',
        href: '/guides/bronze-farming',
        actionLabel: 'Track runs'
      }
    ],

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: false
  },

  {
    classId: 'paladin',
    specName: 'Protection',
    role: 'Tank',
    metaDescription: 'Protection Paladin Legion Remix guide detailing the best Fel artifact path, tanking talents, stat priorities, and strategies for dungeons, raids, and solo content with a Legion Remix Prot Paladin guide focus.',
    seoFocusKeyword: 'Protection Paladin Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix Protection Paladin guide',
      'Legion Remix prot paladin build',
      'Protection Paladin Legion Remix talents'
    ],
    seoTopics: [
      'cooldown layering routes',
      'Fel artifact block timing',
      'Bronze defense investments',
      'Mythic+ threat planning'
    ],
    seoSupportingConcepts: [
      'Guardian of Ancient Kings sequencing',
      'Ardent Defender coverage calls',
      'Consecration uptime mapping',
      'Blessed Hammer snap threat setups'
    ],

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
    metaDescription: 'Retribution Paladin Legion Remix guide outlining the best Fel artifact path, top DPS talents, stat priorities, and ways to dominate both solo and group content—use this Legion Remix Paladin guide slice to plan your burst windows, Ret Paladin Legion Remix build, and ret pala Legion Remix Bronze priorities.',
    seoFocusKeyword: 'Retribution Paladin Legion Remix',
    seoSecondaryKeywords: [
      'Ret Paladin Legion Remix build',
      'Legion Remix Retribution Paladin talents',
      'Legion Remix ret paladin rotation'
    ],
    seoTopics: [
      'burst window management',
      'artifact Fel path routing',
      'Bronze budgeting cadence',
      'Heroic World Tier solo planning'
    ],
    seoSupportingConcepts: [
      'Divine Resonance timing',
      'Wake of Ashes setup sequencing',
      'Blessing of Freedom mobility plays',
      'Infinite Knowledge investment pacing'
    ],

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
      'Excellent solo spec - can handle difficult content alone',
      'Bookmark your ret paladin build Legion Remix template in the planner so you can swap talents quickly between raids'
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
    heroicWorldTier: true,
    engagementActions: [
      {
        title: 'Ret Paladin Burst Worksheet',
        description: 'Map Avenging Wrath, Execution Sentence, and Wake of Ashes inside a Retribution Paladin Legion Remix opener before raid night.',
        href: '/guides/raids',
        actionLabel: 'Plan burst phases'
      },
      {
        title: 'Bronze Shopping List',
        description: 'Stack the top Ret Paladin Legion Remix item upgrades and trinkets so you never guess where the next 30,000 Bronze goes.',
        href: '/calculator',
        actionLabel: 'Prioritize spending'
      },
      {
        title: 'Daily Route Tracker',
        description: 'Log Legion Remix world quests and invasion rotations to keep Retribution Paladin Legion Remix alts capped on Infinite Knowledge.',
        href: '/guides/bronze-farming',
        actionLabel: 'Track progress'
      }
    ]
  },

  // WARRIOR SPECS
  {
    classId: 'warrior',
    specName: 'Arms',
    role: 'DPS',
    metaDescription:
      'Arms Warrior Legion Remix guide covering Fel path burst windows, Infinite Knowledge priorities, Legion Remix arms warrior build planning, and optimal Bronze spending during The War Within 11.2.5—your WoW Legion Remix warrior build roadmap for Execute enjoyers.',
    seoFocusKeyword: 'Arms Warrior Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix arms warrior guide',
      'Arms Warrior Legion Remix build',
      'Legion Remix arms warrior talents'
    ],
    seoTopics: [
      'execute window alignment',
      'Fel artifact bleed routes',
      'Bronze upgrade sequencing',
      'Mythic+ cleave prep'
    ],
    seoSupportingConcepts: [
      'Colossus Smash timing maps',
      'Avatar and Bladestorm pairing',
      'Sweeping Strikes uptime planning',
      'Ignore Pain mitigation coverage'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds haste and cleave uptime for Mythic+ farming' },
      { pathId: 'nature', reason: 'Bolsters self-healing when leveling solo in Heroic World Tier' },
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: ['Strength', 'Critical Strike', 'Mastery', 'Haste', 'Versatility'],

    levelingTips: [
      'Stack Fel nodes early—Execute crits carry Phase 1 quest bosses.',
      'Use Leap + Heroic Throw to tag Bronze rares before other Timerunners.',
      'Storm path unlocks during Phase 2 for cleave-heavy Timeworn Keystone pushes.',
      'Bank Infinite Research quests and spend them before tackling +20 keys for extra ranks.',
      'Invest Bronze into a high ilvl two-hander and offensive trinkets first.',
    ],

    rotationOverview: {
      title: 'Arms Warrior Priority',
      priority: [
        'Keep Rend active and spend Mortal Strike on cooldown.',
        'Overpower to buff Mortal Strike; Execute overrides everything sub-35%.',
        'Bladestorm or Cleave during high-density Bronze farms.',
        'Align Avatar + Colossus Smash with Turbo Boost and Fel Twisted Crusade procs.',
        'Use Defensive Stance and Ignore Pain to survive Heroic World Tier spikes.',
      ],
    },

    bronzePriority: [
      '1. Weapon + trinket upgrades from the Infinite Bazaar',
      '2. Artifact Fel path completion followed by Storm path nodes',
      '3. Tier set bonuses that empower Execute uptime',
      '4. Felscorched Battlewolf unlock (free on first warrior)',
      '5. Cosmetics and ensemble purchases after Antorus progression',
    ],

    builds: {
      leveling: 'Fel burst build with Sweeping Strikes for questing and world bosses.',
      openWorld: 'Storm/Fel hybrid for Bronze orb loops and Strange Humming Crystal events.',
      mythicPlus: 'Storm path haste build with Bladestorm for +20 Timeworn keystones.',
      raid: 'Single-target Colossus Smash + Executioner’s Precision rotation.',
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true,
  },
  {
    classId: 'warrior',
    specName: 'Fury',
    role: 'DPS',
    metaDescription:
      'Fury Warrior Legion Remix guide with Storm path haste stacking, Rampage uptime tips, and Phase 4 Bronze priorities.',
    seoFocusKeyword: 'Fury Warrior Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix fury warrior guide',
      'Fury Warrior Legion Remix build',
      'Legion Remix fury warrior talents'
    ],
    seoTopics: [
      'Enrage upkeep planning',
      'Storm path haste routing',
      'Bronze weapon investment order',
      'Timeworn keystone burst prep'
    ],
    seoSupportingConcepts: [
      'Recklessness sync charts',
      'Odyn\'s Fury cleave cycles',
      'Bloodthirst healing cadence',
      'Raging Blow priority notes'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds Twisted Crusade burst for raid bosses' },
      { pathId: 'nature', reason: 'Improves sustain while duo-leveling or soloing rares' },
    ],

    recommendedTraits: ['Storm Surger', 'Touch of Malice', 'Terror from Below'],

    statPriority: ['Strength', 'Haste', 'Critical Strike', 'Mastery', 'Versatility'],

    levelingTips: [
      'Upgrade both weapons immediately—weapon damage drives Rampage output.',
      'Storm path Tempest Wrath lines up perfectly with Recklessness for keystone pulls.',
      'Use Enraged Regeneration plus Bloodthirst to stay alive in Heroic World Tier.',
      'Keep Infinite Knowledge ranks flowing so your artifact fuels constant Enrage.',
      'Spend Bronze on trinkets that trigger haste or Rage to extend burst windows.',
    ],

    rotationOverview: {
      title: 'Fury Warrior Priority',
      priority: [
        'Rampage at 100 Rage to maintain Enrage.',
        'Press Bloodthirst on cooldown for Rage, healing, and Enrage uptime.',
        'Use Raging Blow/Crushing Blow and Odyn’s Fury while Enraged.',
        'Whirlwind before AoE finishers to cleave.',
        'Time Recklessness with Tempest Wrath and Turbo Boost periods.',
      ],
    },

    bronzePriority: [
      '1. Dual-wield ilvl upgrades from the Bazaar',
      '2. Finish Storm path, then Fel for boss burst',
      '3. Secure tier set pieces that extend Enrage uptime',
      '4. Unlock Felscorched Battlewolf for account collection',
      '5. Cosmetics and toys once weapons are capped',
    ],

    builds: {
      leveling: 'Storm haste stack with Onslaught talents for nonstop Rampage.',
      openWorld: 'Fel hybrid to boost single-target rares while keeping AoE intact.',
      mythicPlus: 'Whirlwind-centric build aligned with Turbo Boost keystone weeks.',
      raid: 'Cold Steel, Hot Blood combos for maximal single-target damage.',
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: true,
  },
  {
    classId: 'warrior',
    specName: 'Protection',
    role: 'Tank',
    metaDescription:
      'Protection Warrior Legion Remix guide explaining Storm bulwark mitigation, Time Crisis readiness, and Bronze upgrade order in the 11.2.5 event.',
    seoFocusKeyword: 'Protection Warrior Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix protection warrior guide',
      'Prot Warrior Legion Remix build',
      'Protection Warrior Legion Remix talents'
    ],
    seoTopics: [
      'block uptime planning',
      'Tempest Bulwark routing',
      'Bronze mitigation upgrades',
      'Mythic+ crowd control coverage'
    ],
    seoSupportingConcepts: [
      'Shield Wall rotation mapping',
      'Rallying Cry timing calls',
      'Spell Block usage notes',
      'Thunder Clap threat setups'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds needed damage for small-group Bronze farming' },
      { pathId: 'arcane', reason: 'Layered shielding for high-end Antorus progression' },
    ],

    recommendedTraits: ['Touch of Malice', 'Storm Surger', 'Volatile Magics'],

    statPriority: ['Strength', 'Haste', 'Mastery', 'Versatility', 'Critical Strike'],

    levelingTips: [
      'Maintain Shield Block uptime—Storm path converts mitigation into Tempest shields.',
      'Heroic Throw + Thunder Clap let you gather Bronze packs quickly while tanking.',
      'Demoralizing Shout and Spell Block counter Empowered affixes like Imperious.',
      'Invest Bronze into shields and defensive trinkets before cosmetics.',
      'Swap to Fel nodes in Phase 4 for extra damage when Antorus opens.',
    ],

    rotationOverview: {
      title: 'Protection Warrior Rotation',
      priority: [
        'Shield Slam and Revenge on cooldown to fuel Rage.',
        'Keep Shield Block or Spell Block active for incoming spikes.',
        'Use Ignore Pain with excess Rage for smoothing.',
        'Thunder Clap and Shockwave control large Bronze pulls.',
        'Rotate Last Stand, Shield Wall, and Bolster for Time Crisis objectives.',
      ],
    },

    bronzePriority: [
      '1. Shield + weapon upgrades from Infinite Bazaar vendors',
      '2. Finish Storm Tempest Bulwark nodes before Fel',
      '3. Acquire defensive trinkets and tier bonuses',
      '4. Unlock the Felscorched Battlewolf after level 80',
      '5. Invest in cosmetics and housing once gear is settled',
    ],

    builds: {
      leveling: 'Storm-centric mitigation build for gigantic open-world pulls.',
      openWorld: 'Fel hybrid for solo Bronze loops where damage matters.',
      mythicPlus: 'Bolster + Rend combination for +20 keystones and beyond.',
      raid: 'Arcane shielding build for progression on high magic bosses.',
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true,
  },

  // WARLOCK SPECS
  {
    classId: 'warlock',
    specName: 'Affliction',
    role: 'DPS',
    metaDescription: 'Affliction Warlock Legion Remix guide focusing on multi-target DoTs, the best Storm artifact path, stat priorities, and tips to excel in The War Within 11.2.5 event—an all-in-one warlock remix guide for DoT lovers, WoW Legion Remix warlock rotations, and players seeking a WoW Legion Remix warlock guide.',
    seoFocusKeyword: 'Affliction Warlock Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix affliction warlock guide',
      'Affliction Warlock Legion Remix build',
      'Legion Remix affliction warlock talents'
    ],
    seoTopics: [
      'multi-DoT ramp planning',
      'Storm artifact soul routing',
      'Bronze trinket allocation',
      'Mythic+ shard economy'
    ],
    seoSupportingConcepts: [
      'Malefic Rapture timing charts',
      'Haunt and Darkglare window setup',
      'Soul Rot sustain loops',
      'Seed of Corruption spread control'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Pairs huge DoT ramps with Twisted Crusade burn phases' },
      { pathId: 'nature', reason: 'Adds sustain and crowd control while leveling solo' }
    ],

    recommendedTraits: ['Volatile Magics', 'Terror from Below', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Spread Agony and Corruption on every pull to keep Soul Shard income flowing',
      'Use Phantom Singularity or Vile Taint to delete stacked Legion Remix packs',
      'Drain Life spam with multiple DoTs active provides incredible self-healing',
      'Maintain Unstable Affliction on priority targets for burst windows',
      'Take Heroic World Tier with a tank pet for 500% XP and Bronze bonuses',
      'Prioritize relics with haste to smooth DoT refresh and Soul Shard spenders'
    ],

    rotationOverview: {
      title: 'Affliction Warlock Legion Remix Priority',
      priority: [
        'Keep Agony, Corruption, and Unstable Affliction active on all targets',
        'Seed of Corruption for 3+ targets to spread Corruption instantly',
        'Refresh Haunt or Soul Rot during burst windows',
        'Malefic Rapture as primary Soul Shard spender',
        'Maintain Phantom Singularity/Vile Taint cooldown usage',
        'Drain Soul or Shadow Bolt as filler when nothing else is available'
      ]
    },

    bronzePriority: [
      '1. Upgrade Artifact Weapon to unlock Tempest Wrath haste scaling',
      '2. Buy high item level intellect gear and trinkets',
      '3. Secure tier set pieces for empowered DoT snapshots',
      '4. Purchase the Felscorched Dreadsteed mount at level 80 (FREE first unlock)',
      '5. Stockpile Bronze for class transmog appearances',
      '6. Pick up toys and cosmetic spell effects for alt characters'
    ],

    builds: {
      leveling: 'Storm path build that front-loads DoTs with big Phantom Singularity detonations',
      openWorld: 'Sustain-heavy build with Drain Life talents and a Voidwalker tank',
      mythicPlus: 'Seed of Corruption spam with Storm path haste stacking',
      raid: 'Single-target Soul Rot and Malefic Rapture optimization'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },

  {
    classId: 'warlock',
    specName: 'Demonology',
   role: 'DPS',
    metaDescription: 'Demonology Warlock Legion Remix guide highlighting the best Fel artifact path, demonic army builds, stat priorities, and Bronze spending for Patch 11.2.5, rounding out our Legion Remix warlock build playbook—use this wow legion remix warlock guide to script every tyrant window.',
    seoFocusKeyword: 'Demonology Warlock Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix demonology warlock guide',
      'Demonology Warlock Legion Remix build',
      'Legion Remix demonology warlock talents'
    ],
    seoTopics: [
      'Demonic Tyrant window scripting',
      'Fel artifact demon routing',
      'Bronze pet upgrade planning',
      'Mythic+ Implosion prep'
    ],
    seoSupportingConcepts: [
      'Dreadstalker portal timing',
      'Nether Portal shard budgeting',
      'Grimoire Felguard usage notes',
      'Implosion detonation spacing'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Storm path supercharges Implosion cleave in dungeons' },
      { pathId: 'arcane', reason: 'Arcane path rewards precise Tyrant setups with defensive shielding' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Intellect',
      'Mastery',
      'Haste',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Summon Vilefiend and Grimoire: Felguard on cooldown for large burst packs',
      'Implosion your Wild Imps at 4+ stacks to vaporize Remix trash mobs',
      'Use Felguard\'s Axe Toss to interrupt dangerous legion casters',
      'Demonic Consumption Tyrant builds obliterate Timewalking bosses',
      'Queue Heroic World Tier dungeons for instant Bronze farming',
      'Prioritize mastery gear to scale pet damage and Tyrant windows'
    ],

    rotationOverview: {
      title: 'Demonology Warlock Legion Remix Priority',
      priority: [
        'Maintain Doom Brand with Hand of Gul\'dan casts',
        'Summon Vilefiend and Grimoire: Felguard before Tyrant',
        'Dreadstalkers on cooldown for Demonic Core procs',
        'Implosion when Wild Imps reach 4+ stacks or mobs are about to die',
        'Summon Demonic Tyrant aligned with Twisted Crusade burn windows',
        'Shadow Bolt or Demonbolt as filler to generate shards'
      ]
    },

    bronzePriority: [
      '1. Max the Fel artifact path to supercharge Tyrant damage',
      '2. Acquire high item level weapons and mastery trinkets',
      '3. Complete tier sets for demon army amplification',
      '4. Unlock the Felscorched Dreadsteed at level 80 for free',
      '5. Purchase demonic-themed transmog ensembles',
      '6. Bank Bronze for alt unlocks and housing cosmetics'
    ],

    builds: {
      leveling: 'Fel path with Implosion talents for explosive questing',
      openWorld: 'Balanced build with survivability and demon sustain',
      mythicPlus: 'Storm path cleave build focused on Implosion and AoE Tyrant',
      raid: 'Single-target Tyrant build with precise cooldown stacking'
    },

    groupTier: 'S',
    soloTier: 'A',
    heroicWorldTier: true
  },

  {
    classId: 'warlock',
    specName: 'Destruction',
    role: 'DPS',
    metaDescription: 'Destruction Warlock Legion Remix guide updated for Patch 11.2.5 covering the best Fel artifact path, Chaos Bolt builds, stat priorities, and Bronze spending tips—the go-to Legion Remix warlock talents snapshot for turret players, with Legion Remix destruction warlock combos, destro warlock Legion Remix tips, legion remix destro warlock burst plans, legion remix destro lock shopping routes, and destro lock Legion Remix rotation callouts.',
    seoFocusKeyword: 'Destruction Warlock Legion Remix',
    seoSecondaryKeywords: [
      'Destro Warlock Legion Remix'
    ],
    seoTopics: [
      'Chaos Bolt rotation planning',
      'Bronze vendor targeting',
      'Mythic+ Infernal sequencing',
      'Raid Havoc cooldown mapping'
    ],
    seoSupportingConcepts: [
      'Chaos Bolt crit windows',
      'Rain of Fire funnels',
      'Heroic World Tier survivability'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Storm path excels at Inferno and Rain of Fire dungeon pulls' },
      { pathId: 'arcane', reason: 'Arcane path shields turret casting during heavy mechanics' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Intellect',
      'Haste',
      'Critical Strike',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Use Cataclysm to apply Immolate to entire packs before channeling Rain of Fire',
      'Backdraft from Conflagrate keeps Chaos Bolt casts fast even while soloing',
      'Havoc + Chaos Bolt deletes Remix rares during split phases',
      'Carry healthstones and make use of Soul Leech for passive absorbs',
      'Heroic World Tier dungeons are efficient thanks to massive AoE potential',
      'Prioritize haste gear to smooth shard generation and channel times'
    ],

    rotationOverview: {
      title: 'Destruction Warlock Legion Remix Priority',
      priority: [
        'Keep Immolate active on all primary targets',
        'Spend Soul Shards on Chaos Bolt (single target) or Rain of Fire (AoE)',
        'Conflagrate on cooldown to generate Backdraft charges',
        'Incinerate as filler to build shards when nothing else is available',
        'Summon Infernal to align with Fel path burst windows',
        'Use Havoc to duplicate Chaos Bolts on critical priority mobs'
      ]
    },

    bronzePriority: [
      '1. Fully upgrade the Fel artifact path for Twisted Crusade crit chains',
      '2. Purchase high item level weapons and haste trinkets',
      '3. Target tier set bonuses that empower Chaos Bolt damage',
      '4. Claim the Felscorched Dreadsteed mount for free at level 80',
      '5. Invest Bronze into Legion spell effect transmogs',
      '6. Save remaining Bronze for alt gearing or housing décor'
    ],

    builds: {
      leveling: 'Fel path cleave build with Inferno and Cataclysm talents',
      openWorld: 'Sustained build leveraging Soul Leech and Rain of Fire',
      mythicPlus: 'Storm path AoE spam with frequent Infernal resets',
      raid: 'Single-target Chaos Bolt turret with Arcane defensive support'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true,
    engagementActions: [
      {
        title: 'Chaos Bolt Burst Planner',
        description: 'Sketch a Destruction Warlock Legion Remix opener that aligns Havoc, Infernal, and potions before raid pull.',
        href: '/guides/lock-stock-two-smoking-goblins',
        actionLabel: 'View burst routes'
      },
      {
        title: 'Bronze Budget Worksheet',
        description: 'Project Destruction Warlock Legion Remix Bronze costs for trinkets, relics, and Fel path upgrades.',
        href: '/calculator',
        actionLabel: 'Open calculator'
      },
      {
        title: 'Daily Farming Tracker',
        description: 'Log Destruction Warlock Legion Remix world quests and keystones to keep Infinite Knowledge flowing.',
        href: '/guides/bronze-farming',
        actionLabel: 'Start tracking'
      }
    ]
  },

  // DEMON HUNTER SPECS
  {
    classId: 'demon-hunter',
    specName: 'Havoc',
    role: 'DPS',
    metaDescription: 'Havoc Demon Hunter Legion Remix guide covering Fel path burst windows, Infinite Power farming, and stat priorities for the 2025 Timerunning season.',
    seoFocusKeyword: 'Havoc Demon Hunter Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix havoc demon hunter guide',
      'Havoc Demon Hunter Legion Remix build',
      'Legion Remix havoc talents'
    ],
    seoTopics: [
      'Momentum rotation planning',
      'Fel artifact burst routing',
      'Bronze warglaive upgrades',
      'Mythic+ Eye Beam scheduling'
    ],
    seoSupportingConcepts: [
      'Metamorphosis timing charts',
      'Momentum window positioning',
      'Fury economy tracking',
      'Chaos Brand uptime management'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Storm path supercharges Eye Beam cleave during dungeon spam' },
      { pathId: 'arcane', reason: 'Arcane path shields Fel Barrage channels in high damage fights' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Haste',
      'Critical Strike',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Chain Fel Rush and Vengeful Retreat to stay permanently in motion between Legion Remix objectives.',
      'Meta + Eye Beam melts empowered packs—line it up with Legion Remix infinite power farm routes.',
      'Use Blur and Darkness to cover Heroic World Tier pulls while you learn mechanics.',
      'Slot Touch of the Magi trinkets for extra burst in Legion Remix Demon Hunter guide dungeon runs.',
      'Practice double jump glides through Suramar rooftops to tag Challiane Vineyards rares quickly.',
      'Spend early Bronze on weapon upgrades; Havoc damage scales dramatically with item level.'
    ],

    rotationOverview: {
      title: 'Havoc Demon Hunter Legion Remix Priority',
      priority: [
        'Keep Immolation Aura on cooldown for Fury generation.',
        'Cast Eye Beam when 2+ targets are up or during Metamorphosis for Chaos Brand uptime.',
        'Dump Fury with Chaos Strike (single target) or Blade Dance (AoE).',
        'Use Fel Rush offensively when Momentum is talented.',
        'Activate Metamorphosis on cooldown for burst windows tied to Fel artifact procs.',
        'Throw Glaive or Demon\'s Bite as filler when low on Fury.'
      ]
    },

    bronzePriority: [
      '1. Upgrade Fel artifact path to unlock Twisted Crusade and crit synergy.',
      '2. Purchase high item level warglaives and haste trinkets.',
      '3. Secure tier set bonuses for Momentum and Eye Beam amplifiers.',
      '4. Unlock the Felscorched Slayer mount at level 80 (free first claim).',
      '5. Invest Bronze into Legion Remix Demon Hunter guide cosmetics like the Felstalker set.',
      '6. Save 10,000 Bronze for Torn Invitation week to snag the fox mount variant.'
    ],

    builds: {
      leveling: 'Fel path Momentum build with Fel Rush resets for open world speed.',
      openWorld: 'Sustained build mixing Demonic and Glaive Tempest talents.',
      mythicPlus: 'Storm path Eye Beam spam for stacked dungeon pulls.',
      raid: 'Single-target Chaos Strike focus with Arcane shielding for survivability.'
    },

    groupTier: 'S',
    soloTier: 'A',
    heroicWorldTier: true
  },

  {
    classId: 'demon-hunter',
    specName: 'Vengeance',
    role: 'Tank',
    metaDescription: 'Vengeance Demon Hunter Legion Remix guide detailing Fel path tank builds, soul fragment management, and Bronze priorities for Timeworn keystones.',
    seoFocusKeyword: 'Vengeance Demon Hunter Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix vengeance demon hunter guide',
      'Vengeance Demon Hunter Legion Remix build',
      'Legion Remix vengeance DH talents'
    ],
    seoTopics: [
      'soul fragment economy',
      'Fel artifact mitigation routing',
      'Bronze defensive investments',
      'Mythic+ sigil planning'
    ],
    seoSupportingConcepts: [
      'Spirit Bomb uptime tracking',
      'Fiery Brand rotation mapping',
      'Infernal Strike pathing notes',
      'Metamorphosis cooldown coverage'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'nature', reason: 'Nature path adds passive healing for aggressive solo play' },
      { pathId: 'storm', reason: 'Storm path ramps Infernal Strike AoE in Mythic+ cleave' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Haste',
      'Versatility',
      'Mastery',
      'Critical Strike'
    ],

    levelingTips: [
      'Spam Infernal Strike to tag packs before DPS arrive; momentum keeps Bronze per hour high.',
      'Craft Legion Healthstone bundles so vengeance DH legion remix dungeon runs stay self-sufficient.',
      'Use Spirit Bomb to consume soul fragments and maintain 20% leech uptime.',
      'Rotate Fiery Brand and Demon Spikes to survive Heroic World Tier Time Crisis attempts.',
      'Pick up the Arcway attunement early—its tight corridors favor Sigil of Silence stun locks.',
      'Spend Bronze on trinkets with on-use shields; they stack with Metamorphosis for boss spikes.'
    ],

    rotationOverview: {
      title: 'Vengeance Demon Hunter Legion Remix Priority',
      priority: [
        'Keep Demon Spikes active during physical burst windows.',
        'Apply Fiery Brand on cooldown to the highest damage target.',
        'Generate fragments with Felblade, Immolation Aura, and Shear/Fracture.',
        'Consume fragments with Spirit Bomb for healing and damage.',
        'Use Sigil of Flame on cooldown for AoE threat.',
        'Metamorphosis or Fel Devastation as major cooldowns for lethal spikes.'
      ]
    },

    bronzePriority: [
      '1. Max out the Fel artifact path for reflection damage and leech.',
      '2. Purchase high item level shields and trinkets with defensive procs.',
      '3. Buy tier set pieces that extend Fiery Brand uptime.',
      '4. Unlock the Felscorched Slayer mount at 80 (free first unlock).',
      '5. Invest in Legion Remix talent build tomes to swap between raid and Mythic+ setups.',
      '6. Stock Strange Humming Crystals to pair with Legion Remix infinite power farm routes.'
    ],

    builds: {
      leveling: 'Fel path with Spirit Bomb focus for massive self-healing.',
      openWorld: 'Nature path sustain build when solo farming quests.',
      mythicPlus: 'Storm path cleave with Infernal Strike and Sigil management.',
      raid: 'Fel path mitigation with Last Resort and defensive trinkets.'
    },

    groupTier: 'S',
    soloTier: 'S',
    heroicWorldTier: true
  },

  // ROGUE SPECS
  {
    classId: 'rogue',
    specName: 'Subtlety',
    role: 'DPS',
    metaDescription: 'Master Subtlety Rogue in Legion Remix with our detailed guide. Discover the best artifact paths, optimal talents, stat priorities, Legion Remix rogue build notes, and strategies to maximize your damage and stealth gameplay—perfect for any sub rogue legion remix player.',
    seoFocusKeyword: 'Subtlety Rogue Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix subtlety rogue guide',
      'Subtlety Rogue Legion Remix build',
      'Legion Remix sub rogue talents'
    ],
    seoTopics: [
      'Shadow Dance window planning',
      'Fel artifact stealth routing',
      'Bronze dagger upgrades',
      'Mythic+ priority target deletion'
    ],
    seoSupportingConcepts: [
      'Symbols of Death timing',
      'Secret Technique burst scripts',
      'Shadowstrike opener notes',
      'Shuriken Tornado funnel control'
    ],

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
    seoFocusKeyword: 'Assassination Rogue Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix assassination rogue guide',
      'Assassination Rogue Legion Remix build',
      'Legion Remix assassination rogue talents'
    ],
    seoTopics: [
      'poison and bleed upkeep',
      'Fel artifact rupture routing',
      'Bronze dagger acquisition',
      'Mythic+ poison spread planning'
    ],
    seoSupportingConcepts: [
      'Vendetta and Kingsbane timing',
      'Garrote Silent Storm opener notes',
      'Rupture pandemic windows',
      'Crimson Tempest funnel strategy'
    ],

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
    seoFocusKeyword: 'Outlaw Rogue Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix outlaw rogue guide',
      'Outlaw Rogue Legion Remix build',
      'Legion Remix outlaw talents'
    ],
    seoTopics: [
      'Roll the Bones buff management',
      'Fel artifact broadsides routing',
      'Bronze weapon upgrade path',
      'Mythic+ Blade Flurry planning'
    ],
    seoSupportingConcepts: [
      'Between the Eyes crit windows',
      'Adrenaline Rush uptime tracking',
      'Grappling Hook pathing notes',
      'Blade Flurry cleave spacing'
    ],

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
  },

  // HUNTER SPECS
  {
    classId: 'hunter',
    specName: 'Beast Mastery',
    role: 'DPS',
    metaDescription: 'Beast Mastery Hunter Legion Remix guide detailing Storm path pet synergies, Legion Remix BM hunter stat priority, Bronze spending, and WoW Legion Remix hunter build tips.',
    seoFocusKeyword: 'Beast Mastery Hunter Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix beast mastery hunter guide',
      'Beast Mastery Hunter Legion Remix build',
      'Legion Remix BM hunter talents'
    ],
    seoTopics: [
      'pet command rotation planning',
      'Storm artifact Beast Cleave routing',
      'Bronze stable upgrades',
      'Mythic+ ranged AoE prep'
    ],
    seoSupportingConcepts: [
      'Bestial Wrath sync mapping',
      'Frenzy stack maintenance notes',
      'Kill Command pathing tips',
      'Barbed Shot focus management'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds burst for boss burn phases and empowered rares' },
      { pathId: 'nature', reason: 'Extra survivability for soloing Heroic World Tier during leveling' }
    ],

    recommendedTraits: ['Touch of Malice', 'Storm Surger', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Mastery',
      'Critical Strike',
      'Haste',
      'Versatility'
    ],

    levelingTips: [
      'Keep Beast Cleave active—Storm path haste lets pets melt packs during bronze farming.',
      'Toggle on Heroic World Tier with a tank pet to farm Strange Humming Crystals safely.',
      'Grab the Stalker hero talents for passive movement speed while tagging rares.',
      'Use your Legion Remix reward tracker to plan pet tome purchases before Infinite Echoes.',
      'Position pets ahead of you to tag barrels during Lock, Stock, and Two Smoking Goblins.'
    ],

    rotationOverview: {
      title: 'Beast Mastery Legion Remix Priority',
      priority: [
        'Maintain Frenzy stacks with Kill Command on cooldown.',
        'Use Barbed Shot to refresh Frenzy and keep focus high.',
        'Bestial Wrath on cooldown; line it up with Tempest Wrath for huge AoE.',
        'Cleave with Multi-Shot to keep Beast Cleave active on 2+ targets.',
        'Dump focus with Cobra Shot when everything else is on cooldown.'
      ]
    },

    bronzePriority: [
      '1. Upgrade pet tomes and ranged weapons at the Infinite Bazaar.',
      '2. Finish the Storm path before swapping to Fel for raid burst.',
      '3. Purchase trinkets that proc haste or agility for sustained cleave.',
      '4. Unlock the Felscorched Wolfhawk (free for your first hunter, 20,000 Bronze for alts).',
      '5. Grab cosmetic quivers and ensembles once you cap Infinite Knowledge.'
    ],

    builds: {
      leveling: 'Beast Cleave spam with tank pets and passive focus talents.',
      openWorld: 'Storm/Fel hybrid to bounce between large pulls and single-target rares.',
      mythicPlus: 'Cleave-focused build stacking Beast Cleave uptime and Storm path haste.',
      raid: 'Single-target bestial fury with Fel path for on-demand burst.'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },
  {
    classId: 'hunter',
    specName: 'Marksmanship',
    role: 'DPS',
    metaDescription: 'Marksmanship Hunter Legion Remix guide featuring Arcane path volley builds, WoW Legion Remix hunter rotations, and Bronze planning for precision snipers.',
    seoFocusKeyword: 'Marksmanship Hunter Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix marksmanship hunter guide',
      'Marksmanship Hunter Legion Remix build',
      'Legion Remix MM hunter talents'
    ],
    seoTopics: [
      'Aimed Shot volley planning',
      'Arcane artifact precision routing',
      'Bronze bow upgrades',
      'Mythic+ priority burst windows'
    ],
    seoSupportingConcepts: [
      'Trueshot timing charts',
      'Rapid Fire focus recovery notes',
      'Precise Shots weaving tips',
      'Volley placement cues'
    ],

    bestArtifactPath: 'arcane',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds cleave haste for Timeworn keystone dungeons' },
      { pathId: 'fel', reason: 'Burst windows for heroic raid bosses and empowered rares' }
    ],

    recommendedTraits: ['Volatile Magics', 'Terror from Below', 'Touch of Malice'],

    statPriority: [
      'Agility',
      'Critical Strike',
      'Mastery',
      'Haste',
      'Versatility'
    ],

    levelingTips: [
      'Leverage Double Tap into Volley to instantly clear bronze orb packs.',
      'Arcane path shields prevent one-shots while standing still for Aimed Shot.',
      'Keep a cleave pet with Growl off for extra tagging when solo farming.',
      'Use the Legion Remix bronze calculator to decide when to buy weapon upgrades versus trinkets.',
      'Macro Feign Death to drop threat during Heroic World Tier pulls.'
    ],

    rotationOverview: {
      title: 'Marksmanship Priority',
      priority: [
        'Maintain Hunter’s Mark on your kill target.',
        'Aimed Shot with Precise Shots buff for heavy hits.',
        'Rapid Fire on cooldown (try to pair with Trueshot).',
        'Arcane Shot or Multi-Shot to trigger Precise Shots for cleave.',
        'Volley before large pulls to front-load AoE damage.'
      ]
    },

    bronzePriority: [
      '1. Secure a high item level bow and agility trinkets.',
      '2. Unlock Arcane path shielding for safer stationary casts.',
      '3. Purchase the Legion Remix ranger cosmetic quivers early—they sell out fast on rotation.',
      '4. Stock Torn Invitations during A Noble Event weekends for fox mount cosmetics.',
      '5. Finish Storm path nodes if Mythic+ is your main Bronze route.'
    ],

    builds: {
      leveling: 'Volley cleave with Steady Focus for endless focus regeneration.',
      openWorld: 'Arcane shielding combined with Trick Shots for big pulls.',
      mythicPlus: 'Storm path haste plus Volley/Explosive Shot for stacked packs.',
      raid: 'Fel-enhanced Trueshot burn for priority targets and boss phases.'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'hunter',
    specName: 'Survival',
    role: 'DPS',
    metaDescription: 'Survival Hunter Legion Remix guide outlining Fel path melee burst, Legion Remix survival hunter builds, stat priorities, and Bronze purchases.',
    seoFocusKeyword: 'Survival Hunter Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix survival hunter guide',
      'Survival Hunter Legion Remix build',
      'Legion Remix survival hunter talents'
    ],
    seoTopics: [
      'melee spear burst planning',
      'Fel artifact bomb routing',
      'Bronze melee weapon upgrades',
      'Mythic+ trap control prep'
    ],
    seoSupportingConcepts: [
      'Coordinated Assault timing maps',
      'Wildfire Bomb rotation sequencing',
      'Spearhead cleave notes',
      'Harpoon gap-closer planning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Improves cleave uptime for dungeon speed runs' },
      { pathId: 'nature', reason: 'Adds sustain while leveling or duo farming' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Storm Surger'],

    statPriority: [
      'Agility',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Explosive Shot + Butchery deletes empowered packs during Bronze runs.',
      'Use Harpoon to stick to target dummies when practicing Momentum flows.',
      'Drop Tar Trap under Storm path Tempest Wrath for maximum control.',
      'Use Legion Remix XP farm circuits in Highmountain; traps keep mobs rooted.',
      'Swap to a ferocity pet for leech during solo Heroic World Tier pulls.'
    ],

    rotationOverview: {
      title: 'Survival Priority',
      priority: [
        'Keep Serpent Sting active on your target.',
        'Kill Command on cooldown to trigger Wildfire Infusion effects.',
        'Wildfire Bomb whenever available; try to line up with adds.',
        'Butchery or Carve for AoE to reset Wildfire Bomb.',
        'Use Mongoose Bite with full stacks during Fury of the Eagle windows.'
      ]
    },

    bronzePriority: [
      '1. Unlock Fel path nodes for Twisted Crusade burst.',
      '2. Invest Bronze into dual-wield weapon upgrades ASAP—melee scales hard with item level.',
      '3. Buy on-use trinkets that buff agility or haste for mini burst phases.',
      '4. Grab class transmogs like the huntress ensemble once core gear is secured.',
      '5. Save Bronze for the fox mount if you plan to run Lock, Stock, and Two Smoking Goblins weekly.'
    ],

    builds: {
      leveling: 'Fel path momentum build with sustained Wildfire Bomb resets.',
      openWorld: 'Nature hybrid for extra healing plus crowd control traps.',
      mythicPlus: 'Storm path cleave with Carve/Butchery bleed extensions.',
      raid: 'Fel burst priority with Mongoose Fury windows on bosses.'
    },

    groupTier: 'B',
    soloTier: 'A',
    heroicWorldTier: true
  },

  // MAGE SPECS
  {
    classId: 'mage',
    specName: 'Arcane',
    role: 'DPS',
    metaDescription: 'Arcane Mage Legion Remix guide with Arcane path loops, Legion Remix mage stat priority, WoW Legion Remix Arcane build notes, and Bronze goals.',
    seoFocusKeyword: 'Arcane Mage Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix arcane mage guide',
      'Arcane Mage Legion Remix build',
      'Legion Remix arcane mage talents'
    ],
    seoTopics: [
      'Arcane Surge burn planning',
      'Arcane artifact mana routing',
      'Bronze tome investments',
      'Mythic+ burst windows'
    ],
    seoSupportingConcepts: [
      'Arcane Power and Rune of Power stacking',
      'Presence of Mind burn sequencing',
      'Arcane Orb charge planning',
      'Evocation mana reset timing'
    ],

    bestArtifactPath: 'arcane',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds on-demand burst for Time Crisis and raid burn phases' },
      { pathId: 'storm', reason: 'Improves AoE cleave for dungeon speed runs' }
    ],

    recommendedTraits: ['Volatile Magics', 'Touch of Malice', 'Storm Surger'],

    statPriority: [
      'Intellect',
      'Mastery',
      'Critical Strike',
      'Haste',
      'Versatility'
    ],

    levelingTips: [
      'Use Naran’s Everdisc to bank charges, then burn bosses with Arcane Surge.',
      'Always plant Rune of Power before spamming Arcane Blast on empowered targets.',
      'Stack Infinite Knowledge ranks early so mana management feels forgiving.',
      'Carry Invisibility potions to skip trash during Legion Remix XP farm routes.',
      'Add Torn Invitation weekends to your Legion Remix website calendar for easy Bronze.'
    ],

    rotationOverview: {
      title: 'Arcane Mage Priority',
      priority: [
        'Arcane Surge + Radiant Spark before burn windows.',
        'Arcane Blast to four Arcane Charges.',
        'Arcane Barrage to drop stacks when mana dips below 50%.',
        'Touch of the Magi on cooldown and during AoE pulls.',
        'Use Evocation with Slipstream to refuel and keep damage rolling.'
      ]
    },

    bronzePriority: [
      '1. Upgrade weapon and off-hand first—spell power drives all damage.',
      '2. Complete Arcane path nodes for Everdisc shields and haste.',
      '3. Buy trinkets that grant intellect on use to align with Arcane Surge.',
      '4. Collect caster ensembles once Infinite Knowledge caps for Bronze refunds.',
      '5. Keep spare Bronze for housing decor during Infinite Echoes if cosmetics matter.'
    ],

    builds: {
      leveling: 'Arcane Harmony stacking with Arcane Echo for bursty questing.',
      openWorld: 'Arcane Aegis shielding build with Slipstream for mobile kiting.',
      mythicPlus: 'Storm path + Resonance for mass AoE explosions.',
      raid: 'Pure Arcane Surge burn with Magi synergy for priority boss damage.'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'mage',
    specName: 'Fire',
    role: 'DPS',
    metaDescription: 'Fire Mage Legion Remix guide explaining Fel path combustion setups, Legion Remix mage builds, stat priority, and Bronze planning for WoW Legion Remix raids.',
    seoFocusKeyword: 'Fire Mage Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix fire mage guide',
      'Fire Mage Legion Remix build',
      'Legion Remix fire mage talents'
    ],
    seoTopics: [
      'Combustion window planning',
      'Fel artifact ignite routing',
      'Bronze crit gear priorities',
      'Mythic+ Flamestrike setup'
    ],
    seoSupportingConcepts: [
      'Fire Blast charge mapping',
      'Phoenix Flames funnel tips',
      'Rune of Power placement notes',
      'Shimmer movement coverage'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Boosts Flamestrike cleave during dungeon pulls' },
      { pathId: 'arcane', reason: 'Adds shields for open world survivability' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Intellect',
      'Critical Strike',
      'Haste',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Keep Phoenix Flames ready for Engorged pulls in Heroic World Tier.',
      'Chain Living Bomb on five-target packs to shred Bronze orb camps.',
      'Use Shimmer to dodge and keep Combustion uptime high.',
      'Lock in A Noble Event shopping early so you can afford caster cosmetics.',
      'Use Mirror Images before activating Fel Twisted Crusade for safety.'
    ],

    rotationOverview: {
      title: 'Fire Mage Priority',
      priority: [
        'Cast Combustion and immediately deploy Fire Blast charges.',
        'Pyroblast during Hot Streak procs; hard-cast only inside Combustion.',
        'Phoenix Flames to generate Hot Streaks on AoE fights.',
        'Scorch movement filler; maintain Kindling for shorter Combustions.',
        'Use Meteor or Flamestrike with Infernal Cascade stacks for heavy cleave.'
      ]
    },

    bronzePriority: [
      '1. Secure high ilvl weapons and trinkets that trigger crit bursts.',
      '2. Finish Fel path early to maximize Twisted Crusade combustion windows.',
      '3. Buy caster-specific ensembles after weapons—style flex optional.',
      '4. Keep Bronze for the Arcane Scythe illusion drop in The Nighthold.',
      '5. Purchase extra runes or potions from Horos during A Noble Event weekends.'
    ],

    builds: {
      leveling: 'Pyroclasm/Flame Patch build for cleave leveling loops.',
      openWorld: 'Flame Patch with Flame On to chain Fire Blasts while kiting.',
      mythicPlus: 'Storm/Fel hybrid to keep Flamestrike procs rolling.',
      raid: 'Pure combustion setup with Kindling and Sun King’s Blessing.'
    },

    groupTier: 'S',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'mage',
    specName: 'Frost',
    role: 'DPS',
    metaDescription: 'Frost Mage Legion Remix guide covering Storm path control, WoW Legion Remix Frost rotation, Legion Remix mage stat priority, and Bronze upgrades.',
    seoFocusKeyword: 'Frost Mage Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix frost mage guide',
      'Frost Mage Legion Remix build',
      'Legion Remix frost mage talents'
    ],
    seoTopics: [
      'Icy Veins uptime planning',
      'Storm artifact freeze routing',
      'Bronze haste investments',
      'Mythic+ control rotations'
    ],
    seoSupportingConcepts: [
      'Frozen Orb placement cues',
      'Comet Storm timing notes',
      'Chain Reaction proc tracking',
      'Ice Lance shatter sequencing'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'arcane', reason: 'Gives shields to stay alive while turret casting' },
      { pathId: 'nature', reason: 'Improves sustain during solo XP farm loops' }
    ],

    recommendedTraits: ['Storm Surger', 'Volatile Magics', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Haste',
      'Critical Strike',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Keep Blizzard down to stack Storm path haste and freeze adds for Shatter combos.',
      'Use Cone of Cold to keep Empowered enemies from reaching you.',
      'Icy Veins plus Time Warp equals unstoppable all-season heroic pushes.',
      'Cold Snap resets Ice Block—great for brute forcing Bronze caches.',
      'Add Legion Remix XP farm loops in Highmountain where kiting is easy.'
    ],

    rotationOverview: {
      title: 'Frost Mage Priority',
      priority: [
        'Cast Icy Veins and Mirror Image before major pulls.',
        'Flurry after Frostbolt/Glacial Spike to trigger Shatter.',
        'Ice Lance during Fingers of Frost procs; treat them as mini-bursts.',
        'Blizzard on cooldown for AoE and to reduce Frozen Orb timer.',
        'Frozen Orb as soon as packs are grouped to spawn Fingers of Frost.'
      ]
    },

    bronzePriority: [
      '1. Unlock Storm Tempest Wrath nodes to keep haste rolling.',
      '2. Buy trinkets that proc haste or mastery for sustained cleave.',
      '3. Upgrade weapon/off-hand before focusing on tier pieces.',
      '4. Pick up the Kaldorei appearance ensemble once Bronze is capped.',
      '5. Reserve Bronze for housing decor if you enjoy chill screenshot sessions.'
    ],

    builds: {
      leveling: 'Freezing Rain build with consistent Blizzard uptime.',
      openWorld: 'Ice Nova and Frost Bomb to kite empowered mobs.',
      mythicPlus: 'Storm path cleave with Splitting Ice and sustained Frozen Orbs.',
      raid: 'Glacial Spike single-target with Arcane shields for safety.'
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: true
  },

  // SHAMAN SPECS
  {
    classId: 'shaman',
    specName: 'Elemental',
    role: 'DPS',
    metaDescription: 'Elemental Shaman Legion Remix guide outlining Storm path lightning builds, Legion Remix elemental shaman stat priority, and Bronze planning.',
    seoFocusKeyword: 'Elemental Shaman Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix elemental shaman guide',
      'Elemental Shaman Legion Remix build',
      'Legion Remix elemental shaman talents'
    ],
    seoTopics: [
      'Stormkeeper burst planning',
      'Storm artifact lightning routing',
      'Bronze totem investments',
      'Mythic+ Lava Burst prep'
    ],
    seoSupportingConcepts: [
      'Lava Burst chain setup',
      'Earth Shock Maelstrom budgeting',
      'Flame Shock spread timing',
      'Capacitor Totem control notes'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Boosts Lava Burst combos during raid burn phases' },
      { pathId: 'nature', reason: 'Adds self-healing when leveling solo or duo' }
    ],

    recommendedTraits: ['Storm Surger', 'Volatile Magics', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Stormkeeper before every big pull to vaporize empowered packs.',
      'Keep Flame Shock on everything to bank Lava Burst procs.',
      'Use Gust of Wind (talent) to kite while Storm path pulses AoE.',
      'Run Legion Remix XP farm routes in Suramar to line up with Dalaran micro-holiday shopping.',
      'Drop Capacitor Totem into Lock, Stock, and Two Smoking Goblins to slow other groups.'
    ],

    rotationOverview: {
      title: 'Elemental Priority',
      priority: [
        'Stormkeeper + Elemental Mastery on demand for massive burst.',
        'Lava Burst on cooldown (guaranteed crit when Flame Shock is active).',
        'Use Lightning Bolt or Chain Lightning depending on mob count.',
        'Earth Shock or Earthquake to spend Maelstrom.',
        'Icefury when talented to keep Frost Shock empowered.'
      ]
    },

    bronzePriority: [
      '1. Finish Storm path nodes to maximize haste scaling.',
      '2. Purchase intellect trinkets with Lightning procs.',
      '3. Unlock Fel nodes if you progress into Antorus raids.',
      '4. Budget Bronze for the Shaman heritage armor variant in Infinite Echoes.',
      '5. Stock Strange Humming Crystals to pair with Stormkeeper loops.'
    ],

    builds: {
      leveling: 'Stormkeeper cleave with Aftershock for constant Earthquakes.',
      openWorld: 'Nature hybrid to stay topped off while kiting packs.',
      mythicPlus: 'Storm path + Echo Chamber for trash melts.',
      raid: 'Fel/Storm hybrid to turbo-charge Lava Burst crit chains.'
    },

    groupTier: 'S',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'shaman',
    specName: 'Enhancement',
    role: 'DPS',
    metaDescription: 'Enhancement Shaman Legion Remix guide showcasing Fel path melee storms, Legion Remix enhancement build tips, stat priority, and Bronze upgrades.',
    seoFocusKeyword: 'Enhancement Shaman Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix enhancement shaman guide',
      'Enhancement Shaman Legion Remix build',
      'Legion Remix enhancement shaman talents'
    ],
    seoTopics: [
      'Stormstrike window planning',
      'Fel artifact fury routing',
      'Bronze weapon priorities',
      'Mythic+ wolf pack setups'
    ],
    seoSupportingConcepts: [
      'Doom Winds burst mapping',
      'Maelstrom Weapon stack tracking',
      'Feral Spirit uptime notes',
      'Sundering cleave positioning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Increases Windfury cleave for Mythic+ spam' },
      { pathId: 'nature', reason: 'Adds much-needed sustain for solo XP farm routes' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Storm Surger'],

    statPriority: [
      'Agility',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Keep Doom Winds on cooldown—pair it with Tempest Wrath for unstoppable cleave.',
      'Use Spirit Walk and Wind Rush Totem to sprint between Bronze objectives.',
      'Keep a shield set handy if you plan to tank Lock, Stock, and Two Smoking Goblins for friends.',
      'Refresh Flametongue and Frostbrand before entering Heroic World Tier packs.',
      'Use your Legion Remix reward tracker to plan weapon appearances for each alt.'
    ],

    rotationOverview: {
      title: 'Enhancement Priority',
      priority: [
        'Cast Primordial Wave before big pulls to duplicate Flame Shock.',
        'Stormstrike on cooldown for single-target burst.',
        'Crash Lightning before spreading into AoE.',
        'Sundering on large packs or when Empowered enemies spawn.',
        'Use Lava Lash to spread Flame Shock when running Lashing Flames.'
      ]
    },

    bronzePriority: [
      '1. Upgrade both weapons ASAP—Enhancement damage lives and dies by weapon ilvl.',
      '2. Unlock Fel path for Twisted Crusade retaliation damage.',
      '3. Buy trinkets that grant haste or agility on hit.',
      '4. Purchase the Felscorched Stormcrow after your first 80 ding.',
      '5. Add housing decor or totems once Bronze farming goals are met.'
    ],

    builds: {
      leveling: 'Fel path with Elemental Spirits for unstoppable solo cleave.',
      openWorld: 'Nature hybrid to keep sustain high during Bronze loops.',
      mythicPlus: 'Storm/Fel burst build with Elemental Assault for Windfury spam.',
      raid: 'Fel burst with Legacy of the Frost Witch to extend Stormstrike chains.'
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: true
  },
  {
    classId: 'shaman',
    specName: 'Restoration',
    role: 'Healer',
    metaDescription: 'Restoration Shaman Legion Remix guide with Holy Light path healing, Legion Remix resto shaman builds, stat priority, and Bronze spending advice.',
    seoFocusKeyword: 'Restoration Shaman Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix resto shaman guide',
      'Restoration Shaman Legion Remix build',
      'Legion Remix restoration shaman talents'
    ],
    seoTopics: [
      'Chain Heal throughput planning',
      'Holy artifact tide routing',
      'Bronze totem investments',
      'Mythic+ cooldown coverage'
    ],
    seoSupportingConcepts: [
      'Spirit Link Totem timing charts',
      'Cloudburst Totem storage notes',
      'Riptide Tidal Waves cadence',
      'Healing Rain placement cues'
    ],

    bestArtifactPath: 'holy',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds haste for Healing Rain spam in dungeon speed clears' },
      { pathId: 'nature', reason: 'Improves solo questing survivability' }
    ],

    recommendedTraits: ['Storm Surger', 'Volatile Magics', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Critical Strike',
      'Haste',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Leverage Riptide + Healing Stream Totem to stabilize Heroic World Tier groups.',
      'Swap to Cloudburst Totem during Legion Remix XP farm dungeons for bonus throughput.',
      'Use Ghost Wolf with Spirit Wolf talent to outrun Empowered enemies in the open world.',
      'Budget Bronze for healing trinkets; resto shamans scale hard with on-use cooldowns.',
      'Drop Healing Rain on Lock, Stock, and Two Smoking Goblins barrels to help the raid stack.'
    ],

    rotationOverview: {
      title: 'Restoration Priority',
      priority: [
        'Riptide on cooldown to prime targets for Tidal Waves.',
        'Healing Wave/Surge depending on Tidal Waves uptime.',
        'Chain Heal when 3+ allies are hurt, especially in Bronze rare trains.',
        'Spirit Link Totem for emergency stabilizing.',
        'Ascendance during Turbo Boost or empowered boss phases.'
      ]
    },

    bronzePriority: [
      '1. Unlock Holy Light path for Vindicator’s Judgment healing pulses.',
      '2. Purchase intellect trinkets and on-use throughput gear.',
      '3. Grab the Farseer hero talent unlocks in Infinite Bazaar as soon as they appear.',
      '4. Finish Storm nodes if you main Mythic+ healing.',
      '5. Buy totems and housing decor once your healing kit is settled.'
    ],

    builds: {
      leveling: 'Nature/Holy hybrid so you can solo quests while keeping dungeon queues instant.',
      openWorld: 'Ancestral Guidance and Primordial Wave for surprise burst damage.',
      mythicPlus: 'Cloudburst + Storm path for high haste, high output healing.',
      raid: 'Holy Light path with Wellspring and Spirit Link to anchor progression.'
    },

    groupTier: 'S',
    soloTier: 'C',
    heroicWorldTier: true
  },

  // DRUID SPECS
  {
    classId: 'druid',
    specName: 'Balance',
    role: 'DPS',
    metaDescription: 'Balance Druid Legion Remix guide detailing Storm path eclipses, Legion Remix balance druid stat priority, WoW Legion Remix boomkin build tips, and Bronze plans.',
    seoFocusKeyword: 'Balance Druid Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix balance druid guide',
      'Balance Druid Legion Remix build',
      'Legion Remix boomkin talents'
    ],
    seoTopics: [
      'Eclipse cycle planning',
      'Storm artifact astral routing',
      'Bronze idol investments',
      'Mythic+ Starfall prep'
    ],
    seoSupportingConcepts: [
      'Celestial Alignment timing charts',
      'Fury of Elune placement notes',
      'Starfall uptime tracking',
      'Sunfire and Moonfire spread cadence'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'arcane', reason: 'Shielding helps when turret casting Starfire in Heroic World Tier' },
      { pathId: 'nature', reason: 'Adds extra regen for solo open-world farm routes' }
    ],

    recommendedTraits: ['Storm Surger', 'Volatile Magics', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Mastery',
      'Haste',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Keep Starfall rolling to delete large packs and spawn Bronze orbs.',
      'Use Wild Charge to hop between objectives and avoid Empowered affixes.',
      'Stack Moonfire on everything when running Legion Remix XP farm loops.',
      'Use the Legion Remix rewards list to prioritize druid-exclusive cosmetics.',
      'Celestial Alignment pairs perfectly with Tempest Wrath for monstrous AoE.'
    ],

    rotationOverview: {
      title: 'Balance Druid Priority',
      priority: [
        'Maintain Moonfire and Sunfire DoTs on all targets.',
        'Use Wrath in Solar Eclipse, Starfire in Lunar Eclipse.',
        'Starfall for 2+ targets; Astral Communion when you need instant Astral Power.',
        'Starsurge to spend Astral Power on single targets.',
        'Use Celestial Alignment/Incarnation during big pulls or boss burn windows.'
      ]
    },

    bronzePriority: [
      '1. Finish Storm path nodes to keep haste and damage rolling.',
      '2. Purchase caster trinkets that proc mastery or haste.',
      '3. Buy class appearances like the Druid order hall glow once Bronze is plentiful.',
      '4. Save Bronze for the Boomkin moonkin form customization in Infinite Echoes.',
      '5. Keep Torn Invitation weeks in mind for druid/caster themed housing decor.'
    ],

    builds: {
      leveling: 'Eclipse weaving with Nature’s Balance for constant Astral Power.',
      openWorld: 'Storm path AoE build with Stellar Flare to handle long fights.',
      mythicPlus: 'Starlord + Storm path haste for endless Starfalls.',
      raid: 'Incarnation burst with Twin Moons for multi-dot boss fights.'
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: true
  },
  {
    classId: 'druid',
    specName: 'Feral',
    role: 'DPS',
    metaDescription: 'Feral Druid Legion Remix guide covering Fel path bleeds, Legion Remix feral druid build notes, WoW Legion Remix feral stat priority, and Bronze goals.',
    seoFocusKeyword: 'Feral Druid Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix feral druid guide',
      'Feral Druid Legion Remix build',
      'Legion Remix feral druid talents'
    ],
    seoTopics: [
      'bleed snapshot planning',
      'Fel artifact Rip routing',
      'Bronze weapon upgrades',
      'Mythic+ Shred burst prep'
    ],
    seoSupportingConcepts: [
      'Tiger\'s Fury alignment notes',
      'Berserk window sequencing',
      'Primal Wrath cleave coverage',
      'Bloodtalons combo planning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds haste for Mythic+ swipe cleave' },
      { pathId: 'nature', reason: 'Gives extra sustain while questing or farming solo' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Critical Strike',
      'Mastery',
      'Haste',
      'Versatility'
    ],

    levelingTips: [
      'Keep Bleed uptime high—Rip plus Primal Wrath annihilates packs with Fel path reflections.',
      'Use Tiger Dash to chase Bronze rares before other Timerunners tag them.',
      'Feral Frenzy resets quickly inside Legion Remix, so hold it for Empowered elites.',
      'Plan Bronze purchases for daggers/claws; weapon ilvl makes or breaks your DPS.',
      'Macro Stampeding Roar when the goblins spawn during Lock, Stock, and Two Smoking Goblins.'
    ],

    rotationOverview: {
      title: 'Feral Priority',
      priority: [
        'Keep Rake and Rip active on all key targets.',
        'Use Shred to generate combo points; Brutal Slash for AoE.',
        'Primal Wrath on 3+ targets to blanket bleeds.',
        'Ferocious Bite to spend combo points when Rip is already rolling.',
        'Tiger’s Fury on cooldown for energy and damage boost.'
      ]
    },

    bronzePriority: [
      '1. Finish Fel path to unlock Twisted Crusade reflect damage.',
      '2. Upgrade weapons first, then focus on tier pieces for bleed buffs.',
      '3. Purchase agility trinkets that buff crit mastery combos.',
      '4. Buy the Feral-inspired ensemble once core power pieces are set.',
      '5. Set aside Bronze for A Noble Event weekends if you chase fox mount glam.'
    ],

    builds: {
      leveling: 'Fel bleed build with Sabertooth for extended Rip.',
      openWorld: 'Nature hybrid to reduce downtime and keep self-healing rolling.',
      mythicPlus: 'Primal Wrath cleave with Storm path haste for fast pulls.',
      raid: 'Fel burst with Apex Predator for frequent Ferocious Bites.'
    },

    groupTier: 'B',
    soloTier: 'A',
    heroicWorldTier: true
  },
  {
    classId: 'druid',
    specName: 'Guardian',
    role: 'Tank',
    metaDescription: 'Guardian Druid Legion Remix guide describing Nature path tanking, Legion Remix guardian druid stat priority, WoW Legion Remix bear build tips, and Bronze purchases.',
    seoFocusKeyword: 'Guardian Druid Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix guardian druid guide',
      'Guardian Druid Legion Remix build',
      'Legion Remix bear druid talents'
    ],
    seoTopics: [
      'Ironfur stack planning',
      'Nature artifact mitigation routing',
      'Bronze tank upgrade order',
      'Mythic+ rage management'
    ],
    seoSupportingConcepts: [
      'Incarnation Guardian cooldown mapping',
      'Frenzied Regeneration cadence',
      'Thrash bleed uptime notes',
      'Galactic Guardian proc tracking'
    ],

    bestArtifactPath: 'nature',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds extra haste for Thrash spam in dungeons' },
      { pathId: 'fel', reason: 'Boosts damage for small group Bronze farming' }
    ],

    recommendedTraits: ['Touch of Malice', 'Storm Surger', 'Terror from Below'],

    statPriority: [
      'Agility',
      'Versatility',
      'Mastery',
      'Haste',
      'Critical Strike'
    ],

    levelingTips: [
      'Spam Thrash to keep Ironfur stacks rolling and reflect Nature path shields.',
      'Use Rage of the Sleeper whenever Empaths spawn in Heroic World Tier.',
      'Guardian leaps make it easy to tag Bronze rares before other tanks arrive.',
      'Keep Frenzied Regeneration ready for empowered elites in Stormheim.',
      'Use Legion Remix XP farm loops on Argus—the bear form handles empowered affixes well.'
    ],

    rotationOverview: {
      title: 'Guardian Priority',
      priority: [
        'Keep Ironfur active for physical mitigation.',
        'Use Thrash and Moonfire on cooldown for rage generation.',
        'Mangle whenever available to fuel Ironfur and Frenzied Regeneration.',
        'Use Pulverize or Galactic Guardian procs to dump extra damage.',
        'Barkskin and Survival Instincts staggered for lethal boss combos.'
      ]
    },

    bronzePriority: [
      '1. Unlock Nature path early for barrier loops.',
      '2. Buy high ilvl two-handed artifact skins and tank trinkets.',
      '3. Invest in Storm nodes if you main Mythic+ as a bear.',
      '4. Grab the Guardian-exclusive cosmetics while Bronze flows.',
      '5. Save Bronze for the bear form glyphs sold during Infinite Echoes.'
    ],

    builds: {
      leveling: 'Nature tank build for unstoppable open-world pulls.',
      openWorld: 'Fel hybrid with Galactic Guardian for damage while soloing.',
      mythicPlus: 'Storm/Nature blend for Thrash spam and magic mitigation.',
      raid: 'Nature defensive setup with Rend and Tear for long boss fights.'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },
  {
    classId: 'druid',
    specName: 'Restoration',
    role: 'Healer',
    metaDescription: 'Restoration Druid Legion Remix guide showcasing Holy Light path healing, Legion Remix resto druid stat priority, WoW Legion Remix healer builds, and Bronze plans.',
    seoFocusKeyword: 'Restoration Druid Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix restoration druid guide',
      'Restoration Druid Legion Remix build',
      'Legion Remix resto druid talents'
    ],
    seoTopics: [
      'HoT layering planning',
      'Holy artifact bloom routing',
      'Bronze Flourish investments',
      'Mythic+ Tranquility coverage'
    ],
    seoSupportingConcepts: [
      'Lifebloom tank swap notes',
      'Efflorescence placement cues',
      'Swiftmend Soul of the Forest timing',
      'Innervate cooldown planning'
    ],

    bestArtifactPath: 'holy',
    alternateArtifactPaths: [
      { pathId: 'nature', reason: 'Adds extra HoT power for solo questing and heroic world tier' },
      { pathId: 'arcane', reason: 'Shielding for raids with heavy burst damage' }
    ],

    recommendedTraits: ['Volatile Magics', 'Touch of Malice', 'Storm Surger'],

    statPriority: [
      'Intellect',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Keep Lifebloom and Rejuvenation rolling on tanks while DPSing in Cat form.',
      'Use Convoke the Spirits in Legion Remix raids for instant HoT blankets.',
      'A Noble Event weekends are perfect for gathering Bronze and cosmetics between healing queues.',
      'Wild Charge + Travel Form lets you deliver emergency heals anywhere.',
      'Plan Bronze spending in the Legion Remix bronze calculator so you can prioritize trinkets.'
    ],

    rotationOverview: {
      title: 'Restoration Priority',
      priority: [
        'Maintain Efflorescence under the group whenever possible.',
        'Rejuvenation spam on targets expecting damage.',
        'Swiftmend on cooldown for big spot heals.',
        'Wild Growth on 5+ injured players.',
        'Tranquility during massive raid-wide damage or Turbo Boost keystones.'
      ]
    },

    bronzePriority: [
      '1. Unlock Holy Light path for Vindicator’s Judgment healing pulses.',
      '2. Buy intellect trinkets that align with Convoke the Spirits windows.',
      '3. Pick up tier set pieces that boost HoTs as soon as they’re affordable.',
      '4. Grab druid-themed ensembles for screenshot sessions once essentials are secured.',
      '5. Stock extra Bronze for Lock, Stock, and Two Smoking Goblins weekends if you run support.'
    ],

    builds: {
      leveling: 'Catweaving resto build with Nature path sustain.',
      openWorld: 'Ranged Moonfire build while HoTs tick endlessly.',
      mythicPlus: 'Holy Light path with Flourish for heavy dungeon throughput.',
      raid: 'Traditional HoT blanket with Convoke and Tranquility anchors.'
    },

    groupTier: 'S',
    soloTier: 'C',
    heroicWorldTier: true
  },

  // MONK SPECS
  {
    classId: 'monk',
    specName: 'Brewmaster',
    role: 'Tank',
    metaDescription: 'Brewmaster Monk Legion Remix guide covering Nature path stagger tricks, Legion Remix brewmaster stat priority, WoW Legion Remix monk build notes, and Bronze plans.',
    seoFocusKeyword: 'Brewmaster Monk Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix brewmaster monk guide',
      'Brewmaster Monk Legion Remix build',
      'Legion Remix brewmaster talents'
    ],
    seoTopics: [
      'stagger management planning',
      'Nature artifact brew routing',
      'Bronze tank investments',
      'Mythic+ Keg Smash prep'
    ],
    seoSupportingConcepts: [
      'Celestial Brew timing charts',
      'Purifying Brew usage notes',
      'Breath of Fire uptime tracking',
      'Ring of Peace positioning cues'
    ],

    bestArtifactPath: 'nature',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds haste for faster keg tosses in dungeon pulls' },
      { pathId: 'fel', reason: 'Boosts damage for small group Bronze farming' }
    ],

    recommendedTraits: ['Touch of Malice', 'Storm Surger', 'Volatile Magics'],

    statPriority: [
      'Agility',
      'Haste',
      'Versatility',
      'Mastery',
      'Critical Strike'
    ],

    levelingTips: [
      'Keep Ironskin Brew up around the clock—Nature path shields smooth stagger damage.',
      'Keg Smash into Breath of Fire ensures Empowered packs stay burning.',
      'Use Roll and Transcendence to shuttle between Bronze objectives quickly.',
      'Maintain Celestial Brew for Time Crisis or empowered boss hits.',
      'Add Lock, Stock, and Two Smoking Goblins to your weekly rotation; Brewmasters shine there.'
    ],

    rotationOverview: {
      title: 'Brewmaster Priority',
      priority: [
        'Keg Smash on cooldown to reduce brew timers.',
        'Maintain Breath of Fire for DR and AoE damage.',
        'Use Blackout Strike to trigger Celestial Brew cdr.',
        'Keep Ironskin Brew active before pulling big packs.',
        'Purifying Brew whenever stagger turns yellow/red.'
      ]
    },

    bronzePriority: [
      '1. Unlock Nature path for shield uptime while staggering damage.',
      '2. Purchase trinkets with absorb or self-healing procs.',
      '3. Upgrade weapon quickly—more damage equals more threat and Bronze.',
      '4. Grab Brewmaster-specific ensembles for screenshot nights after gearing.',
      '5. Save Bronze for Infinite Echoes decor items if you enjoy housing.'
    ],

    builds: {
      leveling: 'Nature tanking with Black Ox Brew for endless brews.',
      openWorld: 'Fel hybrid to kill rares faster while staying immortal.',
      mythicPlus: 'Storm/Nature blend for huge keg spam and magic mitigation.',
      raid: 'Classic stagger-centric build with High Tolerance.'
    },

    groupTier: 'S',
    soloTier: 'A',
    heroicWorldTier: true
  },
  {
    classId: 'monk',
    specName: 'Mistweaver',
    role: 'Healer',
    metaDescription: 'Mistweaver Monk Legion Remix guide showing Holy Light path vivify spam, Legion Remix monk healer priorities, stat order, and Bronze purchases.',
    seoFocusKeyword: 'Mistweaver Monk Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix mistweaver monk guide',
      'Mistweaver Monk Legion Remix build',
      'Legion Remix mistweaver talents'
    ],
    seoTopics: [
      'Vivify cleave planning',
      'Holy Light artifact mist routing',
      'Bronze healing investments',
      'Mythic+ Revival coverage'
    ],
    seoSupportingConcepts: [
      'Clouded Focus channel timing',
      'Renewing Mist uptime notes',
      'Revival cooldown mapping',
      'Essence Font movement planning'
    ],

    bestArtifactPath: 'holy',
    alternateArtifactPaths: [
      { pathId: 'nature', reason: 'Adds extra sustain for fistweaving during solo content' },
      { pathId: 'storm', reason: 'Boosts haste for rapid Vivify cleave in dungeons' }
    ],

    recommendedTraits: ['Storm Surger', 'Volatile Magics', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Critical Strike',
      'Haste',
      'Versatility',
      'Mastery'
    ],

    levelingTips: [
      'Swap between fistweaving and caster stance to keep Bronze ticking.',
      'Use Renewing Mist on cooldown to prep for Vivify cleave.',
      'Invoke Yu’lon or Chi-Ji during Turbo Boost windows for giant throughput spikes.',
      'Budget Bronze for healer trinkets with mana returns; Legion Remix fights can run long.',
      'Keep Ring of Peace handy for controlling Empowered enemies near quest objectives.'
    ],

    rotationOverview: {
      title: 'Mistweaver Priority',
      priority: [
        'Renewing Mist on cooldown to prep for Vivify cleave.',
        'Soothing Mist + Enveloping Mist for focused tank healing.',
        'Vivify as primary filler when two or more targets need heals.',
        'Essence Font for raid healing or Empowered packs.',
        'Revival for emergencies or to clear dangerous debuffs.'
      ]
    },

    bronzePriority: [
      '1. Unlock Holy Light path for massive group healing pulses.',
      '2. Buy intellect trinkets that restore mana or grant throughput.',
      '3. Upgrade fist weapons if you fistweave; damage adds up during Bronze farms.',
      '4. Purchase class-themed ensembles once Infinite Knowledge caps convert to Bronze.',
      '5. Grab Torn Invitation cosmetics during A Noble Event to stay fashionable.'
    ],

    builds: {
      leveling: 'Nature/Holy hybrid that punches while healing with Rising Sun Kick.',
      openWorld: 'Fistweaving with Ancient Teachings to keep damage high.',
      mythicPlus: 'Storm path haste with Rising Mist for fast-paced healing.',
      raid: 'Holy Light path plus Jade Bond for cooldown-extended throughput.'
    },

    groupTier: 'A',
    soloTier: 'C',
    heroicWorldTier: true
  },
  {
    classId: 'monk',
    specName: 'Windwalker',
    role: 'DPS',
    metaDescription: 'Windwalker Monk Legion Remix guide with Fel path momentum, Legion Remix monk DPS stat priority, WoW Legion Remix windwalker build tips, and Bronze planning.',
    seoFocusKeyword: 'Windwalker Monk Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix windwalker monk guide',
      'Windwalker Monk Legion Remix build',
      'Legion Remix windwalker talents'
    ],
    seoTopics: [
      'Chi burst planning',
      'Fel artifact combo routing',
      'Bronze weapon investments',
      'Mythic+ Spinning Crane prep'
    ],
    seoSupportingConcepts: [
      'Storm, Earth, and Fire timing notes',
      'Strike of the Windlord burst sequencing',
      'Rising Sun Kick priority tracking',
      'Touch of Death execution planning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Enhances Spinning Crane Kick cleave during keystones' },
      { pathId: 'nature', reason: 'Adds sustain for single-player Bronze loops' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Storm Surger'],

    statPriority: [
      'Agility',
      'Versatility',
      'Critical Strike',
      'Haste',
      'Mastery'
    ],

    levelingTips: [
      'Maintain Hit Combo—mix abilities so the buff never falls off.',
      'Spam Spinning Crane Kick with Mark of the Crane stacks for monstrous AoE.',
      'Use Roll and Flying Serpent Kick to zip between Bronze objectives.',
      'Line up Storm, Earth, and Fire with Fel Twisted Crusade for top-tier burst.',
      'Keep Leg Sweep ready for Lock, Stock, and Two Smoking Goblins crowds.'
    ],

    rotationOverview: {
      title: 'Windwalker Priority',
      priority: [
        'Open with Tiger Palm into Rising Sun Kick and Fists of Fury.',
        'Use Whirling Dragon Punch when both major cooldowns are on CD.',
        'Maintain Hit Combo by not repeating abilities.',
        'Spinning Crane Kick for 3+ targets after tagging them with Tiger Palm.',
        'Storm, Earth, and Fire on cooldown aligned with Fel procs.'
      ]
    },

    bronzePriority: [
      '1. Unlock Fel path to maximize burst windows.',
      '2. Upgrade weapons ASAP—dual wield ilvl matters.',
      '3. Buy haste/versatility trinkets for consistent damage.',
      '4. Collect monk-themed ensembles once the toolkit is capped.',
      '5. Save Bronze for Torn Invitation fox mount and micro-holiday toys.'
    ],

    builds: {
      leveling: 'Fel momentum build with lots of mobility and cleave.',
      openWorld: 'Nature hybrid to reduce downtime between fights.',
      mythicPlus: 'Storm/Fel blend to obliterate large keystone pulls.',
      raid: 'Fel burst with Invoker’s Delight for single-target dominance.'
    },

    groupTier: 'S',
    soloTier: 'A',
    heroicWorldTier: true
  },

  // PRIEST SPECS
  {
    classId: 'priest',
    specName: 'Discipline',
    role: 'Healer',
    metaDescription: 'Discipline Priest Legion Remix guide describing Arcane path atonement healing, Legion Remix priest stat priority, WoW Legion Remix disc builds, and Bronze planning.',
    seoFocusKeyword: 'Discipline Priest Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix discipline priest guide',
      'Discipline Priest Legion Remix build',
      'Legion Remix disc priest talents'
    ],
    seoTopics: [
      'atonement ramp planning',
      'Arcane artifact shield routing',
      'Bronze trinket investments',
      'Mythic+ Evangelism coverage'
    ],
    seoSupportingConcepts: [
      'Schism burst timing charts',
      'Power Word Radiance sequencing',
      'Mindgames cooldown mapping',
      'Power Word Barrier placement cues'
    ],

    bestArtifactPath: 'arcane',
    alternateArtifactPaths: [
      { pathId: 'holy', reason: 'Adds raw throughput when progression damage spikes' },
      { pathId: 'storm', reason: 'Boosts haste for dungeons and Mythic+ healing' }
    ],

    recommendedTraits: ['Volatile Magics', 'Touch of Malice', 'Storm Surger'],

    statPriority: [
      'Intellect',
      'Haste',
      'Critical Strike',
      'Mastery',
      'Versatility'
    ],

    levelingTips: [
      'Keep Power Word: Shield on targets to pre-load atonements before each pull.',
      'Schism into Mindgames deletes empowered mobs during Bronze runs.',
      'Evangelism extends atonements for long Legion Remix heroic fights.',
      'Use the Legion Remix bronze calculator to plan when to upgrade trinkets vs. tier pieces.',
      'Smite packs while waiting on Lock, Stock, and Two Smoking Goblins spawn timers to sneak in damage.'
    ],

    rotationOverview: {
      title: 'Discipline Priority',
      priority: [
        'Apply atonement through Power Word: Shield and Radiance.',
        'Schism + Mind Blast/Mindgames for huge damage-to-healing conversion.',
        'Penance on cooldown (offensive unless emergency healing needed).',
        'Smite or Mind Blast to keep DPS flowing when healing is covered.',
        'Evangelism/Barrier for raid-wide hits or Turbo Boost keys.'
      ]
    },

    bronzePriority: [
      '1. Unlock Arcane path for Everdisc shields and haste windows.',
      '2. Purchase intellect + haste trinkets tailored to evangelism windows.',
      '3. Finish Holy Light nodes if you swap to pure healing for certain raids.',
      '4. Buy priest-themed ensembles after gear is handled.',
      '5. Budget Bronze for micro-holiday cosmetics during A Noble Event.'
    ],

    builds: {
      leveling: 'Damage-focused disc with Schism and Mindgames.',
      openWorld: 'Arcane shielding to keep atonement rolling while solo farming.',
      mythicPlus: 'High haste build with Purge the Wicked for multi-target atonements.',
      raid: 'Evangelism-centric with Contrition for progression healing.'
    },

    groupTier: 'S',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'priest',
    specName: 'Holy',
    role: 'Healer',
    metaDescription: 'Holy Priest Legion Remix guide with Holy Light path miracles, Legion Remix holy priest builds, stat priority, and Bronze budgeting for WoW Legion Remix healers.',
    seoFocusKeyword: 'Holy Priest Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix holy priest guide',
      'Holy Priest Legion Remix build',
      'Legion Remix holy priest talents'
    ],
    seoTopics: [
      'Holy Word cooldown planning',
      'Holy Light artifact miracle routing',
      'Bronze staff upgrades',
      'Mythic+ Prayer coverage'
    ],
    seoSupportingConcepts: [
      'Holy Word Serenity timing notes',
      'Prayer of Healing clustering tips',
      'Apotheosis burst mapping',
      'Spirit of Redemption positioning cues'
    ],

    bestArtifactPath: 'holy',
    alternateArtifactPaths: [
      { pathId: 'arcane', reason: 'Provides shields for high-damage mythic bosses' },
      { pathId: 'nature', reason: 'Extra sustain and movement during open world questing' }
    ],

    recommendedTraits: ['Volatile Magics', 'Storm Surger', 'Touch of Malice'],

    statPriority: [
      'Intellect',
      'Critical Strike',
      'Mastery',
      'Haste',
      'Versatility'
    ],

    levelingTips: [
      'Use Holy Fire and Smite between pulls—Legion Remix holy priest can DPS more than before.',
      'Guardian Spirit on cooldown for empowered elite saves.',
      'Keep Renew on tanks while channeling Divine Hymn during Turbo Boost keys.',
      'Schedule Bronze purchases for trinkets that buff Serendipity or Holy Word casts.',
      'Add Torn Invitation weekends to your Legion Remix site calendar for cosmetics.'
    ],

    rotationOverview: {
      title: 'Holy Priest Priority',
      priority: [
        'Cast Holy Word: Serenity/ Sanctify whenever someone is low or groups are stacked.',
        'Circle of Healing and Prayer of Healing for group recovery.',
        'Renew and Heal filler to maintain Serendipity reductions.',
        'Divine Hymn during raid-wide damage or infinite echo events.',
        'Smite/Holy Fire for extra atonement-style damage when safe.'
      ]
    },

    bronzePriority: [
      '1. Unlock Holy Light path for Vindicator’s Judgment healing pulses.',
      '2. Purchase intellect trinkets that line up with Salvation or Hymn.',
      '3. Buy tier set pieces that buff Holy Word usage.',
      '4. Grab Light-themed ensembles from Infinite Bazaar once core power is set.',
      '5. Keep Bronze handy for A Noble Event to snag fox mount cosmetics.'
    ],

    builds: {
      leveling: 'Holy Fire/Searing build to DPS while keeping Renew rolling.',
      openWorld: 'Nature hybrid with Cosmic Ripple for auto-heals.',
      mythicPlus: 'Flash Concentration style with Storm path haste for quick casts.',
      raid: 'Holy Light path Salvation build for big raid heals.'
    },

    groupTier: 'A',
    soloTier: 'C',
    heroicWorldTier: true
  },
  {
    classId: 'priest',
    specName: 'Shadow',
    role: 'DPS',
    metaDescription: 'Shadow Priest Legion Remix guide outlining Fel path insanity loops, Legion Remix shadow priest stat priority, WoW Legion Remix shadow build tips, and Bronze priorities.',
    seoFocusKeyword: 'Shadow Priest Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix shadow priest guide',
      'Shadow Priest Legion Remix build',
      'Legion Remix shadow priest talents'
    ],
    seoTopics: [
      'Voidform cycle planning',
      'Fel artifact insanity routing',
      'Bronze haste investments',
      'Mythic+ multi-dot prep'
    ],
    seoSupportingConcepts: [
      'Void Eruption timing notes',
      'Devouring Plague spend cadence',
      'Shadow Crash placement cues',
      'Mindbender cooldown planning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Boosts AoE insanity generation for dungeon farming' },
      { pathId: 'arcane', reason: 'Provides shields during high-risk solo pulls' }
    ],

    recommendedTraits: ['Touch of Malice', 'Volatile Magics', 'Terror from Below'],

    statPriority: [
      'Intellect',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Keep Vampiric Touch and Shadow Word: Pain up on everything.',
      'Devouring Plague whenever insanity reaches 50 for massive single-target damage.',
      'Voidform plus Twisted Crusade annihilates empowered packs.',
      'Use Disperse to shrug off Time Crisis spikes in Heroic World Tier.',
      'Plan Bronze for the Valorous Blue quiver/dagger combos when shopping.'
    ],

    rotationOverview: {
      title: 'Shadow Priest Priority',
      priority: [
        'Maintain Vampiric Touch and Shadow Word: Pain on all targets.',
        'Use Mind Blast on cooldown to build insanity.',
        'Devouring Plague once insanity hits 50.',
        'Mind Flay filler (or Mind Sear for AoE).',
        'Voidform/Void Eruption on cooldown for huge burst windows.'
      ]
    },

    bronzePriority: [
      '1. Unlock Fel path for Devouring Plague reflection damage.',
      '2. Purchase trinkets that proc haste or insanity generation.',
      '3. Upgrade weapons early; caster staff ilvl is critical.',
      '4. Grab shadow-themed ensembles during Infinite Echoes.',
      '5. Invest Bronze into Torn Invitation weekends for spooky cosmetics.'
    ],

    builds: {
      leveling: 'Dot-and-run build with Searing Nightmare for endless AoE.',
      openWorld: 'Arcane shield hybrid to stay safe while melting packs.',
      mythicPlus: 'Storm/Fel mix with Idol of C’Thun for insanity explosions.',
      raid: 'Pure single-target with Idol of Y’Shaarj and Void Torrent.'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true
  },

  // DEATH KNIGHT SPECS
  {
    classId: 'death-knight',
    specName: 'Blood',
    role: 'Tank',
    metaDescription: 'Blood Death Knight Legion Remix guide highlighting Nature path survivability, Legion Remix blood DK stat priority, WoW Legion Remix tank builds, and Bronze plans.',
    seoFocusKeyword: 'Blood Death Knight Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix blood death knight guide',
      'Blood Death Knight Legion Remix build',
      'Legion Remix blood DK talents'
    ],
    seoTopics: [
      'self-heal window planning',
      'Nature artifact bone routing',
      'Bronze tank investments',
      'Mythic+ grip control prep'
    ],
    seoSupportingConcepts: [
      'Death Strike timing charts',
      'Bone Shield upkeep notes',
      'Gorefiend\'s Grasp setup plans',
      'Vampiric Blood cooldown mapping'
    ],

    bestArtifactPath: 'nature',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds damage to keep threat during Bronze farming' },
      { pathId: 'storm', reason: 'Haste boost for Heart Strike spam in dungeons' }
    ],

    recommendedTraits: ['Touch of Malice', 'Terror from Below', 'Storm Surger'],

    statPriority: [
      'Strength',
      'Versatility',
      'Haste',
      'Mastery',
      'Critical Strike'
    ],

    levelingTips: [
      'Keep Bone Shield stacks high—Marrowrend as soon as they drop below 5.',
      'Death Strike after every big hit to convert damage into healing.',
      'Use Gorefiend’s Grasp to stack empowered mobs on Legion Remix Bronze spawn points.',
      'Carry a Fel barrier by finishing the Fel path once your Nature nodes are capped.',
      'Plan Bronze for the Deathlord transmog set and torn invitations if you love undead foxes.'
    ],

    rotationOverview: {
      title: 'Blood DK Priority',
      priority: [
        'Marrowrend to maintain Bone Shield.',
        'Heart Strike to generate runic power.',
        'Death Strike after you take chunks of damage.',
        'Blood Boil on cooldown for AoE threat.',
        'Vampiric Blood and Dancing Rune Weapon for large pulls.'
      ]
    },

    bronzePriority: [
      '1. Unlock Nature path for absorb barriers before tackling Heroic World Tier.',
      '2. Upgrade weapon and trinkets that give leech/absorbs.',
      '3. Finish Fel path nodes if you push high keystones for speed.',
      '4. Buy Death Knight ensembles after core gear is locked in.',
      '5. Save Bronze for Infinite Echoes housing decor if you want gothic vibes.'
    ],

    builds: {
      leveling: 'Nature sustain with Tightening Grasp for large pulls.',
      openWorld: 'Fel hybrid so you can solo rares faster.',
      mythicPlus: 'Storm/Nature combination for mass control and damage.',
      raid: 'Traditional Blood setup with Red Thirst and Tombstone for progression.'
    },

    groupTier: 'A',
    soloTier: 'S',
    heroicWorldTier: true
  },
  {
    classId: 'death-knight',
    specName: 'Frost',
    role: 'DPS',
    metaDescription: 'Frost Death Knight Legion Remix guide describing Storm path obliterates, Legion Remix frost DK stat priority, WoW Legion Remix builds, and Bronze upgrades.',
    seoFocusKeyword: 'Frost Death Knight Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix frost death knight guide',
      'Frost Death Knight Legion Remix build',
      'Legion Remix frost DK talents'
    ],
    seoTopics: [
      'Pillar of Frost window planning',
      'Storm artifact obliterate routing',
      'Bronze rune weapon upgrades',
      'Mythic+ cleave prep'
    ],
    seoSupportingConcepts: [
      'Breath of Sindragosa management notes',
      'Obliteration priority mapping',
      'Rime proc handling',
      'Frostwyrm\'s Fury timing cues'
    ],

    bestArtifactPath: 'storm',
    alternateArtifactPaths: [
      { pathId: 'fel', reason: 'Adds burst for raid bosses with short burn windows' },
      { pathId: 'nature', reason: 'Keeps healing high while solo farming Bronze' }
    ],

    recommendedTraits: ['Storm Surger', 'Touch of Malice', 'Terror from Below'],

    statPriority: [
      'Strength',
      'Haste',
      'Mastery',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Maintain permanent uptime on Pillar of Frost to smash empowered enemies.',
      'Howling Blast everything—Storm path haste makes it a nuke.',
      'Chain Death Grip to stack adds under Remorseless Winter.',
      'Use Wraith Walk to chase Bronze orbs between pulls.',
      'Plan Bronze upgrades for dual-wield weapons vs. two-handed depending on build.'
    ],

    rotationOverview: {
      title: 'Frost DK Priority',
      priority: [
        'Keep Remorseless Winter active for AoE damage and Gathering Storm stacks.',
        'Obliterate to consume Killing Machine procs.',
        'Howling Blast to apply Frost Fever and for ranged tagging.',
        'Frost Strike to dump runic power.',
        'Use Pillar of Frost on cooldown; align with Breath of Sindragosa if talented.'
      ]
    },

    bronzePriority: [
      '1. Unlock Storm path to supercharge AoE cleave.',
      '2. Upgrade two weapons quickly—Breath builds demand high ilvl.',
      '3. Purchase haste/crit trinkets from Bronze vendors.',
      '4. Grab Frost-specific transmog sets once base power is capped.',
      '5. Reserve Bronze for A Noble Event if you love fox mount cosmetics.'
    ],

    builds: {
      leveling: 'Breath of Sindragosa build for unstoppable AoE.',
      openWorld: 'Obliteration single-target focus with Nature shields.',
      mythicPlus: 'Storm/Fel blend for Spammable Howling Blast and Remorseless Winter.',
      raid: 'Two-handed Obliteration for boss kill phases.'
    },

    groupTier: 'A',
    soloTier: 'B',
    heroicWorldTier: true
  },
  {
    classId: 'death-knight',
    specName: 'Unholy',
    role: 'DPS',
    metaDescription: 'Unholy Death Knight Legion Remix guide featuring Fel path apocalypse bursts, Legion Remix unholy DK stat priority, WoW Legion Remix build notes, and Bronze planning.',
    seoFocusKeyword: 'Unholy Death Knight Legion Remix',
    seoSecondaryKeywords: [
      'Legion Remix unholy death knight guide',
      'Unholy Death Knight Legion Remix build',
      'Legion Remix unholy DK talents'
    ],
    seoTopics: [
      'Army of the Dead planning',
      'Fel artifact wound routing',
      'Bronze pet investments',
      'Mythic+ Epidemic prep'
    ],
    seoSupportingConcepts: [
      'Dark Transformation timing charts',
      'Festering Wound burst sequencing',
      'Apocalypse window mapping',
      'Death Coil runic dump planning'
    ],

    bestArtifactPath: 'fel',
    alternateArtifactPaths: [
      { pathId: 'storm', reason: 'Adds haste for army-building AoE sessions' },
      { pathId: 'nature', reason: 'Improves sustain when soloing empowered rares' }
    ],

    recommendedTraits: ['Touch of Malice', 'Volatile Magics', 'Terror from Below'],

    statPriority: [
      'Strength',
      'Mastery',
      'Haste',
      'Critical Strike',
      'Versatility'
    ],

    levelingTips: [
      'Keep Festering Wounds applied so Scourge Strike and Apocalypse hit hard.',
      'Use Army of the Dead during Turbo Boost windows for Bronze fireworks.',
      'Death Coil dumps runic power; use it to maintain Sudden Doom uptime.',
      'Stack Virulent Plague on mass pulls to spawn constant explosions.',
      'Set the Legion Remix reward tracker to flag trinkets and two-handed blades before shopping.'
    ],

    rotationOverview: {
      title: 'Unholy DK Priority',
      priority: [
        'Apply Festering Wound with Festering Strike.',
        'Use Scourge Strike/Clawing Shadows to pop wounds.',
        'Apocalypse when you have 4+ Festering Wounds up.',
        'Death Coil to spend runic power and fish for Sudden Doom procs.',
        'Summon Gargoyle or Dark Transformation on cooldown for extra burst.'
      ]
    },

    bronzePriority: [
      '1. Unlock Fel path to make Apocalypse detonations even spikier.',
      '2. Buy two-handed weapon upgrades; mastery scales hard with ilvl.',
      '3. Purchase trinkets that summon pets or boost mastery.',
      '4. Save Bronze for necromancer-themed ensembles during Infinite Echoes.',
      '5. Pick up extra Torn Invitations for undead fox glamour if desired.'
    ],

    builds: {
      leveling: 'Festermight build with constant wound explosions.',
      openWorld: 'Nature hybrid for extra self-healing during solo Bronze loops.',
      mythicPlus: 'Storm/Fel combo to flood the field with ghouls.',
      raid: 'Fel burst with Army of the Dead and Summon Gargoyle alignment.'
    },

    groupTier: 'A',
    soloTier: 'A',
    heroicWorldTier: true
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
