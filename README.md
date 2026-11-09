# Site Majed Ayari — Consultant SEO, Google Ads & Meta Ads

Site vitrine moderne, animé et responsive (Next.js 14 + Tailwind CSS + Framer Motion), exporté en statique pour un hébergement simple et un SEO optimal.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Générer le site statique

```bash
npm run build    # génère le dossier /out (HTML statique prêt à héberger)
```

Le contenu de `/out` peut être déployé tel quel sur n'importe quel hébergeur statique.

## Déploiement

- **Vercel** (recommandé) : `npm i -g vercel` puis `vercel` à la racine. Détection auto de Next.js.
- **Netlify** : build command `npm run build`, publish directory `out`.
- **GitHub Pages / FTP** : uploader le contenu de `/out`.

## Structure

```
app/          layout (SEO + JSON-LD), page (assemblage), sitemap, robots, globals.css
components/    15 sections + ui/ (Reveal, AnimatedNumber, SectionHeading)
lib/data.ts   TOUT le contenu (textes, études de cas, tarifs, FAQ, blog)
public/        assets statiques (photo, logos, favicon, og-image à ajouter)
```

## ✅ À personnaliser avant la mise en ligne

Tout le contenu éditable est centralisé dans **`lib/data.ts`** :

1. **Coordonnées** (`SITE`) : email, téléphone, URL du domaine, liens Calendly.
2. **Liens sociaux** (`SOCIALS`) : URLs LinkedIn / X / YouTube réelles.
3. **Tarifs** (`PLANS`) : ajuster les montants/devise et livrables.
4. **Études de cas** (`CASE_STUDIES`) : valider les chiffres (certains sont des objectifs/illustratifs).
5. **Blog** (`BLOG_POSTS`) : remplacer par de vrais articles + liens.

Assets à fournir dans `public/` (placeholders actuellement) :
- **Photo professionnelle** de Majed (remplacer le bloc « MA » dans `components/About.tsx` et le Hero).
- **Logos clients** réels (la section défilante utilise du texte pour l'instant — `components/ClientLogos.tsx`).
- **favicon.ico** et **og-image.png** (1200×630) pour le partage social.

## À brancher plus tard (hors périmètre)

- Back-end réel du **formulaire de devis** (actuellement `mailto:`) et de la **newsletter** — ex. Formspree, Resend, ou une route API.

## Architecture multi-pages (SEOntology, 05/10/2026)

- **Source unique** : `../majed-ayari-structure/pages.py` (+ `ajouts.py`). `python build.py` régénère le XLSX, le Turtle seovoc
  et **`lib/structure.json`** (60 URL). Ne jamais éditer le JSON à la main.
- `app/[...slug]/page.tsx` génère toutes les pages hors accueil avec `components/PageTemplate.tsx` :
  fil d'Ariane, H1, pages filles (hubs), « Guides et outils liés », « À lire aussi » (ancre = requête primaire), JSON-LD.
- **Publication** : une page est un squelette (`noindex`, absente du sitemap) tant que son ID n'est pas dans `lib/publication.ts`.
- En `npm run dev`, chaque page affiche un encadré « Brief seovoc » (requêtes, persona, schema, verrou). Il n'est jamais dans le build.
- `next.config.mjs` désactive `output: export` en dev uniquement (bug Next 14.2 sur la route catch-all).
