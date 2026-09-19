'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ArrowDown, Sparkles, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getHeartLikes, incrementHeartLikes } from '@/lib/supabaseClient';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  HeartDamaskWatermark,
  BotanicalDivider,
  GoldRoseWatermark,
} from '@/components/WatermarkDecorations';

export default function HeroSection() {
  const [likes, setLikes] = useState(999);
  const [hasLiked, setHasLiked] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    getHeartLikes().then(setLikes);

    // Calculate days left to wedding date
    const targetDate = new Date(WEDDING_DATA.weddingDate.isoDate).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, targetDate - now);
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  const handleHeartClick = async () => {
    try {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#E84D67', '#D4AF37', '#FFD1DC', '#FFFDF9'],
      });
    } catch {}
    const newCount = await incrementHeartLikes();
    setLikes(newCount);
    setHasLiked(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full select-none">
      
      {/* ========================================================================= */}
      {/* PHẦN 1: ẢNH BÌA POSTER TRÀN VIỀN NGUYÊN BẢN (KHÔNG CHÈN CHỮ ĐÈ MẶT)       */}
      {/* ========================================================================= */}
      <section className="relative w-full h-screen min-h-[680px] max-h-[1050px] overflow-hidden bg-stone-950 flex flex-col justify-between">
        
        {/* Full-bleed crisp poster image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wedding_opt/save_the_date_poster.jpg"
            alt="Save The Date - Thành Nhớ & Phạm Ngân"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter contrast-[1.02] brightness-[0.98]"
          />
        </div>

        {/* ĐÍNH HOA NHỎ XINH (TINH TẾ Ở GÓC TRÊN VÀ GÓC DƯỚI) */}
        <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-20 sm:w-28 md:w-32 aspect-[2/3] z-20 pointer-events-none transform rotate-12 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
          <Image
            src="/images/decor/floral_branch_clipping.webp"
            alt="Floral Accent Top"
            fill
            sizes="128px"
            className="object-contain"
          />
        </div>

        <div className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-20 sm:w-28 md:w-32 aspect-[2/3] z-20 pointer-events-none transform -rotate-12 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
          <Image
            src="/images/decor/floral_branch_clipping_left.webp"
            alt="Floral Accent Bottom"
            fill
            sizes="128px"
            className="object-contain"
          />
        </div>

        {/* Khung viền chỉ vàng mảnh sát mép */}
        <div className="absolute inset-3 sm:inset-5 border border-[#FFD782]/40 pointer-events-none z-10" />

        {/* Top Monogram Seal nhỏ xinh */}
        <div className="relative z-20 w-full pt-5 px-6 flex justify-between items-center text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-white/85">
          <div className="flex items-center gap-1.5 drop-shadow-md">
            <Sparkles className="w-3 h-3 text-[#FFD782]" />
            <span>THƯ MỜI CƯỚI</span>
          </div>

          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#FFD782]/80 text-[#FFD782] text-[10px] font-serif backdrop-blur-md bg-black/40 shadow-sm font-semibold">
            <span>TN</span>
            <span className="text-[7px] mx-0.5">&amp;</span>
            <span>NN</span>
          </div>

          <div className="drop-shadow-md text-[#FFD782] font-medium">
            {WEDDING_DATA.weddingDate.formattedDate}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* PHẦN 2: KHỐI THÔNG TIN HÔN LỄ TRANG TRỌNG (ĐẶT PHÍA DƯỚI ẢNH)             */}
      {/* ========================================================================= */}
      <section
        id="hero-info-section"
        className="py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] text-[#2C2224] relative overflow-hidden border-b border-[#EFE6D8]"
      >
        {/* Background Watermarks */}
        <CornerFloralWatermark position="top-left" opacity={0.1} />
        <CornerFloralWatermark position="bottom-right" opacity={0.1} />
        <GoldRoseWatermark position="center" opacity={0.08} size="large" />
        <HeartDamaskWatermark opacity={0.035} />

        <div className="max-w-4xl mx-auto text-center relative z-10 font-serif">
          
          {/* Top Tagline */}
          <ScrollReveal animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Thư Mời Thành Hôn</span>
            </div>
          </ScrollReveal>

          {/* Couple's Names */}
          <ScrollReveal animation="zoom-in" duration={800} delay={200}>
            <div className="space-y-1 sm:space-y-2 mb-6">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide text-[#2C2224] font-normal leading-tight">
                {WEDDING_DATA.groom.name}
              </h1>

              <div className="flex items-center justify-center gap-4 py-1">
                <span className="w-12 sm:w-20 h-[1px] bg-[#C59B55]/40" />
                <span className="font-script text-4xl sm:text-5xl text-[#C92A42] italic">
                  &amp;
                </span>
                <span className="w-12 sm:w-20 h-[1px] bg-[#C59B55]/40" />
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide text-[#2C2224] font-normal leading-tight">
                {WEDDING_DATA.bride.name}
              </h1>
            </div>
          </ScrollReveal>

          {/* Botanical Divider */}
          <BotanicalDivider />

          {/* Date & Location */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="my-6">
              <div className="text-2xl sm:text-3xl tracking-[0.25em] text-[#C59B55] font-semibold">
                {WEDDING_DATA.weddingDate.formattedDate}
              </div>
              <div className="text-xs sm:text-sm text-[#736266] tracking-widest mt-1.5 uppercase font-medium">
                {WEDDING_DATA.weddingDate.dayOfWeek} &bull; {WEDDING_DATA.weddingDate.lunarDate} &bull; HÀ NỘI &amp; HƯNG YÊN
              </div>
            </div>
          </ScrollReveal>

          {/* Romantic Quote */}
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="italic text-xs sm:text-base text-[#5C4A4E] max-w-lg mx-auto leading-relaxed font-light mb-8">
              &ldquo;Từ hôm nay, chúng mình là nhà — cùng nhau tay trong tay bước tiếp hành trình trăm năm hạnh phúc đong đầy.&rdquo;
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8">
              
              <button
                onClick={() => scrollToSection('rsvp-section')}
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C92A42] hover:bg-[#A81B32] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] rounded-full cursor-pointer"
              >
                Xác Nhận Tham Dự (RSVP)
              </button>

              <button
                onClick={() => scrollToSection('events-section')}
                className="px-7 sm:px-9 py-3.5 sm:py-4 bg-white hover:bg-[#FAF5EE] text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/60 hover:border-[#C92A42] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2 rounded-full cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#C59B55]" strokeWidth={1.8} />
                <span>Thông Tin Hôn Lễ</span>
              </button>

            </div>
          </ScrollReveal>

          {/* Heart Blessing Pill & Countdown Tag */}
          <ScrollReveal animation="fade-up" delay={600}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              
              <button
                onClick={handleHeartClick}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all duration-300 shadow-xs cursor-pointer border ${
                  hasLiked
                    ? 'border-[#C92A42] bg-[#FFF0F3] text-[#C92A42] font-semibold'
                    : 'border-[#C59B55]/50 bg-white hover:bg-[#FFF0F3] hover:border-[#C92A42] text-[#736266]'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    hasLiked ? 'fill-[#C92A42] text-[#C92A42] scale-110' : 'text-[#C92A42]'
                  }`}
                  strokeWidth={2}
                />
                <span className="text-[11px] sm:text-xs tracking-wider">
                  {hasLiked ? 'Đã gửi chúc phúc' : 'Thả tim chúc phúc'} ({likes})
                </span>
              </button>

              {daysLeft > 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#EFE6D8] rounded-full text-[11px] sm:text-xs text-[#736266] shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B55]" />
                  <span>Còn <strong className="text-[#C92A42]">{daysLeft}</strong> ngày tới lễ cưới</span>
                </div>
              )}

            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
