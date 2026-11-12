import { siteConfig, socialLinks } from "./site-config";

// Nur echte Profil-Links (nicht die generische Startseite eines Netzwerks)
const profileLinks = socialLinks
  .map((link) => link.href)
  .filter((href) => new URL(href).pathname.replace(/\/$/, "") !== "");

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  worksFor: { "@type": "Organization", name: "Pilatus Aircraft" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Hochschule Luzern (HSLU)" },
  homeLocation: { "@type": "Place", name: "Samedan, Graubünden, Schweiz" },
  address: { "@type": "PostalAddress", addressLocality: "Luzern", addressCountry: "CH" },
  knowsAbout: ["Informatik", "Software Engineering", "Elektronik", "Fotografie"],
  ...(profileLinks.length > 0 ? { sameAs: profileLinks } : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "de-CH",
  description: siteConfig.description,
};
