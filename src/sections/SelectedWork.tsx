import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";
import { caseStudies } from "@/content/case-studies";
import type { CaseStudy } from "@/content/case-studies/types";

function WorkRow({ study }: { study: CaseStudy }) {
  const role = study.workRole ?? "Design system lead";
  const placeholderLabel = `Screenshot: ${study.title}`;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 lg:gap-12 py-12 md:py-14 border-b border-border last:border-b-0">
      <Link
        to={`/work/${study.slug}`}
        className="group block relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Open case study: ${study.title}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            [Add screenshot]
          </span>
          <span className="text-xs text-muted-foreground leading-snug max-w-sm">
            {placeholderLabel}. Hero, docs, or product frame that shows the
            system in context. Private assets OK with caption.
          </span>
        </div>
        <span
          className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        >
          View case study
        </span>
      </Link>

      <div className="flex flex-col min-w-0">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-tight">
          <Link
            to={`/work/${study.slug}`}
            className="hover:underline underline-offset-4 decoration-border"
          >
            {study.title}
          </Link>
        </h3>
        <p className="body-base text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          {study.teaser}
        </p>

        <aside className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Role
            </span>
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
              {role}
            </span>
          </div>
        </aside>

        <Link
          to={`/work/${study.slug}`}
          className="mt-8 inline-flex items-center gap-1 text-sm link-accent border-b border-accent/40 pb-0.5 self-start hover:border-accent transition-colors"
        >
          Read case study
          <span aria-hidden className="link-arrow">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <SectionWrapper
      id="work"
      maxWidth="wide"
      className="border-t border-border/60"
    >
      <div className="mb-10 md:mb-14 max-w-2xl">
        <p className="eyebrow mb-3">Work</p>
        <h2 className="heading-2">What I built</h2>
        <p className="body-base text-muted-foreground mt-3 leading-relaxed">
          First-person case studies on two production design systems — Aurora
          (customer-facing) and Luminis (internal tools) — plus the token
          pipeline, registry, MCP layer, and adoption work behind them.
        </p>
      </div>
      <div>
        {caseStudies.map((study) => (
          <WorkRow key={study.slug} study={study} />
        ))}
      </div>
    </SectionWrapper>
  );
}
