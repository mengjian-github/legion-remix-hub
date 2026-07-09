import type { Metadata } from 'next';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const layoutTitle = formatMetaTitle('Legion Remix Bronze Calculator — Live Costs & Farming Hours');
const layoutDescription = formatMetaDescription(
  'Plan Legion Remix Bronze spending with this live wishlist calculator. Track reward totals, farming hours, and Infinite Bazaar presets.'
);

export const metadata: Metadata = {
  title: layoutTitle,
  description: layoutDescription,
  keywords: [
    'Legion Remix bronze calculator',
    'Legion Remix rewards planner',
    'WoW Legion Remix bronze tracker',
  ],
  alternates: {
    canonical: buildCanonicalUrl('/calculator'),
  },
  openGraph: buildOpenGraphMetadata('/calculator', layoutTitle, layoutDescription),
  twitter: buildTwitterMetadata(layoutTitle, layoutDescription),
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
