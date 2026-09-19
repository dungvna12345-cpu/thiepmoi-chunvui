'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { CornerFloralWatermark, BotanicalDivider, HeartDamaskWatermark } from '@/components/WatermarkDecorations';

interface Milestone {
  chapter: string;
  number: string;
  time: string;
  title: string;
  desc: string;
  image: string;
  location: string;
}

const MILESTONES: Milestone[] = [
  {
    chapter: 'Chương 01',
    number: '01',
    time: 'Tháng 10 / 2021',
    title: 'Khoảnh Khắc Chạm Ánh Mắt',
    desc: 'Một chiều thu dịu mát trong quán trà ấm cúng, giây phút hai ánh mắt vô tình chạm nhau đã gieo vào lòng hạt mầm tình yêu thuần khiết. Giữa vạn người qua lại, định mệnh đã an bài để chúng mình tìm thấy nhau.',
    image: '/images/wedding_opt/H2H09145.jpg',
    location: 'Hà Nội',
  },
  {
    chapter: 'Chương 02',
    number: '02',
    time: 'Tháng 05 / 2022',
    title: 'Hò Hẹn Dưới Ánh Hoàng Hôn',
    desc: 'Những chuyến đi dài cùng nhau, những câu chuyện không bao giờ dứt bên tách cà phê sáng hay bờ biển lúc ráng chiều buông. Cái nắm tay đầu tiên ngượng ngùng dần trở thành điểm tựa vững chãi nhất cuộc đời.',
    image: '/images/wedding_opt/H2H09190.jpg',
    location: 'Đà Lạt & Biển Chiều',
  },
  {
    chapter: 'Chương 03',
    number: '03',
    time: 'Tháng 12 / 2025',
    title: 'Lời Cầu Hôn Dưới Ánh Nến',
    desc: 'Dưới ánh nến lung linh và sắc hoa ngập tràn yêu thương, chú rể Thành Nhớ trao chiếc nhẫn kim cương cùng lời hứa son sắt trọn đời: "Hãy để anh được chăm sóc và yêu thương em suốt kiếp này". Và câu trả lời nghẹn ngào trong hạnh phúc: "Em đồng ý!"',
    image: '/images/wedding_opt/H2H08466.jpg',
    location: 'Sài Gòn',
  },
  {
    chapter: 'Chương 04',
    number: '04',
    time: '29 Tháng 09 / 2026',
    title: 'Ngày Chung Đôi Viên Mãn',
    desc: 'Chính thức nắm chặt tay nhau bước vào thánh đường, cùng viết nên trang đời rực rỡ nhất trước sự chứng kiến và chúc phúc của hai bên gia đình, bạn bè thân quý.',
    image: '/images/wedding_opt/H2H08137.jpg',
    location: 'Lễ Thành Hôn',
  },
];

export default function LoveStorySection() {
  return (
    <section id="love-story-section" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FAF4EC] border-t border-[#EFE6D8] relative overflow-hidden select-none">
      
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-right" opacity={0.08} />
      <CornerFloralWatermark position="bottom-left" opacity={0.08} />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Hành Trình Yêu &bull; Love Story</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal">
              Ký Ức Tình Yêu
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-[#736266] font-serif mt-2 max-w-md mx-auto font-light">
              Từng trang ký ức gom góp thành bức tranh tình yêu ngọt ngào, sâu lắng và trọn vẹn hôm nay.
            </p>
          </div>
        </ScrollReveal>

        {/* Unified Editorial Journal Spreads */}
        <div className="space-y-16 sm:space-y-24">
          {MILESTONES.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={item.number}
                animation={isEven ? 'slide-left' : 'slide-right'}
                duration={850}
                delay={index * 100}
                className="w-full"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Photo Column */}
                  <div
                    className={`md:col-span-6 flex justify-center ${
                      isEven ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden p-2 bg-white border border-[#EFE6D8] shadow-[0_12px_35px_rgba(201,42,66,0.08)] group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(201,42,66,0.12)]">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-stone-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 90vw, 420px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Narrative Column */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? 'md:order-2 md:pl-4' : 'md:order-1 md:pr-4'
                    }`}
                  >
                    <div className="space-y-3 font-serif">
                      
                      {/* Chapter & Timeline Tag */}
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-3xl sm:text-4xl text-[#C59B55] font-semibold">
                          {item.number}
                        </span>
                        <span className="w-8 h-[1px] bg-[#C59B55]/50" />
                        <span className="text-xs uppercase tracking-[0.2em] text-[#C92A42] font-semibold">
                          {item.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl sm:text-2xl text-[#2C2224] font-normal">
                        {item.title}
                      </h3>

                      {/* Location Badge */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-[#C59B55] uppercase tracking-wider font-medium">
                        <MapPin className="w-3 h-3 text-[#C59B55]" />
                        <span>{item.location}</span>
                      </div>

                      {/* Poetic Narrative */}
                      <p className="text-xs sm:text-sm text-[#5C4A4E] leading-relaxed font-light pt-1">
                        {item.desc}
                      </p>

                      <div className="w-16 h-[1px] bg-[#EFE6D8] pt-2" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

