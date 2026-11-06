"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = Omit<HTMLAttributes<HTMLElement>, "style"> & {
  children: ReactNode;
  /** HTML-Element, das gerendert wird (Standard: div) */
  as?: ElementType;
  /** Verzögerung in ms, z. B. für gestaffelte Listen */
  delay?: number;
  className?: string;
};

/**
 * Blendet Inhalte sanft ein, sobald sie in den sichtbaren Bereich scrollen.
 * Die Optik steckt in globals.css ([data-reveal]); ohne JS bleibt alles sichtbar.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      {...rest}
      ref={ref}
      className={className}
      data-reveal=""
      data-visible={visible}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
