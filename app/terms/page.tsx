import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Terms of Use');
const pageDescription = formatMetaDescription(
  'Legion Remix Hub terms of use: disclaimers, intellectual property, and acceptable use for this fan-made informational guide.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: '/terms', title: pageTitle, description: pageDescription }),
};

export default function TermsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms of Use', path: '/terms' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-400 mb-2">Terms of Use</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: June 29, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">1. Independent Fan-Made Resource</h2>
          <p className="text-gray-300 leading-relaxed">
            Legion Remix Hub is an independent, fan-made informational guide for the World of
            Warcraft: Legion Remix event. We are not affiliated with, endorsed by, or sponsored by
            Blizzard Entertainment, Inc. All game-related trademarks, images, and lore belong to
            their respective owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">2. No Official Status</h2>
          <p className="text-gray-300 leading-relaxed">
            Nothing on this site should be interpreted as an official Blizzard statement, guarantee,
            or promise about game features, rewards, or event schedules. Event dates and mechanics
            are subject to change by Blizzard at any time. We update guides as quickly as possible
            when changes occur, but we do not control the game.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">3. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            World of Warcraft, Legion, Blizzard Entertainment, and related marks are trademarks or
            registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
            This site uses game names and terms under fair use for informational and editorial purposes
            only. We do not claim ownership of any Blizzard intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">4. External Links</h2>
          <p className="text-gray-300 leading-relaxed">
            We link to third-party resources (e.g., Wowhead, Icy Veins, official Blizzard sites) for
            reference. We are not responsible for the content, accuracy, or privacy practices of those
            external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">5. Acceptable Use</h2>
          <p className="text-gray-300 leading-relaxed">
            You may use this site for personal, non-commercial reference. Do not scrape, redistribute,
            or republish our content in bulk without permission. Do not use this site for any unlawful
            purpose or to attempt to interfere with its operation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">6. No Warranty</h2>
          <p className="text-gray-300 leading-relaxed">
            This site is provided “as is” without warranties of any kind. We make reasonable efforts
            to keep guides accurate, but we cannot guarantee completeness or timeliness. Use the
            information at your own discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">7. Changes to These Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these terms from time to time. The latest version will always be posted at
            this URL with the updated date at the top.
          </p>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            World of Warcraft and Blizzard Entertainment are trademarks or registered trademarks
            of Blizzard Entertainment, Inc. This site is an independent fan-made resource and is
            not affiliated with, endorsed by, or sponsored by Blizzard Entertainment.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/" className="text-green-400 hover:text-green-300">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
