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
            className="group/post  bg-white flex grow overflow-hidden shadow-sm rounded-md border border-solid border-gray-200 no-underline transition ease-linear hover:border-[#1066ef] flex-col"
          >
            <div className="flex grow flex-col lg:flex-row gap-4 p-5 sm:p-6">
              <p className="text-2xl flex items-center rounded-md  bg-[#fffff0] text-[#131e2d] size-10 justify-center font-extrabold">
                {/* {idx + 1} */}
                <Rss />
              </p>
              <div className="group/article  flex gap-4 w-full flex-1 flex-col justify-between">
                <p className="text-neutral-600 w-[150px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h3 className="line-clamp-2 text-lg font-semibold leading-normal text-[#2e4057] transition ease-linear group-hover/article:text-[#131e2d] sm:line-clamp-1">
                  {post.metadata.title}
                </h3>
                <p className="text-[#2e4057] mb-0 mt-0 text-sm line-clamp-3 sm:line-clamp-2">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
