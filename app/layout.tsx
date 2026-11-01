import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de-CH" className={`${instrumentSans.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}