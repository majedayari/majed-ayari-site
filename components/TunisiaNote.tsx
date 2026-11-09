import { ArrowRight, MapPin } from "lucide-react";
import { getById, type SitePage } from "@/lib/structure";

/** Encart « Tunisie » propre à chaque page (source : majed-ayari-structure/tunisie.py).
 *  Cible : le client en France ou au Québec qui cherche un prestataire en Tunisie. */
export function TunisiaNote({ page }: { page: SitePage }) {
  if (!page.tunisie) return null;
  const { title, text, link } = page.tunisie;
  const target = getById(link);
  return (
    <aside aria-labelledby={`tn-${page.id}`} className="container-content py-12">
      <div className="flex gap-5 rounded-2xl border border-accent/25 bg-cream p-6 sm:p-8">
        <MapPin aria-hidden className="mt-1 h-6 w-6 shrink-0 text-accent" />
        <div>
          <h2 id={`tn-${page.id}`} className="font-display text-xl font-bold">{title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{text}</p>
          {target && (
            <a href={target.url} className="mt-4 inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
              {/* Ancre = requête primaire de la page cible (règle de maillage seovoc) */}
              {target.primaryQuery}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
