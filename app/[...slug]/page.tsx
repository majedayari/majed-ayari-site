import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES, getPage, isPublished, seoTitle, slugOf, urlOf } from "@/lib/structure";

type Props = { params: { slug: string[] } };

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.filter((p) => p.url !== "/").map((p) => ({ slug: slugOf(p.url) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPage(urlOf(params.slug));
  if (!page) return {};
  return {
    title: { absolute: seoTitle(page) },
    alternates: { canonical: page.url },
    // Squelette = noindex tant que l'ID n'est pas dans lib/publication.ts
    robots: isPublished(page) ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: seoTitle(page), url: page.url, type: page.schema.startsWith("Article") ? "article" : "website" },
  };
}

export default function Page({ params }: Props) {
  const page = getPage(urlOf(params.slug));
  if (!page) notFound();
  return (
    <>
      <Header />
      <PageTemplate page={page} />
      <Footer />
    </>
  );
}
