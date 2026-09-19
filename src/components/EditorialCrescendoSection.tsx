'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart } from 'lucide-react';

export default function EditorialCrescendoSection() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAF3EC] select-none my-12 sm:my-20">
      
      {/* Expansive Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding_opt/H2H08248.jpg"
          alt="Thành Nhớ & Ngọc Ngân - Lời Hẹn Trăm Năm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.03] brightness-[0.95]"
        />

        {/* Soft Romantic Veil Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50 pointer-events-none" />
      </div>

      {/* Outer Fine Gold Line Art Frame */}
      <div className="absolute inset-4 sm:inset-10 border border-[#FFD782]/40 pointer-events-none z-10" />

      {/* Editorial Poetry Lockup in Open Area */}
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-2xl mx-auto py-16">
        
        {/* Monogram Seal with Glow */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#FFD782] text-[#FFD782] text-xs font-serif mb-6 backdrop-blur-md bg-black/30 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
          <span>TN</span>
          <span className="text-[9px] mx-0.5">&amp;</span>
          <span>NN</span>
        </div>

        {/* Central Core Line */}
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.25] tracking-wide font-normal drop-shadow-lg mb-5">
          &ldquo;Từ hôm nay, <br className="hidden sm:inline" />
          chúng mình là nhà.&rdquo;
        </h2>

        {/* Delicate Champagne Accent Rule */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="w-12 h-[1px] bg-[#FFD782]/70" />
          <Heart className="w-3.5 h-3.5 text-[#FFD782] fill-[#FFD782]" />
          <span className="w-12 h-[1px] bg-[#FFD782]/70" />
        </div>

        {/* Subtext */}
        <p className="font-serif text-xs sm:text-sm text-[#FFECCC] tracking-[0.2em] uppercase font-light drop-shadow-sm">
          Lễ Thành Hôn &bull; 29 . 09 . 2026 &bull; Trọn Đời Hạnh Phúc
        </p>

      </div>

    </section>
  );
}

