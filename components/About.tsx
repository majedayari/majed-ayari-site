"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Quote } from "lucide-react";
import { ABOUT_STATS, SITE } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { AnimatedNumber } from "./ui/AnimatedNumber";

export function About() {
  return (
    <section id="a-propos" className="bg-white py-24 sm:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            {/* Portrait */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-ink shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE.photo}
                alt={`${SITE.name}, consultant SEO, Google Ads et référencement IA`}
                width={400}
                height={400}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Badge GEO flottant */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-xl sm:-left-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Visibilité IA</p>
                <p className="text-xs text-muted">ChatGPT · Perplexity · AI Overviews</p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />À propos
            </span>
            <h2 className="section-heading mt-5 text-ink">
              Un seul interlocuteur, une vision d'ensemble
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Je suis Majed Ayari, consultant en acquisition. Je travaille depuis
              la Tunisie (Hammamet) et le Canada (Scott, au Québec), et j'aide des
              marques en Tunisie, en France et au Québec à transformer le SEO et la
              publicité en un véritable système de croissance — du e-commerce
              cosmétique au manufacturier B2B centenaire.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Ma différence&nbsp;: au-delà du SEO classique, j'optimise votre{" "}
              <span className="font-semibold text-ink">visibilité dans les moteurs IA</span>{" "}
              (GEO). Parce que demain, être cité par ChatGPT et Perplexity comptera
              autant que d'être premier sur Google.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-ink">
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex gap-4 rounded-2xl bg-cream p-6">
              <Quote className="h-7 w-7 flex-shrink-0 text-accent" />
              <p className="text-sm italic leading-relaxed text-ink/80">
                « Je ne livre jamais une boîte noire. Vous savez toujours ce que
                chaque euro investi produit — et pourquoi. »
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
