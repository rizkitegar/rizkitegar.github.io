'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true when the page has been scrolled past the given threshold (px).
 */
export function useScrolledPast(threshold: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPast(window.scrollY > threshold);
    };

    // Run once on mount so initial state is correct
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
}
