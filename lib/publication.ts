// Pages dont le contenu est rédigé et validé. Une page absente d'ici est un squelette :
// noindex + exclue du sitemap. Ajouter l'ID (colonne « ID » du XLSX) au moment de publier.
export const PUBLISHED = new Set<string>([
  "H01", // accueil (one-page existante)
  "H02", // à propos : page d'identité (Person), parcours sourcé uniquement
  "C00", // hub études de cas (liste des cas publiés)
  "C02", // étude de cas SEO habilitations-electrique.fr (accord client, 06/10/2026)
  "S00", // hub services
  "S10", // service SEO (tarifs validés 14/10/2026)
  "S30", // service Google Ads
  "F02", // formation SEO (10 h en ligne, 800 DT)
  "H03", // méthode
  "H04", // tarifs
]);
