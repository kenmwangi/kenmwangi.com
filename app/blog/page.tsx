import { BlogPosts } from "@/components/blog/posts";
import React from "react";

export const metadata = {
  title: "Blog",
  description:
    "Blog about software development journey,technical writing and experiences",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
