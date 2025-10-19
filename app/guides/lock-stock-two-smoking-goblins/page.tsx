import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Lock, Stock, and Two Smoking Goblins Legion Remix Guide');
const pageDescription = formatMetaDescription(
  'Complete Lock, Stock, and Two Smoking Goblins in Legion Remix with exact spawn timers, Torn Invitation tips, Bronze budgeting, and troubleshooting for the Dalaran micro-holiday rotation.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/lock-stock-two-smoking-goblins'),
  },
  other: {
    'article:published_time': '2025-10-18',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Quest prerequisites', href: '#prerequisites' },
  { label: 'Step-by-step route', href: '#walkthrough' },
  { label: 'Bronze & rewards', href: '#rewards' },
  { label: 'Micro-holiday calendar', href: '#calendar' },
  { label: 'Reset & troubleshooting', href: '#troubleshooting' },
  { label: 'Pair with A Noble Event', href: '#a-noble-event' },
];

const checklist = [
  'Unlock Dalaran flight paths and grab the Dalaran Hearthstone before the vendor window opens.',
  'Keep 10,000 Bronze ready if you plan to buy the Reins of the Llothien Prowler during the same weekend.',
  'Accept and hold the “Lock, Stock, and Two Smoking Goblins” quest until Turbo Boost or housing decor rotations if you want extra Bronze.',
  'Invite friends on lower-pop shards to reduce competition for barrels, barrels, and more barrels.',
  'Use /event alerts to track the micro-holiday announcements — they repeat every other Friday at 19:00 server time.',
];

export default function LockStockGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Lock, Stock, and Two Smoking Goblins Legion Remix Guide',
    description:
      'Walkthrough for completing the Lock, Stock, and Two Smoking Goblins quest during Legion Remix, including Torn Invitation synergy, Bronze budgeting, and troubleshooting tips.',
    url: 'https://legionremixhub.com/guides/lock-stock-two-smoking-goblins',
    datePublished: '2025-10-18',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Lock, Stock, and Two Smoking Goblins', path: '/guides/lock-stock-two-smoking-goblins' },
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
          <h1 className="text-4xl font-bold text-white">Lock, Stock, and Two Smoking Goblins Legion Remix Guide</h1>
          <p className="text-sm text-gray-400 mt-2">
            Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 10 min
            read
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The <strong>Lock, Stock, and Two Smoking Goblins Legion Remix</strong> quest is part of the micro-holiday that
            cycles through Dalaran every other Friday during the event. Completing it awards Bronze, Infinite Knowledge,
            and—when paired with Torn Invitation—unlocks the Llothien Prowler fox mount recolor. This walkthrough covers the
            Legion Remix route, spawn timers, and Bronze priorities so you never miss the goblin getaway.
          </p>
          <p className="text-sm text-gray-300 mt-3">
            Searching for <strong>legion remix lock stock and two smoking goblins</strong> or curious how the <strong>lock stock and two smoking goblins remix</strong> version differs from 2017? Everything you need—spawn timers, vendor rotations, and Bronze budgets—lives below.
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
                src={legionImages.rewardVendorHemet}
                alt="Hemet Nesingwary XVII selling Torn Invitation rewards during Legion Remix"
                width={1200}
                height={675}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs text-gray-200 uppercase tracking-[0.3em]">
                Torn Invitation Vendor • Infinite Bazaar
              </p>
            </div>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4" id="prerequisites">
            Legion Remix Requirements &amp; Prerequisites
          </h2>
          <p className="mb-3">
            Before “Lock, Stock, and Two Smoking Goblins” appears, make sure your Timerunner has completed the Legion Remix
            introduction, unlocked Heroic Dalaran, and claimed at least one Infinite Knowledge rank. The quest becomes
            available during the <strong>A “Noble” Event</strong> micro-holiday window, which alternates with other Broken
            Isles festivities. If you have not seen Hemet Nesingwary XVII in Dalaran, run the warm-up checklist below.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Finish “Uniting the Isles” to ensure Dalaran micro-holiday vendors phase correctly.</li>
            <li>Visit the Infinite Bazaar and buy at least one Torn Invitation from Horos to unlock fox mount follow-up steps.</li>
            <li>Toggle Heroic World Tier if your group wants additional Bronze from surrounding rares.</li>
            <li>Set your hearth to Dalaran and bind the <strong>Legion Remix site</strong> portal room for quick returns.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4" id="walkthrough">
            Step-by-Step Walkthrough
          </h2>
          <p className="mb-4">
            The Legion Remix roadmap splits the quest into three beats: find the goblins, secure the booze, deliver the
            goods. Use the following flow during each micro-holiday window.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">1. Pick up the quest in Dalaran</h3>
              <p className="text-sm text-gray-300">
                Speak with <strong>Hemet Nesingwary XVII</strong> in the <em>Legion Remix road map</em> version of Dalaran
                (coordinates 58.4, 41.2). He only appears when the A “Noble” Event banner is active. Accept “Lock, Stock, and
                Two Smoking Goblins” and grab the <Link href="/guides/a-noble-event#shopping-list" className="text-green-400 hover:text-green-300">shopping list</Link> tasks at the same time.
              </p>
            </div>
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">2. Collect the felony fireworks</h3>
              <p className="text-sm text-gray-300">
                Jump to Stormheim and head toward <strong>Hafr Fjall</strong>. Goblin runners spawn every 5 minutes on a
                clockwise loop. Tag barrels quickly—Empowered enemies will chase you if Heroic World Tier is active. Expect
                three turn-ins per loop; group with a rogue or demon hunter to guarantee tags.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                <li>Use <code className="text-xs">/tar Nesing</code> to track goblin handlers hiding in the crowd.</li>
                <li>Have a priest ready with Leap of Faith to yoink barrels away from Horde or Alliance competitors.</li>
                <li>Resets bugged? See the troubleshooting section below to shard hop safely.</li>
              </ul>
            </div>
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">3. Deliver the goods and snag the Bronze</h3>
              <p className="text-sm text-gray-300">
                Once you’ve collected the casks, return to Hemet. Turn in the quest for a <strong>Lesser Bronze Cache</strong>,
                500 base Bronze (650 during Turbo Boost), and a fat chunk of Infinite Knowledge. The follow-up rewards include
                progress toward the <em>Lock, Stock, and Two Smoking Goblins Legion Remix</em> achievement and unlock the fox
                mount vendor.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10" id="rewards">
          <h2 className="text-2xl font-bold text-white mb-4">Rewards &amp; Bronze Budget</h2>
          <p className="mb-4">
            Expect the base reward to be 500 Bronze plus the usual Infinite Knowledge packet. If you line this up with the
            Legion Remix bronze calculator plan, you’ll have an easier time justifying the <strong>10,000 Bronze</strong> for
            the <em>Llothien Prowler</em> mount and 2,500 Bronze for cosmetic fireworks.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-gray-900/40 border border-green-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Bronze snapshot</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Quest completion: 500 Bronze (650 during Turbo Boost)</li>
                <li>Infinite Knowledge packet: converts to 1,000 Bronze after rank 36</li>
                <li>Vendor shopping: 10,000 Bronze for the fox mount, 2,500 Bronze for toys</li>
                <li>Optional: 500 Bronze for Legion Remix reward tracker fireworks bundles</li>
              </ul>
            </div>
            <div className="bg-gray-900/40 border border-blue-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Planner tips</h3>
              <p className="text-sm text-gray-300">
                Add the fox mount, fireworks, and Torn Invitation upgrades to the <Link href="/calculator" className="text-green-400 hover:text-green-300">Legion Remix bronze spreadsheet</Link> so you know how many Bronze runs you need before the next rotation. Sync with your guild&apos;s Legion Remix reward tracker channel to avoid duplicate purchases.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10" id="calendar">
          <h2 className="text-2xl font-bold text-white mb-4">Micro-holiday Calendar &amp; Spawn Timers</h2>
          <p className="mb-3">
            A “Noble” Event fires every other Friday starting October 10, 2025. Each window lasts 72 hours. The goblins spawn
            in 5-minute intervals; if they despawn unexpectedly, wait for the shard to soft reset or swap to a different
            realm.
          </p>
          <table className="w-full text-left text-sm text-gray-300 border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900/80 text-gray-100 uppercase text-xs tracking-widest">
              <tr>
                <th className="px-4 py-3">Week</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Launch</td>
                <td className="px-4 py-3">October 10 - October 13</td>
                <td className="px-4 py-3">Quest unlocks; fox mount vendor appears for the first time.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 3</td>
                <td className="px-4 py-3">October 24 - October 27</td>
                <td className="px-4 py-3">Pair with Turbo Boost dungeon farming for excess Bronze.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 5</td>
                <td className="px-4 py-3">November 7 - November 10</td>
                <td className="px-4 py-3">Good window for alts once Infinite Knowledge ranks snowball.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 7</td>
                <td className="px-4 py-3">November 21 - November 24</td>
                <td className="px-4 py-3">Argus Eternal rares overlap; run Strange Humming Crystal loops.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 9</td>
                <td className="px-4 py-3">December 5 - December 8</td>
                <td className="px-4 py-3">Final pre-Infinite Echoes rotation—empty Bronze before housing decor arrives.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 11</td>
                <td className="px-4 py-3">December 19 - December 22</td>
                <td className="px-4 py-3">Holiday overlap with Fel Skies catch-up; expect crowded shards.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 13</td>
                <td className="px-4 py-3">January 2 - January 5</td>
                <td className="px-4 py-3">Ideal time to finish leftover Legion Remix guide achievements.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 15</td>
                <td className="px-4 py-3">January 16 - January 19</td>
                <td className="px-4 py-3">Last call—event ends January 19 alongside the Legion Remix roadmap finale.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10" id="troubleshooting">
          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting &amp; Shard Hopping</h2>
          <p className="mb-3">
            Still seeing the <strong>Lock, Stock, and Two Smoking Goblins not spawning</strong> bug? Follow these fixes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Swap to <code className="text-xs">/1 Custom</code> group finder shards; the quest objects reappear instantly on fresh shards.</li>
            <li>Abandon and reaccept the quest after speaking with Hemet to refresh the objective tracker.</li>
            <li>Disable phasing addons like Cross RP that can desync you from the Remix layer.</li>
            <li>Log completely out if the objective counter is stuck at 0/3 despite collecting barrels.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-300">
            When all else fails, hearth to the Infinite Bazaar and use the Legion Remix website portal network to re-enter Stormheim.
            Blizzard hotfixes usually reset the goblin routes every 30 minutes.
          </p>
        </section>

        <section className="mb-10" id="a-noble-event">
          <h2 className="text-2xl font-bold text-white mb-4">Pairing with A Noble Event &amp; Other Activities</h2>
          <p className="mb-3">
            “Lock, Stock, and Two Smoking Goblins” lines up perfectly with <Link href="/guides/a-noble-event" className="text-green-400 hover:text-green-300">A Noble Event Legion Remix</Link>,
            Strange Humming Crystal farms, and the Legion Remix bronze calculator route.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            <li>
              Pick up Torn Invitation quests from Horos, then head to Suramar for <Link href="/guides/challiane-vineyards" className="text-green-400 hover:text-green-300">Challiane Vineyards</Link> while waiting on goblin timers.
            </li>
            <li>
              Run Maw of Souls keystones immediately afterward—Heroic World Tier boosts Bronze, Infinite Power, and class threads.
            </li>
            <li>
              Update your guild&apos;s Legion Remix reward tracker spreadsheet with fox mount purchases to avoid duplicate spending.
            </li>
            <li>
              Spend leftover Bronze on housing decor vendors unlocked in Infinite Echoes; the micro-holiday ends before they rotate again.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="text-sm text-gray-400">
          Need more Legion Remix site tools? Jump back to the{' '}
          <Link href="/" className="text-green-400 hover:text-green-300">
            homepage roadmap
          </Link>
          , refresh the{' '}
          <Link href="/calculator" className="text-green-400 hover:text-green-300">
            Bronze calculator
          </Link>
          , and keep the{' '}
          <Link href="/rewards" className="text-green-400 hover:text-green-300">
            rewards list
          </Link>{' '}
          nearby.
        </footer>
      </div>
    </div>
  );
}
