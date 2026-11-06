import { Reveal } from "./reveal";
import styles from "./timeline.module.css";

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
};

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className={styles.list}>
      {entries.map((entry, i) => (
        <Reveal as="li" key={`${entry.period}-${entry.title}`} className={styles.entry} delay={i * 80}>
          <p className={styles.period}>{entry.period}</p>
          <div className={styles.body}>
            <h3>{entry.title}</h3>
            <p className={styles.description}>{entry.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
