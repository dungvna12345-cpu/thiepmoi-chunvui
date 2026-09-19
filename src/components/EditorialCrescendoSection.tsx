'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart } from 'lucide-react';

export default function EditorialCrescendoSection() {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-end items-center overflow-hidden bg-[#1A0B0E] select-none my-12 sm:my-20">
      
      {/* Expansive Photographic Background (Ultra-Sharp HD with couple in upper-middle) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding_opt/H2H08248.jpg"
          alt="Thành Nhớ & Ngọc Ngân - Lời Hẹn Trăm Năm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] filter contrast-[1.04] brightness-[1.02] saturate-[1.03]"
        />

        {/* Bottom Dark Gradient for Text Readability + Crystal Clear Top for Faces */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent pointer-events-none" />
      </div>

      {/* Outer Fine Gold Line Art Frame */}
      <div className="absolute inset-3 sm:inset-8 border border-[#FFD782]/40 pointer-events-none z-10 rounded-xl" />

      {/* Editorial Poetry Lockup at the Bottom (Không che mặt cô dâu chú rể) */}
      <div className="relative z-10 text-center px-4 sm:px-12 max-w-2xl mx-auto pb-10 sm:pb-16 pt-24">
        
        {/* Monogram Seal with Glow */}
        <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#FFD782] text-[#FFD782] text-xs font-serif mb-3 sm:mb-4 backdrop-blur-md bg-black/40 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <span>TN</span>
          <span className="text-[9px] mx-0.5">&amp;</span>
          <span>NN</span>
        </div>

        {/* Central Core Line */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-white leading-[1.25] tracking-wide font-normal drop-shadow-lg mb-3 sm:mb-4">
          &ldquo;Từ hôm nay, <br className="hidden sm:inline" />
          chúng mình là nhà.&rdquo;
        </h2>

        {/* Delicate Champagne Accent Rule */}
        <div className="flex items-center justify-center gap-3 my-2 sm:my-3">
          <span className="w-10 sm:w-14 h-[1px] bg-[#FFD782]/80" />
          <Heart className="w-3.5 h-3.5 text-[#FFD782] fill-[#FFD782]" />
          <span className="w-10 sm:w-14 h-[1px] bg-[#FFD782]/80" />
        </div>

        {/* Subtext */}
        <p className="font-serif text-[11px] sm:text-xs text-[#FFECCC] tracking-[0.2em] uppercase font-light drop-shadow-sm">
          Lễ Thành Hôn &bull; 29 . 09 . 2026 &bull; Trọn Đời Hạnh Phúc
        </p>

      </div>

    </section>
  );
}

