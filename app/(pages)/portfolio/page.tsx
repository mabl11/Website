import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return <PageHeader title="Portfolio" lead="Einige Momente aus den Augen der Kamera." />;
}