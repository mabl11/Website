import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Vorschaubild für Social Media (wird beim Build statisch erzeugt) */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#5e1a24",
          color: "#fcfaf6",
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.75 }}>{siteConfig.location}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 168, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, opacity: 0.85 }}>Informatik, Technik & Fotografie</div>
        </div>
      </div>
    ),
    size,
  );
}
