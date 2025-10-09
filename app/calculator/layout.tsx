import type { Metadata } from 'next';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Bronze Calculator',
  description: 'Plan your Legion Remix Bronze spending with wishlist tracking and farm-hour estimates.',
  alternates: {
    canonical: buildCanonicalUrl('/calculator'),
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
