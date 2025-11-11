import type { Metadata } from 'next';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const layoutTitle = formatMetaTitle('Legion Remix Bronze Calculator — Live Costs & Farming Hours');
const layoutDescription = formatMetaDescription(
  'Interactive Legion Remix bronze calculator that tracks wishlist costs, farming hours, and Infinite Bazaar presets—perfect for Timerunners comparing bronze calculators or rewards planners.'
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
