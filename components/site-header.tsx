import Link from "next/link";
import { mainNavigation, siteConfig } from "@/lib/site-config";
import { HeaderFrame } from "./header-frame";
import { NavLink } from "./nav-link";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  variant?: "solid" | "transparent";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  return (
    <HeaderFrame className={styles.header} variant={variant}>
      <Link href="/" className={styles.brand}>
        {siteConfig.name}
      </Link>
      <nav aria-label="Hauptnavigation">
        <ul className={styles.list}>
          {mainNavigation.map((item) => (
            <li key={item.href} className={item.href === "/" ? styles.homeItem : undefined}>
              <NavLink href={item.href} className={styles.link} activeClassName={styles.active}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderFrame>
  );
}
