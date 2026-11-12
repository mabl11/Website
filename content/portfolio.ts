export type PortfolioItem = {
  title: string;
  place: string;
  year: string;
  format: "wide" | "tall" | "square";
  /**
   * Pfad zum Foto, z. B. "/images/portfolio/languard.jpg" (Datei in public/ ablegen).
   * Ohne Bild wird ein Platzhalter angezeigt.
   */
  image?: string;
};

export const portfolio: PortfolioItem[] = [
  { title: "Two figure`s Kiss", place: "St.Elizabeth park", year: "2026", format: "wide", image: "/images/portfolio/kiss.jpg" },
  { title: "Imperium Romanium", place: "Center of the World", year: "2023", format: "wide", image: "/images/portfolio/bellaroma.jpg" },
  { title: "Bologna during workinghours", place: "Città bolognese", year: "2024", format: "square", image: "/images/portfolio/busybologna.jpg" },
  { title: "Evening cable car", place: "Grouse Mountain", year: "2026", format: "tall", image: "/images/portfolio/grouse.jpg" },
  { title: "Early morning Piz Ot", place: "Piz Padella", year: "2024", format: "wide", image: "/images/portfolio/sunispizot.jpg" },
  { title: "BC Lions", place: "BC Place", year: "2026", format: "square", image: "/images/portfolio/bclions.jpg" },
  { title: "Unconquered Castle", place: "San Marino", year: "2023", format: "wide", image: "/images/portfolio/smcastle.jpg" },
  { title: "Snowy details", place: "Samedan", year: "2022", format: "square", image: "/images/portfolio/spitzespitzen.jpg" },
  { title: "Golden era Vancouver", place: "Waterfront", year: "2026", format: "square", image: "/images/portfolio/vancity.jpg" },
  { title: "Canadian sunfire", place: "Vancouver", year: "2026", format: "tall", image: "/images/portfolio/wildness.jpg" },
];
