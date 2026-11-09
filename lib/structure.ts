// Architecture du site : source unique = ../majed-ayari-structure/pages.py
// → `python build.py` régénère lib/structure.json. Ne pas éditer le JSON à la main.
import raw from "./structure.json";
import { PUBLISHED } from "./publication";

export type SitePage = {
  id: string;
  label: string;
  silo: string;
  url: string;
  h1: string;
  pageType: string;
  primaryQuery: string;
  queries: string[];
  cluster: string;
  intent: string;
  personas: string[];
  about: string;
  mentions: string[];
  schema: string;
  inbound: string;
  gap: string;
  priority: string;
  lock: string;
  status: string;
  /** Encart Tunisie (absent sur les pages légales) */
  tunisie?: { title: string; text: string; query: string; link: string };
};

export const PERSONAS = raw.personas as Record<string, string>;

export const PAGES: SitePage[] = (raw.pages as SitePage[]).map((p) => ({
  ...p,
  status: PUBLISHED.has(p.id) ? "publie" : "squelette",
}));

const byUrl = new Map(PAGES.map((p) => [p.url, p]));
const byId = new Map(PAGES.map((p) => [p.id, p]));

export const getPage = (url: string) => byUrl.get(url);
export const getById = (id: string) => byId.get(id);
export const isPublished = (p: SitePage) => p.status === "publie";

/** "/services/seo/audit-seo/" → ["services", "seo", "audit-seo"] */
export const slugOf = (url: string) => url.split("/").filter(Boolean);
export const urlOf = (slug: string[]) => `/${slug.join("/")}/`;

/** Ancêtre existant le plus proche (un segment sans page hub est sauté). */
export function parentOf(url: string) {
  const s = slugOf(url);
  for (let i = s.length - 1; i >= 0; i--) {
    const p = getPage(urlOf(s.slice(0, i)));
    if (p) return p;
  }
  return undefined;
}

/** Pages dont cette page est l'ancêtre existant le plus proche (hors accueil : la home a sa propre mise en page). */
export function childrenOf(url: string) {
  if (url === "/") return [];
  return PAGES.filter((p) => p.url !== url && p.cluster !== "Légal" && parentOf(p.url)?.url === url);
}

/** Fil d'Ariane : on ne garde que les ancêtres qui existent comme pages. */
export function breadcrumbsOf(url: string) {
  const s = slugOf(url);
  const crumbs: { label: string; url: string }[] = [{ label: "Accueil", url: "/" }];
  for (let i = 1; i <= s.length; i++) {
    const p = getPage(urlOf(s.slice(0, i)));
    if (p) crumbs.push({ label: p.label, url: p.url });
  }
  return crumbs;
}

// Maillage seovoc : cluster → page pilier, cluster d'articles → page service (onglet « Maillage » du XLSX)
const PILLAR: Record<string, string> = {
  Services: "S00", "Services SEO": "S10", "Services GEO": "S20", "Services Google Ads": "S30",
  "Services Meta Ads": "S40", Formations: "F00", ICP: "P00", Ressources: "R-00",
  "Cluster GEO": "R-G00", "Cluster Google Ads": "R-A00", "Preuves": "C00", Tunisie: "N01",
};
const SERVICE_OF_CLUSTER: Record<string, string> = {
  "Cluster GEO": "S20", "Cluster Google Ads": "S30", "Cluster Mesure": "S50", "Cluster Meta Ads": "S40",
  "Cluster Automatisation": "S60", "Cluster SEO": "S10", "Cluster Choisir un prestataire": "H03",
};
// Outils : rattachés au service qu'ils alimentent
const SERVICE_OF_ID: Record<string, string> = { T01: "S20", T03: "F00", C02: "S10" };

/** Liens contextuels sortants : pilier du cluster + service lié. L'ancre = requête primaire de la cible. */
export function contextualLinks(page: SitePage) {
  const ids = [PILLAR[page.cluster], SERVICE_OF_CLUSTER[page.cluster], SERVICE_OF_ID[page.id]].filter(
    (id): id is string => !!id && id !== page.id,
  );
  return Array.from(new Set(ids))
    .map((id) => getById(id)!)
    .filter((p) => p.url !== parentOf(page.url)?.url); // le parent est déjà dans le fil d'Ariane
}

/** Liens descendants : pages qui pointent vers celle-ci via contextualLinks, hors pages filles déjà listées. */
export function backlinksOf(page: SitePage) {
  const kids = new Set(childrenOf(page.url).map((p) => p.id));
  return PAGES.filter((p) => !kids.has(p.id) && contextualLinks(p).some((l) => l.id === page.id));
}

/** Balise <title> : la requête de la page d'abord (début du H1), puis l'identité « basé en Tunisie ».
 *  Le client français ou canadien voit l'argument dès le résultat Google, sans perdre la requête française. */
export function seoTitle(p: SitePage) {
  const MAX = 70; // au-delà, Google tronque le titre
  if (p.cluster === "Légal") return `${p.label} · Majed Ayari`;
  let head = p.h1.split(" : ")[0].trim();
  // Études de cas : le libellé porte le client (« Étude de cas Google Ads · Bisson Expert »)
  if (p.pageType.startsWith("Preuve (cas)") && head.length < 12) head = p.label;
  else if (head.length < 8) head = p.h1; // le début seul ne dit rien
  if (head.includes("Majed Ayari")) return /tunisi/i.test(head) ? head : `${head}, consultant basé en Tunisie`;
  const suffixes = /tunisi/i.test(head) ? [" · Majed Ayari"] : [" · Majed Ayari, basé en Tunisie", " · Majed Ayari (Tunisie)"];
  for (const base of [head, p.label]) {
    for (const sfx of suffixes) if ((base + sfx).length <= MAX) return base + sfx;
  }
  return `${p.label} · Majed Ayari`;
}

export { NAV } from "./nav";
