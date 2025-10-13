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
    metaDescription: 'Holy Paladin Legion Remix guide covering the best Arcane artifact path, optimal talents, stat priorities, and leveling strategies—your quick Legion Remix Holy Paladin build overview and Legion Remix paladin guide starting point.',

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
    metaDescription: 'Protection Paladin Legion Remix guide detailing the best Fel artifact path, tanking talents, stat priorities, and strategies for dungeons, raids, and solo content with a Legion Remix Prot Paladin guide focus.',

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
    metaDescription: 'Retribution Paladin Legion Remix guide outlining the best Fel artifact path, top DPS talents, stat priorities, and ways to dominate both solo and group content—use this Legion Remix Paladin guide slice to plan your burst windows.',

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

  // WARRIOR SPECS
  {
    classId: 'warrior',
    specName: 'Arms',
    role: 'DPS',
    metaDescription:
      'Arms Warrior Legion Remix guide covering Fel path burst windows, Infinite Knowledge priorities, and optimal Bronze spending during The War Within 11.2.5.',

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
    metaDescription: 'Affliction Warlock Legion Remix guide focusing on multi-target DoTs, the best Storm artifact path, stat priorities, and tips to excel in The War Within 11.2.5 event—an all-in-one warlock remix guide for DoT lovers.',

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
    metaDescription: 'Demonology Warlock Legion Remix guide highlighting the best Fel artifact path, demonic army builds, stat priorities, and Bronze spending for Patch 11.2.5, rounding out our Legion Remix warlock build playbook.',

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
    metaDescription: 'Destruction Warlock Legion Remix guide updated for Patch 11.2.5 covering the best Fel artifact path, Chaos Bolt builds, stat priorities, and Bronze spending tips—the go-to Legion Remix warlock talents snapshot for turret players.',

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
    heroicWorldTier: true
  },

  // DEMON HUNTER SPECS
  {
    classId: 'demon-hunter',
    specName: 'Havoc',
    role: 'DPS',
    metaDescription: 'Havoc Demon Hunter Legion Remix guide covering Fel path burst windows, Infinite Power farming, and stat priorities for the 2025 Timerunning season.',

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
