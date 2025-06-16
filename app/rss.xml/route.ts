import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     orderBy: { createdAt: "desc" },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   })

const posts:any = []

  const baseUrl = "https://kenmwangi.dev"
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Ken Mwangi's Blog</title>
  <link>${baseUrl}</link>
  <description>Thoughts on code, technology, and building digital products by Ken Mwangi.</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
  ${posts
    .map(
      (post:any) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <author>${post.author?.name || "Ken Mwangi"}</author>
    </item>
  `,
    )
    .join("")}
</channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  })
}
