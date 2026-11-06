import Link from "next/link";
import { cacheLife } from "next/cache";
import { mainNavigation, siteConfig, socialLinks } from "@/lib/site-config";
import { Reveal } from "./reveal";
import styles from "./site-footer.module.css";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCurrentYear();
  const primaryContact = siteConfig.email
    ? { label: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false }
    : { label: socialLinks[0].label, href: socialLinks[0].href, external: true };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Reveal>
          <p className={styles.eyebrow}>Kontakt</p>
        </Reveal>
        <Reveal delay={100}>
          <a
            href={primaryContact.href}
            className={styles.cta}
            {...(primaryContact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span>{primaryContact.label}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </Reveal>
      </div>

      <div className={styles.columns}>
        <nav aria-label="Footer-Navigation" className={styles.column}>
          <p className={styles.label}>Navigation</p>
          <ul className={styles.list}>
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <p className={styles.label}>Social</p>
          <ul className={styles.list}>
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.label}>Standort</p>
          <p className={styles.text}>{siteConfig.location}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {siteConfig.name}
        </p>
        <a href="#top" className={styles.toTop}>
          Nach oben <span aria-hidden="true">↑</span>
        </a>
      </div>

      <p className={styles.wordmark} aria-hidden="true">
        {siteConfig.name}
      </p>
    </footer>
  );
}
