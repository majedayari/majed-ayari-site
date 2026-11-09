import { ArrowUpRight } from "lucide-react";
import { USPS } from "@/lib/data";

/** Arguments de différenciation : seules les USP prouvées s'affichent (statut dans lib/data.ts). */
export function Differentiators({ compact = false }: { compact?: boolean }) {
  const shown = USPS.filter((u) => u.statut === "prouvee");
  return (
    <section aria-labelledby="differences" className={compact ? "py-12" : "bg-white py-20 sm:py-24"}>
      <div className="container-content">
        <h2 id="differences" className="font-display text-2xl font-bold sm:text-3xl">Ce qui me distingue</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {shown.map((u) => (
            <li key={u.id} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <p className="font-display text-lg font-semibold">{u.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{u.text}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{u.proof}</p>
              {u.href && (
                <a href={u.href} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                  Voir la preuve <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
