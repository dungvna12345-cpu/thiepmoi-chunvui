'use client';

import React from 'react';

/**
 * Biểu tượng Song Hỷ (囍) mạ vàng hoàng gia
 */
export function SongHyEmblem({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-base',
    lg: 'w-12 h-12 text-xl',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border border-[#D4AF37] text-[#7A152C] shadow-sm select-none font-bold font-serif ${sizeClasses[size]} ${className}`}
      title="Song Hỷ - Vĩnh Kết Đồng Tâm"
    >
      囍
    </div>
  );
}

/**
 * Biểu tượng Đôi Chim Én Báo Hỷ (Flying Swallows) bay lượn trên thiệp cưới
 */
export function FlyingSwallows({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={`fill-none stroke-[#D4AF37] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chim én trái */}
      <path
        d="M15,25 Q25,12 35,18 Q42,22 45,15 Q40,25 32,26 Q24,27 15,25 Z"
        fill="#D4AF37"
        opacity="0.85"
      />
      <path
        d="M28,20 Q20,10 12,12 Q22,16 28,20 Z"
        fill="#D4AF37"
        opacity="0.7"
      />
      
      {/* Chim én phải */}
      <path
        d="M85,22 Q75,10 65,16 Q58,20 55,14 Q60,23 68,24 Q76,25 85,22 Z"
        fill="#D4AF37"
        opacity="0.85"
      />
      <path
        d="M72,18 Q80,8 88,10 Q78,14 72,18 Z"
        fill="#D4AF37"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Con dấu sáp đỏ rượu dát vàng (Wax Seal Stamp)
 */
export function WaxSealStamp({ monogram = 'TN & NN', className = '' }: { monogram?: string; className?: string }) {
  return (
    <div
      className={`relative rounded-full flex flex-col items-center justify-center select-none shadow-[0_6px_16px_rgba(122,21,44,0.35)] ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #b82e4e 0%, #7a152c 55%, #4a0c1a 100%)',
        border: '1.5px solid #d4af37',
      }}
    >
      <div className="w-[85%] h-[85%] rounded-full border border-[#d4af37]/60 flex flex-col items-center justify-center text-center p-0.5">
        <span className="text-[7px] tracking-widest text-[#f1dc98] font-serif uppercase leading-none mb-0.5">
          WEDDING
        </span>
        <span className="text-[8px] sm:text-[9px] font-bold text-white font-script tracking-wider leading-none">
          {monogram}
        </span>
      </div>
    </div>
  );
}

/**
 * Băng dính Washi Tape đính góc ảnh Polaroid
 */
export function WashiTape({ className = '', tilt = '-2deg' }: { className?: string; tilt?: string }) {
  return (
    <div
      className={`w-20 sm:w-24 h-5 sm:h-6 bg-[#FAF1E3]/85 border-l-2 border-r-2 border-[#D4AF37]/50 shadow-sm backdrop-blur-[1px] z-20 pointer-events-none ${className}`}
      style={{
        transform: `rotate(${tilt})`,
      }}
    />
  );
}
