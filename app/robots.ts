import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"], // adjust as needed
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
