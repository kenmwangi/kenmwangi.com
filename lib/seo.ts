export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ken@kenmwangi.com";
export const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+254700000000";

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

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ken Mwangi",
    jobTitle: "Backend Engineer",
    description:
      "Backend Engineer specialized in Python, Golang, Docker, Kubernetes, microservices, and cloud architecture.",
    url: siteUrl,
    image: `${siteUrl}/ken-mwangi.jpeg`,
    email: contactEmail,
    telephone: contactPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
    },
    worksFor: {
      "@type": "Organization",
      name: "African Real Estate",
    },
    knowsAbout: [
      "Python",
      "Golang",
      "Docker",
      "Kubernetes",
      "Microservices",
      "Cloud Computing",
      "AWS",
      "Backend Development",
      "Software Engineering",
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB || "",
      process.env.NEXT_PUBLIC_LINKEDIN || "",
      process.env.NEXT_PUBLIC_TWITTER || "",
    ].filter(Boolean),
  },
};

export function generateSeoMetadata({
  title,
  description,
  url,
  image,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const metaTitle = title
    ? seoConfig.defaults.titleTemplate.replace("%s", title)
    : seoConfig.siteName;

  const finalUrl = url || siteUrl;
  const finalImage = image || `${siteUrl}${seoConfig.defaultOgImage}`;

  return {
    title: metaTitle,
    description: description || seoConfig.siteDescription,
    keywords: keywords || seoConfig.siteKeywords,
    authors: [{ name: seoConfig.siteName, url: siteUrl }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: description || seoConfig.siteDescription,
      url: finalUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale: seoConfig.siteLocale,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: description || seoConfig.siteDescription,
      images: [finalImage],
      creator: seoConfig.social.twitter,
      site: seoConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    },
  };
}

export function generateStructuredData(
  additionalData?: Record<string, unknown>
) {
  return {
    ...seoConfig.structuredData,
    ...additionalData,
  };
}
