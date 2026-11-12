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
  title: "Mauro — Informatik, Technik & Fotografie",
  description:
    "Persönliche Website von Mauro aus Samedan: Informatikstudent an der HSLU, Fotografie und Blog.",
  /** Produktive Domain — per NEXT_PUBLIC_SITE_URL setzen (z. B. in Vercel) */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "de_CH",
  location: "Luzern / Samedan, Schweiz",
  keywords: ["Mauro", "Informatik", "HSLU", "Samedan", "Engadin", "Luzern", "Software Engineer", "Fotografie", "Blog"],
  /** Optional — wird im Footer nur angezeigt, wenn gesetzt */
  email: "",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];
