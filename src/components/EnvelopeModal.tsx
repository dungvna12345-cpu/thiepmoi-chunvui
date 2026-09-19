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

        {/* 2. REALISTIC 3D POCKET ENVELOPE */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[300px] sm:w-[360px] h-[220px] sm:h-[250px] cursor-pointer group my-2"
          style={{ perspective: '1200px' }}
        >
          {/* ENVELOPE BACKDROP CONTAINER */}
          <div className="relative w-full h-full bg-[#E8DDD0] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-[#D5C6B5] overflow-visible">
            
            {/* INNER LINER PAPER */}
            <div className="absolute inset-0 bg-[#FAF4EC] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C59B55_1px,transparent_1px)] [background-size:12px_12px]" />
            </div>

            {/* ============================================================= */}
            {/* INNER PHOTO CARD - HIỂN THỊ RÕ MẶT CÔ DÂU CHÚ RỂ               */}
            {/* ============================================================= */}
            <div
              className={`absolute inset-x-4 top-4 h-[210px] sm:h-[240px] bg-white rounded-xl shadow-lg border-2 border-[#EFE6D8] p-2 flex flex-col items-center transition-all duration-1000 ease-out z-10 ${
                isOpening
                  ? '-translate-y-28 sm:-translate-y-36 scale-105 shadow-2xl z-40'
                  : '-translate-y-8 sm:-translate-y-10 group-hover:-translate-y-14'
              }`}
            >
              {/* Photo inside the invitation card (Vertical Portrait photo where faces are clearly in view) */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-stone-100 border border-[#C59B55]/30 shadow-inner">
                <Image
                  src="/images/wedding_opt/H2H09645.jpg"
                  alt="Thành Nhớ & Ngọc Ngân"
                  fill
                  sizes="340px"
                  className="object-cover object-top filter brightness-[1.01] contrast-[1.02]"
                  priority
                />
              </div>
            </div>

            {/* ============================================================= */}
            {/* ENVELOPE FRONT POCKET FOLD (MẶT TRƯỚC PHONG BÌ)               */}
            {/* ============================================================= */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(to bottom, transparent 38%, #ECE0D2 39%, #E0D0BE 100%)',
                clipPath: 'polygon(0% 38%, 50% 72%, 100% 38%, 100% 100%, 0% 100%)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6)',
              }}
            />

            {/* Left & Right Fold Subtle Shadows */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(190,170,150,0.4) 0%, transparent 60%)',
                clipPath: 'polygon(0 38%, 50% 72%, 0 100%)',
              }}
            />
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(-135deg, rgba(190,170,150,0.4) 0%, transparent 60%)',
                clipPath: 'polygon(100% 38%, 50% 72%, 100% 100%)',
              }}
            />

            {/* ============================================================= */}
            {/* TOP TRIANGLE FLAP (NẮP PHONG BÌ MỞ 3D)                         */}
            {/* ============================================================= */}
            <div
              className={`absolute inset-x-0 top-0 h-[105px] sm:h-[120px] origin-top transition-transform duration-700 ease-in-out z-30 pointer-events-none ${
                isOpening ? '[transform:rotateX(-180deg)]' : '[transform:rotateX(0deg)]'
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute inset-0 bg-[#E8DDD0] border-t border-[#D5C6B5]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                }}
              />
            </div>

            {/* ============================================================= */}
            {/* BRONZE / GOLD WAX SEAL (CON DẤU SÁP CHÍNH GIỮA)              */}
            {/* ============================================================= */}
            <div
              className={`absolute top-[85px] sm:top-[98px] left-1/2 -translate-x-1/2 z-30 transition-all duration-500 ${
                isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E2B96A] via-[#C59B55] to-[#8C6225] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(140,98,37,0.5)] border-2 border-[#FFE8A3] ring-2 ring-[#C59B55]/60 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 fill-white/90 text-white/90 drop-shadow-xs" />
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
