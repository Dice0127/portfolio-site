import { useEffect, useRef } from 'react';

// Adds a 'reveal-visible' class to every element matching `selector` inside
// the returned ref once it scrolls into view. Respects prefers-reduced-motion.
export function useScrollReveal(selector = '.reveal') {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = container.querySelectorAll(selector);

    if (prefersReduced) {
      els.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);

  return containerRef;
}
