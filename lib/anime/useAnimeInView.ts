"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Déclenche une animation une seule fois quand l'élément entre dans le viewport.
 * Renvoie un `ref` à poser sur le conteneur et un booléen `inView`.
 */
export function useAnimeInView<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "-60px"
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
