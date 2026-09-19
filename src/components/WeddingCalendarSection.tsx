'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
  FiligreeGoldCorner,
  RoyalMonogramSeal,
} from '@/components/WatermarkDecorations';

export default function WeddingCalendarSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Target Wedding Date in Vietnam Time (UTC+7)
  const weddingTimestamp = new Date(WEDDING_DATA.weddingDate.isoDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingTimestamp - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingTimestamp]);

  // Calendar for September 2026 (Sept 1 is Tuesday => leading offset is 1)
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const leadingBlanks = [0]; // Tuesday starts at index 1
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section
      ref={sectionRef}
      id="calendar-section"
      className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FAF5EE] via-[#FFFDF9] to-[#FAF2EB] relative overflow-hidden select-none"
    >
      {/* Subtle Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <GoldRoseWatermark position="center" opacity={0.06} size="large" />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Editorial Subtitle */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-10 sm:mb-12 text-[#2C2224]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Lời Hẹn Ước</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Lời Hẹn Tháng Chín
            </h2>
            <BotanicalDivider />
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* KHUNG THIỆP HOÀNG GIA CHỈ VÀNG (ROYAL GOLD FILIGREE FRAME CARD)            */}
        {/* ========================================================================= */}
        <ScrollReveal animation="rise" duration={900} delay={150}>
          <div className="bg-white border-2 border-[#C59B55]/50 shadow-[0_30px_70px_-15px_rgba(201,42,66,0.15)] rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-visible ring-4 ring-[#C59B55]/15 ring-offset-2 ring-offset-[#FFFDF9]">
            
            {/* 4 HOA VĂN GÓC CHỈ VÀNG HOÀNG GIA (FILIGREE CORNERS) */}
            <FiligreeGoldCorner position="top-left" />
            <FiligreeGoldCorner position="top-right" />
            <FiligreeGoldCorner position="bottom-left" />
            <FiligreeGoldCorner position="bottom-right" />

            {/* ĐÍNH HOA NHỎ XINH Ở GÓC TRÊN */}
            <AttachedSmallFlower position="top-right" size="small" />

            {/* KHUNG VIỀN MẢNH BÊN TRONG (INNER HAIRLINE GOLD BORDER) */}
            <div className="absolute inset-3 sm:inset-4 border border-[#C59B55]/30 rounded-2xl pointer-events-none z-10" />

            {/* 1. KHUNG TRANH NGHỆ THUẬT (ARTISTIC GOLD BEVEL PHOTO FRAME) */}
            <div className="relative mb-9 z-20">
              <div className="p-2 sm:p-3 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] border-2 border-[#C59B55]/60 rounded-2xl shadow-md max-w-lg mx-auto">
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl bg-stone-100 border border-[#C59B55]/40">
                  <Image
                    src="/images/wedding_opt/H2H08970.jpg"
                    alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                    fill
                    sizes="(max-width: 640px) 100vw, 700px"
                    className="object-cover object-center filter brightness-[1.01] contrast-[1.02]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* CON DẤU SÁP MONOGRAM HOÀNG GIA Ở CHÍNH GIỮA MÉP DƯỚI KHUNG ẢNH */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30">
                <RoyalMonogramSeal text="TN & NN" />
              </div>
            </div>

            {/* 2. HEADER LỊCH THÁNG 9 / 2026 */}
            <div className="text-center pt-2 pb-6 mb-7 border-b border-[#EFE6D8] relative z-20">
              <span className="text-[11px] text-[#C59B55] uppercase tracking-[0.3em] font-serif font-semibold block mb-1.5">
                Lịch Hôn Lễ
              </span>
              <div className="flex items-baseline justify-center gap-3">
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wider font-normal">
                  Tháng Chín
                </h3>
                <span className="font-serif text-xl sm:text-3xl text-[#C59B55] font-light tracking-widest">
                  2026
                </span>
              </div>
            </div>

            {/* 3. BẢNG LỊCH 7 CỘT (T2 - CN) */}
            <div className="relative z-20 max-w-lg mx-auto">
              {/* Header Days of Week */}
              <div className="grid grid-cols-7 text-center mb-4 text-xs font-serif font-semibold text-[#736266] tracking-wider">
                {weekDays.map((wd, idx) => (
                  <div
                    key={idx}
                    className={`py-1.5 ${
                      idx === 6 ? 'text-[#C92A42] font-bold' : ''
                    }`}
                  >
                    {wd}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 text-center gap-y-3.5 sm:gap-y-4 text-xs sm:text-sm font-serif">
                {/* Empty leading cell (Monday before Sept 1) */}
                {leadingBlanks.map((b) => (
                  <div key={`blank-${b}`} className="py-2" />
                ))}

                {/* Days of Month */}
                {daysInMonth.map((day) => {
                  const isWeddingDay = day === 29; // Lễ Thành Hôn
                  const isEatFeastDay = day === 28; // Mời Cỗ
                  const isSunday = (1 + day - 1) % 7 === 6;

                  return (
                    <div
                      key={day}
                      className="relative flex items-center justify-center py-1 select-none"
                    >
                      {/* Ngày Chính Lễ 29/09: Badge Đỏ Ruby Sang Trọng */}
                      {isWeddingDay ? (
                        <div className="relative flex flex-col items-center justify-center">
                          <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#C92A42] text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center shadow-md ring-2 ring-[#FFD782] ring-offset-2 ring-offset-white animate-pulse">
                            {day}
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-[#C92A42] font-bold uppercase tracking-tighter mt-1 block">
                            Chính Lễ
                          </span>
                        </div>
                      ) : isEatFeastDay ? (
                        /* Ngày Ăn Cỗ 28/09: Badge Vàng Champagne */
                        <div className="relative flex flex-col items-center justify-center">
                          <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#C59B55] text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center shadow-sm ring-2 ring-[#C59B55]/30">
                            {day}
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-[#C59B55] font-bold uppercase tracking-tighter mt-1 block">
                            Mời Cỗ
                          </span>
                        </div>
                      ) : (
                        <span
                          className={`font-serif py-1 ${
                            isSunday
                              ? 'text-[#C92A42] font-semibold'
                              : 'text-[#2C2224]'
                          }`}
                        >
                          {day}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Chú thích sự kiện */}
              <div className="mt-8 pt-4 border-t border-[#EFE6D8] flex items-center justify-center gap-6 text-xs font-serif">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#C59B55] rounded-full inline-block shadow-xs" />
                  <span className="text-[#2C2224] font-medium">28/09 &bull; Tiệc Mời Cỗ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#C92A42] rounded-full inline-block shadow-xs" />
                  <span className="text-[#C92A42] font-bold">29/09 &bull; Lễ Thành Hôn</span>
                </div>
              </div>
            </div>

            {/* 4. CÂU TRÍCH DẪN & THÔNG TIN NGÀY */}
            <div className="mt-8 pt-6 border-t border-[#EFE6D8] text-center font-serif space-y-1.5 relative z-20">
              <p className="text-sm sm:text-base text-[#C92A42] font-heading italic">
                &ldquo;Ngày đẹp nhất là ngày mình có nhau.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#2C2224] font-semibold tracking-wide">
                Thứ Ba, Ngày 29 Tháng 09 Năm 2026
              </p>
              <p className="text-[11px] text-[#736266] italic font-light">
                (Tức ngày 19 tháng 08 năm Bính Ngọ — Âm lịch)
              </p>
            </div>

            {/* 5. ĐẾM NGƯỢC ĐẾN NGÀY CHUNG ĐÔI */}
            <div className="mt-7 pt-5 border-t border-[#EFE6D8]/80 relative z-20">
              <div className="text-[10px] text-center text-[#C59B55] uppercase tracking-[0.25em] font-serif mb-3 font-semibold">
                Thời gian đếm ngược đến ngày hôn lễ
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center max-w-sm mx-auto">
                {[
                  { label: 'Ngày', value: timeLeft.days },
                  { label: 'Giờ', value: timeLeft.hours },
                  { label: 'Phút', value: timeLeft.minutes },
                  { label: 'Giây', value: timeLeft.seconds },
                ].map((unit, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 bg-[#FFFDF9] border border-[#C59B55]/30 shadow-2xs rounded-xl"
                  >
                    <span className="font-heading text-lg sm:text-2xl text-[#C92A42] font-bold block leading-tight">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#736266] font-serif block mt-0.5 font-medium">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
