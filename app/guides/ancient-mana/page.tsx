import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-29';

const pageTitle = formatMetaTitle('Ancient Mana Farming & Capacity Guide – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Track every Ancient Mana use in Legion Remix, unlock the 2,000 cap through quests and treasures, and plan efficient farming routes through Suramar City and Tel’anor.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/ancient-mana'),
  },
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Currency Guide',
  },
};

const quickLinks = [
  { label: 'Why Ancient Mana matters', href: '#usage' },
  { label: 'Capacity upgrades', href: '#capacity' },
  { label: 'Node & loot sources', href: '#sources' },
  { label: 'Farming routes', href: '#farming' },
  { label: 'FAQ & troubleshooting', href: '#faq' },
];

const usageHighlights = [
  {
    title: 'Suramar campaign progression',
    details: [
      'Expect to spend roughly 3,650 Ancient Mana finishing the Good Suramaritan questline before the Phase 2 unlock on October 21, 2025.',
      'Feeding the core Nightfallen NPCs (Thalyssra, Oculeth, Valtrois) costs 50 each; skipping a feeding temporarily locks their questlines and vendor tabs.',
      'Leyline feeds and teleport beacons in Shal’Aran absorb 100–500 Ancient Mana but dramatically shorten traversal for Withered Army Training and world quest loops.',
    ],
  },
  {
    title: 'Scenario & catch-up systems',
    details: [
      'Withered Army Training consumes 400–2,000 Ancient Mana per run; plan your turn-ins during Turbo Boost weekends for bonus Bronze.',
      'Telemancy beacons between Shal’Aran, Falanaar, Moon Guard Stronghold, and Tel’anor each require a 50–150 Ancient Mana activation fee.',
      'New buffs introduced for Legion Remix—Leyline Empowerment and Arcanist waystones—cost 5–50 Ancient Mana and layer well with Heroic World Tier farming.',
    ],
  },
  {
    title: 'Vendors & cosmetic sinks',
    details: [
      'The Menagerie in Suramar City continues to sell cosmetic pets and toys for 100–1,000 Ancient Mana.',
      'Ancient Mana item drops (crystals, gems, clusters) can sit in your bags to bypass the currency cap—save them for Withered Army Training prep or Nightfallen vendor rotations.',
    ],
  },
];

const capacityQuests = [
  {
    name: 'Feeding Shal’Aran',
    increase: '+200 capacity',
    note: 'Unlocks as you stabilize Shal’Aran early in Chapter 1 – Nightfall.',
  },
  {
    name: 'The Valewalker’s Burden',
    increase: '+300 capacity',
    note: 'Awarded after sealing the Arcan’dor in Chapter 5 – Feeding Shal’Aran.',
  },
  {
    name: "Thalyssra's Abode",
    increase: '+200 capacity',
    note: 'Clears at the start of Chapter 7 – The Waning Crescent once your disguise is permanent.',
  },
  {
    name: "How It's Made: Arcwine",
    increase: '+200 capacity',
    note: 'Granted during Chapter 8 – Blood and Wine after touring vineyards with Silgryn.',
  },
  {
    name: 'Make Your Mark',
    increase: '+300 capacity',
    note: 'Earned while recruiting Ly’leth Lunastre during Chapter 9 – Statecraft.',
  },
];

const capacityItems = [
  { name: 'Enchanted Burial Urn', location: 'Tel’anor pavilion (north side)', coordinates: '44.9, 31.0' },
  { name: 'Infinite Stone', location: 'Arcane Power Unit, Highmist Terrace in Moon Guard Stronghold', coordinates: '35.6, 12.1' },
  { name: "Kel'danath's Manaflask", location: 'Bench inside Koralune Manor, south of Falanaar', coordinates: '21.5, 54.4' },
  { name: "Kyrtos's Research Notes", location: 'Den of the Demented cave in Felsoul Hold (entrance 27, 73)', coordinates: '26.8, 70.7' },
  { name: 'Volatile Leyline Crystal', location: 'Lower level of the Shattered Locus, Falanaar', coordinates: '21.3, 33.7' },
];

const nodeTypes = [
  { label: 'Ancient Mana Shard', amount: '15 Ancient Mana' },
  { label: 'Ancient Mana Chunk', amount: '30 Ancient Mana' },
  { label: 'Ancient Mana Crystal', amount: '50 Ancient Mana (item that can be banked)' },
  { label: 'Ancient Mana Gem', amount: '100 Ancient Mana (tradeable item)' },
  { label: 'Shimmering Ancient Mana Cluster', amount: '150 Ancient Mana (bind-on-pickup item)' },
];

const cityNodes = ['Leypetal Blossom', 'Leypetal Powder', 'Glowing Tome', 'Mana-Infused Gem', 'Twice-Fortified Arcwine'];

const farmingRoutes = [
  {
    title: 'Meredil to Evermoon promenade',
    details:
      'Loop the southwest quarter of Suramar City after completing “Masquerade”. Arcwine bottles and Glowing Tomes regularly respawn in upper balconies; expect 600+ Ancient Mana every ten minutes with minimal combat if you maintain your disguise.',
  },
  {
    title: 'Tel’anor leyline circuit',
    details:
      'Teleport directly to Tel’anor from Shal’Aran and clear the gardens clockwise. All five capacity treasures sit within a short glide, making this the most efficient catch-up loop for fresh alts hitting Phase 2.',
  },
  {
    title: 'Moon Guard Stronghold plateau',
    details:
      'Heroic World Tier elites drop 20–30 Ancient Mana each and cluster near the Arcane Power Unit. Pair the farm with Leyline feeds for the “Why Can’t I Hold All This Mana?” achievement progress.',
  },
  {
    title: 'Withered Army Training double-up',
    details:
      'Save 800–1,000 Ancient Mana from nodes, then chain two Withered Army Training runs during Turbo Boost weekends to transform currency into Artifactum Sand, Infinite Knowledge, and Bronze refunds.',
  },
];

const dailyLoop = [
  'Feed Thalyssra, Oculeth, and Valtrois immediately after the daily reset at 07:00 PDT / 10:00 EDT to keep all services unlocked.',
  'Pick up the “Ancient Mana” quest from Thalyssra to refresh the Mana Divining Stone if your minimap tracking expires.',
  'Clear one Suramar world quest district while collecting city nodes—world quest caches now include 50 Ancient Mana gems in Legion Remix.',
  'Spend spare Ancient Mana on Telemancy beacons before logging out so you never cap on the 2,000 limit.',
];

const faqs = [
  {
    question: 'Can I store Ancient Mana above the 2,000 cap?',
    answer:
      'Yes. Item drops such as Ancient Mana Gems, Clusters, and Twice-Fortified Arcwine stay in your inventory until consumed. Keep a few stacks ready for Withered Army Training or vendor runs.',
  },
  {
    question: 'What if the Mana Divining Stone disappears?',
    answer:
      'Speak with First Arcanist Thalyssra in Shal’Aran for a free replacement. Using the stone once re-enables minimap node tracking for the rest of the event.',
  },
  {
    question: 'Does Heroic World Tier change Ancient Mana drops?',
    answer:
      'Heroic World Tier doesn’t increase node yields, but the empowered elites in Suramar drop extra Ancient Mana and Bronze, making combat-heavy routes more lucrative.',
  },
];

export default function AncientManaGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Ancient Mana Farming & Capacity Guide – Legion Remix 2025',
    description:
      'How to reach the 2,000 Ancient Mana cap, plan Suramar farming routes, and budget the currency for Withered Army Training during Legion Remix 2025.',
    url: 'https://legionremixhub.com/guides/ancient-mana',
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Ancient Mana', path: '/guides/ancient-mana' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto text-gray-300">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Ancient Mana Guide for Legion Remix</h1>
            <p className="text-sm text-gray-400">
              Published October 29, 2025 • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 9 min read
            </p>
            <p>
              Ancient Mana fuels every major Suramar system during Legion Remix 2025 (October 7, 2025 – January 19, 2026).
              You need thousands of units to complete the Good Suramaritan storyline, unlock teleports, sustain Nightfallen
              allies, and convert Withered Army Training into Bronze. This guide walks through every sink, cap upgrade, and
              efficient farming loop so your Timerunners never run dry once Phase 2 – Rise of the Nightfallen launches on
              October 21, 2025.
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

          <section id="usage" className="space-y-6 mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden">
              <Image
                src={legionImages.ancientManaChunk ?? '/images/game/artifactum-sand.jpg'}
                alt="Ancient Mana chunk resting in a crystal growth"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">What Ancient Mana Powers</h2>
            <p>
              Treat Ancient Mana as Suramar’s operating budget. The currency unlocks chapters, keeps allies fed, and
              converts into power during Withered Army Training. Mapping your spending ahead of Phase 2 prevents stalls
              when the Insurrection campaign and Kaldorei Queen’s Vestments ensemble arrive.
            </p>
            <div className="space-y-6">
              {usageHighlights.map(({ title, details }) => (
                <div key={title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="capacity" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How to Increase Ancient Mana Capacity</h2>
            <p>
              Timerunners begin Legion Remix with a 300 Ancient Mana cap. Completing key Suramar chapters and securing five
              hidden treasures lifts the ceiling to 2,000, unlocking the “Why Can’t I Hold All This Mana?” achievement along
              the way.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Quest Rewards</h3>
                <ul className="space-y-3 text-sm">
                  {capacityQuests.map((quest) => (
                    <li key={quest.name}>
                      <p className="font-semibold text-gray-100">{quest.name}</p>
                      <p>{quest.increase}</p>
                      <p className="text-xs text-gray-400">{quest.note}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Treasure Cache Upgrades</h3>
                <ul className="space-y-3 text-sm">
                  {capacityItems.map((item) => (
                    <li key={item.name}>
                      <p className="font-semibold text-gray-100">{item.name}</p>
                      <p>{item.location}</p>
                      <p className="text-xs text-gray-400">Coordinates: {item.coordinates}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="sources" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden mb-6">
              <Image
                src={legionImages.ancientManaArcanePowerUnit ?? legionImages.artifactumSand}
                alt="Arcane Power Unit holding an Infinite Stone in Moon Guard Stronghold"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Where Ancient Mana Comes From</h2>
            <p>
              After completing “Ancient Mana” for Thalyssra you receive the Mana Divining Stone—use it once to track nodes
              across the Broken Isles for the rest of Legion Remix. Outside Suramar City you will mostly see crystal deposits;
              inside the city, everyday objects hide larger payouts.
            </p>

            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Open-World Node Values</h3>
              <ul className="space-y-2 text-sm">
                {nodeTypes.map((node) => (
                  <li key={node.label} className="flex items-start justify-between gap-4">
                    <span className="font-medium text-gray-100">{node.label}</span>
                    <span className="text-gray-300">{node.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Suramar City Finds</h3>
              <p className="text-sm mb-3">
                Unlock the Masquerade disguise during Chapter 4 before hunting inside the city. Each item awards 30–120
                Ancient Mana and respawns quickly during peak hours.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {cityNodes.map((node) => (
                  <li key={node}>{node}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="farming" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-6 mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">Recommended Farming Routes</h2>
              <p className="text-sm">
                Combine these loops with world quests, Nightfallen emissaries, or Heroic World Tier rare trains to keep Bronze
                and Infinite Knowledge flowing alongside Ancient Mana.
              </p>
            </div>

            <div className="space-y-6">
              {farmingRoutes.map(({ title, details }) => (
                <div key={title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm">{details}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-emerald-800/60 bg-emerald-900/20 p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-3">Daily Planning Checklist</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {dailyLoop.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ &amp; Troubleshooting</h2>
            <div className="space-y-6">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{question}</h3>
                  <p className="text-sm">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Related Legion Remix Resources</h2>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>
                <Link href="/guides/suramar-campaign" className="text-green-400 hover:text-green-300">
                  Suramar Quest Campaign Guide
                </Link>{' '}
                – step-by-step chapters, phase timing, and bonuses for the Nightfallen storyline.
              </li>
              <li>
                <Link href="/guides/bronze-vendors" className="text-green-400 hover:text-green-300">
                  Infinite Bazaar Bronze Vendor Guide
                </Link>{' '}
                – plan Bronze spending once Withered Army Training covers your Ancient Mana needs.
              </li>
              <li>
                <Link href="/guides/kaldorei-royal-vestments" className="text-green-400 hover:text-green-300">
                  Kaldorei Queen’s Vestments Walkthrough
                </Link>{' '}
                – complete Insurrection achievements that rely on Ancient Mana-fueled chapters.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}

