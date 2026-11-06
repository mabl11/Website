"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type HeaderFrameProps = {
  children: ReactNode;
  className?: string;
  variant: "solid" | "transparent";
};

/**
 * Steuert das Scroll-Verhalten des Headers:
 * - blendet beim Runterscrollen aus und beim Hochscrollen wieder ein
 * - «transparent» bleibt über dem Hero durchsichtig und wird danach solide
 */
export function HeaderFrame({ children, className, variant }: HeaderFrameProps) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [overHero, setOverHero] = useState(variant === "transparent");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const headerHeight = ref.current?.offsetHeight ?? 0;

      setScrolled(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > headerHeight * 2);
        lastY = y;
      }

      if (variant === "transparent") {
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        // Hero ist evtl. noch nicht im DOM (Streaming) — dann Zustand beibehalten
        if (hero) setOverHero(hero.getBoundingClientRect().bottom > headerHeight);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [variant]);

  return (
    <header
      ref={ref}
      className={className}
      data-variant={variant}
      data-over-hero={overHero}
      data-scrolled={scrolled}
      data-hidden={hidden}
      onFocus={() => setHidden(false)}
    >
      {children}
    </header>
  );
}
