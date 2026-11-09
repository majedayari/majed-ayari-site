// Études de cas publiées. Chiffres réels uniquement, avec leur source et leur période.
// Noms des clients publiés avec l'accord de Majed (06/10/2026).

export type CaseMetric = { value: string; label: string; detail?: string };
export type CaseStudyPage = {
  id: string; // ID de la page dans la structure (pages.py)
  client: string;
  clientUrl: string;
  sector: string;
  service: string;
  period: string;
  datePublished: string;
  summary: string;
  metrics: CaseMetric[];
  context: string[];
  actions: { title: string; text: string }[];
  results: string[];
  limits: string[];
  sources: string[];
};

export const CASES: CaseStudyPage[] = [
  {
    id: "C02",
    client: "CNFSE · habilitations-electrique.fr",
    clientUrl: "https://habilitations-electrique.fr/",
    sector: "Organisme de formation en sécurité électrique (France, certifié Qualiopi)",
    service: "SEO",
    period: "Septembre 2025 → septembre 2026",
    datePublished: "2026-10-06",
    summary:
      "Un site de formation qui vit de ses guides et de ses QCM : en un an, les clics Google passent de 2 417 à 3 941 par mois et la position moyenne de 14,0 à 8,1.",
    metrics: [
      { value: "+63 %", label: "Clics Google", detail: "2 417 → 3 941 (sept. 2025 → sept. 2026)" },
      { value: "+87 %", label: "Impressions", detail: "88 143 → 164 965" },
      { value: "14,0 → 8,1", label: "Position moyenne" },
      { value: "×2", label: "Clics de l'été", detail: "juillet-septembre : 4 495 → 9 178" },
    ],
    context: [
      "habilitations-electrique.fr vend des formations à l'habilitation électrique (NF C 18-510).",
      "À l'été 2025, le site était en moyenne en 2e page de Google : position 23,7 en juillet et en août 2025, moins de 1 300 clics par mois.",
      "Les données de la Search Console montraient que le trafic venait des questions pratiques (QCM, distances, domaines de tension), pas des pages de vente.",
    ],
    actions: [
      {
        title: "Miser sur ce que les gens cherchent vraiment",
        text: "Plutôt que de pousser les pages commerciales, renforcer les guides réglementaires et les QCM : ce sont eux qui captent la demande et amènent l'apprenant vers la formation.",
      },
      {
        title: "Couvrir le sujet de bout en bout",
        text: "Des guides dédiés aux questions précises du métier : distance de sécurité d'une ligne aérienne, domaines de tension, seuil de non-lâcher, tableau des symboles, attestation de consignation.",
      },
      {
        title: "Une carte topicale pour la suite",
        text: "En juin 2026, carte topicale de 47 sujets bâtie sur les données Ahrefs et Search Console : cannibalisations à fusionner, pages hors sujet à élaguer, pages locales à limiter à Paris, seule ville avec un vrai volume.",
      },
    ],
    results: [
      "Le QCM habilitation BR passe de 885 à 1 677 clics par mois (+89 %), de la position 6,9 à 5,4.",
      "La page attestation de consignation double : 103 → 222 clics par mois, position 13,7 → 5,5.",
      "De nouveaux guides comptent parmi les premières pages du site : distance de sécurité d'une ligne aérienne (244 clics), domaines de tension (158), tableau des symboles (92).",
      "Le nombre de pages qui dépassent 40 clics par mois passe de 9 à 15 : le trafic dépend moins d'une seule page.",
      "Record mensuel en juin 2026 : 5 124 clics.",
    ],
    limits: [
      "Ces chiffres mesurent la visibilité et les visites venues de Google, pas les inscriptions aux formations.",
      "L'accueil, page la plus commerciale, recule (151 → 82 clics) : l'étape suivante est de mieux conduire ce trafic de guides vers les formations.",
    ],
    sources: ["Google Search Console du client (via Windsor.ai), relevé du 06/10/2026, mois complets."],
  },
];

export const getCase = (id: string) => CASES.find((c) => c.id === id);
