import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vedic Astrology Daily Insights",
  description:
    "Daily Vedic astrology insights based on moon sign, planetary transits, moon phases, retrogrades, and eclipses. Sidereal zodiac with Lahiri ayanamsa.",
  keywords: [
    "vedic astrology",
    "jyotish",
    "moon sign",
    "daily horoscope",
    "planetary transits",
    "moon phases",
    "retrograde",
    "sidereal zodiac",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
