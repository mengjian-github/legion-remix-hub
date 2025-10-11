import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { createWebSiteSchema, JsonLd } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://legionremixhub.com'),
  title: {
    default: "Legion Remix Guide - WoW 2025 Complete Hub",
    template: "%s | Legion Remix Hub"
  },
  description: "Master Legion Remix 2025 with our complete legion remix guide: leveling strategies, bronze farming tips, best classes, rewards calculator & database. Oct 2025-Jan 2026 event.",
  keywords: [
    "legion remix guide",
    "Legion Remix",
    "legion remix leveling guide",
    "legion remix bronze farming",
    "legion remix best class",
    "legion remix rewards",
    "WoW Legion Remix 2025",
    "Legion Timerunning",
    "wowhead legion remix",
    "wow legion leveling guide",
    "legion remix mounts",
    "legion remix talents",
    "icy veins",
    "best legion remix classes",
    "balance druid guide",
    "frost dk guide"
  ],
  authors: [{ name: "Legion Remix Hub Team" }],
  creator: "Legion Remix Hub",
  publisher: "Legion Remix Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legionremixhub.com",
    title: "Legion Remix Guide - WoW 2025 Complete Hub",
    description: "Master Legion Remix 2025 with our complete legion remix guide: leveling strategies, bronze farming tips, best classes, rewards calculator & database.",
    siteName: "Legion Remix Hub",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legion Remix Guide - Complete Hub"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legion Remix Guide - WoW 2025 Complete Hub",
    description: "Master Legion Remix 2025 with our complete legion remix guide: leveling, bronze farming, best classes & rewards calculator.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = createWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <JsonLd data={websiteSchema} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CTHKQNSKD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CTHKQNSKD');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1081201777589554"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
