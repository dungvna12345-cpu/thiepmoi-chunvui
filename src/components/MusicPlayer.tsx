'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc3 } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log('Audio autoplay prevented by browser policy until user gesture:', e);
        });
    }
  }, [autoPlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      {/* Label hint on hover */}
      <div className={`hidden md:flex items-center px-4 py-2 rounded-full text-xs font-serif tracking-wide transition-all duration-300 shadow-md ${
        isPlaying ? 'bg-white text-[#8F1724] border border-[#D8B45F]/60' : 'bg-white/95 text-[#736266] border border-[#EFE6D8]'
      }`}>
        <Music className="w-3.5 h-3.5 mr-1.5 text-[#8F1724] animate-bounce" strokeWidth={1.6} />
        <span className="font-medium">{isPlaying ? 'Em Đồng Ý (I Do) • Đức Phúc ♫' : 'Bật nhạc đám cưới'}</span>
      </div>

      {/* Floating Vinyl Disc Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Tắt nhạc Em Đồng Ý (I Do)' : 'Bật nhạc Em Đồng Ý (I Do)'}
        className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-1 transition-transform duration-300 hover:scale-110 active:scale-95 shadow-[0_8px_25px_rgba(143,23,36,0.35)] cursor-pointer ${
          isPlaying ? 'ring-2 ring-[#D8B45F] ring-offset-2 ring-offset-[#351F1D]' : ''
        }`}
        style={{
          background: 'linear-gradient(145deg, #A51D2D, #641D24)',
          border: '2px solid #D8B45F',
        }}
      >
        {/* Revolving Vinyl Record */}
        <div
          className={`w-full h-full rounded-full flex items-center justify-center relative overflow-hidden ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{
            animationDuration: '4s',
            background: 'radial-gradient(circle, #8F1724 15%, #641D24 40%, #351F1D 85%, #241113 100%)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5)',
          }}
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute inset-3.5 rounded-full border border-white/15 pointer-events-none" />
          
          {/* Center gold icon */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#E4CC86] to-[#D8B45F] flex items-center justify-center text-[#641D24] shadow-sm">
            {isPlaying ? (
              <Volume2 className="w-3 h-3 text-[#641D24]" strokeWidth={2} />
            ) : (
              <VolumeX className="w-3 h-3 text-[#641D24]" strokeWidth={2} />
            )}
          </div>
        </div>

        {/* Floating music note bubble when playing */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B45F] opacity-80"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D8B45F] border border-white"></span>
          </span>
        )}
      </button>

      {/* Audio element with multiple format support */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/em_dong_y_i_do.webm" type="audio/webm" />
        <source src="/audio/em_dong_y_i_do.m4a" type="audio/mp4" />
      </audio>
    </div>
  );
}


