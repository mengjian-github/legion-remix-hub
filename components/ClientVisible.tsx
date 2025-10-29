'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// Renders children only after the wrapper enters the viewport.
export default function ClientVisible({
  children,
  rootMargin = '600px',
  className
}: {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);

  return <div ref={ref} className={className}>{show ? children : null}</div>;
}

