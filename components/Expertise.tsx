"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Expertise() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Trois expertises, une stratégie"
          title="Chaque canal a un rôle précis"
          subtitle="Je ne vends pas des prestations isolées. J'active le bon canal au bon moment pour qu'ils s'additionnent."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white shadow-lg transition-colors duration-300 group-hover:bg-accent">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {service.promise}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent"
                >
                  Discuter de ce canal
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
