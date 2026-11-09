"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { useAnimeInView } from "@/lib/anime/useAnimeInView";
import { useMagnetic } from "@/lib/anime/useMagnetic";
import { prefersReducedMotion } from "@/lib/anime/reducedMotion";

const TITLE_WORDS = [
  "Prêt",
  "à",
  "faire",
  "décoller",
  "votre",
  "acquisition ?",
];

export function CtaBlock() {
  const { ref, inView } = useAnimeInView<HTMLDivElement>("-80px");
  const haloRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.5);

  // Titre éclaté à l'entrée en vue
  useEffect(() => {
    const root = ref.current;
    if (!root || !inView || prefersReducedMotion()) return;
    const words = root.querySelectorAll(".cta-word");
    utils.set(words, { opacity: 0 });
    const anim = animate(words, {
      opacity: [0, 1],
      translateY: [28, 0],
      filter: ["blur(8px)", "blur(0px)"],
      duration: 800,
      delay: stagger(55),
      ease: "outExpo",
    });
    return () => {
      anim.revert();
    };
  }, [inView, ref]);

  // Halos pulsés en boucle continue
  useEffect(() => {
    const root = haloRef.current;
    if (!root || prefersReducedMotion()) return;
    const halos = root.querySelectorAll(".cta-halo");
    const anim = animate(halos, {
      scale: [1, 1.25, 1],
      opacity: [0.5, 0.85, 0.5],
      duration: 6000,
      loop: true,
      ease: "inOutSine",
      delay: stagger(800),
    });
    return () => {
      anim.revert();
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container-content">
        <Reveal>
          <div
            ref={haloRef}
            className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center text-white sm:px-16"
          >
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="cta-halo pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
            <div className="cta-halo pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent-bright/20 blur-[100px]" />

            <div ref={ref} className="relative mx-auto max-w-2xl">
              <span className="eyebrow">Places limitées</span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {TITLE_WORDS.map((w, i) => (
                  <span key={i} className="cta-word mr-[0.26em] inline-block">
                    {w}
                  </span>
                ))}
              </h2>
              <p className="mt-5 text-base text-white/65 sm:text-lg">
                Je n'accepte qu'un nombre limité de mandats à la fois pour garantir
                un suivi sérieux. Discutons de vos objectifs — sans engagement.
              </p>
              <a ref={ctaRef} href="#contact" className="btn-primary mt-9">
                Réserver un échange
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
