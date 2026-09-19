'use client';

import React, { useState } from 'react';
import { Clock, Calendar, Heart, Sparkles, MapPin, Wine, Gift, Users, Car, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';
import { WEDDING_DATA } from '@/lib/weddingData';

export default function WeddingTimelineSection() {
  const [activeSide, setActiveSide] = useState<'groom' | 'bride'>('groom');
  const { timeline } = WEDDING_DATA;
  const currentSteps = timeline[activeSide];

  return (
    <section id="timeline-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Chương Trình Hôn Lễ &bull; Timeline</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Lịch Trình Hôn Lễ
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-[#736266] font-serif mt-2 max-w-md mx-auto font-light leading-relaxed">
              Chi tiết các mốc thời gian diễn ra hôn lễ tại hai bên gia đình, kính mong Quý khách nắm rõ để cùng chung vui trọn vẹn.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher: Nhà Trai / Nhà Gái */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex p-1.5 bg-white border-2 border-[#C59B55]/40 rounded-full shadow-sm">
              <button
                type="button"
                onClick={() => setActiveSide('groom')}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-serif uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer ${
                  activeSide === 'groom'
                    ? 'bg-gradient-to-r from-[#C92A42] to-[#A81B32] text-white shadow-md'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                Nhà Trai (Hà Nội)
              </button>
              <button
                type="button"
                onClick={() => setActiveSide('bride')}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-serif uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer ${
                  activeSide === 'bride'
                    ? 'bg-gradient-to-r from-[#C92A42] to-[#A81B32] text-white shadow-md'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                Nhà Gái (Hưng Yên)
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#C59B55]/40 space-y-7 sm:space-y-9 ml-3 sm:ml-10">
          {currentSteps.map((step, idx) => (
            <ScrollReveal
              key={`${activeSide}-${idx}`}
              animation="rise"
              duration={750}
              delay={idx * 100}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#C59B55] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C92A42]">
                <Clock className="w-3.5 h-3.5 text-[#C92A42]" />
              </div>

              {/* Content Box */}
              <div className="bg-white p-5 sm:p-7 border border-[#EFE6D8] shadow-[0_8px_30px_rgba(201,42,66,0.06)] group-hover:border-[#C92A42] transition-all duration-300 rounded-2xl group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading text-xl sm:text-2xl text-[#C92A42] font-bold">
                      {step.time}
                    </span>
                    <span className="text-[11px] sm:text-xs font-serif uppercase tracking-widest text-[#C59B55] font-semibold">
                      &bull; {step.date}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#FAF5EE] text-[#736266] rounded-full text-[10px] font-serif uppercase tracking-wider border border-[#EFE6D8]">
                    {activeSide === 'groom' ? 'Nhà Trai' : 'Nhà Gái'}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg text-[#2C2224] font-normal mb-1.5">
                  {step.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#736266] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}


