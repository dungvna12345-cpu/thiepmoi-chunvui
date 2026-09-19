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
    address: 'Thôn Yên Phú, xã Liên Ninh, Thanh Trì, TP. Hà Nội',
    portrait: '/images/custom_crops/groom_portrait.jpg',
    quote: 'Từ ngày gặp em, anh biết rằng hạnh phúc đích thực là được cùng em chia sẻ những niềm vui bình dị nhất mỗi ngày.',
    bank: {
      bankName: 'VietinBank (Ngân hàng TMCP Công Thương Việt Nam)',
      accountNumber: '102872062303',
      accountHolder: 'DO THANH NHO',
      branch: 'CN Thái Nguyên - PGD Tân Lập',
      qrUrl: '/images/wedding_opt/vietqr_do_thanh_nho_card.png',
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
      name: 'Bữa Cơm Thân Mật Nhà Trai',
      badge: 'Gia Đình Nhà Trai',
      time: '17:00',
      timeLabel: 'Thứ Hai (28/09)',
      date: 'Thứ Hai, 28/09/2026',
      lunarDate: '18 Tháng 08 Năm Bính Ngọ',
      location: 'Tư Gia Nhà Trai',
      address: 'Thôn Yên Phú, xã Liên Ninh, Thanh Trì, TP. Hà Nội',
      mapsUrl: 'https://www.google.com/maps/place/MH+Sport+-+Li%C3%AAn+Ninh/@20.9078039,105.8541775,17z/data=!3m1!4b1!4m6!3m5!1s0x3135b3ca6fd87049:0x198d213fc13b6e1c!8m2!3d20.9078039!4d105.8541775!16s%2Fg%2F11z5m0_x_f',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bữa+Cơm+Thân+Mật+Nhà+Trai+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260928T100000Z/20260928T130000Z&details=Bữa+Cơm+Thân+Mật+Nhà+Trai&location=Thôn+Yên+Phú+Liên+Ninh+Thanh+Trì+Hà+Nội',
    },
    {
      id: 'thanh-hon',
      name: 'Lễ Thành Hôn Chính Thức',
      badge: 'Hôn Lễ Nhà Trai',
      time: '14:00',
      timeLabel: 'Thứ Ba (29/09)',
      date: 'Thứ Ba, 29/09/2026',
      lunarDate: '19 Tháng 08 Năm Bính Ngọ',
      location: 'Tư Gia Nhà Trai',
      address: 'Thôn Yên Phú, xã Liên Ninh, Thanh Trì, TP. Hà Nội',
      mapsUrl: 'https://www.google.com/maps/place/MH+Sport+-+Li%C3%AAn+Ninh/@20.9078039,105.8541775,17z/data=!3m1!4b1!4m6!3m5!1s0x3135b3ca6fd87049:0x198d213fc13b6e1c!8m2!3d20.9078039!4d105.8541775!16s%2Fg%2F11z5m0_x_f',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lễ+Thành+Hôn+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260929T070000Z/20260929T100000Z&details=Lễ+Thành+Hôn+tại+Tư+gia+Nhà+Trai&location=Thôn+Yên+Phú+Liên+Ninh+Thanh+Trì+Hà+Nội',
    },
    {
      id: 'vu-quy',
      name: 'Lễ Vu Quy & Tiệc Cỗ Nhà Gái',
      badge: 'Tư Gia Nhà Gái',
      time: '11:00',
      timeLabel: 'Thứ Ba (29/09)',
      date: 'Thứ Ba, 29/09/2026',
      lunarDate: '19 Tháng 08 Năm Bính Ngọ',
      location: 'Tư Gia Nhà Gái',
      address: 'Thôn Bình Cách, xã Bắc Đông Hưng, Tỉnh Hưng Yên',
      mapsUrl: 'https://maps.google.com/?q=Thôn+Bình+Cách+Bắc+Đông+Hưng+Hưng+Yên',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lễ+Vu+Quy+-+Thành+Nhớ+%26+Phạm+Ngân&dates=20260929T040000Z/20260929T070000Z&details=Lễ+Vu+Quy+tại+Tư+gia+Nhà+Gái&location=Thôn+Bình+Cách+Bắc+Đông+Hưng+Hưng+Yên',
    },
  ],
  timeline: {
    groom: [
      {
        time: '09:07',
        date: 'Sáng 28/09/2026',
        title: 'Lễ Ăn Hỏi',
        desc: 'Đoàn Nhà Trai xuất phát lên đường sang Nhà Gái làm lễ ăn hỏi & trao duyên sính lễ.',
      },
      {
        time: '17:00',
        date: 'Chiều 28/09/2026',
        title: 'Bữa Cơm Thân Mật',
        desc: 'Kính mời mọi người tới dự bữa cơm thân mật chung vui ấm áp cùng gia đình Nhà Trai.',
      },
      {
        time: '09:07',
        date: 'Sáng 29/09/2026',
        title: 'Lễ Rước Dâu (Đón Dâu)',
        desc: 'Đoàn Nhà Trai xuất phát lên đường rước nàng dâu hiền về nhà chồng.',
      },
      {
        time: '14:00',
        date: 'Chiều 29/09/2026',
        title: 'Tổ Chức Lễ Thành Hôn',
        desc: 'Đại lễ Thành Hôn chính thức, nghi thức cắt bánh, trao nhẫn và khai tiệc mừng hạnh phúc.',
      },
    ],
    bride: [
      {
        time: '11:00',
        date: 'Sáng 28/09/2026',
        title: 'Lễ Ăn Hỏi & Đón Đoàn Nhà Trai',
        desc: 'Gia đình Nhà Gái đón tiếp đoàn Lễ Hỏi Nhà Trai và cử hành nghi thức bái gia tiên.',
      },
      {
        time: '17:00 - 22:00',
        date: 'Tối 28/09/2026',
        title: 'Tiệc Tối Giao Lưu Thân Mật',
        desc: 'Bữa tiệc tối liên hoan, giao lưu ấm cúng cùng họ hàng, người thân và bạn bè.',
      },
      {
        time: '08:00',
        date: 'Sáng 29/09/2026',
        title: 'Bữa Cơm Thân Mật Nhà Gái',
        desc: 'Kính mời mọi người tới dự bữa cơm thân mật đầu ngày đại hỷ cùng gia đình Nhà Gái.',
      },
      {
        time: '11:00',
        date: 'Trưa 29/09/2026',
        title: 'Tổ Chức Lễ Vu Quy',
        desc: 'Cử hành nghi thức Lễ Vu Quy trang trọng và đón nhận những lời chúc phúc thiêng liêng.',
      },
      {
        time: '12:00',
        date: 'Trưa 29/09/2026',
        title: 'Lễ Đưa Dâu',
        desc: 'Gia đình Nhà Gái tiễn dâu, đưa cô dâu lên đường về nhà chồng xây đắp tổ ấm.',
      },
    ],
  },
};
