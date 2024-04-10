import Hero from "@/components/landing/hero";
import LatestArticles from "@/components/landing/latest-articles";
import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Hero />
      <LatestArticles />
    </div>
  );
}
