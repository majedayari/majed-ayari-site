"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { PLANS } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Pricing() {
  return (
    <section id="tarifs" className="bg-cream py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des forfaits clairs, sans surprise"
          subtitle="Accompagnement mensuel, résiliable. Le bon point de départ selon votre priorité — souvent combinés pour plus d'impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? "bg-ink text-white shadow-2xl ring-2 ring-accent"
                  : "border border-ink/10 bg-white text-ink hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  <Star className="h-3 w-3 fill-white" /> Le plus demandé
                </span>
              )}

              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlight ? "text-white/65" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span
                  className={`pb-1 text-sm ${
                    plan.highlight ? "text-white/60" : "text-muted"
                  }`}
                >
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3 border-t pt-7 text-sm"
                  style={{ borderColor: plan.highlight ? "rgba(255,255,255,0.12)" : "rgba(10,15,31,0.1)" }}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlight ? "text-accent-bright" : "text-accent"
                      }`}
                    />
                    <span className={plan.highlight ? "text-white/80" : "text-ink/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 ${plan.highlight ? "btn-primary" : "btn-dark"}`}
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted">
          Besoin d'un accompagnement sur mesure ou multi-canal&nbsp;?{" "}
          <a href="#contact" className="font-semibold text-accent hover:underline">
            Parlons-en
          </a>
          .
        </p>
      </div>
    </section>
  );
}
