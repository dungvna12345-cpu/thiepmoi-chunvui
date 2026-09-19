'use client';

import React, { useState, useEffect } from 'react';
import { Send, Feather, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWishes, addWish, WeddingWish } from '@/lib/supabaseClient';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
} from '@/components/WatermarkDecorations';

const BLESSING_TAGS = [
  'Trăm Năm Hạnh Phúc',
  'Bách Niên Giai Lão',
  'Vĩnh Kết Đồng Tâm',
  'Phu Thê Hòa Thuận',
  'Phước Lộc Trọn Vẹn',
];

export default function WishesSection() {
  const [wishes, setWishes] = useState<WeddingWish[]>([]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Bạn bè');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Trăm Năm Hạnh Phúc');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatusMessage('Vui lòng nhập họ tên và lời chúc của bạn nhé!');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const savedWish = await addWish({
        name: name.trim(),
        relation,
        message: message.trim(),
        emoji: selectedTag,
      });

      setWishes((prev) => [savedWish, ...prev]);
      setName('');
      setMessage('');
      setStatusMessage('Cảm ơn lời chúc ngọt ngào và tốt đẹp của bạn!');

      // Dispatch live toast event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('wedding_new_wish', { detail: savedWish }));
      }

      try {
        confetti({
          particleCount: 35,
          spread: 65,
          origin: { y: 0.7 },
          colors: ['#E84D67', '#D4AF37', '#FFD1DC', '#FFFDF9'],
        });
      } catch {}
    } catch {
      setStatusMessage('Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes-section" className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] border-t border-[#EFE6D8] text-[#2C2224] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-right" opacity={0.08} />
      <CornerFloralWatermark position="bottom-left" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Sổ Lưu Bút &bull; Lời Chúc Phúc</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Gửi Lời Chúc Phúc
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm font-serif italic text-[#736266] mt-2 max-w-md mx-auto font-light leading-relaxed">
              Mỗi lời chúc chân thành từ Quý vị là mảnh ghép thiêng liêng vun đắp cho tổ ấm hạnh phúc của chúng tôi.
            </p>
          </div>
        </ScrollReveal>

        {/* Input Form Card */}
        <ScrollReveal animation="fade-up" duration={800} delay={200}>
          <div className="bg-white p-6 sm:p-10 border border-[#EFE6D8] shadow-[0_15px_40px_-15px_rgba(201,42,66,0.08)] mb-14 rounded-xs relative overflow-visible">
            
            {/* ĐÍNH HOA NHỎ XINH */}
            <AttachedSmallFlower position="top-right" size="tiny" />
            <GoldRoseWatermark position="bottom-right" opacity={0.05} size="small" />

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              {/* Tag Selection */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#C92A42] font-semibold mb-2.5">
                  Thông Điệp Chúc Mừng
                </label>
                <div className="flex flex-wrap gap-2">
                  {BLESSING_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-serif transition-all duration-200 ${
                        selectedTag === tag
                          ? 'bg-[#C92A42] text-white shadow-xs font-medium'
                          : 'bg-[#FFFDF9] text-[#736266] border border-[#EFE6D8] hover:border-[#C92A42] hover:text-[#C92A42]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs: Name & Relationship */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Anh Tuấn, Cô Lan..."
                    className="w-full px-4 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs font-serif rounded-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                    Mối quan hệ với cô dâu chú rể
                  </label>
                  <select
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs font-serif rounded-xs transition-colors"
                  >
                    <option value="Bạn bè">Bạn bè thân thiết</option>
                    <option value="Đồng nghiệp">Đồng nghiệp</option>
                    <option value="Họ hàng nhà trai">Họ hàng nhà trai</option>
                    <option value="Họ hàng nhà gái">Họ hàng nhà gái</option>
                    <option value="Anh chị em">Anh chị em</option>
                    <option value="Khách quý">Khách quý gia đình</option>
                  </select>
                </div>
              </div>

              {/* Message Area */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#2C2224] font-medium mb-1">
                  Lời chúc gửi tới Thành Nhớ &amp; Ngọc Ngân *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Viết lời chúc ý nghĩa của bạn tại đây..."
                  className="w-full px-4 py-2.5 bg-[#FFFDF9] border border-[#EFE6D8] focus:border-[#C92A42] focus:bg-white focus:outline-none text-xs font-serif leading-relaxed resize-none rounded-xs transition-colors"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className="p-3 bg-[#FFF0F3] border border-[#C92A42]/30 text-xs font-serif text-[#C92A42] text-center font-medium rounded-xs">
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#C92A42] hover:bg-[#A81B32] text-white text-xs font-serif uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 rounded-xs shadow-md shadow-rose-900/15"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>{isSubmitting ? 'Đang gửi lời chúc...' : 'Gửi Lời Chúc Mừng'}</span>
              </button>

            </form>
          </div>
        </ScrollReveal>

        {/* Wishes Stream Feed */}
        <ScrollReveal animation="fade-up" duration={800} delay={300}>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE6D8] text-xs font-serif">
              <span className="text-[#2C2224] font-heading text-xl font-normal">
                Sổ Lưu Bút ({wishes.length})
              </span>
              <span className="text-[#736266] text-[11px] italic font-light">
                Mới nhất
              </span>
            </div>

            <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="p-4 sm:p-5 bg-white border border-[#EFE6D8] space-y-1.5 font-serif rounded-xs shadow-2xs hover:border-[#C59B55]/60 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#2C2224]">
                        {w.name}
                      </span>
                      <span className="text-[10px] text-[#736266] uppercase tracking-wider">
                        ({w.relation})
                      </span>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 bg-[#FFFDF9] border border-[#EFE6D8] text-[#C59B55] tracking-wider uppercase font-medium rounded-full">
                      {w.emoji}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C4A4E] leading-relaxed pt-1 font-light">
                    {w.message}
                  </p>

                  <div className="text-[10px] text-[#736266]/70 pt-1 text-right italic font-light">
                    {new Date(w.created_at).toLocaleDateString('vi-VN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

