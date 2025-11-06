import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('A Noble Event Legion Remix Micro-Holiday Guide');
const pageDescription = formatMetaDescription(
  'Master the A Noble Event Legion Remix micro-holiday with vendor rotations, Torn Invitation drops, Bronze budgeting, and pairing strategies for Lock, Stock, and Two Smoking Goblins.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/a-noble-event'),
  },
  openGraph: buildOpenGraphMetadata('/guides/a-noble-event', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-10-18',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Micro-Holiday Guide',
  },
};

const quickLinks = [
  { label: 'Vendor rotation', href: '#vendor-rotation' },
  { label: 'Shopping list', href: '#shopping-list' },
  { label: 'Bronze planning', href: '#bronze-planning' },
  { label: 'Torn Invitation tips', href: '#torn-invitation' },
  { label: 'Event schedule', href: '#schedule' },
  { label: 'Pairing with other activities', href: '#pairings' },
  { label: 'Troubleshooting', href: '#troubleshooting' },
];

const shoppingList = [
  { item: 'Reins of the Llothien Prowler', cost: 10000, note: 'Account-wide fox mount recolor, free for first purchase if you own the original run.' },
  { item: 'Crate of Barrel-Aged Moonshine', cost: 2500, note: 'Toy that spawns a beverage barrel for screenshot parties.' },
  { item: 'Aromatic Vintner’s Apron', cost: 1500, note: 'Housing decor set with café props during Infinite Echoes.' },
  { item: 'Goblin Event Fireworks', cost: 500, note: 'Used to complete the Lock, Stock, and Two Smoking Goblins follow-up.' },
  { item: 'Torn Invitation (repeat)', cost: 0, note: 'Drops from Withered Army Training and Suramar world quests—buy spares from Horos if RNG hates you.' },
];

export default function ANobleEventGuide() {
  const articleSchema = createArticleSchema({
    headline: 'A Noble Event Legion Remix Micro-Holiday Guide',
    description:
      'Everything you need to know about A Noble Event in Legion Remix, including shopping priorities, Bronze planning, and how to line the micro-holiday up with mounts and cosmetics.',
    url: 'https://legionremixhub.com/guides/a-noble-event',
    datePublished: '2025-10-18',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'A Noble Event', path: '/guides/a-noble-event' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto text-gray-200">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white">A Noble Event Legion Remix Guide</h1>
          <p className="text-sm text-gray-400 mt-2">
            Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 9 min read
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The <strong>A Noble Event Legion Remix</strong> micro-holiday transforms Dalaran into a pop-up gala every other
            Friday. It pairs perfectly with <Link href="/guides/lock-stock-two-smoking-goblins" className="text-green-400 hover:text-green-300">Lock, Stock, and Two Smoking Goblins</Link>, Torn Invitation farming, and Bronze spending sprees. This guide covers the vendor rotation, the optimal shopping order, and how to double dip on Bronze while the party is in town.
          </p>
          <p className="text-sm text-gray-300 mt-3">
            Players typing <strong>legion remix a noble event</strong> into their search bar want fast answers—below you&apos;ll find every spawn timer, shopping list, and Bronze calculator tip needed to clear the gala in one lap.
          </p>
          <div className="mt-6 grid md:grid-cols-[2fr_3fr] gap-6 items-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-gray-700">
              <Image
                src={legionImages.rewardVendorHoros}
                alt="Horos showcasing Infinite Bazaar wares during A Noble Event"
                width={1200}
                height={675}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs text-gray-200 uppercase tracking-[0.3em]">
                Infinite Bazaar • A Noble Event Rotation
              </p>
            </div>
          </div>
        </header>

        <section className="mb-10" id="vendor-rotation">
          <h2 className="text-2xl font-bold text-white mb-4">Vendor Rotation &amp; Location</h2>
          <p className="mb-3">
            Horos, the Infinite Bazaar&apos;s special event vendor, teleports to Dalaran when the A Noble Event banner appears.
            Look for him outside the Legerdemain Lounge near coordinates 49.8, 39.6. The Legion Remix site version of Horos
            sells cosmetics at Bronze prices instead of gold, so stock up while the booths are live.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Vendor hours mirror the <strong>Legion Remix roadmap</strong>: Friday reset through Monday morning.</li>
            <li>Alliance and Horde see the same inventory; only Bronze totals matter.</li>
            <li>Horos shares a spawn timer with Hemet Nesingwary XVII, who handles the quest portion.</li>
          </ul>
        </section>

        <section className="mb-10" id="shopping-list">
          <h2 className="text-2xl font-bold text-white mb-4">Shopping List &amp; Bronze Costs</h2>
          <p className="mb-4">
            These are the Legion Remix rewards you should prioritize each time the event rolls around. Log them in your Legion Remix reward tracker or Bronze calculator before spending.
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-gray-900/80 text-gray-100 uppercase text-xs tracking-widest">
                <tr>
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Bronze Cost</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map((row, idx) => (
                  <tr key={row.item} className={idx % 2 === 0 ? 'bg-gray-900/40 border-t border-gray-800' : 'border-t border-gray-800'}>
                    <td className="px-4 py-3 font-semibold text-white">{row.item}</td>
                    <td className="px-4 py-3">{row.cost.toLocaleString()} Bronze</td>
                    <td className="px-4 py-3">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Buying everything costs 14,000 Bronze. Add that total to your <Link href="/calculator" className="text-green-400 hover:text-green-300">Legion Remix bronze spreadsheet</Link> to compare against weekly farming projections.
          </p>
        </section>

        <section className="mb-10" id="bronze-planning">
          <h2 className="text-2xl font-bold text-white mb-4">Bronze Planning Checklist</h2>
          <p className="mb-3">
            Follow the Bronze loop below to cover every A Noble Event purchase in a single weekend without burning out.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            <li>Run <Link href="/guides/bronze-farming" className="text-green-400 hover:text-green-300">Legion Remix bronze farming</Link> circuits on Friday after reset; aim for 30,000 Bronze before shopping.</li>
            <li>Turn in six banked Infinite Research dailies for instant 6,000 Bronze after you hit the vendor.</li>
            <li>Complete <Link href="/guides/lock-stock-two-smoking-goblins" className="text-green-400 hover:text-green-300">Lock, Stock, and Two Smoking Goblins</Link> for an extra 500 Bronze and Infinite Knowledge overflow.</li>
            <li>Use the <Link href="/rewards" className="text-green-400 hover:text-green-300">Legion Remix rewards list</Link> to check off cosmetics as you buy them, then sync with guildmates.</li>
            <li>Spend leftovers on housing decor or LLothien-themed transmogs before Horos leaves town.</li>
          </ol>
        </section>

        <section className="mb-10" id="torn-invitation">
          <h2 className="text-2xl font-bold text-white mb-4">Torn Invitation Tips</h2>
          <p className="mb-3">
            Torn Invitation remains the chokepoint for fox mount collectors. Legion Remix softens the RNG by letting Horos sell
            one invitation per account each micro-holiday for 2,500 Bronze (free if you earned it in 2017). If you’re farming
            drops, hit the following waypoints:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Complete Withered Army Training during the same weekend — the chest has an elevated drop rate.</li>
            <li>Rotate Suramar world quests flagged with the <em>Noble Event</em> icon; they grant bonus Strange Humming Crystals.</li>
            <li>Use your Legion Remix reward tracker to note which alts already turned in the invitation; Bronze refunds on duplicates help cap the fox mount quickly.</li>
          </ul>
        </section>

        <section className="mb-10" id="schedule">
          <h2 className="text-2xl font-bold text-white mb-4">Event Schedule Throughout Legion Remix</h2>
          <p className="mb-3">
            A Noble Event repeats every other weekend following this cadence. Mark the dates so you never miss a shopping run.
          </p>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 space-y-2 text-sm text-gray-300">
            <p><strong>Launch Weekend:</strong> October 10 – October 13 (introduces Torn Invitation vendor)</p>
            <p><strong>Week 3:</strong> October 24 – October 27 (align with Turbo Boost dungeons)</p>
            <p><strong>Week 5:</strong> November 7 – November 10 (Legionfall unlocks Tomb of Sargeras cosmetics)</p>
            <p><strong>Week 7:</strong> November 21 – November 24 (Argus Eternal rares drop extra Bronze caches)</p>
            <p><strong>Week 9:</strong> December 5 – December 8 (Pre-Infinite Echoes shopping spree)</p>
            <p><strong>Week 11:</strong> December 19 – December 22 (Holiday overlap with Fel Skies catch-up)</p>
            <p><strong>Week 13:</strong> January 2 – January 5 (Great for alts finishing Legion Remix site achievements)</p>
            <p><strong>Week 15:</strong> January 16 – January 19 (Final weekend before the event shuts down)</p>
          </div>
        </section>

        <section className="mb-10" id="pairings">
          <h2 className="text-2xl font-bold text-white mb-4">Best Activities to Pair with A Noble Event</h2>
          <p className="mb-3">
            Use the micro-holiday as a pivot point for your weekly Legion Remix roadmap. These are the combos we recommend.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-gray-900/40 border border-green-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Bronze &amp; XP</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Stack Heroic World Tier rares in Suramar, then shop in Dalaran.</li>
                <li>Run Maw of Souls during Turbo Boost for 20,000 Bronze per hour.</li>
                <li>Cache Infinite Knowledge tokens; every rank past 36 refunds 1,000 Bronze.</li>
              </ul>
            </div>
            <div className="bg-gray-900/40 border border-blue-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Cosmetic Progress</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Finish <Link href="/guides/challiane-vineyards" className="text-green-400 hover:text-green-300">Challiane Vineyards</Link> and related Sojourner quests for extra Knowledge.</li>
                <li>Grab the weekly <Link href="/rewards#spotlights" className="text-green-400 hover:text-green-300">reward spotlights</Link> after shopping to keep your Legion Remix website achievements on track.</li>
                <li>Share purchases in guild chat so the Legion Remix reward tracker stays up-to-date.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10" id="troubleshooting">
          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting &amp; Known Issues</h2>
          <p className="mb-3">
            Encountering the “A Noble Event Legion Remix vendor not spawning” bug? Try the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Log out and in again, then take the portal from the Infinite Bazaar — the Legion Remix site layer re-syncs vendor phases.</li>
            <li>Run <code className="text-xs">/camp</code> near the Legerdemain Lounge and wait 60 seconds; the scene soft resets.</li>
            <li>Join a custom group via group finder to hop shards; vendors usually populate instantly on fresh shards.</li>
            <li>If Horos is present but Hemet is missing, talk to Chromie to cycle the phase forward one hour.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-300">
            For persistent issues, keep an eye on the <Link href="/news" className="text-green-400 hover:text-green-300">Legion Remix news tracker</Link>; Blizzard has been rolling out micro-holiday hotfixes daily since launch.
          </p>
        </section>

        <footer className="text-sm text-gray-400">
          Keep this guide bookmarked alongside the <Link href="/" className="text-green-400 hover:text-green-300">main Legion Remix roadmap</Link>,
          the <Link href="/calculator" className="text-green-400 hover:text-green-300">Bronze calculator</Link>, and the <Link href="/rewards" className="text-green-400 hover:text-green-300">rewards hub</Link> so your next A Noble Event run is fully funded.
        </footer>
      </div>
    </div>
  );
}
