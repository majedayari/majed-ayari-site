"use client";

import { motion } from "framer-motion";
import { Unplug, Wallet, Brain } from "lucide-react";
import { PAINS } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

const icons = [Unplug, Wallet, Brain];

export function ProblemSection() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Le vrai problème"
          title="Le marketing en silos vous coûte plus cher que vous ne le croyez"
          subtitle="La plupart des entreprises empilent les prestataires et les outils. Résultat : des canaux qui se concurrencent au lieu de se renforcer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {PAINS.map((pain, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={pain.title}
                variants={staggerItem}
                className="group rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {pain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pain.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
