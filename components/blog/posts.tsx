import { formatDate, getBlogPosts } from "@/lib/formatter";
import { Rss } from "lucide-react";
import Link from "next/link";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="mb-12 grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-2">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt)
          ) {
            return 1;
          }
          return -1;
        })
        .map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group/post flex grow overflow-hidden shadow-sm rounded-md border border-solid border-primary-color-alpha-10 no-underline transition ease-linear hover:border-primary-color-alpha-60 flex-col"
          >
            <div className="flex grow flex-col lg:flex-row gap-4 p-5 sm:p-6">
              <p className="text-2xl flex items-center rounded-md bg-primary-color-alpha-10 text-primary-color-alpha-60 size-10 justify-center font-extrabold">
                {/* {idx + 1} */}
                <Rss />
              </p>
              <div className="group/article  flex gap-4 w-full flex-1 flex-col justify-between">
                <p className="text-neutral-600 w-[150px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h3 className="line-clamp-2 text-lg font-semibold leading-normal text-primary-color-alpha-60 transition ease-linear group-hover/article:text-primary-color sm:line-clamp-1">
                  {post.metadata.title}
                </h3>
                <p className="text-primary-color-alpha-60 mb-0 mt-0 text-sm line-clamp-3 sm:line-clamp-2">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
