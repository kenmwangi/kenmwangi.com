import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  generateSeoMetadata,
  generateStructuredData,
  seoConfig,
  siteUrl,
} from "@/lib/seo";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: seoConfig.siteName,
    description: seoConfig.siteDescription,
    url: siteUrl,
    image: seoConfig.defaultOgImage,
    keywords: seoConfig.siteKeywords,
  }),
  metadataBase: new URL(siteUrl),
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 10,
      "max-image-preview": "large", // changed from string to allowed literal
      "max-snippet": 10,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans antialiased min-h-screeen`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
