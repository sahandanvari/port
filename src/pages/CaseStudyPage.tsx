import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { getCaseStudy, caseStudies } from "@/content/case-studies";
import { MetricBadge } from "@/components/MetricBadge";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { DeepComponentShowcase } from "@/components/DeepComponentShowcase";
import { Footer } from "@/sections/Footer";
import { CaseStudyAtAGlance } from "@/components/CaseStudyAtAGlance";
import { CaseStudyArtifacts } from "@/components/CaseStudyArtifacts";
import { CodeSnippetsBlock } from "@/components/CodeSnippetsBlock";
import { CaseStudySectionImages } from "@/components/CaseStudySectionImages";
import {
  auroraTimeline,
  tokenERDiagram,
  tokenPipeline,
  adoptionLoop,
  buttonShowcase,
  contributionFlowGated,
  tokenLayeringFlow,
  designSystemDeliveryTimeline,
} from "@/content/case-studies/diagrams";

const richContent: Record<string, Record<string, ReactNode>> = {
  aurora: {
    Components: <DeepComponentShowcase {...buttonShowcase} />,
  },
  multibrand: {
    "Tooling and pipeline": (
      <MermaidDiagram
        chart={tokenPipeline}
        caption="Token source → build → CDN → consuming stacks"
      />
    ),
    "Foundations and tokens": (
      <MermaidDiagram
        chart={tokenERDiagram}
        caption="Entity-style view: globals, aliases, and component-scoped tokens"
      />
    ),
  },
  audit: {},
  adoption: {
    "Adoption and enablement": (
      <MermaidDiagram
        chart={adoptionLoop}
        caption="Adoption loop — visibility, integration, measurement"
      />
    ),
  },
};

type DiagramSlot = { after: string; chart: string; caption: string };

const templateDiagrams: Record<string, DiagramSlot[]> = {
  aurora: [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption:
        "How primitives roll up into semantic roles, then component usage",
    },
    {
      after: "Governance and contribution",
      chart: contributionFlowGated,
      caption: "Gated contribution — system-worthy work vs guided exceptions",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption:
        "Delivery phases from audit signals through measurement (simplified)",
    },
  ],
  multibrand: [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption:
        "Same layering model; brand swap remaps semantic/component resolution",
    },
    {
      after: "Governance and contribution",
      chart: contributionFlowGated,
      caption:
        "How requests route when a change touches shared theme contracts",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption:
        "Program timeline spanning inventory, foundations, rollout, and proof",
    },
  ],
  adoption: [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Token model consumers must respect when extending or migrating",
    },
    {
      after: "Governance and contribution",
      chart: contributionFlowGated,
      caption: "Contribution and exception handling at scale",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Operational phases mirrored in adoption programs",
    },
  ],
  audit: [
    {
      after: "Audit and baseline",
      chart: contributionFlowGated,
      caption:
        "How audit findings feed triage (system work vs local exception)",
    },
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Reference layering used when classifying styling debt",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Recommended program phases after baseline inventory",
    },
  ],
  luminis: [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Shared token spine with a different component philosophy",
    },
    {
      after: "Governance and contribution",
      chart: contributionFlowGated,
      caption: "Frozen fork governance and promotion rules",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Pilot → guidelines → starter rollout phases",
    },
  ],
  "token-pipeline": [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Authoring layers vs flat consumer contract",
    },
    {
      after: "Tooling and pipeline",
      chart: tokenPipeline,
      caption: "Token source → build → published artifacts",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Pipeline maturity and measurement over time",
    },
  ],
  "interaction-tokens": [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Roles sit on semantic tokens before generation",
    },
    {
      after: "Tooling and pipeline",
      chart: tokenPipeline,
      caption: "Generation passes in the wider build",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Rollout phases for interaction contract",
    },
  ],
  "asset-gallery": [
    {
      after: "Tooling and pipeline",
      chart: tokenPipeline,
      caption: "Operational pipeline analogy — crawl → describe → index",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "Program timeline tied to audit burn-down",
    },
  ],
  propper: [
    {
      after: "Governance and contribution",
      chart: contributionFlowGated,
      caption: "Trust ladder for suggested vs automated fixes",
    },
  ],
  "starter-kit": [
    {
      after: "Foundations and tokens",
      chart: tokenLayeringFlow,
      caption: "Tokens wired by default in starter templates",
    },
    {
      after: "Adoption and enablement",
      chart: adoptionLoop,
      caption: "Pilot feedback feeding adoption loop",
    },
    {
      after: "Metrics and outcomes",
      chart: designSystemDeliveryTimeline,
      caption: "From pilot ship to scaled internal adoption",
    },
  ],
};

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <Navigate to="/" replace />;

  const diagramsBySection = richContent[study.slug] ?? {};
  const extraDiagrams = templateDiagrams[study.slug] ?? [];
  const relatedSlugs =
    study.relatedWork ??
    caseStudies
      .filter((cs) => cs.slug !== study.slug)
      .slice(0, 3)
      .map((cs) => cs.slug);
  const relatedStudies = relatedSlugs
    .map((s) => getCaseStudy(s))
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <span className="link-arrow-back" aria-hidden>
          →
        </span>
        Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {study.title}
        </h1>
        <p className="body-lg text-muted-foreground mt-4">{study.teaser}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.metrics.map((m) => (
            <MetricBadge key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
      </motion.div>

      <div className="mt-10">
        <CaseStudyAtAGlance data={study.atAGlance} />
        <CaseStudyArtifacts items={study.artifacts} />
      </div>

      <div className="mt-4 space-y-14">
        {study.sections.map((section, i) => {
          const rich = diagramsBySection[section.heading];
          const extraHere = extraDiagrams.filter(
            (d) => d.after === section.heading,
          );

          return (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              aria-labelledby={`section-${i}`}
            >
              <h2
                id={`section-${i}`}
                className="font-heading text-xl md:text-2xl font-semibold mb-4 scroll-mt-24"
              >
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="body-base text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.images?.length ? (
                <CaseStudySectionImages images={section.images} />
              ) : null}

              {study.codeSnippets?.length &&
              study.codeSnippetsAfter === section.heading ? (
                <CodeSnippetsBlock snippets={study.codeSnippets} />
              ) : null}

              {section.heading === "Foundations and tokens" &&
              study.codeSnippets?.length &&
              !study.codeSnippetsAfter ? (
                <CodeSnippetsBlock snippets={study.codeSnippets} />
              ) : null}

              {extraHere.map((d) => (
                <MermaidDiagram
                  key={d.caption}
                  chart={d.chart}
                  caption={d.caption}
                />
              ))}

              {rich}
            </motion.section>
          );
        })}
      </div>

      {study.slug === "aurora" && (
        <div className="mt-14">
          <MermaidDiagram
            chart={auroraTimeline}
            caption="Arc narrative — context through measurement"
          />
        </div>
      )}

      <div className="mt-20 pt-10 border-t border-border">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">
          More work
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {relatedStudies.map((cs) => (
            <Link
              key={cs.slug}
              to={`/work/${cs.slug}`}
              className="rounded-lg border border-border p-4 hover:bg-muted/40 transition-colors"
            >
              <h4 className="font-heading text-sm font-semibold">{cs.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {cs.teaser}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          <Link to="/design-systems" className="underline underline-offset-4">
            Design systems overview
          </Link>
        </p>
      </div>

      <Footer />
    </article>
  );
}
