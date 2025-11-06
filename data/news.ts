export type NewsArticle = {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  highlights: string[];
  source: {
    label: string;
    href: string;
  };
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'phase-3-legion-remix-now-live',
    title: 'New Content & Rewards Now Available in Phase 3 of Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-11-04',
    image: '/images/news/2025-11-04-legionfall-phase-3.jpg',
    imageAlt: 'Timerunners rally with Khadgar at the Cathedral of Eternal Night entrance on the Broken Shore',
    excerpt:
      'Legion Remix Phase 3 opens the Broken Shore, Legion Assaults, and the Tomb of Sargeras raid while stockpiling new Bronze vendor toys, pets, and Felscorned weapon transmogs.',
    highlights: [
      'Broken Shore storyline, Legionfall building projects, Legion Assault world events, Cathedral of Eternal Night, and Tomb of Sargeras all unlock in Phase 3.',
      'Class campaigns now award the original Legion class mounts alongside Bronze vendor additions like Pilfered Sweeper, Ageless Bronze Drake, and Felscorned Shalamayne.',
      'Six new Infinite Knowledge achievements—Breaching the Tomb, Defending the Broken Isles I & II, Heroic Cathedral clear, Tomb of Sargeras, and Broken Shore world bosses—raise Season ranks further.',
    ],
    source: {
      label: 'Warcraft Tavern – Phase 3 Update (Nov 4, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/new-content-rewards-now-available-in-phase-3-of-legion-remix/',
    },
  },
  {
    slug: 'legion-remix-character-transfer-status',
    title: 'Legion Remix Character Transfer Disabled: Status Tracker & Prep Plan',
    author: 'Legion Remix Hub Team',
    publishedAt: '2025-11-03',
    image: '/images/news/legion-remix-character-transfer-disabled.jpg',
    imageAlt: 'Timerunner staring at a disabled Legion Remix character transfer hourglass UI',
    excerpt:
      'Legion Remix character transfer remains offline after Blizzard yanked the hourglass export button to stop Infinite Power from leaking into retail raids; follow this tracker for mitigation steps and daily status pings.',
    highlights: [
      'Legion Remix character transfer outage timeline summarises launch bugs, October 31 removal, and the ongoing exploit investigation.',
      'Action plan covers roster stabilization, Bronze budgeting, and communications so Legion Remix character transfer readiness stays high.',
      'FAQ confirms end-of-event conversions remain automatic even while Legion Remix character transfer early exports are suspended.',
    ],
    source: {
      label: 'Legion Remix Hub Status Tracker',
      href: '/news/legion-remix-character-transfer',
    },
  },
  {
    slug: 'timeworn-keystone-druid-hotfix-oct-29',
    title: 'Timeworn Keystone Dungeon & Druid Class Quest Hotfixes for Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-29',
    image: '/images/game/timeworn-keystone-schedule.jpg',
    imageAlt: 'Timerunners regrouping outside Timeworn Keystone portals in Legion Remix',
    excerpt:
      'Blizzard’s October 29 Legion Remix hotfix sweep lifts the unintended +49 keystone ceiling, patches Druid Order Hall breadcrumbs, and reins in overpowered Wrath of Azshara and Helya scaling.',
    highlights: [
      'Lindormi now offers Timeworn Keystones beyond +49, restoring high-end dungeon scaling for Phase 2 groups.',
      'Druid Class Order Hall quests now display proper directions and new portals to Duskwood and Grizzly Hills for artifact steps.',
      'Wrath of Azshara, Helya, and Remix dungeon affixes received fixes so bosses start at intended health and affixes clean up on completion.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 29, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/timeworn-keystone-dungeon-druid-class-quest-hotfixes-for-legion-remix/',
    },
  },
  {
    slug: 'resisting-arrest-hotfix-oct-25',
    title: 'Resisting Arrest Quest & Hidden Artifact Appearance Items Hotfixed for Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-25',
    image: '/images/news/2025-10-13-suramar-hotfix.png',
    imageAlt: 'Timerunners confronting Suramar guards during the Resisting Arrest quest in Legion Remix',
    excerpt:
      'The October 25 hotfix roundup steadies Suramar’s Resisting Arrest encounter, restores hidden artifact appearance vendors, and clears pet duplication baggage left on Legion Remix accounts.',
    highlights: [
      'Fel energy scaling in the Resisting Arrest quest has been reduced so the Suramar Insurrection storyline is completable without wipes.',
      'Eligible Balance Druids and Holy Priests can again purchase the Seed of Solar Fire and Rod of the Ascended hidden appearance items.',
      'Duplicate Fledgling Warden’s Companion and Duskytooth Fel Snooter drops are resolved with a final cleanup grant on next login.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 25, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/resisting-arrest-quest-hidden-artifact-appearance-items-hotfixed-for-legion-remix/',
    },
  },
  {
    slug: 'warbound-currencies-preview-oct-24',
    title: 'Order Resources & Veiled Argunite Will Be Warbound in Patch 11.2.7',
    author: 'Luxrah',
    publishedAt: '2025-10-24',
    image: '/images/game/infinite-research.png',
    imageAlt: 'Warband vault storing Legion-era currencies for Legion Remix characters',
    excerpt:
      'Patch 11.2.7 elevates Legion-era currencies to the Warband system, letting Timerunners bank Order Resources and Veiled Argunite now and funnel the stockpile to post-Remix mains.',
    highlights: [
      'Order Resources, Veiled Argunite, and Apexis Crystals become fully warbound and shareable across every character in a warband.',
      'Legion Remix players can stockpile the currencies during the event, then move them to retail characters after transferring out.',
      'Blizzard tucked the confirmation into a Brawler’s Guild PTR post, signaling continued modernization for legacy reward systems.',
    ],
    source: {
      label: 'Warcraft Tavern – Patch 11.2.7 Preview (Oct 24, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/order-resources-veiled-argunite-will-be-warbound-in-patch-11-2-7/',
    },
  },
  {
    slug: 'infinite-knowledge-hotfix-oct-24',
    title: 'Infinite Power Gains From Infinite Knowledge Hotfixed in Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-24',
    image: '/images/news/2025-10-15-infinite-power.png',
    imageAlt: 'Timerunners absorbing Infinite Knowledge energy alongside Infinite Power conduits',
    excerpt:
      'A fresh hotfix fixes Infinite Knowledge ranks siphoning off Infinite Power, doubles Valarjar Soul Fragment drops, and smooths out lethal Beacon of Chaos spawns and horse mount flight animations.',
    highlights: [
      'Infinite Knowledge upgrades no longer suppress Infinite Power gains, restoring standard Phase 2 progression pacing.',
      'Valarjar Soul Fragments now drop only inside Trial of Valor with +100% gains from trash and +400% from bosses.',
      'Beacon of Chaos summons and airborne horse animations were corrected to stop accidental kills and awkward flying.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 24, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/infinite-power-gains-from-infinite-knowledge-hotfixed-in-legion-remix/',
    },
  },
  {
    slug: 'fragmented-mementos-hotfix-oct-21',
    title: 'New Fragmented Memento Sources: Legion Remix Hotfixes for October 21',
    author: 'Luxrah',
    publishedAt: '2025-10-22',
    image: '/images/game/artifactum-sand.jpg',
    imageAlt: 'Timerunners harvesting Fragmented Mementos in Heroic World Tier',
    excerpt:
      'Fragmented Mementos now drop from world bosses, daily rares, and emissary caches alongside new Gift of Eternus buffs for Timeworn Keystone runs and a wave of dungeon fixes.',
    highlights: [
      'World bosses, once-per-day rares, and emissary quests now award Fragmented Mementos—with higher yields when Heroic World Tier is active.',
      'Gift of Eternus role buffs grant DPS and healers +10% damage, +100% health, and -33% damage taken, while tanks gain +10% healing received.',
      'Hotfix resolves stuck zone meta rewards, ensures keystone gear drops correctly, and trims Motes of a Broken Time payouts.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 22, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/new-fragmented-memento-sources-legion-remix-hotfixes-for-october-21/',
    },
  },
  {
    slug: 'timeworn-keystone-buffs-oct-22',
    title: 'Balancing Buffs Added to Timeworn Keystone Dungeons in Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-22',
    image: '/images/game/timeworn-keystone-schedule.jpg',
    imageAlt: 'Legion Remix Timeworn Keystone interface showing new buffs',
    excerpt:
      'Blizzard rolled out Gift of Eternus role buffs with Phase 2, giving DPS and healers massive survivability boosts in Timeworn Keystone dungeons to close the gap with tank-dominated comps.',
    highlights: [
      'Gift of Eternus: Slayer grants DPS +10% damage, +100% health, and -33% damage taken during keystone runs.',
      'Gift of Eternus: Savior adds the same defensive bonuses plus +10% healing and absorbs for healers.',
      'Tanks receive +10% healing received to keep groups stable while the dungeon meta rebalances.',
    ],
    source: {
      label: 'Warcraft Tavern – Keystone Buffs (Oct 22, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/balancing-buffs-added-to-timeworn-keystone-dungeons-in-legion-remix/',
    },
  },
  {
    slug: 'phase-2-live-oct-21',
    title: 'New Content & Rewards in Phase 2 of Legion Remix, Now Live',
    author: 'Luxrah',
    publishedAt: '2025-10-21',
    image: '/images/news/2025-10-21-phase-2-live.jpg',
    imageAlt: 'Timerunners gathering at the Return to Karazhan side entrance',
    excerpt:
      'Rise of the Nightfallen is live with the Suramar Insurrection storyline, Return to Karazhan, The Nighthold, and a fresh slate of Bronze-purchasable mounts and toys.',
    highlights: [
      'The Insurrection questline begins with “Lockdown,” continuing the Suramar story for new Infinite Knowledge ranks.',
      'Return to Karazhan (Heroic & Mythic) and The Nighthold raid each offer 11 bosses and new loot targets.',
      'Bronze vendors now stock the Arcberry Manasaber, Bonesteed mounts, Big Red Raygun, and other Suramar-themed toys.',
    ],
    source: {
      label: 'Warcraft Tavern – Phase 2 Live (Oct 21, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/new-content-rewards-in-phase-2-of-legion-remix-now-live/',
    },
  },
  {
    slug: 'eye-of-greed-hotfix-oct-20',
    title: 'Eye of Greed & Druid Scornwing Form: Legion Remix Hotfixes for October 20',
    author: 'Luxrah',
    publishedAt: '2025-10-21',
    image: '/images/game/heroic-world-tier.png',
    imageAlt: 'Timerunners activating Heroic World Tier after hotfixes',
    excerpt:
      'Hotfixes freed the Eye of Greed, updated Feldruid’s Scornwing Idol behavior, prevented double affixes, and patched quest blockers ahead of Phase 2.',
    highlights: [
      'Grandmaster Jakkus no longer sells Feldruid’s Scornwing Idol once you own the form, and Scornwing can now carry a passenger.',
      'Eye of Greed is no longer perma-imprisoned, and the Postmaster recovers missing Fragmented Mementos of Epoch Challenges.',
      'Keystone bugs were addressed: duplicate affix spawns removed, Lindormi now appears after runs, and Legion intro blockers were fixed.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 21, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/eye-of-greed-druid-scornwing-form-legion-remix-hotfixes-for-october-20/',
    },
  },
  {
    slug: 'keystone-hero-teleports-hotfix-oct-16',
    title: 'Keystone Hero Teleports Can Be Earned Again in Legion Remix – Hotfixes for October 16',
    author: 'Luxrah',
    publishedAt: '2025-10-16',
    image: '/images/news/2025-10-16-keystone-teleports.png',
    imageAlt: 'Timerunners preparing to access Legion dungeon teleports',
    excerpt:
      'Blizzard’s October 16 hotfix restores Keystone Hero dungeon teleports for Timerunners, adds a large XP bonus to the first random dungeon each day, and resolves several Remix quest blockers.',
    highlights: [
      'Keystone Hero achievements and teleport spells are back online for Timerunners.',
      'The first Random Normal or Heroic Timerunning dungeon completed each day now grants a substantial XP bonus.',
      'Fixes cover Trial of Valor Helya resets, “Make Haste, Not Waste” rewards, Demon Hunter quest progress, and Retribution Paladin artifact portals.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 16, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/keystone-hero-teleports-can-be-earned-again-in-legion-remix-hotfixes-for-october-16th/',
    },
  },
  {
    slug: 'infinite-power-rollbacks-oct-15',
    title: 'Blizzard Rolls Back Infinite Power From Elites in Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-15',
    image: '/images/news/2025-10-15-infinite-power.png',
    imageAlt: 'Infinite Power interface reflecting new caps during Legion Remix',
    excerpt:
      'After players surged ahead by farming elites and gathering nodes, Blizzard capped week-one Infinite Power at 10 million and reduced the activity rewards to keep Timerunners on even footing.',
    highlights: [
      'Infinite Power earned from elite enemies, mining, and herb gathering is now reduced to intended levels.',
      'Timerunners who exceeded 10 million Infinite Power have been rolled back to the new 10 million cap.',
      'Developers acknowledged the loot table oversight and emphasized keeping the Remix economy healthy for all players.',
    ],
    source: {
      label: 'Warcraft Tavern – Infinite Power Rollback (Oct 15, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/blizzard-rolls-back-infinite-power-from-elites-in-legion-remix/',
    },
  },
  {
    slug: 'phase-2-dps-healer-buffs',
    title: 'Buffs Coming for DPS & Healers With Phase 2 of Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-15',
    image: '/images/news/2025-10-15-tank-meta.png',
    imageAlt: 'Phased Legion Remix roadmap highlighting upcoming Suramar content',
    excerpt:
      'With tanks dominating Phase 1 Mythic+ ladders, Blizzard confirmed that healers and DPS will get extra help when Phase 2 begins on October 21 alongside new Suramar story chapters, a dungeon, and a raid.',
    highlights: [
      'Mythic+ leaderboards currently lean heavily toward tank-heavy compositions.',
      'Role balance buffs arrive with Phase 2 on Tuesday, October 21, 2025.',
      'Phase 2 adds the Suramar Insurrection campaign, Return to Karazhan, and the Nighthold raid to Legion Remix.',
    ],
    source: {
      label: 'Warcraft Tavern – Phase 2 Preview (Oct 15, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/buffs-coming-for-dps-healers-with-phase-2-of-legion-remix/',
    },
  },
  {
    slug: 'artifact-trait-buffs-hotfix',
    title: 'Buffs for DPS, Healers & Underperforming Artifact Traits in Legion Remix',
    author: 'Luxrah',
    publishedAt: '2025-10-15',
    image: '/images/news/2025-10-16-artifact-traits.png',
    imageAlt: 'Artifact weapon interface showcasing empowered Legion Remix traits',
    excerpt:
      'Blizzard pushed an extra round of buffs ahead of Phase 2, giving DPS and healers 20% more power from every artifact trait and upgrading several niche nodes so more weapon paths feel viable.',
    highlights: [
      'Damage and healer specializations now gain +20% damage and healing from all artifact traits.',
      'Call of the Legion, Naran’s Everdisc, Light’s Vengeance, and Vindicator’s Judgment all received significant damage boosts.',
      'Highmountain Fortitude converts 10–15% damage into Fortitude at lower ranks, improving survivability for non-tanks.',
    ],
    source: {
      label: 'Warcraft Tavern – Artifact Trait Adjustments (Oct 15, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/buffs-for-dps-healers-underperforming-artifact-traits-in-legion-remix/',
    },
  },
  {
    slug: 'new-hunter-pets-hotfix-oct-14',
    title: 'New Hunter Pets in the Broken Isles: Legion Remix Hotfixes for October 14',
    author: 'Luxrah',
    publishedAt: '2025-10-14',
    image: '/images/news/2025-10-14-hunter-pets.png',
    imageAlt: 'Legion Remix hunters tracking new Broken Isles beasts',
    excerpt:
      'The October 14 hotfix wave adds more tamable beasts for hunters, tweaks arcane tools for mages, revises the Imperious affix cadence, and sweetens gathering nodes with extra mementos.',
    highlights: [
      'Hunters can now tame Broken Isles hyenas, clefthoofs, core hounds, stone hounds, and devilsaurs.',
      'Aeonicus teaches mages Arcane Momentum while Zandalari Trolls can choose their Loa at an Infinite Bazaar shrine.',
      'Imperious empowers nearby enemies by 30% for 10 seconds every 15 seconds, and rich or seam nodes now drop more mementos after loot normalization.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 14, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/new-hunter-pets-in-the-broken-isles-legion-remix-hotfixes-for-october-14/',
    },
  },
  {
    slug: 'suramar-performance-hotfix-oct-13',
    title: 'Suramar Performance Improvements – Legion Remix Hotfixes for October 13',
    author: 'Luxrah',
    publishedAt: '2025-10-13',
    image: '/images/news/2025-10-13-suramar-hotfix.png',
    imageAlt: 'Suramar city skyline after performance-focused hotfixes',
    excerpt:
      'Blizzard targeted lag in Suramar with new optimizations, cleaned up the Infinite Research: Artifact Collector quest, and untangled several class-specific storyline bugs.',
    highlights: [
      'Suramar received performance fixes to reduce the zone’s notorious lag.',
      'Infinite Research: Artifact Collector now completes correctly for Timerunners.',
      'Death Knight and Demon Hunter timeline quests, plus Soul Fragment collection interactions, are now functioning as intended.',
    ],
    source: {
      label: 'Warcraft Tavern – Hotfixes (Oct 13, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/suramar-performance-improvements-legion-remix-hotfixes-for-october-13/',
    },
  },
  {
    slug: 'legion-remix-live-oct-7',
    title: 'Legion Remix is Now Live in World of Warcraft',
    author: 'Luxrah',
    publishedAt: '2025-10-07',
    image: '/images/news/2025-10-07-legion-remix-live.png',
    imageAlt: 'Timerunners assembling on the Broken Isles as Legion Remix launches',
    excerpt:
      'Patch 11.2.5 has arrived, letting everyone roll Timerunner characters, re-experience Legion with modern systems, and chase 103 days of cosmetics across five scheduled content drops.',
    highlights: [
      'Legion Remix launched with Patch 11.2.5 on October 7, 2025, enabling Timerunner characters via the character select event panel.',
      'Content unfolds in five phases from Skies of Fire (October 7) through Infinite Echoes (December 9).',
      'Timerunners can convert to standard realms after 24 hours, with the event running 103 days to farm mounts, transmogs, and more.',
    ],
    source: {
      label: 'Warcraft Tavern – Launch Coverage (Oct 7, 2025)',
      href: 'https://www.warcrafttavern.com/legion-remix/news/legion-remix-is-now-live-in-world-of-warcraft/',
    },
  },
];
