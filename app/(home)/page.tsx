import type { Metadata } from "next";
import { HeroGreetings, type Greeting } from "@/components/hero-greetings";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { personSchema, websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({ description: siteConfig.description, path: "/" });

const greetings: Greeting[] = [
  { text: "Guten Tag.", lang: "de" },
  { text: "Hi!", lang: "en" },
  { text: "Bun di.", lang: "rm" },
  { text: "Ciao.", lang: "it" },
  { text: "Howdy!", lang: "en" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={personSchema} />
      <HeroGreetings greetings={greetings} />
    </>
  );
}
