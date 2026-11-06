"use client";

import { useEffect, useState } from "react";
import styles from "./hero-greetings.module.css";

export type Greeting = {
  text: string;
  lang: string;
};

type HeroGreetingsProps = {
  greetings: Greeting[];
  /** Anzeigedauer pro Begrüssung in ms */
  interval?: number;
};

/**
 * Startscreen: Die Begrüssungen wechseln automatisch nacheinander
 * (Guten Tag → Hi! → Bun di → Ciao → …).
 */
export function HeroGreetings({ greetings, interval = 2400 }: HeroGreetingsProps) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const previous = started ? (index - 1 + greetings.length) % greetings.length : null;

  useEffect(() => {
    // Bei «Bewegung reduzieren» bleibt die erste Begrüssung stehen
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setStarted(true);
      setIndex((current) => (current + 1) % greetings.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [greetings.length, interval]);

  return (
    <main className={styles.hero} data-hero="">
      <h1 className="text-display">
        {/* Screenreader lesen alle Begrüssungen einmal vor */}
        <span className="visually-hidden">{greetings.map((g) => g.text).join(", ")}</span>
        <span className={styles.rotator} aria-hidden="true">
          {greetings.map(({ text, lang }, i) => (
            <span
              key={lang}
              lang={lang}
              className={styles.word}
              data-state={i === index ? "active" : i === previous ? "exit" : "idle"}
            >
              {text}
            </span>
          ))}
        </span>
      </h1>
    </main>
  );
}
