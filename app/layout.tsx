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
import TopBanner from "@/components/home/topbar";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

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
        className={`${geistSans.variable} ${geistMono.variable} font-sans tracking-[-0.25px] antialiased`}
        data-new-gr-c-s-check-loaded="14.1263.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <TopBanner />
        <div className="overflow-hidden px-4 has-data-home:bg-zinc-50 has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 supports-[overflow:clip]:overflow-clip sm:px-6 dark:has-data-home:bg-zinc-950 dark:has-not-data-home:before:hidden">
          <div className="before:-left-12 after:-right-12 relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:w-px before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:absolute after:inset-y-0 after:w-px after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </div>
        </div>

        <Toaster />
      </body>
    </html>
  );
}
