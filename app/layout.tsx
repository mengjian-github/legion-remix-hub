import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { createWebSiteSchema, JsonLd } from "@/lib/schema";
import { buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rootTitle = formatMetaTitle("Legion Remix Guide - WoW 2025 Complete Hub");
const rootDescription = formatMetaDescription(
  "Master Legion Remix 2025 with a complete guide covering leveling routes, Bronze farming priorities, class builds, rewards planning, and weekly prep for Oct 7."
);

export const metadata: Metadata = {
  metadataBase: new URL('https://legionremixhub.com'),
  title: rootTitle,
  description: rootDescription,
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
    locale: "en_US",
    ...buildOpenGraphMetadata('/', rootTitle, rootDescription, 'website'),
  },
  twitter: buildTwitterMetadata(rootTitle, rootDescription),
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
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
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
        <meta name="google-adsense-account" content="ca-pub-1081201777589554" />
        <JsonLd data={websiteSchema} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CTHKQNSKD"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
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
          strategy="lazyOnload"
        />
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tu1who57jx");
          `}
        </Script>
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
