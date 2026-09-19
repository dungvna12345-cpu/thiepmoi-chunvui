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
      {/* Dynamic Ambient Glow & Red Velvet Luxury Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,27,50,0.3)_0%,rgba(40,4,8,0.85)_100%)] pointer-events-none" />

      {/* Main Interactive Stage */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP CURSIVE CALLIGRAPHY: "Ngày Chung Đôi" */}
        <div className="mb-2 sm:mb-3 animate-fade-in text-center drop-shadow-md">
          <h1 className="font-script text-5xl sm:text-6xl text-[#FFE8A3] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] tracking-wide">
            Ngày Chung Đôi
          </h1>
          <div className="flex items-center justify-center gap-2 mt-0.5 text-xs text-[#FFE8A3]/90">
            <Heart className="w-3.5 h-3.5 fill-[#FFE8A3]/80 text-[#FFE8A3]" />
          </div>
          <div className="flex items-center justify-center gap-3 mt-1 text-[11px] font-serif uppercase tracking-[0.25em] text-white/90">
            <span className="w-8 h-[1px] bg-[#FFE8A3]/70" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-8 h-[1px] bg-[#FFE8A3]/70" />
          </div>
        </div>

        {/* 2. THE RED LUXURY LACE ENVELOPE STAGE WITH 1 POLAROID PHOTO & RED ROSES */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[310px] sm:w-[360px] h-[370px] sm:h-[410px] cursor-pointer group my-1 select-none"
        >
          {/* A. HOA HỒNG ĐỎ NHUNG & HOA BABY TRẮNG GÓC TRÁI (LEFT RED ROSE & BABY BREATH) */}
          <div className="absolute top-12 -left-8 sm:-left-10 w-32 sm:w-38 h-44 sm:h-52 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3 drop-shadow-2xl">
            <Image
              src="/images/decor/red_rose_branch_decor.webp"
              alt="Red Rose Flowers"
              fill
              sizes="180px"
              className="object-contain"
              priority
            />
          </div>

          {/* B. THƠ VIẾT TAY GÓC PHẢI (RIGHT HANDWRITTEN LOVE POEM) */}
          <div className="absolute top-2 -right-4 sm:-right-6 w-28 text-right pointer-events-none z-10 font-script text-[#FFE8A3] text-sm sm:text-base leading-tight drop-shadow-md hidden xs:block">
            <p className="opacity-90">Cùng chúng tôi</p>
            <p className="opacity-90">viết tiếp</p>
            <p className="opacity-90">hành trình</p>
            <p className="opacity-90">yêu thương ♡</p>
          </div>

          {/* C. ENVELOPE BACK FLAP (NẮP PHONG BÌ ĐỎ MỞ NGƯỢC LÊN TRÊN VỚI VIỀN REN VÀNG) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[155px] sm:bottom-[175px] w-[275px] sm:w-[315px] h-[105px] sm:h-[120px] bg-gradient-to-t from-[#851022] to-[#5C0815] border-t-2 border-l border-r border-[#D4AF37]/80 rounded-t-2xl z-0 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.5)',
            }}
          >
            {/* Lớp ren hoa văn chìm bên trong */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE8A3_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
          </div>

          {/* D. SINGLE POLAROID PHOTO CARD (ẢNH CÔ DÂU CHÚ RỂ RÕ MẶT KHÔNG BỊ CHE KHUẤT) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-1 w-[225px] sm:w-[255px] bg-[#FFFDF9] p-2.5 sm:p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-[#E8DDD0] transition-all duration-700 ease-out z-15 ${
              isOpening
                ? '-translate-y-16 scale-105 shadow-2xl'
                : '-rotate-2 group-hover:-translate-y-3 group-hover:rotate-0'
            }`}
          >
            {/* KẸP TIM VÀNG GÓC TRÊN BÊN TRÁI ẢNH (GOLD HEART PAPERCLIP) */}
            <div className="absolute -top-2.5 left-3 z-30 pointer-events-none drop-shadow-md">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C8 0 2 3 2 9C2 15 12 23 12 23C12 23 22 15 22 9C22 3 16 0 12 4Z" stroke="#D4AF37" strokeWidth="2.5" fill="#FFE8A3" fillOpacity="0.4" />
                <path d="M12 7C9.5 4 5 6 5 10C5 14 12 20 12 20C12 20 19 14 19 10C19 6 14.5 4 12 7Z" stroke="#D4AF37" strokeWidth="1.5" />
              </svg>
            </div>

            {/* KHUNG ẢNH CƯỚI: ZOOM CHUẨN MẶT CÔ DÂU CHÚ RỂ RẠNG NGỜI KHÔNG BỊ CHE */}
            <div className="relative w-full aspect-[4/4.3] rounded-xl overflow-hidden bg-stone-100 border border-[#D4AF37]/30 shadow-inner">
              <Image
                src="/images/wedding_opt/H2H09645.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="280px"
                className="object-cover object-[center_20%] filter brightness-[1.03] contrast-[1.02]"
                priority
              />
            </div>

            {/* PHẦN DƯỚI TẤM ẢNH POLAROID: NGÀY CHUNG ĐÔI 29.09.2026 */}
            <div className="pt-2 pb-1 text-center font-serif">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C92A42] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#8A1326] font-bold tracking-widest leading-tight mt-0.5">
                29 . 09 . 2026
              </p>
              <p className="text-[9px] text-[#736266] italic font-medium">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* E. ENVELOPE FRONT BODY (THÂN PHONG BÌ ĐỎ NHUNG HÌNH CHỮ V VIỀN REN CHỈ VÀNG) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[285px] sm:w-[325px] h-[165px] sm:h-[185px] bg-gradient-to-b from-[#A81B32] via-[#8F1426] to-[#630917] rounded-b-3xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] border-b-2 border-l-2 border-r-2 border-[#D4AF37]/80 z-25 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 50% 45%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Họa tiết ren thêu dập chìm (Lace Embroidery Pattern) */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFE8A3_1.5px,transparent_1.5px)] [background-size:9px_9px]" />

            {/* Dải ren thêu chỉ vàng lượn sóng theo mép chữ V */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,232,163,0.3) 0%, transparent 40%)',
              }}
            />

            {/* DÒNG CHỮ TRÂN TRỌNG KÍNH MỜI TRÊN THÂN PHONG BÌ */}
            <div className="absolute bottom-3 inset-x-0 text-center font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#FFE8A3] font-semibold drop-shadow-sm flex items-center justify-center gap-2">
              <span className="text-xs">✤</span>
              <span>TRÂN TRỌNG KÍNH MỜI</span>
              <span className="text-xs">✤</span>
            </div>
          </div>

          {/* F. WAX SEAL CON DẤU SÁP VÀNG HOÀNG GIA DẬP NỔI TRÁI TIM */}
          <div
            className={`absolute bottom-[75px] sm:bottom-[86px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#FFE8A3] via-[#D4AF37] to-[#8C6225] text-[#8A1326] flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-2 border-white ring-2 ring-[#D4AF37] group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8A1326] text-[#8A1326] drop-shadow-xs" />
            </div>
          </div>

          {/* CÁNH HOA HỒNG RƠI TRANG TRÍ (SCATTERED ROSE PETALS) */}
          <div className="absolute top-24 right-4 w-5 h-6 bg-[#C92A42] rounded-full rotate-45 opacity-85 shadow-md pointer-events-none z-20" />
          <div className="absolute bottom-6 right-2 w-4 h-5 bg-[#8A1326] rounded-full -rotate-12 opacity-80 shadow-md pointer-events-none z-30" />
        </div>

        {/* 3. INVITATION FOOTER & GUEST PILL BUTTON */}
        <div className="mt-3 sm:mt-4 space-y-2">
          {/* Interactive Open Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="inline-flex items-center gap-2 px-9 py-2.5 bg-gradient-to-r from-[#FFFDF9] via-[#FFF5E6] to-[#FFFDF9] text-[#8A1326] hover:text-white hover:from-[#A81B32] hover:to-[#630917] border-2 border-[#D4AF37] rounded-full text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>Mở Thiệp Cưới &rarr;</span>
          </button>

          <p className="text-[11px] text-white/80 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào phong bì hoặc nhấn mở thiệp để bắt đầu
          </p>
          <div className="text-[#FFE8A3]/70 text-xs">♡</div>
        </div>

      </div>
    </div>
  );
}



