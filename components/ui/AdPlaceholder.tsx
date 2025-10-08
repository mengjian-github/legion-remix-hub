'use client';

interface AdPlaceholderProps {
  slot: 'top' | 'sidebar' | 'article' | 'bottom';
  className?: string;
}

export default function AdPlaceholder({ slot, className = '' }: AdPlaceholderProps) {
  const dimensions = {
    top: 'h-24 md:h-32',
    sidebar: 'h-64 md:h-96',
    article: 'h-32 md:h-48',
    bottom: 'h-24 md:h-32'
  };

  const labels = {
    top: 'Top Banner Ad',
    sidebar: 'Sidebar Ad',
    article: 'In-Article Ad',
    bottom: 'Bottom Banner Ad'
  };

  return (
    <div
      className={`${dimensions[slot]} bg-gray-800 border border-gray-700 rounded flex items-center justify-center ${className}`}
      aria-label={labels[slot]}
    >
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium">Advertisement</p>
        <p className="text-gray-600 text-xs mt-1">{labels[slot]}</p>
      </div>
    </div>
  );
}
