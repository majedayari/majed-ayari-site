"use client";

import { useEffect, useRef } from "react";
import { svg, createTimeline } from "animejs";
import { prefersReducedMotion } from "@/lib/anime/reducedMotion";

/**
 * Coche dessinée par anime.js : le cercle se trace, puis le check.
 * Joue à l'apparition du composant (ex. état de succès d'un formulaire).
 */
export function DrawCheck({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const circle = root.querySelector<SVGCircleElement>(".dc-circle");
    const check = root.querySelector<SVGPathElement>(".dc-check");
    if (!circle || !check) return;

    circle.style.opacity = "1";
    check.style.opacity = "1";

    if (prefersReducedMotion()) return;

    const [dCircle] = svg.createDrawable(circle);
    const [dCheck] = svg.createDrawable(check);

    const tl = createTimeline();
    tl.add(dCircle, { draw: ["0 0", "0 1"], duration: 650, ease: "outQuart" }).add(
      dCheck,
      { draw: ["0 0", "0 1"], duration: 450, ease: "outQuart" },
      "-=120"
    );

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle
        className="dc-circle"
        cx="26"
        cy="26"
        r="24"
        stroke="currentColor"
        strokeWidth="3"
        style={{ opacity: 0 }}
      />
      <path
        className="dc-check"
        d="M15 27 l7 7 l15 -16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0 }}
      />
    </svg>
  );
}
