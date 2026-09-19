'use client';

import React from 'react';
import Image from 'next/image';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

export default function CoupleSection() {
  const { groom, bride } = WEDDING_DATA;

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.09} />
      <CornerFloralWatermark position="top-right" opacity={0.09} />
      <CornerFloralWatermark position="bottom-left" opacity={0.09} />
      <CornerFloralWatermark position="bottom-right" opacity={0.09} />
      <HeartDamaskWatermark opacity={0.04} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Masthead */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-[#C59B55] text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-serif block mb-2 font-semibold">
              Hai Nhân Vật Chính &bull; The Bride &amp; Groom
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Thành Nhớ <span className="text-[#C92A42] font-script text-4xl">&amp;</span> Ngọc Ngân
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] max-w-md mx-auto font-light">
              Hai tâm hồn hướng về nhau, cùng chung một nhịp đập trăm năm viên mãn.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* COMPOSITION 3: HAI TRANG BÌA ĐỐI THOẠI (STAGGERED FACING PAGES + '&' LIGATURE) */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Central Connecting Ligature */}
          <div className="hidden lg:flex absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 items-center justify-center">
            <span className="font-script text-8xl md:text-9xl text-[#C92A42]/20 select-none">
              &amp;
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* TRANG 1: CHÚ RỂ - SLIDE FROM LEFT */}
            <ScrollReveal animation="slide-left" duration={900} delay={200} className="w-full">
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <div className="w-full max-w-sm">
                  
                  {/* Main Portrait Frame with Vertical Running Name */}
                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                    
                    {/* Vertical Running Name on Outer Edge */}
                    <div className="hidden sm:flex flex-col items-center justify-center pt-4">
                      <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] uppercase tracking-[0.35em] text-[#C59B55] font-serif font-semibold">
                        GROOM &bull; VŨ THÀNH NHỚ
                      </span>
                      <div className="w-[1px] h-12 bg-[#C59B55]/40 mt-3" />
                    </div>

                    {/* Main Portrait */}
                    <div className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[896/1200] p-2 bg-white border border-[#EFE6D8] shadow-[0_15px_40px_-15px_rgba(201,42,66,0.1)] rounded-xs">
                      <div className="relative w-full h-full overflow-hidden bg-stone-100 rounded-2xs">
                        <Image
                          src={groom.portrait}
                          alt={groom.fullName}
                          fill
                          sizes="(max-width: 640px) 300px, 320px"
                          className="object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                          priority
                        />
                        <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Macro Detail Crop Strip */}
                  <div className="flex items-center gap-3 p-3 bg-[#FFFDF9] border border-[#EFE6D8] mb-5 rounded-xs shadow-2xs">
                    <div className="relative w-20 h-14 shrink-0 overflow-hidden bg-stone-200 border border-[#EFE6D8] rounded-2xs">
                      <Image
                        src="/images/custom_crops/groom_detail.jpg"
                        alt="Chi tiết âu phục chú rể"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left font-serif text-[11px] text-[#736266] leading-tight font-light">
                      <span className="font-semibold text-[#C92A42] block mb-0.5">Âu Phục Chú Rể</span>
                      Cà vạt nơ lụa &amp; hoa cài áo nhung đỏ
                    </div>
                  </div>

                  {/* Editorial Typography & Lineage */}
                  <div className="space-y-1 font-serif">
                    <div className="text-[10px] text-[#C59B55] uppercase tracking-[0.25em] font-semibold">
                      — {groom.role} —
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-[#2C2224] font-normal">
                      {groom.fullName}
                    </h3>
                    <p className="text-xs text-[#5C4A4E] italic font-light pt-1 leading-relaxed">
                      &ldquo;{groom.quote}&rdquo;
                    </p>
                  </div>

                  {/* Formal Family Details */}
                  <div className="mt-4 pt-4 border-t border-[#EFE6D8] text-xs font-serif space-y-1 text-[#736266]">
                    <div className="text-[#C92A42] font-semibold uppercase tracking-wider text-[11px]">
                      {groom.residence}
                    </div>
                    <div>Thân phụ: <strong className="font-medium text-[#2C2224]">{groom.father}</strong></div>
                    <div>Thân mẫu: <strong className="font-medium text-[#2C2224]">{groom.mother}</strong></div>
                    <div className="text-[11px] font-light italic text-[#736266]/80 pt-0.5">
                      {groom.address}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* TRANG 2: CÔ DÂU - SLIDE FROM RIGHT */}
            <ScrollReveal animation="slide-right" duration={900} delay={350} className="w-full">
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:mt-16">
                <div className="w-full max-w-sm">
                  
                  {/* Main Portrait Frame with Vertical Running Name */}
                  <div className="relative flex flex-col sm:flex-row-reverse items-center sm:items-start gap-4 mb-6">
                    
                    {/* Vertical Running Name on Outer Edge */}
                    <div className="hidden sm:flex flex-col items-center justify-center pt-4">
                      <span className="[writing-mode:vertical-rl] text-[11px] uppercase tracking-[0.35em] text-[#C59B55] font-serif font-semibold">
                        BRIDE &bull; LÊ NGỌC NGÂN
                      </span>
                      <div className="w-[1px] h-12 bg-[#C59B55]/40 mt-3" />
                    </div>

                    {/* Main Portrait */}
                    <div className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[896/1200] p-2 bg-white border border-[#EFE6D8] shadow-[0_15px_40px_-15px_rgba(201,42,66,0.1)] rounded-xs">
                      <div className="relative w-full h-full overflow-hidden bg-stone-100 rounded-2xs">
                        <Image
                          src={bride.portrait}
                          alt={bride.fullName}
                          fill
                          sizes="(max-width: 640px) 300px, 320px"
                          className="object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                          priority
                        />
                        <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Macro Detail Crop Strip */}
                  <div className="flex items-center gap-3 p-3 bg-[#FFFDF9] border border-[#EFE6D8] mb-5 rounded-xs shadow-2xs">
                    <div className="relative w-20 h-14 shrink-0 overflow-hidden bg-stone-200 border border-[#EFE6D8] rounded-2xs">
                      <Image
                        src="/images/custom_crops/bride_detail.jpg"
                        alt="Chi tiết váy cưới cô dâu"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left font-serif text-[11px] text-[#736266] leading-tight font-light">
                      <span className="font-semibold text-[#C92A42] block mb-0.5">Váy Cưới &amp; Khăn Voan</span>
                      Họa tiết ren thêu tay thủ công tinh tế
                    </div>
                  </div>

                  {/* Editorial Typography & Lineage */}
                  <div className="space-y-1 font-serif">
                    <div className="text-[10px] text-[#C59B55] uppercase tracking-[0.25em] font-semibold">
                      — {bride.role} —
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-[#2C2224] font-normal">
                      {bride.fullName}
                    </h3>
                    <p className="text-xs text-[#5C4A4E] italic font-light pt-1 leading-relaxed">
                      &ldquo;{bride.quote}&rdquo;
                    </p>
                  </div>

                  {/* Formal Family Details */}
                  <div className="mt-4 pt-4 border-t border-[#EFE6D8] text-xs font-serif space-y-1 text-[#736266]">
                    <div className="text-[#C92A42] font-semibold uppercase tracking-wider text-[11px]">
                      {bride.residence}
                    </div>
                    <div>Thân phụ: <strong className="font-medium text-[#2C2224]">{bride.father}</strong></div>
                    <div>Thân mẫu: <strong className="font-medium text-[#2C2224]">{bride.mother}</strong></div>
                    <div className="text-[11px] font-light italic text-[#736266]/80 pt-0.5">
                      {bride.address}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
