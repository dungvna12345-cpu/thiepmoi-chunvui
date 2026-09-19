'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '@/lib/weddingData';

interface EnvelopeModalProps {
  onOpen: () => void;
}

export default function EnvelopeModal({ onOpen }: EnvelopeModalProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Check if previously opened in this session
  useEffect(() => {
    try {
      const alreadyOpened = sessionStorage.getItem('wedding_envelope_opened');
      if (alreadyOpened) {
        setIsRemoved(true);
        onOpen();
      }
    } catch {}
  }, [onOpen]);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      sessionStorage.setItem('wedding_envelope_opened', 'true');
      
      confetti({
        particleCount: 60,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#E84D67', '#D4AF37', '#FFD1DC', '#FFFDF9', '#4E6B56'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 70,
          origin: { y: 0.45 },
          colors: ['#FFD782', '#E84D67', '#FFFFFF', '#658C70'],
        });
      }, 250);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1200);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 select-none transition-all duration-700 backdrop-blur-md cursor-pointer ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-black/60'
      }`}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-[#2C4334]/20 via-transparent to-black/50 pointer-events-none" />

      {/* Main Interactive Stage Container */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP CURSIVE CALLIGRAPHY: "Ngày Chung Đôi" / "We got married" */}
        <div className="mb-3 sm:mb-4 animate-fade-in drop-shadow-md">
          <p className="font-script text-4xl sm:text-5xl text-[#D8E6DC] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-wide">
            Ngày Chung Đôi
          </p>
          <div className="flex items-center justify-center gap-2.5 mt-1 text-[11px] font-serif uppercase tracking-[0.25em] text-white/90">
            <span className="w-6 h-[1px] bg-[#A2C2AC]/70" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-6 h-[1px] bg-[#A2C2AC]/70" />
          </div>
        </div>

        {/* 2. THE ENVELOPE STAGE WITH POLAROID PHOTO & FLOWERS */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[300px] sm:w-[350px] h-[340px] sm:h-[380px] cursor-pointer group my-1 select-none"
        >
          {/* A. CÀNH HOA CÚC TRẮNG GÓC TRÊN BÊN TRÁI (TOP-LEFT DAISY BRANCH) */}
          <div className="absolute -top-6 -left-8 sm:-left-10 w-28 sm:w-36 h-36 sm:h-44 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3 drop-shadow-md">
            <Image
              src="/images/decor/daisy_branch_decor.png"
              alt="White Daisy Flowers"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>

          {/* B. BÓ HOA CƯỚI GÓC DƯỚI BÊN PHẢI (BOTTOM-RIGHT FLOWER BOUQUET) */}
          <div className="absolute -bottom-5 -right-6 sm:-right-8 w-28 sm:w-34 h-32 sm:h-40 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg">
            <Image
              src="/images/decor/flower_bouquet_decor.png"
              alt="Wedding Bouquet"
              fill
              sizes="150px"
              className="object-contain"
              priority
            />
          </div>

          {/* C. ENVELOPE BACK FLAP (NẮP PHONG BÌ MỞ NGƯỢC LÊN TRÊN - SAGE GREEN) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[140px] sm:bottom-[160px] w-[260px] sm:w-[300px] h-[95px] sm:h-[110px] bg-[#283C2F] border-t border-l border-r border-[#3D5644] rounded-t-xl z-0 pointer-events-none"
            style={{
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.3)',
            }}
          />

          {/* D. SINGLE POLAROID PHOTO (1 ẢNH CÔ DÂU CHÚ RỂ NHÔ CAO RA KHỎI PHONG BÌ) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-4 w-[215px] sm:w-[245px] bg-white p-2.5 sm:p-3 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-stone-200 transition-all duration-700 ease-out z-15 ${
              isOpening
                ? '-translate-y-16 scale-105 shadow-2xl'
                : '-rotate-2 group-hover:-translate-y-3 group-hover:rotate-0'
            }`}
          >
            {/* Inner Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
              <Image
                src="/images/wedding_opt/H2H09645.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="260px"
                className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                priority
              />
            </div>

            {/* Bottom Polaroid Caption Bar */}
            <div className="pt-2 text-center">
              <p className="font-script text-lg text-[#2C4334] font-semibold leading-none">
                Thành Nhớ &amp; Ngọc Ngân
              </p>
            </div>
          </div>

          {/* E. CUỐNG VÉ HẸN ƯỚC (SAVE THE DATE TICKET PEEKING IN FRONT OF PHOTO) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[115px] sm:bottom-[130px] w-[190px] sm:w-[215px] bg-[#FFFDF9] border border-[#C59B55]/50 rounded-lg py-2 px-3 shadow-md z-20 transition-all duration-500 ${
              isOpening ? 'translate-y-2 opacity-80' : 'rotate-1 group-hover:rotate-0'
            }`}
          >
            <div className="text-center font-serif">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C59B55] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#2C4334] font-bold tracking-wider leading-tight">
                29 . 09 . 2026
              </p>
              <p className="text-[9px] text-[#736266] italic">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* F. ENVELOPE FRONT BODY (THÂN PHONG BÌ PHÍA TRƯỚC HÌNH CHỮ V - SAGE GREEN) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[270px] sm:w-[310px] h-[155px] sm:h-[175px] bg-[#334A3A] rounded-b-2xl shadow-[0_20px_45px_rgba(0,0,0,0.45)] border-b border-l border-r border-[#4A6854] z-25 pointer-events-none"
            style={{
              clipPath: 'polygon(0% 0%, 50% 42%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Pocket Shadow & 3D Lighting Accents */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-b-2xl" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)',
              }}
            />
          </div>

          {/* G. WAX SEAL MONOGRAM TRÊN ĐỈNH CHỮ V PHONG BÌ */}
          <div
            className={`absolute bottom-[80px] sm:bottom-[92px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#4A6451] via-[#354D3C] to-[#203125] text-[#D8E6DC] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.5)] border-2 border-[#A2C2AC] ring-2 ring-[#283C2F]/80 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 fill-[#D8E6DC]/90 text-[#D8E6DC]/90 drop-shadow-xs" />
            </div>
          </div>

        </div>

        {/* 3. INVITATION FOOTER & GUEST PILL BUTTON */}
        <div className="mt-4 sm:mt-5 space-y-2.5">
          <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#D8E6DC] font-semibold drop-shadow-sm">
            TRÂN TRỌNG KÍNH MỜI
          </p>

          {/* Interactive Open Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="inline-flex items-center gap-2.5 px-8 py-2.5 bg-gradient-to-r from-[#FFFDF9] via-white to-[#FAF5EE] text-[#2C4334] hover:text-white hover:from-[#2C4334] hover:to-[#1E2E24] border border-[#A2C2AC]/80 rounded-full text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>Mở Thiệp Cưới</span>
          </button>

          <p className="text-[11px] text-white/75 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào phong bì hoặc nhấn mở thiệp để bắt đầu
          </p>
        </div>

      </div>
    </div>
  );
}

