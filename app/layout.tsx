import type React from "react";
import type { Metadata } from "next";
import { Cal_Sans as FontHeading, Inter as FontSans } from "next/font/google";
import "./globals.css";
import {
  generateSeoMetadata,
  generateStructuredData,
  seoConfig,
  siteUrl,
} from "@/lib/seo";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans tracking-[-0.25px] antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
