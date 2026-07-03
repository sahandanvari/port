import type { CaseStudy } from "./types";

export const assetGallery: CaseStudy = {
  slug: "asset-gallery",
  title: "AI-powered asset gallery",
  teaser:
    "A thirteen-repo crawl cataloged 510 brand-aware elements and powered an AI gallery — semantic search, duplicate detection, and tiered exports that gave design and platform a shared roadmap before multibrand scaled.",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/asset-gallery/gallery-ui.png",
    alt: "AI asset gallery — semantic search, filter chips, and asset grid with provenance",
    fit: "cover",
  },
  metrics: [
    { label: "Repositories", value: "13" },
    { label: "Elements cataloged", value: "510" },
    { label: "Actionable items", value: "305" },
    { label: "Search", value: "Semantic" },
  ],
  atAGlance: {
    role: "Design system lead — inventory program + asset tooling",
    scope:
      "Repo crawl, T0–T4 classification, gallery UI, Azure captioning, dedupe matrix, audit exports",
    team: "Design system + platform engineering + marketing ops stakeholders",
    timeline:
      "Concentrated crawl and synthesis; gallery iterated as multibrand and burn-down matured",
    platforms:
      "Internal web app, cloud inference, repository integrations, shared audit workbook",
    outcomes:
      "Single inventory source; findable assets by meaning; Tier-2 closures with gallery evidence; prioritized roadmap for token and CDN programs",
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
      id: "sheet",
      label: "Inventory export",
      blurb:
        "Spreadsheet of items with repo, tier, owner suggestion — private.",
      isPrivate: true,
    },
    {
      id: "assets",
      label: "Asset matrix",
      blurb: "Duplicate logo and favicon instances with canonical CDN target.",
      isPrivate: true,
    },
    {
      id: "prompts",
      label: "Prompting",
      blurb: "Structured prompts for consistent, reviewable descriptions.",
      isPrivate: true,
    },
    {
      id: "metrics",
      label: "Burndown",
      blurb: "Directional tracking of Tier 1 styling fixes per sprint (proxy).",
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
      label: "Crawl scripts",
      blurb:
        "Search rules, gallery service, and manual verification notes — share sanitized on request.",
      isPrivate: true,
    },
  ],
  relatedWork: ["multibrand", "adoption", "aurora"],
  sections: [
    {
      heading: "Context",
      body: "No one had a full map of brand-facing surface area across a growing multi-repo footprint — creative files scattered under duplicate paths, filename search that failed, and six parallel CSS systems nobody had inventoried together. Launching another brand without that map would have multiplied rework. I led a systematic crawl before scaling theming work to twelve packages, then built a gallery so teams could search by meaning and close inventory rows with evidence.",
    },
    {
      heading: "Inventory and classification",
      body: "Repo-by-repo pass with automated search plus manual validation. Classification covered styling, assets, content, configuration, and code patterns. Tiering ran T0 (token-ready) through T4 (CMS and legal content).\n\nBaseline: 510 items found, 305 requiring action, six CSS approaches documented. That vocabulary let design and engineering argue about priority with IDs, not opinions. The same crawl registry feeds the gallery index — assets are not a separate shadow inventory.",
    },
    {
      heading: "What I built",
      body: "Pipeline: crawl → dedupe hash → Azure GPT caption → structured record → semantic index. UI: grid and list views, duplicate badges, repo path provenance. Descriptions are hints for humans — canonical rows require owner approval.\n\nExports generate CSV slices for the audit workbook so Tier-2 asset items close with receipts, not memory. Early executive readouts were too verbose; a one-page risk summary fixed uptake.",
      images: [
        {
          label: "Asset gallery UI with semantic search and filter chips",
          aspect: "wide",
          src: "/work/asset-gallery/gallery-ui.png",
          alt: "AI asset gallery — semantic search, filter chips, and asset grid with provenance",
          fit: "contain",
        },
        {
          label: "Crawl → describe → index pipeline",
          aspect: "figure",
          src: "/work/graphics/asset-gallery/pipeline.svg",
          alt: "Flow diagram of asset crawl, description, and semantic indexing pipeline",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Outcomes",
      body: "Shared roadmap with measurable slices per tier. Token and CDN programs ran in parallel once tiers were agreed. Directional wins: faster answers to “which file is canonical?”; reduced duplicate uploads in tracked folders; Tier-2 items closed with gallery evidence; multibrand prep spent less time on asset archaeology; Tier 1 styling burndown fed rollout sequencing.",
    },
    {
      heading: "Reflections",
      body: "Early prompts hallucinated fine print — constrained templates and spot checks fixed trust. Next: embedding similarity for “almost the same” artwork, not just byte-identical duplicates; continuous crawl in CI with allowlists so inventory does not rot between brand launches.",
    },
  ],
};
