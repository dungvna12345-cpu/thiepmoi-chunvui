/**
 * Nguồn dữ liệu hôn lễ chính thức cho cặp đôi Đỗ Thành Nhớ & Phạm Thị Ngân
 * Đảm bảo tính nhất quán trên toàn bộ website thiệp cưới
 */

export const WEDDING_DATA = {
  groom: {
    name: 'Thành Nhớ',
    fullName: 'Đỗ Thành Nhớ',
    role: 'Trưởng Nam',
    father: 'Đỗ Văn Định',
    mother: 'Vũ Thị Thoan',
    residence: 'Tư Gia Nhà Trai',
    address: 'Số nhà 77, thôn Yên Phú, xã Ngọc Hồi, TP. Hà Nội',
    portrait: '/images/custom_crops/groom_portrait.jpg',
    quote: 'Từ ngày gặp em, anh biết rằng hạnh phúc đích thực là được cùng em chia sẻ những niềm vui bình dị nhất mỗi ngày.',
    bank: {
      bankName: 'Ngân hàng Quân Đội (MB Bank)',
      accountNumber: '999988882803',
      accountHolder: 'DO THANH NHO',
      branch: 'Chi nhánh Hà Nội',
      qrUrl: 'https://img.vietqr.io/image/MB-999988882803-compact2.png?amount=0&addInfo=Mung%20cuoi%20Thanh%20Nho&accountName=DO%20THANH%20NHO',
    },
  },
  bride: {
    name: 'Phạm Ngân',
    fullName: 'Phạm Thị Ngân',
    role: 'Út Nữ',
    father: 'Phạm Quang Tuất',
    mother: 'Trần Thị Nhài',
    residence: 'Tư Gia Nhà Gái',
    address: 'Thôn Bình Cách, xã Bắc Đông Hưng, Tỉnh Hưng Yên',
    portrait: '/images/custom_crops/bride_portrait.jpg',
    quote: 'Cảm ơn anh đã luôn kiên nhẫn, yêu thương và che chở. Em sẵn sàng cùng anh viết tiếp chương tuyệt đẹp của đời mình.',
    bank: {
      bankName: 'Ngân hàng Vietcombank (VCB)',
      accountNumber: '0071008882803',
      accountHolder: 'PHAM THI NGAN',
      branch: 'Chi nhánh Hưng Yên',
      qrUrl: 'https://img.vietqr.io/image/VCB-0071008882803-compact2.png?amount=0&addInfo=Mung%20cuoi%20Pham%20Ngan&accountName=PHAM%20THI%20NGAN',
    },
  },
  weddingDate: {
    year: 2026,
    month: 9, // Tháng 9
    day: 29, // Ngày chính lễ
    dayOfWeek: 'Thứ Ba',
    isoDate: '2026-09-29T09:00:00+07:00', // Giờ Việt Nam UTC+7
    lunarDate: '19 tháng 08 năm Bính Ngọ',
    formattedDate: '29 . 09 . 2026',
    fullFormattedDate: 'Thứ Ba, ngày 29 tháng 09 năm 2026',
  },
  events: [
    {
      id: 'an-co-nha-trai',
      name: 'Tiệc Mời Cỗ Nhà Trai',
      badge: 'Gia Đình Nhà Trai',
      time: '17:00',
      timeLabel: 'Thứ Hai (28/09)',
      date: 'Thứ Hai, 28/09/2026',
      lunarDate: '18 Tháng 08 Năm Bính Ngọ',
      location: 'Sân bóng MH Sport – Liên Ninh',
      address: 'Sau cây xăng thôn Yên Phú, xã Ngọc Hồi, TP. Hà Nội',
      mapsUrl: 'https://maps.google.com/?q=Sân+bóng+MH+Sport+Liên+Ninh+Ngọc+Hồi+Hà+Nội',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tiệc+Mời+Cỗ+Nhà+Trai+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260928T100000Z/20260928T130000Z&details=Tiệc+Mời+Cỗ+Nhà+Trai+tại+Sân+bóng+MH+Sport+Liên+Ninh&location=Sân+bóng+MH+Sport+Liên+Ninh+Ngọc+Hồi+Hà+Nội',
    },
    {
      id: 'thanh-hon',
      name: 'Lễ Thành Hôn',
      badge: 'Hôn Lễ Nhà Trai',
      time: '09:00',
      timeLabel: 'Thứ Ba (29/09)',
      date: 'Thứ Ba, 29/09/2026',
      lunarDate: '19 Tháng 08 Năm Bính Ngọ',
      location: 'Sân bóng MH Sport – Liên Ninh',
      address: 'Sau cây xăng thôn Yên Phú, xã Ngọc Hồi, TP. Hà Nội',
      mapsUrl: 'https://maps.google.com/?q=Sân+bóng+MH+Sport+Liên+Ninh+Ngọc+Hồi+Hà+Nội',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lễ+Thành+Hôn+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260929T020000Z/20260929T050000Z&details=Lễ+Thành+Hôn+tại+Sân+bóng+MH+Sport+Liên+Ninh&location=Sân+bóng+MH+Sport+Liên+Ninh+Ngọc+Hồi+Hà+Nội',
    },
    {
      id: 'vu-quy',
      name: 'Lễ Vu Quy & Tiệc Cỗ Nhà Gái',
      badge: 'Tư Gia Nhà Gái',
      time: '09:00',
      timeLabel: 'Thứ Ba (29/09)',
      date: 'Thứ Ba, 29/09/2026',
      lunarDate: '19 Tháng 08 Năm Bính Ngọ',
      location: 'Tư Gia Nhà Gái',
      address: 'Thôn Bình Cách, xã Bắc Đông Hưng, Tỉnh Hưng Yên',
      mapsUrl: 'https://maps.google.com/?q=Thôn+Bình+Cách+Bắc+Đông+Hưng+Hưng+Yên',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lễ+Vu+Quy+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260929T020000Z/20260929T050000Z&details=Lễ+Vu+Quy+tại+Tư+gia+Nhà+Gái&location=Thôn+Bình+Cách+Bắc+Đông+Hưng+Hưng+Yên',
    },
  ],
  dressCode: [
    {
      name: 'Đỏ Rượu Vang',
      tone: 'Burgundy',
      hex: '#681B2B',
      desc: 'Màu chủ đạo quý phái',
    },
    {
      name: 'Vàng Champagne',
      tone: 'Champagne Gold',
      hex: '#B79A68',
      desc: 'Ánh kim ấm áp, viên mãn',
    },
    {
      name: 'Trắng Be Ngà',
      tone: 'Warm Ivory',
      hex: '#FAF7F2',
      borderHex: '#EADFD3',
      desc: 'Trang nhã, thanh lịch',
      isLight: true,
    },
    {
      name: 'Đen Cổ Điển',
      tone: 'Classic Black',
      hex: '#35292C',
      desc: 'Lịch lãm, trang trọng',
    },
  ],
};
