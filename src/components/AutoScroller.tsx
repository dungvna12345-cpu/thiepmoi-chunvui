'use client';

import { useEffect, useRef } from 'react';

interface AutoScrollerProps {
  enabled: boolean;
}

export default function AutoScroller({ enabled }: AutoScrollerProps) {
  const scrollAnimRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const exactYRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;

    let lastTime = performance.now();
    exactYRef.current = window.scrollY || window.pageYOffset || 0;
    isPausedRef.current = false;

    const scrollStep = (currentTime: number) => {
      const delta = Math.min(currentTime - lastTime, 100); // cap delta to prevent sudden jump
      lastTime = currentTime;

      if (!isPausedRef.current) {
        // Speed: ~65px per second (cinematic, readable luxury speed)
        const pixelsToScroll = (65 * delta) / 1000;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        exactYRef.current += pixelsToScroll;

        if (exactYRef.current < maxScroll - 10) {
          window.scrollTo(0, exactYRef.current);
        } else {
          // Reached the bottom
          isPausedRef.current = true;
        }
      }

      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    };

    // Start auto-scroll after a 1.2s delay for envelope opening animation
    const startTimer = setTimeout(() => {
      exactYRef.current = window.scrollY || window.pageYOffset || 0;
      lastTime = performance.now();
      isPausedRef.current = false;
      if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    }, 1200);

    // When user touches, wheels or scrolls manually, sync position and pause
    const handleUserActivity = () => {
      isPausedRef.current = true;
      exactYRef.current = window.scrollY || window.pageYOffset || 0;

      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      // Resume auto-scroll after 2.5s of no touch/scroll
      resumeTimerRef.current = setTimeout(() => {
        exactYRef.current = window.scrollY || window.pageYOffset || 0;
        lastTime = performance.now();
        isPausedRef.current = false;
      }, 2500);
    };

    window.addEventListener('touchstart', handleUserActivity, { passive: true });
    window.addEventListener('touchmove', handleUserActivity, { passive: true });
    window.addEventListener('wheel', handleUserActivity, { passive: true });
    window.addEventListener('keydown', handleUserActivity, { passive: true });

    return () => {
      clearTimeout(startTimer);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('touchmove', handleUserActivity);
      window.removeEventListener('wheel', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [enabled]);

  // Completely hands-free
  return null;
}


