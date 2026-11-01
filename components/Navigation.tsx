"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const links = [
  { href: "/", label: "Start" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const aufStartseite = pathname === "/";

  return (
    <nav className={`${styles.nav} ${aufStartseite ? styles.transparent : ""}`}>
      <Link href="/" className={styles.marke}>Mauro</Link>
      <ul className={styles.links}>
        {links.map((link) => {
          const aktiv = link.href === "/" ? aufStartseite : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={aktiv ? styles.aktiv : undefined}
                aria-current={aktiv ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}