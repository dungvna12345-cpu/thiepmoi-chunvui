'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Download } from 'lucide-react';
import { getRsvps, WeddingRsvp } from '@/lib/supabaseClient';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [rsvps, setRsvps] = useState<WeddingRsvp[]>([]);
  const [filter, setFilter] = useState<'all' | 'groom' | 'bride'>('all');

  useEffect(() => {
    if (isOpen) {
      getRsvps().then(setRsvps);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const attendingList = rsvps.filter((r) => r.attending === 'yes');
  const totalGuests = attendingList.reduce((acc, curr) => acc + (curr.guests_count || 1), 0);
  const groomGuests = attendingList
    .filter((r) => r.side === 'groom')
    .reduce((acc, curr) => acc + (curr.guests_count || 1), 0);
  const brideGuests = attendingList
    .filter((r) => r.side === 'bride')
    .reduce((acc, curr) => acc + (curr.guests_count || 1), 0);

  const filteredRsvps = filter === 'all' ? rsvps : rsvps.filter((r) => r.side === filter);

  const exportCsv = () => {
    const headers = ['Họ Tên', 'Số Điện Thoại', 'Khách Của', 'Tham Dự', 'Số Lượng', 'Ghi Chú', 'Thời Gian'];
    const rows = rsvps.map((r) => [
      `"${r.name}"`,
      `"${r.phone || ''}"`,
      `"${r.side === 'groom' ? 'Nhà Trai' : 'Nhà Gái'}"`,
      `"${r.attending === 'yes' ? 'Có' : 'Không'}"`,
      r.guests_count,
      `"${r.note || ''}"`,
      new Date(r.created_at || '').toLocaleString('vi-VN'),
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,﻿' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Danh_Sach_RSVP_Dam_Cuoi.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] rounded-2xl p-6 sm:p-8 flex flex-col border border-[#E8DAC8] shadow-2xl bg-white relative animate-in fade-in zoom-in duration-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DAC8] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/60 text-[#7A152C] flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5" strokeWidth={1.4} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#7A152C]">
                Quản Lý Khách Mời RSVP
              </h3>
              <p className="text-xs text-[#7a605b] font-serif font-light">
                Dành riêng cho Thành Nhớ & Ngọc Ngân theo dõi số lượng
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF8F5] text-[#7a605b] hover:text-[#7A152C] hover:bg-[#FAF6F0] transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-serif">
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DAC8] text-center">
            <span className="text-[10px] text-[#7a605b] uppercase block">Tổng xác nhận</span>
            <strong className="text-xl font-bold text-[#7A152C]">{rsvps.length}</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DAC8] text-center">
            <span className="text-[10px] text-emerald-800 uppercase block">Khách sẽ đến</span>
            <strong className="text-xl font-bold text-emerald-800">{totalGuests} người</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DAC8] text-center">
            <span className="text-[10px] text-[#881337] uppercase block">Khách Nhà Trai</span>
            <strong className="text-xl font-bold text-[#881337]">{groomGuests} người</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DAC8] text-center">
            <span className="text-[10px] text-[#9b1834] uppercase block">Khách Nhà Gái</span>
            <strong className="text-xl font-bold text-[#9b1834]">{brideGuests} người</strong>
          </div>
        </div>

        {/* Filter & Export Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex gap-1.5">
            {(['all', 'groom', 'bride'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif transition-colors ${
                  filter === f
                    ? 'bg-[#7A152C] text-white font-semibold shadow-sm'
                    : 'bg-[#FAF8F5] text-[#594441] border border-[#E8DAC8]'
                }`}
              >
                {f === 'all' ? 'Tất cả' : f === 'groom' ? 'Nhà Trai' : 'Nhà Gái'}
              </button>
            ))}
          </div>

          <button
            onClick={exportCsv}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A152C] hover:bg-[#5C0F20] text-white text-xs font-serif shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={1.4} />
            <span>Xuất Excel/CSV</span>
          </button>
        </div>

        {/* RSVPs Table */}
        <div className="flex-1 overflow-y-auto border border-[#E8DAC8] rounded-xl bg-[#FAF8F5]">
          <table className="w-full text-left border-collapse text-xs font-serif">
            <thead className="bg-white text-[#7A152C] uppercase text-[10px] tracking-wider sticky top-0 border-b border-[#E8DAC8]">
              <tr>
                <th className="p-3">Họ Tên</th>
                <th className="p-3">SĐT</th>
                <th className="p-3">Nhà</th>
                <th className="p-3">Tham dự</th>
                <th className="p-3">Số người</th>
                <th className="p-3">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DAC8] text-[#4a3e3d]">
              {filteredRsvps.map((r) => (
                <tr key={r.id} className="hover:bg-white/80">
                  <td className="p-3 font-semibold text-[#2B171A]">{r.name}</td>
                  <td className="p-3">{r.phone || '-'}</td>
                  <td className="p-3">{r.side === 'groom' ? 'Nhà Trai' : 'Nhà Gái'}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] ${
                      r.attending === 'yes' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {r.attending === 'yes' ? 'Sẽ đến' : 'Vắng'}
                    </span>
                  </td>
                  <td className="p-3 font-semibold">{r.guests_count}</td>
                  <td className="p-3 max-w-[200px] truncate text-[#7a605b] font-light">{r.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
