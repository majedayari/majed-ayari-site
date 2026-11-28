import {
  Search,
  MousePointerClick,
  Megaphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  photo: "/majed-ayari.jpg", // portrait fourni le 06/10/2026 (400 × 400), même photo que la fiche Google
  name: "Majed Ayari",
  role: "Consultant SEO, GEO, Google Ads & Meta Ads",
  email: "majedayari@gmail.com",
  phone: "418 473-6898",
  phoneE164: "+14184736898",
  url: "https://majed-ayari.com",
  tagline: "Arrêtez de choisir entre visibilité et rentabilité.",
  zones: "Basé en Tunisie · Clients en France et au Canada",
  /** Phrase de positionnement géographique, reprise dans le pied de page et le contact. */
  workFrom: "Je travaille depuis la Tunisie (Hammamet) et le Canada (Scott, Québec), pour des entreprises en France, au Canada et en Tunisie.",
  calendly: "/contact/",
};

export type Office = {
  label: string;
  street?: string; // rue et numéro : à compléter (laisser vide plutôt qu'inventer)
  postalCode?: string;
  locality: string;
  region: string;
  country: string;
  countryCode: "TN" | "CA";
  /** Numéro affiché et numéro au format E.164 (lien tel:). */
  phone: string;
  phoneE164: string;
  /** Le numéro répond sur WhatsApp : affiche un lien wa.me. */
  whatsapp?: boolean;
};

/** Ordre = ordre d'affichage : la Tunisie d'abord, puis le Canada. */
export const OFFICES: Office[] = [
  { label: "Tunisie", street: "Avenue de la République", postalCode: "8050", locality: "Hammamet", region: "Nabeul", country: "Tunisie", countryCode: "TN", phone: "+216 50 908 530", phoneE164: "+21650908530", whatsapp: true },
  { label: "Canada", street: "40 rue Jean-Baptiste", postalCode: "G0S 3G0", locality: "Scott", region: "Québec", country: "Canada", countryCode: "CA", phone: "418 473-6898", phoneE164: "+14184736898" },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Synergie", href: "#synergie" },
  { label: "Études de cas", href: "#etudes-de-cas" },
  { label: "À propos", href: "#a-propos" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Blog", href: "#blog" },
];

export type Pain = { title: string; description: string };

export const PAINS: Pain[] = [
  {
    title: "Des canaux qui s'ignorent",
    description:
      "Votre SEO travaille dans son coin, vos pubs dans un autre. Aucun message commun, aucune donnée partagée — et des budgets qui se cannibalisent au lieu de s'additionner.",
  },
  {
    title: "Un budget qui se dilue",
    description:
      "Des dépenses éparpillées entre plusieurs outils et prestataires, sans vision unifiée du coût d'acquisition réel ni de ce qui génère vraiment du chiffre.",
  },
  {
    title: "La fatigue de tout coordonner",
    description:
      "Une agence SEO, un freelance Ads, un autre pour le social… et vous au milieu, à recoller les morceaux. Un seul interlocuteur stratégique change tout.",
  },
];

export type Service = {
  id: string;
  icon: LucideIcon;
  name: string;
  promise: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "seo",
    icon: Search,
    name: "SEO",
    promise: "Possédez votre trafic.",
    description:
      "Une croissance organique durable : un actif qui vous appartient et qui ne s'arrête pas quand vous coupez le budget publicitaire.",
    points: [
      "Audit technique & sémantique",
      "Architecture & maillage interne",
      "Contenu à intention de recherche",
      "Netlinking & autorité (E-E-A-T)",
    ],
  },
  {
    id: "google-ads",
    icon: MousePointerClick,
    name: "Google Ads",
    promise: "Captez l'intention. Maintenant.",
    description:
      "Un ROI immédiat en capturant la demande au moment précis où vos clients cherchent à acheter — Search, Performance Max et programmatique.",
    points: [
      "Search & Shopping rentables",
      "Performance Max & DV360",
      "Structure de compte & enchères",
      "Tracking & attribution propres",
    ],
  },
  {
    id: "meta-ads",
    icon: Megaphone,
    name: "Meta Ads",
    promise: "Passez à l'échelle.",
    description:
      "Du volume et de la notoriété grâce au ciblage comportemental Facebook & Instagram, et un retargeting qui transforme l'audience en clients.",
    points: [
      "Acquisition & prospection froide",
      "Retargeting multi-niveaux",
      "Créas qui convertissent",
      "Pixel, CAPI & audiences",
    ],
  },
];

export type SynergyPhase = {
  step: string;
  channel: string;
  title: string;
  description: string;
};

export const SYNERGY: SynergyPhase[] = [
  {
    step: "01",
    channel: "Google Ads",
    title: "Allumer la demande",
    description:
      "On capte immédiatement les acheteurs en intention chaude pour générer des premières ventes et des données fiables dès la semaine 1.",
  },
  {
    step: "02",
    channel: "SEO",
    title: "Installer l'actif durable",
    description:
      "On transforme les requêtes rentables identifiées en pages organiques qui rankent — pour faire baisser le coût d'acquisition mois après mois.",
  },
  {
    step: "03",
    channel: "Meta Ads",
    title: "Récupérer & démultiplier",
    description:
      "On retargete les visiteurs SEO et Ads sur Facebook/Instagram et on élargit à des audiences similaires pour scaler le volume.",
  },
];

// Études de cas : voir lib/cases.ts (uniquement des cas publiés avec l'accord du client, chiffres sourcés).

export const CLIENT_LOGOS = ["CNFSE"];

export type Stat = { value: number; suffix: string; prefix?: string; label: string };

export const ABOUT_STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Secteurs accompagnés" },
  { value: 3, suffix: "", label: "Pays : QC, France, Tunisie" },
  { value: 8, suffix: "+", label: "Années en SEO & média" },
  { value: 100, suffix: "%", label: "Approche pilotée par la donnée" },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  highlight: boolean;
  description: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Meta Ads",
    price: "500 $",
    cadence: "/ mois",
    highlight: false,
    description: "Pour scaler le volume et la notoriété sur Facebook & Instagram.",
    features: [
      "Audit & stratégie de compte",
      "Configuration Pixel + CAPI",
      "Campagnes prospection & retargeting",
      "Audiences personnalisées & similaires",
      "Recommandations créatives",
      "Rapport mensuel commenté",
    ],
  },
  {
    name: "SEO",
    price: "1 000 $",
    cadence: "/ mois",
    highlight: true,
    description: "Pour bâtir un actif organique durable, pensé GEO/IA inclus.",
    features: [
      "Audit technique & sémantique",
      "Stratégie de contenu & calendrier",
      "Optimisations on-page & maillage",
      "Données structurées (JSON-LD)",
      "Optimisation visibilité IA (GEO)",
      "Suivi positions & reporting",
    ],
  },
  {
    name: "Google Ads",
    price: "500 $",
    cadence: "/ mois",
    highlight: false,
    description: "Pour capter l'intention d'achat et un ROI immédiat.",
    features: [
      "Structure de compte & arborescence",
      "Search, Shopping & Performance Max",
      "Recherche & gestion des mots-clés",
      "Tracking & attribution",
      "Tests d'enchères & d'annonces",
      "Rapport mensuel commenté",
    ],
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "GEO : comment devenir la marque que ChatGPT et Perplexity citent",
    excerpt:
      "Le SEO ne suffit plus. Voici comment structurer votre entité et votre contenu pour être recommandé par les moteurs de réponse IA.",
    date: "12 juin 2026",
    tag: "GEO / Visibilité IA",
  },
  {
    title: "SEO + Google Ads + Meta : le triptyque qui fait baisser votre CAC",
    excerpt:
      "Pourquoi piloter vos canaux ensemble plutôt qu'en silos divise le coût d'acquisition — avec un plan d'activation en 3 phases.",
    date: "28 mai 2026",
    tag: "Stratégie",
  },
  {
    title: "Données structurées : le langage que les IA comprennent vraiment",
    excerpt:
      "Organization, Person, sameAs, speakable… le guide pratique du JSON-LD qui améliore votre découvrabilité dans la recherche générative.",
    date: "14 mai 2026",
    tag: "SEO technique",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Concrètement, que fait un consultant SEO & média comme vous ?",
    answer:
      "J'aligne vos canaux d'acquisition (SEO, Google Ads, Meta Ads) autour d'une seule stratégie et d'un seul objectif : faire baisser votre coût d'acquisition tout en augmentant le volume. Audit, plan, exécution ou accompagnement de vos équipes — selon votre besoin.",
  },
  {
    question: "Sur quels canaux puis-je travailler avec vous ?",
    answer:
      "SEO (technique, contenu, autorité), Google Ads (Search, Shopping, Performance Max, DV360), Meta Ads (Facebook & Instagram) et la visibilité IA / GEO. L'idée n'est pas de tout activer, mais d'orchestrer les bons canaux pour votre marché.",
  },
  {
    question: "Travaillez-vous avec le e-commerce et le B2B ?",
    answer:
      "Oui. J'accompagne aussi bien des e-commerces (cosmétiques, retail) que des entreprises B2B et de services, au Québec, en France et en Tunisie. Chaque secteur a sa logique d'intention que j'adapte.",
  },
  {
    question: "Comment mesurez-vous les résultats ?",
    answer:
      "Tout est piloté par la donnée : tracking propre (GA4, CAPI, UTM/ValueTrack), KPIs définis ensemble (CAC, ROAS, positions, trafic qualifié) et reporting commenté. Vous savez toujours ce que chaque euro produit.",
  },
  {
    question: "Comment se passe le démarrage ?",
    answer:
      "On commence par un échange pour cadrer vos objectifs, suivi d'un audit. Je vous remets ensuite un plan d'action priorisé et chiffré — puis on exécute, par sprints, avec des points réguliers. Pas de boîte noire.",
  },
];

// Profils fournis par Majed le 06/10/2026 (Facebook et LinkedIn bloquent les robots : non testables, mais ce sont ses comptes).
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/majedayari/" },
  { label: "Facebook", href: "https://www.facebook.com/ayarimajed" },
  { label: "Instagram", href: "https://www.instagram.com/majedayari/" },
  { label: "TikTok", href: "https://www.tiktok.com/@majedayari3" },
  { label: "X", href: "https://x.com/majed_ayari" },
];

/** Fiche Google (vérifiée le 06/10/2026 via le lien Maps fourni). Le nom doit rester identique à celui de la fiche (cohérence NAP). */
export const GBP = {
  name: "Majed Ayari - Consultant SEO & SEA",
  mapsUrl: "https://maps.google.com/?cid=14636634352696021967",
  kgId: "/g/11s58kq936",
  geo: { lat: 36.3966393, lng: 10.6141516 },
};

/** Certifications déclarées par Majed (06/10/2026). Ajouter l'URL du badge/certificat public dès qu'elle est fournie. */
/** `status` : "valide" ou "expirée" ; `period` : texte affiché (dates relevées sur la page du certificat). */
export type Certification = {
  name: string;
  issuer: string;
  issuerUrl: string;
  url?: string;
  status: "valide" | "expirée";
  period: string;
  /** Logo / badge officiel (public/certifications). */
  image?: string;
  /** Dates ISO relevées sur le certificat public (données structurées). */
  issued?: string;
  expires?: string;
  /** Numéro de certificat affiché sur la page publique. */
  credentialId?: string;
};
const SKILLSHOP = "https://skillshop.withgoogle.com/";
const KLAVIYO = "https://www.klaviyo.com/";
// Certifications valides uniquement (relevées le 09/11/2026) : pas de doublons, pas d'expirées.
export const CERTIFICATIONS: Certification[] = [
  { name: "Klaviyo practitioner certificate", issuer: "Klaviyo", issuerUrl: KLAVIYO, url: "https://credential.klaviyo.com/ea48d736-28c0-4db5-801c-cbeb17f25d9d", status: "valide", period: "obtenue le 06/11/2026, valable jusqu'au 06/11/2028", image: "/certifications/klaviyo-practitioner.png", issued: "2026-11-06", expires: "2028-11-06", credentialId: "199690546" },
  { name: "Certification Google Ads pour la publicité sur le Réseau Display", issuer: "Google", issuerUrl: SKILLSHOP, url: "https://skillshop.credential.net/518f8469-f11d-4036-80ab-ec151e70d591", status: "valide", period: "obtenue le 19/06/2026, valable jusqu'au 19/06/2027", image: "/certifications/google-ads-display-2026-fr.png", issued: "2026-06-19", expires: "2027-06-19", credentialId: "185877751" },
  { name: "Display & Video 360 Certification Exam", issuer: "Google", issuerUrl: SKILLSHOP, url: "https://skillshop.credential.net/791c02af-8507-425e-a99a-2133da6f6e00", status: "valide", period: "obtenue le 18/02/2026, valable jusqu'au 18/02/2027", image: "/certifications/dv360-en.png", issued: "2026-02-18", expires: "2027-02-18", credentialId: "174821804" },
  { name: "Examen de certification Campaign Manager 360", issuer: "Google", issuerUrl: SKILLSHOP, url: "https://skillshop.credential.net/2ed04b11-b8fc-4494-a401-bbd0c73e247b", status: "valide", period: "obtenue le 18/02/2026, valable jusqu'au 18/02/2027", image: "/certifications/cm360.png", issued: "2026-02-18", expires: "2027-02-18", credentialId: "174826106" },
];

/** Outils maîtrisés (affichés sur le site et repris dans knowsAbout). */
export const TOOLS = ["Google Analytics 4", "Google Tag Manager", "Shopify", "Klaviyo", "Zapier", "n8n", "Semrush", "Screaming Frog"];

/** Références publiques vérifiées le 06/10/2026. N'ajouter que des preuves en ligne et consultables. */
export type Proof = {
  kind: "Conférence" | "Publication";
  title: string;
  detail: string;
  dateLabel: string;
  source: string;
  url: string;
};
export const PROOFS: Proof[] = [
  {
    kind: "Conférence",
    title: "Intervenant au SEO CAMP Day de Lille",
    detail: "Journée de conférences de l'association SEO CAMP. Le compte rendu cite mes tests sur les sites au contenu absent ou dupliqué.",
    dateLabel: "11 janvier 2019",
    source: "compte rendu d'Axecibles",
    url: "https://www.axecibles.com/retour-sur-le-seo-camp-day-de-lille-du-11-janvier-2019_ad276.html",
  },
  {
    kind: "Publication",
    title: "Co-auteur du livre blanc « Les secrets du netlinking révélés par 9 experts SEO »",
    detail: "Publié par Rocketlinks, aux côtés d'Olivier Andrieu (Abondance) et d'Olivier Duffez (WebRankInfo).",
    dateLabel: "",
    source: "Rocketlinks",
    url: "https://www.rocketlinks.com/fr/livres-blancs/secrets-netlinking",
  },
];

/** Arguments de différenciation (USP). Seules les USP `prouvee` s'affichent : une USP `a-fournir` attend sa preuve ou une donnée de Majed. */
export type Usp = {
  id: string;
  title: string;
  text: string;
  proof: string;
  href?: string;
  statut: "prouvee" | "a-fournir";
  /** Ce qu'il manque pour l'afficher (usage interne). */
  manque?: string;
};
export const USPS: Usp[] = [
  {
    id: "U1",
    title: "Je mesure d'abord",
    text: "Avant de toucher aux campagnes, je vérifie ce que le compte compte comme demande. Un appel très court, un clic sur un itinéraire ou un formulaire sans suite ne sont pas des demandes : je compte ce qui mène à un vrai prospect.",
    proof: "Méthode de travail décrite sur la page Méthode",
    href: "/methode/",
    statut: "prouvee",
  },
  {
    id: "U2",
    title: "Des chiffres sourcés, avec leur limite",
    text: "Chaque étude de cas donne la période, la source (Search Console, Google Ads, CRM) et ce que les chiffres ne prouvent pas. Pour CNFSE : de 2 417 à 3 941 clics Google par mois en un an.",
    proof: "Étude de cas SEO, septembre 2025 → septembre 2026",
    href: "/etudes-de-cas/seo-habilitation-electrique/",
    statut: "prouvee",
  },
  {
    id: "U3",
    title: "Un seul interlocuteur",
    text: "SEO, Google Ads, Meta Ads, visibilité dans les IA et mesure sont pilotés ensemble par la même personne. Vous ne réunissez pas trois prestataires pour savoir lequel a généré la demande.",
    proof: "Certifié Google Ads, Display & Video 360, Campaign Manager 360 et Klaviyo",
    href: "/a-propos/",
    statut: "prouvee",
  },
  {
    id: "U4",
    title: "Une méthode documentée",
    text: "Structure du site par entités, rapport d'entités par page, vérification des chiffres avant publication.",
    proof: "Page « Ma méthode » à publier",
    statut: "a-fournir",
    manque: "Page méthode avec un extrait de rapport d'entités anonymisé.",
  },
  {
    id: "U5",
    title: "Les deux rives",
    text: "J'ai piloté [À COMPLÉTER : N] comptes publicitaires au Québec, pour des budgets de [À COMPLÉTER : X] à [À COMPLÉTER : Y] par mois, dans [À COMPLÉTER : secteurs]. Je travaille aujourd'hui depuis la Tunisie et le Québec pour des entreprises tunisiennes, françaises et canadiennes : je connais les contraintes des deux rives.",
    proof: "Chiffres des comptes au Québec à valider",
    statut: "a-fournir",
    manque: "Nombre de comptes et budgets gérés au Québec depuis 2021, publiables sans nommer l'agence.",
  },
  {
    id: "U6",
    title: "Première mesure de la visibilité IA en Tunisie",
    text: "Combien d'entreprises tunisiennes ChatGPT, Gemini et Perplexity citent-ils ?",
    proof: "Étude à produire",
    statut: "a-fournir",
    manque: "Panel de requêtes par secteur et relevé ZeroRank daté.",
  },
  {
    id: "U7",
    title: "Prix publiés, audit écrit, compte à vous",
    text: "Grille tarifaire publique, audit remis par écrit, accès au compte publicitaire en votre nom.",
    proof: "Tarifs à fournir",
    statut: "a-fournir",
    manque: "Prix de l'audit, de la gestion mensuelle et du taux journalier.",
  },
];

/** Clients idéaux (ICP), Tunisie d'abord. `href` pointe vers la page « Pour qui » de la structure. */
export type Icp = { id: string; label: string; who: string; need: string; offer: string; href: string };
export const ICPS: Icp[] = [
  {
    id: "I1",
    label: "PME tunisiennes qui vendent en France ou au Canada",
    who: "Cliniques, hôtels, écoles privées, industrie, centres d'appels.",
    need: "Recevoir des demandes de l'étranger, pas seulement du marché local.",
    offer: "SEO en français, Google Ads et suivi des demandes.",
    href: "/pour/exportateurs/",
  },
  {
    id: "I2",
    label: "Équipes marketing internes",
    who: "Responsables marketing de PME et de groupes qui travaillent avec une agence.",
    need: "Savoir juger le travail d'un prestataire et gagner en autonomie.",
    offer: "Audit écrit, puis formation sur vos propres comptes.",
    href: "/formations/intra-entreprise/",
  },
  {
    id: "I3",
    label: "Freelances et agences tunisiennes",
    who: "Ceux qui servent des clients en France, au Canada ou dans le Golfe.",
    need: "Une méthode, un reporting et un niveau de SEO international.",
    offer: "Formation, coaching et marque blanche.",
    href: "/pour/freelances-agences/",
  },
  {
    id: "I4",
    label: "Agences et PME en France et au Québec",
    who: "Entreprises qui cherchent un renfort SEO ou Google Ads fiable.",
    need: "Un consultant senior en nearshore, en français.",
    offer: "Missions SEO et Google Ads depuis la Tunisie.",
    href: "/pour/entreprises-francaises-canadiennes/",
  },
];
