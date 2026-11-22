// Contenu rédigé des pages services et formations (gabarit PageSections).
// Entités : extraites des concurrents tunisiens (majed-ayari-structure/entites/, 13/10/2026).
// Règle : aucun fait inventé. Tout ce que Majed doit fournir ou confirmer est marqué « [À COMPLÉTER : …] » ou « [À CONFIRMER : …] ».
// Une page qui contient encore un marqueur ne peut pas être publiée (voir assertNoPlaceholders, appelé par PageTemplate).

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "link"; text: string; href: string };

export type Section = {
  id: string;
  h2: string;
  blocks: Block[];
  /** ID d'une USP de lib/data.ts reliée à cette section : une pastille « Ce qui me distingue » s'affiche si l'USP est prouvée. */
  usp?: string;
};

export type PageContent = {
  /** Réponse directe sous le H1 (snippet / citation IA). */
  answer: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; label: string };
};

const MARKER = /\[À (COMPLÉTER|CONFIRMER)[^\]]*\]/g;

export const CONTENT: Record<string, PageContent> = {
  // ───────────────────────── S00 · Services (hub) (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S00: {
    "answer": "Notre agence s'occupe de votre référencement sur Google (SEO), de votre présence dans les réponses de ChatGPT et des autres IA (GEO), de Google Ads, de Meta Ads, du suivi des conversions et de l'automatisation avec n8n. Nous travaillons depuis Scott (Québec), pour des PME de tout le Québec. Les forfaits vont de 797 $ à 2 497 $ et plus par mois, et le Diagnostic éclair de 950 $ à 1 500 $. Le plus simple : un diagnostic de 30 minutes, puis un audit sur le sujet qui vous préoccupe le plus.",
    "sections": [
      {
        "id": "services",
        "h2": "Mes services, ce qu'ils comprennent et ce qu'ils coûtent",
        "blocks": [
          {
            "type": "p",
            "text": "Chaque service a sa page. Les prix sont fixés en dollars canadiens, avant taxes."
          },
          {
            "type": "table",
            "head": [
              "Service",
              "Ce que c'est",
              "Prix (CAD, avant taxes)"
            ],
            "rows": [
              [
                "Audit SEO",
                "État des lieux du référencement de votre site sur Google, rendu en 1 semaine",
                "500 à 1 500"
              ],
              [
                "Accompagnement SEO",
                "Suivi mensuel : technique, contenu, structure, liens",
                "600 à 2 000 par mois"
              ],
              [
                "Audit de visibilité IA (GEO)",
                "Ce que ChatGPT, Gemini et Perplexity disent de votre entreprise, ou taisent",
                "450 à 1 500"
              ],
              [
                "Audit de compte Google Ads",
                "Où part le budget d'un compte existant",
                "400 à 500"
              ],
              [
                "Gestion Google Ads",
                "Pilotage mensuel des campagnes, au forfait",
                "400 à 1 500 par mois"
              ],
              [
                "Gestion Meta Ads",
                "Campagnes Facebook et Instagram pour obtenir des demandes",
                "400 à 1 500 par mois"
              ],
              [
                "Suivi des conversions",
                "Mise en place de la mesure : ce qui compte comme une vraie demande",
                "600 à 1 600"
              ],
              [
                "Automatisation n8n",
                "n8n relie vos applications entre elles. Je l'utilise pour le reporting et le transfert de demandes",
                "300 à 1 500 par workflow"
              ],
              [
                "Formation SEO",
                "10 h en ligne, 3 personnes maximum, attestation et suivi",
                "800"
              ]
            ]
          },
          {
            "type": "link",
            "text": "SEO",
            "href": "/services/seo/"
          },
          {
            "type": "link",
            "text": "Référencement IA (GEO)",
            "href": "/services/geo/"
          },
          {
            "type": "link",
            "text": "Google Ads",
            "href": "/services/google-ads/"
          },
          {
            "type": "link",
            "text": "Meta Ads",
            "href": "/services/meta-ads/"
          },
          {
            "type": "link",
            "text": "Suivi des conversions",
            "href": "/services/mesure-conversions/"
          },
          {
            "type": "link",
            "text": "Automatisation n8n",
            "href": "/services/automatisation-n8n/"
          },
          {
            "type": "link",
            "text": "Les formations",
            "href": "/formations/"
          }
        ]
      },
      {
        "id": "par-ou-commencer",
        "h2": "Par où commencer selon votre situation",
        "blocks": [
          {
            "type": "p",
            "text": "Inutile de tout activer. Selon votre cas, une seule page suffit pour démarrer."
          },
          {
            "type": "list",
            "items": [
              "Votre site reçoit peu de demandes depuis Google : l'audit SEO.",
              "Google Ads dépense, et vous ne savez pas si cela rapporte : l'audit de compte Google Ads.",
              "Votre entreprise n'apparaît pas quand on interroge ChatGPT : l'audit de visibilité IA.",
              "Vous refaites le même rapport à la main chaque semaine : l'automatisation n8n."
            ]
          },
          {
            "type": "link",
            "text": "Audit SEO",
            "href": "/services/seo/audit-seo/"
          },
          {
            "type": "link",
            "text": "Audit de compte Google Ads",
            "href": "/services/google-ads/audit-compte/"
          },
          {
            "type": "link",
            "text": "Audit de visibilité IA",
            "href": "/services/geo/audit-geo/"
          }
        ]
      },
      {
        "id": "ordre",
        "h2": "Dans quel ordre je travaille",
        "usp": "U1",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Mesurer",
                "text": "Sur Google Ads, je commence par vérifier ce que le compte considère comme une demande. Un appel très court ou un clic sur un itinéraire n'est pas une demande : je compte ce qui mène à un vrai prospect."
              },
              {
                "title": "Choisir les canaux",
                "text": "Je n'active pas tous les canaux. Je choisis selon votre marché et ce que l'audit montre."
              },
              {
                "title": "Automatiser",
                "text": "Un rapport ou un transfert de demandes refait à la main chaque semaine devient un workflow n8n, une suite d'étapes qui s'exécute seule."
              }
            ]
          },
          {
            "type": "link",
            "text": "Voir ma méthode",
            "href": "/methode/"
          }
        ]
      },
      {
        "id": "tarifs",
        "h2": "Tarifs et conditions",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Les audits sont payants et rendus en 1 semaine.",
              "Les accompagnements mensuels demandent un engagement minimum de 3 mois.",
              "Je ne prends aucun pourcentage sur votre budget publicitaire. La gestion Google Ads est au forfait fixe.",
              "Pas de budget minimum, pas de taille de site minimum.",
              "Paiement par virement bancaire.",
              "Les missions ponctuelles sont facturées au forfait, sur devis."
            ]
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          }
        ]
      },
      {
        "id": "preuves",
        "h2": "Ce que j'ai publié",
        "usp": "U2",
        "blocks": [
          {
            "type": "p",
            "text": "Chaque étude de cas donne sa période et sa source."
          },
          {
            "type": "list",
            "items": [
              "SEO : pour habilitations-electrique.fr (CNFSE), les clics Google sont passés de 2 417 à 3 941 par mois en un an, et la position moyenne de 14,0 à 8,1. Source : Search Console.",
              "Intervenant au SEO CAMP Day de Lille, le 11 janvier 2019.",
              "Co-auteur du livre blanc Rocketlinks « Les secrets du netlinking révélés par 9 experts SEO »."
            ]
          },
          {
            "type": "link",
            "text": "Étude de cas SEO",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          }
        ]
      },
      {
        "id": "qui",
        "h2": "Qui travaille sur votre dossier, et depuis où",
        "usp": "U3",
        "blocks": [
          {
            "type": "p",
            "text": "C'est moi, du premier échange au dernier rapport. Vous ne réunissez pas trois prestataires pour savoir lequel a généré une demande. Certifications affichées : Google Ads, Display & Video 360, Campaign Manager 360, Klaviyo. Outils : Google Analytics 4, Google Tag Manager, Semrush, Screaming Frog, n8n."
          },
          {
            "type": "p",
            "text": "SEO, référencement IA, Google Ads, Meta Ads, mesure et automatisation : nous réalisons chaque mission depuis Scott, au Québec, pour des PME de tout le Québec."
          },
          {
            "type": "link",
            "text": "Mon parcours",
            "href": "/a-propos/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Combien coûte un consultant en marketing digital comme vous ?",
        "a": "Un diagnostic coûte de 950 $ à 1 500 $ selon le service (SEO, GEO, compte Google Ads). Un accompagnement mensuel coûte de 797 $ à 2 497 $ et plus par mois. Le tableau ci-dessus donne le détail."
      },
      {
        "q": "Par où commencer si je ne sais pas quel service choisir ?",
        "a": "Par un diagnostic de 30 minutes, puis un audit sur votre sujet le plus urgent. L'audit est payant et rendu en 1 semaine."
      },
      {
        "q": "Y a-t-il un engagement minimum ?",
        "a": "Oui, 3 mois minimum pour les accompagnements mensuels."
      },
      {
        "q": "Prenez-vous un pourcentage sur mon budget publicitaire ?",
        "a": "Non. La gestion Google Ads est au forfait fixe. Je n'impose ni budget minimum ni taille de site minimum."
      },
      {
        "q": "Je suis en France : comment se passent la facturation et le paiement ?",
        "a": "Les prix sont fixés en dollars canadiens. Le paiement se fait par virement bancaire. Nous travaillons depuis Scott, au Québec."
      },
      {
        "q": "Proposez-vous des formations ?",
        "a": "Oui. La formation SEO dure 10 heures en ligne, pour 3 personnes au maximum, avec une attestation et un suivi. Prix sur devis."
      }
    ],
    "cta": {
      "title": "Réserver un diagnostic de 30 minutes",
      "text": "Dites-moi où vous en êtes et ce que vous voulez obtenir. Je vous indique par quel service commencer.",
      "label": "Réserver le diagnostic"
    }
  },
  // ───────────────────────── S10 · Consultant SEO (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S10: {
    "answer": "Un consultant SEO freelance travaille à améliorer la place de votre site web dans les résultats de Google : audit technique, contenu, structure, liens, et mesure de ce que le trafic rapporte. Notre agence travaille depuis Scott (Québec), pour des PME de tout le Québec. Un diagnostic coûte de 950 $ à 1 500 $ et un accompagnement mensuel de 797 $ à 2 497 $ et plus par mois.",
    "sections": [
      {
        "id": "qui",
        "h2": "Qui travaille sur votre référencement",
        "blocks": [
          {
            "type": "p",
            "text": "C'est moi qui fais le travail."
          },
          {
            "type": "list",
            "items": [
              "Intervenant au SEO CAMP Day de Lille, le 11 janvier 2019.",
              "Co-auteur du livre blanc Rocketlinks « Les secrets du netlinking révélés par 9 experts SEO ».",
              "Outils : Screaming Frog, Semrush, Google Search Console, GA4, Google Tag Manager."
            ]
          },
          {
            "type": "link",
            "text": "Voir mon parcours et mes références",
            "href": "/a-propos/"
          }
        ],
        "usp": "U3"
      },
      {
        "id": "chantiers",
        "h2": "Ce que fait un consultant SEO, chantier par chantier",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Chantier",
              "Ce que je regarde",
              "Ce que vous recevez"
            ],
            "rows": [
              [
                "Technique et Core Web Vitals",
                "Indexation, erreurs d'exploration, vitesse de chargement et stabilité de la page (les Core Web Vitals, des mesures de Google), redirections",
                "Liste d'anomalies classées par impact"
              ],
              [
                "Contenu et entités",
                "Les sujets et les termes que Google associe à chaque requête, comparés à vos pages",
                "Plan de pages et briefs de rédaction"
              ],
              [
                "Structure et maillage interne",
                "Arborescence, liens entre vos pages, pages qui se concurrencent sur la même requête (cannibalisation)",
                "Arborescence cible et règles de liens"
              ],
              [
                "Données structurées",
                "Le balisage qui décrit votre entreprise, vos services et vos questions fréquentes aux moteurs de recherche",
                "Balisage à poser sur les pages concernées"
              ],
              [
                "Liens (netlinking)",
                "Qui vous cite, qui cite vos concurrents, qualité des sources",
                "Liste de sources à viser, sans achat de liens douteux"
              ],
              [
                "Mesure des conversions",
                "Search Console, GA4, positions, et les demandes réellement reçues (appels, WhatsApp) : sans cela, un site peut gagner des clics sans gagner un client",
                "Tableau de bord lisible sans jargon"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Voir le détail d'un audit SEO",
            "href": "/services/seo/audit-seo/"
          },
          {
            "type": "link",
            "text": "Mettre en place le suivi des conversions",
            "href": "/services/mesure-conversions/"
          }
        ]
      },
      {
        "id": "pour-qui",
        "h2": "Pour qui ce service est fait, et pour qui il ne l'est pas",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Fait pour : un site de services, un site de formation ou une boutique en ligne qui doit recevoir plus de demandes de Google.",
              "Fait pour : une équipe qui a déjà un site et veut savoir pourquoi il stagne.",
              "Moins adapté : un site à lancer sans contenu à produire. Dans ce cas, une formation est souvent plus utile qu'un accompagnement.",
              "Pas de seuil : aucun budget minimum ni taille de site minimale pour démarrer."
            ]
          },
          {
            "type": "link",
            "text": "Voir la formation SEO",
            "href": "/formations/seo/"
          },
          {
            "type": "link",
            "text": "Cibler le Québec, le Canada et les États-Unis : le SEO international",
            "href": "/services/seo/seo-international/"
          }
        ]
      },
      {
        "id": "methode",
        "usp": "U4",
        "h2": "Ma méthode : mesurer d'abord, puis agir",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Mesure",
                "text": "Je vérifie d'abord que les demandes sont comptées correctement (GA4, Google Tag Manager). Sans cela, on ne sait pas ce qui marche."
              },
              {
                "title": "Audit",
                "text": "État du site, de la concurrence et des données Search Console. Compte rendu écrit, rendu en une semaine."
              },
              {
                "title": "Structure et stratégie",
                "text": "Arborescence et pages cibles : une requête principale par page, pas deux pages pour la même."
              },
              {
                "title": "Contenu",
                "text": "Briefs construits sur les entités attendues par Google, rédaction ou relecture."
              },
              {
                "title": "Liens",
                "text": "Plan de netlinking et suivi des citations."
              },
              {
                "title": "Suivi",
                "text": "Point régulier chiffré. Ce qui progresse, ce qui stagne, la prochaine action."
              }
            ]
          },
          {
            "type": "p",
            "text": "Je ne promets ni une position précise ni un délai. Personne ne contrôle l'algorithme de Google."
          },
          {
            "type": "link",
            "text": "Lire ma méthode complète",
            "href": "/methode/"
          }
        ]
      },
      {
        "id": "ia",
        "h2": "SEO et visibilité dans les IA (GEO)",
        "blocks": [
          {
            "type": "p",
            "text": "Une partie des recherches passe désormais par ChatGPT, Gemini ou Perplexity, en plus du moteur de recherche Google. Un consultant SEO doit donc aussi regarder ce que ces outils disent de votre entreprise. Sur les quatre pages de consultants SEO que j'ai relues le 14 octobre 2026 pour préparer celle-ci (dont deux en page 2 de Google), une seule consacre une section à la visibilité dans les IA."
          },
          {
            "type": "p",
            "text": "Nous ne promettons pas qu'une IA vous cite. L'audit GEO, distinct de l'audit SEO, est compris dans le Diagnostic éclair (950 $ à 1 500 $)."
          },
          {
            "type": "link",
            "text": "Découvrir le service GEO",
            "href": "/services/geo/"
          },
          {
            "type": "link",
            "text": "Voir l'audit GEO",
            "href": "/services/geo/audit-geo/"
          },
          {
            "type": "link",
            "text": "GEO et SEO : ce qui change vraiment",
            "href": "/ressources/geo/seo-vs-geo/"
          }
        ]
      },
      {
        "id": "resultat",
        "usp": "U2",
        "h2": "Un résultat publié, avec ses limites",
        "blocks": [
          {
            "type": "p",
            "text": "Pour CNFSE (habilitations-electrique.fr), un site de formation à l'habilitation électrique, les clics Google sont passés de 2 417 à 3 941 par mois en un an, et la position moyenne de 14,0 à 8,1 (Search Console, septembre 2025 à septembre 2026)."
          },
          {
            "type": "p",
            "text": "Ce qui a été fait : renforcer les guides et les QCM, qui captaient la demande réelle, plutôt que pousser les pages commerciales ; couvrir chaque question précise du métier par un guide dédié ; bâtir en juin 2026 une carte topicale de 47 sujets sur les données Ahrefs et Search Console."
          },
          {
            "type": "p",
            "text": "Ce que ces chiffres ne prouvent pas : ils mesurent la visibilité et les visites venues de Google, pas les inscriptions aux formations. La page d'accueil, la plus commerciale, a même reculé (151 à 82 clics par mois). L'étude de cas détaille ces limites."
          },
          {
            "type": "link",
            "text": "Lire l'étude de cas SEO",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          }
        ]
      },
      {
        "id": "tarifs",
        "usp": "U7",
        "h2": "Tarifs : trois formules",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix (hors taxes)",
              "Cadre"
            ],
            "rows": [
              [
                "Audit SEO",
                "État des lieux et plan d'action priorisé",
                "950 à 1 500 $",
                "Payant, rendu en une semaine"
              ],
              [
                "Accompagnement mensuel",
                "Mise en œuvre et suivi",
                "797 à 2 497 $ et plus par mois",
                "Engagement minimum de 3 mois"
              ],
              [
                "Mission ponctuelle",
                "Un chantier précis (migration, refonte, silo)",
                "Sur devis",
                "Taux journalier"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Aucun pourcentage n'est prélevé sur un budget publicitaire, jamais. Paiement par virement bancaire. Les prix sont affichés en dollars canadiens."
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          },
          {
            "type": "link",
            "text": "Prix du SEO en 2026 : ce que coûte un consultant",
            "href": "/ressources/seo/prix-seo/"
          },
          {
            "type": "link",
            "text": "Et pour Google Ads : le consultant Google Ads",
            "href": "/services/google-ads/"
          }
        ]
      },
      {
        "id": "freelance-agence",
        "h2": "Consultant freelance ou agence : comment choisir",
        "blocks": [
          {
            "type": "table",
            "head": [
              "",
              "Consultant freelance",
              "Agence"
            ],
            "rows": [
              [
                "Qui travaille sur votre site",
                "La personne que vous avez rencontrée",
                "Une équipe, souvent encadrée par un chef de projet"
              ],
              [
                "Réactivité",
                "Contact direct",
                "Passage par un interlocuteur commercial"
              ],
              [
                "Plusieurs leviers à la fois",
                "Limité aux compétences d'une personne",
                "Équipes spécialisées par canal"
              ],
              [
                "Continuité en cas d'absence",
                "Point faible réel",
                "Point fort réel"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Si vous avez besoin de SEO, de création, de développement et de médias en même temps, une agence est le bon choix. Si vous voulez parler directement au consultant en référencement qui fait le travail, un freelance suffit."
          },
          {
            "type": "link",
            "text": "Freelance ou agence : le guide complet",
            "href": "/ressources/choisir/freelance-ou-agence-seo/"
          }
        ],
        "usp": "U3"
      }
    ],
    "faq": [
      {
        "q": "Quel est le tarif d'un consultant SEO freelance ?",
        "a": "Il dépend du travail demandé. Un diagnostic coûte de 950 $ à 1 500 $, l'accompagnement mensuel de 797 $ à 2 497 $ et plus par mois, et une mission ponctuelle est facturée sur devis. Le détail est dans la section Tarifs."
      },
      {
        "q": "Pourquoi mesurer les conversions avant de faire du SEO ?",
        "a": "Sans mesure, on ne sait pas si les clics en plus apportent des demandes. Je vérifie d'abord que les demandes (appels, WhatsApp) sont comptées correctement dans GA4."
      },
      {
        "q": "Combien de temps avant les premiers résultats ?",
        "a": "Je ne peux pas donner de délai : il dépend de l'état du site et de la concurrence sur vos requêtes. Les impressions et les clics se suivent dans la Search Console. Les demandes reçues se jugent sur plusieurs mois."
      },
      {
        "q": "Travaillez-vous avec des PME de tout le Québec ?",
        "a": "Oui. Nous travaillons depuis Scott, au Québec, pour des PME de tout le Québec : manufacturiers B2B et entreprises de services, pas seulement à Montréal. Nous mesurons les résultats avec vos données Search Console."
      },
      {
        "q": "Que contient l'audit SEO ?",
        "a": "Un état technique du site, une comparaison avec vos concurrents sur vos requêtes, une lecture de la Search Console et un plan d'action classé par priorité. Il est payant et rendu en une semaine."
      },
      {
        "q": "Faut-il refaire mon site pour faire du SEO ?",
        "a": "Pas toujours. L'audit dit si les problèmes viennent de la structure, du contenu ou de la technique. Une refonte ne se décide qu'après ce constat."
      },
      {
        "q": "Qu'est-ce que la cannibalisation, et pourquoi la surveiller ?",
        "a": "C'est quand deux pages de votre site visent la même requête. Google hésite entre les deux et aucune ne monte. L'audit les repère, puis on décide de fusionner, de différencier ou de supprimer."
      },
      {
        "q": "Quels outils utilisez-vous ?",
        "a": "Screaming Frog, Semrush, Google Search Console, GA4 et Google Tag Manager."
      },
      {
        "q": "Quelle différence avec un audit GEO ?",
        "a": "L'audit SEO vise Google. L'audit GEO regarde ce que ChatGPT, Gemini et Perplexity disent de votre entreprise. Les deux se complètent."
      }
    ],
    "cta": {
      "title": "Parlons de votre site",
      "text": "Décrivez-moi votre situation. Je vous dis franchement si j'ai quelque chose à vous apporter.",
      "label": "Réserver un diagnostic de 30 minutes"
    }
  },
  // ───────────────────────── S11 · Audit SEO (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S11: {
    "answer": "Un audit SEO est un diagnostic écrit de votre site : ce qui bloque Google, ce qui manque à vos pages, et dans quel ordre corriger. Nous le faisons nous-mêmes, avec Screaming Frog et Google Search Console. Il est compris dans le Diagnostic éclair (950 $ à 1 500 $) et il est rendu en 1 semaine, sous forme de fiches d'action que votre développeur peut appliquer.",
    "sections": [
      {
        "id": "contenu",
        "h2": "Ce que contient mon audit SEO",
        "blocks": [
          {
            "type": "p",
            "text": "Quatre volets, du plus mécanique au plus éditorial. Un audit technique n'est que le premier : j'y ajoute le contenu, la structure et la mesure."
          },
          {
            "type": "table",
            "head": [
              "Volet",
              "Ce que je regarde",
              "Ce que vous recevez"
            ],
            "rows": [
              [
                "Technique",
                "Ce que Google peut explorer et indexer (c'est-à-dire garder dans son répertoire), les pages en erreur, les redirections, les balises de titre, et les Core Web Vitals (les mesures de vitesse et de stabilité que Google publie)",
                "Liste d'anomalies classées par impact"
              ],
              [
                "Contenu et entités",
                "Les sujets et les termes que Google attend pour chaque requête. Je compare vos pages à celles qui se positionnent sur vos requêtes",
                "Pages à créer, à fusionner ou à compléter"
              ],
              [
                "Structure et maillage interne",
                "L'arborescence, les pages qui se concurrencent pour la même requête, les liens que vos pages font entre elles (le maillage interne)",
                "Arborescence cible et règles de liens"
              ],
              [
                "Mesure",
                "Ce que Google Search Console montre : vos requêtes, vos pages, vos positions",
                "Les priorités, justifiées par vos chiffres"
              ]
            ]
          }
        ]
      },
      {
        "id": "fiche-action",
        "h2": "Le livrable : des fiches d'action, pas un score",
        "blocks": [
          {
            "type": "p",
            "text": "Un audit qui liste des centaines d'alertes ne dit pas par où commencer. Je présente mes recommandations en fiches d'action, classées par date d'exécution. Chaque fiche répond à cinq questions (modèle de présentation, pas un extrait d'audit client)."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Quoi",
                "text": "Le problème, en une phrase, sans jargon."
              },
              {
                "title": "Où cliquer",
                "text": "L'endroit exact : la page, le réglage ou l'outil concerné."
              },
              {
                "title": "Valeur",
                "text": "Ce que la correction apporte, appuyé sur une donnée de votre site."
              },
              {
                "title": "Pourquoi",
                "text": "La raison pour laquelle Google en tient compte."
              },
              {
                "title": "Vérifier",
                "text": "Comment contrôler après coup que c'est corrigé."
              }
            ]
          }
        ]
      },
      {
        "id": "deroulement",
        "h2": "Outils et délai de l'audit",
        "blocks": [
          {
            "type": "p",
            "text": "J'explore votre site avec Screaming Frog, un logiciel qui le parcourt page par page, comme le ferait un robot de Google. J'utilise aussi Google Search Console. L'audit est rendu en 1 semaine."
          },
          {
            "type": "p",
            "text": "[À CONFIRMER : accès à fournir par le client, point de départ du délai d'une semaine, existence d'un débrief]"
          }
        ]
      },
      {
        "id": "prix",
        "h2": "Prix d'un audit SEO et ce qui le fait varier",
        "blocks": [
          {
            "type": "p",
            "text": "L'audit est payant : il est compris dans le Diagnostic éclair, de 950 $ à 1 500 $. Les prix sont affichés en dollars canadiens. Paiement par virement bancaire. Il n'y a ni budget minimum ni taille de site minimale."
          },
          {
            "type": "p",
            "text": "Nous ne faisons pas d'audit gratuit : un outil en ligne donne une première liste d'alertes, pas la priorisation. [À CONFIRMER : ce qui place un diagnostic à 950 $ ou à 1 500 $]"
          },
          {
            "type": "link",
            "text": "Voir tous mes tarifs",
            "href": "/tarifs/"
          },
          {
            "type": "link",
            "text": "Comprendre le prix du SEO",
            "href": "/ressources/seo/prix-seo/"
          }
        ]
      },
      {
        "id": "choisir",
        "h2": "Outil gratuit, agence ou freelance : quel audit choisir",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Option",
              "Pour qui",
              "Limite"
            ],
            "rows": [
              [
                "Outil gratuit en ligne",
                "Un premier coup d'œil, un petit site",
                "Il liste des alertes ; la priorisation et le lien avec vos données restent à faire"
              ],
              [
                "Agence",
                "Un site très grand ou plusieurs intervenants à coordonner",
                "Dans une grande structure, demandez qui fait réellement l'analyse"
              ],
              [
                "Mon audit",
                "Une PME qui veut un plan applicable par son développeur",
                "Un seul intervenant : c'est moi, sans équipe de production derrière"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Freelance ou agence SEO : comment choisir",
            "href": "/ressources/choisir/freelance-ou-agence-seo/"
          },
          {
            "type": "p",
            "text": "Le même travail existe pour la visibilité dans les moteurs d'IA et pour les sites qui visent plusieurs pays :"
          },
          {
            "type": "link",
            "text": "Audit GEO (visibilité dans les IA)",
            "href": "/services/geo/audit-geo/"
          },
          {
            "type": "link",
            "text": "SEO international",
            "href": "/services/seo/seo-international/"
          }
        ],
        "usp": "U3"
      },
      {
        "id": "preuve",
        "h2": "Un cas SEO publié : habilitations-electrique.fr",
        "usp": "U2",
        "blocks": [
          {
            "type": "p",
            "text": "Ce cas n'est pas un audit seul : c'est un accompagnement SEO d'un an sur un site de formation, mené à partir des données de la Search Console. Entre septembre 2025 et septembre 2026, les clics Google sont passés de 2 417 à 3 941 par mois, et la position moyenne de 14,0 à 8,1."
          },
          {
            "type": "p",
            "text": "Limites : ces chiffres mesurent la visibilité et les visites venues de Google, pas les inscriptions aux formations, et ils ne prouvent pas ce qu'un audit seul produirait. Source : Google Search Console du client."
          },
          {
            "type": "link",
            "text": "Lire l'étude de cas complète",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          }
        ]
      },
      {
        "id": "apres",
        "h2": "Et après l'audit ?",
        "blocks": [
          {
            "type": "p",
            "text": "L'audit s'arrête au document : il dit quoi corriger et dans quel ordre. Les corrections peuvent être appliquées par votre développeur. Si vous voulez que nous nous en occupions, c'est un accompagnement SEO mensuel (à partir de 797 $ par mois, engagement minimum de 3 mois)."
          },
          {
            "type": "link",
            "text": "Voir l'accompagnement SEO",
            "href": "/services/seo/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Combien coûte un audit SEO ?",
        "a": "De 950 $ à 1 500 $ avant taxes, dans le cadre du Diagnostic éclair."
      },
      {
        "q": "En combien de temps recevez-vous l'audit ?",
        "a": "Il est rendu en 1 semaine."
      },
      {
        "q": "L'audit SEO est-il gratuit ?",
        "a": "Non. Des outils en ligne donnent une liste d'alertes gratuite. Mon audit est payant et rendu en 1 semaine."
      },
      {
        "q": "Que faut-il me fournir pour commencer ?",
        "a": "[À CONFIRMER : accès et informations à fournir pour démarrer l'audit]"
      },
      {
        "q": "Un audit garantit-il de meilleures positions ?",
        "a": "Non. L'audit dit quoi corriger et dans quel ordre. Les positions dépendent ensuite de ce qui est appliqué, de votre concurrence et de Google. Je ne promets aucun résultat."
      },
      {
        "q": "Un audit technique suffit-il ?",
        "a": "Il ne couvre que le premier volet : exploration, indexation, vitesse. Mon audit y ajoute le contenu, la structure et la mesure, parce qu'un site sans erreur technique peut quand même manquer de pages utiles."
      },
      {
        "q": "Faut-il un budget minimum ou un site d'une taille minimale ?",
        "a": "Non. Il n'y a ni budget minimum ni taille de site minimale."
      }
    ],
    "cta": {
      "title": "Demandez votre audit SEO",
      "text": "Dites-nous l'adresse de votre site et votre objectif. Nous vous indiquons le prix, dans la fourchette de 950 $ à 1 500 $.",
      "label": "Demander un audit"
    }
  },
  // ───────────────────────── S12 · SEO international (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S12: {
    "answer": "Le SEO international, ou référencement international, rend un site visible dans Google de chaque pays et de chaque langue visés. Il devient utile dès qu'un même site vise plusieurs marchés, par exemple le Québec, le Canada anglais et les États-Unis. Nous travaillons depuis Scott (Québec). L'audit coûte de 950 $ à 1 500 $.",
    "sections": [
      {
        "id": "quand",
        "h2": "Quand le SEO international devient nécessaire",
        "blocks": [
          {
            "type": "p",
            "text": "Un site qui vise un seul pays n'a pas besoin de SEO international. Le sujet se pose quand un même site doit être trouvé dans plusieurs marchés : une boutique qui livre au Québec et en Ontario, un manufacturier québécois qui vend aux États-Unis, une entreprise qui garde une version française et une version anglaise."
          },
          {
            "type": "list",
            "items": [
              "Vos pages françaises s'affichent au Canada alors que vous avez une version pour le Québec.",
              "Deux versions de la même page se font concurrence dans Google.",
              "Votre site est traduit, mais vos ventes à l'étranger ne suivent pas.",
              "Vous préparez une ouverture sur un nouveau marché et vous devez choisir la structure du site avant de publier."
            ]
          },
          {
            "type": "p",
            "text": "Multilingue ou international : un site multilingue propose plusieurs langues. Un site international cible aussi des pays, avec parfois la même langue dans deux pays (le français de France et le français du Canada). Le deuxième cas est le plus délicat à gérer. Dans les deux cas, la stratégie commence par une question : quel marché apporte quelles demandes ? Une boutique en ligne (e-commerce) ajoute des questions de devises et de livraison, que le site doit afficher clairement par pays."
          }
        ]
      },
      {
        "id": "structure",
        "h2": "Domaine, sous-domaine ou sous-répertoire : comment choisir",
        "blocks": [
          {
            "type": "p",
            "text": "C'est la première décision, et la plus difficile à défaire. Voici comment je compare les trois options. Cette grille n'est pas une règle : l'audit tranche pour votre site."
          },
          {
            "type": "table",
            "head": [
              "Structure",
              "Exemple",
              "Plus",
              "Moins"
            ],
            "rows": [
              [
                "Domaine par pays (ccTLD)",
                "monsite.fr, monsite.ca, monsite.tn",
                "Signal de pays très clair pour Google et pour vos visiteurs",
                "Un site à construire, héberger et faire connaître par pays"
              ],
              [
                "Sous-domaine",
                "ca.monsite.com",
                "Hébergement séparé possible, mise en place rapide",
                "Selon les cas, Google peut le traiter comme un site distinct du site principal"
              ],
              [
                "Sous-répertoire",
                "monsite.com/fr-ca/",
                "Un seul site à faire grandir, maintenance simple",
                "Moins de séparation technique entre les pays"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le choix dépend de votre budget, du nombre de pays et du contenu local que vous pouvez publier. Je recommande la structure la plus simple que vous pouvez tenir dans la durée."
          },
          {
            "type": "link",
            "text": "Voir l'audit SEO",
            "href": "/services/seo/audit-seo/"
          }
        ]
      },
      {
        "id": "hreflang",
        "h2": "Hreflang : à quoi il sert et les erreurs que je vérifie",
        "blocks": [
          {
            "type": "p",
            "text": "Hreflang est une annotation (balise dans la page, en-tête HTTP ou sitemap) qui indique à Google quelle version d'une page correspond à quelle langue et à quel pays. Elle aide Google à montrer la bonne version à chaque visiteur. Elle ne remplace ni la traduction ni le contenu local."
          },
          {
            "type": "p",
            "text": "Exemples de codes : fr-CA pour le français du Canada, en-CA pour l'anglais du Canada, fr-FR pour le français de France. Chaque code associe une langue et, si besoin, un pays. Chaque page doit aussi se citer elle-même dans la liste, et une version « x-default » peut servir de page de repli pour les visiteurs hors des pays prévus."
          },
          {
            "type": "p",
            "text": "Les erreurs que je cherche en premier dans un audit :"
          },
          {
            "type": "list",
            "items": [
              "Les liens ne sont pas réciproques : la page A pointe vers B, mais B ne pointe pas vers A.",
              "Le code de langue ou de pays est faux (par exemple « en-UK » au lieu de « en-GB »).",
              "Une version pointe vers une page redirigée ou en erreur.",
              "Les versions sont presque identiques : Google peut les regrouper comme du contenu dupliqué.",
              "L'annotation est présente sur certaines pages seulement."
            ]
          },
          {
            "type": "p",
            "text": "Ces points se contrôlent avec un crawl Screaming Frog et la lecture du code des pages. La Search Console sert ensuite à mesurer les impressions par pays, pas à valider le hreflang."
          }
        ]
      },
      {
        "id": "contenu",
        "h2": "Mots-clés et contenu : un marché, un vocabulaire",
        "blocks": [
          {
            "type": "p",
            "text": "Traduire un texte ne suffit pas. Un même service ne se cherche pas avec les mêmes mots au Québec, au Canada anglais et aux États-Unis, et la concurrence n'est pas la même. Nous partons donc des requêtes de chaque marché, avec les données de Google Search Console et Semrush. Le référencement naturel de chaque version se juge sur ses propres requêtes."
          },
          {
            "type": "p",
            "text": "Pour mes campagnes Google Ads, je construis les mots-clés en français et en arabe. En SEO, la traduction elle-même reste à confier à un traducteur qui connaît le marché : je ne fais pas de traduction, je vérifie que le contenu final vise les bonnes requêtes."
          },
          {
            "type": "link",
            "text": "Lire : visibilité IA en arabe",
            "href": "/ressources/geo/geo-en-arabe/"
          }
        ]
      },
      {
        "id": "versions",
        "h2": "Google Canada, Google France, Google États-Unis : pas les mêmes résultats",
        "blocks": [
          {
            "type": "p",
            "text": "Une même requête ne donne pas la même page de résultats selon le pays et la langue du visiteur. Votre concurrent n'est donc pas le même sur Google France et sur Google Canada, et une page bien placée dans un pays peut rester invisible dans l'autre."
          },
          {
            "type": "p",
            "text": "Pour le savoir, il faut comparer les résultats de chaque marché. La Search Console, filtrée par pays, montre où le site est déjà visible et où il ne l'est pas du tout. Voici ce que je propose de regarder :"
          },
          {
            "type": "list",
            "items": [
              "Quelles requêtes vous amènent déjà des visiteurs dans chaque pays.",
              "Quelles pages s'affichent dans le mauvais pays.",
              "Quels concurrents locaux dominent chaque marché."
            ]
          }
        ]
      },
      {
        "id": "moteurs",
        "h2": "Les autres moteurs et les IA",
        "blocks": [
          {
            "type": "p",
            "text": "Selon le pays, Google n'est pas seul. Bing existe partout, mais ce sont surtout Yandex (Russie) et Baidu (Chine) qui demandent un travail à part, avec leurs propres règles. Pour le Québec, le Canada et les États-Unis, on commence par Google, le moteur de recherche dominant sur ces marchés."
          },
          {
            "type": "p",
            "text": "Les assistants comme ChatGPT, Gemini ou Perplexity répondent aussi dans la langue du visiteur. Un site clair et structuré par pays est plus facile à citer. C'est l'objet du service GEO."
          },
          {
            "type": "link",
            "text": "Découvrir le service GEO",
            "href": "/services/geo/"
          }
        ]
      },
      {
        "id": "pratique",
        "h2": "Travailler depuis le Québec, pour des PME du Québec",
        "blocks": [
          {
            "type": "p",
            "text": "Nous travaillons depuis Scott (Québec), pour des PME de tout le Québec. Le hreflang, les versions de pays et la concurrence locale font partie de notre quotidien."
          },
          {
            "type": "p",
            "text": "Pour le suivi, je compte les demandes réellement reçues, marché par marché. Pour CNFSE (habilitations-electrique.fr, un site visant la France), les clics Google sont passés de 2 417 à 3 941 par mois en un an (Search Console, septembre 2025 → septembre 2026). Ce cas montre ma méthode de mesure, pas un projet multi-pays."
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : un site multi-pays piloté par Majed (secteur, marchés, période), publiable avec l'accord du client]"
          },
          {
            "type": "link",
            "text": "Lire l'étude de cas SEO",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          },
          {
            "type": "link",
            "text": "Vous vendez hors du Québec ? Voir la page SEO international",
            "href": "/pour/exportateurs/"
          }
        ]
      },
      {
        "id": "methode",
        "h2": "Comment je procède",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Marchés",
                "text": "Quels pays, quelles langues, quelles requêtes, quels concurrents locaux."
              },
              {
                "title": "Structure",
                "text": "Domaine, sous-domaine ou sous-répertoire, avec la raison du choix."
              },
              {
                "title": "Technique",
                "text": "Hreflang, indexation, contenu dupliqué entre versions, vitesse."
              },
              {
                "title": "Contenu",
                "text": "Une page cible par requête et par marché."
              },
              {
                "title": "Mesure",
                "text": "Un point régulier chiffré, marché par marché."
              }
            ]
          },
          {
            "type": "p",
            "text": "Je ne promets ni une position précise ni un délai. Je rends compte de ce qui se mesure."
          }
        ]
      },
      {
        "id": "tarifs",
        "h2": "Tarifs",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix"
            ],
            "rows": [
              [
                "Audit SEO",
                "État des lieux du site et plan d'action. Rendu en 1 semaine.",
                "950 à 1 500 $"
              ],
              [
                "Accompagnement mensuel",
                "Mise en œuvre et suivi. Engagement minimum de 3 mois.",
                "797 à 2 497 $ et plus par mois"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Prix en dollars canadiens, avant taxes. Le paiement se fait par virement bancaire."
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          },
          {
            "type": "link",
            "text": "Prix du SEO en 2026 : le marché québécois",
            "href": "/ressources/seo/prix-seo/"
          },
          {
            "type": "link",
            "text": "Retour au consultant SEO",
            "href": "/services/seo/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Qu'est-ce que le SEO international ?",
        "a": "C'est l'ensemble des actions qui permettent à un site d'être trouvé dans plusieurs pays ou plusieurs langues : structure du site, hreflang, contenu local et suivi par marché."
      },
      {
        "q": "Quelle différence entre SEO local et SEO international ?",
        "a": "Le SEO local vise une zone proche, souvent une ville, avec des fiches comme Google Business Profile. Le SEO international vise plusieurs pays ou langues, avec des versions de site et des signaux de pays."
      },
      {
        "q": "Quel nom de domaine choisir pour plusieurs pays ?",
        "a": "Un domaine par pays donne le signal le plus clair mais coûte plus cher à faire vivre. Un sous-répertoire est plus simple à gérer. Le choix dépend de votre budget et du nombre de pays : voir le tableau plus haut."
      },
      {
        "q": "À quoi sert la balise hreflang ?",
        "a": "Elle indique à Google quelle version d'une page correspond à quelle langue et à quel pays, pour montrer la bonne version à chaque visiteur. Les liens entre versions doivent être réciproques."
      },
      {
        "q": "Faut-il une version pour le Québec distincte de la version France ?",
        "a": "Pas toujours. Si le vocabulaire, les prix, la livraison ou la concurrence diffèrent, une version fr-CA se justifie. Sinon, une seule version française peut suffire. L'audit tranche selon vos données."
      },
      {
        "q": "Combien coûte un accompagnement en SEO international ?",
        "a": "Un diagnostic coûte de 950 $ à 1 500 $ et l'accompagnement mensuel de 797 $ à 2 497 $ et plus par mois, avec un engagement minimum de 3 mois."
      },
      {
        "q": "Faites-vous la traduction du site ?",
        "a": "Non. Je vérifie que les contenus traduits visent les bonnes requêtes et que la technique est correcte. La traduction est confiée à un traducteur qui connaît le marché."
      }
    ],
    "cta": {
      "title": "Parlons de vos marchés",
      "text": "Dites-moi quels pays vous visez et où en est votre site. Je vous dis si j'ai quelque chose à vous apporter.",
      "label": "Réserver un diagnostic"
    }
  },
  // ───────────────────────── S20 · Consultant GEO (référencement IA) (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S20: {
    "answer": "Un consultant GEO (Generative Engine Optimization) travaille pour que ChatGPT, Gemini, Perplexity et les AI Overviews de Google citent votre entreprise dans leurs réponses. Notre agence travaille depuis Scott (Québec), pour des PME de tout le Québec. Nous commençons par mesurer ce que les IA répondent aujourd'hui à vos clients. L'audit GEO est compris dans le Diagnostic éclair (950 $ à 1 500 $) et il est rendu en une semaine. Nous ne garantissons aucune citation.",
    "sections": [
      {
        "id": "definition",
        "h2": "Ce que fait un consultant GEO",
        "blocks": [
          {
            "type": "p",
            "text": "Un assistant comme ChatGPT, Gemini ou Perplexity ne renvoie pas une liste de liens. Il rédige une réponse à partir de sources et cite quelques entreprises, parfois aucune. Le consultant GEO cherche pourquoi la vôtre n'en fait pas partie, puis corrige ce qui peut l'être."
          },
          {
            "type": "p",
            "text": "Le travail porte sur quatre points : ce que les moteurs de recherche (Google, Bing) indexent de votre site, la clarté de vos pages pour un modèle de langage (LLM), la cohérence de votre marque sur le web, et la mesure des réponses. Un site que Google et Bing indexent mal est plus difficile à retrouver, y compris pour ces outils."
          },
          {
            "type": "p",
            "text": "Deux termes reviennent souvent. Le Knowledge Graph est la base d'entités (personnes, entreprises, lieux) que Google tient à jour. Les AI Overviews sont les synthèses rédigées par l'IA, affichées au-dessus des résultats classiques."
          },
          {
            "type": "link",
            "text": "GEO et SEO : ce qui change, ce qui ne change pas",
            "href": "/ressources/geo/seo-vs-geo/"
          }
        ]
      },
      {
        "id": "qui",
        "usp": "U3",
        "h2": "Qui travaille sur votre visibilité dans les IA",
        "blocks": [
          {
            "type": "p",
            "text": "C'est moi, de la première mesure au dernier rapport. Le GEO, le SEO, Google Ads, Meta Ads et la mesure des conversions sont pilotés par la même personne. Vous ne réunissez pas plusieurs prestataires pour savoir lequel a fait quoi."
          },
          {
            "type": "list",
            "items": [
              "Intervenant au SEO CAMP Day de Lille, le 11 janvier 2019.",
              "Co-auteur du livre blanc Rocketlinks « Les secrets du netlinking révélés par 9 experts SEO ».",
              "Certifications affichées : Google Ads, Display & Video 360, Campaign Manager 360, Klaviyo. Outils : GA4, Google Tag Manager, Semrush, Screaming Frog."
            ]
          },
          {
            "type": "link",
            "text": "Voir mon parcours et mes références",
            "href": "/a-propos/"
          }
        ]
      },
      {
        "id": "methode",
        "h2": "Ma méthode en quatre étapes",
        "blocks": [
          {
            "type": "p",
            "text": "[À CONFIRMER : méthode de relevé GEO décrite ci-dessous (moteurs relevés, fiches d'action, nouvelle mesure) et livrables du tableau « Ce que je mesure »]"
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Relevé des réponses",
                "text": "Je pose à ChatGPT, Gemini, Perplexity et Google (AI Overviews) les questions que vos clients posent, dans leur langue et leur pays. Je note qui est cité, qui ne l'est pas, et avec quelles sources."
              },
              {
                "title": "Audit",
                "text": "Je regarde ce qui explique l'écart : indexation, structure des pages, données structurées, cohérence du nom et des informations de l'entreprise, présence sur les sources que les IA consultent."
              },
              {
                "title": "Correctifs",
                "text": "Je rédige des fiches d'action classées par priorité : quoi modifier, où, pourquoi, comment vérifier. Votre équipe ou la mienne les applique."
              },
              {
                "title": "Nouvelle mesure",
                "text": "Je repose les mêmes questions à intervalle régulier. Les réponses des IA changent d'un jour à l'autre : une seule mesure ne prouve rien."
              }
            ]
          }
        ]
      },
      {
        "id": "mesure",
        "h2": "Ce que je mesure",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Moteur",
              "Ce que je relève",
              "Ce que vous recevez"
            ],
            "rows": [
              [
                "ChatGPT",
                "Votre entreprise est-elle citée pour vos requêtes, et avec quelle source",
                "Tableau des questions posées et des réponses obtenues, daté"
              ],
              [
                "Gemini",
                "Les mêmes questions, dans la même langue",
                "Comparaison entre moteurs"
              ],
              [
                "Perplexity",
                "Les sources affichées à côté de la réponse",
                "Liste des sites qui vous remplacent dans les réponses"
              ],
              [
                "Google AI Overviews",
                "Présence de votre site dans la synthèse affichée en haut des résultats",
                "Pages à corriger en priorité"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Chaque relevé indique la date, le pays et la langue. Je ne compte pas un résultat isolé comme une tendance."
          }
        ]
      },
      {
        "id": "limites",
        "h2": "Ce que je ne peux pas promettre",
        "blocks": [
          {
            "type": "p",
            "text": "Je ne garantis pas qu'une IA vous citera, ni à quelle place, ni à quelle date. Ces moteurs décident seuls, et leurs réponses varient. Personne ne contrôle ces réponses, donc personne ne peut vendre une première place."
          },
          {
            "type": "p",
            "text": "Voici ce que je livre : l'audit contient un relevé écrit et des actions précises. Une nouvelle mesure permet ensuite de comparer."
          }
        ]
      },
      {
        "id": "prestations",
        "h2": "Prestations et prix",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix"
            ],
            "rows": [
              [
                "Audit GEO",
                "Relevé des réponses des IA, diagnostic et plan d'action priorisé, remis par écrit en une semaine",
                "950 à 1 500 $ (Diagnostic éclair)"
              ],
              [
                "Accompagnement mensuel GEO [À CONFIRMER : cette offre existe]",
                "Mise en œuvre des correctifs et nouvelles mesures",
                "dès 2 497 $ par mois (pack Autorité IA)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "L'audit est payant. Les accompagnements mensuels demandent un engagement minimum de 3 mois. Pas de budget minimum ni de taille de site minimale. Les prix sont en dollars canadiens, avant taxes. Paiement par virement bancaire."
          },
          {
            "type": "link",
            "text": "Voir le détail de l'audit GEO",
            "href": "/services/geo/audit-geo/"
          }
        ]
      },
      {
        "id": "consultant-agence",
        "usp": "U3",
        "h2": "Consultant GEO ou agence : comment choisir",
        "blocks": [
          {
            "type": "table",
            "head": [
              "",
              "Consultant",
              "Agence"
            ],
            "rows": [
              [
                "Qui fait le travail",
                "La personne que vous avez rencontrée",
                "Une équipe, souvent encadrée par un chef de projet"
              ],
              [
                "Contact",
                "Direct",
                "Souvent via un interlocuteur commercial"
              ],
              [
                "Plusieurs métiers à la fois",
                "Limité à mes services : SEO, GEO, Google Ads, Meta Ads, mesure, automatisation, formations",
                "Équipes spécialisées"
              ],
              [
                "Si le consultant est indisponible",
                "Dépend de la personne",
                "L'équipe prend le relais"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Si votre projet demande de la production de contenu à grande échelle, du développement ou des relations presse, une agence est un meilleur choix. Si vous voulez parler à celui qui fait la mesure et les correctifs, un consultant suffit."
          }
        ]
      },
      {
        "id": "preuve",
        "usp": "U2",
        "h2": "Ce que mon travail SEO m'a appris sur la mesure",
        "blocks": [
          {
            "type": "p",
            "text": "Je n'ai pas encore publié d'étude chiffrée sur la visibilité dans les IA. Je ne vous en présente donc pas. Ce que je peux montrer, c'est ma façon de mesurer : pour CNFSE (habilitations-electrique.fr), les clics Google sont passés de 2 417 à 3 941 par mois en un an, et la position moyenne de 14,0 à 8,1 (Search Console, septembre 2025 → septembre 2026). L'étude de cas indique aussi ce que ces chiffres ne prouvent pas."
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : un relevé de visibilité IA réel, daté et anonymisé, que Majed accepte de publier]"
          },
          {
            "type": "link",
            "text": "Lire l'étude de cas SEO",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          }
        ]
      },
      {
        "id": "tunisie",
        "h2": "Le référencement IA depuis le Québec, pour être cité partout",
        "blocks": [
          {
            "type": "p",
            "text": "Nous mesurons depuis le Québec ce que ChatGPT, Gemini et Perplexity répondent à vos clients, puis nous corrigeons ce qui empêche votre marque d'être citée. Les questions sont posées dans la langue et le pays de vos clients : Québec, Canada ou États-Unis."
          },
          {
            "type": "link",
            "text": "Faire auditer sa visibilité IA",
            "href": "/services/geo/audit-geo/"
          }
        ]
      },
      {
        "id": "aller-plus-loin",
        "h2": "Pour aller plus loin",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Vous voulez comprendre avant d'acheter : le guide complet sur la visibilité dans les IA génératives.",
              "Vous voulez apprendre à le faire vous-même : la formation GEO.",
              "Vous vous demandez si le fichier llms.txt sert à quelque chose : l'article qui répond."
            ]
          },
          {
            "type": "link",
            "text": "Le guide GEO",
            "href": "/ressources/geo/"
          },
          {
            "type": "link",
            "text": "La formation GEO",
            "href": "/formations/geo/"
          },
          {
            "type": "link",
            "text": "llms.txt : utile ou pas ?",
            "href": "/ressources/geo/llms-txt/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Qu'est-ce qu'un consultant GEO ?",
        "a": "Un consultant qui travaille pour que votre entreprise soit citée dans les réponses de ChatGPT, Gemini, Perplexity et des AI Overviews de Google. Il mesure ces réponses, trouve ce qui bloque, puis corrige votre site et votre présence en ligne."
      },
      {
        "q": "Pouvez-vous garantir que ChatGPT citera mon entreprise ?",
        "a": "Non. Ces moteurs décident seuls et leurs réponses changent d'un jour à l'autre. L'audit livre un relevé écrit et des actions précises, une nouvelle mesure permet de comparer."
      },
      {
        "q": "Combien coûte un consultant GEO ?",
        "a": "L'audit GEO est compris dans le Diagnostic éclair (950 $ à 1 500 $). Il est payant et rendu en une semaine."
      },
      {
        "q": "Quelle différence entre le GEO et le SEO ?",
        "a": "Le SEO vise la place de vos pages dans Google. Le GEO vise la présence de votre marque dans les réponses rédigées par les IA. Les deux partagent une base : un site bien indexé, clair et fiable."
      },
      {
        "q": "Faut-il un budget minimum ou un gros site ?",
        "a": "Non. Je n'impose ni budget minimum ni taille de site minimale. L'audit dit si un accompagnement vaut la peine."
      },
      {
        "q": "Travaillez-vous avec des PME de tout le Québec ?",
        "a": "Oui. Nous travaillons depuis Scott (Québec), pour des PME de tout le Québec. Les relevés sont faits dans la langue et le pays de vos clients."
      },
      {
        "q": "Quels outils utilisez-vous ?",
        "a": "GA4, Google Tag Manager, Semrush et Screaming Frog pour le diagnostic du site. Les relevés de réponses des IA se font moteur par moteur, avec date, pays et langue."
      },
      {
        "q": "Combien de temps dure l'accompagnement ?",
        "a": "L'audit est rendu en une semaine. Les accompagnements mensuels ont un engagement minimum de 3 mois."
      }
    ],
    "cta": {
      "title": "Ce que les IA disent de votre entreprise",
      "text": "Décrivez-moi votre site et vos marchés. Je vous dis franchement si un audit GEO a du sens dans votre cas.",
      "label": "Demander un audit GEO"
    }
  },
  // ───────────────────────── S21 · Audit GEO (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S21: {
    "answer": "Un audit GEO mesure ce que ChatGPT, Gemini et Perplexity répondent à vos clients, et dit si votre marque y est citée et comment. Nous posons les questions aux IA dans la langue et le pays de vos clients, nous notons les citations, puis nous vous remettons un plan d'action écrit. L'audit est payant : compris dans le Diagnostic éclair (950 $ à 1 500 $), rendu en 1 semaine.",
    "sections": [
      {
        "id": "mesure",
        "h2": "Ce que mesure un audit GEO",
        "blocks": [
          {
            "type": "p",
            "text": "GEO veut dire Generative Engine Optimization : travailler pour que les IA qui rédigent des réponses (les LLM, grands modèles de langage) citent votre entreprise. L'audit sert de point de départ. Il répond à une question : quand un client potentiel interroge une IA sur votre métier, que lit-il à votre sujet ?"
          },
          {
            "type": "p",
            "text": "Je calcule quatre indicateurs. Tous se lisent sur le même ensemble de questions posées aux IA, donc cette liste compte beaucoup (voir plus bas)."
          },
          {
            "type": "table",
            "head": [
              "Indicateur",
              "Comment il se calcule",
              "Ce qu'il dit"
            ],
            "rows": [
              [
                "Taux de mention",
                "Réponses où votre marque est nommée, divisées par le nombre de réponses relevées",
                "Les IA vous connaissent-elles ?"
              ],
              [
                "Taux de citation",
                "Réponses où votre site est donné comme source, divisées par le nombre de réponses relevées",
                "Les IA envoient-elles vers vous ?"
              ],
              [
                "Part de voix IA",
                "Vos mentions comparées à celles de vos concurrents sur les mêmes questions",
                "Qui l'IA recommande à votre place ?"
              ],
              [
                "Couverture thématique",
                "Sujets de votre métier où vous apparaissez, rapportés à ceux de la liste",
                "Où êtes-vous absent ?"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Une mention n'est pas une citation : l'IA peut parler de vous sans renvoyer vers votre site. Je compte les deux séparément, car elles ne se corrigent pas de la même façon."
          }
        ]
      },
      {
        "id": "volets",
        "usp": "U3",
        "h2": "Les trois volets de l'audit",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Mesure : ce que répondent les IA",
                "text": "Nous partons d'une banque de prompts, c'est-à-dire une liste de questions que vos clients posent à une IA avant de choisir. Nous la posons à ChatGPT, Gemini et Perplexity avec l'outil ZeroRank et nous relevons chaque réponse avec sa date. [À CONFIRMER : nombre de prompts inclus dans le Diagnostic éclair]"
              },
              {
                "title": "Votre site vu par les IA",
                "text": "Ce volet s'appelle « onsite » : il porte sur votre propre site. Les robots des IA peuvent-ils lire vos pages (fichier robots.txt, affichage sans JavaScript) ? Vos réponses tiennent-elles en passages courts, faciles à reprendre ? Vos données structurées (un balisage qui décrit votre entreprise aux machines) et vos signes de confiance (auteur, expérience, sources, ce que Google appelle E-E-A-T) sont-ils en place ?"
              },
              {
                "title": "Ce que les autres sites disent de vous",
                "text": "Ce volet s'appelle « offsite » : il porte sur le reste du web. Les IA s'appuient sur d'autres sites que le vôtre. Je relève quelles sources sont citées à votre place (annuaires, forums comme Reddit, Wikipédia et Wikidata, presse, avis) et où votre marque est absente."
              }
            ]
          },
          {
            "type": "link",
            "text": "SEO ou GEO : en quoi les deux se complètent",
            "href": "/ressources/geo/seo-vs-geo/"
          },
          {
            "type": "link",
            "text": "Comment apparaître dans ChatGPT",
            "href": "/ressources/geo/apparaitre-dans-chatgpt/"
          }
        ]
      },
      {
        "id": "seo-geo",
        "h2": "Audit SEO ou audit GEO ?",
        "blocks": [
          {
            "type": "table",
            "head": [
              "",
              "Audit SEO",
              "Audit GEO"
            ],
            "rows": [
              [
                "Question posée",
                "Où êtes-vous classé sur Google ?",
                "Êtes-vous cité dans la réponse d'une IA ?"
              ],
              [
                "Ce qu'on compte",
                "Positions, clics, pages indexées",
                "Mentions, citations, sources"
              ],
              [
                "Outil de relevé",
                "Google Search Console, Screaming Frog",
                "Relevé des réponses des IA (ZeroRank)"
              ],
              [
                "Point commun",
                "Un site lisible, un contenu utile, des sources qui parlent de vous",
                "Même socle : le GEO s'appuie sur le SEO"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Si votre site n'a jamais été audité, commencez par là. Un site mal indexé a peu de chances d'être repris par les IA."
          },
          {
            "type": "link",
            "text": "Voir l'audit SEO",
            "href": "/services/seo/audit-seo/"
          }
        ]
      },
      {
        "id": "questions",
        "h2": "Choisir les bonnes questions à poser aux IA",
        "blocks": [
          {
            "type": "p",
            "text": "Tout l'audit repose sur la liste de questions. Trop large, elle noie le résultat. Trop proche de votre nom de marque, elle flatte le score. Je la construis avec vous à partir de ce que vos clients demandent avant d'acheter : comparer des prestataires, demander un prix, chercher un avis."
          },
          {
            "type": "list",
            "items": [
              "Des questions sans votre nom (« quel prestataire choisir pour… »), pour voir si l'IA vous propose.",
              "Des questions avec votre nom, pour voir ce qu'elle dit de vous.",
              "Des questions sur vos concurrents principaux, pour calculer la part de voix."
            ]
          },
          {
            "type": "p",
            "text": "Chaque question est posée dans la langue et le pays de vos clients : Québec, Canada ou États-Unis, en français ou en anglais. Une même question peut recevoir une réponse différente selon le pays."
          },
          {
            "type": "p",
            "text": "Les réponses d'une IA changent d'une fois sur l'autre. Je compare donc plusieurs relevés par question avant de conclure, et je date chacun. [À CONFIRMER : nombre de passages et règle de lecture, par exemple « une citation compte si elle apparaît dans au moins 2 passages sur 3 »]"
          },
          {
            "type": "p",
            "text": "Limite à connaître : mon outil de relevé n'interroge pas les IA comme le ferait un navigateur situé dans le pays de vos clients. Les chiffres donnent une tendance, pas une promesse de position."
          }
        ]
      },
      {
        "id": "livrables",
        "h2": "Ce que vous recevez, et quand",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Un rapport écrit : vos quatre indicateurs, comparés à ceux de vos concurrents suivis.",
              "Le relevé daté des réponses des IA, que vous pouvez relire question par question.",
              "La liste des problèmes de votre site (volet onsite) et des sources où vous êtes absent (volet offsite).",
              "Un plan d'action classé par ordre de priorité : ce qui se corrige en premier, par qui, et comment vérifier que c'est fait."
            ]
          },
          {
            "type": "p",
            "text": "Le rapport est remis en 1 semaine. [À CONFIRMER : format du rapport (document, tableur, restitution en visio)]"
          },
          {
            "type": "p",
            "text": "L'audit ne corrige rien lui-même et ne garantit aucune citation. Les corrections viennent après, faites par vous ou par moi."
          }
        ]
      },
      {
        "id": "tarif",
        "h2": "Combien coûte un audit GEO",
        "blocks": [
          {
            "type": "p",
            "text": "De 950 $ à 1 500 $, dans le cadre du Diagnostic éclair. Le prix dépend du périmètre. [À CONFIRMER : ce qui fait passer de 950 $ à 1 500 $ (nombre de marchés, de questions, de concurrents suivis)]"
          },
          {
            "type": "p",
            "text": "L'audit est payant et sans engagement de durée. Seuls les accompagnements mensuels demandent 3 mois minimum. Paiement par virement. Les prix sont affichés en dollars canadiens, avant taxes."
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          }
        ]
      },
      {
        "id": "pour-qui",
        "h2": "Pour qui, et pour qui pas",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Fait pour : une entreprise dont les clients posent déjà leurs questions à ChatGPT ou à Perplexity avant de choisir.",
              "Fait pour : une équipe qui veut savoir ce que les IA disent d'elle avant de décider d'un accompagnement GEO.",
              "Moins adapté : un site neuf, sans contenu ni source qui parle de lui. Il n'y a presque rien à mesurer. Mon avis : publier d'abord, être cité ailleurs, mesurer ensuite."
            ]
          }
        ]
      },
      {
        "id": "preuves",
        "h2": "Aucune étude GEO publiée, un cas de mesure ailleurs",
        "blocks": [
          {
            "type": "p",
            "text": "Je n'ai pas encore publié d'étude de cas GEO. [À COMPLÉTER : un audit GEO publiable, chiffres et accord du client]"
          },
          {
            "type": "p",
            "text": "Une étude publiée montre le même réflexe que dans l'audit GEO : vérifier ce qu'on compte avant de conclure. Pour CNFSE (SEO), les clics Google sont passés de 2 417 à 3 941 par mois en un an, source Search Console."
          },
          {
            "type": "link",
            "text": "Étude de cas SEO : habilitations-electrique.fr",
            "href": "/etudes-de-cas/seo-habilitation-electrique/"
          },
          {
            "type": "link",
            "text": "Ma méthode de travail",
            "href": "/methode/"
          }
        ]
      },
      {
        "id": "apres",
        "h2": "Après l'audit",
        "blocks": [
          {
            "type": "p",
            "text": "Vous repartez avec un plan que votre équipe ou un autre prestataire peut appliquer. Si vous préférez que je m'en charge, c'est un accompagnement mensuel de 3 mois minimum. Rien d'obligatoire."
          },
          {
            "type": "link",
            "text": "Le référencement IA (GEO) en détail",
            "href": "/services/geo/"
          },
          {
            "type": "link",
            "text": "Apprendre à le faire vous-même : formation GEO",
            "href": "/formations/geo/"
          }
        ]
      },
      {
        "id": "tunisie",
        "h2": "Un audit GEO piloté depuis le Québec",
        "blocks": [
          {
            "type": "p",
            "text": "Nous travaillons depuis Scott (Québec). Les questions sont posées aux IA dans la langue et le pays de vos clients (Québec, Canada ou États-Unis) : l'audit reflète ce qu'ils voient, pas ce que nous voyons."
          },
          {
            "type": "link",
            "text": "Voir le référencement IA depuis le Québec",
            "href": "/services/geo/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Combien coûte un audit GEO ?",
        "a": "De 950 $ à 1 500 $ selon le périmètre, dans le cadre du Diagnostic éclair. L'audit est payant."
      },
      {
        "q": "Combien de temps dure un audit GEO ?",
        "a": "Le rapport est remis en 1 semaine."
      },
      {
        "q": "Quelle différence avec un audit SEO ?",
        "a": "L'audit SEO regarde votre place dans Google. L'audit GEO regarde si les IA vous citent dans leurs réponses. Le second s'appuie sur le premier."
      },
      {
        "q": "Quelles IA sont interrogées ?",
        "a": "ChatGPT, Gemini et Perplexity. [À CONFIRMER : Google AI Overviews inclus ou non]"
      },
      {
        "q": "Mon site vise plusieurs pays ou plusieurs langues : faut-il un audit par langue ?",
        "a": "Les questions sont posées dans la langue et le pays de vos clients, donc chaque marché a sa liste de questions. [À CONFIRMER : un audit multilingue est-il inclus dans le prix ou facturé par marché]"
      },
      {
        "q": "Le résultat de l'audit est-il garanti ?",
        "a": "Non. Je ne promets ni position ni citation : les IA décident. Je livre une mesure datée, un rapport écrit et un plan d'action."
      },
      {
        "q": "Que se passe-t-il après l'audit ?",
        "a": "Vous gardez le plan et le relevé. Un accompagnement mensuel est possible, sur 3 mois minimum, sans obligation."
      },
      {
        "q": "Comment me contacter pour un audit ?",
        "a": "Par le formulaire de contact : indiquez votre activité, votre pays et vos principaux concurrents."
      }
    ],
    "cta": {
      "title": "Voir ce que les IA disent de vous",
      "text": "Indiquez votre activité, votre pays et vos principaux concurrents. Je vous réponds avec le périmètre et le prix exact de l'audit.",
      "label": "Demander mon audit GEO"
    }
  },
  // ───────────────────────── S30 · Consultant Google Ads (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S30: {
    "answer": "Un consultant Google Ads pilote vos campagnes de publicité sur Google : structure du compte, mots-clés, annonces, suivi des conversions et arbitrage du budget. Notre agence travaille depuis Scott (Québec), pour des PME de tout le Québec. Un audit de compte est compris dans le Diagnostic éclair (950 $ à 1 500 $), une gestion mensuelle de 797 $ à 997 $ par mois en forfait fixe (Essentiel). Nous ne prenons aucun pourcentage sur votre budget publicitaire.",
    "sections": [
      {
        "id": "role",
        "h2": "Ce que fait un consultant Google Ads",
        "blocks": [
          {
            "type": "p",
            "text": "Il s'occupe du compte à votre place, ou à vos côtés. Mon travail tient en cinq activités."
          },
          {
            "type": "table",
            "head": [
              "Activité",
              "Ce que je regarde",
              "Pourquoi"
            ],
            "rows": [
              [
                "Analyse et budget",
                "Dépense, coût par demande, part des recherches où vos annonces ne sont pas apparues faute de budget ou de classement",
                "Déplacer l'argent vers ce qui convertit"
              ],
              [
                "Mots-clés et termes de recherche",
                "Ce que les gens tapent vraiment, mots-clés négatifs à exclure",
                "Stopper les clics sans intention d'achat"
              ],
              [
                "Annonces et pages de destination",
                "Titres, descriptions et page d'arrivée",
                "Tester des angles, garder ce qui gagne"
              ],
              [
                "Suivi des conversions",
                "Appels, formulaires, rendez-vous, et votre CRM (le logiciel où vous suivez vos clients)",
                "Piloter sur le résultat réel"
              ],
              [
                "Reporting",
                "Chiffres du mois, décisions prises, prochaine étape",
                "Savoir ce que produit chaque dinar ou chaque euro investi"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Voir comment je mène un audit de compte",
            "href": "/services/google-ads/audit-compte/"
          }
        ]
      },
      {
        "id": "mesure",
        "h2": "Je vérifie d'abord ce que le compte compte comme « conversion »",
        "blocks": [
          {
            "type": "p",
            "text": "Google Ads optimise vers l'objectif qu'on lui donne, et il le fait vite. Si le suivi compte comme conversions des demandes qui ne sont pas de vrais prospects, le compte avance vers le mauvais but. Avant de toucher aux campagnes, je contrôle donc ce qui est compté : un appel compté deux fois, un formulaire sans suite, un clic sur un numéro."
          },
          {
            "type": "link",
            "text": "Vérifier que vos conversions sont de vrais clients",
            "href": "/ressources/mesure/conversions-ga4-google-ads/"
          },
          {
            "type": "link",
            "text": "Mon travail de suivi des conversions (GA4 pour les statistiques, Google Tag Manager pour poser les balises de suivi)",
            "href": "/services/mesure-conversions/"
          }
        ]
      },
      {
        "id": "campagnes",
        "h2": "Quel type de campagne pour quel objectif",
        "blocks": [
          {
            "type": "p",
            "text": "Le bon type de campagne dépend de ce que vous vendez et de la qualité de votre suivi."
          },
          {
            "type": "table",
            "head": [
              "Type",
              "Quand je le propose"
            ],
            "rows": [
              [
                "Réseau de recherche (Search)",
                "Capter une demande qui existe déjà : « agence », « prix », « devis »"
              ],
              [
                "Performance Max",
                "Google diffuse vos annonces sur tous ses espaces : boutique en ligne ou flux produits, quand le suivi des ventes est fiable"
              ],
              [
                "Display et YouTube",
                "Se faire connaître, relancer les visiteurs"
              ],
              [
                "Shopping",
                "Catalogue produits relié à Google Merchant Center"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Google Ads ou Facebook Ads : lequel choisir",
            "href": "/ressources/google-ads/google-ads-ou-facebook-ads/"
          },
          {
            "type": "link",
            "text": "Mon travail sur Meta Ads",
            "href": "/services/meta-ads/"
          }
        ]
      },
      {
        "id": "budget",
        "h2": "Budget et enchères : comment je décide",
        "blocks": [
          {
            "type": "p",
            "text": "Le budget se calcule à l'envers. On part du nombre de demandes ou de ventes visé et du coût d'acquisition que votre marge accepte. On en déduit la dépense mensuelle, puis on vérifie qu'elle tient face au coût par clic de votre secteur."
          },
          {
            "type": "p",
            "text": "Avec les enchères automatiques (Smart Bidding), Google règle l'enchère à chaque recherche selon l'objectif choisi. Il lui faut des conversions fiables pour apprendre. Tant que le suivi ne l'est pas, je préfère des enchères plus simples, que je contrôle."
          },
          {
            "type": "p",
            "text": "Je n'impose ni budget minimum ni taille de site minimum : on démarre avec le budget dont vous disposez."
          },
          {
            "type": "link",
            "text": "Prix de Google Ads : budget et coût par clic",
            "href": "/ressources/google-ads/prix-google-ads/"
          }
        ]
      },
      {
        "id": "methode",
        "h2": "Ma méthode en cinq étapes",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Audit du compte",
                "text": "Structure, suivi, dépenses inutiles, termes de recherche. L'audit est payant et rendu en une semaine, par écrit."
              },
              {
                "title": "Correction du suivi",
                "text": "Appels, formulaires et rendez-vous comptés une seule fois, au bon endroit."
              },
              {
                "title": "Restructuration",
                "text": "Campagnes regroupées par objectif, mots-clés négatifs, budgets déplacés vers ce qui convertit."
              },
              {
                "title": "Annonces",
                "text": "Nouvelles variantes testées par angle, pages de destination alignées avec l'annonce."
              },
              {
                "title": "Pilotage",
                "text": "Arbitrages réguliers et point chiffré, avec la décision prise et la raison."
              }
            ]
          },
          {
            "type": "link",
            "text": "Pourquoi votre Google Ads dépense sans convertir",
            "href": "/ressources/google-ads/zero-conversion/"
          }
        ]
      },
      {
        "id": "tarifs",
        "usp": "U7",
        "h2": "Tarifs",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix (hors taxes)"
            ],
            "rows": [
              [
                "Audit de compte",
                "Où part le budget, quoi corriger d'abord. Rendu en une semaine",
                "950 à 1 500 $ (Diagnostic éclair)"
              ],
              [
                "Gestion mensuelle",
                "Pilotage continu des campagnes, engagement minimum de 3 mois",
                "797 à 997 $ par mois, forfait fixe (Essentiel)"
              ],
              [
                "Mission ponctuelle",
                "Refonte de compte, intervention sur un point précis",
                "Sur devis"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Nous ne prenons aucun pourcentage sur votre budget publicitaire : notre forfait ne change pas si vous dépensez davantage. Le règlement se fait par virement bancaire, en dollars canadiens."
          },
          {
            "type": "link",
            "text": "Comprendre le prix de Google Ads",
            "href": "/ressources/google-ads/prix-google-ads/"
          }
        ]
      },
      {
        "id": "tunisie-marche",
        "h2": "Vos clients sont partout au Québec ?",
        "blocks": [
          {
            "type": "p",
            "text": "Les recherches se tapent en français, en arabe ou en mélange des deux. Je construis les listes de mots-clés dans les deux langues, et les annonces suivent la langue de la recherche. J'ai aussi mis en place le suivi des appels et de WhatsApp chez des clients, utile quand vos clients vous contactent ainsi."
          },
          {
            "type": "link",
            "text": "Consultant Google Ads au Québec",
            "href": "/tunisie/google-ads/"
          }
        ]
      },
      {
        "id": "freelance-agence",
        "h2": "Consultant freelance ou agence",
        "blocks": [
          {
            "type": "p",
            "text": "Freelance ou agence, le bon choix dépend de votre situation. Posez ces questions à moi comme à une agence."
          },
          {
            "type": "table",
            "head": [
              "Question à poser",
              "Consultant freelance",
              "Agence"
            ],
            "rows": [
              [
                "Qui optimise votre compte ?",
                "Moi, la personne que vous avez rencontrée",
                "À demander : une équipe, avec parfois un chef de projet entre vous et le compte"
              ],
              [
                "Plusieurs canaux en parallèle",
                "Limités à une personne : je ne fais pas tout en même temps",
                "Équipes par canal possibles"
              ],
              [
                "Continuité en cas d'absence",
                "Point faible du modèle freelance : à discuter avant de signer",
                "Point fort habituel d'une équipe"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Freelance ou agence : comment choisir",
            "href": "/ressources/choisir/freelance-ou-agence-seo/"
          }
        ],
        "usp": "U3"
      }
    ],
    "faq": [
      {
        "q": "Quel est le tarif d'un consultant Google Ads ?",
        "a": "L'audit de compte est compris dans le Diagnostic éclair (950 $ à 1 500 $) et la gestion mensuelle coûte de 797 $ à 997 $ par mois en forfait fixe (Essentiel). Nous ne prenons aucun pourcentage sur le budget publicitaire. Le budget publicitaire lui-même, payé à Google, s'ajoute."
      },
      {
        "q": "Quel budget minimum pour démarrer ?",
        "a": "Je n'impose pas de budget minimum. On part du nombre de demandes visé et du coût que votre marge accepte, puis on vérifie face au coût par clic de votre secteur."
      },
      {
        "q": "Qui est propriétaire du compte Google Ads ?",
        "a": "Vous. Je travaille dans votre compte, avec les accès que vous me donnez, et vous gardez la main sur le compte et sur la carte de paiement."
      },
      {
        "q": "L'audit est-il payant ?",
        "a": "Oui : il est compris dans le Diagnostic éclair (950 $ à 1 500 $), rendu en une semaine, par écrit."
      },
      {
        "q": "Combien de temps avant de voir des résultats ?",
        "a": "Je ne peux pas vous donner de délai ferme. Les campagnes ont une phase d'apprentissage de quelques semaines, et on juge une tendance sur des données propres, pas sur quelques jours. Je vous montre les chiffres au fil du pilotage."
      },
      {
        "q": "Comment suivez-vous les appels, WhatsApp et les formulaires ?",
        "a": "Avec Google Tag Manager (qui pose les balises de suivi) et GA4 (qui compte les visites et les actions), et un rapprochement avec votre CRM quand vous en avez un. J'ai mis en place le suivi des appels et de WhatsApp chez des clients. Chaque demande doit être comptée une seule fois."
      },
      {
        "q": "Y a-t-il un engagement de durée ?",
        "a": "Pour la gestion mensuelle, l'engagement minimum est de 3 mois. L'audit est ponctuel."
      },
      {
        "q": "Intervenez-vous aussi sur Meta Ads ?",
        "a": "Oui, et sur le suivi des conversions. Les deux canaux se pilotent ensemble pour ne pas se disputer les mêmes demandes."
      }
    ],
    "cta": {
      "title": "Parlons de votre compte",
      "text": "Décrivez-moi votre situation. L'audit de compte est payant (compris dans le Diagnostic éclair, 950 $ à 1 500 $) et rendu en une semaine : il vous dit où part le budget et quoi corriger d'abord.",
      "label": "Demander un audit de compte"
    }
  },
  // ───────────────────────── S31 · Audit de compte Google Ads (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S31: {
    "answer": "Un audit de compte Google Ads montre où part votre budget : ce que le compte compte comme conversion, quelles recherches déclenchent vos annonces, où dépensent vos campagnes, Performance Max comprise. Nous le faisons en lecture seule, sans rien modifier dans votre compte. Il est payant, compris dans le Diagnostic éclair (950 $ à 1 500 $), et rendu en une semaine.",
    "sections": [
      {
        "id": "livrable",
        "h2": "Ce que vous recevez",
        "blocks": [
          {
            "type": "p",
            "text": "Un audit rendu en une semaine, avec une restitution en visio, aux heures françaises si vous êtes en France."
          },
          {
            "type": "table",
            "head": [
              "Point",
              "Détail"
            ],
            "rows": [
              [
                "Prix",
                "950 à 1 500 $ (Diagnostic éclair)"
              ],
              [
                "Délai",
                "Rendu en 1 semaine"
              ],
              [
                "Accès au compte",
                "Lecture seule : je ne modifie rien"
              ],
              [
                "Restitution",
                "En visio"
              ],
              [
                "Document remis",
                "[À COMPLÉTER : format et contenu du document remis après l'audit]"
              ]
            ]
          }
        ]
      },
      {
        "id": "perimetre",
        "h2": "Ce que couvre l'audit",
        "blocks": [
          {
            "type": "p",
            "text": "L'audit couvre au moins quatre sujets."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Les conversions",
                "text": "Ce que le compte déclare comme conversion, et ce qui correspond à une vraie demande chez vous. Je regarde ce point en premier : si ce chiffre est faux, tout le reste l'est aussi."
              },
              {
                "title": "Les termes de recherche",
                "text": "Les recherches réelles qui ont déclenché vos annonces, y compris celles qui n'ont aucun rapport avec votre offre."
              },
              {
                "title": "Les recherches à exclure",
                "text": "Celles que le compte exclut déjà, et celles qu'il devrait exclure."
              },
              {
                "title": "Performance Max",
                "text": "Où ces campagnes automatisées de Google diffusent, et ce qu'elles déclarent comme résultat."
              }
            ]
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : liste complète des autres points de contrôle de l'audit (structure, enchères, annonces, pages d'arrivée), à confirmer par Majed]"
          }
        ]
      },
      {
        "id": "pas-de-conversion",
        "h2": "Pourquoi Google Ads ne convertit pas : trois chiffres à sortir avant l'audit",
        "blocks": [
          {
            "type": "p",
            "text": "Avant de chercher une cause, comparez ce que Google Ads déclare à ce qui arrive vraiment chez vous. Prenez trois chiffres sur la même période."
          },
          {
            "type": "list",
            "items": [
              "Ce que vous avez dépensé dans Google Ads.",
              "Le nombre de conversions que Google Ads déclare.",
              "Le nombre de vraies demandes reçues (appels, formulaires, messages), compté dans votre propre outil de suivi ou votre CRM, le fichier où vous gardez vos contacts."
            ]
          },
          {
            "type": "p",
            "text": "Divisez la dépense par le nombre de conversions déclarées, puis par le nombre de vraies demandes."
          },
          {
            "type": "link",
            "text": "Google Ads sans conversion : le guide",
            "href": "/ressources/google-ads/zero-conversion/"
          },
          {
            "type": "link",
            "text": "Vérifier et fiabiliser le suivi des conversions",
            "href": "/services/mesure-conversions/"
          }
        ]
      },
      {
        "id": "audit-ou-accompagnement",
        "h2": "Audit seul ou accompagnement mensuel",
        "blocks": [
          {
            "type": "p",
            "text": "L'audit est une photo du compte à un moment donné. Si vous voulez ensuite que nous pilotions le compte, la gestion Google Ads se fait au forfait fixe de 797 $ à 997 $ par mois (Essentiel), sans pourcentage sur votre budget publicitaire. L'engagement minimum de 3 mois ne concerne que les accompagnements mensuels, pas l'audit."
          },
          {
            "type": "link",
            "text": "Voir la gestion Google Ads",
            "href": "/services/google-ads/"
          }
        ]
      },
      {
        "id": "pour-qui",
        "h2": "Pour qui est cet audit",
        "blocks": [
          {
            "type": "p",
            "text": "Pour une entreprise qui a déjà un compte Google Ads et doute de ce qu'il rapporte. Il n'y a ni budget minimum ni taille de site minimum. Sans compte existant, il n'y a rien à auditer : la gestion Google Ads est alors le bon point de départ."
          },
          {
            "type": "link",
            "text": "Voir comment je pilote un compte",
            "href": "/services/google-ads/"
          }
        ]
      },
      {
        "id": "prix",
        "h2": "Combien coûte un audit Google Ads",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Élément",
              "Détail"
            ],
            "rows": [
              [
                "Audit de compte Google Ads",
                "950 à 1 500 $ (Diagnostic éclair)"
              ],
              [
                "Taxes",
                "Prix affichés en dollars canadiens, avant taxes"
              ],
              [
                "Devise",
                "Prix affichés en dollars canadiens"
              ],
              [
                "Paiement",
                "Virement bancaire"
              ]
            ]
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          }
        ]
      },
      {
        "id": "tunisie",
        "h2": "Faire auditer son compte Google Ads par une agence au Québec",
        "blocks": [
          {
            "type": "p",
            "text": "Un accès en lecture suffit : nous auditons votre compte depuis le Québec sans rien modifier, et la restitution se fait en visio à vos heures de bureau."
          },
          {
            "type": "link",
            "text": "Google Ads au Québec",
            "href": "/tunisie/google-ads/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Votre audit Google Ads est-il gratuit ?",
        "a": "Non. Il est compris dans le Diagnostic éclair (950 $ à 1 500 $) et il est rendu en une semaine."
      },
      {
        "q": "Quels accès dois-je vous donner ?",
        "a": "Un accès en lecture au compte Google Ads suffit. Je ne modifie rien dans le compte."
      },
      {
        "q": "Combien de temps prend un audit Google Ads ?",
        "a": "Une semaine."
      },
      {
        "q": "Que contient le rendu de l'audit ?",
        "a": "Une restitution en visio. [À COMPLÉTER : format et contenu du document remis]"
      },
      {
        "q": "Un audit Google Ads, est-ce la même chose qu'un audit SEO ?",
        "a": "Non. L'audit Google Ads porte sur la publicité payante (SEA). L'audit SEO, qui porte sur le référencement naturel, est un autre service, lui aussi compris dans le Diagnostic éclair (950 $ à 1 500 $)."
      },
      {
        "q": "Y a-t-il un budget minimum pour demander un audit ?",
        "a": "Non. Il n'y a ni budget publicitaire minimum ni taille de site minimum. Il faut un compte Google Ads existant."
      },
      {
        "q": "Faut-il s'engager pour plusieurs mois ?",
        "a": "Pas pour l'audit. L'engagement minimum de 3 mois ne concerne que les accompagnements mensuels."
      }
    ],
    "cta": {
      "title": "Faire auditer votre compte Google Ads",
      "text": "Décrivez-moi votre compte et ce que vous en attendez.",
      "label": "Demander un audit"
    }
  },
  // ───────────────────────── S40 · Meta Ads (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S40: {
    "answer": "Un consultant Meta Ads gère vos publicités sur Facebook et Instagram : il choisit à qui les montrer, ce qu'elles disent, et vérifie que les demandes reçues sont de vrais prospects. Notre agence travaille depuis Scott (Québec), pour des PME de tout le Québec. Tarifs en dollars canadiens : gestion mensuelle de 797 $ à 997 $ par mois au forfait fixe (Essentiel), sans pourcentage sur votre budget publicitaire.",
    "sections": [
      {
        "id": "canaux",
        "usp": "U3",
        "h2": "Meta Ads ou Google Ads : ce que chaque canal fait pour vous",
        "blocks": [
          {
            "type": "p",
            "text": "Google capte une demande qui existe déjà : la personne tape ce qu'elle cherche. Meta crée la demande : votre annonce apparaît dans le fil de quelqu'un qui n'y pensait pas encore. Les deux ne se remplacent pas."
          },
          {
            "type": "table",
            "head": [
              "",
              "Google Ads",
              "Meta Ads (Facebook et Instagram)"
            ],
            "rows": [
              [
                "Point de départ",
                "Une recherche tapée par la personne",
                "Une personne qui fait défiler son fil"
              ],
              [
                "Ce qu'il faut soigner en premier",
                "Les mots-clés et la page de destination",
                "L'image, le message et les données renvoyées à Meta"
              ],
              [
                "Question à se poser",
                "Les gens cherchent-ils déjà mon service ?",
                "Dois-je faire connaître mon offre, ou relancer des visiteurs ?"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Ce sont des repères généraux sur les deux plateformes, pas des mesures. Je pilote Google Ads et Meta Ads. Si Google suffit à votre besoin, je vous le dis plutôt que d'ouvrir un second canal."
          },
          {
            "type": "link",
            "text": "Google Ads ou Facebook Ads : comment choisir",
            "href": "/ressources/google-ads/google-ads-ou-facebook-ads/"
          },
          {
            "type": "link",
            "text": "Mon service Google Ads",
            "href": "/services/google-ads/"
          }
        ]
      },
      {
        "id": "methode",
        "usp": "U1",
        "h2": "Ma façon de travailler : mesurer avant de dépenser",
        "blocks": [
          {
            "type": "p",
            "text": "Ma règle est la même pour tous les canaux : je mesure avant de dépenser. Avant de changer une audience ou une annonce, je veux savoir ce que le compte compte comme un résultat, et si ce résultat est un vrai client."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Audit payant, rendu en une semaine",
                "text": "Un état des lieux du compte publicitaire. Il répond à des questions simples : que compte Meta comme résultat ? D'où viennent les demandes ? Lesquelles deviennent des clients ?"
              },
              {
                "title": "Mesure",
                "text": "C'est la méthode que j'ai éprouvée sur Google Ads, appliquée à Meta : chaque demande doit être comptée une fois, au bon endroit (formulaire, appel, message WhatsApp)."
              },
              {
                "title": "Pilotage",
                "text": "Le critère est le coût d'une demande utile, pas celui d'un clic."
              },
              {
                "title": "Transfert",
                "text": "Le compte publicitaire reste à votre nom. Je vous explique ce que je fais, pour que vous puissiez reprendre la main si vous le décidez."
              }
            ]
          },
          {
            "type": "p",
            "text": "Le détail dépend de votre compte, et se fixe avec vous après l'audit."
          },
          {
            "type": "link",
            "text": "Voir ma méthode",
            "href": "/methode/"
          }
        ]
      },
      {
        "id": "mesure",
        "h2": "Mesurer des leads qualifiés : Pixel, API Conversions et WhatsApp",
        "blocks": [
          {
            "type": "p",
            "text": "Selon les repères généraux de la plateforme, un lead est une demande laissée par un prospect : un formulaire, un appel, un message. Un lead qualifié correspond à un client possible. Meta ne fait pas la différence tout seul : il optimise sur ce qu'on lui signale."
          },
          {
            "type": "p",
            "text": "Le Pixel Meta est un petit code installé sur votre site. Il signale à Meta qu'un visiteur a rempli un formulaire. L'API Conversions envoie la même information depuis votre serveur. Si ces signaux sont faux ou incomplets, la plateforme apprend à partir de mauvaises données."
          },
          {
            "type": "p",
            "text": "Sur Google Ads, j'ai vu l'écart que cela peut créer. Un suivi qui compte comme demandes des appels ou des clics sans suite fausse le coût par lead. C'est pourquoi je vérifie le comptage avant de toucher aux campagnes."
          },
          {
            "type": "p",
            "text": "Deux mots utiles. Le CRM est l'outil où vous notez vos contacts et vos ventes. Le consentement est l'accord que le visiteur donne ou refuse dans le bandeau des cookies : il limite ce que le Pixel peut enregistrer. La même méthode s'applique à Meta, que vous ayez un CRM ou un simple tableur de demandes."
          },
          {
            "type": "p",
            "text": "J'ai aussi mis en place le suivi des appels et de WhatsApp chez des clients. Si vos prospects vous écrivent plutôt que de remplir un formulaire, ce suivi compte autant que le Pixel."
          },
          {
            "type": "link",
            "text": "Mon service de suivi des conversions",
            "href": "/services/mesure-conversions/"
          }
        ]
      },
      {
        "id": "lead-ads",
        "h2": "Lead Ads, page de destination ou WhatsApp : choisir où arrive la demande",
        "blocks": [
          {
            "type": "p",
            "text": "Il y a trois façons courantes de recueillir une demande avec Meta. Chacune a un avantage et un coût. Aucune ne l'emporte à tous les coups."
          },
          {
            "type": "table",
            "head": [
              "Format",
              "Comment ça marche",
              "À vérifier avant de choisir"
            ],
            "rows": [
              [
                "Lead Ad",
                "Un formulaire s'ouvre dans Facebook ou Instagram, sans quitter l'application",
                "Les demandes sont-elles assez sérieuses pour que votre équipe les rappelle ?"
              ],
              [
                "Page de destination",
                "La personne arrive sur une page de votre site et remplit le formulaire",
                "Votre page est-elle claire et rapide sur téléphone ?"
              ],
              [
                "WhatsApp",
                "La personne ouvre une conversation avec vous",
                "Quelqu'un peut-il répondre dans la journée ?"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le bon choix dépend de la façon dont vos clients vous contactent aujourd'hui, et de ce que votre équipe sait traiter. Un guide pas à pas explique comment envoyer les leads Meta sur WhatsApp."
          },
          {
            "type": "link",
            "text": "Envoyer les leads Meta sur WhatsApp en 5 minutes",
            "href": "/ressources/meta-ads/leads-meta-whatsapp/"
          }
        ]
      },
      {
        "id": "creas",
        "h2": "Annonces, ciblage et fatigue créative : ce qu'il faut surveiller",
        "blocks": [
          {
            "type": "p",
            "text": "Sur Meta, l'annonce fait une grande part du résultat. Les concurrents que j'ai relus le disent aussi : plusieurs insistent sur les créas et sur la qualité des données envoyées à la plateforme. Cela donne trois questions à poser à n'importe quel consultant, moi compris :"
          },
          {
            "type": "list",
            "items": [
              "Ciblage : à qui l'annonce est-elle montrée, et pourquoi ces personnes plutôt que d'autres ?",
              "Annonces : combien de messages différents sont testés, et comment décide-t-on lequel garder ?",
              "Fatigue créative : que se passe-t-il quand les mêmes visuels tournent depuis des semaines, et à quel moment les remplace-t-on ?"
            ]
          },
          {
            "type": "p",
            "text": "La rentabilité se juge à la fin sur vos propres chiffres : ce que le compte coûte, et ce que les demandes rapportent. Sur Google Ads, cet écart se lisait dans les chiffres du client, pas dans ceux affichés par la plateforme."
          },
          {
            "type": "p",
            "text": "Côté visuels, la question est simple : en avez-vous déjà, et qui peut en produire d'autres ?"
          }
        ]
      },
      {
        "id": "quand-attendre",
        "h2": "Quand Meta Ads ne passe pas en premier",
        "blocks": [
          {
            "type": "p",
            "text": "Je n'impose ni budget minimum ni taille d'entreprise. Mais certaines situations demandent d'abord autre chose :"
          },
          {
            "type": "list",
            "items": [
              "Personne ne peut répondre aux demandes dans la journée : une demande qui attend refroidit.",
              "Aucune annonce ni aucun visuel n'est disponible, et personne ne peut en produire.",
              "L'offre n'est pas claire : mieux vaut la préciser avant de payer pour la montrer.",
              "Vos clients cherchent déjà votre service sur Google : Google Ads peut passer en premier."
            ]
          },
          {
            "type": "p",
            "text": "On en discute au premier échange."
          }
        ]
      },
      {
        "id": "tarifs",
        "h2": "Tarifs",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix"
            ],
            "rows": [
              [
                "Gestion Meta Ads mensuelle",
                "Pilotage continu des campagnes",
                "797 à 997 $ par mois, forfait fixe (Essentiel)"
              ],
              [
                "Mise en place du suivi des conversions",
                "Mesure des formulaires, appels et messages",
                "Sur devis"
              ],
              [
                "Taux journalier",
                "Travail à la journée",
                "Sur devis"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Prix en dollars canadiens, avant taxes. Nous ne prenons aucun pourcentage sur votre budget publicitaire, et il n'y a pas de budget minimum. Le budget des annonces s'ajoute à notre gestion. L'accompagnement mensuel demande un engagement de 3 mois. L'audit est payant et rendu en une semaine. Paiement par virement bancaire."
          },
          {
            "type": "p",
            "text": "Ces prix valent aussi pour Facebook Ads : c'est le même travail sur le même compte."
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          }
        ]
      },
      {
        "id": "preuve",
        "usp": "U1",
        "h2": "Ma preuve de méthode",
        "blocks": [
          {
            "type": "p",
            "text": "Je n'ai pas encore publié d'étude de cas Meta Ads. Ce que je peux montrer, c'est la même méthode de mesure appliquée à Google Ads, et je ne mets pas ces chiffres au compte de Meta."
          },
          {
            "type": "p",
            "text": "Le même compte perdait aussi de l'argent le week-end : 16 % du budget pour 10 % des conversions, avec 16 appels en 30 jours dont un seul qualifié. Limites : juillet est un creux saisonnier (vacances de la construction), ce qui flatte la comparaison août/juillet, et les contrats viennent de tous les canaux du client, pas seulement de Google Ads. L'étude de cas détaille ces limites."
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : étude de cas Meta Ads publiable, avec accord du client, période et source des chiffres.]"
          }
        ]
      },
      {
        "id": "tunisie",
        "h2": "Depuis le Québec, pour des PME du Québec",
        "blocks": [
          {
            "type": "p",
            "text": "Sponsoring Facebook ou campagnes de génération de prospects : nous pilotons les deux depuis Scott, au Québec, avec la même mesure des prospects qualifiés."
          },
          {
            "type": "link",
            "text": "Campagnes Facebook au Québec",
            "href": "/tunisie/sponsoring-facebook/"
          }
        ]
      },
      {
        "id": "formation",
        "h2": "Vous préférez gérer vous-même ?",
        "blocks": [
          {
            "type": "p",
            "text": "Je propose aussi une formation Meta Ads orientée génération de leads, d'une journée."
          },
          {
            "type": "link",
            "text": "Formation Meta Ads lead gen",
            "href": "/formations/meta-ads/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Quelle est la différence entre Facebook Ads et Meta Ads ?",
        "a": "Aucune sur le fond. Meta est le nom du groupe qui possède Facebook et Instagram, et une même campagne peut s'afficher sur les deux. J'emploie les deux appellations parce que les gens cherchent avec l'une ou l'autre."
      },
      {
        "q": "Combien coûte un consultant Meta Ads ?",
        "a": "La gestion mensuelle coûte de 797 $ à 997 $ par mois au forfait fixe (Essentiel). Nous ne prenons aucun pourcentage sur votre budget publicitaire. Le budget des annonces s'ajoute à ce forfait."
      },
      {
        "q": "Faut-il un budget minimum ?",
        "a": "Non, je n'en impose pas. Nous fixons ensemble le budget qui a du sens pour votre offre et votre équipe."
      },
      {
        "q": "Le compte publicitaire est-il à mon nom ?",
        "a": "Oui. Le compte reste à votre nom, et je vous explique ce que je fais pour que vous puissiez reprendre la main."
      },
      {
        "q": "Combien de temps dure l'engagement ?",
        "a": "Trois mois minimum pour les accompagnements mensuels. L'audit est payant et rendu en une semaine."
      },
      {
        "q": "Pouvez-vous envoyer mes leads sur WhatsApp ?",
        "a": "Oui, c'est possible. J'ai mis en place le suivi des appels et de WhatsApp chez des clients. Un guide détaille la méthode pas à pas."
      },
      {
        "q": "Qu'est-ce qu'un lead qualifié ?",
        "a": "Un lead est une demande laissée par un prospect : formulaire, appel ou message. Il est qualifié s'il correspond à un client possible pour vous. C'est vous qui définissez ce critère, je m'occupe de le mesurer."
      },
      {
        "q": "Travaillez-vous avec des PME de tout le Québec ?",
        "a": "Oui. Nous travaillons depuis Scott, au Québec, pour des PME de tout le Québec."
      },
      {
        "q": "Promettez-vous un nombre de leads ou un coût par lead ?",
        "a": "Non. Je ne promets pas de résultat chiffré. Cette page décrit ce que je fais, pas ce que vous obtiendrez."
      }
    ],
    "cta": {
      "title": "Parlons de vos campagnes Meta",
      "text": "Un diagnostic de 30 minutes pour voir si Meta Ads est le bon canal pour vous, et par où commencer.",
      "label": "Réserver un diagnostic"
    }
  },
  // ───────────────────────── S50 · Mesure des conversions (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S50: {
    "answer": "Le suivi des conversions mesure ce que vos visiteurs font sur votre site (appel, formulaire, achat, rendez-vous) et le transmet à GA4, Google Ads et Meta. Le tracking server side envoie ces mesures depuis un serveur au lieu du navigateur. Il change le chemin des données vers chaque outil, et il ajoute un serveur à héberger. Nous mettons en place le suivi des conversions depuis Scott (Québec), pour des PME de tout le Québec. Tarif : sur devis.",
    "sections": [
      {
        "id": "definition",
        "h2": "Le tracking server side en clair",
        "blocks": [
          {
            "type": "p",
            "text": "Avec un suivi classique (client side), le navigateur du visiteur envoie lui-même les données à Google, à Meta et aux autres outils. Avec le server side, le navigateur envoie les données à un serveur, et c'est ce serveur qui les transmet aux outils. Ce serveur est en général un conteneur Google Tag Manager serveur, souvent placé sur un sous-domaine de votre site, ce qui en fait un suivi first-party (les données passent par votre propre domaine)."
          },
          {
            "type": "table",
            "head": [
              "",
              "Suivi classique (client side)",
              "Server side"
            ],
            "rows": [
              [
                "Qui envoie les données aux outils",
                "Le navigateur du visiteur",
                "Votre serveur de suivi"
              ],
              [
                "Bloqueurs de publicité, cookies tiers, limites de Safari (ITP)",
                "Les envois partent du navigateur, donc ils y sont exposés",
                "Les envois partent de votre domaine ; l'exposition change, elle ne disparaît pas"
              ],
              [
                "Contrôle de ce qui part vers chaque outil",
                "Limité",
                "Possible : vous filtrez avant l'envoi"
              ],
              [
                "Coût",
                "Aucun serveur à héberger",
                "Un serveur à héberger, en plus de la mise en place"
              ],
              [
                "Complexité",
                "Plus simple",
                "Plus de pièces à configurer et à vérifier"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Le server side ne remplace pas le consentement : le choix du visiteur compte dans les deux cas. Il ne règle pas non plus une conversion mal définie, et il ne garantit aucun gain de données."
          }
        ]
      },
      {
        "id": "faut-il",
        "h2": "Faut-il passer au server side ? Quand oui, quand non",
        "blocks": [
          {
            "type": "p",
            "text": "Non, pas toujours. Dans les titres des pages d'agences que j'ai relues pour préparer celle-ci, je n'ai pas vu traité le cas où l'on peut s'en passer."
          },
          {
            "type": "table",
            "head": [
              "Votre situation",
              "Ma lecture"
            ],
            "rows": [
              [
                "Vous dépensez peu en publicité et vos conversions sont déjà correctes",
                "Un suivi classique bien réglé suffit. Le server side peut attendre."
              ],
              [
                "Vos conversions comptées par Google Ads ne correspondent pas à vos demandes réelles",
                "Le problème est la définition de la conversion, pas le serveur. Je corrige cela d'abord."
              ],
              [
                "Vous voyez un écart marqué entre vos ventes réelles et ce que Meta ou Google Ads déclarent",
                "Le server side, avec l'API Conversions pour Meta, peut aider. Je le vérifie avant de le proposer."
              ],
              [
                "Vous voulez décider vous-même des données qui partent vers chaque outil",
                "Le server side est adapté à ce besoin."
              ]
            ]
          }
        ]
      },
      {
        "id": "mise-en-place",
        "h2": "Ce que je mets en place",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Élément",
              "À quoi il sert",
              "Ce que vous recevez"
            ],
            "rows": [
              [
                "GA4",
                "Mesurer les visites et les actions importantes",
                "Les événements clés, définis avec vous"
              ],
              [
                "Google Tag Manager (web, et serveur si utile)",
                "Déclencher les mesures sans retoucher le code à chaque changement",
                "Le conteneur configuré"
              ],
              [
                "Conversions Google Ads (dont conversions améliorées)",
                "Dire à Google Ads quelles actions comptent",
                "Des conversions définies à partir de vos demandes réelles"
              ],
              [
                "API Conversions Meta",
                "Envoyer à Meta, depuis le serveur, des actions réalisées sur votre site",
                "Un envoi à coordonner avec le Pixel pour éviter les doublons"
              ],
              [
                "Consent Mode (V2)",
                "Adapter les balises Google au choix du visiteur",
                "Un réglage à relier à votre bandeau de consentement"
              ],
              [
                "Suivi des appels et de WhatsApp",
                "Compter les contacts qui ne passent pas par un formulaire",
                "Appels et clics WhatsApp comptés avec le reste"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Outils que j'utilise : GA4, Google Tag Manager, Shopify, Klaviyo. [À COMPLÉTER : expérience réelle de Majed sur GTM serveur, API Conversions Meta et Consent Mode V2 (nombre de mises en place, exemple publiable), et solution d'hébergement du conteneur serveur utilisée (Stape, Cloud Run, autre).]"
          },
          {
            "type": "link",
            "text": "Voir mon travail sur Meta Ads",
            "href": "/services/meta-ads/"
          }
        ]
      },
      {
        "id": "vrais-clients",
        "usp": "U1",
        "h2": "Je vérifie d'abord que vos conversions sont de vrais clients",
        "blocks": [
          {
            "type": "p",
            "text": "Un suivi précis d'une mauvaise conversion donne un mauvais pilotage. Les pages d'agences que j'ai relues parlent surtout de collecter plus de données. Je commence par vérifier lesquelles comptent."
          },
          {
            "type": "p",
            "text": "Ce chiffre vient d'un compte Google Ads suivi par appels et formulaires. Il ne prouve pas ce que le server side apporte, et je ne vous promets aucun gain de données."
          },
          {
            "type": "link",
            "text": "Quand 68 % des « conversions » n'étaient pas des clients",
            "href": "/etudes-de-cas/conversions-faussees-google-ads/"
          },
          {
            "type": "link",
            "text": "Guide : vérifier que vos conversions sont de vrais clients",
            "href": "/ressources/mesure/conversions-ga4-google-ads/"
          }
        ]
      },
      {
        "id": "consentement",
        "h2": "Consent Mode et RGPD : ce que votre site doit faire",
        "blocks": [
          {
            "type": "p",
            "text": "Consent Mode est un mécanisme de Google. Il adapte le comportement des balises Google selon le choix de consentement du visiteur. Il demande un bandeau de consentement qui lui transmet ce choix. Le bandeau reste votre choix."
          },
          {
            "type": "list",
            "items": [
              "Le bandeau doit transmettre le choix du visiteur aux balises.",
              "Votre politique de confidentialité mentionne en général les outils de mesure utilisés.",
              "Ce sont des informations générales, pas un avis juridique : pour vos obligations exactes, rapprochez-vous de votre conseil juridique ou de la CNIL."
            ]
          },
          {
            "type": "link",
            "text": "Voir ma politique de confidentialité",
            "href": "/confidentialite/"
          }
        ]
      },
      {
        "id": "deroulement",
        "h2": "Comment se déroule une mise en place",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "État des lieux",
                "text": "Je regarde ce que votre site mesure aujourd'hui et ce que Google Ads, Meta et GA4 comptent comme conversion."
              },
              {
                "title": "Plan de mesure",
                "text": "Nous définissons ensemble les actions qui comptent : appel, formulaire, achat, rendez-vous."
              },
              {
                "title": "Hébergement et domaine",
                "text": "Si un conteneur serveur est utile, nous choisissons où l'héberger et sur quel sous-domaine le placer."
              },
              {
                "title": "Installation",
                "text": "J'installe et je configure les balises."
              },
              {
                "title": "Tests et validation",
                "text": "Je teste chaque événement et je compare les chiffres avec vos demandes réelles."
              },
              {
                "title": "Remise",
                "text": "Je vous explique ce qui est en place. [À COMPLÉTER : format de remise (documentation écrite, vidéo) à confirmer par Majed.] Les comptes restent à votre nom."
              }
            ]
          }
        ]
      },
      {
        "id": "tarifs",
        "usp": "U7",
        "h2": "Combien coûte la mise en place du suivi",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Prestation",
              "Prix (hors taxes)"
            ],
            "rows": [
              [
                "Mise en place du suivi des conversions",
                "Sur devis"
              ],
              [
                "Audit du compte Google Ads",
                "950 à 1 500 $ (Diagnostic éclair)"
              ],
              [
                "Taux journalier, pour un besoin précis",
                "Sur devis"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Prix en dollars canadiens, sur devis. Paiement par virement. [À COMPLÉTER : ce qui fait varier le prix (nombre d'événements, conteneur serveur, boutique ou CRM), à confirmer par Majed.]"
          },
          {
            "type": "p",
            "text": "Un serveur de suivi s'héberge chez un hébergeur. [À COMPLÉTER : ordre de grandeur mensuel du coût d'hébergement d'un conteneur server side, à confirmer par Majed.]"
          },
          {
            "type": "link",
            "text": "Voir tous les tarifs",
            "href": "/tarifs/"
          },
          {
            "type": "link",
            "text": "Faire auditer d'abord votre compte Google Ads",
            "href": "/services/google-ads/audit-compte/"
          }
        ]
      },
      {
        "id": "tunisie",
        "h2": "Configurer le suivi des conversions à distance, depuis le Québec",
        "blocks": [
          {
            "type": "p",
            "text": "GA4, Google Tag Manager, Consent Mode et API Conversions se configurent à distance : nous les installons depuis le Québec, dans le respect des lois applicables à vos visiteurs."
          },
          {
            "type": "p",
            "text": "Il me faut des accès à votre site, à votre conteneur Google Tag Manager et à vos comptes publicitaires."
          },
          {
            "type": "link",
            "text": "Voir mon travail sur Google Ads",
            "href": "/services/google-ads/"
          },
          {
            "type": "link",
            "text": "Comment je travaille",
            "href": "/methode/"
          },
          {
            "type": "link",
            "text": "Me contacter",
            "href": "/contact/"
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Qu'est-ce que le tracking server side ?",
        "a": "C'est une façon de mesurer votre site où un serveur, et non le navigateur du visiteur, envoie les données à GA4, Google Ads ou Meta. Ce serveur est en général un conteneur Google Tag Manager serveur."
      },
      {
        "q": "Le tracking server side est-il obligatoire ?",
        "a": "Non. Pour beaucoup de sites, un suivi classique bien réglé suffit. Je vous dis franchement si le server side est utile dans votre cas."
      },
      {
        "q": "Quelle différence entre GTM web et GTM server side ?",
        "a": "GTM web tourne dans le navigateur du visiteur. GTM server side tourne sur un serveur : il reçoit les mesures, puis les transmet aux outils. Les deux peuvent coexister."
      },
      {
        "q": "Qu'est-ce que Consent Mode ?",
        "a": "Un mécanisme de Google qui adapte les balises Google au choix de consentement du visiteur. Il demande un bandeau de consentement qui lui transmet ce choix."
      },
      {
        "q": "À quoi sert l'API Conversions de Meta ?",
        "a": "Elle envoie à Meta, depuis le serveur, des actions réalisées sur votre site. Elle s'utilise avec le Pixel Meta, en évitant de compter deux fois la même action."
      },
      {
        "q": "Combien coûte la mise en place du suivi des conversions ?",
        "a": "Sur devis. Un serveur de suivi s'héberge en plus chez un hébergeur."
      },
      {
        "q": "Pouvez-vous suivre les appels et WhatsApp ?",
        "a": "Oui. J'ai mis en place le suivi des appels et de WhatsApp chez des clients."
      },
      {
        "q": "Promettez-vous plus de conversions ou de données récupérées ?",
        "a": "Non. Le suivi décrit ce qui se passe sur votre site. Il ne garantit aucun résultat, et je ne chiffre pas d'avance les données que vous récupérerez."
      },
      {
        "q": "Qui est propriétaire des comptes et des conteneurs ?",
        "a": "Vous. Je travaille avec les accès que vous me donnez."
      },
      {
        "q": "Travaillez-vous avec des entreprises de tout le Québec ?",
        "a": "Oui. Nous travaillons depuis Scott, au Québec, pour des PME de tout le Québec. La configuration se fait à distance."
      },
      {
        "q": "Qu'est-ce que le suivi first-party ?",
        "a": "Les données de mesure passent par votre propre domaine (par exemple un sous-domaine de votre site) avant d'aller vers les outils. Un conteneur server side le permet."
      }
    ],
    "cta": {
      "title": "Vérifions ce que votre site mesure vraiment",
      "text": "Décrivez-moi votre site et vos campagnes. Je vous dis si votre suivi est fiable et si le server side vous apporterait quelque chose.",
      "label": "Réserver un diagnostic"
    }
  },
  // ───────────────────────── S60 · Automatisation n8n (chaîne entités → écart → rédaction → humanizer/boileau, 14/10/2026) ─────────────────────────
  S60: {
    "answer": "Une agence n8n conçoit et met en place des workflows : des enchaînements automatiques entre vos outils (formulaires, CRM, Google Ads, WhatsApp, e-mail, IA). Nous les construisons pour le marketing : reporting, leads, suivi des appels et contenus. Nous travaillons depuis Scott (Québec). Tarif : sur devis, par workflow.",
    "sections": [
      {
        "id": "automatiser",
        "h2": "Ce que n8n peut automatiser pour votre marketing",
        "blocks": [
          {
            "type": "p",
            "text": "Un workflow n8n part d'un déclencheur (un formulaire envoyé, une heure du matin, un appel manqué), puis enchaîne des actions dans vos outils. Je l'applique au marketing, parce que c'est mon métier. Côté marketing, cela évite de recopier des chiffres à la main entre vos outils."
          },
          {
            "type": "table",
            "head": [
              "Cas d'usage",
              "Déclencheur",
              "Ce que fait le workflow"
            ],
            "rows": [
              [
                "Reporting Google Ads et Meta Ads",
                "Chaque lundi, par exemple",
                "Récupère les chiffres de la semaine, les met en forme dans un tableau (Looker Studio ou e-mail) et les envoie à l'équipe"
              ],
              [
                "Leads",
                "Un formulaire est envoyé",
                "Enregistre le contact dans le CRM, prévient la bonne personne, garde la source de la demande"
              ],
              [
                "Appels et WhatsApp",
                "Un appel ou un message arrive",
                "Note la demande avec sa source, pour la compter comme une vraie conversion"
              ],
              [
                "Contenus avec l'IA",
                "Un brief est validé",
                "Prépare un brouillon avec Claude ou OpenAI, que vous relisez avant publication"
              ],
              [
                "Alertes",
                "Un budget ou un suivi décroche",
                "Envoie un message dans Slack ou par e-mail"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Ce tableau décrit ce que n8n sait faire. Ce ne sont pas des projets déjà livrés : mes preuves publiées sont plus bas."
          },
          {
            "type": "link",
            "text": "Voir comment je mesure les conversions",
            "href": "/services/mesure-conversions/"
          }
        ]
      },
      {
        "id": "comparatif",
        "h2": "n8n, Zapier ou Make : lequel choisir",
        "blocks": [
          {
            "type": "p",
            "text": "Les trois outils font le même métier : relier des applications. Elles se distinguent par l'hébergement, le code et la prise en main."
          },
          {
            "type": "table",
            "head": [
              "Critère",
              "n8n",
              "Zapier ou Make"
            ],
            "rows": [
              [
                "Où tourne l'outil",
                "Dans le cloud de n8n, ou sur votre propre serveur",
                "Chez l'éditeur"
              ],
              [
                "Logique complexe",
                "Possible, avec des blocs de code dans le workflow",
                "Possible, mais plus limitée selon l'offre"
              ],
              [
                "Prise en main",
                "Demande un peu de technique",
                "Plus rapide pour un cas simple"
              ],
              [
                "Catalogue d'applications",
                "Large, avec des appels directs à n'importe quelle API",
                "Souvent plus large et plus simple à brancher"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Je ne recommande pas n8n à tout le monde. Si vous avez trois automatisations simples, déjà en place dans Zapier, et personne pour surveiller un serveur, rester où vous êtes est souvent la bonne décision."
          },
          {
            "type": "list",
            "items": [
              "n8n a du sens quand vos données doivent rester chez vous, ou quand la logique se complique.",
              "Zapier ou Make suffisent pour un cas simple que personne n'a besoin de maintenir.",
              "Un ERP lourd ou un volume extrême en temps réel ne relèvent pas de mon offre."
            ]
          }
        ]
      },
      {
        "id": "migration",
        "h2": "Migrer de Zapier ou Make vers n8n : cinq questions avant de décider",
        "blocks": [
          {
            "type": "p",
            "text": "Migrer prend du temps. Avant de déplacer quoi que ce soit, répondez à ces questions, seul ou avec moi."
          },
          {
            "type": "list",
            "items": [
              "Quelles automatisations tournent aujourd'hui, et lesquelles sont vraiment utilisées ?",
              "Lesquelles coûtent cher chez l'éditeur actuel, en nombre d'étapes ou d'exécutions ?",
              "Y a-t-il des données qui doivent rester chez vous ?",
              "Qui surveillera l'instance n8n une fois en place ?",
              "Peut-on migrer un workflow à la fois, en gardant l'ancien jusqu'à ce que le nouveau ait fait ses preuves ?"
            ]
          },
          {
            "type": "p",
            "text": "Si personne ne peut surveiller l'instance, restez sur l'outil actuel."
          }
        ]
      },
      {
        "id": "donnees",
        "h2": "Où tournent vos workflows et où restent vos données",
        "blocks": [
          {
            "type": "p",
            "text": "n8n peut être installé sur votre serveur ou sur votre instance. Vos données passent alors par votre infrastructure, et pas par celle d'un éditeur. Si vos règles l'exigent, l'instance peut être hébergée en Europe."
          },
          {
            "type": "p",
            "text": "Un serveur à vous veut dire de la responsabilité : voici ce qu'il demande. Je ne donne pas d'avis juridique sur le RGPD : pour cela, appuyez-vous sur votre responsable de la protection des données."
          },
          {
            "type": "list",
            "items": [
              "Des sauvegardes régulières, testées au moins une fois.",
              "Les mises à jour de n8n, qui demandent de vérifier que les workflows tournent encore.",
              "Des accès limités : qui peut modifier un workflow, qui peut lire les identifiants des outils.",
              "Une alerte si un workflow échoue, pour ne pas le découvrir trois semaines plus tard."
            ]
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : Majed, comment gérez-vous les sauvegardes et les mises à jour après la livraison (inclus, mensuel, à la journée) ?]"
          }
        ]
      },
      {
        "id": "methode",
        "usp": "U1",
        "h2": "Comment je travaille",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Cadrage",
                "text": "Vous me décrivez la tâche répétitive et les outils concernés."
              },
              {
                "title": "Mesure",
                "text": "Je vérifie d'abord que les données de départ sont justes. Un workflow qui envoie de mauvaises données les envoie plus vite."
              },
              {
                "title": "Construction",
                "text": "Je construis le workflow."
              },
              {
                "title": "Remise",
                "text": "[À COMPLÉTER : Majed, que remettez-vous à la livraison (documentation, accès à l'instance, formation de l'équipe) ?]"
              }
            ]
          },
          {
            "type": "p",
            "text": "[À COMPLÉTER : Majed, proposez-vous un audit des processus avant un projet n8n (payant, prix, délai, rendu) ? Sinon, remplacer par un échange de cadrage.]"
          }
        ]
      },
      {
        "id": "tarifs",
        "h2": "Tarifs",
        "blocks": [
          {
            "type": "table",
            "head": [
              "Formule",
              "Pour quoi",
              "Prix"
            ],
            "rows": [
              [
                "Workflow n8n",
                "Un workflow, de la conception à la remise",
                "Sur devis par workflow"
              ],
              [
                "Mission à la journée",
                "Taux journalier, hors workflow",
                "Sur devis"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Prix hors taxes. Il n'y a pas de budget minimum. Le paiement se fait par virement bancaire."
          },
          {
            "type": "p",
            "text": "La facturation se fait en dollars canadiens, avant taxes. Paiement par virement."
          },
          {
            "type": "p",
            "text": "Le prix dépend de ce que le workflow touche : nombre d'outils, volume de données, cas particuliers. Je le chiffre après avoir compris le besoin."
          }
        ]
      },
      {
        "id": "preuves",
        "usp": "U1",
        "h2": "Mon expérience et mes preuves",
        "blocks": [
          {
            "type": "p",
            "text": "Mes outils : Google Analytics 4, Google Tag Manager, Shopify, Klaviyo, Zapier, n8n, Semrush et Screaming Frog. J'ai mis en place du suivi des appels et de WhatsApp chez des clients, ce qui est la base d'un reporting de leads fiable."
          },
          {
            "type": "p",
            "text": "Avant de construire un reporting, je vérifie le suivi : si les appels, les formulaires et WhatsApp ne sont pas comptés correctement, le tableau de bord sera faux, quel que soit l'outil qui l'alimente. Les outils comme HubSpot ou Salesforce se branchent via leur API, à vérifier au cadrage."
          },
          {
            "type": "p",
            "text": "Je n'ai pas encore publié d'étude de cas consacrée à un workflow n8n. [À COMPLÉTER : Majed, quel projet n8n pouvez-vous publier (client autorisé, ce qui a été automatisé, période, ce que cela a changé) ?]"
          },
          {
            "type": "p",
            "text": "Ce que je peux montrer dès aujourd'hui, c'est ma façon de vérifier les chiffres. Je publie la période, la source et la limite de chaque résultat."
          },
        ]
      },
      {
        "id": "pour-qui",
        "h2": "Pour qui, et pour qui ce n'est pas",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Fait pour : une équipe marketing ou une PME qui refait chaque semaine à la main un rapport, un export ou une saisie.",
              "Fait pour : une startup ou un freelance qui veut brancher ses outils sans recruter un développeur.",
              "Moins adapté : un projet d'ERP complet, une application métier ou un volume extrême en temps réel.",
              "Moins adapté : un projet qui demande plusieurs développeurs à temps plein."
            ]
          },
          {
            "type": "p",
            "text": "Si vous voulez apprendre à le faire vous-même, la formation vous servira plus qu'une prestation."
          },
          {
            "type": "link",
            "text": "Voir la formation n8n",
            "href": "/formations/n8n/"
          }
        ]
      },
      {
        "id": "services",
        "h2": "Un seul interlocuteur pour l'automatisation et le marketing",
        "blocks": [
          {
            "type": "p",
            "text": "Une automatisation sert rarement seule : elle nourrit un reporting, un suivi de leads ou une campagne. Comme je pilote aussi le SEO, Google Ads, Meta Ads et la mesure des conversions, vous n'avez pas à coordonner plusieurs prestataires."
          },
          {
            "type": "link",
            "text": "Voir tous mes services",
            "href": "/services/"
          },
          {
            "type": "link",
            "text": "Qui je suis et d'où je travaille",
            "href": "/a-propos/"
          }
        ],
        "usp": "U3"
      }
    ],
    "faq": [
      {
        "q": "Combien coûte une automatisation n8n ?",
        "a": "Sur devis, par workflow. Le prix dépend du nombre d'outils reliés, du volume de données et des cas particuliers."
      },
      {
        "q": "Quelle différence entre n8n et Zapier ou Make ?",
        "a": "Les trois relient des applications. n8n peut tourner sur votre serveur et accepte du code dans les workflows. Zapier et Make sont hébergés chez l'éditeur et plus rapides à prendre en main pour un cas simple."
      },
      {
        "q": "n8n est-il adapté à mon entreprise ?",
        "a": "Si vous avez quelques automatisations simples et personne pour surveiller un serveur, Zapier ou Make suffisent souvent. Si vos données doivent rester chez vous ou si la logique se complique, n8n devient intéressant. Je vous le dis au premier échange."
      },
      {
        "q": "Mes données restent-elles chez moi ?",
        "a": "Avec une instance sur votre serveur, vos données passent par votre infrastructure. Elle peut être hébergée en Europe si vos règles l'exigent. Je ne donne pas d'avis juridique : demandez-le à votre responsable de la protection des données."
      },
      {
        "q": "Pouvez-vous migrer mes automatisations depuis Zapier ou Make ?",
        "a": "On regarde d'abord ce qui vaut la peine d'être déplacé, avec les cinq questions de la section sur la migration. [À CONFIRMER : migration proposée, et tarifée comme un workflow ou à la journée ?]"
      },
      {
        "q": "Combien de temps faut-il pour automatiser un processus ?",
        "a": "Cela dépend du nombre d'outils reliés et de la qualité de leurs connexions. Je donne un délai après avoir compris le besoin, pas avant."
      },
      {
        "q": "Un workflow n8n est-il sécurisé ?",
        "a": "La sécurité dépend surtout de l'installation : accès limités, identifiants protégés, mises à jour, sauvegardes. Sur un serveur à vous, ces points se règlent avant la mise en place."
      },
      {
        "q": "Que se passe-t-il quand un workflow tombe en panne ?",
        "a": "Un workflow peut échouer quand un outil change ou qu'un identifiant expire. Une alerte en cas d'échec permet de le savoir tout de suite. Ce point se règle avant la mise en place."
      },
      {
        "q": "n8n peut-il remplacer mon ERP ou créer un chatbot ?",
        "a": "Non, ce n'est pas l'objet de mon offre. n8n relie des outils et enchaîne des tâches. Un ERP complet ou un chatbot relèvent d'un autre projet."
      },
      {
        "q": "Faut-il un serveur pour utiliser n8n ?",
        "a": "Non. n8n propose une version hébergée par n8n. Un serveur à vous est un choix : il apporte la maîtrise des données et demande des mises à jour et des sauvegardes."
      },
      {
        "q": "Travaillez-vous avec des PME de tout le Québec ?",
        "a": "Oui. Nous travaillons depuis Scott, au Québec, pour des PME de tout le Québec."
      },
      {
        "q": "Pouvez-vous former mon équipe à n8n ?",
        "a": "Oui, c'est une formation à part, avec sa propre page. Vous y construisez vos propres workflows."
      }
    ],
    "cta": {
      "title": "Parlons de votre première automatisation",
      "text": "Décrivez-moi la tâche que vous refaites à la main. Je vous dis si n8n est le bon outil.",
      "label": "Décrire mon projet"
    }
  },
  // ───────────────────────── F02 · Formation SEO ─────────────────────────
  F02: {
    answer:
      "Formation SEO animée par Majed Ayari : apprendre à auditer un site, structurer ses pages, rédiger pour les entités attendues par Google et suivre les résultats dans Search Console. Format : 10 heures en ligne, en groupe de 3 personnes maximum. Prix : sur devis.",
    sections: [
      {
        id: "pour-qui",
        h2: "À qui s'adresse cette formation",
        blocks: [
          {
            type: "list",
            items: [
              "Responsables marketing et chargés de communication qui gèrent un site.",
              "Freelances et consultants qui veulent structurer leur méthode.",
              "Dirigeants de PME qui veulent comprendre ce que leur prestataire leur vend.",
            ],
          },
          { type: "p", text: "Aucun prérequis technique. Il faut un site à analyser (le vôtre ou un site d'exercice) et un ordinateur portable." },
        ],
      },
      {
        id: "objectifs",
        h2: "Ce que vous saurez faire à la fin",
        blocks: [
          {
            type: "list",
            items: [
              "Auditer un site avec Screaming Frog et la Search Console.",
              "Choisir une requête principale par page et éviter que deux pages se concurrencent.",
              "Construire un brief de rédaction à partir des entités attendues par Google.",
              "Planifier le maillage interne et repérer des sources de liens.",
              "Suivre vos positions, vos clics et vos demandes dans un tableau de bord simple.",
              "Préparer vos pages pour qu'elles soient citées par ChatGPT, Gemini et Perplexity.",
            ],
          },
        ],
      },
      {
        id: "programme",
        usp: "U4",
        h2: "Programme",
        blocks: [
          { type: "p", text: "Programme de 10 heures en ligne, en 8 modules." },
          {
            type: "table",
            head: ["Module", "Contenu", "Exercice"],
            rows: [
              ["1. Comprendre Google", "Comment un moteur trouve, classe et affiche une page", "Lire la page de résultats d'une requête de votre secteur"],
              ["2. Audit technique", "Indexation, erreurs, vitesse, redirections", "Crawl d'un site avec Screaming Frog"],
              ["3. Mots-clés et intentions", "Requêtes, volumes, intention de recherche", "Choisir la requête principale de 5 pages"],
              ["4. Contenu et entités", "Entités attendues, structure Hn, brief de rédaction", "Écrire un brief à partir d'un rapport d'entités"],
              ["5. Structure et maillage", "Silos, liens internes, cannibalisation", "Dessiner l'arborescence cible de votre site"],
              ["6. Liens (netlinking)", "Sources, qualité, risques", "Repérer 10 sources de liens"],
              ["7. SEO et IA (GEO)", "Être cité par ChatGPT, Gemini, Perplexity", "Tester 10 questions sur votre marque"],
              ["8. Mesure et suivi", "Search Console, GA4, tableau de bord", "Monter votre tableau de bord"],
            ],
          },
        ],
      },
      {
        id: "format",
        h2: "Format, groupe et lieu",
        blocks: [
          {
            type: "list",
            items: [
              "Durée : 10 heures de formation.",
              "Lieu : en ligne.",
              "Taille du groupe : 3 personnes maximum.",
              "Support remis : supports de formation, modèles de brief et de tableau de bord.",
            ],
          },
          { type: "link", text: "Voir les prochaines dates", href: "/formations/calendrier/" },
        ],
      },
      {
        id: "anime-par",
        usp: "U3",
        h2: "Qui anime",
        blocks: [
          { type: "p", text: "Majed Ayari, consultant SEO et Google Ads. Intervenant au SEO CAMP Day de Lille (2019), co-auteur d'un livre blanc sur le netlinking. Je fais du SEO pour des clients chaque semaine : la formation repose sur des comptes réels." },
          { type: "link", text: "Mon parcours et mes références", href: "/a-propos/" },
        ],
      },
      {
        id: "preuve",
        usp: "U2",
        h2: "Ce que la méthode a donné sur un site réel",
        blocks: [
          { type: "p", text: "Sur habilitations-electrique.fr (CNFSE), les clics Google sont passés de 2 417 à 3 941 par mois en un an, et la position moyenne de 14,0 à 8,1. C'est la méthode enseignée ici : structure, entités, suivi." },
          { type: "link", text: "Lire l'étude de cas", href: "/etudes-de-cas/seo-habilitation-electrique/" },
        ],
      },
      {
        id: "tarif",
        usp: "U7",
        h2: "Tarif et financement",
        blocks: [
          {
            type: "table",
            head: ["Formule", "Prix"],
            rows: [
              ["Inscription individuelle (10 heures)", "Sur devis"],
              ["Équipe (intra-entreprise)", "Sur devis"],
            ],
          },
          { type: "link", text: "Formation sur vos propres comptes (intra-entreprise)", href: "/formations/intra-entreprise/" },
        ],
      },
    ],
    faq: [
      { q: "Quel est le prix de la formation SEO ?", a: "Sur devis pour l'inscription individuelle (10 heures). Le tarif équipe se fait sur devis." },
      { q: "La formation est-elle en présentiel ou en ligne ?", a: "La formation se donne en ligne, en groupe de 3 personnes maximum." },
      { q: "Faut-il des connaissances techniques ?", a: "Non. Il faut savoir utiliser un navigateur et un tableur. Les outils sont expliqués pas à pas." },
      { q: "Parlez-vous aussi de l'intelligence artificielle ?", a: "Oui. Un module est consacré à la visibilité dans ChatGPT, Gemini et Perplexity, et à l'usage de l'IA dans la production de contenu." },
      { q: "Reçoit-on une attestation ?", a: "Oui, une attestation de formation vous est remise." },
      { q: "Peut-on suivre la formation avec son propre site ?", a: "Oui, c'est même conseillé. Les exercices portent sur votre site ou sur un site d'exercice si vous n'en avez pas encore." },
      { q: "Proposez-vous un suivi après la formation ?", a: "Oui, un suivi est prévu après la formation." },
    ],
    cta: {
      title: "Réserver votre place",
      text: "Dites-moi qui vous êtes et ce que vous voulez apprendre. Je vous réponds avec les prochaines dates.",
      label: "Demander les dates",
    },
  },
  // ───────────────────────── H03 · Ma méthode (USP U4) ─────────────────────────
  H03: {
    answer:
      "Notre méthode tient en trois règles : nous mesurons avant de dépenser, vos comptes restent à votre nom, et nous vous transférons ce que nous savons. Elle s'applique au SEO, à Google Ads, à Meta Ads et à la visibilité dans les IA. Nous travaillons depuis le Québec, en visio à vos heures de bureau.",
    sections: [
      {
        id: "mesurer",
        usp: "U1",
        h2: "Règle 1 : mesurer avant de dépenser",
        blocks: [
          { type: "p", text: "Un budget publicitaire ou un chantier SEO ne se pilote pas sur des chiffres faux. Je commence donc par vérifier ce que vos outils comptent comme une demande : appels, formulaires, rendez-vous." },
        ],
      },
      {
        id: "comptes",
        h2: "Règle 2 : vos comptes restent à votre nom",
        blocks: [
          { type: "p", text: "Google Ads, Google Analytics, Search Console et Tag Manager sont créés ou conservés à votre nom. Vous m'ajoutez comme utilisateur et vous pouvez retirer mes accès à tout moment." },
          {
            type: "list",
            items: [
              "Vous voyez toutes les dépenses et tous les résultats, sans passer par moi.",
              "Si nous arrêtons, vous gardez l'historique, les audiences et les réglages.",
              "Aucune campagne ne tourne sur un compte qui m'appartient.",
            ],
          },
        ],
      },
      {
        id: "transfert",
        h2: "Règle 3 : je vous transfère ce que je sais",
        blocks: [
          { type: "p", text: "Un bon consultant doit pouvoir s'effacer. Chaque changement important est noté avec sa raison, et le compte rendu est écrit en langage simple. Pour une équipe interne, la formation se fait sur vos propres comptes." },
          { type: "link", text: "Voir la formation intra-entreprise", href: "/formations/intra-entreprise/" },
        ],
      },
      {
        id: "entites",
        usp: "U4",
        h2: "Comment je construis la structure d'un site : par entités",
        blocks: [
          { type: "p", text: "Je ne pars pas d'une liste de mots-clés. Je pars des sujets et des termes que Google attend pour chaque requête, relevés sur les pages qui se positionnent déjà. Chaque page cible une seule requête principale. Deux pages ne se disputent pas la même." },
          { type: "p", text: "Exemple de relevé réel, sur 4 pages de concurrents tunisiens de la requête « google ads tunisie » (13 octobre 2026) :" },
          {
            type: "table",
            head: ["Entité", "Présente sur", "Où elle apparaît"],
            rows: [
              ["Google Ads", "4 pages sur 4", "Titre, méta-description, H1, H2, H3"],
              ["Tunisie", "4 pages sur 4", "Titre, méta-description, H1, H2"],
              ["Marketing digital", "4 pages sur 4", "H2, H3"],
              ["Budget", "2 pages sur 4", "Méta-description seulement"],
              ["Enchères", "2 pages sur 4", "H2, H3"],
              ["Mots-clés", "2 pages sur 4", "H2, H3"],
            ],
          },
          { type: "p", text: "Ce relevé montre ce que le marché dit déjà. Il montre aussi ce qu'il ne dit pas : sur ces 4 pages, aucune ne parle de suivi des conversions (GA4, Tag Manager) et aucune ne publie d'étude de cas chiffrée. Ces trous deviennent des sections de la page que j'écris." },
        ],
      },
      {
        id: "etapes",
        h2: "Un projet en cinq étapes",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Audit", text: "État du site ou du compte, de la concurrence et des données. Compte rendu écrit." },
              { title: "Mesure", text: "Les demandes sont comptées une seule fois, au bon endroit." },
              { title: "Structure", text: "Arborescence, pages cibles, une requête par page." },
              { title: "Production", text: "Campagnes, briefs et contenus, relus avant mise en ligne." },
              { title: "Suivi", text: "Point régulier chiffré : ce qui progresse, ce qui stagne, la prochaine action." },
            ],
          },
        ],
      },
      {
        id: "limites",
        h2: "Ce que je ne fais pas",
        blocks: [
          {
            type: "list",
            items: [
              "Je ne promets pas une position précise ni un délai garanti.",
              "Je n'achète pas de liens douteux.",
              "Je ne publie aucun chiffre sans sa source et sa période.",
            ],
          },
        ],
      },
      {
        id: "distance",
        h2: "Travailler avec notre agence : ce qui change pour vous",
        blocks: [
          { type: "p", text: "Rien sur la propriété de vos comptes. Nous travaillons depuis Scott, au Québec. Les points d'étape se font en visio à vos heures de bureau." },
        ],
      },
    ],
    faq: [
      { q: "À qui appartient le compte Google Ads ?", a: "À vous. Je travaille dans votre compte avec les accès que vous me donnez, et vous pouvez les retirer à tout moment." },
      { q: "Que se passe-t-il si j'arrête la collaboration ?", a: "Vous gardez vos comptes, votre historique, vos audiences et un compte rendu écrit. Rien ne dépend d'un outil qui m'appartient." },
      { q: "Comment suivez-vous un projet à distance ?", a: "Par visio à vos heures de bureau, avec un compte rendu écrit après chaque point. Nous travaillons aux heures du Québec." },
      { q: "Quels accès demandez-vous ?", a: "Un accès utilisateur à Google Ads, Google Analytics, Search Console et Tag Manager, plus l'accès à votre CRM en lecture si vous en avez un." },
      { q: "Combien de temps prend un audit ?", a: "Une semaine." },
      { q: "Utilisez-vous l'intelligence artificielle ?", a: "Oui, pour comparer vos pages aux attentes de Google, préparer des briefs et automatiser des rapports. Chaque chiffre et chaque texte est relu avant d'être livré." },
    ],
    cta: {
      title: "Voir si la méthode s'applique à votre cas",
      text: "Un diagnostic de 30 minutes suffit pour savoir par où commencer.",
      label: "Réserver un diagnostic",
    },
  },

  // ───────────────────────── H04 · Tarifs (USP U7) ─────────────────────────
  H04: {
    answer:
      "Mes tarifs dépendent du périmètre, pas du nombre d'heures passées. Ils sont affichés en dinars ; la France est facturée en euros. Le contenu de la mission est le même. Les prix de la grille sont en dinars.",
    sections: [
      {
        id: "grille",
        usp: "U7",
        h2: "Grille tarifaire 2026",
        blocks: [
          { type: "p", text: "Prix hors taxes. Un devis écrit précise le périmètre avant tout engagement." },
          {
            type: "table",
            head: ["Prestation", "Prix (CAD)"],
            rows: [
              ["Audit SEO", "950 à 1 500 $"],
              ["Audit de compte Google Ads", "950 à 1 500 $ (Diagnostic éclair)"],
              ["Audit de visibilité IA (GEO)", "950 à 1 500 $ (Diagnostic éclair)"],
              ["Accompagnement SEO mensuel", "797 à 2 497 $ et plus par mois"],
              ["Gestion Google Ads mensuelle", "797 à 997 $ par mois (Essentiel)"],
              ["Gestion Meta Ads mensuelle", "797 à 997 $ par mois (Essentiel)"],
              ["Suivi des conversions (mise en place)", "Sur devis"],
              ["Automatisation n8n (par workflow)", "Sur devis"],
              ["Mission ponctuelle (taux journalier)", "Sur devis"],
            ],
          },
        ],
      },
      {
        id: "formations",
        h2: "Formations",
        blocks: [
          {
            type: "table",
            head: ["Formule", "Prix (CAD)"],
            rows: [
              ["Formation SEO, inscription individuelle (10 heures, en ligne)", "Sur devis"],
              ["Formation d'équipe (intra-entreprise)", "Sur devis"],
            ],
          },
          { type: "link", text: "Voir les formations", href: "/formations/" },
        ],
      },
      {
        id: "fixation",
        h2: "Comment je fixe un prix",
        blocks: [
          {
            type: "list",
            items: [
              "Au périmètre : nombre de pages, de campagnes, de comptes à traiter.",
              "À la valeur : un chantier qui doit rapporter des demandes se chiffre sur ce qu'il peut rapporter.",
              "Sans surprise : tout ce qui sort du devis est discuté avant d'être fait.",
            ],
          },
          { type: "p", text: "Les dépenses publicitaires sont réglées directement à Google ou à Meta, depuis votre compte. Je ne perçois aucun pourcentage sur le budget publicitaire." },
        ],
      },
      {
        id: "paiement",
        h2: "Facturation, TVA et paiement",
        blocks: [
          {
            type: "list",
            items: [
              "Facture en dollars canadiens, avant taxes.",
              "France et Québec : facture sans taxe, en euros pour la France.",
              "Moyen de paiement : virement bancaire.",
              "Engagement minimum : 3 mois pour les accompagnements mensuels.",
            ],
          },
        ],
      },
    ],
    faq: [
      { q: "Quel est le prix d'un consultant Google Ads ?", a: "Il dépend du budget publicitaire géré et du nombre de campagnes. La gestion mensuelle coûte de 797 $ à 997 $ par mois, au forfait fixe (Essentiel)." },
      { q: "Quel est le prix d'un consultant SEO au Québec ?", a: "Il dépend de la taille du site et du travail demandé : diagnostic seul, accompagnement mensuel ou mission ponctuelle. Le Diagnostic éclair coûte de 950 $ à 1 500 $ et l'accompagnement mensuel de 797 $ à 2 497 $ et plus par mois." },
      { q: "L'audit est-il gratuit ?", a: "Non, l'audit est payant. Le prix dépend du type d'audit : voir la grille. Il est rendu en une semaine." },
      { q: "Les dépenses publicitaires sont-elles comprises ?", a: "Non. Elles sont payées directement à Google ou à Meta, depuis votre compte. Mes honoraires s'y ajoutent." },
      { q: "Travaillez-vous au forfait ou au pourcentage ?", a: "Au forfait fixe. Je ne prends aucun pourcentage sur le budget publicitaire." },
      { q: "Puis-je payer en dinars si mon entreprise est en France ?", a: "Non. Une entreprise en France est facturée en euros, par virement bancaire." },
    ],
    cta: {
      title: "Demander un devis",
      text: "Décrivez-moi votre situation. Je vous réponds avec un périmètre et un prix écrits.",
      label: "Demander un devis",
    },
  },

};

export const getContent = (id: string) => CONTENT[id];

/** Marqueurs « [À COMPLÉTER …] » restants dans le contenu d'une page. */
export function placeholdersOf(id: string): string[] {
  const c = CONTENT[id];
  return c ? Array.from(JSON.stringify(c).matchAll(MARKER), (m) => m[0]) : [];
}

/** Bloque le build d'une page publiée tant qu'un champ reste à fournir. */
export function assertNoPlaceholders(id: string) {
  const left = placeholdersOf(id);
  if (left.length) throw new Error(`Page ${id} publiée avec ${left.length} champ(s) à fournir : ${left.slice(0, 3).join(" · ")}…`);
        }
