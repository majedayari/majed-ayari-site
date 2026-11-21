"use client";

import { useRef } from "react";
import { createScope, createTimeline, animate, stagger, utils, type Scope } from "animejs";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { SITE } from "@/lib/data";
import { useIsomorphicLayoutEffect } from "@/lib/anime/useIsomorphicLayoutEffect";
import { useMagnetic } from "@/lib/anime/useMagnetic";
import { prefersReducedMotion } from "@/lib/anime/reducedMotion";

// H1 = positionnement : l'agence d'acquisition des PME québécoises
const TITLE_TOKENS: { t: string; grad?: boolean }[] = [
  { t: "L'agence" },
  { t: "d'acquisition" },
  { t: "des" },
  { t: "PME" },
  { t: "québécoises", grad: true },
  { t: ":" },
  { t: "SEO," },
  { t: "Google" },
  { t: "Ads," },
  { t: "Meta" },
  { t: "Ads" },
  { t: "et" },
  { t: "visibilité" },
  { t: "IA,", grad: true },
  { t: "mesurés" },
  { t: "en" },
  { t: "demandes" },
  { t: "réelles,", grad: true },
  { t: "sur" },
  { t: "vos" },
  { t: "comptes." },
];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<Scope | null>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.5);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion()) return; // contenu visible, aucune animation

    scopeRef.current = createScope({ root }).add(() => {
      // État initial (avant peinture) pour éviter tout flash
      utils.set(
        [".hero-eyebrow", ".hero-word", ".hero-sub", ".hero-cta", ".hero-star"],
        { opacity: 0 }
      );

      const tl = createTimeline({
        defaults: { ease: "outExpo", duration: 850 },
      });

      tl.add(".hero-eyebrow", { opacity: [0, 1], translateY: [16, 0], duration: 600 })
        .add(
          ".hero-word",
          {
            opacity: [0, 1],
            translateY: [44, 0],
            filter: ["blur(10px)", "blur(0px)"],
            duration: 950,
            delay: stagger(58),
          },
          "-=350"
        )
        .add(".hero-sub", { opacity: [0, 1], translateY: [22, 0] }, "-=500")
        .add(".hero-cta", { opacity: [0, 1], translateY: [22, 0] }, "-=600")
        .add(
          ".hero-star",
          {
            opacity: [0, 1],
            scale: [0, 1],
            duration: 550,
            delay: stagger(85),
            ease: "outBack",
          },
          "-=350"
        );

      // Orbe flottant — boucle organique sur 2 axes
      animate(".hero-orb", {
        translateY: [0, -24, 0],
        translateX: [0, 16, 0],
        duration: 9000,
        loop: true,
        ease: "inOutSine",
      });
    });

    return () => {
      scopeRef.current?.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative overflow-hidden bg-ink pb-24 pt-36 text-white sm:pb-32 sm:pt-44"
    >
      {/* Fond animé */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-accent-bright/20 blur-[130px]" />
      <span className="hero-orb pointer-events-none absolute right-[12%] top-[30%] h-3 w-3 rounded-full bg-accent-bright shadow-[0_0_40px_8px_rgba(34,211,238,0.6)]" />

      <div className="container-content relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="hero-eyebrow eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.zones}
          </span>

          <h1 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {TITLE_TOKENS.map((tok, i) => (
              <span
                key={i}
                className={`hero-word mr-[0.26em] inline-block ${
                  tok.grad ? "text-gradient" : ""
                }`}
                style={{ willChange: "transform, opacity, filter" }}
              >
                {tok.t}
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Nous pilotons votre SEO, vos campagnes Google Ads et Meta Ads, et votre
            visibilité dans ChatGPT. Un seul indicateur compte : les demandes
            réelles que nous vous apportons. Tout se passe sur vos comptes, en
            votre nom.
          </p>

          <div className="hero-cta mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a ref={ctaRef} href="#contact" className="btn-primary">
              Parlez-moi de votre projet
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#etudes-de-cas" className="btn-ghost">
              Voir les résultats
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="hero-star h-4 w-4 fill-accent-bright text-accent-bright"
                />
              ))}
            </div>
            <span>
              <span className="font-semibold text-white">
                Approche pilotée par la donnée
              </span>{" "}
              · PME du Québec · Aucune commission sur le budget pub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
