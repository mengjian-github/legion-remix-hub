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
    description: 'A fierce melee combatant who uses rage to fuel devastating attacks.',
    specs: [
      { name: 'Arms', role: 'DPS', description: 'Two-handed weapon specialist' },
      { name: 'Fury', role: 'DPS', description: 'Dual-wielding berserker' },
      { name: 'Protection', role: 'Tank', description: 'Stalwart defender' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Battlewolf', cost: 0, altCost: 20000 },
    iconColor: '#C79C6E'
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'A holy warrior who wields the Light to protect allies and smite enemies.',
    specs: [
      { name: 'Holy', role: 'Healer', description: 'Light-powered healer' },
      { name: 'Protection', role: 'Tank', description: 'Holy defender' },
      { name: 'Retribution', role: 'DPS', description: 'Melee crusader' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Charger', cost: 0, altCost: 20000 },
    iconColor: '#F58CBA'
  },
  {
    id: 'hunter',
    name: 'Hunter',
    description: 'A master of ranged combat who hunts with faithful animal companions.',
    specs: [
      { name: 'Beast Mastery', role: 'DPS', description: 'Pet master' },
      { name: 'Marksmanship', role: 'DPS', description: 'Precision sniper' },
      { name: 'Survival', role: 'DPS', description: 'Melee tracker' }
    ],
    primaryStat: 'Agility',
    armorType: 'Mail',
    felMount: { name: 'Felscorched Wolfhawk', cost: 0, altCost: 20000 },
    iconColor: '#ABD473'
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'A stealthy assassin who strikes from the shadows with deadly precision.',
    specs: [
      { name: 'Assassination', role: 'DPS', description: 'Poison and bleed specialist' },
      { name: 'Outlaw', role: 'DPS', description: 'Swashbuckling pirate' },
      { name: 'Subtlety', role: 'DPS', description: 'Shadow dancer' }
    ],
    primaryStat: 'Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Shadeprowler', cost: 0, altCost: 20000 },
    iconColor: '#FFF569'
  },
  {
    id: 'priest',
    name: 'Priest',
    description: 'A versatile spellcaster who can heal allies or assault minds.',
    specs: [
      { name: 'Discipline', role: 'Healer', description: 'Preventive healer' },
      { name: 'Holy', role: 'Healer', description: 'Traditional healer' },
      { name: 'Shadow', role: 'DPS', description: 'Dark magic caster' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Netherlight', cost: 0, altCost: 20000 },
    iconColor: '#FFFFFF'
  },
  {
    id: 'death-knight',
    name: 'Death Knight',
    description: 'An undead warrior who commands dark magic and diseases.',
    specs: [
      { name: 'Blood', role: 'Tank', description: 'Self-healing tank' },
      { name: 'Frost', role: 'DPS', description: 'Dual-wield specialist' },
      { name: 'Unholy', role: 'DPS', description: 'Disease and minion master' }
    ],
    primaryStat: 'Strength',
    armorType: 'Plate',
    felMount: { name: 'Felscorched Deathlord', cost: 0, altCost: 20000 },
    iconColor: '#C41F3B'
  },
  {
    id: 'shaman',
    name: 'Shaman',
    description: 'A spellcaster who channels the elements and ancestral spirits.',
    specs: [
      { name: 'Elemental', role: 'DPS', description: 'Ranged elemental caster' },
      { name: 'Enhancement', role: 'DPS', description: 'Melee shaman' },
      { name: 'Restoration', role: 'Healer', description: 'Nature healer' }
    ],
    primaryStat: 'Intellect/Agility',
    armorType: 'Mail',
    felMount: { name: 'Felscorched Stormcrow', cost: 0, altCost: 20000 },
    iconColor: '#0070DE'
  },
  {
    id: 'mage',
    name: 'Mage',
    description: 'A powerful arcane spellcaster who manipulates fire, frost, and arcane magic.',
    specs: [
      { name: 'Arcane', role: 'DPS', description: 'Pure magic specialist' },
      { name: 'Fire', role: 'DPS', description: 'Combustion master' },
      { name: 'Frost', role: 'DPS', description: 'Ice magic controller' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Disc', cost: 0, altCost: 20000 },
    iconColor: '#69CCF0'
  },
  {
    id: 'warlock',
    name: 'Warlock',
    description: 'A dark spellcaster who wields fel magic and commands demons.',
    specs: [
      { name: 'Affliction', role: 'DPS', description: 'DoT specialist' },
      { name: 'Demonology', role: 'DPS', description: 'Demon summoner' },
      { name: 'Destruction', role: 'DPS', description: 'Chaos bolt caster' }
    ],
    primaryStat: 'Intellect',
    armorType: 'Cloth',
    felMount: { name: 'Felscorched Dreadsteed', cost: 0, altCost: 20000 },
    iconColor: '#9482C9'
  },
  {
    id: 'monk',
    name: 'Monk',
    description: 'A martial artist who harnesses chi energy in combat.',
    specs: [
      { name: 'Brewmaster', role: 'Tank', description: 'Drunken brawler tank' },
      { name: 'Mistweaver', role: 'Healer', description: 'Mist healer' },
      { name: 'Windwalker', role: 'DPS', description: 'Melee striker' }
    ],
    primaryStat: 'Agility/Intellect',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Ban-Lu', cost: 0, altCost: 20000 },
    iconColor: '#00FF96'
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'A shapeshifter who takes on different forms to fulfill various roles.',
    specs: [
      { name: 'Balance', role: 'DPS', description: 'Ranged nature caster' },
      { name: 'Feral', role: 'DPS', description: 'Melee cat form' },
      { name: 'Guardian', role: 'Tank', description: 'Bear tank' },
      { name: 'Restoration', role: 'Healer', description: 'HoT healer' }
    ],
    primaryStat: 'Intellect/Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Archdruid', cost: 0, altCost: 20000 },
    iconColor: '#FF7D0A'
  },
  {
    id: 'demon-hunter',
    name: 'Demon Hunter',
    description: 'An agile melee fighter who sacrificed their sight for demonic power.',
    specs: [
      { name: 'Havoc', role: 'DPS', description: 'Agile demon slayer' },
      { name: 'Vengeance', role: 'Tank', description: 'Demonic tank' }
    ],
    primaryStat: 'Agility',
    armorType: 'Leather',
    felMount: { name: 'Felscorched Slayer', cost: 0, altCost: 20000 },
    iconColor: '#A330C9'
  }
];
