import { rewardReference, RewardReferenceTable, RewardRow } from './rewardReference';
import { legionImages } from './images';

export type RewardCategoryKey = 'mounts' | 'pets' | 'toys' | 'transmog' | 'housing' | 'reputation';

export const rewardTypes = [
  'mount',
  'pet',
  'toy',
  'ensemble',
  'weapon',
  'appearance',
  'housing',
  'reputation',
  'utility',
  'arsenal'
] as const;

export type RewardType = typeof rewardTypes[number];

export interface RewardCost {
  amount: number | null;
  display: string;
  currency: string;
  raw: string;
}

export interface RewardEntry {
  id: string;
  name: string;
  nameField: string;
  type: RewardType;
  category: RewardCategoryKey;
  sectionTitle: string;
  tableKey: string;
  tableLabel: string;
  tableHeading: string | null;
  cost: RewardCost | null;
  costField?: string;
  phase?: string;
  phaseField?: string;
  source?: string;
  sourceField?: string;
  requirement?: string;
  requirementField?: string;
  achievement?: string;
  achievementField?: string;
  note?: string;
  metadata: Record<string, string>;
}

export interface RewardTableConfig {
  key: string;
  label: string;
  heading: string | null;
  description?: string;
  note?: string;
  category: RewardCategoryKey;
  type: RewardType;
  reference: RewardReferenceTable;
  nameField: string;
  costField?: string;
  costCurrency?: string;
  phaseField?: string;
  sourceField?: string;
  requirementField?: string;
  achievementField?: string;
}

export interface RewardCategorySection {
  key: RewardCategoryKey;
  title: string;
  subtitle: string;
  image?: string;
  tables: RewardTableConfig[];
}

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

type TableOptions = {
  description?: string;
  note?: string;
  nameField: string;
  costField?: string;
  costCurrency?: string;
  phaseField?: string;
  sourceField?: string;
  requirementField?: string;
  achievementField?: string;
};

const EMPTY_COST_VALUES = new Set(['', '-', '—', '–', 'n/a', 'na', 'none', 'no cost']);

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .trim();
}

function parseNumeric(value: string): number | null {
  const digits = value.replace(/[^0-9]/g, '');
  if (!digits) {
    return null;
  }
  return Number(digits);
}

function createCost(value: string | undefined, currency?: string): RewardCost | null {
  if (!value) {
    return null;
  }
  const cleaned = value.replace(/\u00a0/g, ' ').trim();
  if (!cleaned || EMPTY_COST_VALUES.has(cleaned.toLowerCase())) {
    return null;
  }
  return {
    amount: parseNumeric(cleaned),
    display: cleaned,
    currency: currency ?? 'Cost',
    raw: cleaned
  };
}

function makeTableConfig(
  category: RewardCategoryKey,
  key: string,
  label: string,
  type: RewardType,
  reference: RewardReferenceTable,
  options: TableOptions
): RewardTableConfig {
  const currency = options.costCurrency
    ?? (options.costField && options.costField.toLowerCase().includes('bronze') ? 'Bronze' : options.costField);

  return {
    key,
    label,
    heading: reference.heading,
    description: options.description,
    note: options.note,
    category,
    type,
    reference,
    nameField: options.nameField,
    costField: options.costField,
    costCurrency: currency,
    phaseField: options.phaseField,
    sourceField: options.sourceField,
    requirementField: options.requirementField,
    achievementField: options.achievementField
  };
}

const mountsTables = rewardReference.mounts;
const mountTableConfigs: RewardTableConfig[] = [
  makeTableConfig('mounts', 'mounts-exclusive', 'Remix-exclusive vendor mounts', 'mount', mountsTables[0], {
    description: 'Brand-new fel-tinted and recolored mounts sold by Hemet Nesingwary XVII as each phase unlocks.',
    nameField: 'Mount',
    costField: 'Bronze',
    phaseField: 'Phase'
  }),
  makeTableConfig('mounts', 'mounts-legacy', 'Legacy Legion mounts converted to Bronze', 'mount', mountsTables[1], {
    description: 'Boss drop and reputation mounts from Legion now available for Bronze purchase.',
    nameField: 'Mount',
    costField: 'Bronze',
    sourceField: 'Source'
  }),
  makeTableConfig('mounts', 'mounts-class-hall', 'Class hall mount variants', 'mount', mountsTables[2], {
    description: 'Timerunner class achievements unlock these fel-scorched class rides account-wide.',
    nameField: 'Mount',
    costField: 'Bronze',
    achievementField: 'Achievement',
    note: 'Bronze cost is for alternate characters after earning the Timerunner achievement.'
  })
];

const petTables = rewardReference.pets;
const petTableConfigs: RewardTableConfig[] = [
  makeTableConfig('pets', 'pets-achievement', 'Achievement-only pets', 'pet', petTables[0], {
    description: 'Zone meta achievements award unique battle pets during Legion Remix.',
    nameField: 'Pet',
    phaseField: 'Phase',
    achievementField: 'Achievement'
  }),
  makeTableConfig('pets', 'pets-phase-vendor', 'Phase vendor pets', 'pet', petTables[1], {
    description: 'Infinite Bazaar companions rotating in with each phase milestone.',
    nameField: 'Pet',
    phaseField: 'Phase',
    costField: 'Bronze'
  }),
  makeTableConfig('pets', 'pets-legacy-vendor', 'Legacy pets for Bronze', 'pet', petTables[2], {
    description: 'Former drops, mission rewards, and class hall companions converted to Bronze costs.',
    nameField: 'Pet',
    phaseField: 'Phase',
    costField: 'Bronze',
    sourceField: 'Source'
  })
];

const toyTables = rewardReference.toys;
const toyTableConfigs: RewardTableConfig[] = [
  makeTableConfig('toys', 'toys-infinite-bazaar', 'Infinite Bazaar toys & props', 'toy', toyTables[0], {
    description: 'Mission, drop, and vendor toys now purchasable for Bronze across Remix phases.',
    nameField: 'Name',
    sourceField: 'Source',
    phaseField: 'Phase',
    costField: 'Bronze'
  })
];

const housingTables = rewardReference.housing;
const housingTableConfigs: RewardTableConfig[] = [
  makeTableConfig('housing', 'housing-grand-decor', 'Infinite Echoes decor bundles', 'housing', housingTables[0], {
    description: 'Large housing set pieces unlocked by Legion achievements and Bronze expenditures.',
    nameField: 'Decor',
    achievementField: 'Achievement',
    costField: 'Bronze*',
    costCurrency: 'Bronze'
  }),
  makeTableConfig('housing', 'housing-accent-decor', 'Accent decor unlocks', 'housing', housingTables[1], {
    description: 'Smaller props and accent pieces tied to faction achievements and Bronze purchases.',
    nameField: 'Decor',
    achievementField: 'Achievement',
    costField: 'Bronze*',
    costCurrency: 'Bronze'
  })
];

const transmogTables = rewardReference.transmog;
const transmogTableConfigs: RewardTableConfig[] = [
  makeTableConfig('transmog', 'transmog-sargerei', 'Sargerei Commander ensembles (achievements)', 'ensemble', transmogTables[0], {
    description: 'Four fel-infused ensembles awarded for Remix metas and keystone feats.',
    nameField: 'Ensemble',
    achievementField: 'Achievement',
    phaseField: 'Phase'
  }),
  makeTableConfig('transmog', 'transmog-exclusive', 'Exclusive ensembles (Bronze)', 'ensemble', transmogTables[1], {
    description: 'Brand-new back and shoulder ensembles debuting in Legion Remix.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Type'
  }),
  makeTableConfig('transmog', 'transmog-open-world', 'Open world & quest ensembles', 'ensemble', transmogTables[2], {
    description: 'Campaign and quest ensembles made available for Bronze.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Type'
  }),
  makeTableConfig('transmog', 'transmog-dungeon', 'Dungeon ensembles', 'ensemble', transmogTables[3], {
    description: 'Timeworn keystone dungeons grant access to these themed ensembles.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Type'
  }),
  makeTableConfig('transmog', 'transmog-trial-of-valor', 'Trial of Valor ensembles', 'ensemble', transmogTables[4], {
    description: 'Trial of Valor class ensembles now purchasable for Bronze.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Raid'
  }),
  makeTableConfig('transmog', 'transmog-mythic-raid', 'Legion raid ensembles (Bronze)', 'ensemble', transmogTables[5], {
    description: 'Mythic raid tier ensembles spanning Nighthold through Antorus.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Raid'
  }),
  makeTableConfig('transmog', 'transmog-raid-finder', 'Raid Finder ensembles', 'ensemble', transmogTables[6], {
    description: 'LFR recolors of Legion sets tied to each raid.',
    nameField: 'Ensemble',
    sourceField: 'Raid'
  }),
  makeTableConfig('transmog', 'transmog-normal-raid', 'Normal raid ensembles', 'ensemble', transmogTables[7], {
    description: 'Normal-mode recolors with raid associations noted.',
    nameField: 'Ensemble',
    sourceField: 'Raid'
  }),
  makeTableConfig('transmog', 'transmog-heroic-raid', 'Heroic raid ensembles', 'ensemble', transmogTables[8], {
    description: 'Heroic recolors of Legion tier sets for collectors.',
    nameField: 'Ensemble',
    sourceField: 'Raid'
  }),
  makeTableConfig('transmog', 'transmog-lost-and-found', 'Lost & found apparel (Bronze)', 'ensemble', transmogTables[9], {
    description: 'Previously unobtainable appearances restored via Bronze purchases.',
    nameField: 'Ensemble',
    costField: 'Bronze',
    sourceField: 'Original Version'
  }),
  makeTableConfig('transmog', 'transmog-discount-cloaks', 'Discount cloak ensembles', 'ensemble', transmogTables[10], {
    description: 'Budget cloak bundles for Bronze, ideal for filling wardrobe gaps.',
    nameField: 'Ensemble',
    costField: 'Bronze'
  }),
  makeTableConfig('transmog', 'transmog-achievement-sets', 'Achievement sets & appearances', 'ensemble', transmogTables[11], {
    description: 'Armor sets rewarded through Legion Remix achievements.',
    nameField: 'Set',
    achievementField: 'Achievement'
  }),
  makeTableConfig('transmog', 'transmog-single-appearances', 'Single item appearances', 'appearance', transmogTables[12], {
    description: 'Individual armor pieces highlighted with slot coverage.',
    nameField: 'Item Appearance',
    sourceField: 'Armor Type'
  }),
  makeTableConfig('transmog', 'transmog-arsenals', 'Arsenal weapon bundles (Bronze)', 'arsenal', transmogTables[13], {
    description: 'Weapon bundles once locked behind class campaigns or invasions.',
    nameField: 'Arsenal',
    costField: 'Bronze',
    sourceField: 'Item Types'
  }),
  makeTableConfig('transmog', 'transmog-weapon-sets-achievement', 'Weapon appearances with achievements', 'weapon', transmogTables[14], {
    description: 'Weapon looks earned via Remix achievements and raid metas.',
    nameField: 'Weapon Appearance',
    achievementField: 'Achievement',
    sourceField: 'Set'
  }),
  makeTableConfig('transmog', 'transmog-weapon-sets', 'Weapon appearances checklist', 'weapon', transmogTables[15], {
    description: 'Supplemental list tracking additional weapon appearances.',
    nameField: 'Weapon Appearance',
    sourceField: 'Type'
  }),
  makeTableConfig('transmog', 'transmog-weapon-enchants', 'Weapon enchantments', 'appearance', transmogTables[16], {
    description: 'Illusions and weapon enchant visuals sourced from Legion content.',
    nameField: 'Weapon Enchantment Appearance',
    sourceField: 'Source',
    requirementField: 'Source Type'
  })
];

const reputationTables = rewardReference.reputation;
const reputationTableConfigs: RewardTableConfig[] = [
  makeTableConfig('reputation', 'rep-court-of-farondis-costs', 'Court of Farondis — vendor stock', 'reputation', reputationTables[0], {
    description: 'Order Resources, Bronze, and curios from the Farondis quartermaster.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-court-of-farondis-paragon', 'Court of Farondis — extras & paragon', 'reputation', reputationTables[1], {
    description: 'Paragon-only cosmetics and mounts from the Farondis emissary.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-dreamweavers-costs', 'Dreamweavers — vendor stock', 'reputation', reputationTables[2], {
    description: 'Val’sharah vendor goods including toys and pets.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-dreamweavers-paragon', 'Dreamweavers — extras & paragon', 'reputation', reputationTables[3], {
    description: 'Additional items unlocked at Paragon caches for Dreamweavers.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-highmountain-costs', 'Highmountain Tribe — vendor stock', 'reputation', reputationTables[4], {
    description: 'Taunka-inspired mounts, toys, and utilitarian items.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-highmountain-paragon', 'Highmountain Tribe — extras & paragon', 'reputation', reputationTables[5], {
    description: 'Additional rewards unlocked via Paragon caches in Highmountain.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-nightfallen-costs', 'The Nightfallen — vendor stock', 'reputation', reputationTables[6], {
    description: 'Suramar ensembles, pets, and toys available for various currencies.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-nightfallen-paragon', 'The Nightfallen — extras & paragon', 'reputation', reputationTables[7], {
    description: 'Paragon cache unlocks for the Nightfallen including mounts.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-wardens-costs', 'The Wardens — vendor stock', 'reputation', reputationTables[8], {
    description: 'Stealthy toys, maps, and Wardens-themed collectibles.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-wardens-paragon', 'The Wardens — extras & paragon', 'reputation', reputationTables[9], {
    description: 'Rare drops and paragon-only cosmetics from the Wardens.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-valarjar-costs', 'Valarjar — vendor stock', 'reputation', reputationTables[10], {
    description: 'Stormheim-themed toys, maps, and Valarjar mounts.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-valarjar-paragon', 'Valarjar — extras & paragon', 'reputation', reputationTables[11], {
    description: 'Paragon cache rewards from the Valarjar including mounts.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-legionfall-costs', 'Armies of Legionfall — vendor stock', 'reputation', reputationTables[12], {
    description: 'Broken Shore war supplies, arsenals, and Legionfall arsenal bundles.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-legionfall-paragon', 'Armies of Legionfall — extras & paragon', 'reputation', reputationTables[13], {
    description: 'Paragon rewards including unique pets and toys from the Legionfall.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-army-of-the-light-costs', 'Army of the Light — vendor stock', 'reputation', reputationTables[14], {
    description: 'Krokuun weaponry, Lightforged mounts, and toys from the Army of the Light.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-army-of-the-light-paragon', 'Army of the Light — extras & paragon', 'reputation', reputationTables[15], {
    description: 'Paragon caches rewarding Felcrusher and Holy Lightsphere cosmetics.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-argussian-reach-costs', 'Argussian Reach — vendor stock', 'reputation', reputationTables[16], {
    description: 'Krokul missions, pets, and Argus travel utilities.',
    nameField: 'Name',
    costField: 'Cost',
    requirementField: 'Requirement',
    sourceField: 'Type'
  }),
  makeTableConfig('reputation', 'rep-argussian-reach-paragon', 'Argussian Reach — extras & paragon', 'reputation', reputationTables[17], {
    description: 'Paragon cache exclusives from the Argussian Reach emissary.',
    nameField: 'Name',
    requirementField: 'Requirement',
    sourceField: 'Type'
  })
];

export const rewardCategories: RewardCategorySection[] = [
  {
    key: 'mounts',
    title: 'Mounts & Class Rides',
    subtitle: 'Track every mount Hemet Nesingwary XVII sells alongside returning Legion drops.',
    image: legionImages.felClassMounts,
    tables: mountTableConfigs
  },
  {
    key: 'pets',
    title: 'Battle Pets & Companions',
    subtitle: 'Compare achievement, mission, and vendor pets as Remix phases roll forward.',
    image: legionImages.druidOrderHall,
    tables: petTableConfigs
  },
  {
    key: 'toys',
    title: 'Toys, Props & Party Tricks',
    subtitle: 'Mission-exclusive novelties and vendor toys consolidated into a single Bronze list.',
    image: legionImages.rewardsToysReference ?? legionImages.felshatterIllusion,
    tables: toyTableConfigs
  },
  {
    key: 'transmog',
    title: 'Transmog Ensembles & Weapons',
    subtitle: 'All ensembles, arsenal bundles, and weapon skins organized by how you unlock them.',
    image: legionImages.azsharaTransmog,
    tables: transmogTableConfigs
  },
  {
    key: 'housing',
    title: 'Housing Decor Unlocks',
    subtitle: 'Legion-themed furnishings bundled with Remix achievement requirements.',
    image: legionImages.housingDecorReference ?? legionImages.housingDecor,
    tables: housingTableConfigs
  },
  {
    key: 'reputation',
    title: 'Legion Reputation Vendors',
    subtitle: 'Court of Farondis through Argussian Reach stock with updated Remix currency costs.',
    image: legionImages.phaseTimeline,
    tables: reputationTableConfigs
  }
];

function toEntry(config: RewardTableConfig, row: RewardRow, sectionTitle: string): RewardEntry {
  const name = row[config.nameField] || Object.values(row)[0] || 'Unknown Reward';
  const costValue = config.costField ? row[config.costField] : undefined;
  const cost = config.costField ? createCost(costValue, config.costCurrency) : null;
  return {
    id: slugify(`${config.key}-${name}`),
    name,
    nameField: config.nameField,
    type: config.type,
    category: config.category,
    sectionTitle,
    tableKey: config.key,
    tableLabel: config.label,
    tableHeading: config.heading,
    cost,
    costField: config.costField,
    phase: config.phaseField ? row[config.phaseField] || undefined : undefined,
    phaseField: config.phaseField,
    source: config.sourceField ? row[config.sourceField] || undefined : undefined,
    sourceField: config.sourceField,
    requirement: config.requirementField ? row[config.requirementField] || undefined : undefined,
    requirementField: config.requirementField,
    achievement: config.achievementField ? row[config.achievementField] || undefined : undefined,
    achievementField: config.achievementField,
    note: config.note,
    metadata: row
  };
}

export const rewardEntries: RewardEntry[] = rewardCategories.flatMap(section =>
  section.tables.flatMap(config => config.reference.rows.map(row => toEntry(config, row, section.title)))
);

export const bronzeEntries: RewardEntry[] = rewardEntries.filter(entry => {
  const currency = entry.cost?.currency.toLowerCase();
  return Boolean(entry.cost && currency && currency.startsWith('bronze') && entry.cost.amount !== null);
});

function createEmptyTypeMap(): Record<RewardType, RewardEntry[]> {
  return rewardTypes.reduce((acc, type) => {
    acc[type] = [];
    return acc;
  }, {} as Record<RewardType, RewardEntry[]>);
}

function groupEntries(entries: RewardEntry[]): Record<RewardType, RewardEntry[]> {
  const map = createEmptyTypeMap();
  for (const entry of entries) {
    map[entry.type].push(entry);
  }
  return map;
}

export const rewardEntriesByType = groupEntries(rewardEntries);
export const bronzeEntriesByType = groupEntries(bronzeEntries);

export const totalBronzeCost = bronzeEntries.reduce((sum, entry) => sum + (entry.cost?.amount ?? 0), 0);

export const getRewardsByType = (type: RewardType, options?: { bronzeOnly?: boolean }) => {
  return (options?.bronzeOnly ? bronzeEntriesByType : rewardEntriesByType)[type] ?? [];
};

export const rewardSpotlights: RewardSpotlight[] = [
  {
    id: 'remix-class-mounts',
    title: 'Fel-Scorched Class Mounts',
    subtitle: 'Complete Timerunner achievements to unlock recolors, then purchase extras for Bronze.',
    image: legionImages.felClassMounts,
    highlights: [
      {
        name: 'Felscorned Reins of the Vilebrood Vanquisher',
        requirement: 'Timerunner: Death Knight achievement, cost 20,000 Bronze for alts.'
      },
      {
        name: 'Slayer’s Reins of the Felscorned Shrieker',
        requirement: 'Timerunner: Demon Hunter achievement, cost 20,000 Bronze for alts.'
      },
      {
        name: 'Feldruid’s Scornwing Idol',
        requirement: 'Timerunner: Druid achievement, cost 20,000 Bronze for alts.'
      },
      {
        name: 'Highlord’s Loyal Charger',
        requirement: 'Timerunner: Paladin achievement, cost 20,000 Bronze for alts.'
      }
    ]
  },
  {
    id: 'sargerei-ensembles',
    title: 'Sargerei Commander Ensembles',
    subtitle: 'Fel, lightbound, and voidscarred armor sets awarded for Remix metas.',
    image: legionImages.sargereiCommander,
    highlights: [
      {
        name: "Ensemble: Sargerei Commander's Felscorned Regalia",
        requirement: 'Complete the Remix campaign “Shape a New Legend.”'
      },
      {
        name: "Ensemble: Sargerei Commander's Hellforged Regalia",
        requirement: 'Defeat Timeworn Keystone dungeons at level 30+. '
      },
      {
        name: "Ensemble: Sargerei Commander's Lightbound Regalia",
        requirement: 'Clear all Legion raids on Mythic difficulty during Remix.'
      },
      {
        name: "Ensemble: Sargerei Commander's Voidscarred Regalia",
        requirement: 'Complete 100 Heroic World Tier World Quests during Remix.'
      }
    ]
  },
  {
    id: 'housing-keepsakes',
    title: 'Housing Decor Keepsakes',
    subtitle: 'Pair Remix achievements with Bronze spends to furnish your Warband housing.',
    image: legionImages.housingDecorReference ?? legionImages.housingDecor,
    highlights: [
      {
        name: 'Fel Fountain',
        requirement: 'Requires Timeworn Keystone Master and 30,000 Bronze.'
      },
      {
        name: 'Corruption Pit',
        requirement: 'Requires Legion Remix raid completion and 30,000 Bronze.'
      },
      {
        name: 'Demonic Storage Chest',
        requirement: 'Requires The Armies of Legionfall achievement and 5,000 Bronze.'
      },
      {
        name: 'Vertical Felsteel Chain',
        requirement: 'Requires Defending the Broken Isles meta and 5,000 Bronze.'
      }
    ]
  }
];
