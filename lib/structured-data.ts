export function generatePersonSchema(name: string, jobTitle: string, url: string, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    image: imageUrl,
    sameAs: [
      "https://www.linkedin.com/in/kkmwangi",
      "https://github.com/kenmwangi",
    ],
  }
}

export function generateBlogPostingSchema({
  title,
  description,
  url,
  authorName,
  datePublished,
  dateModified,
  imageUrl,
}: {
  title: string
  description: string
  url: string
  authorName: string
  datePublished: string
  dateModified: string
  imageUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: authorName,
    },
    datePublished,
    dateModified,
    url,
    ...(imageUrl && { image: imageUrl }),
  }
}

export function generateWebSiteSchema(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}
