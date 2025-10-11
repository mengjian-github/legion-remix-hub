export interface ClassSpec {
  name: string;
  role: 'Tank' | 'Healer' | 'DPS';
  description: string;
}

export interface WowClass {
  id: string;
  name: string;
  description: string;
  specs: ClassSpec[];
  primaryStat: string;
  armorType: string;
  felMount: {
    name: string;
    cost: number; // Bronze cost for the first unlock (typically free)
    altCost?: number; // Bronze cost for alternate characters
  };
  iconColor: string;
}

export const classes: WowClass[] = [
  {
    id: 'warrior',
    name: 'Warrior',
    description: 'Plate bruiser that swaps between banner support, execute burst, and indomitable tanking.',
    specs: [
      { name: 'Arms', role: 'DPS', description: 'Two-hander that bleeds foes before detonating execute windows' },
      { name: 'Fury', role: 'DPS', description: 'Dual-wield berserker that sustains Enrage-fueled cleave' },
      { name: 'Protection', role: 'Tank', description: 'Shield tank layering block chains and spell reflects' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Battlewolf', cost: 0, altCost: 20000 },
    iconColor: '#C79C6E'
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'Holy crusader offering blessings, reactive heals, and plate-clad survivability in every role.',
    specs: [
      { name: 'Holy', role: 'Healer', description: 'Beacon-healing support with potent cooldown layering' },
      { name: 'Protection', role: 'Tank', description: 'Block-centric tank that chains mitigation and group buffs' },
      { name: 'Retribution', role: 'DPS', description: 'Explosive melee crusader built around Holy Power bursts' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Charger', cost: 0, altCost: 20000 },
    iconColor: '#F58CBA'
  },
  {
    id: 'hunter',
    name: 'Hunter',
    description: 'Mobile marksman fighting shoulder-to-shoulder with loyal beasts, traps, and volleys.',
    specs: [
      { name: 'Beast Mastery', role: 'DPS', description: 'Hands-off pet general that keeps damage flowing while on the move' },
      { name: 'Marksmanship', role: 'DPS', description: 'Precision sniper specializing in priority shots and volley cleave' },
      { name: 'Survival', role: 'DPS', description: 'Melee tracker juggling bombs, bleeds, and pet utility' }
    ],
    primaryStat: 'Agility',
    armorType: 'Mail',
    felMount: { name: 'Felscorched Wolfhawk', cost: 0, altCost: 20000 },
    iconColor: '#ABD473'
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'Stealth powerhouse swapping between poisons, blade flurries, and shadow magic.',
    specs: [
      { name: 'Assassination', role: 'DPS', description: 'Poison bleeds that ramp DoT pressure on priority targets' },
      { name: 'Outlaw', role: 'DPS', description: 'Swashbuckler with cooldown cycling and Blade Flurry cleave' },
      { name: 'Subtlety', role: 'DPS', description: 'Shadow dancer striking from stealth windows for massive burst' }
    ],
    primaryStat: 'Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Shadeprowler', cost: 0, altCost: 20000 },
    iconColor: '#FFF569'
  },
  {
    id: 'priest',
    name: 'Priest',
    description: 'Cloth caster balancing radiant healing, preventive shields, and void-fueled damage.',
    specs: [
      { name: 'Discipline', role: 'Healer', description: 'Hybrid atonement healer that pairs damage with absorbs' },
      { name: 'Holy', role: 'Healer', description: 'Classic throughput healer with powerful group cooldowns' },
      { name: 'Shadow', role: 'DPS', description: 'Void caster ramping Insanity into Devouring Plague bursts' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Netherlight', cost: 0, altCost: 20000 },
    iconColor: '#FFFFFF'
  },
  {
    id: 'death-knight',
    name: 'Death Knight',
    description: 'Runeblade juggernaut wielding necromantic magic, diseases, and self-healing.',
    specs: [
      { name: 'Blood', role: 'Tank', description: 'Drain-tank with unmatched sustain and crowd control' },
      { name: 'Frost', role: 'DPS', description: 'Dual-wield or two-hand striker spamming icy obliterates' },
      { name: 'Unholy', role: 'DPS', description: 'Disease summoner commanding an undead army for burst windows' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Deathlord', cost: 0, altCost: 20000 },
    iconColor: '#C41F3B'
  },
  {
    id: 'shaman',
    name: 'Shaman',
    description: 'Elemental conduit calling on storms, spirits, and totems for every encounter.',
    specs: [
      { name: 'Elemental', role: 'DPS', description: 'Ranged nuker weaving lava bursts and earthquake cleave' },
      { name: 'Enhancement', role: 'DPS', description: 'Dual-wield striker empowering weapons with elemental surges' },
      { name: 'Restoration', role: 'Healer', description: 'Totemic healer flexing between proactive and reactive builds' }
    ],
    primaryStat: 'Intellect/Agility',
    armorType: 'Mail',
    felMount: { name: 'Felscorched Stormcrow', cost: 0, altCost: 20000 },
    iconColor: '#0070DE'
  },
  {
    id: 'mage',
    name: 'Mage',
    description: 'Arcane prodigy that manipulates time, firestorms, and freezing control.',
    specs: [
      { name: 'Arcane', role: 'DPS', description: 'Mana management spec with huge burst windows and mobility tricks' },
      { name: 'Fire', role: 'DPS', description: 'Combustion specialist chaining crits into phoenix flames' },
      { name: 'Frost', role: 'DPS', description: 'Control mage with consistent cleave and icy slows' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Disc', cost: 0, altCost: 20000 },
    iconColor: '#69CCF0'
  },
  {
    id: 'warlock',
    name: 'Warlock',
    description: 'Fel spellcaster commanding demons, curses, and reality-bending chaos magic.',
    specs: [
      { name: 'Affliction', role: 'DPS', description: 'Damage-over-time master spreading rot across packs' },
      { name: 'Demonology', role: 'DPS', description: 'Commander of a demon swarm with implosion burst' },
      { name: 'Destruction', role: 'DPS', description: 'Chaos Bolt turret launching devastating nukes' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Dreadsteed', cost: 0, altCost: 20000 },
    iconColor: '#9482C9'
  },
  {
    id: 'monk',
    name: 'Monk',
    description: 'Agile martial artist weaving chi-fueled strikes, brews, and healing mists.',
    specs: [
      { name: 'Brewmaster', role: 'Tank', description: 'Stagger tank smoothing damage with elusive brews' },
      { name: 'Mistweaver', role: 'Healer', description: 'Mobile healer mixing enveloping mists and melee punches' },
      { name: 'Windwalker', role: 'DPS', description: 'Combo-driven striker with exceptional mobility and AoE' }
    ],
    primaryStat: 'Agility/Intellect',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Ban-Lu', cost: 0, altCost: 20000 },
    iconColor: '#00FF96'
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'Shape-shifting guardian attuned to moonfire, claws, bear hide, and soothing growth.',
    specs: [
      { name: 'Balance', role: 'DPS', description: 'Eclipse caster with strong AoE and mobility through shapeshifts' },
      { name: 'Feral', role: 'DPS', description: 'Bleed-focused cat weaving combo points and high mobility' },
      { name: 'Guardian', role: 'Tank', description: 'Bear tank with massive health and Frenzied Regen uptime' },
      { name: 'Restoration', role: 'Healer', description: 'Heal-over-time specialist layering HoTs and cooldowns' }
    ],
    primaryStat: 'Intellect/Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Archdruid', cost: 0, altCost: 20000 },
    iconColor: '#FF7D0A'
  },
  {
    id: 'demon-hunter',
    name: 'Demon Hunter',
    description: 'Illidari avenger with double-jump mobility and fel-charged aggression.',
    specs: [
      { name: 'Havoc', role: 'DPS', description: 'Acrobatic melee DPS with Eye Beam burst and constant movement' },
      { name: 'Vengeance', role: 'Tank', description: 'Self-healing tank leveraging soul fragments and fiery brands' }
    ],
    primaryStat: 'Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Slayer', cost: 0, altCost: 20000 },
    iconColor: '#A330C9'
  }
];
