import type { MetadataRoute } from "next"
import { prisma } from "@/lib/prisma"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     select: { slug: true, updatedAt: true },
//   })

  const posts:any[] = []

  const blogEntries = posts.map((post) => ({
    url: `https://kenmwangi.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Static routes
  const routes = [
    {
      url: "https://kenmwangi.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: "https://kenmwangi.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  return [...routes, ...blogEntries]
}
