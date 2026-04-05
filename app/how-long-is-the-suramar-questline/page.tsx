import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const canonicalPath = '/how-long-is-the-suramar-questline';
const pageTitle = formatMetaTitle('How Long Is the Suramar Questline? – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'How long the Suramar questline takes in Legion Remix, what slows it down, and which linked guides to use for Court of Farondis and Kirin Tor routing.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
};

export default function SuramarQuestlineLengthPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Legion Remix Hub</p>
        <h1 className="mt-3 text-4xl font-bold text-white">How Long Is the Suramar Questline?</h1>
        <p className="mt-6 text-lg text-gray-300">
          In Legion Remix, the main Suramar questline usually takes <strong>6-10 focused hours</strong> if you
          already understand teleporter unlocks and Ancient Mana routing. First-time runs trend longer when you stop
          often to refill Mana, unlock Shal&apos;Aran services, or queue story dungeons late.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">What changes the run time</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
            <li>Ancient Mana upkeep for Thalyssra, Oculeth, and Valtrois</li>
            <li>Whether your teleporters are unlocked early</li>
            <li>How many city travel steps you batch into one route</li>
            <li>Whether you combine Suramar with reputation emissaries and side objectives</li>
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Best pages to use next</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/guides/suramar-campaign" className="rounded-xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-200 hover:border-emerald-500 hover:text-emerald-200 transition-colors">
              Full Suramar questline completion guide
            </Link>
            <Link href="/reputation/court-of-farondis" className="rounded-xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-200 hover:border-emerald-500 hover:text-emerald-200 transition-colors">
              Court of Farondis rep guide — fastest route
            </Link>
            <Link href="/reputation/kirin-tor" className="rounded-xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-200 hover:border-emerald-500 hover:text-emerald-200 transition-colors">
              Kirin Tor rep guide — emissary & world quest routes
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Shortest practical answer</h2>
          <p className="mt-3 text-gray-300">
            If you only care about the headline answer for search: budget one long evening for the core Suramar story,
            and closer to a full day if you also want teleporter comfort, Mana stability, and Phase 2 follow-through.
          </p>
        </div>
      </div>
    </div>
  );
}
