import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { generateWebSiteSchema } from "@/lib/structured-data";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://kenmwangi.com"),
  title: {
    default: "Home | Ken Mwangi",
    template: "%s | Ken Mwangi",
  },
  description:
    "Fullstack engineer specializing in Go, Python, Next.js, Docker and AWS. Currently building the future of real estate at african-realestate.com",
  keywords: ["Ken Mwangi", "Fullstack Engineer", "Go","Docker", "Python", "React", "Next.js", "Node.js", "TypeScript", "Web Developer", "Kenya"],
  authors: [{ name: "Ken Mwangi" }],
  creator: "Ken Mwangi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenmwangi.com",
    title: "Ken Mwangi - Fullstack Engineer",
    description:
      "Fullstack engineer specializing in Go, Python, Next.js, Docker and AWS. Currently building the future of real estate at african-realestate.com",
    siteName: "Ken Mwangi Portfolio",
    images: [
      {
        url: "/assets/ken.jpeg",
        width: 1200,
        height: 630,
        alt: "Ken Mwangi - Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Mwangi - Fullstack Engineer",
    description: "Fullstack engineer specializing in Go, Python, Next.js, Docker and AWS.",
    images: ["/assets/ken.jpeg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const websiteSchema = generateWebSiteSchema("Ken Mwangi - Fullstack Engineer", "https://kenmwangi.com")
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header/> */}
        <main>

        {children}
        </main>
        {/* <Footer/> */}

        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
