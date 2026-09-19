import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Montserrat, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Đỗ Thành Nhớ & Phạm Thị Ngân - Thư Mời Cưới Trọng Đại",
  description: "Trân trọng kính mời quý khách đến chung vui trong ngày trọng đại của cặp đôi Đỗ Thành Nhớ & Phạm Thị Ngân (28 - 29/09/2026).",
  openGraph: {
    title: "Đỗ Thành Nhớ & Phạm Thị Ngân - Thư Mời Cưới",
    description: "Trân trọng kính mời quý khách đến chung vui trong ngày trọng đại của chúng tôi (28 - 29/09/2026).",
    images: [
      {
        url: "/images/wedding_opt/save_the_date_poster.jpg",
        width: 576,
        height: 1024,
        alt: "Đỗ Thành Nhớ & Phạm Thị Ngân Wedding Save The Date",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${lora.variable} ${greatVibes.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF6F0] text-[#3D2529] font-sans antialiased selection:bg-[#7A152C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
