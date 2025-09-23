export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ken@kenmwangi.com";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+254700000000";

export const seoConfig = {
  siteName: "Ken Mwangi",
  siteDescription:
    "Portfolio of Ken Mwangi, Backend Engineer at African Real Estate. I build scalable systems with Python, Golang, Docker, Kubernetes, and microservices.",
  siteKeywords:
    "Ken Mwangi, Backend Engineer, Software Developer, Python, Golang, Docker, Kubernetes, Microservices, Cloud, GCP, AWS, Real Estate Tech, Africa",
  siteLanguage: "en",
  siteLocale: "en_US",

  defaultOgImage: "/ken-mwangi.jpeg",

  organization: {
    name: "Ken Mwangi",
    url: siteUrl,
    logo: "/ken-mwangi.jpeg",
    email: contactEmail,
    phone: contactPhone,
    address: "Nairobi, Kenya",
  },

  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER || "",
    github: process.env.NEXT_PUBLIC_GITHUB || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
    devto: process.env.NEXT_PUBLIC_DEVTO || "",
    medium: process.env.NEXT_PUBLIC_MEDIUM || "",
  },

  defaults: {
    titleTemplate: "%s | Backend Engineer",
    description:
      "Backend Engineer specialized in Python, Golang, Docker, Kubernetes, microservices, and cloud architecture.",
    ogType: "website",
  },
};

// ✅ SEO Metadata Generator
export function generateSeoMetadata({
  title,
  description,
  url,
  image,
  type = "website",
}: {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}) {
  const metaTitle = title
    ? seoConfig.defaults.titleTemplate.replace("%s", title)
    : seoConfig.siteName;

  return {
    title: metaTitle,
    description: description || seoConfig.siteDescription,
    openGraph: {
      title: metaTitle,
      description: description || seoConfig.siteDescription,
      url: url || siteUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image || `${siteUrl}${seoConfig.defaultOgImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: description || seoConfig.siteDescription,
      images: [image || `${siteUrl}${seoConfig.defaultOgImage}`],
      creator: seoConfig.social.twitter,
    },
  };
}
