'use client';

import React from 'react';
import Image from 'next/image';
import { CalendarPlus, Navigation, MapPin, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

export default function EventsSection() {
  const { groom, bride, events } = WEDDING_DATA;
  const nhaTraiTiec = events[0]; // Tiệc Mời Cỗ Nhà Trai
  const thanhHonEvent = events[1]; // Lễ Thành Hôn
  const vuQuyEvent = events[2]; // Lễ Vu Quy & Nhà Gái

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events-section" className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FAF5EE] text-[#2C2224] relative border-t border-[#EFE6D8] overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-right" opacity={0.08} />
      <CornerFloralWatermark position="bottom-left" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: Letterpress Masthead */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Trân Trọng Kính Mời &bull; Thiệp Mời Cưới</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Thông Tin Hôn Lễ
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light">
              Trân trọng kính mời Quý vị đến chung vui và chúc phúc cùng gia đình chúng tôi trong ngày trọng đại.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* TWO ROYAL BURGUNDY INVITATION CARDS WITH ATTACHED FLORAL CLIPPINGS        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start max-w-5xl mx-auto">
          
          {/* ======================================================================= */}
          {/* CARD 1: THÔNG TIN HÔN LỄ NHÀ TRAI (LỄ THÀNH HÔN & MỜI CỖ)                */}
          {/* ======================================================================= */}
          <ScrollReveal animation="slide-right" duration={850} delay={200} className="w-full relative">
            <div className="relative w-full bg-gradient-to-b from-[#560C1B] via-[#4A0A16] to-[#36050E] text-[#FDF8F2] rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(86,12,27,0.45)] border border-[#851E32]/60 overflow-visible">
              
              {/* ATTACHED BOTANICAL FLORAL BRANCH CLINGING ON RIGHT EDGE */}
              <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-28 sm:w-36 md:w-44 aspect-[2/3] z-30 pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/decor/floral_branch_clipping.webp"
                  alt="Floral Branch Embellishment"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              {/* Card Inner Content */}
              <div className="relative z-20 text-center font-serif flex flex-col items-center">
                
                {/* 1. Header Title */}
                <h3 className="font-heading text-2xl sm:text-3xl text-[#FFD782] tracking-[0.15em] uppercase font-normal mb-8 drop-shadow-sm">
                  THÔNG TIN LỄ CƯỚI
                </h3>

                {/* 2. Parents Section */}
                <div className="w-full grid grid-cols-2 gap-4 pb-6 border-b border-[#851E32]/80 mb-6 text-xs sm:text-sm">
                  
                  {/* Nhà Trai */}
                  <div className="text-center pr-2 border-r border-[#851E32]/80">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#FFD782]/80 block mb-1">
                      Nhà Trai
                    </span>
                    <div className="font-medium text-white/95 leading-snug">
                      Bố: {groom.father}<br />
                      Mẹ: {groom.mother}
                    </div>
                    <span className="text-[10px] text-white/60 block mt-1">
                      Thôn Yên Phú, Ngọc Hồi, Hà Nội
                    </span>
                  </div>

                  {/* Nhà Gái */}
                  <div className="text-center pl-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#FFD782]/80 block mb-1">
                      Nhà Gái
                    </span>
                    <div className="font-medium text-white/95 leading-snug">
                      Bố: {bride.father}<br />
                      Mẹ: {bride.mother}
                    </div>
                    <span className="text-[10px] text-white/60 block mt-1">
                      Bắc Đông Hưng, Hưng Yên
                    </span>
                  </div>

                </div>

                {/* 3. Formal Statement */}
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FFECCC] mb-5 leading-relaxed font-light">
                  TRÂN TRỌNG BÁO TIN <br />
                  LỄ THÀNH HÔN CỦA CON CHÚNG TÔI
                </div>

                {/* 4. Couple Names */}
                <div className="space-y-1 mb-6">
                  <div>
                    <h4 className="font-heading text-3xl sm:text-4xl text-white font-normal">
                      {groom.fullName}
                    </h4>
                    <span className="text-[10px] text-[#FFD782] tracking-[0.25em] uppercase font-semibold">
                      TRƯỞNG NAM
                    </span>
                  </div>

                  <div className="font-script text-3xl sm:text-4xl text-[#FFD782] py-1">
                    &amp;
                  </div>

                  <div>
                    <h4 className="font-heading text-3xl sm:text-4xl text-white font-normal">
                      {bride.fullName}
                    </h4>
                    <span className="text-[10px] text-[#FFD782] tracking-[0.25em] uppercase font-semibold">
                      ÚT NỮ
                    </span>
                  </div>
                </div>

                {/* 5. Schedule & Location (Nhà Trai) */}
                <div className="w-full bg-black/25 border border-[#851E32]/70 rounded-2xl p-4 sm:p-5 mb-6 backdrop-blur-xs space-y-4">
                  
                  {/* LỄ THÀNH HÔN */}
                  <div className="pb-3 border-b border-[#851E32]/70">
                    <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FFD782] font-semibold mb-1">
                      LỄ THÀNH HÔN CHÍNH THỨC
                    </div>
                    <div className="text-xs text-white/90">
                      <strong>Thứ Ba, 29/09/2026</strong> (Tức ngày 19/08/2026 Âm lịch)
                    </div>
                  </div>

                  {/* TIỆC MỜI CỖ */}
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FFECCC] font-semibold mb-1">
                      TIỆC MỜI CỖ NHÀ TRAI
                    </div>
                    <div className="text-xs text-white/90">
                      <strong>Thứ Hai, 28/09/2026</strong> (Tức ngày 18/08/2026 Âm lịch)
                    </div>
                  </div>

                  {/* ĐỊA ĐIỂM */}
                  <div className="pt-2 text-xs text-[#FFD782] font-medium border-t border-[#851E32]/70">
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FFD782]" />
                      <span>{thanhHonEvent.location}</span>
                    </div>
                    <span className="text-white/70 font-light text-[11px] block">
                      {thanhHonEvent.address}
                    </span>
                  </div>

                </div>

                {/* 6. Action Links */}
                <div className="w-full flex flex-col sm:flex-row gap-2.5 pt-2">
                  <a
                    href={thanhHonEvent.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-white/15 hover:bg-white/25 text-white hover:text-[#FFD782] border border-white/30 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#FFD782]" />
                    <span>Chỉ Đường</span>
                  </a>

                  <a
                    href={thanhHonEvent.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-[#FFD782] hover:bg-[#FFECCC] text-[#36050E] rounded-full text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <CalendarPlus className="w-3.5 h-3.5 text-[#36050E]" />
                    <span>Thêm Vào Lịch</span>
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* ======================================================================= */}
          {/* CARD 2: THÔNG TIN TIỆC CƯỚI & LỄ VU QUY (INSET CALENDAR WIDGET)           */}
          {/* ======================================================================= */}
          <ScrollReveal animation="slide-left" duration={850} delay={300} className="w-full relative">
            <div className="relative w-full bg-gradient-to-b from-[#560C1B] via-[#4A0A16] to-[#36050E] text-[#FDF8F2] rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(86,12,27,0.45)] border border-[#851E32]/60 overflow-visible">
              
              {/* ATTACHED BOTANICAL FLORAL BRANCH CLINGING ON LEFT EDGE */}
              <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-28 sm:w-36 md:w-44 aspect-[2/3] z-30 pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/decor/floral_branch_clipping_left.webp"
                  alt="Floral Branch Embellishment Left"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              {/* Card Inner Content */}
              <div className="relative z-20 text-center font-serif flex flex-col items-center">
                
                {/* 1. Header Title */}
                <h3 className="font-heading text-2xl sm:text-3xl text-[#FFD782] tracking-[0.15em] uppercase font-normal mb-3 drop-shadow-sm">
                  THÔNG TIN LỄ VU QUY
                </h3>

                <p className="text-xs uppercase tracking-[0.2em] text-[#FFECCC] mb-6 font-light">
                  LỄ VU QUY &amp; TIỆC MỜI CỖ NHÀ GÁI
                </p>

                {/* 2. Date & Time Highlights */}
                <div className="w-full flex items-center justify-center gap-6 pb-4 border-b border-[#851E32]/80 mb-5">
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-white/70 block">
                      Thứ Ba
                    </span>
                    <span className="font-heading text-3xl sm:text-4xl text-[#FFD782] font-bold">
                      29
                    </span>
                  </div>

                  <div className="w-[1px] h-10 bg-[#851E32]" />

                  <div className="text-left">
                    <span className="text-xs uppercase font-semibold text-white">
                      THÁNG 09 / 2026
                    </span>
                    <span className="text-[11px] text-[#FFD782] font-semibold block">
                      19/08 Âm Lịch
                    </span>
                  </div>
                </div>

                {/* 3. Venue Nhà Gái */}
                <div className="text-xs text-white/90 mb-6 p-3 bg-black/25 border border-[#851E32]/70 rounded-xl w-full">
                  <strong className="text-[#FFD782] block text-sm mb-1">{vuQuyEvent.location}</strong>
                  <span className="text-white/70 font-light">{vuQuyEvent.address}</span>
                </div>

                {/* 4. INSET CREAM PAPER CALENDAR WIDGET (THÁNG 9 / 2026) */}
                <div className="w-full bg-[#FDF8F2] text-[#2C2224] rounded-2xl p-5 shadow-lg border border-[#E8DACB] mb-6">
                  
                  {/* Cursive Month Header */}
                  <div className="font-script text-3xl text-[#851E32] mb-3">
                    Tháng 9 / 2026
                  </div>

                  {/* Calendar Grid for September 2026 (Sept 1 is Tuesday) */}
                  <div className="grid grid-cols-7 text-center text-[11px] font-sans font-medium text-[#736266] gap-y-2">
                    <span className="text-[#C92A42] font-semibold">T2</span>
                    <span>T3</span>
                    <span>T4</span>
                    <span>T5</span>
                    <span>T6</span>
                    <span>T7</span>
                    <span className="text-[#C92A42] font-semibold">CN</span>

                    {/* Week 1: Sept 1 is Tue */}
                    <span className="text-stone-300"></span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>

                    {/* Week 2 */}
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>

                    {/* Week 3 */}
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>

                    {/* Week 4 */}
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>

                    {/* Week 5: Days 28 (Ăn cỗ) & 29 (Thành Hôn/Vu Quy) Highlighted */}
                    <span className="relative flex items-center justify-center font-bold text-white">
                      <span className="w-6 h-6 bg-[#C59B55] rounded-full flex items-center justify-center text-[10px] shadow-sm" title="Tiệc Mời Cỗ">
                        28
                      </span>
                    </span>
                    <span className="relative flex items-center justify-center font-bold text-white">
                      <span className="w-6 h-6 bg-[#851E32] rounded-full flex items-center justify-center text-[10px] shadow-sm" title="Lễ Thành Hôn / Vu Quy">
                        29
                      </span>
                    </span>
                    <span>30</span>
                    <span className="text-stone-300"></span>
                    <span className="text-stone-300"></span>
                    <span className="text-stone-300"></span>
                    <span className="text-stone-300"></span>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#E8DACB] text-[10px] font-serif text-[#736266] flex items-center justify-center gap-4">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-[#C59B55] rounded-full inline-block" /> 28/09: Ăn Cỗ
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-[#851E32] rounded-full inline-block" /> 29/09: Thành Hôn / Vu Quy
                    </span>
                  </div>

                </div>

                {/* 5. RSVP Button */}
                <button
                  onClick={scrollToRsvp}
                  className="w-full py-3.5 px-6 bg-[#FDF8F2] hover:bg-white text-[#560C1B] rounded-full text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                >
                  XÁC NHẬN THAM DỰ
                </button>

              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
