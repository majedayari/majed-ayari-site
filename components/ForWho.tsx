import { ArrowRight } from "lucide-react";
import { ICPS } from "@/lib/data";

/** « Pour qui je travaille » : clients idéaux, Tunisie d'abord (source : ICPS dans lib/data.ts). */
export function ForWho() {
  return (
    <section aria-labelledby="pour-qui" className="bg-cream py-20 sm:py-24">
      <div className="container-content">
        <h2 id="pour-qui" className="font-display text-2xl font-bold sm:text-3xl">Pour qui je travaille</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Des entreprises tunisiennes d'abord, et des entreprises françaises et canadiennes qui veulent un consultant senior en nearshore.
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {ICPS.map((i) => (
            <li key={i.id}>
              <a href={i.href} className="group block h-full rounded-2xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg">
                <p className="font-display text-lg font-semibold group-hover:text-accent">{i.label}</p>
                <p className="mt-2 text-sm text-muted">{i.who}</p>
                <dl className="mt-4 space-y-1.5 text-sm">
                  <div className="flex gap-2"><dt className="shrink-0 font-semibold text-ink">Besoin :</dt><dd className="text-muted">{i.need}</dd></div>
                  <div className="flex gap-2"><dt className="shrink-0 font-semibold text-ink">Mon offre :</dt><dd className="text-muted">{i.offer}</dd></div>
                </dl>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">En savoir plus <ArrowRight className="h-4 w-4" /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
