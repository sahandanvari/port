import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";

/**
 * MrBiscuit-style opening: clear scope of work in plain language, no clutter.
 */
export function Overview() {
  return (
    <SectionWrapper
      maxWidth="prose"
      id="overview"
      className="!py-sp-12 md:!py-sp-16"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
        Overview
      </p>
      <div className="space-y-4 text-muted-foreground body-lg leading-relaxed">
        <p>
          I work at the intersection of{" "}
          <strong className="text-foreground font-medium">
            product design
          </strong>
          ,{" "}
          <strong className="text-foreground font-medium">
            design systems
          </strong>
          , and{" "}
          <strong className="text-foreground font-medium">
            agentic design infrastructure
          </strong>
          : machine-readable component contracts, MCP-style retrieval so agents
          fetch the right slice of the system, and guardrails (rules, skills,
          review gates) so generated UI stays aligned with production. The
          through-line is the same: make the right thing the easy thing — for
          designers, for engineers, and for the tools that generate UI.
        </p>
        <p>
          Below you will find{" "}
          <a
            href="#work"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            case studies
          </a>{" "}
          (deep work, metrics, tradeoffs) and{" "}
          <Link
            to="/writing"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            writing
          </Link>{" "}
          (principles and how I think). Same story, different depth.
        </p>
        <p>
          For a single-page view of design-systems scope and artifacts, see{" "}
          <Link
            to="/design-systems"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            Design systems
          </Link>
          .
        </p>
      </div>
    </SectionWrapper>
  );
}
