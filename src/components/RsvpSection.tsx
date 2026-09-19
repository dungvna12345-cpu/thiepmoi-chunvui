'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { addRsvp } from '@/lib/supabaseClient';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
} from '@/components/WatermarkDecorations';

export default function RsvpSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [side, setSide] = useState<'groom' | 'bride'>('groom');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestsCount, setGuestsCount] = useState(1);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      await addRsvp({
        name: name.trim(),
        phone: phone.trim(),
        side,
        guests_count: attending === 'yes' ? guestsCount : 0,
        attending,
        note: note.trim(),
      });

      setIsSuccess(true);

      if (attending === 'yes') {
        try {
          confetti({
            particleCount: 40,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#E84D67', '#D4AF37', '#FFD1DC', '#FFFDF9'],
          });
        } catch {}
      }
    } catch {
      alert('Có lỗi xảy ra khi xác nhận, vui lòng thử lại sau!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FAF5EE] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>R.S.V.P &bull; Thiệp Hồi Đáp</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Xác Nhận Tham Dự
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light leading-relaxed">
              Để gia đình đón tiếp chu đáo và trọn vẹn nhất, kính mong Quý khách gửi phản hồi trước ngày <strong>25 . 09 . 2026</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* The Reply Card (Carte-réponse) Container */}
        <ScrollReveal animation="zoom-in" duration={850} delay={200}>
          <div className="bg-white p-6 sm:p-12 border border-[#EFE6D8] shadow-[0_20px_50px_-15px_rgba(201,42,66,0.08)] relative rounded-xs overflow-visible">
            
            {/* ĐÍNH HOA NHỎ XINH */}
            <AttachedSmallFlower position="top-right" size="small" />

            {/* Chìm Hoa Hồng Vàng Nét Vẽ */}
            <GoldRoseWatermark position="bottom-left" opacity={0.06} size="medium" />

            {/* Inner Hairline Frame */}
            <div className="absolute inset-2 sm:inset-3 border border-[#C59B55]/20 pointer-events-none rounded-2xs" />

            {isSuccess ? (
              <div className="py-12 text-center space-y-4 font-serif relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#C92A42] text-white mx-auto flex items-center justify-center mb-2 shadow-md">
                  <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#2C2224] font-normal">
                  {attending === 'yes' ? 'Hân Hạnh Đón Tiếp Quý Khách' : 'Chân Thành Cảm Ơn Quý Khách'}
                </h3>
                <p className="text-xs sm:text-sm text-[#736266] max-w-md mx-auto leading-relaxed font-light">
                  {attending === 'yes'
                    ? `Cảm ơn bạn ${name} đã xác nhận tham dự. Chúng mình rất mong chờ được gặp bạn vào ngày 28-29/09/2026!`
                    : `Cảm ơn bạn ${name} đã gửi lời hồi đáp. Dù tiếc nuối khi bạn không thể có mặt, chúng mình vẫn luôn trân trọng tình cảm của bạn!`}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-white hover:bg-[#FFF0F3] text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/60 hover:border-[#C92A42] text-xs uppercase tracking-widest font-serif font-semibold transition-all rounded-xs shadow-xs"
                >
                  Gửi Lại Phản Hồi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-serif">
                
                {/* Attendance Toggle */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C92A42] font-semibold mb-3">
                    Sự Hiện Diện Của Quý Khách *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`p-3.5 text-xs text-left border rounded-xs transition-all flex items-center justify-between ${
                        attending === 'yes'
                          ? 'bg-[#C92A42] text-white border-[#C92A42] font-medium shadow-xs'
                          : 'bg-[#FFFDF9] text-[#2C2224] border-[#EFE6D8] hover:border-[#C92A42]'
                      }`}
                    >
                      <span>Chắc chắn sẽ tham dự</span>
                      <span className={`text-[10px] uppercase font-semibold ${attending === 'yes' ? 'text-white' : 'text-[#C59B55]'}`}>❖ Có Mặt</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`p-3.5 text-xs text-left border rounded-xs transition-all flex items-center justify-between ${
                        attending === 'no'
                          ? 'bg-[#C92A42] text-white border-[#C92A42] font-medium shadow-xs'
                          : 'bg-[#FFFDF9] text-[#2C2224] border-[#EFE6D8] hover:border-[#C92A42]'
                      }`}
                    >
                      <span>Rất tiếc không thể tham dự</span>
                      <span className={`text-[10px] uppercase ${attending === 'no' ? 'text-white/80' : 'text-[#736266]'}`}>Gửi Lời Chúc</span>
                    </button>
                  </div>
                </div>

                {/* Side Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C92A42] font-semibold mb-2">
                    Khách Mời Của Ai *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSide('groom')}
                      className={`py-2.5 px-3 text-xs border text-center transition-colors rounded-xs ${
                        side === 'groom'
                          ? 'bg-[#C92A42] text-white border-[#C92A42] font-medium shadow-2xs'
                          : 'bg-[#FFFDF9] text-[#2C2224] border-[#EFE6D8] hover:border-[#C92A42]'
                      }`}
                    >
                      Khách Nhà Trai (Thành Nhớ)
                    </button>

                    <button
                      type="button"
                      onClick={() => setSide('bride')}
                      className={`py-2.5 px-3 text-xs border text-center transition-colors rounded-xs ${
                        side === 'bride'
                          ? 'bg-[#C92A42] text-white border-[#C92A42] font-medium shadow-2xs'
                          : 'bg-[#FFFDF9] text-[#2C2224] border-[#EFE6D8] hover:border-[#C92A42]'
                      }`}
                    >
                      Khách Nhà Gái (Ngọc Ngân)
                    </button>
                  </div>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs rounded-xs"
                    />
                  </div>
                </div>

                {/* Number of Guests (if attending) */}
                {attending === 'yes' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                      Số người tham dự
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestsCount(num)}
                          className={`flex-1 py-2 text-xs border rounded-xs transition-colors ${
                            guestsCount === num
                              ? 'bg-[#C92A42] text-white border-[#C92A42] font-semibold shadow-2xs'
                              : 'bg-[#FFFDF9] text-[#2C2224] border-[#EFE6D8] hover:border-[#C92A42]'
                          }`}
                        >
                          {num} người
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note / Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                    Ghi chú hoặc lời nhắn riêng
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ghi chú về chế độ ăn uống hoặc lời nhắn..."
                    className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs leading-relaxed resize-none rounded-xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C92A42] hover:bg-[#A81B32] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 rounded-xs shadow-md shadow-rose-900/15"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>{isSubmitting ? 'Đang gửi phản hồi...' : 'Xác Nhận Tham Dự'}</span>
                </button>

              </form>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

