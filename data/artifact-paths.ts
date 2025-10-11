// Artifact Paths for Legion Remix
export interface ArtifactPath {
  id: string;
  name: string;
  activeAbility: string;
  description: string;
  focus: string;
  mechanics: string[];
  bestFor: string[];
}

export const artifactPaths: ArtifactPath[] = [
  {
    id: 'nature',
    name: 'Nature Path',
    activeAbility: 'Call of the Forest',
    description: 'Summons treants to aid you in battle, providing damage procs and survivability shields.',
    focus: 'Balanced damage and survivability',
    mechanics: [
      'Dreamweaving: Reduces cooldowns and restores primary resource',
      'Grants protective shields',
      'Strong team synergy with damage procs'
    ],
    bestFor: [
      'Solo play',
      'Questing and open world content',
      'Players prioritizing survivability',
      'Leveling 10-80'
    ]
  },
  {
    id: 'fel',
    name: 'Fel Path',
    activeAbility: 'Twisted Crusade',
    description: 'Summons a powerful Dreadlord that rains destruction on enemies.',
    focus: 'Pure damage output',
    mechanics: [
      'Applies Fel Touched debuff to enemies',
      'Rain of Fire and Meteors for AoE damage',
      'Felspike capstone: Explode Dreadlord for massive AoE',
      'Scales incredibly well with gear'
    ],
    bestFor: [
      'Single-target boss encounters',
      'Raid content',
      'Cleave and AoE damage',
      'Max-level DPS optimization'
    ]
  },
  {
    id: 'arcane',
    name: 'Arcane Path',
    activeAbility: "Naran's Everdisc",
    description: 'Throw and catch a magical disc that increases damage with each successful catch.',
    focus: 'Skill-based damage with survivability',
    mechanics: [
      'Throw/catch disc up to 3 times',
      '30% damage increase per successful catch',
      'Grants survivability bonuses when stationary',
      'Synergizes well with Fel users in groups'
    ],
    bestFor: [
      'Duo play (pairs excellently with Fel)',
      'Players who enjoy active gameplay',
      'Mixed solo and group content',
      'Balanced survivability and damage'
    ]
  },
  {
    id: 'storm',
    name: 'Storm Path',
    activeAbility: 'Tempest Wrath',
    description: 'Unleashes devastating lightning and storm damage across multiple enemies.',
    focus: 'Massive AoE damage',
    mechanics: [
      'More damage per target hit',
      'Grants haste buffs',
      'Can be cast while moving (for casters)',
      'Exceptional in multi-target scenarios'
    ],
    bestFor: [
      '5-man dungeons',
      'Mythic+ content',
      'Heavy AoE situations',
      'Leveling in groups'
    ]
  },
  {
    id: 'holy',
    name: 'Holy Light Path',
    activeAbility: "Vindicator's Judgment",
    description: 'Channels holy power to heal allies and smite enemies simultaneously.',
    focus: 'Healing and support with damage',
    mechanics: [
      'AoE healing procs',
      'Damage dealt heals nearby allies',
      'Strong defensive utility',
      'Scales with group size'
    ],
    bestFor: [
      'Healer specs',
      'Group content',
      'Players struggling with survivability',
      'Support-focused gameplay'
    ]
  }
];
