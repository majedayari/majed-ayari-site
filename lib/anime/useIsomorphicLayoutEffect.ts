import { useEffect, useLayoutEffect } from "react";

// Évite l'avertissement SSR de useLayoutEffect tout en l'utilisant côté client
// (nécessaire pour poser l'état initial des animations avant le premier paint).
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
