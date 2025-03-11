import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kenmwangi.com";

  // Main pages
  const routes = ["", "/projects", "/experience", "/articles", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Project pages - in a real app, you would fetch these from your data source
  const projects = [
    { slug: "african-real-estate" },
    { slug: "microservices-platform" },
    { slug: "e-commerce-solution" },
  ].map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Article pages - in a real app, you would fetch these from your data source
  const articles = [
    { slug: "microservices-architecture" },
    { slug: "aws-optimization" },
    { slug: "golang-best-practices" },
  ].map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projects, ...articles];
}
