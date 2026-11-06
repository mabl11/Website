import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "profile";
};

/**
 * Einheitliche Metadaten pro Seite. Next.js ersetzt verschachtelte Objekte wie
 * `openGraph` komplett statt sie zu mergen — deshalb hier jeweils vollständig.
 */
export function pageMetadata({ title, description, path, type = "website" }: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.title;
  // Das generierte Bild aus app/opengraph-image.tsx explizit referenzieren,
  // da ein eigenes `openGraph`-Objekt es sonst überschreibt
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }];

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
