'use client';

import React from 'react';
import Image from 'next/image';
import { Lock, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

interface FooterSectionProps {
  onOpenAdmin: () => void;
}

export default function FooterSection({ onOpenAdmin }: FooterSectionProps) {
  return (
    <footer className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FBF2E8] text-[#2C2224] relative overflow-hidden select-none border-t border-[#EFE6D8]">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      {/* Outer Fine Gold Hairline Border */}
      <div className="absolute inset-4 sm:inset-10 border border-[#C59B55]/25 pointer-events-none z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-20 font-serif">
        
        {/* ========================================================================= */}
        {/* COMPOSITION 5: ẢNH KẾT PANORAMA CÓ NHỊP ĐIỆU (TRIPTYCH PANORAMA)          */}
        {/* ========================================================================= */}
        <ScrollReveal animation="zoom-in" duration={900} delay={150}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            
            {/* DESKTOP: Bức ảnh liên tục qua 3 ô dọc với khe viền vàng mảnh */}
            <div className="hidden sm:grid grid-cols-3 gap-2.5 p-2.5 bg-white shadow-2xl border border-[#EFE6D8] rounded-xs">
              
              {/* Panel 1: Cung Điện & Hàng Cột Cổ Điển */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-2xs">
                <div className="absolute inset-y-0 left-0 w-[300%] h-full">
                  <Image
                    src="/images/wedding_opt/H2H08970.jpg"
                    alt="Triptych Panel Left"
                    fill
                    sizes="400px"
                    className="object-cover object-left filter contrast-[1.03] brightness-[1.01]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>

              {/* Panel 2: Cặp Đôi Nắm Tay Trao Hẹn Ước */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-2xs">
                <div className="absolute inset-y-0 -left-[100%] w-[300%] h-full">
                  <Image
                    src="/images/wedding_opt/H2H08970.jpg"
                    alt="Triptych Panel Center"
                    fill
                    sizes="400px"
                    className="object-cover filter contrast-[1.03] brightness-[1.01]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>

              {/* Panel 3: Vườn Hoa & Kiến Trúc Sang Trọng */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-2xs">
                <div className="absolute inset-y-0 -left-[200%] w-[300%] h-full">
                  <Image
                    src="/images/wedding_opt/H2H08970.jpg"
                    alt="Triptych Panel Right"
                    fill
                    sizes="400px"
                    className="object-cover object-right filter contrast-[1.03] brightness-[1.01]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>

            </div>

            {/* MOBILE: Ảnh liền mạch */}
            <div className="block sm:hidden p-2 bg-white shadow-xl border border-[#EFE6D8] rounded-xs">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 rounded-2xs">
                <Image
                  src="/images/wedding_opt/H2H08970.jpg"
                  alt="Thành Nhớ & Ngọc Ngân Panorama"
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter contrast-[1.02] brightness-[1.01]"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>
            </div>

            <div className="mt-3 text-[10px] text-[#C59B55] tracking-[0.25em] uppercase font-semibold">
              Triptych Panorama &bull; Hoàn Hảo &bull; {WEDDING_DATA.weddingDate.formattedDate}
            </div>

          </div>
        </ScrollReveal>

        {/* LỜI CẢM ƠN */}
        <ScrollReveal animation="fade-up" duration={800} delay={250}>
          <div className="max-w-xl mx-auto space-y-4">
            
            {/* Monogram Seal */}
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#C59B55]/50 text-[#C92A42] text-[10px] mb-2 shadow-xs font-semibold">
              <span>TN</span>
              <span className="text-[#C59B55] text-[8px] mx-0.5">&amp;</span>
              <span>NN</span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] font-normal">
              Chân Thành Cảm Ơn
            </h3>
            <BotanicalDivider />

            <p className="text-xs sm:text-sm text-[#5C4A4E] italic leading-relaxed font-light">
              &ldquo;Sự hiện diện, tình yêu thương và lời chúc phúc của Quý vị là món quà vô giá nhất trong ngày trọng đại của chúng tôi. Kính chúc Quý vị luôn an yên, hạnh phúc và tràn đầy niềm vui.&rdquo;
            </p>

            {/* Typographic Couple Signature */}
            <div className="py-4 border-t border-b border-[#C59B55]/30 max-w-xs mx-auto my-6">
              <div className="font-script text-3xl sm:text-4xl text-[#C92A42] leading-tight">
                {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}
              </div>
              <div className="text-[10px] text-[#736266] uppercase tracking-[0.25em] mt-1 font-medium">
                {WEDDING_DATA.weddingDate.formattedDate} &bull; Hà Nội &amp; Hưng Yên
              </div>
            </div>

            {/* Admin Link & Copyright */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-[#736266]/70">
              <span>&copy; {WEDDING_DATA.weddingDate.year} {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}. All rights reserved.</span>
              <span className="hidden sm:inline">&bull;</span>
              <button
                onClick={onOpenAdmin}
                className="hover:text-[#C92A42] transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <Lock className="w-3 h-3 text-[#C59B55]" />
                <span>Quản trị viên RSVP</span>
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </footer>
  );
}

