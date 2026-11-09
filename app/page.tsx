import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { ProblemSection } from "@/components/ProblemSection";
import { Expertise } from "@/components/Expertise";
import { Synergy } from "@/components/Synergy";
import { CaseStudies } from "@/components/CaseStudies";
import { CtaBlock } from "@/components/CtaBlock";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { QuoteForm } from "@/components/QuoteForm";
import { Blog } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { TunisiaNote } from "@/components/TunisiaNote";
import { Proofs } from "@/components/Proofs";
import { Differentiators } from "@/components/Differentiators";
import { ForWho } from "@/components/ForWho";
import { getById } from "@/lib/structure";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Differentiators />
        <ProblemSection />
        <Expertise />
        <Synergy />
        <ForWho />
        <CaseStudies />
        <CtaBlock />
        <About />
        <Proofs />
        <TunisiaNote page={getById("H01")!} />
        <Pricing />
        <QuoteForm />
        <Blog />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
