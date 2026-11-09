import { ArrowRight } from "lucide-react";
import type { Block, PageContent } from "@/lib/pageContent";
import { USPS } from "@/lib/data";

const MARKER = /(\[À (?:COMPLÉTER|CONFIRMER)[^\]]*\])/g;

/** Texte avec les marqueurs « [À COMPLÉTER …] » surlignés (visibles seulement tant que la page n'est pas publiée). */
function Txt({ text }: { text: string }) {
  return (
    <>
      {text.split(MARKER).map((part, i) =>
        i % 2 === 1 ? ( // split avec groupe capturant : les indices impairs sont les marqueurs
          <mark key={i} className="rounded bg-amber-100 px-1 text-amber-900">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "p":
      return <p className="mt-4 leading-relaxed text-muted"><Txt text={b.text} /></p>;
    case "list":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
          {b.items.map((t) => <li key={t}><Txt text={t} /></li>)}
        </ul>
      );
    case "steps":
      return (
        <ol className="mt-5 space-y-4">
          {b.items.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">{i + 1}</span>
              <p className="leading-relaxed text-muted"><span className="font-semibold text-ink">{s.title}.</span> <Txt text={s.text} /></p>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-cream text-xs uppercase tracking-[0.12em] text-ink/70">
              <tr>{b.head.map((h, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-t border-ink/10 align-top">
                  {r.map((c, j) => (
                    <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-medium text-ink" : "text-muted"}`}><Txt text={c} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "link":
      return (
        <p className="mt-4">
          <a href={b.href} className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
            {b.text} <ArrowRight className="h-4 w-4" />
          </a>
        </p>
      );
  }
}

/** Pastille « Ce qui me distingue » : affichée seulement si l'USP reliée est prouvée (statut dans lib/data.ts). */
function UspChip({ id }: { id?: string }) {
  const u = id ? USPS.find((x) => x.id === id && x.statut === "prouvee") : undefined;
  if (!u) return null;
  return (
    <p className="mt-3">
      <a href={u.href ?? "/a-propos/"} className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/15">
        Ce qui me distingue : {u.title}
      </a>
    </p>
  );
}

/** Corps des pages services et formations : réponse directe, sections, FAQ, appel à l'action. */
export function PageSections({ content }: { content: PageContent }) {
  return (
    <div className="max-w-4xl">
      <p className="rounded-2xl border border-accent/20 bg-accent/5 px-6 py-5 text-lg leading-relaxed text-ink"><Txt text={content.answer} /></p>

      {content.sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id} className="mt-12">
          <h2 id={s.id} className="font-display text-2xl font-bold">{s.h2}</h2>
          <UspChip id={s.usp} />
          {s.blocks.map((b, i) => <BlockView key={i} b={b} />)}
        </section>
      ))}

      <section aria-labelledby="faq" className="mt-14">
        <h2 id="faq" className="font-display text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-5 divide-y divide-ink/10 rounded-2xl border border-ink/10">
          {content.faq.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-semibold text-ink">{f.q}</summary>
              <p className="mt-3 leading-relaxed text-muted"><Txt text={f.a} /></p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-ink px-8 py-10 text-white">
        <h2 className="font-display text-2xl font-bold">{content.cta.title}</h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/70">{content.cta.text}</p>
        <a href="/contact/" className="btn-primary mt-6">
          {content.cta.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </div>
  );
}
