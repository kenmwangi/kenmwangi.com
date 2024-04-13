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
import { getSEOTags } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["400", "500", "700", "900"],
});

const aeonik = localFont({
  src: "./fonts/Aeonik-Regular.otf",
  display: "swap",
});

export const metadata = getSEOTags();

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
