import { BlogPosts } from "@/components/blog/posts";
import React from "react";

export const metadata = {
  title: "Blog",
  description:
    "Blog about software development journey,technical writing and experiences",
};

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
