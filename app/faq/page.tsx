import type { Metadata } from 'next';
import Link from 'next/link';
import { buildCanonicalUrl } from '@/lib/seo';
import { createFAQSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Legion Remix FAQ - Frequently Asked Questions',
  description: 'Get answers to the most common questions about Legion Remix: leveling, bronze farming, rewards, class selection, and event mechanics.',
  alternates: {
    canonical: buildCanonicalUrl('/faq'),
  },
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What is Legion Remix?',
        answer: 'Legion Remix (WoW Remix: Legion Timerunning) is a limited-time seasonal event running from October 7, 2025 to January 19, 2026. You create a special Timerunner character and replay the entire Legion expansion (7.0-7.3.5) in an accelerated pocket dimension with new systems, infinite artifact weapons, and exclusive rewards.',
      },
      {
        question: 'When does Legion Remix start and end?',
        answer: 'Legion Remix starts on October 7, 2025 and ends on January 19, 2026. The event lasts 15 weeks total, with content unlocking in phases every two weeks.',
      },
      {
        question: 'How do I create a Timerunner character?',
        answer: 'Click "New Character" in character selection, then select the "Legion Remix: Timerunner" option. Choose one of the 12 original classes (Evoker is not available). You\'ll start at level 10 in Dalaran.',
      },
      {
        question: 'Can I play my existing character in Legion Remix?',
        answer: 'No, you must create a new Timerunner character specifically for Legion Remix. However, all cosmetic rewards you earn transfer to your main Warband account-wide.',
      },
    ],
  },
  {
    category: 'Leveling & Progression',
    questions: [
      {
        question: 'How long does it take to reach level 80?',
        answer: 'With Heroic World Tier enabled and Warband bonuses, most players reach level 80 in 8-12 hours. Without these bonuses, expect 15-20 hours. Your leveling speed increases significantly with each alt due to account-wide Infinite Research bonuses.',
      },
      {
        question: 'What is Heroic World Tier?',
        answer: 'Heroic World Tier is an optional difficulty mode inspired by Diablo. When enabled, you face Empowered enemies with special buffs (Imperious, Beacon of Chaos, Fel Raiser, Engorged) but earn significantly more Bronze and Infinite Power. You can toggle it on/off anytime at the Infinite Bazaar.',
      },
      {
        question: 'Should I enable Heroic World Tier while leveling?',
        answer: 'Yes! If you can handle the increased difficulty, Heroic World Tier provides 50-75% more experience and Bronze rewards. It\'s especially good for tanks and self-healing specs. You can disable it if you get stuck on tough content.',
      },
      {
        question: 'What are Infinite Artifact Weapons?',
        answer: 'Unlike original Legion, all artifact weapons now share one unified trait tree powered by Infinite magic. You specialize in 5 schools (Nature, Fel, Arcane, Storm, Holy Light) and upgrade with Artifactum Sand. There\'s no power cap - you can keep upgrading infinitely!',
      },
    ],
  },
  {
    category: 'Bronze Farming',
    questions: [
      {
        question: 'What is Bronze and how do I earn it?',
        answer: 'Bronze is the primary currency in Legion Remix used to purchase cosmetic rewards. You earn it from dungeons (1,200-2,200 per run), world quests (200 each), rare elites, raid bosses, scenarios, and Infinite Research daily quests (+1,000 bonus per quest).',
      },
      {
        question: 'What is the best way to farm Bronze?',
        answer: 'The most efficient methods are: 1) Spam Mythic+ dungeons with a coordinated group (15,000-25,000 Bronze/hour), 2) Complete all Infinite Research dailies (+6,000+ Bronze/day), 3) Clear World Quests with flight paths unlocked (8,000-12,000 Bronze/hour), 4) Run LFR/Normal raids during Turbo Boost windows.',
      },
      {
        question: 'How much Bronze do I need for all rewards?',
        answer: 'The total cost for ALL cosmetic rewards from Grandmaster Jakkus is approximately 7,934,500 Bronze. However, you don\'t need everything - most players focus on mounts (20,000-100,000 each), transmog sets (10,000-50,000 per set), and their class Fel mount (free at 80, 20,000 for alts).',
      },
      {
        question: 'Do Bronze rewards carry over to my main account?',
        answer: 'Yes! All cosmetic rewards (mounts, pets, transmogs, toys, housing decor) are account-wide and transfer to your main Warband. Bronze currency itself does NOT transfer - it stays with your Timerunner character.',
      },
    ],
  },
  {
    category: 'Classes & Specs',
    questions: [
      {
        question: 'What is the best class for Legion Remix?',
        answer: 'There\'s no single "best" class - it depends on your goals. For fast leveling: Demon Hunter, Druid (mobility). For Bronze farming: Tank specs (instant queues). For solo content: Retribution Paladin, Havoc DH (self-healing + DPS). For pushing high keys: Frost DK, Windwalker Monk, Arcane Mage.',
      },
      {
        question: 'Can I play Evoker in Legion Remix?',
        answer: 'No, Evoker is not available in Legion Remix. Only the 12 original Legion classes are playable: Death Knight, Demon Hunter, Druid, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, and Warrior.',
      },
      {
        question: 'Should I level multiple characters?',
        answer: 'Yes! Each character you level increases your account-wide Warband bonuses (+1-2% XP per Infinite Research quest completed). Your 2nd character will level 20-30% faster than your first. Plus, each class earns a unique Felscorched mount variant.',
      },
      {
        question: 'Can I change specs freely?',
        answer: 'Yes! You can respec your artifact traits anytime for free. The artifact trait tree is shared across all weapons, so you can freely swap between specializations without losing progress.',
      },
    ],
  },
  {
    category: 'Rewards & Collectibles',
    questions: [
      {
        question: 'What are Felscorched Class Mounts?',
        answer: 'Felscorched mounts are exclusive fel-infused versions of the 12 class mounts. Your first level 80 character earns their class mount for FREE. Alt characters can purchase any class mount for 20,000 Bronze each. These are unique to Legion Remix!',
      },
      {
        question: 'Can I still get the Violet Spellwing mount?',
        answer: 'Yes! The Violet Spellwing (Ahead of the Curve: Argus) becomes available during the "Argus Eternal" phase (November 18). You must defeat Argus the Unmaker on Heroic difficulty during Legion Remix to earn it.',
      },
      {
        question: 'What is Corrupted Shalamayne?',
        answer: 'Corrupted Shalamayne is a legendary transmog weapon - the fel-corrupted version of King Varian\'s iconic swords. It\'s one of the exclusive rewards available for Bronze from the Infinite Bazaar vendor.',
      },
      {
        question: 'Are there any housing items?',
        answer: 'Yes! The "Infinite Echoes" phase (starting December 9) unlocks a housing decor vendor with unique Legion-themed decorations for your player housing. These items can only be obtained during Legion Remix.',
      },
    ],
  },
  {
    category: 'Phases & Content Unlock',
    questions: [
      {
        question: 'What are the Legion Remix phases?',
        answer: 'There are 5 phases total, each lasting 2-6 weeks: 1) Skies of Fire (Oct 7), 2) Rise of the Nightfallen (Oct 21), 3) Legionfall (Nov 4), 4) Argus Eternal (Nov 18), 5) Infinite Echoes (Dec 9). Each phase unlocks new raids, dungeons, zones, and vendors.',
      },
      {
        question: 'Do I need to wait for phases to progress my character?',
        answer: 'No! You can level to 80 and farm Bronze from day 1. However, certain rewards (like Violet Spellwing, housing decor) and content (Argus zones, later raids) unlock in later phases. Plan your alt leveling around phase unlock dates.',
      },
      {
        question: 'What is a Turbo Boost window?',
        answer: 'Turbo Boost is a special event buff that increases loot drop rates, removes crest caps, and supercharges Bronze rewards. It occurs on October 7 (launch) and November 4 (Legionfall phase). Great time to farm dungeons and raids!',
      },
    ],
  },
  {
    category: 'Technical & Misc',
    questions: [
      {
        question: 'Do Mythic+ keystones deplete in Legion Remix?',
        answer: 'No! One of the best changes - even if you fail a keystone timer, your key upgrades by +1. This encourages experimentation and keeps groups from disbanding. You can push as high as your gear and skill allow.',
      },
      {
        question: 'Can I transfer my Timerunner to retail WoW after the event?',
        answer: 'Your Timerunner character will likely be converted to a regular character on retail servers after the event ends, similar to previous Remix events. However, all cosmetic rewards are already account-wide during the event.',
      },
      {
        question: 'Is there PvP in Legion Remix?',
        answer: 'Legion Remix focuses primarily on PvE content (dungeons, raids, world content). While world PvP may be possible on PvP servers, there are no special PvP rewards or rated PvP modes specific to Legion Remix.',
      },
      {
        question: 'What happens when the event ends?',
        answer: 'When Legion Remix ends on January 19, 2026, you will no longer be able to earn new rewards or create new Timerunners. However, all cosmetics you earned remain on your account permanently. Your Timerunner character will likely be converted to a regular retail character.',
      },
    ],
  },
  {
    category: 'Troubleshooting and Performance',
    questions: [
      {
        question: 'How do I fix Legion Remix lag?',
        answer: 'Lower particle density and ground clutter, disable graphics-heavy addons such as Zygor Legion Remix during big pulls, and switch to DirectX 11 (Legacy) if Argus Eternal zones stutter. Group content benefits from limiting visual spell density via /console spellClutter 0.',
      },
      {
        question: 'What should I do when “A character with that name already exists” appears?',
        answer: 'Log completely out to the Battle.net launcher for 60 seconds, then delete any partially created Timerunners. If the name is globally reserved, add a suffix like “-Remix” or use accented characters. Blizzard clears stuck Legion Remix characters every 30 minutes.',
      },
      {
        question: 'How can I avoid Time Crisis: Failed in Legion Remix hard mode?',
        answer: 'Unlock Heroic World Tier only after your group can burst Empowered packs, bring mobility cooldowns (Havoc Demon Hunter Fel Rush, Windwalker Roll), and pre-clear routes with Strange Humming Crystal buffs. Failing the timer allows a retry after 10 minutes.',
      },
      {
        question: 'Where do I farm Strange Humming Crystal in Legion Remix?',
        answer: 'Crystals spawn in Suramar alleys, Krokuun caves, and Antoran Wastes invasion zones. Use the Legion Remix Bronze Farming Guide for loop maps, and coordinate with groupmates so everyone gains the haste and Bronze orbs.',
      },
    ],
  },
];

const faqDirectory = [
  { label: 'Legion Remix FAQ for Legion Remix lag fixes', href: '/faq#troubleshooting-and-performance' },
  { label: 'Legion Remix FAQ for a character with that name already exists error', href: '/faq#troubleshooting-and-performance' },
  { label: 'Legion Remix FAQ for Time Crisis failed resets', href: '/faq#troubleshooting-and-performance' },
  { label: 'Legion Remix FAQ for Strange Humming Crystal farming', href: '/faq#bronze-farming' },
  { label: 'Legion Remix FAQ for Infinite Knowledge tips', href: '/faq#leveling-%26-progression' },
  { label: 'Legion Remix FAQ for Heroic World Tier preparation', href: '/faq#leveling-%26-progression' }
];

export default function FAQPage() {
  // Flatten all FAQs for schema
  const allQuestions = faqs.flatMap((category) =>
    category.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    }))
  );

  const faqSchema = createFAQSchema(allQuestions);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-green-400 hover:text-green-300 mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Legion Remix FAQ
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to the most common questions about Legion Remix
          </p>
          <div className="text-sm text-gray-400 mt-4">
            📅 Updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-green-400 hover:text-green-300 text-sm"
              >
                → {category.category} ({category.questions.length} questions)
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        {faqs.map((category) => (
          <section
            key={category.category}
            id={category.category.toLowerCase().replace(/\s+/g, '-')}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
              {category.category}
            </h2>

            <div className="space-y-6">
              {category.questions.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Still have questions? */}
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Check out our comprehensive guides for detailed information
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/getting-started"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
            >
              Getting Started Guide
            </Link>
            <Link
              href="/guides"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
            >
              All Guides
            </Link>
            <Link
              href="/calculator"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all"
            >
              Bronze Calculator
            </Link>
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Legion Remix FAQ Directory</h2>
          <p className="text-sm text-gray-300 mb-4">
            Quick references for your team. Each tile represents a question answered in this Legion Remix FAQ.
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
            {faqDirectory.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
