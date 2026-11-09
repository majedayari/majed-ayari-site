"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading
          align="left"
          eyebrow="Blog & ressources"
          title="Comprendre l'acquisition d'aujourd'hui"
          subtitle="Mes analyses sur le SEO, la publicité et la visibilité dans les moteurs IA."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-ink">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-accent/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <span className="relative rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-xs font-medium text-muted">{post.date}</time>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                  Lire l'article
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
