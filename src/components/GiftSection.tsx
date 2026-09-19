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
  const { groom, bride } = WEDDING_DATA;
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const handleCopy = (accountNumber: string, bankId: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedBank(bankId);
    setTimeout(() => {
      setCopiedBank(null);
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
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Hộp Mừng Cưới &bull; Chúc Phúc</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Gửi Lời Chúc &amp; Mừng Cưới
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light leading-relaxed">
              Sự hiện diện của Quý khách là món quà trân quý nhất. Nếu muốn gửi quà mừng từ xa, Quý khách có thể sử dụng thông tin tài khoản dưới đây.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Bank Registry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Chú Rể (Thành Nhớ) - Slide from left */}
          <ScrollReveal animation="slide-left" duration={850} delay={200}>
            <div className="bg-white p-8 border border-[#EFE6D8] shadow-[0_15px_40px_-15px_rgba(201,42,66,0.08)] flex flex-col items-center text-center relative group hover:border-[#C92A42] transition-all duration-300 rounded-xs hover:-translate-y-1 overflow-visible">
              
              {/* ĐÍNH HOA NHỎ XINH */}
              <AttachedSmallFlower position="top-right" size="tiny" />
              <GoldRoseWatermark position="bottom-left" opacity={0.05} size="small" />

              <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-[#C59B55] font-semibold mb-1 relative z-10">
                Tài Khoản Chú Rể
              </span>
              <h3 className="font-heading text-2xl text-[#2C2224] mb-5 font-normal relative z-10">
                {groom.name}
              </h3>

              {/* VietQR Code Frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 p-2.5 bg-[#FFFDF9] border border-[#EFE6D8] mb-5 shadow-xs flex items-center justify-center rounded-2xs z-10">
                <img
                  src={groom.bank.qrUrl}
                  alt={`QR Mừng Cưới ${groom.name}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Bank Info */}
              <div className="space-y-1 font-serif text-xs mb-5 w-full relative z-10">
                <p className="text-[#736266] text-[11px] font-medium uppercase tracking-wider">
                  {groom.bank.bankName}
                </p>
                <p className="font-mono text-base font-bold text-[#C92A42] tracking-wider">
                  {groom.bank.accountNumber}
                </p>
                <p className="text-[#2C2224] font-semibold uppercase text-[11px]">
                  {groom.bank.accountHolder}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(groom.bank.accountNumber, 'groom')}
                className="w-full py-2.5 px-4 bg-white hover:bg-[#FFF0F3] text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/60 hover:border-[#C92A42] text-xs font-serif uppercase tracking-[0.15em] font-semibold transition-all flex items-center justify-center gap-2 rounded-xs shadow-2xs relative z-10"
              >
                {copiedBank === 'groom' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đã Sao Chép STK</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C59B55]" />
                    <span>Sao Chép Số Tài Khoản</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Cô Dâu (Ngọc Ngân) - Slide from right */}
          <ScrollReveal animation="slide-right" duration={850} delay={300}>
            <div className="bg-white p-8 border border-[#EFE6D8] shadow-[0_15px_40px_-15px_rgba(201,42,66,0.08)] flex flex-col items-center text-center relative group hover:border-[#C92A42] transition-all duration-300 rounded-xs hover:-translate-y-1 overflow-visible">
              
              {/* ĐÍNH HOA NHỎ XINH */}
              <AttachedSmallFlower position="top-left" size="tiny" />
              <GoldRoseWatermark position="bottom-right" opacity={0.05} size="small" />

              <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-[#C59B55] font-semibold mb-1 relative z-10">
                Tài Khoản Cô Dâu
              </span>
              <h3 className="font-heading text-2xl text-[#2C2224] mb-5 font-normal relative z-10">
                {bride.name}
              </h3>

              {/* VietQR Code Frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 p-2.5 bg-[#FFFDF9] border border-[#EFE6D8] mb-5 shadow-xs flex items-center justify-center rounded-2xs z-10">
                <img
                  src={bride.bank.qrUrl}
                  alt={`QR Mừng Cưới ${bride.name}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Bank Info */}
              <div className="space-y-1 font-serif text-xs mb-5 w-full">
                <p className="text-[#736266] text-[11px] font-medium uppercase tracking-wider">
                  {bride.bank.bankName}
                </p>
                <p className="font-mono text-base font-bold text-[#C92A42] tracking-wider">
                  {bride.bank.accountNumber}
                </p>
                <p className="text-[#2C2224] font-semibold uppercase text-[11px]">
                  {bride.bank.accountHolder}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(bride.bank.accountNumber, 'bride')}
                className="w-full py-2.5 px-4 bg-white hover:bg-[#FFF0F3] text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/60 hover:border-[#C92A42] text-xs font-serif uppercase tracking-[0.15em] font-semibold transition-all flex items-center justify-center gap-2 rounded-xs shadow-2xs"
              >
                {copiedBank === 'bride' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đã Sao Chép STK</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C59B55]" />
                    <span>Sao Chép Số Tài Khoản</span>
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

