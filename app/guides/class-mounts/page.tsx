import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { classMountImages, legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-11-11';

const pageTitle = formatMetaTitle('Class Mounts & Requirements – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Unlock every Legion class mount in Legion Remix with hotfix-ready Hunter and Rogue walkthroughs plus Felscorned planning tips.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/class-mounts'),
  },
  openGraph: buildOpenGraphMetadata('/guides/class-mounts', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Mount Guide',
  },
};

const quickLinks = [
  { label: 'Felscorned mount unlocks', href: '#felscorned' },
  { label: 'Legacy mount requirements', href: '#legacy' },
  { label: 'Class-by-class breakdown', href: '#classes' },
  { label: 'Hunter walkthrough', href: '#hunter-walkthrough' },
  { label: 'Rogue walkthrough', href: '#rogue-walkthrough' },
  { label: 'Bronze planning', href: '#bronze' },
  { label: 'FAQ', href: '#faq' },
];

type ClassMountGuide = {
  id: string;
  name: string;
  remixMount: string;
  remixUnlock: string;
  legacyMounts: { name: string; note: string }[];
  checklist: string[];
  callout?: string;
};

const classMountGuides: ClassMountGuide[] = [
  {
    id: 'death-knight',
    name: 'Death Knight',
    remixMount: 'Felscorned Reins of the Vilebrood Vanquisher',
    remixUnlock:
      'Reach level 80 on a Death Knight during Legion Remix or buy it for 20,000 Bronze from Grandmaster Jakkus after completing the Timerunner: Death Knight achievement.',
    legacyMounts: [
      { name: "Deathlord’s Vilebrood Vanquisher", note: 'Reward from the “The Lost Glacier” class mount scenario.' },
      { name: 'Crimson, Icebound, and Unholy tints', note: 'Earned by completing the Blood, Frost, and Unholy follow-up quests.' },
    ],
    checklist: [
      'Finish the Death Knight class hall campaign before Phase 3 – Legionfall begins on November 4, 2025.',
      'Complete “Champions of Legionfall” on the Broken Shore, then accept “The Lost Glacier” from Highlord Darion Mograine.',
      'Defeat Lord Thorval in Icecrown Citadel to claim the base mount; repeat with each spec quest for recolors.',
    ],
    callout:
      'Drag your three Horsemen champions to item level 880+—the mission table quest that precedes “The Lost Glacier” requires high success chance even in Remix tuning.',
  },
  {
    id: 'demon-hunter',
    name: 'Demon Hunter',
    remixMount: 'Slayer’s Reins of the Felscorned Shrieker',
    remixUnlock:
      'Awarded automatically when your Demon Hunter hits level 80 or purchasable for 20,000 Bronze once Timerunner: Demon Hunter is complete.',
    legacyMounts: [
      { name: "Slayer’s Felbroken Shrieker", note: 'Unlocked through the “Breaching the Sanctum” class mount scenario.' },
    ],
    checklist: [
      'Clear the Demon Hunter campaign up to “Champion: Lady S’theno” before Phase 3 unlocks.',
      'Finish “Champions of Legionfall” and accept “The Hunt for Illidan Stormrage” → “Breaching the Sanctum”.',
      'Defeat Mephistroth inside the Fel Hammer scenario to receive the Felbroken Shrieker.',
    ],
    callout:
      'Felscorned Shriekers keep the built-in double-jump idle animation—perfect for screenshot sessions during Turbo Boost weekends.',
  },
  {
    id: 'druid',
    name: 'Druid',
    remixMount: 'Feldruid’s Scornwing Idol (account-wide form unlock)',
    remixUnlock:
      'Level 80 Druids automatically learn the Felscorned flight form; alts can buy the idol for 20,000 Bronze from Grandmaster Jakkus once Timerunner: Druid is earned.',
    legacyMounts: [
      { name: "Archdruid’s Lunarwing Form", note: 'Transforms Travel Form; color changes based on active specialization.' },
      { name: 'Class-specific tints', note: 'Complete the guardian, balance, feral, and resto questlines introduced after the base scenario.' },
    ],
    checklist: [
      'Complete the Emerald Dreamway attunement and class hall campaign through “Essence of the Mother Tree”.',
      'Progress “Champions of Legionfall”, then accept “Talons Call” which leads to the Eternal Grove scenario.',
      'Finish the scenario in Val’sharah and speak with Thisalee Crow to unlock the Lunarwing form.',
    ],
    callout:
      'Remember to reactivate Toy or Glyph cosmetics after swapping forms—the Lunarwing override replaces any previous Travel Form appearances.',
  },
  {
    id: 'hunter',
    name: 'Hunter',
    remixMount: 'Reins of the Felscorned Wolfhawk',
    remixUnlock:
      'Level 80 Hunters receive the Felscorned Wolfhawk; alternate Hunters can purchase it for 20,000 Bronze after Timerunner: Hunter.',
    legacyMounts: [
      { name: "Huntmaster’s Loyal Wolfhawk", note: 'Base reward from the Trueshot Lodge scenario.' },
      { name: "Huntmaster’s Fierce Wolfhawk", note: 'Awarded for completing the Marksmanship follow-up challenge.' },
      { name: "Huntmaster’s Dire Wolfhawk", note: 'Awarded for completing the Beast Mastery challenge.' },
    ],
    checklist: [
      'Clear “Armies of Legionfall” and “Assault on Broken Shore”, then return to Trueshot Lodge with “Champions of Legionfall” in hand.',
      'From Shandris Feathermoon, complete “Devastating Effects” and “Soothing Wounds” by gathering Manaroot with the Forage button around Teloth’aran (52.2, 48.8).',
      'Defeat Torturer Relyn for his control orb, free Nighthuntress Syrenne, and finish “Felbound Beasts”, “Ready to Strike”, “Unnatural Consequences”, and “Salvation” near Broken Valley.',
      'Turn in “Secured Surroundings” at Deliverance Point to recruit Syrenne, then finish Breaching the Tomb so Nimi Brightcastle unlocks “A Golden Ticket”.',
      'Read the Golden Letter back at the lodge, run the Night of the Wilds scenario, and buy Dire/Fierce Wolfhawks plus Tome of the Hybrid Beast from Pan the Kind Hand.',
    ],
    callout:
      "Toggle Track Beasts and grab the Hunter's Feast/Wildbrew buffs before Night of the Wilds so the pawprint, feather, egg, and disturbed dirt clues spawn properly in Stage 1.",
  },
  {
    id: 'mage',
    name: 'Mage',
    remixMount: 'Archmage’s Felscorned Disc',
    remixUnlock:
      'Granted at level 80 or purchasable for 20,000 Bronze once Timerunner: Mage is done. Color shifts with specialization, just like the legacy disc.',
    legacyMounts: [
      { name: "Archmage’s Prismatic Disc", note: 'Changes color to fire, frost, or arcane based on spec.' },
    ],
    checklist: [
      'Complete the Hall of the Guardian campaign culminating in “Fate of the Tideskorn”.',
      'After finishing “Champions of Legionfall”, accept “Legionfall Supplies” leading to the “Seat of the Triumvirate” scenario.',
      'Defeat Riftworld Devourer and claim the prismatic disc; revisit Vargoth for specialization recolor quests.',
    ],
  },
  {
    id: 'monk',
    name: 'Monk',
    remixMount: 'Felscorned Grandmaster’s Bell',
    remixUnlock:
      'Hit level 80 on a Monk or buy the bell for 20,000 Bronze after Timerunner: Monk. The bell summons Ban-Lu in a fel tint.',
    legacyMounts: [
      { name: "Ban-Lu, Grandmaster’s Companion", note: 'Classic Legion mount; additional bridles change its color.' },
    ],
    checklist: [
      'Finish the Peak of Serenity campaign to recruit all Shado-Pan followers.',
      'Complete “Champions of Legionfall”, then accept “The Legend of Ban-Lu”.',
      'Escort Ban-Lu across Pandaria in the solo scenario and defeat the Sha ambush at Jade Forest to unlock the mount.',
    ],
    callout:
      'The Remix version keeps Ban-Lu’s passenger seat—ideal for chauffeuring guildmates between Timeworn Keystone runs.',
  },
  {
    id: 'paladin',
    name: 'Paladin',
    remixMount: 'Felscorned Highlord’s Charger',
    remixUnlock:
      'Awarded when your Paladin reaches level 80 or sold for 20,000 Bronze after Timerunner: Paladin. No Divine Steed bridle exists for the fel skin.',
    legacyMounts: [
      { name: "Highlord’s Golden Charger", note: 'Base quest reward.' },
      { name: "Valorous, Vigilant, and Vengeful Charger bridles", note: 'Sold by Crusader Lord Dalfors once the base quest is complete.' },
    ],
    checklist: [
      'Finish the Order of the Silver Hand campaign and recruit the Silver Hand champions.',
      'After “Champions of Legionfall”, grab “Stirring in the Shadows” → “Defending Broken Isles”.',
      'Complete the Sanctum of Light scenario, then buy recolor bridles from Crusader Lord Dalfors.',
    ],
  },
  {
    id: 'priest',
    name: 'Priest',
    remixMount: 'Felscorned Seeker’s Whistle',
    remixUnlock:
      'Reach level 80 on a Priest or buy it for 20,000 Bronze after Timerunner: Priest. Summons a fel-touched Lightsworn Seeker.',
    legacyMounts: [
      { name: "High Priest’s Lightsworn Seeker", note: 'Base reward from the Netherlight Temple scenario.' },
    ],
    checklist: [
      'Complete the priest class hall campaign and empower the Naaru at Netherlight Temple.',
      'Finish “Champions of Legionfall”, then accept “The Blessing of the Naaru” questline.',
      'Defeat Balnazzar during the mount scenario to receive the Lightsworn Seeker.',
    ],
  },
  {
    id: 'rogue',
    name: 'Rogue',
    remixMount: 'Shadowblade’s Reins of Felscorned Portent',
    remixUnlock:
      'Awarded at level 80 or available from Grandmaster Jakkus for 20,000 Bronze after Timerunner: Rogue.',
    legacyMounts: [
      { name: "Shadowblade’s Murderous Omen", note: 'Base class mount with stealth animation.' },
      { name: "Shadowblade’s Baneful & Lethal Omen", note: 'Unlocked by completing the Assassination and Subtlety follow-up quests.' },
    ],
    checklist: [
      'Finish the Hall of Shadows campaign, clear “Armies of Legionfall”/“Assault on Broken Shore”, then grab “Champions of Legionfall” and “The Pirate’s Bay” from Lord Jorach.',
      'Meet Tess Greymane or Lilian Voss in Dead Man’s Bay (57.6, 63.6), loot the Fel-Infused Gunpowder Cache from Master Gunner Prix (59.2, 78.1), plant False Orders at 61.0/68.3 & 59.4/72.6, and burn 8 Blacksail Booty for Tethys.',
      'Turn in “Fit For a Pirate” to adopt Crackers, then follow “Jorach’s Calling” and “A Bit of Espionage” back to Aalgen Point ahead of the Broken Shore infiltration.',
      'Complete “Rise Up” and “This Time, Leave a Trail” by rappelling into the cave, planting four Felfire Explosives, lighting the fuse via the nearby fire pool, and stealthing past elites.',
      'After Breaching the Tomb, pick up “Dread Infiltrators” from Apothecary Keever—thanks to the Nov 9 hotfix, “Hiding In Plain Sight” now auto-completes when you speak to Lilian in the Hall of Shadows to receive the Murderous Omen and unlock Zan Shivsproket’s other tints.',
    ],
    callout:
      'Kaivax’s November 9 hotfix skips Moratari’s exposition so Remix Rogues never need to leave the Broken Isles; just follow the prompts in the Hall of Shadows to finish the finale.',
  },
  {
    id: 'shaman',
    name: 'Shaman',
    remixMount: 'Felscorned Tempest Totem',
    remixUnlock:
      'Level 80 Shamans learn the fel Tempest; additional alts can pay 20,000 Bronze post Timerunner: Shaman.',
    legacyMounts: [
      { name: "Farseer’s Raging Tempest", note: 'Color changes with your active specialization.' },
    ],
    checklist: [
      'Complete the Earthen Ring campaign leading into the Maelstrom finale.',
      'Finish “Champions of Legionfall”, then accept “Algalon’s Request” → “The Storm’s Fury”.',
      'Survive the Eye of Azshara scenario, dispelling storm totems to unlock the Tempest.',
    ],
  },
  {
    id: 'warlock',
    name: 'Warlock',
    remixMount: "Felscorned Netherlord’s Dreadsteed",
    remixUnlock:
      'Level 80 Warlocks learn the Felscorned dreadsteed automatically; alts can buy it for 20,000 Bronze after Timerunner: Warlock.',
    legacyMounts: [
      { name: "Netherlord’s Chaotic Wrathsteed", note: 'Base quest reward from the Broken Shore scenario.' },
      { name: "Netherlord’s Accursed Wrathsteed", note: 'Drops from Lord Hel’nurath after completing the base quest.' },
      { name: "Netherlord’s Brimstone Wrathsteed", note: 'Sold by Calydus in Dreadscar Rift for 10,000 Order Resources.' },
    ],
    checklist: [
      'Finish the warlock class hall campaign and recruit the Council of the Black Harvest members.',
      'Complete “Champions of Legionfall”, then accept “The Wrathsteed of Xoroth”.',
      'Defeat Lord Hel’nurath inside the Broken Shore scenario to claim the chaotic wrathsteed; return for the Accursed drop and Brimstone purchase.',
    ],
    callout:
      'Consider banking 10,000 Order Resources—they convert to 500 Bronze at the end of the event, but you need the resource stockpile to buy the Brimstone tint first.',
  },
  {
    id: 'warrior',
    name: 'Warrior',
    remixMount: 'Iron Reins of the Felscorned War Wyrm',
    remixUnlock:
      'Granted when a Warrior hits level 80 or sold for 20,000 Bronze after Timerunner: Warrior.',
    legacyMounts: [
      { name: "Iron Reins of the Bloodthirsty War Wyrm", note: 'Base quest reward from the Valarjar scenario.' },
      { name: "Flaming and Valorous War Wyrm tints", note: 'Unlocked via Fury and Protection follow-up quests.' },
    ],
    checklist: [
      'Complete the warrior class campaign and rebuild the Skyhold arsenal.',
      'Finish “Champions of Legionfall”, then accept “The Trial of Rage”.',
      'Challenge Hodir in the Halls of Valor scenario and claim the Bloodthirsty War Wyrm.',
    ],
  },
];

const hunterQuestFlow = [
  {
    title: 'Champions of Legionfall kickoff',
    description:
      'Pick up “Champions of Legionfall” from Maiev at Deliverance Point immediately after “Armies of Legionfall” and the skippable “Assault on Broken Shore”, then return to Trueshot Lodge to continue the hunt.',
  },
  {
    title: 'Devastating Effects & Soothing Wounds',
    description:
      'Shandris Feathermoon waits outside the lodge; ride to Suramar’s Crimson Thicket (roughly 52.2, 48.8), use the Forage extra action button on purple ley lines to gather ten Manaroot, and heal the sick manasaber D’Bynn.',
  },
  {
    title: 'The Nighthuntress Beckons',
    description:
      'Mount D’Bynn to reach Nighthuntress Syrenne, slay Torturer Relyn for his control orb, and cleanse every Felbound Beast (Crimson Silkwings and Heartwood Does) while dismantling the Nightborne cages.',
  },
  {
    title: 'Ready to Strike & Salvation',
    description:
      'Meet Syrenne in Broken Valley south of Vengeance Point; she grants “Unnatural Consequences” to defeat Nighthuntress Lexera inside Shadow Fracture while “Salvation” has you salve Fel-Infected Bloodbeaks, Mountain Prowlers, and Rockfang Howlers.',
  },
  {
    title: 'Secured Surroundings & Champion recruitment',
    description:
      'Return to Deliverance Point for “Secured Surroundings” so Syrenne becomes a mission table champion immediately—granting access to the extra Order Hall troops you need for late Legionfall missions.',
  },
  {
    title: 'A Golden Ticket prep',
    description:
      'With Breaching the Tomb complete, accept “A Golden Ticket” from Nimi Brightcastle, read the Golden Letter on the table inside Trueshot Lodge, and prepare for the Night of the Wilds scenario.',
  },
];

const hunterScenarioStages = [
  {
    title: 'Stage 1 – The Hunt Begins',
    description:
      "Click the Hunter's Feast and Wildbrew buffs, enable Track Beasts, then follow pawprints (Ketlingr), feathers (Habrok), cracked eggshells (Garos), and disturbed dirt (Hyrtir) to bring down all four spirits.",
  },
  {
    title: 'Stage 2 – Night of Claw and Talon',
    description:
      'Hunt the airborne Vetholnir as it swoops around the arena and delve into the cave to corner Fereki; both spirits fold quickly under cooldowns in Remix scaling.',
  },
  {
    title: 'Stage 3 – Haukenulfnir',
    description:
      'Burn down the wolfhawk Haukenulfnir near the cave entrance while dodging swirlies—any spec can face-tank the hits with Remix secondary stats.',
  },
  {
    title: 'Finale – Revel the Night Away',
    description:
      'Talk to Odyn to exit, turn in at the Empty Saddle for Huntmaster’s Loyal Wolfhawk, then visit Pan the Kind Hand outside the lodge to purchase the Dire and Fierce Wolfhawks plus the Tome of the Hybrid Beast.',
  },
];

const rogueQuestFlow = [
  {
    title: 'Champions of Legionfall & The Pirate’s Bay',
    description:
      'Maiev auto-completes “Champions of Legionfall”; report to Lord Jorach Ravenholdt in the Hall of Shadows for “The Pirate’s Bay”, then meet Tess Greymane (Alliance) or Lilian Voss (Horde) with Fleet Admiral Tethys at Dead Man’s Bay (57.6, 63.6) in Azsuna.',
  },
  {
    title: 'What’s the Cache? & False Orders',
    description:
      'Steal the Fel-Infused Gunpowder Cache from Master Gunner Prix at 59.2, 78.1 while planting False Orders at 61.0, 68.3 and 59.4, 72.6; Sap, Distract, and Between the Eyes keep the pirate camp under control.',
  },
  {
    title: 'Loot and Plunder',
    description:
      'Burn eight piles of Blacksail Booty for Tethys along the shoreline, then enjoy the instant “Fit For a Pirate” reward—Crackers becomes a battle pet the moment you click the talking parrot.',
  },
  {
    title: 'Jorach’s Calling & A Bit of Espionage',
    description:
      'Fly back to the Hall of Shadows, brief Lord Jorach, then speak with Aludane Whitecloud at Krasus’ Landing to port straight to Aalgen Point where Tess/Lilian, Tethys, and Jorach prepare the next strike.',
  },
  {
    title: 'Rise Up & This Time, Leave a Trail',
    description:
      'Climb the ridge to slay eight demons alongside your faction rep, rappel into the cave to collect the gunpowder, plant four Felfire Explosives, and ignite the trail by diving into the nearby fire pool.',
  },
  {
    title: 'Champion Tess/Lilian',
    description:
      'Back in the Hall of Shadows, Tess Greymane or Lilian Voss joins your roster as a champion—make sure to slot them before triggering the final Legionfall missions.',
  },
];

const rogueFinaleFlow = [
  {
    title: 'Dread Infiltrators',
    description:
      'After Breaching the Tomb unlocks, Apothecary Keever at Deliverance Point sends you straight back to the Hall of Shadows to hunt Legion spies.',
  },
  {
    title: 'Hiding In Plain Sight (hotfixed)',
    description:
      'Because Remix characters can’t leave the Broken Isles, Moratari now skips Lilian’s elaborate plan—the November 9 Kaivax hotfix autocompletes the quest the moment you speak with Lilian in the Den of Thieves.',
  },
  {
    title: 'Rewards & vendors',
    description:
      'Turning in the finale grants Shadowblade’s Murderous Omen and unlocks Zan Shivsproket’s vendor table so you can buy the Baneful, Crimson, and Lethal Omens immediately.',
  },
];

const faqEntries = [
  {
    question: 'When do legacy class mount quests unlock during Legion Remix?',
    answer:
      'Legacy class mount quests become available in Phase 3 – Legionfall starting November 4, 2025, once you finish “Champions of Legionfall” on the Broken Shore and your class hall campaign.',
  },
  {
    question: 'Do timerunner achievements remain account-wide?',
    answer:
      'Yes. Once you earn a Timerunner class achievement on one character, Grandmaster Jakkus sells the Felscorned mount to the rest of your roster for 20,000 Bronze.',
  },
  {
    question: 'Can I earn recolor quests at level 80 in Legion Remix?',
    answer:
      'All recolor quests from Legion remain intact. After you finish the base mount scenario, revisit the class hall NPC to pick up spec-specific quests for additional tints.',
  },
];

export default function ClassMountsGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Class Mounts & Requirements – Legion Remix 2025',
    description:
      'Every Felscorned mount unlock plus the original Legion class mount requirements during the 2025 remix season.',
    url: 'https://legionremixhub.com/guides/class-mounts',
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Class Mounts', path: '/guides/class-mounts' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto text-gray-300">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Class Mounts &amp; Requirements</h1>
            <p className="text-sm text-gray-400">
              Published {new Date(publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 12 min read
            </p>
            <p>
              Legion Remix 2025 introduces fel-tinted mounts for every class and reopens the original Legion class mount questlines
              in Phase 3 – Legionfall (November 4 – November 17, 2025). Use this tracker to prepare class hall campaigns, Broken
              Shore quests, and Bronze budgets so you can claim every color variant before the event ends on January 19, 2026.
            </p>
            <p>
              Kaivax’s November 9 hotfix sweep removed the last remaining blockers—hidden artifact appearances populate again, rogue infiltration quests
              auto-complete, and class mount scenarios for Death Knights through Warriors now fire correctly. The new Hunter and Rogue walkthrough
              sections below tie those fixes directly into your Legionfall planning.
            </p>
          </header>

          <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg border border-gray-800 bg-gray-900/70 px-4 py-3 text-sm hover:border-green-500 hover:text-green-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <section id="felscorned" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden mb-6">
              <Image
                src={legionImages.felscornedShriekerMount ?? legionImages.felClassMounts}
                alt="Felscorned class mounts lineup"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Felscorned Remix Mount Unlocks</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                Each class earns its fel variant upon hitting level 80 during Legion Remix (October 7, 2025 – January 19, 2026).
              </li>
              <li>
                After earning the class-specific Timerunner achievement, alts can buy the mount from Grandmaster Jakkus in the{' '}
                <Link href="/guides/bronze-vendors" className="text-green-400 hover:text-green-300">
                  Infinite Bazaar
                </Link>{' '}
                for 20,000 Bronze.
              </li>
              <li>
                Felscorned mounts respect class restrictions—no cross-class riding outside the associated archetype even after purchase.
              </li>
              <li>
                Turbo Boost weekends reduce the Bronze cost to 16,000 if you buy while the 20% currency buff is active.
              </li>
            </ul>
          </section>

          <section id="legacy" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Legacy Class Mount Requirements</h2>
            <p>
              The original Legion class mount quests unlock during Phase 3 – Legionfall on November 4, 2025. Ensure each character has:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Completed their class hall campaign (grants A Glorious Campaign / equivalent feat).</li>
              <li>Finished the Broken Shore questline “Champions of Legionfall”.</li>
              <li>Reached 8,000 Nightfallen reputation into Revered to unlock relevant Suramar chapters (for story continuity).</li>
              <li>
                Upgraded key champions to item level 880+—some mission table quests must succeed before the mount scenario triggers.
              </li>
            </ul>
          </section>

          <section id="classes" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Class-by-Class Breakdown</h2>
            <div className="space-y-6">
              {classMountGuides.map((classGuide) => (
                <div key={classGuide.id} className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden">
                  <Image
                    src={classMountImages[classGuide.id] ?? legionImages.felClassMounts}
                    alt={`${classGuide.name} class mount showcase`}
                    width={1024}
                    height={576}
                    className="w-full object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <header className="space-y-1">
                      <h3 className="text-2xl font-semibold text-white">{classGuide.name}</h3>
                      <p className="text-sm text-gray-400">{classGuide.remixMount}</p>
                    </header>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-4 text-sm">
                      <p className="font-semibold text-gray-100 mb-1">Remix Unlock</p>
                      <p>{classGuide.remixUnlock}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Legacy Mounts</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {classGuide.legacyMounts.map((mount) => (
                          <li key={mount.name}>
                            <span className="font-medium text-gray-100">{mount.name}</span> – {mount.note}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-emerald-800/40 bg-emerald-900/20 p-4 text-sm space-y-2">
                      <h4 className="text-lg font-semibold text-white">Checklist</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {classGuide.checklist.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {classGuide.callout ? (
                      <p className="text-xs text-emerald-300">{classGuide.callout}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="hunter-walkthrough" className="mb-12">
            <div className="rounded-3xl border border-emerald-800/40 bg-gray-900/60 p-6 lg:p-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Suramar + Broken Shore Route</p>
                  <h3 className="text-3xl font-bold text-white mt-2">Hunter Night of the Wilds Walkthrough</h3>
                  <p className="text-sm text-gray-300 mt-3">
                    The November 9 class-mount hotfix re-enabled every Hunter milestone, so the Remix chain now mirrors retail Legion. Follow the steps
                    below alongside our{' '}
                    <Link href="/guides/broken-shore-legionfall" className="text-green-400 hover:text-green-300">
                      Legionfall prep guide
                    </Link>{' '}
                    to keep Trueshot Lodge missions, Suramar errands, and the Night of the Wilds finale in sync.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Quest Flow</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    {hunterQuestFlow.map((step) => (
                      <li key={step.title}>
                        <p className="font-semibold text-gray-100">{step.title}</p>
                        <p>{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Night of the Wilds Scenario</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    {hunterScenarioStages.map((stage) => (
                      <li key={stage.title}>
                        <p className="font-semibold text-gray-100">{stage.title}</p>
                        <p>{stage.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="text-xs text-gray-400">
                  Need <em>Breaching the Tomb</em>? Finish the Broken Shore questline once per account, then grab “A Golden Ticket” from Nimi Brightcastle
                  at Deliverance Point to launch the scenario on every Hunter alt.
                </p>
              </div>
              <div className="space-y-4">
                <figure className="rounded-2xl border border-emerald-700/40 bg-black/40 overflow-hidden">
                  <Image
                    src="/images/guides/class-mounts/hunter/maiev-shadowsong-broken-shore.jpg"
                    alt="Maiev Shadowsong handing Hunters the Champions of Legionfall quest at Deliverance Point"
                    width={1024}
                    height={576}
                    className="w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs text-gray-300">
                    Maiev’s “Champions of Legionfall” turn-in is instant—skip the assault scenario, click through the dialogue, and hearth to Trueshot Lodge.
                  </figcaption>
                </figure>
                <figure className="rounded-2xl border border-emerald-700/40 bg-black/40 overflow-hidden">
                  <Image
                    src="/images/guides/class-mounts/hunter/night-of-the-wilds-wolfhawk.jpg"
                    alt="Huntmaster’s Loyal, Dire, and Fierce Wolfhawks lined up after completing Night of the Wilds"
                    width={1024}
                    height={576}
                    className="w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs text-gray-300">
                    Turn in at the Empty Saddle for the Loyal Wolfhawk, then buy the Dire and Fierce variants plus the Tome of the Hybrid Beast from Pan.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section id="rogue-walkthrough" className="mb-12">
            <div className="rounded-3xl border border-amber-500/30 bg-gray-900/60 p-6 lg:p-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Dead Man’s Bay Ops Plan</p>
                  <h3 className="text-3xl font-bold text-white mt-2">Rogue Shadowblade Walkthrough</h3>
                  <p className="text-sm text-gray-300 mt-3">
                    Rogues felt the brunt of the Remix travel restrictions, but Kaivax’s November 9 fix now auto-completes “Hiding In Plain Sight.”
                    Knock out the pirate errands in Azsuna, rappel through the Broken Shore cave, and finish the Hall of Shadows finale without leaving
                    the Broken Isles.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Quest Flow</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    {rogueQuestFlow.map((step) => (
                      <li key={step.title}>
                        <p className="font-semibold text-gray-100">{step.title}</p>
                        <p>{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Finale & Rewards</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    {rogueFinaleFlow.map((step) => (
                      <li key={step.title}>
                        <p className="font-semibold text-gray-100">{step.title}</p>
                        <p>{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="text-xs text-gray-400">
                  Remember to talk to{' '}
                  <Link href="/guides/bronze-vendors" className="text-green-400 hover:text-green-300">
                    Grandmaster Jakkus
                  </Link>{' '}
                  after earning Timerunner: Rogue so alts can buy the fel-tinted Portent mount for 20,000 Bronze.
                </p>
              </div>
              <div className="space-y-4">
                <figure className="rounded-2xl border border-amber-500/40 bg-black/40 overflow-hidden">
                  <Image
                    src="/images/guides/class-mounts/rogue/dead-mans-bay-briefing.jpg"
                    alt="Tess Greymane, Lilian Voss, and Fleet Admiral Tethys planning the Pirate’s Bay assault in Azsuna"
                    width={1024}
                    height={576}
                    className="w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs text-gray-300">
                    Dead Man’s Bay (57.6, 63.6) hosts Tess/Lilian and Tethys—bring stealth food or drums to blitz the pirate camp chores.
                  </figcaption>
                </figure>
                <figure className="rounded-2xl border border-amber-500/40 bg-black/40 overflow-hidden">
                  <Image
                    src="/images/guides/class-mounts/rogue/shadowblades-murderous-omen.jpg"
                    alt="Shadowblade’s Murderous, Baneful, Crimson, and Lethal Omen mounts on display in Dalaran"
                    width={1024}
                    height={576}
                    className="w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs text-gray-300">
                    Finish “Hiding In Plain Sight”, loot Shadowblade’s Murderous Omen, then buy the Baneful, Crimson, and Lethal recolors from Zan Shivsproket.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section id="bronze" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bronze Planning</h2>
            <p className="text-sm">
              Budget at least 260,000 Bronze if you want every Felscorned mount on day one of each class. Use the{' '}
              <Link href="/calculator" className="text-green-400 hover:text-green-300">
                Bronze Calculator
              </Link>{' '}
              to clone lists per character, and remember to check Grandmaster Jakkus after each Timerunner achievement unlock.
            </p>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
            <div className="space-y-6">
              {faqEntries.map((entry) => (
                <div key={entry.question} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{entry.question}</h3>
                  <p className="text-sm">{entry.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Related Legion Remix Guides</h2>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>
                <Link href="/guides/bronze-vendors" className="text-green-400 hover:text-green-300">
                  Infinite Bazaar Bronze Vendor Guide
                </Link>{' '}
                – plan your class mount Bronze purchases.
              </li>
              <li>
                <Link href="/guides/suramar-campaign" className="text-green-400 hover:text-green-300">
                  Suramar Quest Campaign Guide
                </Link>{' '}
                – aligns Ancient Mana farming with class campaign prep.
              </li>
              <li>
                <Link href="/guides/ancient-mana" className="text-green-400 hover:text-green-300">
                  Ancient Mana Guide
                </Link>{' '}
                – stock up before Withered Army Training and Broken Shore missions.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
