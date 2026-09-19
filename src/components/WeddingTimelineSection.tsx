'use client';

import React from 'react';
import { Camera, Heart, Wine, Music, Gift, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

interface TimelineStep {
  time: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const PROGRAM_STEPS: TimelineStep[] = [
  {
    time: '17:30',
    title: 'Đón Tiếp Khách Quý & Welcome Drink',
    desc: 'Chào đón quý khách, chụp ảnh kỷ niệm tại Backdrop hoa tươi và thưởng thức cocktail nhẹ.',
    icon: <Camera className="w-4 h-4 text-[#C92A42]" strokeWidth={1.6} />,
  },
  {
    time: '18:30',
    title: 'Nghi Thức Thành Hôn Thiêng Liêng',
    desc: 'Cô dâu chú rể bước vào lễ đường, trao nhẫn cưới và hẹn ước trăm năm trước sự chứng kiến của hai họ.',
    icon: <Heart className="w-4 h-4 text-[#C92A42]" strokeWidth={1.6} />,
  },
  {
    time: '19:00',
    title: 'Khai Tiệc Mừng & Nâng Ly Chúc Phúc',
    desc: 'Cắt bánh kem, rót rượu Champagne khai tiệc và cùng nâng ly chúc mừng hạnh phúc lứa đôi.',
    icon: <Wine className="w-4 h-4 text-[#C92A42]" strokeWidth={1.6} />,
  },
  {
    time: '20:00',
    title: 'Giao Lưu Âm Nhạc & Minigame May Mắn',
    desc: 'Những giai điệu acoustic lãng mạn cùng trò chơi vui nhộn dành tặng quan khách và bạn bè.',
    icon: <Music className="w-4 h-4 text-[#C92A42]" strokeWidth={1.6} />,
  },
  {
    time: '21:00',
    title: 'Lời Cảm Ơn & Trao Quà Lưu Niệm',
    desc: 'Cô dâu chú rể gửi lời tri ân chân thành và trao gửi phần quà cảm ơn đặc biệt đến từng vị khách quý.',
    icon: <Gift className="w-4 h-4 text-[#C92A42]" strokeWidth={1.6} />,
  },
];

export default function WeddingTimelineSection() {
  return (
    <section id="timeline-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Lịch Trình Dạ Tiệc &bull; Thành Hôn</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Lịch Trình Dạ Tiệc
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-[#736266] font-serif mt-2 max-w-md mx-auto font-light">
              Khoảnh khắc trọn vẹn của buổi tối thành hôn, kính mong Quý khách chung vui cùng gia đình.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#C59B55]/30 space-y-8 sm:space-y-10 ml-4 sm:ml-12">
          {PROGRAM_STEPS.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="slide-left"
              duration={750}
              delay={idx * 120}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#C59B55] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C92A42]">
                {step.icon}
              </div>

              {/* Content Box */}
              <div className="bg-white p-5 sm:p-7 border border-[#EFE6D8] shadow-[0_8px_30px_rgba(201,42,66,0.06)] group-hover:border-[#C92A42] transition-all duration-300 rounded-xs group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-heading text-xl sm:text-2xl text-[#C92A42] font-bold">
                    {step.time}
                  </span>
                  <span className="text-xs font-serif uppercase tracking-widest text-[#C59B55] font-semibold">
                    &bull; Giai Đoạn 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-lg text-[#2C2224] font-normal mb-1.5">
                  {step.title}
                </h3>
                <p className="font-serif text-xs text-[#736266] leading-relaxed font-light">
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

