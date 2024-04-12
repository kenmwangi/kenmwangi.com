import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/formatter";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    author,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    author,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      author,
      images: [ogImage],
    },
  };
}

export default function BlogDetails({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <section className="max-w-3xl mx-auto px-4 py-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ken Mwangi",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl leading-relaxed text-[#1066ef]">
        {post.metadata.title}
      </h1>
      <div className="flex flex-col gap-4 mt-4 mb-8 text-sm">
        <p className="text-sm text-neutral-600">
          Published: {formatDate(post.metadata.publishedAt)}
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={`/assets/profile.jpg`}
            width={56}
            height={56}
            alt={`Ken Mwangi`}
            priority={true}
            className="rounded-full w-[1rem] md:w-[2rem] my-2"
          />
          <div className="flex flex-col font-semibold">
            <p className="text-[#00152f">{post.metadata.author}</p>
            <p className="text-[#2e4057] text-xs">Author</p>
          </div>
        </div>
      </div>
      <hr />
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
