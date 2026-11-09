"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { svg, animate, stagger } from "animejs";
import { ArrowRight } from "lucide-react";
import { SYNERGY } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { useAnimeInView } from "@/lib/anime/useAnimeInView";
import { prefersReducedMotion } from "@/lib/anime/reducedMotion";

export function Synergy() {
  const { ref, inView } = useAnimeInView<HTMLDivElement>("-120px");

  useEffect(() => {
    const root = ref.current;
    if (!root || !inView) return;

    const paths = Array.from(root.querySelectorAll<SVGPathElement>("path.synergy-line"));
    const arrows = Array.from(root.querySelectorAll<HTMLElement>(".synergy-arrow"));

    if (prefersReducedMotion()) {
      paths.forEach((p) => (p.style.opacity = "1"));
      return;
    }

    const anims = paths.map((path) => {
      path.style.opacity = "1";
      const [drawable] = svg.createDrawable(path);
      return animate(drawable, {
        draw: ["0 0", "0 1"],
        duration: 1500,
        ease: "inOutQuad",
      });
    });

    if (arrows.length) {
      anims.push(
        animate(arrows, {
          scale: [1, 1.18, 1],
          opacity: [0.85, 1, 0.85],
          duration: 1800,
          loop: true,
          ease: "inOutSine",
          delay: stagger(220),
        })
      );
    }

    return () => anims.forEach((a) => a.revert());
  }, [inView, ref]);

  return (
    <section id="synergie" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-content relative">
        <SectionHeading
          dark
          eyebrow="L'effet de levier"
          title="Le plan d'activation en 3 phases"
          subtitle="Activés ensemble, vos canaux ne s'additionnent pas — ils se multiplient. Voici la séquence que je mets en place."
        />

        <div ref={ref} className="relative mt-16">
          {/* Ligne horizontale (desktop) tracée par anime.js */}
          <svg
            className="pointer-events-none absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="synergy-line"
              d="M0 1 L1000 1"
              fill="none"
              stroke="url(#synergyGrad)"
              strokeWidth={2}
              strokeLinecap="round"
              style={{ opacity: 0 }}
            />
            <defs>
              <linearGradient id="synergyGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ligne verticale (mobile) */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 lg:hidden"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="synergy-line"
              d="M1 0 L1 1000"
              fill="none"
              stroke="url(#synergyGradV)"
              strokeWidth={2}
              strokeLinecap="round"
              style={{ opacity: 0 }}
            />
            <defs>
              <linearGradient id="synergyGradV" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative grid items-stretch gap-6 lg:grid-cols-3"
          >
            {SYNERGY.map((phase, i) => (
              <motion.div key={phase.step} variants={staggerItem} className="relative">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink/80 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-bold text-white/10">
                      {phase.step}
                    </span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-bright">
                      {phase.channel}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {phase.description}
                  </p>
                </div>

                {i < SYNERGY.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <div className="synergy-arrow flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
