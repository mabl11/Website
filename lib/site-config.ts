export type NavItem = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Mauro",
  description: "Persönliche Website von Mauro: About, Fotos und Blog.",
  location: "Luzern / Samedan, Schweiz",
  instagramUrl: "https://www.instagram.com/",
};

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];