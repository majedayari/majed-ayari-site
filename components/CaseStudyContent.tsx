import { ArrowUpRight } from "lucide-react";
import type { CaseStudyPage } from "@/lib/cases";

/** Corps d'une étude de cas : contexte → actions → résultats → limites → sources (chiffres datés et sourcés). */
export function CaseStudyContent({ cs }: { cs: CaseStudyPage }) {
  return (
    <article className="max-w-4xl">
      <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[160px_1fr]">
        <dt className="font-semibold text-ink">Client</dt>
        <dd>
          <a href={cs.clientUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
            {cs.client}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </dd>
        <dt className="font-semibold text-ink">Secteur</dt>
        <dd className="text-muted">{cs.sector}</dd>
        <dt className="font-semibold text-ink">Prestation</dt>
        <dd className="text-muted">{cs.service}</dd>
        <dt className="font-semibold text-ink">Période</dt>
        <dd className="text-muted">{cs.period}</dd>
      </dl>

      <p className="mt-10 text-lg leading-relaxed text-ink">{cs.summary}</p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {cs.metrics.map((m) => (
          <li key={m.label} className="rounded-2xl border border-ink/10 bg-cream p-6">
            <p className="font-display text-3xl font-bold text-accent">{m.value}</p>
            <p className="mt-1 font-semibold text-ink">{m.label}</p>
            {m.detail && <p className="mt-1 text-sm text-muted">{m.detail}</p>}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-bold">Le point de départ</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
        {cs.context.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <h2 className="mt-12 font-display text-2xl font-bold">Ce que j'ai fait</h2>
      <ol className="mt-4 space-y-5">
        {cs.actions.map((a, i) => (
          <li key={a.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white">{i + 1}</span>
            <div>
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{a.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-display text-2xl font-bold">Les résultats</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
        {cs.results.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <h2 className="mt-12 font-display text-2xl font-bold">Ce que ces chiffres ne disent pas</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
        {cs.limits.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <p className="mt-10 border-t border-ink/10 pt-5 text-xs leading-relaxed text-muted">
        Sources : {cs.sources.join(" ")} Publié le{" "}
        {new Date(cs.datePublished).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} par{" "}
        <a href="/a-propos/" rel="author" className="font-medium text-accent hover:underline">Majed Ayari</a>, consultant SEO et Google Ads.
      </p>
    </article>
  );
}
