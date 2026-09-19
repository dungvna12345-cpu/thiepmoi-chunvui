'use client';

import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

const DRESS_COLORS = [
  {
    name: 'Đỏ Ruby Quý Phái',
    sub: 'Tươi Sáng & Rực Rỡ',
    hex: '#C92A42',
    border: 'border-[#C92A42]',
    textColor: 'text-white',
  },
  {
    name: 'Vàng Champagne',
    sub: 'Hoàng Gia Sang Trọng',
    hex: '#C59B55',
    border: 'border-[#C59B55]',
    textColor: 'text-white',
  },
  {
    name: 'Hồng Pastel Nhẹ Nhàng',
    sub: 'Ngọt Ngào Lãng Mạn',
    hex: '#F6B1BE',
    border: 'border-[#F6B1BE]',
    textColor: 'text-[#2C2224]',
  },
  {
    name: 'Trắng Kem Ngọc Trai',
    sub: 'Tinh Khôi & Trang Nhã',
    hex: '#FFF9F2',
    border: 'border-[#EFE6D8]',
    textColor: 'text-[#2C2224]',
  },
];

export default function DressCodeSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FAF5EE] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-right" opacity={0.08} />
      <CornerFloralWatermark position="bottom-left" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Gợi Ý Trang Phục &bull; Dress Code</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Bảng Màu Gợi Ý
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light">
              Kính mời Quý khách diện trang phục theo các gam màu gợi ý tươi sáng để cùng chúng tôi tạo nên những khung hình kỷ niệm rạng ngời.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Swatch Palette Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {DRESS_COLORS.map((col, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" duration={700} delay={idx * 100}>
              <div
                className="bg-white p-5 sm:p-6 border border-[#EFE6D8] text-center shadow-[0_8px_30px_rgba(201,42,66,0.06)] flex flex-col items-center rounded-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Color Swatch Circle */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${col.border} shadow-md mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105`}
                  style={{ backgroundColor: col.hex }}
                >
                  <span className={`text-[10px] font-serif tracking-widest uppercase font-semibold ${col.textColor}`}>
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="font-heading text-sm text-[#2C2224] font-medium mb-0.5">
                  {col.name}
                </h4>
                <span className="text-[10px] uppercase font-serif tracking-wider text-[#C59B55] font-semibold">
                  {col.sub}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="p-4 bg-white border border-[#EFE6D8] text-center max-w-xl mx-auto text-xs font-serif text-[#736266] leading-relaxed rounded-xs shadow-2xs">
            <p className="font-light">
              * Khuyến khích trang phục lịch sự, sang trọng (Suit, Tuxedo, Váy dạ hội hoặc Áo dài truyền thống).
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

