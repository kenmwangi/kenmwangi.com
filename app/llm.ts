import { siteUrl, seoConfig } from "@/lib/seo";

export const runtime = "edge"; // optional for fast static output

export async function GET() {
  const content = `
# LLMs Crawling Instructions for ${seoConfig.siteName}
Site: ${siteUrl}

# Allow LLMs to crawl and index
User-agent: *
Allow: /

# Contact Info
Owner: ${seoConfig.organization.name}
Email: ${seoConfig.organization.email}
Phone: ${seoConfig.organization.phone}
Location: ${seoConfig.organization.address}

# LLM Usage Policy
This site content may be used for training, indexing, and retrieval by LLMs,
provided attribution is maintained as "${seoConfig.siteName}".
  `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
