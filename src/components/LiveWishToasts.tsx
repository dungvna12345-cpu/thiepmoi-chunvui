'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, X } from 'lucide-react';
import { getWishes, WeddingWish } from '@/lib/supabaseClient';

export default function LiveWishToasts() {
  const [wishes, setWishes] = useState<WeddingWish[]>([]);
  const [currentWish, setCurrentWish] = useState<WeddingWish | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getWishes().then((data) => {
      if (data && data.length > 0) {
        setWishes(data);
      }
    });

    // Listen to custom event when someone submits a wish in real-time
    const handleNewWish = (e: CustomEvent<WeddingWish>) => {
      if (e.detail) {
        setCurrentWish(e.detail);
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 5000);
      }
    };

    window.addEventListener('wedding_new_wish' as any, handleNewWish);

    return () => {
      window.removeEventListener('wedding_new_wish' as any, handleNewWish);
    };
  }, []);

  // Periodic subtle popup rotation
  useEffect(() => {
    if (wishes.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      // Pick next wish
      const wish = wishes[index % wishes.length];
      index++;
      setCurrentWish(wish);
      setIsVisible(true);

      // Auto hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4200);
    }, 9000);

    return () => clearInterval(interval);
  }, [wishes]);

  if (!currentWish) return null;

  return (
    <div
      className={`fixed bottom-6 left-4 sm:left-6 z-40 max-w-[320px] sm:max-w-[360px] transition-all duration-500 pointer-events-auto select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
      }`}
    >
      <div className="p-3 sm:p-3.5 bg-white/95 backdrop-blur-md text-[#2C2224] rounded-2xl border border-[#D8B45F]/70 shadow-[0_10px_30px_rgba(143,23,36,0.15)] ring-2 ring-[#D8B45F]/20 flex items-start gap-3 relative overflow-hidden group">
        
        {/* Left gold badge */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E4CC86] to-[#C92A42] flex items-center justify-center text-white shrink-0 shadow-xs">
          <Heart className="w-4 h-4 fill-white text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4 font-serif">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-heading text-xs font-semibold text-[#641D24] truncate">
              {currentWish.name}
            </span>
            <span className="text-[10px] text-[#736266] italic">
              ({currentWish.relation || 'Khách mời'})
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-[#4A3C3F] font-light leading-snug line-clamp-2 italic">
            &ldquo;{currentWish.message}&rdquo;
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 p-1"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D8B45F] to-transparent" />
      </div>
    </div>
  );
}
