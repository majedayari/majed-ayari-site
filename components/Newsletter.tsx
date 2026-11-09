"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-cream pb-24">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white px-8 py-12 sm:px-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Une stratégie d'acquisition par mois, dans votre boîte
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Des analyses concrètes sur le SEO, les Ads et la visibilité IA.
                  Pas de spam, désinscription en un clic.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@email.com"
                  className="w-full rounded-full border border-ink/15 bg-cream px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary flex-shrink-0 whitespace-nowrap"
                >
                  {done ? (
                    <>
                      Inscrit <Check className="h-4 w-4" />
                    </>
                  ) : (
                    "S'inscrire"
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
