import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/formatter";
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
      <h1 className="title font-semibold text-2xl tracking-tighter text-primary-color">
        {post.metadata.title}
      </h1>
      <div className="flex gap-x-4 items-center mt-4 mb-8 text-sm">
        <p className="text-sm text-neutral-600">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <p className="">{post.metadata.author}</p>
      </div>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
