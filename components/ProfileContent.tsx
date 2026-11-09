import { CASES } from "@/lib/cases";
import { GBP, SITE, SOCIALS } from "@/lib/data";
import { PAGES } from "@/lib/structure";
import { Offices } from "@/components/Offices";

/** Corps de /a-propos/ (H02) : identité, parcours vérifiable, comptes pilotés, profils.
 *  N'affirmer ici que ce qui est sourcé (PROOFS, CASES, CERTIFICATIONS) : pas d'année ni de chiffre inventé. */
export function ProfileContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SITE.photo}
          alt={`${SITE.name}, consultant SEO, Google Ads et référencement IA`}
          width={400}
          height={400}
          className="w-full max-w-xs rounded-[2rem] object-cover shadow-xl"
        />
        <div className="mt-8">
          <Offices />
        </div>
      </div>

      <div className="space-y-10">
        <section aria-labelledby="qui">
          <h2 id="qui" className="font-display text-2xl font-bold">Qui est Majed Ayari</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Je suis Majed Ayari, consultant SEO, Google Ads, Meta Ads et visibilité dans les IA (GEO). {SITE.workFrom}
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Je suis passé par l'agence web Satoripop comme consultant SEO, puis je me suis installé à mon compte. Je pilote le SEO, la publicité et la mesure ensemble,
            sur vos comptes, en français.
          </p>
        </section>

        <section aria-labelledby="parcours">
          <h2 id="parcours" className="font-display text-2xl font-bold">Parcours vérifiable</h2>
          <ol className="mt-4 space-y-4 border-l-2 border-accent/30 pl-5">
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">11 janvier 2019</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">Intervenant au SEO CAMP Day de Lille (compte rendu d'Axecibles).</p>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Livre blanc</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">Co-auteur de « Les secrets du netlinking révélés par 9 experts SEO » (Rocketlinks).</p>
            </li>
            {CASES.map((c) => {
              const page = PAGES.find((p) => p.id === c.id);
              return (
                <li key={c.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{c.period}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {c.service} pour {c.client}.{" "}
                    <a href={page?.url ?? "/etudes-de-cas/"} className="font-medium text-accent hover:underline">Lire l'étude de cas</a>
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <section aria-labelledby="profils">
          <h2 id="profils" className="font-display text-2xl font-bold">Me retrouver en ligne</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Plusieurs personnes portent le nom de Majed Ayari. Ce sont mes profils :
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li><a href={GBP.mapsUrl} target="_blank" rel="me noopener" className="font-medium text-accent hover:underline">Fiche Google</a></li>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="me noopener" className="font-medium text-accent hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
