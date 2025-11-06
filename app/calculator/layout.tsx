import type { Metadata } from 'next';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const layoutTitle = formatMetaTitle('Legion Remix Bronze Calculator & Planner 2025');
const layoutDescription = formatMetaDescription(
  'Plan Legion Remix Bronze spending with a 2025 calculator tracking costs, farming hours, reward types, and preset lists so your Timerunner stays on pace.'
);

export const metadata: Metadata = {
  title: layoutTitle,
  description: layoutDescription,
  alternates: {
    canonical: buildCanonicalUrl('/calculator'),
  },
  openGraph: buildOpenGraphMetadata('/calculator', layoutTitle, layoutDescription),
  twitter: buildTwitterMetadata(layoutTitle, layoutDescription),
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
