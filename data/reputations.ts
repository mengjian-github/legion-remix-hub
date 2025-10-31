import { legionImages } from '@/data/images';

export interface ReputationFaction {
  slug: string;
  name: string;
  zone: string;
  color: string;
  summary: string;
  emissary: {
    name: string;
    location: string;
    coordinates?: string;
    tip?: string;
  };
  howToEarn: string[];
  insignia: {
    name: string;
    sources: string[];
    note?: string;
  };
  vendorHighlights: {
    name: string;
    description: string;
  }[];
  paragonRewards?: {
    name: string;
    description: string;
  }[];
  questRewards: string[];
  image: string;
  hasVendor: boolean;
}

export const reputationFactions: ReputationFaction[] = [
  {
    slug: 'court-of-farondis',
    name: 'Court of Farondis',
    zone: 'Azsuna',
    color: 'from-sky-900/50 to-blue-900/30',
    summary:
      'Prince Farondis\'s spectral allies guard Azsuna\'s ruins. Legion Remix boosts their reputation gains so a single evening of quests, world quests, and caches can unlock every teleport toy and tabard they sell.',
    emissary: {
      name: 'Veridis Fallon',
      location: 'Crumbled Palace, Azsuna',
      coordinates: '46.8, 41.4',
      tip: 'Grab the Illidari Stand flight point so the Crumbled Palace is one dragonriding hop away.'
    },
    howToEarn: [
      'Finish the Azsuna story arcs to scoop up one-time quest reputation.',
      'Loop Court of Farondis world quests whenever they rotate through Azsuna.',
      'Spend Court of Farondis Champion\'s Insignias from emissary turn-ins, Azsuna treasure chests, Cache of Infinite Power packets, and Infinite Armory special assignments.'
    ],
    insignia: {
      name: "Court of Farondis Champion\'s Insignia",
      sources: [
        'Court of Farondis emissary cache',
        'Azsuna treasure chests',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Mailable between Remix characters, but the item is deleted if the character transfers to retail realms.'
    },
    vendorHighlights: [
      {
        name: "Beginner\'s Guide to Dimensional Rifting - 500 Bronze (Revered)",
        description: 'Unlocks the portal device that chains hidden rift events across the Broken Isles.'
      },
      {
        name: 'Court Scribe - 500 Bronze (Revered)',
        description: 'Summons a ghostly quill pet that fits the Azsuna aesthetic.'
      },
      {
        name: 'Court of Farondis Tabard - 300 Bronze (Exalted)',
        description: 'Glamour tabard that pairs cleanly with arcane-themed transmogs.'
      }
    ],
    paragonRewards: [
      {
        name: 'Cloudwing Hippogryph - Paragon cache',
        description: 'Paragon-only mount from Farondis Tribute, perfect for turquoise mogs.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Court of Farondis Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorFarondis,
    hasVendor: true
  },
  {
    slug: 'dreamweavers',
    name: 'Dreamweavers',
    zone: "Val\'sharah",
    color: 'from-emerald-900/50 to-teal-900/30',
    summary:
      'Val\'sharah\'s druids and forest spirits reward Remix players with flight form cosmetics, leafy toys, and the Wild Dreamrunner mount once you maintain their dreamgrove patrols.',
    emissary: {
      name: 'Sylvia Hartshorn',
      location: 'Lorlathil, Val\'sharah',
      coordinates: '54.6, 73.2',
      tip: 'Use the Dreamgrove flight path to glide straight into Lorlathil\'s inn courtyard.'
    },
    howToEarn: [
      'Quest through the Tears of Elune and Bradensbrook storylines for the first burst of rep.',
      'Complete Dreamweaver-tagged world quests across Val\'sharah whenever the map rotates.',
      'Spend Dreamweaver Champion\'s Insignias from emissaries, Val\'sharah treasure chests, and both Infinite Research caches.'
    ],
    insignia: {
      name: "Dreamweaver Champion\'s Insignia",
      sources: [
        'Dreamweavers emissary cache',
        'Val\'sharah treasure chests',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Safe to mail between Remix characters; it disappears if the character exits the event.'
    },
    vendorHighlights: [
      {
        name: "Ash'ana - 500 Bronze (Revered)",
        description: 'Elusive mana saber companion that pairs well with night elf mogs.'
      },
      {
        name: 'Moonfeather Statue - 500 Bronze (Revered)',
        description: 'Summons a soothing dreamcatcher effect for home bases and roleplay.'
      },
      {
        name: 'Dreamweaver Initiate\'s Tabard - 300 Bronze (Exalted)',
        description: 'Cloaks Timerunners in vivid greens to signal Dreamgrove allegiance.'
      }
    ],
    paragonRewards: [
      {
        name: 'Wild Dreamrunner - Paragon cache',
        description: 'Stag mount whose bloom effect matches the Dreamweaver tabards.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Dreamweaver Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorDreamweavers,
    hasVendor: true
  },
  {
    slug: 'highmountain-tribe',
    name: 'Highmountain Tribe',
    zone: 'Highmountain',
    color: 'from-amber-900/50 to-stone-900/30',
    summary:
      'The tauren of Highmountain trade rugged hunter gear, spirit totems, and the Highmountain Elderhorn once you keep Thunder Totem defended throughout Remix.',
    emissary: {
      name: 'Ransa Greyfeather',
      location: 'Thunder Totem upper ring, Highmountain',
      coordinates: '38.6, 45.8',
      tip: 'Ride the elevator to the summit level; Ransa stands beside the totemic armor stalls.'
    },
    howToEarn: [
      'Quest through Riverbend, Skyhorn, and Huln\'s war story chapters.',
      'Knock out Highmountain Tribe world quests every time they return to the map rotation.',
      'Feed Highmountain Tribe Champion\'s Insignias from emissaries, Thunder Totem treasure chests, and both Infinite Research caches.'
    ],
    insignia: {
      name: "Highmountain Tribe Champion\'s Insignia",
      sources: [
        'Highmountain Tribes emissary cache',
        'Highmountain treasure chests',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Mailable between Remix characters only; automatically removed on transfer to live servers.'
    },
    vendorHighlights: [
      {
        name: 'Whitewater Carp - 100 Bronze (Friendly)',
        description: 'Toy that splashes a koi across party members, great for celebration screenshots.'
      },
      {
        name: 'Baby Elderhorn - 500 Bronze (Revered)',
        description: 'Plucky moose calf companion to accompany Thunder Totem transmog sets.'
      },
      {
        name: 'Tabard of the Highmountain Tribe - 300 Bronze (Exalted)',
        description: 'Displays the tribe crest for anyone chasing a full tauren aesthetic.'
      }
    ],
    paragonRewards: [
      {
        name: 'Highmountain Elderhorn - Paragon cache',
        description: 'Grand moose mount with braids that match the Balance of Power appearance set.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Highmountain Tribe Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorHighmountain,
    hasVendor: true
  },
  {
    slug: 'the-nightfallen',
    name: 'The Nightfallen',
    zone: 'Suramar',
    color: 'from-purple-900/50 to-indigo-900/30',
    summary:
      "Progressing the Suramar campaign feeds reputation to the Nightfallen, unlocking Shal'Aran toys, pets, and the Leywoven Flying Carpet once you restore the city.",
    emissary: {
      name: 'First Arcanist Thalyssra',
      location: "Shal'Aran cavern, Suramar",
      coordinates: '37.0, 46.2',
      tip: "Advance the Suramar questline until Shal'Aran is phased open; Thalyssra will not appear beforehand."
    },
    howToEarn: [
      'Work through the Suramar insurrection chapters for massive one-time reputation.',
      'Clear Nightfallen world quests in Suramar\'s districts whenever they surface.',
      'Redeem Nightfallen Champion\'s Insignias from emissary caches, Suramar leyline chests, and both Infinite Research caches.'
    ],
    insignia: {
      name: "Nightfallen Champion\'s Insignia",
      sources: [
        'Nightfallen emissary cache',
        'Suramar treasure chests',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Tradable across Remix alts; erased on characters exported to the standard game.'
    },
    vendorHighlights: [
      {
        name: 'Mobile Telemancy Beacon - 300 Bronze (Honored)',
        description: 'Drops a portable telemancy pad to blink around Suramar\'s spires.'
      },
      {
        name: 'Extinguished Eye - 500 Bronze (Revered)',
        description: 'Suspended arcane eye battle pet that floats at your shoulder.'
      },
      {
        name: 'Nightfallen Tabard - 300 Bronze (Exalted)',
        description: "Pairs with the Shal'dorei wardrobe and Withered Army illusions."
      }
    ],
    paragonRewards: [
      {
        name: 'Leywoven Flying Carpet - Paragon cache',
        description: 'Prismatic flying carpet that glows with Suramar leyline energy.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Nightfallen Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorNightfallen,
    hasVendor: true
  },
  {
    slug: 'the-wardens',
    name: 'The Wardens',
    zone: 'Broken Isles',
    color: 'from-gray-900/50 to-slate-900/30',
    summary:
      'Wardens reputation spreads across every Broken Isles zone, trading stealth-flavored toys and the Fledgling Warden Owl for players who chase their roaming world quests.',
    emissary: {
      name: 'Marin Bladewing',
      location: "Warden\'s Redoubt, Azsuna",
      coordinates: '48.2, 73.8',
      tip: 'World quests tagged for the Wardens can appear in any Broken Isles zone, so keep the map filtered.'
    },
    howToEarn: [
      'Complete Wardens-tagged world quests in any Broken Isles zone during their rotation.',
      'Turn in Wardens Champion\'s Insignias from emissary caches and Infinite Research rewards to top up missing reputation.',
      'Loot elite and treasure world quests that double dip with other reputations-Wardens credit stacks nicely with Court of Farondis or Valarjar tasks.'
    ],
    insignia: {
      name: "Wardens Champion\'s Insignia",
      sources: [
        'Wardens emissary cache',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Send to your Remix alts freely; the game deletes the token after transferring off the event.'
    },
    vendorHighlights: [
      {
        name: 'Trapped Treasure Chest Kit - 300 Bronze (Honored)',
        description: 'Drops a faux chest that explodes into chains when curious players click it.'
      },
      {
        name: 'Fledgling Warden Owl - 500 Bronze (Revered)',
        description: 'Animated owl companion reminiscent of Legion challenge mode rewards.'
      },
      {
        name: "Warden\'s Tabard - 300 Bronze (Exalted)",
        description: 'Sleek black-and-green tabard matching the Wardens\' leathers.'
      }
    ],
    paragonRewards: [
      {
        name: "Sira\'s Extra Cloak - Paragon cache",
        description: 'Toy that shrouds you in Warden camouflage when you need a stealthy entrance.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Wardens Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorWardens,
    hasVendor: true
  },
  {
    slug: 'valarjar',
    name: 'Valarjar',
    zone: 'Stormheim',
    color: 'from-amber-800/50 to-orange-900/30',
    summary:
      "Stormheim's Valarjar celebrate Timerunners with toy longships, val'kyr pets, and the Valarjar Stormwing once you prove your worth through world quests and skirmishes.",
    emissary: {
      name: 'Valdemar Stormseeker',
      location: 'Valdisdall, Stormheim',
      coordinates: '60.2, 51.2',
      tip: 'Use the Valdisdall flight master for a quick hop from the Trial of Valor raid entrance.'
    },
    howToEarn: [
      'Quest through the Vrykul trials and sky-port assaults in Stormheim.',
      'Clear Valarjar world quests across Helheim, Haustvald, and the coastlines whenever they appear.',
      'Redeem Valarjar Champion\'s Insignias from emissary caches, Stormheim treasure chests, and Infinite Research rewards.'
    ],
    insignia: {
      name: "Valarjar Champion\'s Insignia",
      sources: [
        'Valarjar emissary cache',
        'Stormheim treasure chests',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite\'s Armory (Infinite Research special assignment)"
      ],
      note: 'Share between Remix alts; it cannot leave the event.'
    },
    vendorHighlights: [
      {
        name: 'Vrykul Toy Boat Kit - 10 Bronze (Honored)',
        description: 'Deploys a miniature longship that cruises along the nearest water.'
      },
      {
        name: "Death\'s Door Charm - 500 Bronze (Revered)",
        description: 'Toy that lets you feign death with a Valarjar rune flourish.'
      },
      {
        name: "Sunborne Val'kyr - 500 Bronze (Revered)",
        description: 'Battle pet with golden wings to complement Valarjar-themed transmogs.'
      }
    ],
    paragonRewards: [
      {
        name: 'Valarjar Stormwing - Paragon cache',
        description: 'Sable drake mount that matches the Trial of Valor ensemble.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Valarjar Champion\'s Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorValarjar,
    hasVendor: true
  },
  {
    slug: 'armies-of-legionfall',
    name: 'Armies of Legionfall',
    zone: 'Broken Shore',
    color: 'from-emerald-900/50 to-gray-900/30',
    summary:
      'Legionfall rallies every class order on the Broken Shore. Reputation gains unlock class mount finales, Nether Portal utilities, and Broken Shore catch-up buffs during Phase 3.',
    emissary: {
      name: "Warmage Kath'leen",
      location: 'Deliverance Point, Broken Shore',
      coordinates: '44.4, 62.2',
      tip: 'Glide down from the Deliverance Point flight path to reach Kath\'leen while skipping elite sentries.'
    },
    howToEarn: [
      'Finish Broken Shore scenario quests and construction dailies during Phase 3 – Legionfall.',
      'Clear Armies of Legionfall world quests and Legion assaults each day for bonus reputation and Nethershards.',
      'Use Legionfall Champion’s Insignias from emissary caches, Broken Shore treasures, rare elites, and Infinite Research packets.'
    ],
    insignia: {
      name: "Legionfall Champion's Insignia",
      sources: [
        'Armies of Legionfall emissary cache',
        'Broken Shore treasure chests',
        'Broken Shore rare elites',
        'Cache of Infinite Power (Infinite Research daily)',
        "Cache from the Infinite's Armory (Infinite Research special assignment)"
      ],
      note: 'Bound to Remix characters; deleted automatically if the character transfers off the event timeline.'
    },
    vendorHighlights: [
      {
        name: 'Legion Pocket Portal - 7,500 Nethershards (Revered)',
        description: 'Creates a return portal to Deliverance Point for rapid Tomb of Sargeras turnarounds.'
      },
      {
        name: 'Cauterizing Void Shard - 5,000 Nethershards (Honored)',
        description: 'Group-wide 10% damage and healing buff while adventuring on the Broken Shore.'
      },
      {
        name: 'Legionfall Tabard - 300 Bronze (Exalted)',
        description: 'Classic green-and-bronze tabard that pairs with Cathedral of Eternal Night ensembles.'
      }
    ],
    paragonRewards: [
      {
        name: 'Orphaned Felbat - Legionfall Chest',
        description: 'Fel-green pet from paragon caches once you push reputation beyond Exalted.'
      }
    ],
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      "Legionfall Champion's Insignia",
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorLegionfall,
    hasVendor: true
  },
  {
    slug: 'kirin-tor',
    name: 'Kirin Tor Emissary',
    zone: 'Dalaran',
    color: 'from-indigo-900/50 to-violet-900/30',
    summary:
      'Kirin Tor world quests unlock a weekly emissary in Dalaran that showers every Broken Isles faction with reputation, making it the safest catch-up option in Remix.',
    emissary: {
      name: 'Warmage Silva',
      location: 'Outside the Violet Citadel, Dalaran',
      coordinates: '34.6, 46.0',
      tip: 'If Silva is phased out, replay the Broken Shore scenario via Eternus at the Infinite Bazaar to refresh Dalaran.'
    },
    howToEarn: [
      'Complete Kirin Tor world quests scattered across all Broken Isles zones when their emissary is active.',
      'Group up for "Ley Race" and "Barrels of Fun" objectives; Remix scaling keeps them snappy even for melee specs.',
      'Turn in the emissary quest immediately so the Insignia of the Broken Isles can funnel 1,500 reputation to every faction you still need.'
    ],
    insignia: {
      name: 'Insignia of the Broken Isles',
      sources: ['The Kirin Tor of Dalaran emissary quest reward'],
      note: 'Consuming the token grants 1,500 reputation to each Broken Isles faction, perfect for catch-up.'
    },
    vendorHighlights: [],
    paragonRewards: undefined,
    questRewards: [
      'Gold',
      'Experience',
      'Lesser Bronze Cache',
      'Insignia of the Broken Isles',
      'Cache of Infinite Power'
    ],
    image: legionImages.rewardVendorKirinTor,
    hasVendor: false
  }
];
