'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';

interface AutoScrollerProps {
  enabled: boolean;
}

export default function AutoScroller({ enabled }: AutoScrollerProps) {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const scrollAnimRef = useRef<number | null>(null);
  const userInteractedRef = useRef<boolean>(false);

  // Start auto-scroll when enabled (after envelope is opened)
  useEffect(() => {
    if (!enabled) return;

    // Small delay to let the opening transition finish
    const timer = setTimeout(() => {
      setIsAutoScrolling(true);
      userInteractedRef.current = false;
    }, 1400);

    return () => clearTimeout(timer);
  }, [enabled]);

  useEffect(() => {
    if (!isAutoScrolling) {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
        scrollAnimRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Scroll speed: ~60px per second (smooth & easy to read)
      const pixelsToScroll = (60 * delta) / 1000;
      
      const currentScroll = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll >= maxScroll - 5) {
        setIsAutoScrolling(false);
        return;
      }

      window.scrollBy(0, pixelsToScroll);
      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    };

    scrollAnimRef.current = requestAnimationFrame(scrollStep);

    // Stop scrolling if user touches screen or scrolls manually with wheel/keys
    const handleUserInteraction = () => {
      if (isAutoScrolling) {
        setIsAutoScrolling(false);
      }
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleUserInteraction, { passive: true });

    return () => {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
      }
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling((prev) => !prev);
  };

  if (!enabled) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      <button
        type="button"
        onClick={toggleAutoScroll}
        aria-label={isAutoScrolling ? 'Tạm dừng tự động lướt' : 'Bật tự động lướt'}
        className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs font-serif tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.15)] cursor-pointer ${
          isAutoScrolling
            ? 'bg-[#8F1724] text-[#FFF9ED] border border-[#D8B45F] shadow-[0_6px_25px_rgba(143,23,36,0.4)] ring-2 ring-[#D8B45F]/50 animate-pulse'
            : 'bg-[#FFF9ED]/95 text-[#641D24] border border-[#D8B45F]/70 hover:bg-[#FFF9ED]'
        }`}
      >
        {isAutoScrolling ? (
          <>
            <Pause className="w-3.5 h-3.5 fill-[#FFF9ED] text-[#FFF9ED]" />
            <span>Đang lướt</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 fill-[#641D24] text-[#641D24]" />
            <span>Tự lướt</span>
          </>
        )}
      </button>
    </div>
  );
}
