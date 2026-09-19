'use client';

import { useEffect, useRef } from 'react';

interface AutoScrollerProps {
  enabled: boolean;
}

export default function AutoScroller({ enabled }: AutoScrollerProps) {
  const scrollAnimRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let lastTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPausedRef.current) {
        // Speed: ~48px per second (elegant, readable luxury pace)
        const pixelsToScroll = (48 * delta) / 1000;
        const currentScroll = window.scrollY || window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (currentScroll < maxScroll - 10) {
          window.scrollBy(0, pixelsToScroll);
        }
      }

      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    };

    // Start auto-scroll after a gentle 1.2s delay for the opening transition
    const startTimer = setTimeout(() => {
      lastTime = performance.now();
      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    }, 1200);

    // When user touches or scrolls manually, pause immediately and resume after 3.5s of inactivity
    const handleUserActivity = () => {
      isPausedRef.current = true;
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      resumeTimerRef.current = setTimeout(() => {
        lastTime = performance.now();
        isPausedRef.current = false;
      }, 3500);
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

  // Completely hands-free: no visible button on screen
  return null;
}

