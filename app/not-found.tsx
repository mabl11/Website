import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "grid",
        alignContent: "center",
        justifyItems: "start",
        gap: "1.5rem",
        minHeight: "100svh",
        padding: "4rem var(--gutter)",
      }}
    >
      <p className="text-small" style={{ color: "var(--color-accent)", fontWeight: 500 }}>
        404
      </p>
      <h1>Diese Seite gibt es nicht.</h1>
      <p className="text-lead">Vielleicht hat sie sich in den Bergen verirrt.</p>
      <Link href="/" className="link">
        Zur Startseite
      </Link>
    </main>
  );
}
