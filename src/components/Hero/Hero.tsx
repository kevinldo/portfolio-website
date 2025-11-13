import React, { useCallback, useEffect, useState } from 'react';
import { site } from '../../config/site';
import './Hero.css';

type HeroProps = {
  name?: string;
  threshold?: number; // Pixels scrolled before expanding the greeting
  onExpandedChange?: (expanded: boolean) => void;
};

export default function Hero({
  name = `${site.firstName}`,
  threshold = 240,
  onExpandedChange,
}: HeroProps) {
  const [expanded, setExpanded] = useState(false);

  const handleArrowClick = useCallback(() => {
    setExpanded(true);

    if (typeof window === 'undefined') return;

    const heroElement = document.getElementById('hero');
    const baseOffset = heroElement?.offsetTop ?? 0;
    const target = baseOffset + threshold;

    window.scrollTo({ top: target, behavior: 'smooth' });
  }, [threshold]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) {
      setExpanded(true);
      return;
    }

    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = y >= threshold;
        setExpanded((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    // Initialize once
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  useEffect(() => {
    onExpandedChange?.(expanded);
  }, [expanded, onExpandedChange]);

  return (
    <section
      id='hero'
      className={`hero ${expanded ? 'is-expanded' : ''}`}
      style={{ ['--pin']: `${threshold}px` } as React.CSSProperties}
      aria-label='Intro'
    >
      <div className={'hero-pin'}>
        <div className='container hero-inner'>
          <h1 className='hero-title'>
            <span
              className={`fade ${expanded ? 'out' : 'in'}`}
              aria-hidden={expanded}
            >
              Hi...
            </span>
            <span
              className={`fade ${expanded ? 'in' : 'out'}`}
              aria-hidden={!expanded}
            >
              I'm {name}
            </span>
          </h1>

          <p className='hero-subtitle' aria-hidden={!expanded}>
            Building and breaking things. Enjoying art.
          </p>

          {!expanded && (
            <button
              type='button'
              className='hero-arrow'
              onClick={handleArrowClick}
              aria-label='Scroll to About Me section'
            >
              <svg
                viewBox='0 0 24 24'
                width='36'
                height='36'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
                focusable='false'
              >
                <path d='M6 9l6 6 6-6' />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
