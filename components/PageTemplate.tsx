import { ArrowRight, ChevronRight } from "lucide-react";
import { backlinksOf, breadcrumbsOf, childrenOf, contextualLinks, isPublished, PERSONAS, type SitePage } from "@/lib/structure";
import { assertNoPlaceholders, getContent } from "@/lib/pageContent";
import { PageSections } from "@/components/PageSections";
import { Differentiators } from "@/components/Differentiators";
import { pageJsonLd } from "@/lib/jsonld";
import { QuoteForm } from "@/components/QuoteForm";
import { TunisiaNote } from "@/components/TunisiaNote";
import { Proofs } from "@/components/Proofs";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { ProfileContent } from "@/components/ProfileContent";
import { getCase } from "@/lib/cases";

const SHOW_BRIEF = process.env.NODE_ENV === "development";

/** Gabarit commun : fil d'Ariane, H1, pages filles (hubs), maillage contextuel, JSON-LD.
 *  En `npm run dev`, un encadré « brief seovoc » rappelle la cible de la page (jamais dans le build). */
export function PageTemplate({ page }: { page: SitePage }) {
  const crumbs = breadcrumbsOf(page.url);
  const children = childrenOf(page.url);
  const related = contextualLinks(page);
  const linked = backlinksOf(page);
  const isContact = page.id === "H05";
  const cs = getCase(page.id);
  const content = getContent(page.id);
  // Page publiée : plus aucun champ « À COMPLÉTER » toléré. Squelette : contenu visible en dev seulement.
  if (content && isPublished(page)) assertNoPlaceholders(page.id);
  const showContent = !!content && (isPublished(page) || SHOW_BRIEF);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd(page)) }} />

      <section className="bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="container-content">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {crumbs.map((c, i) => (
                <li key={c.url} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {i < crumbs.length - 1 ? (
                    <a href={c.url} className="transition-colors hover:text-white">{c.label}</a>
                  ) : (
                    <span aria-current="page" className="text-white/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">{page.label}</p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{page.h1}</h1>
          {!isContact && page.cluster !== "Légal" && (
            <a href="/contact/" className="btn-primary mt-9">
              Réserver un diagnostic
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      {isContact ? (
        <QuoteForm />
      ) : (
        <section className="container-content py-16">
          {cs && <CaseStudyContent cs={cs} />}
          {page.id === "H02" && <ProfileContent />}
          {showContent && <PageSections content={content} />}

          {!cs && page.id !== "H02" && !showContent && page.status !== "publie" && (
            <p className="rounded-2xl border border-ink/10 bg-cream px-6 py-5 text-sm text-muted">
              Cette page est en cours de rédaction.
            </p>
          )}

          {children.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold">Dans cette rubrique</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {children.map((c) => (
                  <li key={c.id}>
                    <a href={c.url} className="group block h-full rounded-2xl border border-ink/10 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg">
                      <span className="font-display text-lg font-semibold group-hover:text-accent">{c.label}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">{c.h1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {linked.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold">Guides et outils liés</h2>
              <ul className="mt-4 space-y-2">
                {linked.map((r) => (
                  <li key={r.id}>
                    <a href={r.url} className="font-medium text-accent hover:underline">{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold">À lire aussi</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  // Ancre = requête primaire de la page cible (règle de maillage seovoc)
                  <li key={r.id}>
                    <a href={r.url} className="font-medium text-accent hover:underline">{r.primaryQuery}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {page.id === "H02" && <Differentiators compact />}
      {["H02", "H05", "H06"].includes(page.id) && <Proofs compact />}

      <TunisiaNote page={page} />

      {SHOW_BRIEF && page.cluster !== "Légal" && (
        <aside className="container-content pb-16">
          <details open className="rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6 text-sm text-ink">
            <summary className="cursor-pointer font-semibold">Brief seovoc · {page.id} · {page.priority} (visible en dev uniquement)</summary>
            <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-[200px_1fr]">
              <dt className="font-semibold">Requête primaire</dt><dd>{page.primaryQuery}</dd>
              <dt className="font-semibold">Requêtes secondaires</dt><dd>{page.queries.join(" · ") || "—"}</dd>
              <dt className="font-semibold">Cluster / intention</dt><dd>{page.cluster} · {page.intent}</dd>
              <dt className="font-semibold">Personas</dt><dd>{page.personas.map((p) => PERSONAS[p] ?? p).join(" · ")}</dd>
              <dt className="font-semibold">Type de page</dt><dd>{page.pageType}</dd>
              <dt className="font-semibold">about / mentions</dt><dd>{page.about} — {page.mentions.join(", ")}</dd>
              <dt className="font-semibold">Données structurées</dt><dd>{page.schema}</dd>
              <dt className="font-semibold">Requête Tunisie (encart)</dt><dd>{page.tunisie?.query ?? "—"}</dd>
              <dt className="font-semibold">Liens entrants clés</dt><dd>{page.inbound}</dd>
              <dt className="font-semibold">Écart concurrents</dt><dd>{page.gap || "—"}</dd>
              {page.lock && (<><dt className="font-semibold text-red-700">Verrou</dt><dd className="text-red-700">{page.lock}</dd></>)}
            </dl>
          </details>
        </aside>
      )}
    </main>
  );
}
