'use client';

import { gsap, useGSAP } from '@/lib/gsap';

export function Intro() {
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: 'ui-out', duration: 0.7 } })
      .fromTo(
        '[data-intro="hero"]',
        { opacity: 0, y: 12, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.07, clearProps: 'transform,filter' }
      )
      .fromTo(
        '[data-intro="section"]',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.08, clearProps: 'transform' },
        0.25
      )
      .fromTo(
        '[data-intro-dock]',
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, clearProps: 'transform' },
        0.35
      )
      .fromTo(
        '[data-dock-item]',
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, clearProps: 'transform' },
        0.45
      );
  });

  return null;
}
