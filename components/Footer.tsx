import { Mail } from "lucide-react";
import { GBP, SITE, SOCIALS } from "@/lib/data";
import { NAV, childrenOf, PAGES } from "@/lib/structure";
import { Offices } from "@/components/Offices";

const linkCls = "text-sm text-white/65 transition-colors hover:text-white";
const headCls = "text-xs font-semibold uppercase tracking-[0.18em] text-white/40";

// LinkGroup « Pied de page » : navigation, services, formations, liens utiles et légal.
const UTILES = ["/contact/", "/tarifs/", "/avis/", "/outils/modeles/", "/formations/calendrier/"];

export function Footer() {
  const services = childrenOf("/services/");
  const formations = childrenOf("/formations/").filter((p) => p.pageType.startsWith("Formation"));
  const legal = PAGES.filter((p) => p.cluster === "Légal");
  const utiles = UTILES.map((u) => PAGES.find((p) => p.url === u)!).filter(Boolean);

  return (
    <footer className="bg-ink text-white">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-white">
                MA
              </span>
              <span className="font-display text-base font-semibold">{SITE.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.role}. {SITE.workFrom}
            </p>
            <div className="mt-5">
              <Offices dark />
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-5 flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent-bright">
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>

          <div>
            <h3 className={headCls}>Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.url}><a href={l.url} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headCls}>Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((p) => (
                <li key={p.id}><a href={p.url} className={linkCls}>{p.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headCls}>Formations</h3>
            <ul className="mt-4 space-y-2.5">
              {formations.map((p) => (
                <li key={p.id}><a href={p.url} className={linkCls}>{p.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headCls}>Liens utiles</h3>
            <ul className="mt-4 space-y-2.5">
              {utiles.map((p) => (
                <li key={p.id}><a href={p.url} className={linkCls}>{p.label}</a></li>
              ))}
              <li><a href={GBP.mapsUrl} target="_blank" rel="noopener" className={linkCls}>Fiche Google</a></li>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="me noopener" className={linkCls}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-5">
            {legal.map((p) => (
              <li key={p.id}><a href={p.url} className="transition-colors hover:text-white">{p.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
