export type BlogPost = {
  title: string;
  /** ISO-Datum, z. B. "2025-11-01" */
  date: string;
  excerpt: string;
  category: string;
};

/** Beiträge — neueste zuerst */
export const posts: BlogPost[] = [];
