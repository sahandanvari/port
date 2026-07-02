import type { CaseStudy } from "./types";

export const assetGallery: CaseStudy = {
  slug: "asset-gallery",
  title: "AI-powered asset gallery",
  teaser:
    "A crawler inventories creative files across thirteen repositories, describes them with Azure-hosted models, and exposes semantic search plus duplicate detection before multibrand consolidation.",
  workRole: "Design system lead",
  metrics: [
    { label: "Repos crawled", value: "13" },
    { label: "Search", value: "Semantic" },
    { label: "LLM backend", value: "Azure GPT" },
    { label: "Deduping", value: "Cross-repo" },
  ],
  atAGlance: {
    role: "Design system lead — tooling + asset operations",
    scope:
      "Crawler, description pipeline, search UX, dedupe reporting, ties to enterprise audit",
    team: "Design system + platform engineering + marketing ops stakeholders",
    timeline: "Iterative versions; extended as audit and multibrand programs matured",
    platforms: "Internal web app, cloud inference, repository integrations",
    outcomes:
      "Findable assets by meaning, not filename; duplicate matrix informed CDN consolidation and Tier-2 audit closure",
  },
  artifacts: [
    {
      id: "ui",
      label: "Gallery UI",
      blurb: "Search, filters, previews, provenance per repo path.",
      isPrivate: true,
    },
    {
      id: "crawler",
      label: "Crawler",
      blurb: "Scheduled scans across registered repositories.",
      isPrivate: true,
    },
    {
      id: "prompts",
      label: "Prompting",
      blurb: "Structured prompts for consistent, reviewable descriptions.",
      isPrivate: true,
    },
    {
      id: "audit",
      label: "Audit link",
      blurb: "Export feeds Tier-2 asset work in the 510-item enterprise inventory.",
      isPrivate: true,
    },
    {
      id: "privacy",
      label: "Governance",
      blurb:
        "Access controls and PII-safe handling for internal marketing art.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "Service + UI repositories (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["audit", "multibrand", "aurora"],
  sections: [
    {
      heading: "Context",
      body: "Creative assets were scattered across thirteen repositories — the same logo under multiple paths. Teams uploaded new files because search was filename-driven. Multibrand work needed a map of what existed before consolidating to CDN-per-asset and twelve theme packages.",
    },
    {
      heading: "What I built",
      body: "Pipeline: crawl → dedupe hash → Azure GPT caption → structured record → semantic index. UI: grid/list views, duplicate badges, repo path provenance. Descriptions are hints for humans — canonical rows require owner approval.\n\nExports generate CSV slices for the audit workbook so Tier-2 asset items close with receipts, not memory.",
    },
    {
      heading: "Outcomes",
      body: "Directional: faster answers to “which file is canonical?”; reduced duplicate uploads in tracked folders; audit Tier-2 items closed with gallery evidence; multibrand prep spent less time on asset archaeology.",
    },
    {
      heading: "Reflections",
      body: "Early prompts hallucinated fine print — constrained templates and spot checks fixed trust. Next: embedding similarity for “almost the same” artwork, not just byte-identical duplicates.",
    },
  ],
};
