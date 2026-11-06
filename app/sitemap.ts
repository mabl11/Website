import type { MetadataRoute } from "next";
import { mainNavigation, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNavigation.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    changeFrequency: item.href === "/blog" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
