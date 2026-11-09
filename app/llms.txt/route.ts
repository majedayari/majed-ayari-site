import { CASES } from "@/lib/cases";
import { CERTIFICATIONS, GBP, OFFICES, PROOFS, SITE, SOCIALS, TOOLS } from "@/lib/data";
import { PAGES, isPublished } from "@/lib/structure";

export const dynamic = "force-static";

/** /llms.txt (format llmstxt.org) : qui est Majed Ayari, d'où il travaille, preuves vérifiables et pages publiées.
 *  Seules les pages publiées (indexables) sont listées ; les squelettes en noindex n'y figurent pas. */
export function GET() {
  const abs = (u: string) => `${SITE.url}${u}`;
  const published = PAGES.filter((p) => isPublished(p) && p.cluster !== "Légal");
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.role}. ${SITE.workFrom}`,
    "",
    "## Identité",
    ...OFFICES.map((o) => `- Bureau ${o.label} : ${o.locality}, ${o.region}, ${o.country}`),
    `- Fiche Google : [${GBP.name}](${GBP.mapsUrl})`,
    ...SOCIALS.map((s) => `- ${s.label} : ${s.href}`),
    `- Courriel : ${SITE.email}`,
    ...OFFICES.map((o) => `- Téléphone ${o.label} : ${o.phone}${o.whatsapp ? " (WhatsApp : https://wa.me/" + o.phoneE164.replace("+", "") + ")" : ""}`),
    "",
    "## Références vérifiables",
    ...PROOFS.map((p) => `- [${p.title}](${p.url})${p.dateLabel ? ` (${p.dateLabel})` : ""} : ${p.detail}`),
    "",
    "## Certifications et outils",
    ...CERTIFICATIONS.map((c) => `- ${c.name} (${c.issuer})`),
    `- Outils : ${TOOLS.join(", ")}`,
    "",
    "## Études de cas",
    ...CASES.map((c) => {
      const page = PAGES.find((p) => p.id === c.id);
      return `- [${page?.h1 ?? c.client}](${abs(page?.url ?? "/etudes-de-cas/")}) : ${c.summary}`;
    }),
    "",
    "## Pages",
    ...published.map((p) => `- [${p.label}](${abs(p.url)}) : ${p.h1}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
