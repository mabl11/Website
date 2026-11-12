export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Mauro",
  title: "Mauro. Ich, Eau, Me, Io",
  description:
    "Die Persönliche Website von Mauro. Inhalte auf dieser Website sind persönliche alltagsdinge und Fotografie. Kann zudem Spuren von Technik, Humor und Politik enthalten.",
  /* who was here? */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mauroblatter.ch",
  locale: "de_CH",
  location: "Luzern / Samedan, Schweiz",
  keywords: ["Mauro", "Blatter", "Informatik", "HSLU", "Samedan", "Engadin", "St.Moritz", "Luzern", "Software Engineer", "Fotografie", "Blog"],
  /** Optional */
  email: "",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/mau_bla11/" },
  { label: "KIBLA", href: "https://www.kibla.ch" },
];

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];
