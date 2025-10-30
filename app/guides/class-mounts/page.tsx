import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { classMountImages, legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-29';

const pageTitle = formatMetaTitle('Class Mounts & Requirements – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Unlock every Legion class mount in Legion Remix, learn how Felscorned variants work, and plan Broken Shore and class hall steps before Phase 3.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/class-mounts'),
  },
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
      'Finish the Hunter order hall storyline and recruit all champions before November 4, 2025.',
      'Complete “Champions of Legionfall” then pick up “Bloodbringer’s Missive” to unlock the mount scenario.',
      'Kill the demon beast within Trueshot Lodge’s portal and follow the emissary quests for the additional color variants.',
    ],
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
      'Finish the Hall of Shadows campaign, including the Dread Admiral scenarios.',
      'Complete “Champions of Legionfall” and accept “A Spy in Our Midst”.',
      'Infiltrate the Shadowguard teleport hub and loot the raven to receive the Murderous Omen.',
    ],
    callout:
      'Equip the mount before traveling through Dalaran—the built-in stealth pairs nicely with pocket picking for Bronze caches.',
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
              Published October 29, 2025 • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 12 min read
            </p>
            <p>
              Legion Remix 2025 introduces fel-tinted mounts for every class and reopens the original Legion class mount questlines
              in Phase 3 – Legionfall (November 4 – November 17, 2025). Use this tracker to prepare class hall campaigns, Broken
              Shore quests, and Bronze budgets so you can claim every color variant before the event ends on January 19, 2026.
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

