import { CERTIFICATIONS, GBP, ICPS, OFFICES, PROOFS, SITE, SOCIALS, TOOLS } from "@/lib/data";

const postal = (o: (typeof OFFICES)[number]) => ({
  "@type": "PostalAddress",
  ...(o.street && { streetAddress: o.street }),
  ...(o.postalCode && { postalCode: o.postalCode }),
  addressLocality: o.locality,
  addressRegion: o.region,
  addressCountry: o.countryCode,
});
import { breadcrumbsOf, childrenOf, isPublished, type SitePage } from "@/lib/structure";
import { getCase } from "@/lib/cases";
import { getContent } from "@/lib/pageContent";

export const PERSON_ID = `${SITE.url}/#majed-ayari`;
export const WEBSITE_ID = `${SITE.url}/#website`;
const SERVICE_ID = `${SITE.url}/#service`;
const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Québec" },
  { "@type": "Country", name: "Canada" },
];
const EVENT_ID = `${SITE.url}/#seo-camp-day-lille-2019`;
const abs = (url: string) => `${SITE.url}${url}`;

/** « Search engine optimization (Q180711) » → { name, sameAs: wikidata } */
function aboutOf(about: string) {
  if (!about) return undefined;
  if (about.includes("(Person)")) return { "@id": PERSON_ID };
  const m = about.match(/^(.*?)\s*\((Q\d+)\)\s*$/);
  return m
    ? { "@type": "Thing", name: m[1], sameAs: `https://www.wikidata.org/wiki/${m[2]}` }
    : { "@type": "Thing", name: about };
}

/** Type principal = 1er type du StructuredDataProfile seovoc (colonne « schema »). */
function mainEntity(p: SitePage) {
  const type = p.schema.split(/[\s+;(]/)[0];
  const base = { "@id": `${abs(p.url)}#main`, name: p.h1, url: abs(p.url) };
  const about = aboutOf(p.about);
  switch (type) {
    case "Service":
      return { ...base, "@type": "Service", serviceType: p.label, provider: { "@id": PERSON_ID }, areaServed: AREA_SERVED, ...(about && { about }) };
    case "Course":
      return { ...base, "@type": "Course", description: p.h1, provider: { "@id": PERSON_ID }, inLanguage: "fr", ...(about && { about }) };
    case "Article": {
      const cs = getCase(p.id);
      return {
        ...base,
        "@type": "Article",
        headline: p.h1,
        author: { "@id": PERSON_ID },
        inLanguage: "fr",
        ...(cs
          ? {
              datePublished: cs.datePublished,
              description: cs.summary,
              about: [{ "@type": "Organization", name: cs.client, url: cs.clientUrl }, ...(about ? [about] : [])],
            }
          : about && { about }),
      };
    }
    case "ProfilePage":
      return { ...base, "@type": "ProfilePage", dateModified: "2026-10-13", mainEntity: { "@id": PERSON_ID } };
    case "CollectionPage":
      return {
        ...base,
        "@type": "CollectionPage",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: childrenOf(p.url).map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, url: abs(c.url) })),
        },
      };
    case "ContactPage":
      return { ...base, "@type": "ContactPage" };
    default:
      return { ...base, "@type": "WebPage", ...(about && { about }) };
  }
}

export function pageJsonLd(p: SitePage) {
  const content = getContent(p.id);
  return {
    "@context": "https://schema.org",
    "@graph": [
      mainEntity(p),
      ...(content && isPublished(p) && p.id === "H03"
        ? [
            {
              "@type": "HowTo",
              "@id": `${abs(p.url)}#howto`,
              name: "Un projet SEO ou Google Ads en cinq étapes",
              step: content.sections
                .flatMap((sec) => sec.blocks)
                .flatMap((b) => (b.type === "steps" ? b.items : []))
                .map((it, i) => ({ "@type": "HowToStep", position: i + 1, name: it.title, text: it.text })),
            },
          ]
        : []),
      ...(content && isPublished(p)
        ? [
            {
              "@type": "FAQPage",
              "@id": `${abs(p.url)}#faq`,
              mainEntity: content.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbsOf(p.url).map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: abs(c.url) })),
      },
    ],
  };
}

/** Graphe global (layout) : Person + WebSite + ProfessionalService, @id stables. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      givenName: "Majed",
      familyName: "Ayari",
      alternateName: "Majed Ayari consultant SEO",
      jobTitle: SITE.role,
      description: `Consultant SEO, GEO, Google Ads et Meta Ads. ${SITE.workFrom}`,
      url: `${SITE.url}/a-propos/`,
      mainEntityOfPage: `${SITE.url}/a-propos/`,
      worksFor: { "@id": SERVICE_ID },
      email: `mailto:${SITE.email}`,
      telephone: OFFICES.map((o) => o.phoneE164),
      // Lieux de travail : Tunisie d'abord, puis Canada
      workLocation: OFFICES.map((o) => ({ "@type": "Place", name: `${o.locality}, ${o.country}`, address: postal(o) })),
      image: `${SITE.url}${SITE.photo}`,
      knowsAbout: Array.from(new Set(["SEO", "Generative Engine Optimization", "Google Ads", "Display & Video 360", "Meta Ads", ...TOOLS])),
      hasCredential: CERTIFICATIONS.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: c.issuer, url: c.issuerUrl },
        ...(c.url && { url: c.url }),
        ...(c.credentialId && { identifier: c.credentialId }),
        ...(c.image && { image: `${SITE.url}${c.image}` }),
        ...(c.issued && { dateCreated: c.issued }),
        // Les certificats expirés restent déclarés : la date d'expiration est publiée telle quelle.
        ...(c.expires && { validUntil: c.expires }),
      })),
      // sameAs : uniquement des profils fournis par Majed / vérifiés (06/10/2026)
      sameAs: [...SOCIALS.map((s) => s.href), `https://www.google.com/search?kgmid=${GBP.kgId}`],
      performerIn: { "@id": EVENT_ID },
      subjectOf: PROOFS.map((p) => ({ "@id": p.url })),
    },
    {
      "@type": "Event",
      "@id": EVENT_ID,
      name: "SEO CAMP Day Lille",
      startDate: "2019-01-11",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "Place", name: "Lille", address: { "@type": "PostalAddress", addressLocality: "Lille", addressCountry: "FR" } },
      organizer: { "@type": "Organization", name: "SEO CAMP", url: "https://www.seo-camp.org/" },
      performer: { "@id": PERSON_ID },
    },
    {
      "@type": "Article",
      "@id": PROOFS[0].url,
      url: PROOFS[0].url,
      headline: "Retour sur le SEO CAMP Day de Lille du 11 janvier 2019",
      publisher: { "@type": "Organization", name: "Axecibles", url: "https://www.axecibles.com/" },
      about: { "@id": EVENT_ID },
      mentions: { "@id": PERSON_ID },
    },
    {
      "@type": "Book",
      "@id": PROOFS[1].url,
      url: PROOFS[1].url,
      name: "Les secrets du netlinking révélés par 9 experts SEO",
      bookFormat: "https://schema.org/EBook",
      inLanguage: "fr",
      publisher: { "@type": "Organization", name: "Rocketlinks", url: "https://www.rocketlinks.com/" },
      contributor: [{ "@id": PERSON_ID }, { "@type": "Person", name: "Olivier Andrieu" }, { "@type": "Person", name: "Olivier Duffez" }],
    },
    { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE.url, name: SITE.name, inLanguage: "fr", publisher: { "@id": PERSON_ID } },
    {
      "@type": "ProfessionalService",
      "@id": SERVICE_ID,
      // Nom identique à la fiche Google (cohérence NAP) ; libellé long en alternateName
      name: GBP.name,
      alternateName: `${SITE.name} — ${SITE.role}`,
      url: SITE.url,
      telephone: OFFICES.map((o) => o.phoneE164),
      hasMap: GBP.mapsUrl,
      image: `${SITE.url}${SITE.photo}`,
      sameAs: [GBP.mapsUrl],
      geo: { "@type": "GeoCoordinates", latitude: GBP.geo.lat, longitude: GBP.geo.lng },
      founder: { "@id": PERSON_ID },
      address: OFFICES.map(postal),
      areaServed: AREA_SERVED,
      audience: ICPS.map((i) => ({ "@type": "Audience", audienceType: i.label })),
    },
  ],
};
