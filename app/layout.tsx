import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { baseUrl } from "./sitemap";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["400", "500", "700", "900"],
});

const aeonik = localFont({
  src: "./fonts/Aeonik-Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home | Ken Mwangi",
    template: "%s | Ken Mwangi",
  },
  description:
    "Personal portfolio for Ken Mwangi showcasing fullstack development, blog, personal development and technical writing",
  openGraph: {
    title: "Ken Mwangi",
    description:
      "Personal portfolio for Ken Mwangi showcasing fullstack development, blog, personal development and technical writing",
    url: baseUrl,
    siteName: "Ken Mwangi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/api/og?title=Ken Mwangi", // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: "http://localhost:3000/api/og?title=Ken Mwangi", // Dynamic og route
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

// bg-[#fcfdfe]
// bg-[#f8f8ff]
// bg-[#fffff0]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth")}>
      <body
        className={cn(
          "min-h-screen flex flex-col text-base antialiased bg-[#fcfdfe] text-[#131e2d]",
          aeonik.className
        )}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
