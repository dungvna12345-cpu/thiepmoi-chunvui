'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
} from '@/components/WatermarkDecorations';

export default function VowsSection() {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');
  const { groom, bride } = WEDDING_DATA;

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] text-[#2C2224] relative overflow-hidden select-none border-t border-[#EFE6D8]">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      {/* Outer Fine Hairline Border */}
      <div className="absolute inset-4 sm:inset-10 border border-[#C59B55]/30 pointer-events-none z-10" />

      <div className="max-w-4xl mx-auto relative z-20">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Lời Hẹn Ước &bull; Lời Thề Nguyện</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Lời Hẹn Trăm Năm
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light">
              Những lời nguyện ước chân thành từ sâu thẳm trái tim trước ngưỡng cửa hôn nhân thiêng liêng.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher: Letterpress Buttons */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex border border-[#C59B55]/40 p-1 bg-white rounded-full shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('groom')}
                className={`px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-[0.2em] transition-all duration-300 font-semibold ${
                  activeTab === 'groom'
                    ? 'bg-[#C92A42] text-white shadow-md'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                Chú Rể Thành Nhớ
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('bride')}
                className={`px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-[0.2em] transition-all duration-300 font-semibold ${
                  activeTab === 'bride'
                    ? 'bg-[#C92A42] text-white shadow-md'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                Cô Dâu Ngọc Ngân
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Letter Container: Tactile Fine Paper Card */}
        <ScrollReveal animation="zoom-in" duration={850} delay={250}>
          <div className="bg-white text-[#2C2224] p-8 sm:p-12 md:p-14 border border-[#EFE6D8] shadow-[0_20px_50px_-15px_rgba(201,42,66,0.08)] rounded-xs relative overflow-visible">
            
            {/* ĐÍNH HOA NHỎ XINH Ở GÓC */}
            <AttachedSmallFlower position="top-right" size="tiny" />

            {/* Chìm Hoa Hồng Vàng Nét Vẽ */}
            <GoldRoseWatermark position="bottom-right" opacity={0.06} size="medium" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Portrait Column */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[210px] aspect-[4/5] p-2 bg-[#FFFDF9] border border-[#EFE6D8] shadow-sm rounded-xs">
                  <div className="relative w-full h-full overflow-hidden bg-stone-100 rounded-2xs">
                    <Image
                      src={activeTab === 'groom' ? groom.portrait : bride.portrait}
                      alt={activeTab === 'groom' ? groom.name : bride.name}
                      fill
                      sizes="210px"
                      className="object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                    />
                  </div>
                </div>
              </div>

              {/* Letter Content Column */}
              <div className="md:col-span-8 flex flex-col justify-between font-serif">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C59B55] block mb-1 font-semibold">
                    {activeTab === 'groom' ? 'Gửi em — Ngọc Ngân' : 'Gửi anh — Thành Nhớ'}
                  </span>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#2C2224] font-normal mb-5">
                    {activeTab === 'groom' ? 'Anh hứa sẽ luôn bên em' : 'Em nguyện cùng anh đi trọn đời'}
                  </h3>

                  <blockquote className="text-sm sm:text-base text-[#4A3C3F] leading-relaxed italic font-light mb-6">
                    {activeTab === 'groom' ? (
                      <>
                        &ldquo;Từ ngày gặp em, anh biết rằng hạnh phúc đích thực là được cùng em chia sẻ những niềm vui bình dị nhất mỗi ngày. Anh hứa sẽ luôn lắng nghe, bảo bọc và đồng hành cùng em qua mọi mùa gió mưa hay nắng ấm.&rdquo;
                      </>
                    ) : (
                      <>
                        &ldquo;Cảm ơn anh đã luôn kiên nhẫn, yêu thương và che chở. Giây phút nắm lấy tay anh, em biết mình đã tìm thấy bến đỗ bình yên nhất của cuộc đời. Em sẵn sàng cùng anh viết tiếp chương tuyệt đẹp nhất.&rdquo;
                      </>
                    )}
                  </blockquote>
                </div>

                {/* Signature Line */}
                <div className="pt-4 border-t border-[#EFE6D8] flex items-center justify-between text-xs">
                  <span className="text-[#736266] font-light italic">
                    Lời thề nguyện &bull; {WEDDING_DATA.weddingDate.formattedDate}
                  </span>
                  <span className="font-script text-3xl text-[#C92A42]">
                    {activeTab === 'groom' ? groom.name : bride.name}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

