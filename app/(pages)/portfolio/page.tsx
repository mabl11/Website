import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const description = "Einige Momente aus den Augen der Kamera — Fotografie aus dem Engadin und der Zentralschweiz.";

export const metadata: Metadata = pageMetadata({ title: "Portfolio", description, path: "/portfolio" });

export default function PortfolioPage() {
  return (
    <>
      <PageHeader title="Portfolio" lead="Einige Momente aus den Augen der Kamera." />

      <ul className={styles.grid}>
        {portfolio.map((item, i) => (
          <Reveal as="li" key={item.title} className={styles.item} data-format={item.format} delay={(i % 2) * 100}>
            <figure className={styles.figure}>
              <div className={styles.media}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title}, ${item.place}`}
                    fill
                    sizes={item.format === "wide" ? "(max-width: 48rem) 100vw, 90vw" : "(max-width: 48rem) 100vw, 45vw"}
                    className={styles.image}
                  />
                ) : (
                  <span className={styles.placeholder} aria-hidden="true">
                    Foto folgt
                  </span>
                )}
              </div>
              <figcaption className={styles.caption}>
                <span>{item.title}</span>
                <span className={styles.meta}>
                  {item.place}, {item.year}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </>
  );
}
