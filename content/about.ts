import type { DetailItem } from "@/components/detail-list";
import type { TimelineEntry } from "@/components/timeline";

export const about = {
  title: "Über mich",
  lead: "Ich bin Mauro, aufgewachsen in Samedan und studiere Informatik in Luzern.",
  intro:
    "23 Jahre jung. Sport bringt mich weiter. Interessiert in vielen Bereichen, egal ob Technologie, Informatik, Elektronik oder auch Politik und Geschichte!",
  workTitle: "Was ich mache",
  work: "Ich studiere Informatik an der HSLU in Rotkreuz und arbeite nebenbei als Operations Engineer bei Urban Connect.",
};

export const details: DetailItem[] = [
  { label: "Geboren am", value: "11. November 2003" },
  { label: "Ursprünglich aus", value: "Samedan" },
  { label: "Lebt in", value: "Luzern" },
];

export const cv: TimelineEntry[] = [
    {
    period: "August 2026",
    title: "Summerschool Blockchain",
    description: "UBC Vancouver, Cryptobros und kultureller Austausch",
  },
  {
    period: "Seit 2025",
    title: "Bachelor in Informatik",
    description: "Rotkreuz, Horizont im Techbereich erweitern",
  },
  {
    period: "Sommer 2024",
    title: "RS – Aufklärer Leicht",
    description: "Bière, Durchhaltevermögen und Sport als Energiequelle kennengelernt",
  },
  {
    period: "2023 bis 2024",
    title: "Berufsmaturität Wirtschaft",
    description: "Chur, Interesse für Finanzmärkte und Wirtschaft aufgebaut",
  },
  {
    period: "2019 bis 2023",
    title: "Lehre als Elektroniker",
    description: "Landquart / Sargans, Grundlagen im HW/SW-Bereich aufgebaut",
  },
];