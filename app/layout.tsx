import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateSeoMetadata, seoConfig, siteUrl } from "@/lib/seo";

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
  }),
  metadataBase: new URL(siteUrl), // 👈 fixes the warning
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
