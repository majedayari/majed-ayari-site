import { ArrowRight } from "lucide-react";
import { CASES } from "@/lib/cases";
import { getById } from "@/lib/structure";
import { SectionHeading } from "./ui/SectionHeading";

/** Accueil : uniquement les études de cas publiées (clients nommés avec accord, chiffres réels et sourcés). */
export function CaseStudies() {
  return (
    <section id="etudes-de-cas" className="bg-cream py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Études de cas"
          title="Des résultats mesurés, avec leurs sources"
          subtitle="Chaque chiffre vient des outils du client (Search Console) et indique sa période."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((cs) => {
            const page = getById(cs.id);
            return (
              <article key={cs.id} className="flex flex-col rounded-3xl border border-ink/10 bg-white p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-ink">{cs.client}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{cs.service}</span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{cs.sector}</p>
                <p className="mt-5 text-base leading-snug text-ink">{cs.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/10 py-5">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl font-bold text-accent sm:text-3xl">{m.value}</div>
                      <div className="mt-1 text-xs leading-tight text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
                {page && (
                  <a href={page.url} className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
                    {page.primaryQuery}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
