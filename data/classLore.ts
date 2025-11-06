export interface ClassLoreImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ClassLoreSection {
  title: string;
  description: string;
  bullets?: string[];
  image?: ClassLoreImage;
}

export interface ClassLore {
  id: string;
  tagline: string;
  summary: string;
  sections: ClassLoreSection[];
}

export const classLore: Record<string, ClassLore> = {
  'death-knight': {
    id: 'death-knight',
    tagline: 'Lead the Ebon Blade from Acherus as Azeroth’s unflinching deathlord.',
    summary:
      'Death Knights return to a refurbished Acherus hovering over the Broken Isles, rallying the Ebon Blade against the Legion. Legion Remix keeps their heroic prologue trimmed, but the class campaign still delivers artifact powerhouses, necropolis upgrades, and the color-shifting Vilebrood drake.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Legion Remix lets you collect replica artifacts early, then finish the class campaign to secure every deathly relic with the shared Artifact Tree paths.',
        bullets: [
          'Blood: Maw of the Damned drinks in enemy souls to fuel self-healing strikes.',
          'Frost: Blades of the Fallen Prince channel Frostmourne’s legacy into rune-charged obliteration.',
          'Unholy: Apocalypse bursts with diseased ghouls for burst AoE and execute pressure.'
        ],
        image: {
          src: '/images/classes/death-knight-artifact.jpg',
          alt: 'Maw of the Damned artifact weapon',
          caption: 'Maw of the Damned – Blood Death Knight artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Acherus Order Hall',
        description:
          'Acherus: The Ebon Hold is repositioned above the Broken Isles, giving Death Knights a private necropolis with war tables, forges, and portals.',
        bullets: [
          'Reach Acherus instantly with Death Gate, then descend between upper command decks and rune-forges.',
          'Command Ebon Blade champions, launch missions, and socket artifact relics without leaving the necropolis.',
          'Use the flight deck teleporters to access Broken Isles zones during the trimmed Remix campaign.'
        ],
        image: {
          src: '/images/classes/death-knight-order-hall.jpg',
          alt: 'Acherus: The Ebon Hold loading screen',
          caption: 'Acherus overlooking the Broken Isles (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Titles',
        description:
          'Advancing the Legion Remix campaign grants a class dragon, title, and fel variant once Phase 3 unlocks.',
        bullets: [
          'Complete “Champion: Thassarian” onward to finish the core story and earn the Deathlord [Name] title.',
          'Deathlord’s Vilebrood Vanquisher shifts between red, blue, or green based on your active specialization.',
          'Reach level 80 or spend 20,000 Bronze at Grandmaster Jakkus for the Felscorned Vilebrood Vanquisher.'
        ],
        image: {
          src: '/images/game/class-mount-death-knight.avif',
          alt: 'Death Knight class mount color variants',
          caption: 'Deathlord’s Vilebrood Vanquisher and fel-touched recolor'
        }
      },
      {
        title: 'Armor Sets & Cosmetics',
        description:
          'Transfer to retail servers with Remix progress to buy the order hall ensemble and chase Legion tier recolors.',
        bullets: [
          'Deathlord’s Battleplate unlocks in Acherus after meeting campaign step requirements.',
          'Tier 19 Dreadwyrm Battleplate, Tier 20 Gravewarden Armaments, and Tier 21 Dreadwake Armor remain iconic plate transmogs.',
          'Legion PvP appearances stay locked during Remix, keeping focus on PvE-driven cosmetics.'
        ]
      }
    ]
  },
  'demon-hunter': {
    id: 'demon-hunter',
    tagline: 'Command the Illidari from the Fel Hammer and carve through Legion foes with glaives ablaze.',
    summary:
      'The Legion Remix retells the Illidari storyline with a streamlined start in Dalaran. Demon Hunters still leap back to the Fel Hammer, collect dual artifacts for Havoc and Vengeance, and dive into a campaign that culminates in shrieker mounts and the Slayer title.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Only two specs, but both artifact weapon sets pack lore-heavy flavor that ties into Illidan’s narrative.',
        bullets: [
          'Havoc: Twinblades of the Deceiver (Verus & Muramas) swing agile fel glaives with demon-slaying effects.',
          'Vengeance: Aldrachi Warblades were pried from the Burning Legion’s conquerors and excel at fiery mitigation.',
          'Replica artifacts unlock immediately, while campaign chapters hand you the counterpart weapon.'
        ],
        image: {
          src: '/images/classes/demon-hunter-artifact.jpg',
          alt: 'Twinblades of the Deceiver artifact weapon',
          caption: 'Twinblades of the Deceiver – Havoc Demon Hunter artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Fel Hammer Order Hall',
        description:
          'The Fel Hammer floats above shattered Mardum, doubling as a warship and class hall for the Illidari.',
        bullets: [
          'Two-tier layout splits the Upper Command Center and Lower Command Center for training, vendors, and mission boards.',
          'Access the ship via Illidari Redoubt portals near Dalaran, or take the return gate within the hall.',
          'Interact with demon hunters, wardens, and enslaved demons while plotting assaults against Legion worlds.'
        ],
        image: {
          src: '/images/classes/demon-hunter-order-hall.jpg',
          alt: 'Fel Hammer class order hall exterior',
          caption: 'Fel Hammer poised above the Shattered Abyss (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Titles',
        description:
          'Finishing the Remix campaign in Patch 7.2 unlocks class-exclusive shriekers and the Slayer honorific.',
        bullets: [
          'Slayer’s Felbroken Shrieker becomes available as the Legionfall arc opens.',
          'Earn Slayer [Name] by completing “I Am the Slayer!” in the class campaign finale.',
          'Pick up Slayer’s Reins of the Felscorned Shrieker for free at level 80 or for 20,000 Bronze from Jakkus.'
        ],
        image: {
          src: '/images/game/class-mount-demon-hunter.jpg',
          alt: 'Demon Hunter Felbroken Shrieker mount',
          caption: 'Felbroken and Felscorned shrieker variants ready for takeoff'
        }
      },
      {
        title: 'Armor Sets & Cosmetics',
        description:
          'The Remix preserves armor goals introduced with the class—perfect for tabards and future transmog.',
        bullets: [
          'Battlegear of the Shattered Abyss sells in the Fel Hammer once you port characters to retail.',
          'Claim the Slayer’s Tabard inside the hall after the campaign finale.',
          'Target Tier 19 Vestment of Second Sight, Tier 20 Demonbane Armor, and Tier 21 Felreaper Vestments for iconic looks.'
        ]
      }
    ]
  },
  druid: {
    id: 'druid',
    tagline: 'Guard Azeroth’s balance with shapeshifting forms and Dreamgrove stewardship.',
    summary:
      'Druids juggle four specializations in Legion Remix, earning four unique artifacts alongside a portal-rich Dreamgrove class hall. The campaign culminates in unlockable flight-form variants and two druidic honorifics.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each specialization receives an artifact steeped in natural magic, now powered by the shared Artifact Tree paths.',
        bullets: [
          'Balance: Scythe of Elune channels lunar energy, pairing Moonfire bursts with Starfall control.',
          'Feral: Fangs of Ashamane reward aggressive bleed windows and Shred combos.',
          'Guardian: Claws of Ursoc fortify bear tanks with spectral Ursoc reinforcements.',
          'Restoration: G’Hanir, the Mother Tree, amplifies HoT blooms and group sustain.'
        ],
        image: {
          src: '/images/classes/druid-artifact.jpg',
          alt: 'Scythe of Elune artifact weapon',
          caption: 'Scythe of Elune – Balance Druid artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Dreamgrove Order Hall',
        description:
          'The Dreamgrove in Val’sharah acts as a living hub maintained by the Cenarion Circle with rapid travel options.',
        bullets: [
          'Explore the Circle of Spirits, Tel’andu Barrow Den, and the Retreat for mission boards, vendors, and portals.',
          'Step through the Emerald Dreamway to reach Moonglade, Nordrassil, Ursoc’s Den, and other druid sanctuaries.',
          'Campaign quests revisit ancient guardians, culminating in “The Demi-God’s Return.”'
        ],
        image: {
          src: '/images/classes/druid-order-hall.jpg',
          alt: 'The Dreamgrove loading screen',
          caption: 'The Dreamgrove links to the Emerald Dreamway (Warcraft Tavern)'
        }
      },
      {
        title: 'Flight Forms & Titles',
        description:
          'Instead of a saddle, Druids earn shapeshift appearances that reflect their archdruid status.',
        bullets: [
          'Finish Phase 3 campaign steps to claim Archdruid’s Lunarwing Form, recolored by character race.',
          'Feldruid’s Scornwing Form unlocks automatically at level 80 or via a 20,000 Bronze purchase.',
          'Campaign milestones grant Archdruid [Name] and the optional Guardian of G’Hanir title for restoration specialists.'
        ],
        image: {
          src: '/images/game/class-mount-druid.jpg',
          alt: 'Archdruid’s Lunarwing flight form variants',
          caption: 'Archdruid’s Lunarwing & fel-green Scornwing appearances'
        }
      },
      {
        title: 'Armor Sets & Cosmetic Goals',
        description:
          'Legion-era ensembles remain chase-worthy once Remix characters migrate to the permanent timeline.',
        bullets: [
          'Purchase the Dreamgrove Raiment order hall set after meeting campaign requirements on live servers.',
          'Iconic raid looks include Tier 19 Garb of the Astral Warden, Tier 20 Stormheart Raiment, and Tier 21 Bearmantle Battlegear.',
          'Legion PvP sets stay locked during Remix, keeping focus on PvE stories and collectibles.'
        ]
      }
    ]
  },
  hunter: {
    id: 'hunter',
    tagline: 'Roam the Broken Isles with loyal beasts and the Trueshot Lodge at your back.',
    summary:
      'Hunters in Legion Remix rebuild the Trueshot Lodge, tame new Legion-era pets, and pursue three artifact weapons that emphasize pet command, precise marksmanship, and rugged survival tactics.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Three artifacts align with each specialization and take advantage of the Remix Artifact Tree.',
        bullets: [
          'Beast Mastery: Titanstrike, a Stormheim relic empowered by Mimiron’s engineering, supercharges pets and Dire Beasts.',
          'Marksmanship: Thas’dorah, Legacy of the Windrunners, honors the Windrunner line with precise bow shots.',
          'Survival: Talonclaw, Spear of the Wild Gods, channels Highmountain totems for melee trackers.'
        ],
        image: {
          src: '/images/classes/hunter-artifact.jpg',
          alt: 'Titanstrike artifact weapon',
          caption: 'Titanstrike – Beast Mastery Hunter artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Trueshot Lodge Order Hall',
        description:
          'The Trueshot Lodge sits high in Highmountain, acting as a base camp for hunters from every faction.',
        bullets: [
          'Slip through the lodge’s rear portal to Dalaran for instant banking between raid or pet runs.',
          'Visit the stable and workshop wing for Bartender Tomro’s rest buffs and Outfitter Reynolds’ hunter cosmetics.',
          'Practice on the cliffside training range with Odan Battlebow before queueing Timeworn Keystones.'
        ],
        image: {
          src: '/images/classes/hunter/trueshot-lodge/portal-to-dalaran-trueshot-lodge-hunter-order-hall-legion-remix-1024x576.jpg',
          alt: 'Portal to Dalaran inside Trueshot Lodge',
          caption: 'Portal to Dalaran tucked behind the mission table in Trueshot Lodge'
        }
      },
      {
        title: 'Class Mount & Titles',
        description:
          'Hunters earn color-shifting eagles and Unseen Pathfinder honors by finishing the Remix storyline.',
        bullets: [
          'Defeat “A Hero’s Weapon” arc to earn the Eagle of the Unseen Path, recolored by spec.',
          'Claim the Felscorned Wolfhawk by reaching level 80 or paying 20,000 Bronze.',
          'Title rewards include Huntmaster [Name] upon campaign completion.'
        ],
        image: {
          src: '/images/game/class-mount-hunter.jpg',
          alt: 'Hunter class wolfhawk mount',
          caption: 'Wolfhawk mount collection for each specialization'
        }
      },
      {
        title: 'Armor Sets & Pet Collecting',
        description:
          'Legion introduced multiple armor ensembles and exotic beasts, many revisited in Remix.',
        bullets: [
          'Order hall ensemble: Guise of the Unseen Path becomes purchasable on live realms.',
          'Raid looks include Tier 19 Eagletalon Battlegear, Tier 20 Wildstalker Armor, and Tier 21 Serpentstalker Guise.',
          'Recent hotfixes add tameable clefthoofs, core hounds, devilsaurs, hyenas, and stone hounds across the Broken Isles.'
        ]
      }
    ]
  },
  mage: {
    id: 'mage',
    tagline: 'Harness arcane, fire, and frost with Kirin Tor backing from the Hall of the Guardian.',
    summary:
      'Legion Remix centers Mages in Dalaran’s upper spire, empowering them with the Hall of the Guardian, three legendary staves, and a campaign that threads through Tirisfal, Suramar, and the Broken Isles.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each specialization wields a storied focus that amplifies their signature playstyle through the Artifact Tree.',
        bullets: [
          'Arcane: Aluneth, Greatstaff of the Magna, manipulates time-bending mana surges.',
          'Fire: Felo’melorn, Flamestrike of the Phoenix, fans Combustion burst windows.',
          'Frost: Ebonchill, Greatstaff of Alodi, reinforces crowd control and icy procs.'
        ],
        image: {
          src: '/images/classes/mage-artifact.jpg',
          alt: 'Aluneth Greatstaff of the Magna',
          caption: 'Aluneth – Arcane Mage artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Hall of the Guardian',
        description:
          'Hidden behind portal wards in Dalaran, the Hall of the Guardian becomes the mage-exclusive order hall.',
        bullets: [
          'Use the great hall’s portal nexus to reach Broken Isles zones and classic Kirin Tor outposts.',
          'Research artifact upgrades, manage missions, and consult legendary archmagi portraits.',
          'Balance rift containment duties with field assignments while unlocking champion recruits.'
        ],
        image: {
          src: '/images/classes/mage-order-hall.jpg',
          alt: 'Hall of the Guardian interior',
          caption: 'Hall of the Guardian shimmering above Dalaran (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign & Mount Rewards',
        description:
          'Mages pilot enchanted discs and gain Triumphant Defender honors as Legionfall unfurls.',
        bullets: [
          'Earn the Archmage’s Prismatic Disc in Phase 3, with spec-tinted wing trails.',
          'Collect the Felscorched Disc once you hit level 80 or purchase it for 20,000 Bronze.',
          'Unlock Archmage [Name] by closing the final rift in the class campaign.'
        ],
        image: {
          src: '/images/game/class-mount-mage.jpg',
          alt: 'Mage class flying disc mount',
          caption: 'Prismatic and fel-touched discs orbit Dalaran’s sky'
        }
      },
      {
        title: 'Armor Sets & Spellbooks',
        description:
          'Complete Remix chapters now, then return post-transfer to purchase Kirin Tor wardrobe staples.',
        bullets: [
          'Vesture of Tirisgarde order hall attire requires campaign achievements on live realms.',
          'Raid favorites include Tier 19 Regalia of Everburning Knowledge, Tier 20 Regalia of the Arcane Tempest, and Tier 21 Runebound Regalia.',
          'Research projects expand the Hall of the Guardian portal network for instant access to Legion staging grounds.'
        ]
      }
    ]
  },
  monk: {
    id: 'monk',
    tagline: 'Balance discipline and chi from the Temple of Five Dawns high atop Kun-Lai Summit.',
    summary:
      'Monks in Legion Remix revisit the Wandering Isle to rebuild the Order of the Broken Temple. Artifact brews enhance each spec, while the class hall focuses on zen travel, brews, and Shado-Pan allies.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Brewmaster, Mistweaver, and Windwalker each reclaim an artifact that embodies Pandaren martial arts.',
        bullets: [
          'Brewmaster: Fu Zan, the Wanderer’s Companion, stacks staggered mitigation and celestial brews.',
          'Mistweaver: Sheilun, Staff of the Mists, weaves soothing mists and burst healing during revival windows.',
          'Windwalker: Fists of the Heavens deliver rapid chi spenders and empowered Storm, Earth, and Fire clones.'
        ],
        image: {
          src: '/images/classes/monk-artifact.jpg',
          alt: 'Fists of the Heavens artifact weapon',
          caption: 'Fists of the Heavens – Windwalker Monk artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Temple of Five Dawns',
        description:
          'The Wandering Isle’s Temple becomes the monk order hall, featuring brewers, celestials, and class-exclusive travel.',
        bullets: [
          'Open the Peak of Serenity meditation grounds to recruit champions and complete mission chains.',
          'Access portals to each Legion zone after restoring the coast-to-coast exodar statue network.',
          'Train with Chen Stormstout, Li Li, and the August Celestials to reinforce class identity.'
        ],
        image: {
          src: '/images/classes/monk-order-hall.jpg',
          alt: 'Temple of the Five Dawns overview',
          caption: 'Temple of Five Dawns on the Wandering Isle (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Mounts',
        description:
          'Kung-fu masters earn storm dragons and chi orbs as they progress through Legionfall.',
        bullets: [
          'Complete the class storyline to unlock Ban-Lu, Grandmaster’s Companion, with spec-based armor.',
          'Acquire the Felscorched Ban-Lu recolor at level 80 or for 20,000 Bronze.',
          'Title rewards include Grandmaster [Name] after binding the order together.'
        ],
        image: {
          src: '/images/game/class-mount-monk.avif',
          alt: 'Monk Ban-Lu class mount',
          caption: 'Ban-Lu carries monks across the Broken Isles'
        }
      },
      {
        title: 'Armor Sets & Brews',
        description:
          'Mix martial arts fashion with Legion ensembles unlocked post-transfer.',
        bullets: [
          'Grandmaster’s Finery order hall set is purchasable once campaign deeds are recorded on live realms.',
          'Tier 19 Vestments of Enveloped Dissonance, Tier 20 Xuen’s Battlegear, and Tier 21 Chi-Ji’s Battlegear define Legion monk looks.',
          'Daily Zen Pilgrimage runs keep the Temple brewery, Laughing Crane inn, and champion missions stocked with brew recipes and toys.'
        ]
      }
    ]
  },
  paladin: {
    id: 'paladin',
    tagline: 'Gather the Silver Hand within the Sanctum of Light to repel the Legion’s advance.',
    summary:
      'Paladins spearhead the Order of the Silver Hand from beneath Light’s Hope Chapel, forging the Silver Hand artifact, empowering fellow crusaders, and marching toward the Tomb of Sargeras to claim radiant class mounts.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each paladin specialization receives an artifact sanctified by the Light and the Silver Hand’s history.',
        bullets: [
          'Holy: The Silver Hand heals allies with holy shockwaves and aura mastery support.',
          'Protection: Truthguard pairs bulwarks with consecrated damage reduction.',
          'Retribution: Ashbringer cleaves through demons with wake of ashes burst.'
        ],
        image: {
          src: '/images/classes/paladin-artifact.jpg',
          alt: 'The Silver Hand artifact weapon',
          caption: 'The Silver Hand – Holy Paladin artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Sanctum of Light',
        description:
          'Hidden under Light’s Hope Chapel, the Sanctum brings together every paladin order for the Legion war effort.',
        bullets: [
          'Coordinate crusades with the Argent Crusade, Hand of Argus, Blood Knights, and Sunwalkers.',
          'Bless followers at the mission table, forge artifact relics, and train initiates in the chapel crypts.',
          'Use the Sanctum portal network to reach Broken Isles footholds swiftly.'
        ],
        image: {
          src: '/images/classes/paladin-order-hall.jpg',
          alt: 'Sanctum of Light interior',
          caption: 'Sanctum of Light beneath Light’s Hope Chapel (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Mounts',
        description:
          'Paladins ride consecrated chargers and earn the Highlord accolade as the campaign concludes.',
        bullets: [
          'Unlock the Highlord’s Golden Charger (with spec-specific barding) during Phase 3’s Legionfall arc.',
          'Felscorched Charger is yours at level 80 or for 20,000 Bronze.',
          'Highlord [Name] title arrives after rallying the Silver Hand in the final questline.'
        ],
        image: {
          src: '/images/game/class-mount-paladin.jpg',
          alt: 'Paladin class charger mount',
          caption: 'Barding changes reflect Holy, Protection, or Retribution focus'
        }
      },
      {
        title: 'Armor Sets & Relics',
        description:
          'Stack shimmering plate ensembles before transferring your Remix roster.',
        bullets: [
          'Order hall set: Battleplate of the Silver Hand requires class hall achievements to purchase later.',
          'Tier 19 Battleplate of the Highlord, Tier 20 Radiant Lightbringer Armor, and Tier 21 Light’s Vanguard Battleplate define Legion-era looks.',
          'Relic forges within the Sanctum let you tune artifact paths around raid or dungeon goals.'
        ]
      }
    ]
  },
  priest: {
    id: 'priest',
    tagline: 'Balance holy radiance and void whispers from the Netherlight Temple.',
    summary:
      'Priests rebuild the Conclave within the Netherlight Temple, wielding artifacts for Discipline, Holy, and Shadow while navigating Light and Void doctrines throughout the Legion Remix campaign.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Three artifacts define priesthood paths and tap into the Remix Artifact Tree for rapid trait unlocks.',
        bullets: [
          'Discipline: Light’s Wrath feeds on damage to intensify Atonement burst healing.',
          'Holy: T’uure, Beacon of the Naaru, channels naaru light for potent group stabilisation.',
          'Shadow: Xal’atath, Blade of the Black Empire, amplifies insanity generation and void eruptions.'
        ],
        image: {
          src: '/images/classes/priest-artifact.jpg',
          alt: 'Light’s Wrath artifact staff',
          caption: 'Light’s Wrath – Discipline Priest artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Netherlight Temple',
        description:
          'Floating between light and void, the Netherlight Temple unites priests from every order.',
        bullets: [
          'Walk the dual-wing temple where naaru and void scholars cooperate despite ideological friction.',
          'Complete rituals to empower the Temple Crucible, unlocking artifact upgrades and champion abilities.',
          'Portal alcoves provide quick travel to major Legion zones and cathedral sanctuaries.'
        ],
        image: {
          src: '/images/classes/priest-order-hall.jpg',
          alt: 'Netherlight Temple loading screen',
          caption: 'Netherlight Temple suspended between Light and Void (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Titles',
        description:
          'Priests pilot light-infused dread ravens and receive High Priest honors for completing Legionfall chapters.',
        bullets: [
          'Earn the High Priest’s Lightsworn Seeker in Phase 3 with spec-colored effects.',
          'Claim the fel-green Netherlight Seeker by reaching level 80 or buying it for 20,000 Bronze.',
          'High Priest [Name] title accompanies the conclusion of the Conclave storyline.'
        ],
        image: {
          src: '/images/game/class-mount-priest.jpg',
          alt: 'Priest Lightsworn Seeker mount',
          caption: 'Lightsworn and Netherlight seekers mirror Light and Void'
        }
      },
      {
        title: 'Armor Sets & Relics',
        description:
          'Cultivate Light- and Void-inspired ensembles for future transmogrification goals.',
        bullets: [
          'Order hall attire: Regalia of the High Priest unlocks for purchase after campaign chapters on live servers.',
          'Raid ensembles include Tier 19 Vestments of the Purifier, Tier 20 Vestments of Blind Absolution, and Tier 21 Gilded Seraph’s Raiment.',
          'Relic combos let you pivot between Atonement burst, Naaru radiance, and void mastery within the Artifact Tree.'
        ]
      }
    ]
  },
  rogue: {
    id: 'rogue',
    tagline: 'Slip through the Hall of Shadows to orchestrate Azeroth’s underworld resistance.',
    summary:
      'Rogues in Legion Remix operate from Dalaran’s seedy underbelly, stealing relics for their three artifact sets, coordinating the Uncrowned, and earning shadow-drenched dreadblades as campaign rewards.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each specialization reclaims an artifact steeped in outlaw legend, poison lore, or shadowcraft.',
        bullets: [
          'Assassination: The Kingslayers lace toxins for bleeds and Envenom bursts.',
          'Outlaw: The Dreadblades thrive on luck-fueled pistol shots and saber strikes.',
          'Subtlety: Fangs of the Devourer empower stealth openers and shadow dance execution.'
        ],
        image: {
          src: '/images/classes/rogue-artifact.jpg',
          alt: 'The Kingslayers artifact daggers',
          caption: 'The Kingslayers – Assassination Rogue artifacts (Warcraft Tavern)'
        }
      },
      {
        title: 'Hall of Shadows',
        description:
          'Beneath the Violet Citadel, rogues gather smugglers, SI:7 agents, and the Uncrowned to wage covert war.',
        bullets: [
          'Navigate secret passages between gambling dens, black markets, and mission planning boards.',
          'Deploy spy networks across the Broken Isles to uncover Legion plots and rare thievery opportunities.',
          'Recruit legendary rogues—from Valeera to Garona—to assist with Class Hall missions.'
        ],
        image: {
          src: '/images/classes/rogue-order-hall.jpg',
          alt: 'Hall of Shadows entrance',
          caption: 'The Hall of Shadows hidden in Dalaran’s undercity (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Mounts',
        description:
          'Complete cloak-and-dagger finales to earn crow-themed mounts and Shadowblade recognition.',
        bullets: [
          'Shadowblade’s Murderous Omen arrives once the Legionfall campaign chapter concludes.',
          'Pick up the Felscorned Riddler’s Omen for free at level 80 or for 20,000 Bronze.',
          'The Shadowblade [Name] title accompanies the final Grandmaster pickpocketing caper.'
        ],
        image: {
          src: '/images/game/class-mount-rogue.jpg',
          alt: 'Rogue class raven mount',
          caption: 'Murderous and fel-tinted omen ravens circle above Dalaran'
        }
      },
      {
        title: 'Armor Sets & Trinkets',
        description:
          'Sharpen your wardrobe with stealthy ensembles and toys for future infiltration.',
        bullets: [
          'Battlegear of the Uncrowned order hall set unlocks later once Remix characters migrate to retail.',
          'Target Tier 19 Doomblade Battlegear, Tier 20 Fanged Slayer’s Armor, and Tier 21 Regalia of the Dashing Scoundrel.',
          'Hall vendors stock grappling hooks, smoke bombs, and disguise kits tied to campaign progress.'
        ]
      }
    ]
  },
  shaman: {
    id: 'shaman',
    tagline: 'Channel the elements from the Heart of Azeroth on the Maelstrom’s isle.',
    summary:
      'Shaman convene the Earthen Ring on the Maelstrom, guiding elemental spirits, forging artifact fists and scepters, and earning storm-linked mounts throughout Legion Remix.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each spec’s artifact taps a different elemental legacy, enhanced through Remix trait paths.',
        bullets: [
          'Elemental: The Fist of Ra-den stores storm energy for burst fulmination.',
          'Enhancement: Doomhammer returns as a dual-wield powerhouse for windfury and lava lash.',
          'Restoration: Sharas’dal, Scepter of Tides, mends allies with tidal currents and Sea Witch lore.'
        ],
        image: {
          src: '/images/classes/shaman-artifact.jpg',
          alt: 'Doomhammer artifact weapon',
          caption: 'Doomhammer – Enhancement Shaman artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Heart of Azeroth',
        description:
          'Located on the Maelstrom, the shaman order hall brings together Stormcaller Mylra, Thrall, and the Earthen Ring.',
        bullets: [
          'Circle the elemental foci to commune with fire, water, air, and earth spirits.',
          'Unlock shaman-only flight paths to Broken Isles zones via elemental gateways.',
          'Stabilize the Maelstrom’s core during campaign rituals to keep Azeroth’s heart steady.'
        ],
        image: {
          src: '/images/classes/shaman-order-hall.jpg',
          alt: 'Heart of Azeroth order hall',
          caption: 'Heart of Azeroth anchored above the Maelstrom (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Storm Mounts',
        description:
          'Legionfall chapters reward elemental flurry mounts and the Farseer honorific.',
        bullets: [
          'Farseer’s Raging Tempest Totem morphs into spec-tinted storm serpents once Phase 3 hits.',
          'Claim the Felscorched Stormcrow after hitting level 80 or paying 20,000 Bronze.',
          'Farseer [Name] title arrives alongside the final elemental binding ceremony.'
        ],
        image: {
          src: '/images/game/class-mount-shaman.jpg',
          alt: 'Shaman class storm mount',
          caption: 'Stormcrow mounts echo each elemental path'
        }
      },
      {
        title: 'Armor Sets & Totems',
        description:
          'Prepare for transmog hunts and totem collection once Remix characters shift to the prime timeline.',
        bullets: [
          'Order hall gear: Raiment of the Farseer requires class hall accomplishments on live realms.',
          'Raid sets include Tier 19 Regalia of Shackled Elements, Tier 20 Regalia of the Skybreaker, and Tier 21 Garb of Venerated Spirits.',
          'Stabilize the Maelstrom’s heart through class quests to unlock additional portal attunements and artifact upgrades.'
        ]
      }
    ]
  },
  warlock: {
    id: 'warlock',
    tagline: 'Bind demons and chaos magic from the Dreadscar Rift.',
    summary:
      'Warlocks fortify the Dreadscar Rift as a demonic citadel, reclaim fel artifacts, and summon infernal steeds in Legion Remix while contending with imprisoned lords of the Nether.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Three artifacts cover affliction, demonology, and destruction in uniquely fel flavors.',
        bullets: [
          'Affliction: Ulthalesh, the Deadwind Harvester, absorbs souls for DoT amplification.',
          'Demonology: Skull of the Man’ari commands hordes of demons through empowered Hand of Gul’dan.',
          'Destruction: Scepter of Sargeras tears rifts that unleash chaos bolts and infernal eruptions.'
        ],
        image: {
          src: '/images/classes/warlock-artifact.jpg',
          alt: 'Ulthalesh the Deadwind Harvester artifact',
          caption: 'Ulthalesh – Affliction Warlock artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Dreadscar Rift',
        description:
          'Carved from a fel-scarred world, the Dreadscar Rift is the warlock order hall and demon prison.',
        bullets: [
          'Lay claim to demonic armies while negotiating with the dreadlord Mephistroth and other bound lieutenants.',
          'Open portals to Argus, the Broken Isles, and Twisting Nether staging grounds for missions.',
          'Empower the Black Harvest council to research empowered spells and summonable allies.'
        ],
        image: {
          src: '/images/classes/warlock-order-hall.jpg',
          alt: 'Dreadscar Rift order hall',
          caption: 'Dreadscar Rift serves as the Black Harvest’s stronghold (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Steeds',
        description:
          'Warlocks earn fel dreadsteeds and the Netherlord title by concluding Legionfall plots.',
        bullets: [
          'Netherlord’s Chaotic Wrathsteed arrives in Phase 3 with spec-colored armor plating.',
          'Unlock the Felscorched Dreadsteed by reaching level 80 or paying 20,000 Bronze.',
          'Netherlord [Name] title celebrates your rule over the Dreadscar Rift.'
        ],
        image: {
          src: '/images/game/class-mount-warlock.jpg',
          alt: 'Warlock class dreadsteed mount',
          caption: 'Chaotic Wrathsteed and fel variant blaze through the Rift'
        }
      },
      {
        title: 'Armor Sets & Tomes',
        description:
          'Fel cloth ensembles and spellbooks await once Remix characters rejoin the main timeline.',
        bullets: [
          'Order hall set: Vestments of the Black Harvest unlock once campaign prerequisites are met on live servers.',
          'Raid sets include Tier 19 Legacy of Azj’Aqir, Tier 20 Diabolic Raiment, and Tier 21 Grim Inquisitor’s Regalia.',
          'Empower the Black Harvest council to expand demon summoning rituals, mission perks, and fel spellbooks.'
        ]
      }
    ]
  },
  warrior: {
    id: 'warrior',
    tagline: 'Ascend to Skyhold and rally the Valarjar against the Legion.',
    summary:
      'Warriors earn Odyn’s blessing atop Skyhold, wielding relics forged by titans and leading Valarjar strikes across the Broken Isles during Legion Remix.',
    sections: [
      {
        title: 'Artifact Arsenal',
        description:
          'Each specialization receives a storied weapon that defines their combat doctrine.',
        bullets: [
          'Arms: Strom’kar, the Warbreaker, cleaves foes with ancient Vrykul might.',
          'Fury: Warswords of the Valarjar unleash whirlwind frenzy through dual Titan blades.',
          'Protection: Scale of the Earth-Warder molds dragon scales into unbreakable shields.'
        ],
        image: {
          src: '/images/classes/warrior-artifact.jpg',
          alt: 'Strom’kar the Warbreaker artifact',
          caption: 'Strom’kar – Arms Warrior artifact (Warcraft Tavern)'
        }
      },
      {
        title: 'Skyhold Order Hall',
        description:
          'Skyhold serves as Odyn’s aerial fortress and warrior class hall, filled with Valarjar champions.',
        bullets: [
          'Use the Eye of Odyn to survey Legion activity and trigger new assault quests.',
          'Spar in the Arena of Glory or forge upgrades at the Forge of Odyn between sorties.',
          'Unlock leap pads across Broken Isles zones, converting warm light pillars into Skyhold access points.'
        ],
        image: {
          src: '/images/classes/warrior-order-hall.jpg',
          alt: 'Skyhold loading screen',
          caption: 'Skyhold floats above the Halls of Valor (Warcraft Tavern)'
        }
      },
      {
        title: 'Campaign Rewards & Wyrms',
        description:
          'Warriors tame combat wyrms and gain the Battlelord distinction by concluding Legionfall efforts.',
        bullets: [
          'Battlelord’s Bloodthirsty War Wyrm shifts tint based on Arms, Fury, or Protection.',
          'Felscorched War Wyrm unlocks at level 80 or via 20,000 Bronze.',
          'Battlelord [Name] arrives after completing “The Fate of Hodir.”'
        ],
        image: {
          src: '/images/game/class-mount-warrior.jpg',
          alt: 'Warrior class war wyrm mount',
          caption: 'Valarjar wyrms answer the Battlelord’s call'
        }
      },
      {
        title: 'Armor Sets & Relics',
        description:
          'Collect Valarjar-inspired armor and forge relics to suit raid or Mythic+ goals.',
        bullets: [
          'Battlelord’s Plate order hall set becomes available post-transfer upon meeting campaign criteria.',
          'Tier 19 Warplate of the Obsidian Aspect, Tier 20 Titanic Onslaught Armor, and Tier 21 Juggernaut Battlegear headline Legion transmogs.',
          'Relic upgrades in the Forge of Odyn tailor artifact paths for defensive or offensive focus.'
        ]
      }
    ]
  }
};

export const classLoreList: ClassLore[] = Object.values(classLore);

export const getClassLore = (id: string) => classLore[id];
