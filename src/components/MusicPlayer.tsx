'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-113280.mp3";

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.log('Audio autoplay prevented by browser policy until interaction:', e);
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
        isPlaying ? 'bg-white text-[#C92A42] border border-[#C59B55]/50' : 'bg-white/95 text-[#736266] border border-[#EFE6D8]'
      }`}>
        <Music className="w-3.5 h-3.5 mr-1.5 text-[#C92A42]" strokeWidth={1.6} />
        <span className="font-medium">{isPlaying ? 'Bản nhạc tình yêu đang phát' : 'Bật nhạc đám cưới'}</span>
      </div>

      {/* Floating Vinyl Disc Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-1 transition-transform duration-300 hover:scale-110 active:scale-95 shadow-[0_8px_25px_rgba(201,42,66,0.3)] ${
          isPlaying ? 'animate-pulse-glow' : ''
        }`}
        style={{
          background: 'linear-gradient(145deg, #E0475E, #C92A42)',
          border: '2px solid #FFD782',
        }}
      >
        {/* Revolving Vinyl Record */}
        <div
          className={`w-full h-full rounded-full flex items-center justify-center relative overflow-hidden ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
          style={{
            background: 'radial-gradient(circle, #F43F5E 15%, #C92A42 35%, #881337 80%, #9F1239 100%)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.3)',
          }}
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-2 rounded-full border border-white/25 pointer-events-none" />
          <div className="absolute inset-3.5 rounded-full border border-white/20 pointer-events-none" />
          
          {/* Center gold icon */}
          <div className="w-5 h-5 rounded-full bg-[#FFD782] flex items-center justify-center text-[#881337] shadow-sm">
            {isPlaying ? (
              <Volume2 className="w-3 h-3 text-[#881337]" strokeWidth={1.8} />
            ) : (
              <VolumeX className="w-3 h-3 text-[#881337]" strokeWidth={1.8} />
            )}
          </div>
        </div>

        {/* Floating music note bubble when playing */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD782] opacity-80"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFD782] border border-white"></span>
          </span>
        )}
      </button>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />
    </div>
  );
}

