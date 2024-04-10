import { getBlogPosts } from "@/lib/formatter";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LatestArticles() {
  let allBlogs = getBlogPosts();
  return (
    <>
      <section className="mb-9 flex flex-col rounded-md border border-primary-color-alpha-10 p-2 sm:p-3">
        <h2 className="mb-1 px-3 pb-4 pt-2 text-xl font-bold leading-10 text-primary-color-alpha-60">
          Latest Articles
        </h2>

        <article className="grid auto-rows-auto gap-x-4 sm:gap-x-6 md:grid-cols-1">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .slice(0, 6)
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="duration-250 group/article flex flex-row justify-between gap-2 py-2 no-underline transition ease-linear hover:bg-primary-color-alpha-10 hover:text-primary-color sm:rounded-md sm:py-3 px-3"
              >
                <div className="flex flex-col p-0 text-primary-color-alpha-60">
                  {post.metadata.title}
                </div>
                <div className="flex shrink-0 flex-col justify-center p-0 text-primary-color-alpha-60">
                  <ChevronRight />
                </div>
              </Link>
            ))}
        </article>
      </section>
      <Link
        href="/blog"
        className="group flex w-fit rounded-md items-center gap-3 font-semibold px-3 py-2 bg-bg-secondary-color mb-12 text-primary-color-alpha-60 group hover:bg-primary-color/50 hover:text-white transition ease-linear"
      >
        More articles
        <ChevronRight className="size-5" />
      </Link>
    </>
  );
}
