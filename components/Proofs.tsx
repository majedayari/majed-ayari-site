import { ArrowUpRight, BadgeCheck, BookOpen, Mic, MapPin, Wrench } from "lucide-react";
import { CERTIFICATIONS, GBP, PROOFS, SOCIALS, TOOLS } from "@/lib/data";

/** Préfixe basePath pour les assets public/ : vide en production racine, /majed-ayari-site sur la démo Pages. */
const basePath = process.env.NEXT_BASE_PATH ?? "";

/** Preuves vérifiables (conférence, publication, fiche Google, profils) : à montrer AVANT de demander le contact. */
export function Proofs({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-labelledby="preuves" className={compact ? "py-12" : "bg-cream py-20"}>
      <div className="container-content">
        <h2 id="preuves" className="font-display text-2xl font-bold">Références, certifications et outils</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {PROOFS.map((p) => (
            <li key={p.url} className="rounded-2xl border border-ink/10 bg-white p-6">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {p.kind === "Conférence" ? <Mic className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                {p.kind}
                {p.dateLabel && ` · ${p.dateLabel}`}
              </span>
              <p className="mt-3 font-display text-lg font-semibold">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
              <a href={p.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Source : {p.source}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 md:col-span-2">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <BadgeCheck className="h-4 w-4" /> Certifications
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c.url ?? c.name} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-cream/50 p-3 text-sm text-ink">
                  {c.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`${basePath}${c.image}`} alt={`Badge : ${c.name}`} width={64} height={64} loading="lazy" className={`h-16 w-16 shrink-0 ${c.status === "expirée" ? "opacity-60 grayscale" : ""}`} />
                  ) : (
                    <BadgeCheck className="h-16 w-16 shrink-0 text-ink/20" aria-hidden="true" />
                  )}
                  <div className="min-w-0">
                    {c.url ? <a href={c.url} target="_blank" rel="noopener" className="font-medium text-accent hover:underline">{c.name}</a> : <span className="font-medium">{c.name}</span>}
                    <p className="text-muted">{c.issuer}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      <span className={c.status === "valide" ? "font-semibold text-emerald-700" : "font-semibold text-ink/50"}>{c.status === "valide" ? "Valide" : "Expirée"}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 md:col-span-2">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <Wrench className="h-4 w-4" /> Outils au quotidien
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <li key={t} className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-sm text-ink">{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href={GBP.mapsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
            <MapPin className="h-4 w-4" /> Fiche Google : {GBP.name}
          </a>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="me noopener" className="font-medium text-ink/70 hover:text-accent">
              {s.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
