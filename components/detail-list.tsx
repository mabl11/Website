import styles from "./detail-list.module.css";

export type DetailItem = {
  label: string;
  value: string;
};

type DetailListProps = {
  items: DetailItem[];
};

export function DetailList({ items }: DetailListProps) {
  return (
    <dl className={styles.list}>
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}