'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Gift, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/weddingData';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
} from '@/components/WatermarkDecorations';

export default function GiftSection() {
  const { groom } = WEDDING_DATA;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(groom.bank.accountNumber);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <section id="gift-section" className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FAF5EE] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Hộp Mừng Cưới &bull; Chúc Phúc</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Hộp Mừng Cưới
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light leading-relaxed">
              Sự hiện diện của Quý khách là món quà trân quý nhất. Nếu muốn gửi quà mừng từ xa, Quý khách có thể sử dụng thông tin tài khoản dưới đây.
            </p>
          </div>
        </ScrollReveal>

        {/* Single Centered Bank Registry Card */}
        <div className="max-w-md mx-auto">
          <ScrollReveal animation="rise" duration={900} delay={150}>
            <div className="bg-white p-6 sm:p-9 border-2 border-[#C59B55]/50 shadow-[0_20px_50px_-15px_rgba(201,42,66,0.12)] flex flex-col items-center text-center relative group hover:border-[#C92A42] transition-all duration-300 rounded-2xl overflow-visible ring-4 ring-[#C59B55]/10">
              
              {/* ĐÍNH HOA NHỎ XINH */}
              <AttachedSmallFlower position="top-right" size="tiny" />
              <GoldRoseWatermark position="bottom-left" opacity={0.05} size="small" />

              <span className="text-[10px] sm:text-[11px] uppercase font-serif tracking-[0.25em] text-[#C59B55] font-semibold mb-1 relative z-10">
                Tài Khoản Mừng Cưới
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#2C2224] mb-4 font-normal relative z-10">
                {groom.bank.accountHolder}
              </h3>

              {/* VietQR Code Frame */}
              <div className="relative w-56 h-auto sm:w-64 p-2 bg-[#FFFDF9] border border-[#EFE6D8] mb-5 shadow-xs flex items-center justify-center rounded-xl z-10">
                <img
                  src={groom.bank.qrUrl}
                  alt={`QR Mừng Cưới ${groom.bank.accountHolder}`}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Bank Info */}
              <div className="space-y-1.5 font-serif text-xs sm:text-sm mb-6 w-full relative z-10">
                <p className="text-[#736266] text-xs font-medium uppercase tracking-wider">
                  {groom.bank.bankName}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-lg sm:text-xl font-bold text-[#C92A42] tracking-widest">
                    {groom.bank.accountNumber}
                  </span>
                </div>
                <p className="text-[#2C2224] font-semibold uppercase text-xs tracking-wider">
                  {groom.bank.accountHolder}
                </p>
                <p className="text-[#736266] text-[11px] font-light">
                  {groom.bank.branch}
                </p>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-3 px-5 bg-gradient-to-r from-[#C92A42] to-[#A81B32] hover:from-[#A81B32] hover:to-[#851525] text-white text-xs sm:text-sm font-serif uppercase tracking-[0.15em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer relative z-10"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                    <span>Đã Sao Chép Số Tài Khoản</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/90" />
                    <span>Sao Chép Số Tài Khoản ({groom.bank.accountNumber})</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}


