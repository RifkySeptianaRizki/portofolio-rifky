import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifky Septiana Rizki | Full-Stack Developer & UI/UX Specialist",
  description: "Personal portfolio of Rifky Septiana Rizki, a software engineer shaping resilient web applications and impactful digital products from Sumedang, Indonesia.",
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
