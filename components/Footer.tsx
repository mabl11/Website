"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  // Auf der Startseite gibt es laut Design keine Fusszeile
  if (usePathname() === "/") return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.spalte}>
        <p className={styles.marke}>Mauro</p>
        <p className={styles.gedaempft}>Luzern / Samedan, Schweiz</p>
      </div>
      <div className={`${styles.spalte} ${styles.rechts}`}>
        <p className={styles.titel}>Kontakt</p>
        <p className={styles.links}>
          <a href="mailto:some@email.ch">E-Mail</a>
          <a href="https://instagram.com/">Instagram</a>
        </p>
        <p className={styles.gedaempft}>© {new Date().getFullYear()} Mauro</p>
      </div>
    </footer>
  );
}