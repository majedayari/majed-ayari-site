"use client";

import { AnimeCounter } from "@/components/anime/AnimeCounter";

/**
 * Conservé pour compatibilité d'API (value/prefix/suffix). Délègue désormais
 * au compteur anime.js. Tous les appels existants restent inchangés.
 */
export function AnimatedNumber({
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
  return (
    <AnimeCounter value={value} prefix={prefix} suffix={suffix} duration={duration} />
  );
}
