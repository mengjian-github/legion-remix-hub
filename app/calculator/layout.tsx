import type { Metadata } from 'next';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Bronze Calculator & Planner 2025',
  description: 'Plan Legion Remix Bronze spending with a 2025 calculator tracking costs, farming hours, reward types, and preset lists so your Timerunner stays on pace.',
  alternates: {
    canonical: buildCanonicalUrl('/calculator'),
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
