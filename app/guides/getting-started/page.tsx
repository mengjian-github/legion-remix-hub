import type { Metadata } from 'next';
import Link from 'next/link';
import { remixPhases } from '@/data/timeline';
import { classes } from '@/data/classes';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Legion Remix Getting Started Playbook 2025');
const pageDescription = formatMetaDescription(
  'Learn Legion Remix basics with a getting started guide covering account prep, Timerunner creation, phase timeline, Heroic World Tier setup, and Bronze planning.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/getting-started'),
  },
  other: {
    'article:published_time': '2025-10-07',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Gaming Guide',
  },
};

export default function GettingStartedPage() {
  const articleSchema = createArticleSchema({
    headline: 'Getting Started with Legion Remix',
    description: 'Learn how Legion Remix works, the event timeline, and how to prepare your Timerunner for Skies of Fire.',
    url: 'https://legionremixhub.com/guides/getting-started',
    datePublished: '2025-10-07',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Getting Started', path: '/guides/getting-started' },
  ]);

  const quickLinks = [
    { label: 'Timerunner creation & intro quests', href: '#timerunner-creation' },
    { label: 'Heroic World Tier setup', href: '#legion-remix-hard-mode' },
    { label: 'How to unlock world quests', href: '#how-to-unlock-world-quests-legion-remix' },
    { label: 'Class selection & campaign order', href: '#choosing-your-class' },
    { label: 'Infinite Knowledge & Research basics', href: '#infinite-knowledge-legion-remix' },
    { label: 'Bronze budgeting basics', href: '#bronze-budget-legion-remix' },
    { label: 'Phase roadmap checkpoints', href: '#phase-roadmap' },
    { label: 'Performance & troubleshooting tips', href: '#legion-remix-hard-mode' },
    { label: 'Getting started checklist', href: '#getting-started-checklist' },
    { label: 'Rewards and calculator tools', href: '/rewards' }
  ];

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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-white mb-0">Getting Started with Legion Remix</h1>
          </div>

          <p className="text-gray-300 mb-4">
            Legion Remix getting started steps begin the moment you create a Timerunner. The official overview explains that the remix runs from October 7, 2025, through January 19, 2026, and lets you relive the Legion campaign with current-timeline talents and account-wide cosmetics. This guide stitches together the starting quest walkthrough, Timerunner character primer, and phase roadmap so you hit Dalaran ready to fly, spend, and experiment.
          </p>
          <p className="text-gray-300 mb-4">
            Legion Remix getting started also means lining up systems before the first reset: bind your Infinite Artifact weapon, unlock Heroic World Tier, and queue the class campaign for order hall access. With those pillars in place you can pursue the 36 ranks of Infinite Knowledge, unlock World Quests, and put Bronze toward class mounts and ensembles without stopping to research the basics mid-session.
          </p>

          <div className="text-sm text-gray-400 mb-6 flex items-center gap-4">
            <span>📅 Updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>📖 15 min read</span>
          </div>

          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 mb-8">
            <p className="text-gray-200 text-lg mb-0">
              <strong>Event Duration:</strong> October 7, 2025 - January 19, 2026 (15 weeks)
            </p>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-8 text-sm text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-3">
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

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Legion Remix?</h2>
          <p className="text-gray-300 mb-4">
            Legion Remix (also known as WoW Remix: Legion Timerunning) is a limited-time seasonal event where you can create a <strong>Timerunner character</strong> and replay the entire Legion expansion (7.0-7.3.5) in an accelerated pocket dimension. Experience the full Legion story from the Broken Isles through Argus in just 3 months!
          </p>

          {/* Hero Banner */}
          <div className="my-8 rounded-lg overflow-hidden border border-green-700/30">
            <img
              src={legionImages.heroBanner}
              alt="Legion Remix: Skies of Fire"
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">What's Different?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Accelerated Timeline:</strong> No weekly lockouts - complete all Legion patches in 15 weeks</li>
            <li><strong>New Systems:</strong> Infinite Artifact Weapons, Heroic World Tier, Infinite Research quests</li>
            <li><strong>Exclusive Rewards:</strong> Fel-infused class mounts, unique transmogs, housing decor</li>
            <li><strong>Account-Wide Progress:</strong> All cosmetics transfer to your main Warband</li>
            <li><strong>Experimental Gameplay:</strong> Push Mythic+ keys to extreme levels with wild power scaling</li>
          </ul>

          <div id="phase-roadmap" className="bg-gray-900/40 border border-gray-700 rounded-lg overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={legionImages.phaseSchedule}
                  alt="Legion Remix release cadence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Phase Roadmap</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Content unlocks every two weeks: Skies of Fire (October 7), Rise of the Nightfallen (October 21), Legionfall (November 4), Argus Eternal (November 18), and Infinite Echoes (December 9).
                </p>
                <p className="text-xs text-gray-400">
                  Plan alts around the phases—Argus unlocks Violet Spellwing and Infinite Echoes brings the housing decor vendor online.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">New Systems in Legion Remix</h2>

          {/* Infinite Artifact Weapons */}
          <div className="bg-gray-800 border border-green-700/30 rounded-lg overflow-hidden mb-6">
            <img
              src={legionImages.artifactTraitTree}
              alt="Infinite Artifact Weapon Trait Tree"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-3">⚔️ Infinite Artifact Weapons</h3>
              <p className="text-gray-300 mb-3">
                Instead of the complex original system, all artifact weapons now share a unified trait tree powered by Infinite magic. Choose your specialization across 5 schools of magic:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-3">
                <li><strong className="text-green-400">Nature:</strong> Healing and damage over time</li>
                <li><strong className="text-red-400">Fel:</strong> High burst damage</li>
                <li><strong className="text-blue-400">Arcane:</strong> Mana management and utility</li>
                <li><strong className="text-purple-400">Storm:</strong> AoE and crowd control</li>
                <li><strong className="text-yellow-400">Holy Light:</strong> Healing and protection</li>
              </ul>
              <p className="text-gray-300 text-sm">
                Upgrade with <strong>Artifactum Sand</strong> (drops from all content). Use jewelry to push beyond max rank!
              </p>
            </div>
          </div>

          {/* Heroic World Tier */}
          <div className="bg-gray-800 border border-orange-700/30 rounded-lg overflow-hidden mb-6">
            <div className="grid md:grid-cols-2 gap-4 p-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">🔥 Heroic World Tier</h3>
                <p className="text-gray-300 mb-4">
                  Inspired by Diablo, opt into this increased difficulty tier for both leveling and endgame. Face <strong>Empowered</strong> enemies with unique buffs for greater rewards.
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  Toggle on/off at the Console of Infinite Chaos (near Eternus at Infinite Bazaar)
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Imperious:</strong> +25% damage to nearby allies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Beacon of Chaos:</strong> Summons demon allies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Fel Raiser:</strong> +40% health/damage (CC suppresses)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Engorged:</strong> Explodes on death</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={legionImages.imperiousEffect}
                  alt="Empowered Enemy"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Accelerated Leveling:</strong> Reach level 80 in 8–12 hours with Heroic World Tier and Warband bonuses.</li>
            <li><strong>Bronze Economy:</strong> Every activity—raids, dungeons, world quests—awards Bronze for cosmetics.</li>
            <li><strong>Class Mount Guarantee:</strong> Hit level 80 to claim your Felscorched mount for free; alts can buy for 20,000 Bronze.</li>
            <li><strong>Two-Week Phase Cadence:</strong> New raids, Mythic+ loot, and vendors unlock on October 21, November 4, November 18, and December 9.</li>
            <li><strong>Infinite Power Scaling:</strong> Artifactum Sand and Infinite Research keep your artifact traits climbing with no cap.</li>
            <li><strong>Legacy Cosmetics:</strong> Violet Spellwing, Corrupted Shalamayne, and Sargerei ensembles return with Remix-only requirements.</li>
          </ul>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-8" id="infinite-knowledge-legion-remix">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Infinite Knowledge vs. Infinite Power Explained</h3>
            <p className="text-gray-300 mb-3">
              Infinite Knowledge Legion Remix quests are your Warband progression backbone. Each completed assignment grants permanent experience boosts, +1,000 Bronze, and Artifactum Sand, while Infinite Power stacks directly enhance your Infinite Artifact weapon.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Daily rotation:</strong> Six quests per day from the Infinite Bazaar, bankable up to six days.</li>
              <li><strong>Bronze conversion:</strong> Turn excess Infinite Knowledge into Bronze via the <Link href="/guides/bronze-farming#infinite-knowledge-legion-remix" className="text-green-400 hover:text-green-300">Bronze Farming Legion Remix Guide</Link>.</li>
              <li><strong>Strange Humming Crystal tie-in:</strong> Crystals drop from rare elites and Treasure Chests—trade them for bonus Infinite Knowledge packets during Argus Eternal.</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8" id="how-to-unlock-world-quests-legion-remix">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">How to Unlock World Quests in Legion Remix</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li>Complete the <em>Uniting the Isles</em> quest in Dalaran (granted by Khadgar after the intro scenario).</li>
              <li>Reach Friendly with the Nightfallen, Highmountain Tribe, Valarjar, Dreamweavers, and Court of Farondis—Heroic World Tier bonuses accelerate this rep grind.</li>
              <li>Turn in the quest at the Violet Citadel to unlock Legion Remix world quests for your Timerunner and all alts.</li>
            </ol>
            <p className="text-gray-300 mb-3">
              This WoW Legion Remix world quests route flows through Suramar; bookmark Challiane Vineyards right after you open Shal&apos;Aran so you can farm Strange Humming Crystals and rep tokens while clearing elite patrols.
            </p>
            <p className="text-gray-400 text-sm">
              For a detailed rep route, jump to the <Link href="/guides/leveling#world-quest-route" className="text-green-400 hover:text-green-300">Legion Remix Leveling Guide world quest section</Link>.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-green-700/40 rounded-lg p-6 mb-8" id="infinite-research-legion-remix">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Infinite Research Legion Remix Planner</h3>
            <p className="text-gray-300 mb-3">
              Treat every Infinite Research Legion Remix assignment as part of your daily power budget. Bank six quests, then detonate them alongside dungeon clears so the Infinite Research Legion Remix buffs overlap with your Legion Remix infinite power farm rotation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li>Track objectives with a WoW Legion Remix Infinite Knowledge sheet—Chromie now flags 1,000 Bronze quests in gold.</li>
              <li>Pair emissary hand-ins with Argus rares to convert the Infinite Research Legion Remix XP buff into double Bronze payouts.</li>
              <li>Rotate to Krokuun on Turbo Boost weeks; the Legion Remix infinite power farm there lines up perfectly with raid kill assignments.</li>
            </ul>
            <p className="text-gray-400 text-sm">
              Need the exact numbers? The <Link href="/guides/bronze-farming#infinite-knowledge-legion-remix" className="text-green-400 hover:text-green-300">Bronze Farming Guide</Link> breaks down how Infinite Research Legion Remix quests funnel into Strange Humming Crystals and Infinite Power.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-purple-700/40 rounded-lg p-6 mb-8" id="legion-remix-hard-mode">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Legion Remix Hard Mode & Time Crisis Safety Nets</h3>
            <p className="text-gray-300 mb-3">
              Hard mode in Legion Remix revolves around Heroic World Tier and the console-based challenges such as Time Crisis and To Fel and Back. Use this checklist to avoid "Time Crisis: Failed" wipes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li>Always clear Empowered packs before clicking objectives—Engorged enemies chain explode.</li>
              <li>Carry mobility potions or the <strong>Strange Humming Crystal</strong> buff to outrun console timers.</li>
              <li>Toggle Heroic World Tier off temporarily if performance drops or groups are under-geared.</li>
              <li>Use defensive cooldowns when Legion Remix empowered enemies roll Imperious or Beacon combos; the buffs stack harder than standard Mythic dungeons.</li>
            </ul>
            <p className="text-gray-400 text-sm">
              Stuck on a failure? If the Legion Remix Time Crisis failed warning keeps popping up, our <Link href="/faq#time-crisis-failed" className="text-green-400 hover:text-green-300">Legion Remix FAQ</Link> covers reset timers and weekly limits.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-yellow-700/40 rounded-lg p-6 mb-8" id="torn-invitation-legion-remix">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Trending Legion Remix Quest Targets</h3>
            <p className="text-gray-300 mb-3">
              Weekly hotfixes keep pushing classic campaign beats back into the spotlight. Use this checklist to sync your achievements, mounts, and Legion Remix talent builds with the latest Google Trends spikes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li><strong>Torn Invitation Legion Remix:</strong> Complete Suramar emissaries and Withered Army Training to mail yourself the fox mount letter, then spend Bronze for the recolor once you reach level 80.</li>
              <li><strong>Just Between Us Legion Remix:</strong> Finish Stellagosa&apos;s Azsuna arc for bonus WoW Legion Remix Infinite Knowledge tokens before diving into Eye of Azshara keys.</li>
              <li><strong>Lock, Stock, and Two Smoking Goblins Legion Remix:</strong> Stack this Stormheim quest with Wyrmtongue cache runs during Turbo Boost weeks for 2,500+ Bronze loops—full walkthrough in our <Link href="/guides/lock-stock-two-smoking-goblins" className="text-green-400 hover:text-green-300">dedicated guide</Link>.</li>
              <li><strong>To Fel and Back Legion Remix:</strong> Cap the Argus campaign and Heroic World Tier challenge so the achievement, Felscorched mount, and Time Crisis credit unlock together.</li>
              <li><strong>A Noble Event Legion Remix:</strong> Budget 10,000 Bronze for the micro-holiday vendor that appears every other Friday in Dalaran, and review the <Link href="/guides/a-noble-event" className="text-green-400 hover:text-green-300">shopping checklist</Link> before you zone in.</li>
              <li><strong>Challiane Vineyards Legion Remix:</strong> Park a gathering alt here during Suramar assaults—world quests award Strange Humming Crystals and 600 Bronze per clear.</li>
              <li><strong>WoW Infinite Research Fel Skies:</strong> When Phase 5 hits, pop your banked quests during Fel Skies to stack Infinite Knowledge and Artifactum Sand together.</li>
            </ul>
            <p className="text-gray-400 text-sm">
              Finish the checklist, then hop to the <Link href="/classes" className="text-green-400 hover:text-green-300">classes hub</Link> to lock in Legion Remix talent builds for your next Timerunner.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Unlocking Your First Artifact</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <img
                src={legionImages.artifactWeapon}
                alt="Receiving the first Legion Remix artifact"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>Arrive in Dalaran at level 10 and accept “Where the Past and Future Meet” from Chromie.</li>
                <li>Pick your preferred weapon model—the trait tree is shared, so aesthetics are your main choice.</li>
                <li>Clear the condensed scenario (about 15 minutes) to activate the Infinite Trait grid.</li>
                <li>Spend your first five points on your primary damage or healing school before leaving the scenario.</li>
                <li>Loot Artifactum Sand from any source to keep unlocking traits; jewelry can overcharge the grid later.</li>
              </ol>
              <p className="text-xs text-gray-500 mt-4">
                Pro tip: Save at least 5,000 Bronze early to buy extra Sand pouches if you plan to push keys in Week 1.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Infinite Power Daily Routine</h2>
          <div className="bg-gray-800 border border-blue-700/40 rounded-lg p-6 mb-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm text-gray-300 mb-4">
                Infinite Research quests stack permanent account-wide bonuses. You can bank up to six, perfect for weekend catch-up sessions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Prioritize objectives that mirror your plan (Timeworn Keystone, raid kills, world quests).</li>
                <li>Each completion awards +1–2% Warband XP and 1,000 bonus Bronze as of the October 2 tuning pass.</li>
                <li>Use Chromie’s reroll option to discard quests that do not fit your evening session.</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 border border-blue-700/40 rounded-lg overflow-hidden">
              <img
                src={legionImages.infiniteResearchQuests}
                alt="Infinite Research quest board"
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Differences from Retail Legion</h2>
          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Artifact weapons share one trait tree—no more spec-specific scenarios.</li>
              <li>Class Order Hall campaigns are streamlined; the mount unlock triggers the moment you ding 80.</li>
              <li>Mythic+ keystones never deplete; even failed runs upgrade your stone by +1 to keep groups active.</li>
              <li>Turbo Boost windows on October 7 and November 4 supercharge loot drops and remove crest caps.</li>
              <li>Some legacy rewards stay retired: Mage Tower, original PvP weapons, and artifact tint quests remain exclusive to retail veterans.</li>
            </ul>
          </div>

          <h2 id="timerunner-creation" className="text-2xl font-bold text-white mt-8 mb-4">How to Create a Timerunner</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Click "New Character" in character selection</li>
              <li>Select the <strong>Legion Remix: Timerunner</strong> option</li>
              <li>Choose one of the 12 original classes (no Evoker)</li>
              <li>Customize appearance and name your character</li>
              <li>Start at level 10 in Dalaran</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Event Timeline</h2>
          <div className="space-y-4 mb-8">
            {remixPhases.map((phase, idx) => (
              <div key={phase.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{phase.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {phase.startDate.toLocaleDateString()} - {phase.endDate.toLocaleDateString()}
                    </p>
                    <p className="text-gray-300 mb-3">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.features.map((feature, fIdx) => (
                        <span key={fIdx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="choosing-your-class" className="text-2xl font-bold text-white mt-8 mb-4">Choosing Your Class</h2>
          <p className="text-gray-300 mb-4">
            All 12 original Legion classes are available. Each class earns a unique Felscorched mount variant at level 80. Consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Tanks & Healers:</strong> Instant dungeon queues for efficient Bronze farming</li>
            <li><strong>DPS:</strong> Better for solo questing with Heroic World Tier enabled</li>
            <li><strong>Mobile Classes:</strong> Demon Hunters, Druids, and Monks excel at fast travel</li>
            <li><strong>AoE Specialists:</strong> Great for clearing large mob packs quickly</li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {classes.slice(0, 6).map((cls) => (
              <Link
                key={cls.id}
                href={`/classes/${cls.id}`}
                className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg p-4 text-center transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: cls.iconColor }}
                >
                  {cls.name.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-white">{cls.name}</div>
              </Link>
            ))}
          </div>
          <Link href="/classes" className="text-green-400 hover:text-green-300 font-medium">
            View All Classes →
          </Link>

          <h2 id="bronze-budget-legion-remix" className="text-2xl font-bold text-white mt-8 mb-4">Bronze Currency System</h2>
          <p className="text-gray-300 mb-4">
            Bronze is the primary currency in Legion Remix. You earn it from:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>Completing dungeons (1,200-2,200 Bronze per run)</li>
            <li>World Quests (200 Bronze each)</li>
            <li>Killing rare elites</li>
            <li>Opening Bronze Caches from treasures</li>
            <li>Infinite Research daily quests (+1,000 Bronze bonus)</li>
            <li>Raid bosses and scenarios</li>
          </ul>
          <p className="text-gray-300 mb-6">
            Use Bronze to purchase rewards from <strong>Grandmaster Jakkus</strong> at the Infinite Bazaar. Total cost for all rewards: <strong className="text-yellow-500">7,934,500 Bronze</strong>.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Pro Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Bronze Cache rewards were substantially increased in recent updates</li>
              <li>All Infinite Research quests now grant +1,000 Bronze bonus</li>
              <li>Prioritize mounts and collectibles you really want first</li>
              <li>Use the <Link href="/calculator" className="text-green-400 hover:text-green-300">Bronze Calculator</Link> to plan your farming</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Checkpoints to Revisit</h2>
            <p className="text-sm text-gray-300 mb-4">
              Share these Legion Remix getting started checkpoints with returning players so everyone repeats the critical unlocks in the right order.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Chromie&apos;s Orientation:</strong> Finish the Infinite Bazaar tour to receive your first Infinite Knowledge rank, skyriding access, and the Bronze cache guaranteed in the reference intro quests.
              </li>
              <li>
                <strong>Order Hall Kickoff:</strong> Start your class campaign immediately to secure the Scouting Map, second and third artifact weapons, and mission table followers described in the class campaign guide.
              </li>
              <li>
                <strong>World Quest Unlock:</strong> Grind the five Friendly reputations for &ldquo;Uniting the Isles&rdquo; so you can weave 200-Bronze World Quests into every play session.
              </li>
              <li>
                <strong>Heroic World Tier Toggle:</strong> Enable the mode at the Bazaar after testing enemies around Azsuna. The Heroic World Tier guide calls out the four Empowered affixes to watch for: Imperious, Beacon of Chaos, Fel Raiser, and Engorged.
              </li>
              <li>
                <strong>Infinite Research Loop:</strong> Complete daily assignments from Lieutenant Soraya or Alard so Infinite Knowledge ranks and Bronze payouts continue without downtime.
              </li>
            </ul>
          </div>

          <h2 id="getting-started-checklist" className="text-2xl font-bold text-white mt-8 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/guides/leveling"
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 hover:border-green-500 transition-all"
            >
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Leveling Guide</h3>
              <p className="text-gray-300 text-sm">
                Learn the fastest way to reach level 80
              </p>
            </Link>
            <Link
              href="/guides/bronze-farming"
              className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6 hover:border-yellow-500 transition-all"
            >
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Bronze Farming</h3>
              <p className="text-gray-300 text-sm">
                Maximize your Bronze per hour
              </p>
            </Link>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
            <p className="text-gray-300 mb-4">
              Cross-reference these primary guides whenever you revisit Legion Remix getting started decisions. Each source below contributed the numbers and unlock steps summarized throughout this page.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <strong>Timerunner Character Guide:</strong> Confirms class restrictions (no Evoker), starting at level 10 in Dalaran, and the order hall campaign beats that unlock your additional artifact weapons.
              </li>
              <li>
                <strong>Starting Questline Walkthrough:</strong> Details Chromie&apos;s tutorial, the Infinite Bazaar orientation, and the first Bronze cache. Follow its quest order to activate skyriding and bank Bronze without backtracking.
              </li>
              <li>
                <strong>How to Unlock World Quests:</strong> Covers the reputation thresholds and turn-in steps for &ldquo;Uniting the Isles.&rdquo; Add those to your opening weekend plan so Legion Remix getting started momentum never stalls.
              </li>
              <li>
                <strong>Infinite Knowledge &amp; Infinite Research Guides:</strong> Explain the 36-rank cap, achievement sources, and daily research packets that keep Bronze and power flowing to every alt.
              </li>
              <li>
                <strong>Content Phases &amp; Schedule:</strong> Lists when each phase unlocks zones, raids, and vendors. Align alt leveling and reward purchases with those dates to stay ahead of the crowd.
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Keep this Legion Remix getting started outline pinned in your guild resources, and revisit it weekly as new phases unlock to confirm you have every prerequisite squared away before chasing the next wave of rewards.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
