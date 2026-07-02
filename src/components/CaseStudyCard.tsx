import { Link } from "react-router-dom";
import { MetricBadge } from "./MetricBadge";
import type { CaseStudy } from "@/content/case-studies/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8 md:py-10 border-b border-border last:border-b-0 hover:bg-accent/5 -mx-4 px-4 rounded-xl transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <span className="font-mono text-xs text-accent-foreground/70 tabular-nums w-8 shrink-0 pt-1 transition-colors group-hover:text-accent-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:underline underline-offset-4 decoration-accent/40">
          {study.title}
        </h3>
        <p className="body-base text-muted-foreground mt-2 max-w-2xl">
          {study.teaser}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.metrics.slice(0, 4).map((m) => (
            <MetricBadge key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
      </div>
      <span
        className="link-arrow text-sm text-muted-foreground shrink-0 sm:pt-1 group-hover:text-accent-foreground"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}
