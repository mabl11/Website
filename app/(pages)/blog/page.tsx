import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return <PageHeader title="Blog" lead="Alles mögliche. Pudess esser tuot!" />;
}