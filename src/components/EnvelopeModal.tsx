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
        {/* 1. TOP CURSIVE CALLIGRAPHY: "Ngày Chung Đôi" / "Thư Mời Cưới" */}
        <div className="mb-3 sm:mb-4 animate-fade-in drop-shadow-md">
          <p className="font-script text-5xl sm:text-6xl text-[#FFE8A3] drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)] tracking-wide">
            Thư Mời Cưới
          </p>
          <div className="flex items-center justify-center gap-2.5 mt-1 text-[11px] font-serif uppercase tracking-[0.25em] text-[#FFE8A3]/90">
            <span className="w-6 h-[1px] bg-[#FFE8A3]/70" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-6 h-[1px] bg-[#FFE8A3]/70" />
          </div>
        </div>

        {/* 2. THE RED ROYAL LACE ENVELOPE STAGE WITH POLAROID PHOTO & RED ROSES */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[300px] sm:w-[350px] h-[340px] sm:h-[380px] cursor-pointer group my-1 select-none"
        >
          {/* A. CÀNH HOA HỒNG ĐỎ NHUNG GÓC TRÊN BÊN TRÁI (TOP-LEFT RED ROSE SPRIG) */}
          <div className="absolute -top-7 -left-8 sm:-left-10 w-32 sm:w-40 h-40 sm:h-48 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3 drop-shadow-xl">
            <Image
              src="/images/decor/red_rose_branch_decor.webp"
              alt="Red Rose Flowers"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>

          {/* B. BÓ HOA CƯỚI HOA HỒNG ĐỎ BUỘC NƠ VÀNG GÓC DƯỚI BÊN PHẢI (BOTTOM-RIGHT RED BOUQUET) */}
          <div className="absolute -bottom-6 -right-6 sm:-right-8 w-32 sm:w-40 h-36 sm:h-44 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl">
            <Image
              src="/images/decor/red_rose_bouquet_decor.webp"
              alt="Red Wedding Bouquet"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>

          {/* C. ENVELOPE BACK FLAP (NẮP PHONG BÌ ĐỎ MỞ NGƯỢC LÊN TRÊN VỚI VIỀN REN VÀNG) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[140px] sm:bottom-[160px] w-[260px] sm:w-[300px] h-[95px] sm:h-[110px] bg-[#7A0E1F] border-t-2 border-l border-r border-[#C59B55]/70 rounded-t-xl z-0 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.4)',
            }}
          >
            {/* Lớp hoa văn ren mờ bên trong nắp phong bì */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE8A3_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
          </div>

          {/* D. SINGLE POLAROID PHOTO (1 ẢNH CÔ DÂU CHÚ RỂ NHÔ CAO RA KHỎI PHONG BÌ) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-4 w-[215px] sm:w-[245px] bg-white p-2.5 sm:p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.45)] border-2 border-[#FFE8A3]/80 transition-all duration-700 ease-out z-15 ${
              isOpening
                ? '-translate-y-16 scale-105 shadow-2xl'
                : '-rotate-2 group-hover:-translate-y-3 group-hover:rotate-0'
            }`}
          >
            {/* Inner Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-[#C59B55]/30 shadow-inner">
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
              <p className="font-script text-xl text-[#A81B32] font-semibold leading-none">
                Thành Nhớ &amp; Ngọc Ngân
              </p>
            </div>
          </div>

          {/* E. CUỐNG VÉ HẸN ƯỚC (TICKET PEEKING IN FRONT OF PHOTO CÓ VIỀN REN VÀNG) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[115px] sm:bottom-[130px] w-[190px] sm:w-[215px] bg-[#FFFDF9] border-2 border-[#C59B55]/70 rounded-lg py-2 px-3 shadow-lg z-20 transition-all duration-500 ring-1 ring-[#C59B55]/30 ${
              isOpening ? 'translate-y-2 opacity-80' : 'rotate-1 group-hover:rotate-0'
            }`}
          >
            <div className="text-center font-serif">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92A42] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#8A1326] font-bold tracking-wider leading-tight">
                29 . 09 . 2026
              </p>
              <p className="text-[9px] text-[#736266] italic font-medium">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* F. ENVELOPE FRONT BODY (THÂN PHONG BÌ ĐỎ NHUNG HÌNH CHỮ V CÓ VIỀN REN CHỈ VÀNG) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[270px] sm:w-[310px] h-[155px] sm:h-[175px] bg-gradient-to-b from-[#A81B32] via-[#911426] to-[#700B1A] rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-2 border-l-2 border-r-2 border-[#C59B55]/70 z-25 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 50% 42%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Lớp ren hoa văn chìm (Lace Pattern Overlay) */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFE8A3_1px,transparent_1px)] [background-size:8px_8px]" />

            {/* Dải ren thêu chỉ vàng trang nhã viền theo mép chữ V */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,232,163,0.3) 0%, transparent 40%)',
              }}
            />

            {/* Ánh sáng 3D góc nổi bật */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 45%)',
              }}
            />
          </div>

          {/* G. WAX SEAL VÀNG HOÀNG GIA TRÊN ĐỈNH CHỮ V PHONG BÌ */}
          <div
            className={`absolute bottom-[80px] sm:bottom-[92px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#FFE8A3] via-[#D4AF37] to-[#8C6225] text-[#8A1326] flex items-center justify-center shadow-[0_8px_25px_rgba(140,98,37,0.6)] border-2 border-[#FFFDF9] ring-2 ring-[#D4AF37]/90 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8A1326] text-[#8A1326] drop-shadow-xs" />
            </div>
          </div>

        </div>

        {/* 3. INVITATION FOOTER & GUEST PILL BUTTON */}
        <div className="mt-4 sm:mt-5 space-y-2.5">
          <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#FFE8A3] font-semibold drop-shadow-sm">
            TRÂN TRỌNG KÍNH MỜI
          </p>

          {/* Interactive Open Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="inline-flex items-center gap-2.5 px-9 py-2.5 bg-gradient-to-r from-[#FFFDF9] via-white to-[#FAF5EE] text-[#C92A42] hover:text-white hover:from-[#C92A42] hover:to-[#8A1326] border-2 border-[#D4AF37] rounded-full text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(201,42,66,0.35)] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>Mở Thiệp Cưới</span>
          </button>

          <p className="text-[11px] text-white/80 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào phong bì hoặc nhấn mở thiệp để bắt đầu
          </p>
        </div>

      </div>
    </div>
  );
}

