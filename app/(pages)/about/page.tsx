import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { DetailList } from "@/components/detail-list";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { about, cv, details } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/structured-data";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `${about.lead} ${about.work}`,
  path: "/about",
  type: "profile",
});

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <section className={styles.intro} aria-labelledby="about-title">
        {/* Platzhalter, bis ein echtes Porträt da ist */}
        <div className={`${styles.portrait} enter`}>
          <div className={styles.portraitImage}>
            <Image
              src="/images/about/misterm.jpg"
              alt="Que sun eau."
              fill
              preload
              sizes="(max-width: 48rem) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h1 id="about-title" className="enter" style={delay(160)}>
            {about.title}
          </h1>
          <p className="text-lead enter" style={delay(240)}>
            {about.lead}
          </p>
          <p className={`${styles.muted} enter`} style={delay(320)}>
            {about.intro}
          </p>

          <Reveal className={styles.block}>
            <h2 className="text-h3">{about.workTitle}</h2>
            <p className={styles.muted}>{about.work}</p>
          </Reveal>

          <Reveal>
            <DetailList items={details} />
          </Reveal>
        </div>
      </section>

      <section className={styles.cv} aria-labelledby="cv-title">
        <Reveal>
          <h2 id="cv-title" className="text-h1">
            Lebenslauf
          </h2>
        </Reveal>
        <Timeline entries={cv} />
      </section>
    </>
  );
}
