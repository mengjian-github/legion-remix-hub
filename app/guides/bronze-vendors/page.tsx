import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-29';

const pageTitle = formatMetaTitle('Infinite Bazaar Bronze Vendor Guide – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Find every Bronze vendor in the Infinite Bazaar, learn how to reach the floating market, and plan phase-by-phase spending priorities for Legion Remix 2025.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/bronze-vendors'),
  },
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Bronze Planning',
  },
};

const quickLinks = [
  { label: 'Reach the Infinite Bazaar', href: '#arrival' },
  { label: 'Vendor directory', href: '#vendors' },
  { label: 'Phase-by-phase priorities', href: '#priorities' },
  { label: 'Bronze budgeting tips', href: '#budgeting' },
  { label: 'FAQ', href: '#faq' },
];

const arrivalOptions = [
  {
    label: 'Portal from Krasus’ Landing',
    detail:
      'Interact with the Infinite Bazaar portal on the southern edge of Krasus’ Landing in Dalaran (Broken Isles). It is open full-time once Legion Remix begins on October 7, 2025.',
  },
  {
    label: "Nostwin's Voucher",
    detail:
      'A rare drop from Lesser Bronze Caches and Infinite Research packets. Using the voucher teleports any Timerunner directly to the bazaar and consumes the item.',
  },
  {
    label: 'Manual flight',
    detail:
      'Fly due south from Dalaran until you see the floating island with a golden cloud. Land on the north rim near Nostwin’s tent—this avoids portal congestion during reset rush.',
  },
];

type VendorDetail = {
  name: string;
  role: string;
  highlight: string;
  tips: string[];
  image?: string;
};

const vendorDirectory: VendorDetail[] = [
  {
    name: 'Nostwin – Snacks & Stuff',
    role: 'Innkeeper and consumables',
    highlight: 'Sells utility items for 5 Bronze, including Everlasting Nosh and Elixir of Remembered Sight.',
    tips: [
      'Stockpile Elixir of Remembered Sight so gathering alts can track Timewarped Herbs and Ore without professions.',
      'Nostwin is also the bazaar’s innkeeper—set your hearthstone here before weekly Bronze shopping sprees.',
    ],
    image: legionImages.vendorHoros, // visually similar canopy vibe
  },
  {
    name: 'Grandmaster Jakkus',
    role: 'Class mount curator',
    highlight: 'Sells remix-exclusive Felscorned class mounts for 20,000 Bronze per alt after you earn the Timerunner achievement.',
    tips: [
      'Your first level 80 character on each class unlocks the mount automatically; buy extras here for alts.',
      'Combine purchases with Turbo Boost Bronze bonuses to cut the sticker price to 16,000 Bronze.',
    ],
    image: legionImages.vendorGrandmasterJakkus ?? legionImages.felClassMounts,
  },
  {
    name: 'Hemet Nesingwary XVII',
    role: 'Mount merchant',
    highlight: 'Stocks remix-exclusive mounts such as the Arcberry Manasaber and Bonesteed recolors.',
    tips: [
      'Inventory rotates with each phase. Check back on Phase 2 (October 21) and Phase 4 (November 18) unlocks.',
      'Mounts cost 40,000–60,000 Bronze—add them to the Bronze Calculator to avoid impulse buys.',
    ],
  },
  {
    name: 'Horos',
    role: 'Toys & pets vendor',
    highlight: 'Offers Strange Humming Crystal, Wondrous Wisdomball, and other toys/pets between 5,000–25,000 Bronze.',
    tips: [
      'Purchase Strange Humming Crystals early to farm Arcway rare rotations for Infinite Knowledge.',
      'Horos’ inventory fuels the “A Noble Event” micro-holiday—check stock before the November 8 weekend.',
    ],
    image: legionImages.vendorHoros,
  },
  {
    name: 'Pythagorus',
    role: 'Raid apparel',
    highlight: 'Sells the highest difficulty ensembles for Tier 19–21; buying Mythic unlocks all lower variants.',
    tips: [
      'Pick up a favorite ensemble before you grind for recolors—you only need to buy each set once.',
      'Costs start at 35,000 Bronze; bundle purchases with Argus Eternal Bronze caches for efficiency.',
    ],
  },
  {
    name: 'Agos the Silent',
    role: 'Lost & Found apparel',
    highlight: 'Carries legacy recolors and unique ensembles missing from other vendors.',
    tips: [
      'Great source for dyed recolors that previously required the Trial of Style or discontinued quests.',
      'Rotate through stock weekly—Agos refreshes on the Tuesday reset.',
    ],
  },
  {
    name: 'Arturos',
    role: 'Dungeon apparel',
    highlight: 'Offers Timeworn Keystone-inspired ensembles and weapon appearances.',
    tips: [
      'Queue for Timeworn Keystone dungeons while wearing newly purchased ensembles to screenshot variants.',
      'Expect 12,000–18,000 Bronze per ensemble; prioritize your main spec’s armor class first.',
    ],
  },
  {
    name: 'Larah Treebender',
    role: 'World apparel',
    highlight: 'World quest and leveling recolors live here, including Suramar civilian outfits.',
    tips: [
      'Great for casual roleplay transmogs—most sets cost 6,000–10,000 Bronze.',
      'Pairs well with Nightfallen reputation grinds, as Larah matches the NPC disguises you unlock.',
    ],
  },
  {
    name: 'Unicus',
    role: 'Exclusive ensembles',
    highlight: 'Sells limited-run cosmetics like the Kaldorei Queen accessories when the related achievements are active.',
    tips: [
      'Check back after completing “Kaldorei Queen’s Vestments” in Phase 2 to see the ensemble discount.',
      'Inventory may vanish at the event finale on January 19, 2026—redeem loyalty Bronze beforehand.',
    ],
  },
  {
    name: 'Domelius (Coming Soon)',
    role: 'Housing decor vendor',
    highlight: 'Currently idle, but slated to sell housing decorations during Phase 5 – Infinite Echoes (December 9, 2025).',
    tips: [
      'Plan to reserve at least 50,000 Bronze for decor when housing support lands in December.',
      'Expect stock drawn from Suramar interior assets based on PTR strings—keep spare Strange Humming Crystals for synergy.',
    ],
    image: legionImages.infiniteBazaarIsland,
  },
];

const phasePriorities = [
  {
    phase: 'Phase 1 – Skies of Fire (October 7 – October 20, 2025)',
    focus: [
      'Secure class-specific Felscorned mounts on your first 80 and add extras to the Bronze Calculator for alts.',
      'Buy Strange Humming Crystals and Everlasting Nosh from Horos/Nostwin to accelerate Bronze and Infinite Knowledge farming.',
    ],
  },
  {
    phase: 'Phase 2 – Rise of the Nightfallen (October 21 – November 3, 2025)',
    focus: [
      'Shop Suramar-themed ensembles from Larah Treebender and Unicus once you finish Masquerade and Insurrection chapters.',
      'Allocate Bronze for Arcberry Manasaber and Bonesteed mounts rotating into Hemet’s stock.',
    ],
  },
  {
    phase: 'Phase 3 – Legionfall (November 4 – November 17, 2025)',
    focus: [
      'Pick up Tomb of Sargeras and Cathedral ensembles from Pythagorus before pushing Heroic keystones.',
      'Grab pet bundles from Horos to stack with Legionfall emissary reputation bonuses.',
    ],
  },
  {
    phase: 'Phase 4 – Argus Eternal (November 18 – December 8, 2025)',
    focus: [
      'Set aside 60,000+ Bronze for Violet Spellwing, Shackled Ur’zul, or other Argus-tier mounts.',
      'Purchase Krokul and Army of the Light appearances from Arturos as Argus world quests open.',
    ],
  },
  {
    phase: 'Phase 5 – Infinite Echoes (December 9, 2025 – January 19, 2026)',
    focus: [
      'Expect Domelius to activate with housing decor—budget at least 10,000 Bronze per major piece.',
      'Convert overflow Infinite Knowledge into Bronze, then backfill any missing ensembles before the finale.',
    ],
  },
];

const faqEntries = [
  {
    question: 'Do vendor inventories rotate daily or weekly?',
    answer:
      'Most Bronze vendors refresh on the Tuesday reset. Mounts and ensembles tied to event phases unlock immediately when the phase starts, not before.',
  },
  {
    question: 'Can I preview ensembles before buying?',
    answer:
      'Yes. Talk to any vendor and use the built-in Dressing Room preview. Add items to the Bronze Calculator to track costs before finalizing.',
  },
  {
    question: 'Is there a limit on Strange Humming Crystals or class mount purchases?',
    answer:
      'No limit exists. Buy as many toys or mounts as you can afford—Bronze is the only gating factor once achievements are complete.',
  },
];

export default function BronzeVendorsGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Infinite Bazaar Bronze Vendor Guide – Legion Remix 2025',
    description:
      'All Bronze vendors in the Infinite Bazaar, arrival methods, and spending priorities for each Legion Remix phase.',
    url: 'https://legionremixhub.com/guides/bronze-vendors',
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Bronze Vendors', path: '/guides/bronze-vendors' },
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
            <h1 className="text-4xl font-bold text-white mb-2">Infinite Bazaar Bronze Vendor Guide</h1>
            <p className="text-sm text-gray-400">
              Published October 29, 2025 • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 8 min read
            </p>
            <p>
              The Infinite Bazaar is Legion Remix’s floating marketplace just south of Dalaran. Every Bronze vendor—mounts,
              toys, ensembles, consumables—lives here. This guide shows how to reach the island, who sells what, and when to
              budget Bronze during the five content phases that run through January 19, 2026.
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

          <section id="arrival" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden mb-6">
              <Image
                src={legionImages.infiniteBazaarIsland ?? '/images/game/reference-splash.jpg'}
                alt="The Infinite Bazaar floating island outside Dalaran"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Getting to the Infinite Bazaar</h2>
            <p>
              The bazaar opens with Legion Remix on October 7, 2025, and stays active until the event ends on January 19,
              2026. Use one of the following options whenever you need Bronze shopping therapy:
            </p>
            <ul className="space-y-3 text-sm">
              {arrivalOptions.map((option) => (
                <li key={option.label} className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
                  <p className="font-semibold text-gray-100">{option.label}</p>
                  <p>{option.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="vendors" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bronze Vendor Directory</h2>
            <p>
              Every tent in the Infinite Bazaar lines up with one of the categories below. Use the notes to plan purchases,
              unlock ensembles before their achievements, and avoid crowding the Bronze Calculator with impulse buys.
            </p>

            <div className="space-y-6">
              {vendorDirectory.map((vendor) => (
                <div key={vendor.name} className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden">
                  {vendor.image ? (
                    <Image
                      src={vendor.image}
                      alt={`${vendor.name} in the Infinite Bazaar`}
                      width={1024}
                      height={576}
                      className="w-full object-cover"
                    />
                  ) : null}
                  <div className="p-6 space-y-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-semibold text-white">{vendor.name}</h3>
                      <p className="text-sm text-gray-400">{vendor.role}</p>
                    </div>
                    <p className="text-sm">{vendor.highlight}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {vendor.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="priorities" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Phase-by-Phase Spending Priorities</h2>
            <p>
              Legion Remix rolls out new inventory every two weeks alongside raids, dungeons, and achievements. Use the timeline
              below to earmark Bronze for the items that disappear fastest.
            </p>
            <div className="space-y-5">
              {phasePriorities.map((phase) => (
                <div key={phase.phase} className="rounded-xl border border-emerald-800/40 bg-emerald-900/20 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{phase.phase}</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {phase.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="budgeting" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bronze Budgeting Tips</h2>
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 space-y-3 text-sm">
              <p>
                Use these habits to keep Bronze flowing throughout the 15-week event. Pair this page with the{' '}
                <Link href="/calculator" className="text-green-400 hover:text-green-300">
                  Bronze Calculator
                </Link>{' '}
                and cross-reference the{' '}
                <Link href="/guides/ancient-mana" className="text-green-400 hover:text-green-300">
                  Ancient Mana guide
                </Link>{' '}
                for currency farming.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Set <strong>Bronze envelopes</strong> per phase: one envelope for mounts, one for ensembles, one for toys/pets.
                </li>
                <li>
                  Use Turbo Boost weekends (next runs October 25–27, 2025) to push Bronze earnings before high-cost purchases.
                </li>
                <li>
                  Tag expensive goals inside the Bronze Calculator and duplicate the list for alts to avoid double buying.
                </li>
                <li>
                  Coordinate with your guild—armor-type ensembles unlock across the warband, so split purchases to save Bronze.
                </li>
              </ul>
            </div>
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
            <h2 className="text-xl font-semibold text-white mb-3">Related Legion Remix Planning</h2>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>
                <Link href="/guides/class-mounts" className="text-green-400 hover:text-green-300">
                  Class Mounts & Requirements
                </Link>{' '}
                – map the Timerunner achievements tied to Grandmaster Jakkus’ stock.
              </li>
              <li>
                <Link href="/guides/rewards" className="text-green-400 hover:text-green-300">
                  Rewards Compendium
                </Link>{' '}
                – view every Bronze cost in sortable tables before you spend.
              </li>
              <li>
                <Link href="/guides/infinite-knowledge" className="text-green-400 hover:text-green-300">
                  Infinite Knowledge Guide
                </Link>{' '}
                – convert overflow power into Bronze heading into Phase 5 – Infinite Echoes.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
