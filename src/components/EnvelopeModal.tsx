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
        particleCount: 50,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#E84D67', '#D4AF37', '#FFD1DC', '#FFFDF9', '#C92A42'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.45 },
          colors: ['#FFD782', '#E84D67', '#FFFFFF'],
        });
      }, 300);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1300);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 select-none transition-all duration-700 backdrop-blur-md cursor-pointer ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-black/55'
      }`}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Background Decor: Realistic Botanical Branches in corners */}
      <div className="absolute top-0 left-0 w-36 sm:w-52 aspect-square pointer-events-none z-10 opacity-80 -translate-x-4 -translate-y-4">
        <Image
          src="/images/decor/floral_branch_clipping_left.webp"
          alt="Botanical Accent"
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-36 sm:w-52 aspect-square pointer-events-none z-10 opacity-80 translate-x-4 translate-y-4 rotate-180">
        <Image
          src="/images/decor/floral_branch_clipping_left.webp"
          alt="Botanical Accent"
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>

      {/* Main Interactive Stage */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP CURSIVE CALLIGRAPHY HEADER */}
        <div className="mb-4 sm:mb-6 animate-fade-in text-white drop-shadow-md">
          <h1 className="font-script text-5xl sm:text-6xl text-[#FFE8A3] drop-shadow-md tracking-wide">
            Thư Mời Cưới
          </h1>
          <div className="flex items-center justify-center gap-3 mt-1 text-xs font-serif uppercase tracking-[0.25em] text-white/90">
            <span className="w-8 h-[1px] bg-[#FFE8A3]/60" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-8 h-[1px] bg-[#FFE8A3]/60" />
          </div>
        </div>

        {/* 2. REALISTIC 3D LUXURY SEALED ENVELOPE */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[310px] sm:w-[370px] h-[220px] sm:h-[250px] cursor-pointer group my-3"
          style={{ perspective: '1200px' }}
        >
          {/* ENVELOPE BASE CONTAINER */}
          <div className="relative w-full h-full bg-[#EDE3D6] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#C59B55]/50 overflow-visible">
            
            {/* INNER LINER PAPER (Warm Ivory & Subtle Pattern) */}
            <div className="absolute inset-0 bg-[#FAF5EE] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B55_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
            </div>

            {/* ============================================================= */}
            {/* INNER PHOTO CARD - TUCKED INSIDE, SLIDES UP WHEN OPENED      */}
            {/* ============================================================= */}
            <div
              className={`absolute inset-x-5 top-3 h-[200px] sm:h-[230px] bg-white rounded-xl shadow-xl border-2 border-[#C59B55]/40 p-2 flex flex-col items-center transition-all duration-1000 ease-out z-10 ${
                isOpening
                  ? '-translate-y-36 sm:-translate-y-44 scale-105 opacity-100 shadow-2xl z-40'
                  : 'translate-y-2 opacity-0 pointer-events-none scale-95'
              }`}
            >
              {/* Photo inside the invitation card */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-stone-100 border border-[#C59B55]/40 shadow-inner">
                <Image
                  src="/images/wedding_opt/H2H09645.jpg"
                  alt="Thành Nhớ & Ngọc Ngân"
                  fill
                  sizes="350px"
                  className="object-cover object-top filter brightness-[1.01] contrast-[1.02]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 py-1.5 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-center text-white">
                  <p className="text-[10px] font-serif uppercase tracking-[0.2em] text-[#FFE8A3] font-semibold">
                    Lễ Thành Hôn &bull; 29.09.2026
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================= */}
            {/* ENVELOPE FRONT POCKET FOLD (THÂN PHONG BÌ PHÍA TRƯỚC)         */}
            {/* ============================================================= */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(to bottom, transparent 35%, #EDE3D6 36%, #E0D2C0 100%)',
                clipPath: 'polygon(0% 35%, 50% 68%, 100% 35%, 100% 100%, 0% 100%)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7)',
              }}
            />

            {/* Left & Right Fold Decorative Shadow Layers */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(180,155,130,0.35) 0%, transparent 55%)',
                clipPath: 'polygon(0 35%, 50% 68%, 0 100%)',
              }}
            />
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(-135deg, rgba(180,155,130,0.35) 0%, transparent 55%)',
                clipPath: 'polygon(100% 35%, 50% 68%, 100% 100%)',
              }}
            />

            {/* Viền chỉ vàng sang trọng quanh nắp phong bì */}
            <div className="absolute inset-1 border border-[#C59B55]/30 rounded-xl pointer-events-none z-20" />

            {/* ============================================================= */}
            {/* TOP TRIANGLE FLAP (NẮP PHONG BÌ ĐÓNG KÍN 3D)                  */}
            {/* ============================================================= */}
            <div
              className={`absolute inset-x-0 top-0 h-[125px] sm:h-[142px] origin-top transition-transform duration-700 ease-in-out z-30 pointer-events-none ${
                isOpening ? '[transform:rotateX(-180deg)]' : '[transform:rotateX(0deg)]'
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute inset-0 bg-[#EDE3D6] border-t border-[#D5C6B5]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
                  background: 'linear-gradient(180deg, #F4ECE1 0%, #EDE3D6 60%, #E2D3BE 100%)',
                }}
              />
              {/* Flap Gold Hairline Border */}
              <div
                className="absolute inset-x-2 top-0 h-full pointer-events-none opacity-40"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 98%)',
                  borderTop: '1px solid #C59B55',
                }}
              />
            </div>

            {/* ============================================================= */}
            {/* BRONZE / GOLD WAX SEAL (CON DẤU SÁP HOÀNG GIA CHÍNH GIỮA)    */}
            {/* ============================================================= */}
            <div
              className={`absolute top-[105px] sm:top-[120px] left-1/2 -translate-x-1/2 z-35 transition-all duration-500 ${
                isOpening ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#E8C278] via-[#C59B55] to-[#8C6225] text-white flex flex-col items-center justify-center shadow-[0_8px_25px_rgba(140,98,37,0.55)] border-2 border-[#FFE8A3] ring-2 ring-[#C59B55]/70 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white/95 text-white/95 drop-shadow-xs" />
              </div>
            </div>

          </div>
        </div>

        {/* 3. INVITATION FOOTER & GUEST PILL BUTTON */}
        <div className="mt-6 sm:mt-8 space-y-3">
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#FFE8A3] font-semibold drop-shadow-sm">
            TRÂN TRỌNG KÍNH MỜI
          </p>

          {/* Interactive Open Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="inline-flex items-center gap-2.5 px-9 py-3 bg-gradient-to-r from-[#FFFDF9] via-white to-[#FFFDF9] text-[#C92A42] hover:text-white hover:from-[#C92A42] hover:to-[#A81B32] border border-[#C59B55]/60 hover:border-[#C92A42] rounded-full text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
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
