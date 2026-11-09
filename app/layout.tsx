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
    default: `${SITE.name} · Consultant SEO et Google Ads basé en Tunisie`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Majed Ayari, consultant SEO, Google Ads et référencement IA basé en Tunisie (Hammamet), pour les entreprises françaises et canadiennes : un consultant senior francophone, à une heure de Paris.",
  keywords: [
    "consultant SEO",
    "Google Ads",
    "Meta Ads",
    "GEO",
    "visibilité IA",
    "achat média",
    "Québec",
    "Tunisie",
    "Majed Ayari",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · Consultant SEO et Google Ads basé en Tunisie`,
    description:
      "Consultant SEO, Google Ads et IA basé en Tunisie, pour les entreprises françaises et canadiennes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Consultant SEO et Google Ads basé en Tunisie`,
    description:
      "Consultant SEO, Google Ads et IA basé en Tunisie, pour les entreprises françaises et canadiennes.",
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
