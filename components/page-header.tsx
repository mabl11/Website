import styles from "./page-header.module.css";

type PageHeaderProps = {
  title: string;
  lead?: string;
};

export function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {lead ? <p className={`text-lead ${styles.lead}`}>{lead}</p> : null}
    </header>
  );
}