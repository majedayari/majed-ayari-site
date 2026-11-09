"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { DrawCheck } from "./anime/DrawCheck";
import { Offices } from "./Offices";

const PROJECT_TYPES = ["SEO", "Google Ads", "Meta Ads", "Visibilité IA (GEO)", "Multi-canal"];
const BUDGETS = ["< 1 000 $/mois", "1 000 – 3 000 $/mois", "3 000 – 5 000 $/mois", "5 000 $+/mois"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: PROJECT_TYPES[0],
    budget: BUDGETS[0],
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis — ${form.type} (${form.name})`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\n` +
        `Type de projet : ${form.type}\nBudget : ${form.budget}\n\nProjet :\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Devis gratuit</span>
          <h2 className="section-heading mt-5 text-ink">
            Parlez-moi de votre projet
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Décrivez votre situation en quelques lignes. Je reviens vers vous sous
            48 h avec un premier diagnostic et les pistes prioritaires — sans
            engagement.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink/80">
            {[
              "Réponse personnalisée sous 48 h",
              "Premier diagnostic offert",
              "Aucun engagement, aucun jargon",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-sm font-semibold text-ink">{SITE.workFrom}</p>
            <div className="mt-4">
              <Offices />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-ink/10 bg-cream p-7 shadow-sm sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <DrawCheck size={64} className="text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  Votre client mail s'est ouvert
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Envoyez le message pré-rempli et je vous réponds très vite. Un
                  souci&nbsp;? Écrivez directement à {SITE.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink">
                      Nom complet
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Votre nom"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="vous@entreprise.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink">
                      Téléphone
                    </label>
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Optionnel"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink">
                      Type de projet
                    </label>
                    <select value={form.type} onChange={update("type")} className={fieldClass}>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink">
                    Budget mensuel
                  </label>
                  <select value={form.budget} onChange={update("budget")} className={fieldClass}>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink">
                    Votre projet
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Objectifs, contexte, échéances…"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary mt-2 w-full"
                >
                  Envoyer ma demande
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
