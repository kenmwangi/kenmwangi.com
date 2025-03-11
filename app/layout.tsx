import type React from "react";
import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kenmwangi.com"),
  title: {
    default: "Ken Mwangi | Full Stack Engineer",
    template: "%s | Ken Mwangi",
  },
  description:
    "Ken Mwangi is a seasoned Full Stack Engineer with expertise in microservices, cloud services, and modern web technologies.",
  keywords: [
    "Ken Mwangi",
    "Full Stack Engineer",
    "Golang",
    "AWS",
    "GCP",
    "Microservices",
    "Web Development",
    "African Real Estate",
  ],
  authors: [{ name: "Ken Mwangi", url: "https://kenmwangi.com" }],
  creator: "Ken Mwangi",
  publisher: "Ken Mwangi",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenmwangi.com",
    title: "Ken Mwangi | Full Stack Engineer",
    description:
      "Ken Mwangi is a seasoned Full Stack Engineer with expertise in microservices, cloud services, and modern web technologies.",
    siteName: "Ken Mwangi Portfolio",
    images: [
      {
        url: "/assets/ken.jpeg",
        width: 1200,
        height: 630,
        alt: "Ken Mwangi - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Mwangi | Full Stack Engineer",
    description:
      "Ken Mwangi is a seasoned Full Stack Engineer with expertise in microservices, cloud services, and modern web technologies.",
    creator: "@ken_cipher",
    images: ["/assets/ken.jpeg"],
  },
  alternates: {
    canonical: "https://kenmwangi.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["mailto:kenmwangi071@gmail.com", "https://twitter.com/ken_cipher"],
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
