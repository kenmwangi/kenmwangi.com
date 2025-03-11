import Script from "next/script";

export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ken Mwangi",
    jobTitle: "Lead Engineer",
    worksFor: {
      "@type": "Organization",
      name: "African Real Estate",
    },
    url: "https://kenmwangi.com",
    sameAs: [
      "https://twitter.com/ken_cipher",
      "https://github.com/kenmwangi",
      "https://linkedin.com/in/kenmwangi",
    ],
    description:
      "Seasoned Full Stack Engineer with expertise in microservices, cloud services, and modern web technologies.",
    knowsAbout: [
      "Golang",
      "Microservices",
      "AWS",
      "GCP",
      "Web Development",
      "React",
      "Node.js",
    ],
    email: "mailto:kenmwangi071@gmail.com",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}
