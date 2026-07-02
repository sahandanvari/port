import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  designSystemsIntro,
  aiReadyInfraIntro,
  howIWork,
  artifactTiles,
  aiArtifactTiles,
  getFeaturedCaseStudies,
} from "@/content/designSystemsPage";
import { Footer } from "@/sections/Footer";

export function DesignSystemsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const studies = getFeaturedCaseStudies();

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <span className="link-arrow-back" aria-hidden>
          →
        </span>
        Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Portfolio
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          {designSystemsIntro.title}
        </h1>
        <p className="body-lg text-muted-foreground mt-5 leading-relaxed">
          {designSystemsIntro.lede}
        </p>
      </motion.div>

      <section className="mt-14" aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-heading text-xl font-semibold">
          How I work
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
          {howIWork.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="artifacts-heading">
        <h2
          id="artifacts-heading"
          className="font-heading text-xl font-semibold"
        >
          Systems artifacts I ship
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
          Evidence-backed deliverables hiring managers look for — each case
          study maps these to real work.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {artifactTiles.map((tile) => (
            <li
              key={tile.title}
              className="rounded-lg border border-border p-4 bg-card/30 hover:bg-muted/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {tile.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {tile.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">
          Consolidated screenshot slots:{" "}
          <Link to="/artifacts" className="underline underline-offset-4">
            Artifacts gallery
          </Link>
        </p>
      </section>

      <section className="mt-14" aria-labelledby="ai-infra-heading">
        <h2
          id="ai-infra-heading"
          className="font-heading text-xl font-semibold"
        >
          AI-ready infrastructure
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
          {aiReadyInfraIntro}
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {aiArtifactTiles.map((tile) => (
            <li
              key={tile.title}
              className="rounded-lg border border-border p-4 bg-card/30 hover:bg-muted/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {tile.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {tile.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="cs-heading">
        <h2 id="cs-heading" className="font-heading text-xl font-semibold">
          Case studies
        </h2>
        <ul className="mt-6 space-y-4">
          {studies.map((cs) => (
            <li
              key={cs.slug}
              className="border-b border-border pb-4 last:border-0"
            >
              <Link
                to={`/work/${cs.slug}`}
                className="font-heading font-semibold text-foreground hover:underline"
              >
                {cs.title}
              </Link>
              <p className="text-sm text-muted-foreground mt-1">{cs.teaser}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
