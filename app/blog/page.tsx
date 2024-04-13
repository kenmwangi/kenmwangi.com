import { BlogPosts } from "@/components/blog/posts";
import { getSEOTags } from "@/lib/seo";
import React from "react";

export const metadata = getSEOTags({
  title: "Blog | Ken Mwangi",
  canonicalUrlRelative: "/blog",
});

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-[6em] pb-[3em]">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-[#131e2d]">
        Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
