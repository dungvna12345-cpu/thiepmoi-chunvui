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
        particleCount: 65,
        spread: 85,
        origin: { y: 0.52 },
        colors: ['#D4AF37', '#FFD782', '#C92A42', '#FFFDF9', '#8A1326'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 70,
          origin: { y: 0.42 },
          colors: ['#FFE8A3', '#D4AF37', '#FFFFFF', '#E84D67'],
        });
      }, 250);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1150);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 select-none transition-all duration-700 backdrop-blur-md cursor-pointer ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-black/70'
      }`}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,42,66,0.2)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Interactive Stage */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP CURSIVE CALLIGRAPHY: "Ngày Chung Đôi" */}
        <div className="mb-2 sm:mb-3 animate-fade-in text-center drop-shadow-md">
          <p className="font-script text-5xl sm:text-6xl text-[#FFE8A3] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] tracking-wide">
            Ngày Chung Đôi
          </p>
          <div className="flex items-center justify-center gap-2.5 mt-1 text-[11px] font-serif uppercase tracking-[0.25em] text-white/90">
            <span className="w-7 h-[1px] bg-[#FFE8A3]/70" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-7 h-[1px] bg-[#FFE8A3]/70" />
          </div>
        </div>

        {/* 2. THE RED LUXURY LACE ENVELOPE STAGE WITH 1 POLAROID PHOTO & RED ROSES */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[310px] sm:w-[360px] h-[350px] sm:h-[390px] cursor-pointer group my-1 select-none"
        >
          {/* A. CÀNH HOA HỒNG ĐỎ NHUNG GÓC TRÊN BÊN TRÁI (TOP-LEFT RED ROSES) */}
          <div className="absolute -top-7 -left-7 sm:-left-9 w-32 sm:w-38 h-40 sm:h-48 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3 drop-shadow-xl">
            <Image
              src="/images/decor/red_rose_branch_decor.webp"
              alt="Red Rose Flowers"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>

          {/* B. BÓ HOA CƯỚI HOA HỒNG ĐỎ GÓC DƯỚI BÊN PHẢI (BOTTOM-RIGHT BOUQUET) */}
          <div className="absolute -bottom-6 -right-6 sm:-right-8 w-32 sm:w-38 h-36 sm:h-44 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl">
            <Image
              src="/images/decor/red_rose_bouquet_decor.webp"
              alt="Red Rose Bouquet"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>

          {/* C. ENVELOPE BACK FLAP (NẮP PHONG BÌ ĐỎ MỞ NGƯỢC LÊN TRÊN VỚI VIỀN REN VÀNG) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[145px] sm:bottom-[165px] w-[270px] sm:w-[310px] h-[100px] sm:h-[115px] bg-gradient-to-t from-[#851022] to-[#630917] border-t-2 border-l border-r border-[#D4AF37]/80 rounded-t-2xl z-0 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.5)',
            }}
          >
            {/* Lớp ren hoa văn chìm bên trong */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE8A3_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
          </div>

          {/* D. SINGLE POLAROID PHOTO CARD (1 ẢNH CÔ DÂU CHÚ RỂ NHÔ CAO RA KHỎI PHONG BÌ) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-4 w-[220px] sm:w-[250px] bg-[#FFFDF9] p-2.5 sm:p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-2 border-[#D4AF37]/60 transition-all duration-700 ease-out z-15 ${
              isOpening
                ? '-translate-y-16 scale-105 shadow-2xl'
                : '-rotate-2 group-hover:-translate-y-3 group-hover:rotate-0'
            }`}
          >
            {/* Viền ren chỉ vàng bao quanh tấm ảnh */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 border border-[#D4AF37]/40 shadow-inner">
              <Image
                src="/images/wedding_opt/H2H08970.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="270px"
                className="object-cover object-center filter brightness-[1.02] contrast-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Polaroid Caption Bar */}
            <div className="pt-2 text-center">
              <p className="font-script text-xl sm:text-2xl text-[#8A1326] font-semibold leading-none">
                Thành Nhớ &amp; Ngọc Ngân
              </p>
            </div>
          </div>

          {/* E. CUỐNG VÉ HẸN ƯỚC (TICKET GÀI TRƯỚC ẢNH CÓ VIỀN REN VÀNG) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[118px] sm:bottom-[134px] w-[195px] sm:w-[220px] bg-white border-2 border-[#D4AF37] rounded-xl py-2 px-3 shadow-lg z-20 transition-all duration-500 ring-2 ring-[#C92A42]/20 ${
              isOpening ? 'translate-y-2 opacity-80' : 'rotate-1 group-hover:rotate-0'
            }`}
          >
            {/* Họa tiết răng cưa vé cổ điển */}
            <div className="text-center font-serif">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92A42] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#8A1326] font-bold tracking-widest leading-tight">
                29 . 09 . 2026
              </p>
              <p className="text-[9px] text-[#736266] italic font-medium">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* F. ENVELOPE FRONT BODY (THÂN PHONG BÌ ĐỎ NHUNG HÌNH CHỮ V VIỀN REN CHỈ VÀNG) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] h-[160px] sm:h-[180px] bg-gradient-to-b from-[#A81B32] via-[#8F1426] to-[#6B0A19] rounded-b-3xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] border-b-2 border-l-2 border-r-2 border-[#D4AF37] z-25 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 50% 44%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Họa tiết ren thêu dập chìm (Lace Embroidery Pattern) */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE8A3_1.5px,transparent_1.5px)] [background-size:9px_9px]" />

            {/* Dải ren thêu chỉ vàng lượn sóng theo mép chữ V */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,232,163,0.35) 0%, transparent 40%)',
              }}
            />

            {/* Ánh sáng 3D góc phản chiếu nhung lụa */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 45%)',
              }}
            />
          </div>

          {/* DẢI REN THÊU TRẮNG VÀNG VIỀN THEO MÉP CHỮ V (LACE SCALLOP TRIM) */}
          <div
            className="absolute bottom-[48px] sm:bottom-[54px] left-1/2 -translate-x-1/2 w-[278px] sm:w-[318px] h-3 z-26 pointer-events-none opacity-80"
            style={{
              backgroundImage: 'radial-gradient(circle, #FFE8A3 2px, transparent 3px)',
              backgroundSize: '10px 10px',
            }}
          />

          {/* G. WAX SEAL CON DẤU SÁP ĐỎ HOÀNG GIA DẬP NỔI VIỀN VÀNG */}
          <div
            className={`absolute bottom-[82px] sm:bottom-[94px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#FFE8A3] via-[#D4AF37] to-[#8C6225] text-[#8A1326] flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-2 border-white ring-2 ring-[#D4AF37] group-hover:scale-110 transition-transform">
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



