import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Challiane Vineyards Legion Remix Questline Guide 2025');
const pageDescription = formatMetaDescription(
  'Finish the Challiane Vineyards Legion Remix questline fast with optimized routing, Sojourner of Azsuna credit, Infinite Knowledge prep, and Timerunner tips.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/challiane-vineyards'),
  },
  other: {
    'article:published_time': '2025-10-18',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Quest start walkthrough', href: '#quest-start' },
  { label: 'Legion Remix route planner', href: '#route-planner' },
  { label: 'Timerunner rewards & bonuses', href: '#rewards' },
  { label: 'Synergy with nearby questlines', href: '#synergy' },
  { label: 'FAQ & troubleshooting', href: '#faq' },
];

export default function ChallianeVineyardsPage() {
  const articleSchema = createArticleSchema({
    headline: 'Challiane Vineyards Legion Remix Questline Guide',
    description: 'Optimized steps for clearing Challiane Vineyards in Legion Remix, with Infinite Knowledge prep and surrounding quest synergy.',
    url: 'https://legionremixhub.com/guides/challiane-vineyards',
    datePublished: '2025-10-18',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Challiane Vineyards', path: '/guides/challiane-vineyards' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto">
        <Link
          href="/guides"
          className="text-green-400 hover:text-green-300 mb-4 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="flex flex-col gap-4 mb-6">
            <h1 className="text-4xl font-bold text-white mb-0">Challiane Vineyards Legion Remix Questline Guide</h1>
            <p className="text-sm text-gray-400">
              Published October 18, 2025 • Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 8 min read
            </p>
          </div>

          <p className="text-gray-300">
            The <strong>Challiane Vineyards Legion Remix</strong> quest is the quickest win inside the Sojourner of Azsuna achievement path. In Remix Season 2025—running from October 7, 2025 through January 19, 2026—completing this stop early unlocks one of the seven required checkmarks and pushes you toward the Infinite Knowledge rank milestones that refund Bronze later in the season. Use the steps below to clear the vineyard efficiently, line it up with nearby questlines, and avoid nameplate bugs that surfaced during the October 8 hotfix wave.
          </p>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg px-4 py-3 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <section id="quest-start">
            <h2 className="text-3xl font-bold text-white mb-4">Quest Start Walkthrough</h2>
            <p className="text-gray-300">
              Fly or glide to <code className="text-xs">/way Azsuna 47.41 12.61</code> once your Timerunner finishes the Azurewing Repose arc. Speak with <strong>Cellarman Voodani</strong>; he now offers the Challiane Vineyards quest as soon as you unlock World Quests on the zone timeline, even if you have not finished the Court of Farondis reputation story. Pick up the quest before you phase into Heroic World Tier to keep mob health low and take advantage of lower Bronze repair costs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="rounded-lg overflow-hidden border border-gray-700/60">
                <Image
                  src={legionImages.challianeVineyardsMap}
                  alt="Challiane Vineyards quest marker on the Azsuna map"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700/60">
                <Image
                  src={legionImages.challianeVineyardsLocation}
                  alt="In-game screenshot of Challiane Vineyards in Legion Remix"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-gray-300">
              Keep your <em>Threads of Time</em> buff active as you sweep the vineyard. The remix version spawns a rotating pair of Fel-touched Spriggans and Withered laborers; tag them quickly to prevent nearby groups from credit stealing. The vineyard barrels still award micro Bronze drops (5–12 Bronze each) if you loot while wearing an Epoch Memento, making the stop more lucrative than Azeroth base timeline runs.
            </p>
          </section>

          <section id="route-planner">
            <h2 className="text-3xl font-bold text-white mb-4">Legion Remix Route Planner</h2>
            <p className="text-gray-300">
              This is a single objective quest, but Legion Remix scoring encourages bundling it inside a larger Azurewing loop to maximize <strong>Infinite Power</strong> ticks per minute. Follow the timeline below to slot Challiane Vineyards between campaign beats without backtracking.
            </p>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-gray-300 mb-5">
              <ol className="space-y-3 list-decimal pl-6">
                <li><strong>Azurewing Repose finale:</strong> Finish “Eye on the Prize” and “Hungers Ended” so that Stellagosa’s phase-in does not reset vineyard mobs.</li>
                <li><strong>Challiane Vineyards sweep:</strong> Clear the Spriggan pockets, interact with the arcwine spill, and report back to Voodani.</li>
                <li><strong>Glide to The Drowned Gardens:</strong> Start <Link href="#synergy" className="text-green-400 hover:text-green-300">Minion’s Minion</Link> or <Link href="#synergy" className="text-green-400 hover:text-green-300">Crumbled Palace Cocktails</Link> depending on phase availability.</li>
                <li><strong>Felblaze cleanup:</strong> Toggle Heroic World Tier before Felblaze Ingress to stack contribution toward your weekly Turbo Boost objective.</li>
              </ol>
            </div>
            <p className="text-gray-300">
              Expect the full loop to take 12–15 minutes on a fresh Timerunner and closer to 6 minutes with fully unlocked Infinite Knowledge ranks. If you are chasing the October 14 Turbo Boost for Broken Isles world quests, bookmark this vineyard during the bonus window: the quest objective is counted as a “combat encounter” for the +25% Infinite Power surge.
            </p>
          </section>

          <section id="rewards">
            <h2 className="text-3xl font-bold text-white mb-4">Timerunner Rewards &amp; Infinite Knowledge Gains</h2>
            <p className="text-gray-300">
              Completing <strong>Challiane Vineyards</strong> awards standard quest XP, 150 Court of Farondis reputation, and a 125 Bronze payout. More importantly, it grants one of the seven ticks for <em>Sojourner of Azsuna</em>. When you finish the full Sojourner set, you receive an <strong>Infinite Knowledge cache</strong> that unlocks Rank 3 automatically on post-October 7 characters. Overflow ranks past 36 convert into 1,000 Bronze each during Infinite Echoes (December 16, 2025 – January 19, 2026).
            </p>
            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 border border-green-700/50 rounded-lg p-6 mb-6 text-gray-200">
              <h3 className="text-2xl font-semibold text-white mb-3">Bronze Snapshot</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Base completion reward: 125 Bronze (150 during Turbo Boost weekends).</li>
                <li>Barrel &amp; enemy loot: ~60 Bronze with Epoch Memento equipped.</li>
                <li>Sojourner of Azsuna completion: Infinite Knowledge cache + 1,000 Bronze (overflow conversion).</li>
                <li>Heroic World Tier bonus: +20% Bronze if completed while the buff is active.</li>
              </ul>
            </div>
            <p className="text-gray-300">
              Consider activating a <strong>Windswept Recollection</strong> thread before turning in the quest. The refund on movement speed helps with the long glides to the Drowned Gardens while preserving your Bronze per hour metrics.
            </p>
          </section>

          <section id="synergy">
            <h2 className="text-3xl font-bold text-white mb-4">Synergy with Nearby Questlines</h2>
            <p className="text-gray-300">
              “Challiane Vineyards Legion Remix” searches usually stem from players stacking Sojourner credit. Pair the vineyard with the following questlines to minimize flights and keep the Court of Farondis emissary rotation tight.
            </p>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-gray-300 mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Efficient Chains</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Minion’s Minion:</strong> Start “Missing Demon” from Tehd Shoemaker at <code className="text-xs">/way Azsuna 50.44 30.61</code>. Daglop’s follow-ups award large chunks of Infinite Power when completed under Heroic World Tier.</li>
                <li><strong>Crumbled Palace Cocktails:</strong> Pick up “The Magister of Mixology” and “Presentation is Everything” from Magister Garuhod after you surface near Nar’thalas Academy.</li>
                <li><strong>A Rather Long Walk:</strong> Swim down to Elder Aldryth immediately after finishing the cocktails chain to avoid phasing back to the surface twice.</li>
                <li><strong>A Noble Event Legion Remix:</strong> If the micro-holiday is live, hearth to Dalaran for <Link href="/guides/a-noble-event" className="text-green-400 hover:text-green-300">Horos&apos; vendor tab</Link> and queue <Link href="/guides/lock-stock-two-smoking-goblins" className="text-green-400 hover:text-green-300">Lock, Stock, and Two Smoking Goblins</Link> while Strange Humming Crystal buffs tick.</li>
                <li><strong>Felblaze Ingress:</strong> Close the loop in northeastern Azsuna for another Sojourner tick and back-to-back Infinite Knowledge packets.</li>
              </ul>
            </div>
            <p className="text-gray-300">
              If you are running multiple Timerunners, park alts at Cellarman Voodani and rotate daily. The quest resets every reset (07:00 PDT / 10:00 EDT) and is unaffected by account-wide lockouts, making it a reliable Bronze drip between raid queues.
            </p>
          </section>

          <section id="faq">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ &amp; Troubleshooting</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Why is Cellarman Voodani missing?</h3>
                <p>
                  Confirm you have completed the “Behind Legion Lines” introduction and unlocked World Quests on Azsuna. If you swapped to Heroic World Tier mid-quest, phase-layering can hide Voodani—toggle the tier back to Normal, interact, then re-enable Heroic World Tier before engaging enemies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Does Challiane Vineyards count toward Turbo Boost quests?</h3>
                <p>
                  Yes. The Remix backend flags the combat encounter as a world quest equivalent. During bonus weekends (next one runs October 25–27, 2025) the kill credit contributes to the weekly “Complete 20 world quests” objective and awards bonus Bronze on turn-in.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Can I finish Challiane Vineyards before clearing the campaign?</h3>
                <p>
                  Absolutely. The quest unlocks right after “Aiding Nar’thalas” and before you escort Prince Farondis through Leythos. Doing it early prevents phasing conflicts once you trigger the Suramar intro on the main campaign.
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>
              Need more Azsuna coverage? Our <Link href="/guides/reputation" className="text-green-400 hover:text-green-300">Reputation Guide</Link> breaks down Court of Farondis emissary rotations, and the <Link href="/guides/bronze-farming" className="text-green-400 hover:text-green-300">Bronze Farming playbook</Link> shares optimized hourlies for Turbo Boost weekends.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
