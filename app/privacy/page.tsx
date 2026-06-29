import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Privacy Policy');
const pageDescription = formatMetaDescription(
  'Legion Remix Hub privacy policy: what data we collect, how we use analytics and cookies, and your rights.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: '/privacy', title: pageTitle, description: pageDescription }),
};

export default function PrivacyPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-400 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: June 29, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">1. Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Legion Remix Hub is an independent fan-made informational guide. We do not require
            accounts, logins, or personal data to use the site. This policy explains what limited
            data we collect through standard analytics and how we handle it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">2. What We Collect</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>
              <strong>Analytics data:</strong> We use Plausible (self-hosted), Google Analytics 4,
              and Microsoft Clarity to understand page views, referral sources, and basic device
              types. This data is aggregated and does not identify you personally.
            </li>
            <li>
              <strong>Cookies:</strong> Google Analytics and Clarity may set cookies for session and
              device tracking. You can disable cookies in your browser settings.
            </li>
            <li>
              <strong>Third-party embeds:</strong> Some pages include iframes or links to external
              sites (e.g., Wowhead, Icy Veins). Those sites have their own privacy policies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">3. What We Do Not Collect</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not collect names, emails, Battle.net IDs, payment information, or any other
            personally identifiable information. We do not operate user accounts or login systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">4. Data Retention</h2>
          <p className="text-gray-300 leading-relaxed">
            Analytics data is retained according to the policies of the respective providers:
            Plausible (self-hosted, 30-day rolling), Google Analytics 4 (default 2 months), and
            Microsoft Clarity (default 30 days). We do not maintain separate long-term copies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">5. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            You may block analytics scripts using browser extensions or your browser’s built-in
            tracking prevention. Because we do not collect personal data directly, there is no
            account data to export or delete. For questions, contact us via the site footer links.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">6. Updates</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy as analytics tools or regulations change. The latest version
            will always be available at this URL with the updated date at the top.
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
