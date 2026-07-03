import { caseStudies } from "@/content/case-studies";

export const designSystemsIntro = {
  title: "Design systems",
  lede: "I build the layer between brand intent and shipped UI: tokens, components, patterns, documentation, governance, adoption programs, and the pipelines that keep them honest. The goal is simple — teams ship faster without inventing new colors, spacing, or accessibility bugs on every screen. The same structures also make AI-assisted coding predictable, because the rules are explicit in code and docs.",
} as const;

export const aiReadyInfraIntro =
  "Agents are another consumer of the system. I ship the same contracts for humans and tools: structured metadata, scoped retrieval, and governance that scales when pull requests move faster than office hours." as const;

export const howIWork = [
  "Partner with engineering early on API shape, build tooling, and release cadence — design systems are org products, not solo Figma libraries.",
  "Prefer decisions written as tokens, lint rules, and doc templates over tribal knowledge; machines and new hires read the same sources.",
  "Treat accessibility as acceptance criteria: focus order, contrast, motion, and realistic content states — not a late QA surprise.",
  "Use tradeoff logs: when we allow a snowflake, we document why, who approved, and when it expires.",
  "Expose components and tokens through small, deterministic fetches (MCP-style tools) instead of dumping whole repos into context — retrieval is cheap; wrong context is expensive.",
  "Pair structured JSON or schemas with prose: one source of truth, fields for machines and examples for people.",
  "Define trust explicitly: suggest-only versus draft PR versus limited auto-fix, tied to risk and confidence — humans still own naming, accessibility, and release.",
] as const;

export type ArtifactTile = {
  title: string;
  description: string;
};

export const artifactTiles: ArtifactTile[] = [
  {
    title: "Token taxonomy & naming",
    description:
      "Primitives → semantic roles → component-scoped tokens; semantic names for multibrand swaps.",
  },
  {
    title: "Component specs & state matrices",
    description:
      "Variants, interaction states, keyboard flows, responsive rules, props/slots documented for devs and designers.",
  },
  {
    title: "Patterns & guidance",
    description:
      "Recipes for complex flows; when to use / when not; edge cases for dense admin vs marketing surfaces.",
  },
  {
    title: "Documentation templates",
    description:
      "Design + Develop surfaces, do/don’t, code samples, troubleshooting, glossary split by audience.",
  },
  {
    title: "Contribution & intake",
    description:
      "Issue templates, triage, review gates, lifecycle stages, deprecation + migration guides.",
  },
  {
    title: "Governance & lifecycle",
    description:
      "Who decides, how exceptions are recorded, semver expectations, changelog discipline.",
  },
  {
    title: "Tooling & pipelines",
    description:
      "Figma Token Studio → structured export → build scripts → packaged CSS / packages → CDN or package consumers.",
  },
  {
    title: "Metrics & adoption signals",
    description:
      "Usage proxies, support themes, migration burndown, accessibility checks — labeled honest when estimated.",
  },
];

export const aiArtifactTiles: ArtifactTile[] = [
  {
    title: "Machine-readable component contracts",
    description:
      "JSON-shaped fields for props, variants, accessibility, and usage — consumable by agents alongside human-facing docs.",
  },
  {
    title: "MCP retrieval layer",
    description:
      "Custom tools (e.g. get_component, get_tokens) that return scoped slices of the system instead of full codebases.",
  },
  {
    title: "Agent guardrails & trust model",
    description:
      "Skills, rules, and explicit anti-patterns; graduated trust from suggestions to draft PRs to limited auto-fix.",
  },
  {
    title: "Code Connect & Figma parity",
    description:
      "Figma-to-code tether, parity checks, and handoff exports so design props map to code APIs.",
  },
];

export const featuredCaseSlugs = [
  "aurora",
  "luminis",
  "multibrand",
  "adoption",
  "asset-gallery",
] as const;

export function getFeaturedCaseStudies() {
  return featuredCaseSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter(Boolean) as (typeof caseStudies)[number][];
}
