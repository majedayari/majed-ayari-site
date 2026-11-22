import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import { siteJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Agence SEO, Google Ads, Meta Ads et visibilité IA pour PME du Québec`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "L'agence d'acquisition des PME québécoises : SEO, Google Ads, Meta Ads et visibilité IA (GEO), mesurés en demandes réelles, sur vos comptes.",
  keywords: [
    "consultant SEO",
    "Google Ads",
    "Meta Ads",
    "GEO",
    "visibilité IA",
    "achat média",
    "Québec",
    "PME",
    "Majed Ayari",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · Agence SEO, Google Ads, Meta Ads et visibilité IA pour PME du Québec`,
    description:
      "SEO, Google Ads, Meta Ads et visibilité IA pour les PME du Québec, mesurés en demandes réelles, sur vos comptes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Agence SEO, Google Ads, Meta Ads et visibilité IA pour PME du Québec`,
    description:
      "SEO, Google Ads, Meta Ads et visibilité IA pour les PME du Québec, mesurés en demandes réelles, sur vos comptes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
