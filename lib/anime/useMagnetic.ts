"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { prefersReducedMotion } from "./reducedMotion";

/**
 * Effet "magnétique" : l'élément suit légèrement le curseur au survol,
 * puis revient en place avec un rebond élastique.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(
  strength = 0.4
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Ignore les appareils tactiles (pas de survol pertinent)
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      animate(el, { translateX: x, translateY: y, duration: 400, ease: "outQuad" });
    };

    const onLeave = () => {
      animate(el, {
        translateX: 0,
        translateY: 0,
        duration: 700,
        ease: "outElastic(1, .5)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
