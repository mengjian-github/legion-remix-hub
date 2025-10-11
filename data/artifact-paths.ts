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
    description: 'Summons treants that pulse damage and distribute absorb shields, turning outdoor pulls into controlled skirmishes.',
    focus: 'Balanced damage and survivability with passive resource regen',
    mechanics: [
      'Dreamweaving accelerates cooldown recovery and restores your primary resource every second',
      'Highmountain Fortitude converts damage taken into a 4-second barrier on a loop',
      'Waking Frenzy stacks up to 15% damage/healing when you or allies trigger Souls of the Caw'
    ],
    bestFor: [
      'Solo play',
      'Questing and open world content',
      'Players prioritizing sustain and crowd-friendly pulls',
      'Leveling 10-80 before swapping to aggressive paths'
    ]
  },
  {
    id: 'fel',
    name: 'Fel Path',
    activeAbility: 'Twisted Crusade',
    description: 'Calls in a subjugated Dreadlord that rains meteor fire and can be detonated for a Felspike nova.',
    focus: 'Pure damage output with aggressive burst windows',
    mechanics: [
      'Fel Touched stacks blow up every four seconds, rewarding sustained cleave',
      'Touch of Malice guarantees Twisted Crusade crits and spreads Fel Touched faster',
      'I Am My Scars reflects enemy hits for Chaos damage, ideal for tanks and soloing',
      'Felspike replaces Twisted Crusade after cast, letting you sacrifice the Dreadlord for massive AoE'
    ],
    bestFor: [
      'Single-target boss encounters',
      'Raid content',
      'Cleave and AoE damage when packs survive for Fel explosions',
      'Max-level DPS optimization and tank threat bursts'
    ]
  },
  {
    id: 'arcane',
    name: 'Arcane Path',
    activeAbility: "Naran's Everdisc",
    description: 'Throw and catch Naran’s Everdisc up to three times, gaining damage, haste, and shielding with each return.',
    focus: 'Skill-based burst with reactive shielding',
    mechanics: [
      '30% extra damage per successful catch, rewarded with Naran’s Blessing haste buff at three catches',
      'Arcane Aegis/Ward choice node adds powerful absorbs while kiting or turret casting',
      'Volatile Magics causes crits to erupt, making it a favorite for caster-heavy groups',
      'Temporal Retaliation slows attackers when shields absorb hits'
    ],
    bestFor: [
      'Duo play (pairs excellently with Fel)',
      'Players who enjoy active gameplay',
      'Mixed solo and group content needing extra mitigation',
      'Classes with strong crit scaling and stationary burn phases'
    ]
  },
  {
    id: 'storm',
    name: 'Storm Path',
    activeAbility: 'Tempest Wrath',
    description: 'Channels Tempest Wrath to blanket packs in lightning while ramping your haste and movement.',
    focus: 'Massive AoE damage with sustained haste buffs',
    mechanics: [
      'Damage scales with each target caught inside the storm',
      'Storm Infusion hero nodes feed constant haste for casters and healers',
      'Tempest Bulwark lets tanks convert the storm into shields while moving',
      'Pairs well with specs that chain AoE stuns or roots'
    ],
    bestFor: [
      '5-man dungeons',
      'Mythic+ content',
      'Heavy AoE situations with stacked mobs',
      'Leveling in groups that cleave down large pulls'
    ]
  },
  {
    id: 'holy',
    name: 'Holy Light Path',
    activeAbility: "Vindicator's Judgment",
    description: 'Calls down Vindicator’s Judgment to smite foes while pulsing healing to nearby allies.',
    focus: 'Healing-first support that still contributes damage',
    mechanics: [
      'Light’s Conduit converts damage dealt into cleave healing',
      'Radiant Shielding grants large absorbs after casting Vindicator’s Judgment',
      'Stellar Sanctuary reduces damage taken for your group while you channel',
      'Stacks well with healer specs that already have throughput cooldowns'
    ],
    bestFor: [
      'Healer specs',
      'Group content',
      'Players struggling with survivability in raid groups',
      'Support-focused gameplay that still wants offensive value'
    ]
  }
];
