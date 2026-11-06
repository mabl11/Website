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
  { title: "Abendrot über dem Piz Languard", place: "Pontresina", year: "2025", format: "wide" },
  { title: "Stille am Silsersee", place: "Sils", year: "2025", format: "tall" },
  { title: "Nacht über Samedan", place: "Samedan", year: "2024", format: "tall" },
  { title: "Erster Schnee", place: "Val Bever", year: "2024", format: "square" },
  { title: "Morgen am Pilatus", place: "Luzern", year: "2025", format: "square" },
  { title: "Nebel im Rheintal", place: "Sargans", year: "2023", format: "wide" },
];
