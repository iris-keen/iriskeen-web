import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  Alexandria,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const english = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-english",
  display: "swap",
});

const heroArabic = Alexandria({
  subsets: ["arabic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-hero-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iris Keen | بصيرتك في الاختيار",
  description:
    "Luxury Umrah hotels in Makkah and Madinah with carefully selected stays, personalized travel services, and premium hotel recommendations.",
  keywords: [
    "Iris Keen",
    "Umrah",
    "Makkah Hotels",
    "Madinah Hotels",
    "Luxury Hotels",
    "Saudi Arabia",
    "Travel",
    "Tourism",
  ],
  authors: [{ name: "Iris Keen" }],
  creator: "Iris Keen",
  publisher: "Iris Keen",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Iris Keen | بصيرتك في الاختيار",
    description:
      "Luxury Umrah hotels in Makkah and Madinah with carefully selected stays and personalized travel services.",
    url: "https://iriskeen.com",
    siteName: "Iris Keen",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iris Keen",
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
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${english.variable} ${heroArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}