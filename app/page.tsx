import Hero from "@/components/landing/hero";
import LatestArticles from "@/components/landing/latest-articles";
import { getSEOTags, renderSchemaTags } from "@/lib/seo";
import React from "react";

export const metadata = getSEOTags({
  title: "Home | Ken Mwangi",
  canonicalUrlRelative: "/",
});

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <div className="max-w-7xl mx-auto px-8">
        <Hero />
        <LatestArticles />
      </div>
    </>
  );
}
