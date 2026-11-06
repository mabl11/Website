import type { CSSProperties } from "react";
import styles from "./page-header.module.css";

type PageHeaderProps = {
  title: string;
  lead?: string;
};

export function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className="enter" style={{ "--enter-delay": "0ms" } as CSSProperties}>
        {title}
      </h1>
      {lead ? (
        <p className={`text-lead enter ${styles.lead}`} style={{ "--enter-delay": "120ms" } as CSSProperties}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}
