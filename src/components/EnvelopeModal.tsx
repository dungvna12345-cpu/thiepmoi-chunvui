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
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#FFD782', '#A81B32', '#FFFDF9', '#700B1A'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.4 },
          colors: ['#FFE8A3', '#D4AF37', '#FFFFFF'],
        });
      }, 250);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1100);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 select-none transition-all duration-700 backdrop-blur-lg cursor-pointer ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-black/75'
      }`}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Dynamic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,27,50,0.25)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Luxury Stage */}
      <div
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center text-center z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP EDITORIAL CALLIGRAPHY */}
        <div className="mb-4 sm:mb-5 animate-fade-in text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#FFE8A3] font-medium drop-shadow-md mb-1">
            Trân Trọng Báo Tin Hôn Lễ
          </p>
          <h1 className="font-script text-5xl sm:text-6xl text-[#FFFDF9] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] tracking-wide">
            Thư Mời Cưới
          </h1>
          <div className="flex items-center justify-center gap-3 mt-1.5 text-xs font-serif uppercase tracking-[0.25em] text-[#FFE8A3]/90">
            <span className="w-8 h-[1px] bg-[#FFE8A3]/60" />
            <span>{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-8 h-[1px] bg-[#FFE8A3]/60" />
          </div>
        </div>

        {/* 2. ULTRA-LUXURY BURGUNDY & GOLD FOIL INVITATION CARD */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[300px] sm:w-[350px] cursor-pointer group my-2 transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Main Card Frame with Double Gold Foil Border & Burgundy Velvet Background */}
          <div
            className={`relative w-full bg-gradient-to-b from-[#660A16] via-[#7D0E1D] to-[#500610] rounded-2xl p-4 sm:p-5 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8)] border-2 border-[#D4AF37] ring-4 ring-[#C59B55]/20 ring-offset-2 ring-offset-black transition-all duration-700 ${
              isOpening ? '-translate-y-8 scale-105 shadow-[0_35px_80px_rgba(212,175,55,0.4)]' : ''
            }`}
          >
            {/* Delicate Inner Gold Hairline Border */}
            <div className="absolute inset-2 border border-[#FFE8A3]/40 rounded-xl pointer-events-none z-10" />

            {/* Corner Gold Flourishes (4 Góc Khắc Kim Hoàng Gia) */}
            <div className="absolute top-2.5 left-2.5 text-[#FFE8A3]/80 text-[10px] pointer-events-none z-10 font-serif">✤</div>
            <div className="absolute top-2.5 right-2.5 text-[#FFE8A3]/80 text-[10px] pointer-events-none z-10 font-serif">✤</div>
            <div className="absolute bottom-2.5 left-2.5 text-[#FFE8A3]/80 text-[10px] pointer-events-none z-10 font-serif">✤</div>
            <div className="absolute bottom-2.5 right-2.5 text-[#FFE8A3]/80 text-[10px] pointer-events-none z-10 font-serif">✤</div>

            {/* A. COUPLE PORTRAIT PHOTO (Cắt cúp nghệ thuật tôn vinh cô dâu chú rể) */}
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border-2 border-[#FFE8A3]/80 shadow-md bg-stone-900">
              <Image
                src="/images/wedding_opt/H2H08970.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="340px"
                className="object-cover object-center filter brightness-[1.02] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Subtle Gold Dust Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#500610]/80 via-transparent to-transparent pointer-events-none" />

              {/* Photo Bottom Caption */}
              <div className="absolute inset-x-0 bottom-2 text-center text-white pointer-events-none z-10">
                <p className="font-script text-2xl text-[#FFE8A3] drop-shadow-md leading-none">
                  Thành Nhớ &amp; Ngọc Ngân
                </p>
              </div>
            </div>

            {/* B. DATE & CEREMONY BADGE */}
            <div className="mt-3.5 pt-2 text-center text-[#FFE8A3] font-serif space-y-0.5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#FFE8A3]/80 font-medium">
                Lễ Thành Hôn
              </p>
              <p className="text-lg sm:text-xl font-heading text-[#FFFDF9] font-normal tracking-widest drop-shadow-sm">
                29 &bull; 09 &bull; 2026
              </p>
              <p className="text-[11px] text-[#FFE8A3]/75 italic font-light">
                Hà Nội &bull; Hưng Yên
              </p>
            </div>

            {/* C. ROYAL GOLD WAX SEAL MONOGRAM */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 transition-transform group-hover:scale-110">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FFE8A3] via-[#D4AF37] to-[#8C6225] text-[#660A16] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.6)] border-2 border-[#FFFDF9] ring-2 ring-[#D4AF37]">
                <Heart className="w-5 h-5 fill-[#660A16] text-[#660A16]" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. INVITATION FOOTER & INTERACTIVE OPEN BUTTON */}
        <div className="mt-7 sm:mt-8 space-y-2.5">
          {/* Interactive Open Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="inline-flex items-center gap-2.5 px-9 py-3 bg-gradient-to-r from-[#FFE8A3] via-[#D4AF37] to-[#C59B55] text-[#500610] hover:text-white hover:from-[#7D0E1D] hover:to-[#500610] border-2 border-[#FFE8A3] rounded-full text-xs font-serif uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#500610] group-hover:text-white animate-pulse" />
            <span>Mở Thiệp Cưới</span>
          </button>

          <p className="text-[11px] text-[#FFE8A3]/80 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào thiệp hoặc nhấn mở thiệp để bắt đầu
          </p>
        </div>

      </div>
    </div>
  );
}


