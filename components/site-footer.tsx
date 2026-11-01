import { siteConfig } from "@/lib/site-config";
import styles from "./site-footer.module.css";

type SiteFooterProps = {
  variant?: "dark" | "accent";
};

export function SiteFooter({ variant = "dark" }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-variant={variant}>
      <div className={styles.column}>
        <p className={styles.brand}>{siteConfig.name}</p>
        <p className={styles.muted}>{siteConfig.location}</p>
      </div>
      <div className={`${styles.column} ${styles.end}`}>
        <p className={styles.label}>Kontakt</p>
        <a href={siteConfig.instagramUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <p className={styles.muted}>
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}