export interface Metric {
  label: string;
  value: string;
}

export type CaseStudyImageAspect = "wide" | "figure" | "pair";

export interface CaseStudySectionImage {
  /** What to capture — shown in placeholder until src is set */
  label: string;
  aspect: CaseStudyImageAspect;
  /** Path under /public when available */
  src?: string;
  alt?: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
  images?: CaseStudySectionImage[];
}

/** Shown at top of each case study — resume-style scan. */
export interface AtAGlance {
  role: string;
  scope: string;
  team: string;
  timeline: string;
  platforms: string;
  outcomes: string;
}

/** Artifacts row: tokens, specs, docs, governance, metrics, code. */
export interface CaseStudyArtifact {
  id: string;
  label: string;
  blurb: string;
  /** Public URL, or omit if private / TBD */
  href?: string;
  /** If true, show “Private — available on request” */
  isPrivate?: boolean;
  /** Optional image under /public */
  imageSrc?: string;
  imageAlt?: string;
}

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  teaser: string;
  /** Role label for homepage work row (aside pill). */
  workRole?: string;
  metrics: Metric[];
  atAGlance: AtAGlance;
  artifacts: CaseStudyArtifact[];
  /** Optional fenced-style snippets rendered as <pre> */
  codeSnippets?: CodeSnippet[];
  /** Section heading after which code snippets render */
  codeSnippetsAfter?: string;
  /** Slugs for “More work” footer (2–3 related stories) */
  relatedWork?: string[];
  sections: CaseStudySection[];
}
