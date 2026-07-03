import type { Metadata } from 'next';
import Link from 'next/link';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const title = formatMetaTitle('Legion Remix Reputation Guide Moved');
const description = formatMetaDescription(
  'The Legion Remix reputation guide now lives at the dedicated reputation hub with faction routes, rewards, and Broken Isles planning links.'
);

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: buildCanonicalUrl('/reputation'),
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: buildOpenGraphMetadata('/reputation', title, description),
  twitter: buildTwitterMetadata(title, description),
};

export default function LegacyReputationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-16">
      <section className="mx-auto max-w-3xl rounded-3xl border border-emerald-700/40 bg-gray-900/70 p-8 text-center shadow-2xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Moved guide</p>
        <h1 className="mt-3 text-3xl font-black text-white">Legion Remix reputation routes moved to the reputation hub</h1>
        <p className="mt-4 text-gray-300">
          Use the dedicated Legion Remix reputation hub for Court of Farondis, Dreamweavers, Nightfallen,
          Valarjar, Wardens, Legionfall, Argus, and Kirin Tor route planning.
        </p>
        <Link
          href="/reputation"
          data-track-event="legacy_route_recovery_click"
          data-track-prop-page="guides_reputation_legacy"
          data-track-prop-destination="/reputation"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-black text-gray-950 transition hover:bg-emerald-400"
        >
          Open reputation hub →
        </Link>
      </section>
    </div>
  );
}
