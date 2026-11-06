export type BlogPost = {
  title: string;
  /** ISO-Datum, z. B. "2025-11-01" */
  date: string;
  excerpt: string;
  category: string;
};

/** Platzhalter-Beiträge — durch echte Artikel ersetzen */
export const posts: BlogPost[] = [
  {
    title: "Von der Elektronik-Lehre ins Informatikstudium",
    date: "2025-10-12",
    excerpt: "Was ich aus vier Jahren Lehre mitgenommen habe und warum der Wechsel an die HSLU der richtige Schritt war.",
    category: "Studium",
  },
  {
    title: "Software im Alltag",
    date: "2025-09-03",
    excerpt: "Ein Einblick in meinen Alltag als Software Engineer.",
    category: "Technik",
  },
  {
    title: "Warum Sport mich weiterbringt",
    date: "2025-07-21",
    excerpt: "Von der RS bis heute: Wie Bewegung zur wichtigsten Energiequelle geworden ist.",
    category: "Sport",
  },
];
