import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
import { PAGES, isPublished } from "@/lib/structure";

export const dynamic = "force-static";

// Seules les pages publiées (lib/publication.ts) entrent dans le sitemap ; les squelettes sont en noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.filter(isPublished).map((p) => ({
    url: `${SITE.url}${p.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.url === "/" ? 1 : p.priority === "P1" ? 0.8 : 0.5,
  }));
}
