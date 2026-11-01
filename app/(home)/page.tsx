import styles from "./page.module.css";

const greetings = [
  { text: "Bun di", lang: "rm" },
  { text: "Guten Tag", lang: "de" },
  { text: "Ciao", lang: "it" },
  { text: "Hi!", lang: "en" },
];

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <h1 className="text-display">
        {greetings.map(({ text, lang }) => (
          <span key={lang} lang={lang} className={styles.line}>
            {text}
          </span>
        ))}
      </h1>
    </main>
  );
}