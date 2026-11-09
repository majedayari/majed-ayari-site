"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { useAnimeInView } from "@/lib/anime/useAnimeInView";
import { prefersReducedMotion } from "@/lib/anime/reducedMotion";

/**
 * Compteur piloté par anime.js : compte de 0 à `value` (easeOutExpo, format FR)
 * lorsqu'il entre dans le viewport. Remplace la logique manuelle requestAnimationFrame.
 */
export function AnimeCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1700,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const { ref, inView } = useAnimeInView<HTMLSpanElement>("-40px");
  const done = useRef(false);

  const format = (n: number) =>
    `${prefix}${Math.round(n).toLocaleString("fr-FR")}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || done.current) return;
    done.current = true;

    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }

    const obj = { v: 0 };
    const anim = animate(obj, {
      v: value,
      duration,
      ease: "outExpo",
      onUpdate: () => {
        if (ref.current) ref.current.textContent = format(obj.v);
      },
    });

    return () => {
      anim.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return <span ref={ref}>{format(0)}</span>;
}
