'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';
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
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D8B45F', '#E4CC86', '#A51D2D', '#FFF9ED', '#641D24'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.4 },
          colors: ['#E4CC86', '#D8B45F', '#FFFFFF', '#8F1724'],
        });
      }, 250);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1250);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 select-none transition-all duration-700 backdrop-blur-md cursor-pointer overflow-y-auto ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-[#2A0F13]/92'
      }`}
      style={{
        minHeight: '100svh',
        background: 'radial-gradient(ellipse at center, #5A1620 0%, #3B1117 55%, #220A0E 100%)',
      }}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Ambient Luxury Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,95,0.18)_0%,transparent_65%)] pointer-events-none" />

      {/* Floating Background Petals */}
      <div className="absolute top-8 left-6 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-70 -rotate-12 animate-pulse">
        <Image
          src="/images/envelope_layers/petal_1.png"
          alt="Rose Petal"
          fill
          sizes="64px"
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-16 left-8 w-14 sm:w-20 h-14 sm:h-20 pointer-events-none opacity-60 rotate-45">
        <Image
          src="/images/envelope_layers/petal_2.png"
          alt="Rose Petal"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>
      <div className="absolute top-16 right-8 w-14 sm:w-18 h-14 sm:h-18 pointer-events-none opacity-65 rotate-12">
        <Image
          src="/images/envelope_layers/petal_3.png"
          alt="Rose Petal"
          fill
          sizes="72px"
          className="object-contain"
        />
      </div>

      {/* Main Luxury Stage Container */}
      <div
        className="relative w-full max-w-[390px] sm:max-w-[430px] flex flex-col items-center text-center z-20 my-auto py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION: Calligraphy & Couple Names                             */}
        {/* ========================================================================= */}
        <div className="mb-2 sm:mb-3 text-center drop-shadow-md">
          <h1 className="font-script text-4xl sm:text-5xl text-[#FFF5E8] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] tracking-wide leading-tight">
            Ngày Chung Đôi
          </h1>
          
          <div className="flex items-center justify-center gap-2.5 mt-1 text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#E7D5C2]">
            <span className="w-7 sm:w-9 h-[1px] bg-[#D8B45F]/70" />
            <span className="font-medium">{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-7 sm:w-9 h-[1px] bg-[#D8B45F]/70" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MULTI-LAYER 3D ENVELOPE STAGE                                          */}
        {/* ========================================================================= */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[320px] sm:w-[365px] h-[320px] sm:h-[365px] cursor-pointer group my-1 select-none"
        >
          {/* LAYER 1: ENVELOPE BACK & OPEN FLAP (NẮP & LÒNG PHONG BÌ ĐỎ NHUNG) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/envelope_layers/envelope_back_unified.png"
              alt="Envelope Back"
              fill
              sizes="365px"
              className="object-contain"
              priority
            />
          </div>

          {/* LAYER 2: CÀNH HOA HỒNG GÀI PHÍA SAU THIỆP */}
          <div className="absolute top-[8%] -left-3 sm:-left-5 w-28 sm:w-34 h-38 sm:h-46 pointer-events-none z-15 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6 -rotate-12 drop-shadow-xl">
            <Image
              src="/images/decor/red_rose_branch_decor.webp"
              alt="Red Rose Branch"
              fill
              sizes="150px"
              className="object-contain"
              priority
            />
          </div>

          {/* ======================================================================= */}
          {/* LAYER 3: THE WEDDING INVITATION CARD (TẤM THIỆP CƯỚI RÚT RA)            */}
          {/* ======================================================================= */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[215px] sm:w-[245px] bg-[#FFFDF9] p-2.5 sm:p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-[#D8B45F]/70 transition-all duration-700 ease-out z-20 ${
              isOpening
                ? '-translate-y-28 rotate-0 scale-105 shadow-2xl'
                : 'top-[22%] -rotate-[2.5deg] group-hover:-translate-y-3 group-hover:-rotate-1'
            }`}
            style={{ transformOrigin: 'bottom center' }}
          >
            {/* Kẹp tim vàng tinh xảo ở góc trên bên trái tấm ảnh */}
            <div className="absolute -top-2.5 left-3.5 z-30 pointer-events-none drop-shadow-md">
              <svg width="22" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C8 0 2 3 2 9C2 15 12 23 12 23C12 23 22 15 22 9C22 3 16 0 12 4Z" stroke="#D8B45F" strokeWidth="2.5" fill="#E4CC86" fillOpacity="0.4" />
                <path d="M12 7C9.5 4 5 6 5 10C5 14 12 20 12 20C12 20 19 14 19 10C19 6 14.5 4 12 7Z" stroke="#D8B45F" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 1. KHUNG ẢNH LỄ ĐƯỜNG KIẾN TRÚC */}
            <div className="relative w-full aspect-[4/4.6] rounded-xl overflow-hidden bg-stone-100 border border-[#D8B45F]/40 shadow-inner">
              <Image
                src="/images/wedding_opt/H2H08970.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="260px"
                className="object-cover object-[center_60%] filter brightness-[1.02] contrast-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351F1D]/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 2. THÔNG TIN NGÀY CƯỚI TRÊN THIỆP */}
            <div className="pt-2 pb-1 text-center font-serif">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8F1724] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#641D24] font-semibold tracking-widest leading-tight mt-0.5">
                29 &bull; 09 &bull; 2026
              </p>
              <p className="text-[9px] text-[#736266] italic font-medium">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* LAYER 4: ENVELOPE FRONT FLAP POCKET (THÂN TRƯỚC PHONG BÌ CHỨA THIỆP) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-30 drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/envelope_layers/envelope_front_unified.png"
              alt="Envelope Front"
              fill
              sizes="365px"
              className="object-contain"
              priority
            />
          </div>

          {/* LAYER 5: WAX SEAL VÀNG KIM TRÁI TIM (DẬP TRÊN MIỆNG PHONG BÌ) */}
          <div
            className={`absolute top-[52%] left-1/2 -translate-x-1/2 w-14 sm:w-16 h-14 sm:h-16 pointer-events-none z-40 transition-all duration-400 drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)] ${
              isOpening ? 'scale-125 opacity-0' : 'scale-100 opacity-100 group-hover:scale-110 animate-[pulse_3.5s_ease-in-out_infinite]'
            }`}
          >
            <Image
              src="/images/envelope_layers/wax_seal_gold.png"
              alt="Golden Heart Wax Seal"
              fill
              sizes="70px"
              className="object-contain"
              priority
            />
          </div>

          {/* LAYER 6: BÓ HOA CƯỚI ĐỎ & RUY BĂNG GÓC DƯỚI BÊN PHẢI */}
          <div className="absolute -bottom-2 -right-4 sm:-right-7 w-32 sm:w-38 h-32 sm:h-38 pointer-events-none z-45 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_12px_25px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/envelope_layers/rose_bouquet.png"
              alt="Red Rose Bouquet"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CTA BUTTON & HELPER TEXT SECTION                                       */}
        {/* ========================================================================= */}
        <div className="mt-3 sm:mt-4 space-y-2 flex flex-col items-center">
          {/* Primary Luxury CTA Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="w-[240px] sm:w-[270px] h-[52px] sm:h-[56px] inline-flex items-center justify-center gap-2.5 px-6 bg-gradient-to-r from-[#FFF9ED] via-white to-[#F7F0DF] text-[#8F1724] hover:text-[#641D24] border-[1.5px] border-[#D8B45F] rounded-full text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
            aria-label="Mở thiệp cưới"
          >
            <Mail className="w-4 h-4 text-[#8F1724]" />
            <span>Mở Thiệp Cưới</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D8B45F]" />
          </button>

          {/* Helpful Subtitle */}
          <p className="text-[11px] text-[#E7D5C2]/75 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào phong bì hoặc nhấn mở thiệp để bắt đầu
          </p>
        </div>

      </div>
    </div>
  );
}

