import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Rifky Septiana Rizki",
  description: "Portofolio Rifky Septiana Rizki, lulusan S1 Informatika Universitas Sebelas April dengan pengalaman pengembangan web, desain antarmuka, dukungan teknis, dan kepemimpinan kegiatan di Sumedang, Jawa Barat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-off-white selection:text-pure-black">
        {children}
      </body>
    </html>
  );
}
