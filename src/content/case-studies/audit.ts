import type { CaseStudy } from "./types";

export const audit: CaseStudy = {
  slug: "audit",
  title: "Enterprise multibrand audit",
  workRole: "Design system lead",
  teaser:
    "I cataloged 510 brand-aware elements across 13 repositories, tiered 305 actionable items, and gave design and platform a shared roadmap before multibrand scaled.",
  metrics: [
    { label: "Repositories", value: "13" },
    { label: "Elements cataloged", value: "510" },
    { label: "Actionable items", value: "305" },
    { label: "CSS approaches", value: "6" },
  ],
  atAGlance: {
    role: "Design system lead — audit program lead",
    scope:
      "Inventory methodology, T0–T4 classification, phased roadmap, stakeholder comms",
    team: "Design system + platform + feature team representatives",
    timeline: "Concentrated crawl + synthesis; ongoing burn-down by tier",
    platforms: "Mixed frontend stacks + shared CDN + CMS touchpoints",
    outcomes:
      "Single inventory source; prioritized fixes; enabled multibrand and token programs to sequence by tier",
  },
  artifacts: [
    {
      id: "sheet",
      label: "Inventory export",
      blurb:
        "Spreadsheet of items with repo, tier, owner suggestion — private.",
      isPrivate: true,
    },
    {
      id: "slides",
      label: "Readout deck",
      blurb:
        "Executive summary + engineering appendix with exemplar screenshots.",
      isPrivate: true,
    },
    {
      id: "cms",
      label: "Content map",
      blurb: "T4 items flagged for CMS migration vs code-owned copy.",
      isPrivate: true,
    },
    {
      id: "assets",
      label: "Asset matrix",
      blurb: "Duplicate logo/favicon instances with canonical CDN target.",
      isPrivate: true,
    },
    {
      id: "metrics",
      label: "Burndown",
      blurb: "Directional tracking of Tier 1 styling fixes per sprint (proxy).",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Crawl scripts",
      blurb:
        "Search rules + manual verification notes — share sanitized on request.",
      isPrivate: true,
    },
  ],
  relatedWork: ["multibrand", "asset-gallery", "adoption"],
  sections: [
    {
      heading: "Context",
      body: "No one had a full map of brand-facing surface area across a growing multi-repo footprint. Launching another brand without that map would have multiplied rework. I led a systematic audit before scaling theming work to twelve packages.",
    },
    {
      heading: "Method and baseline",
      body: "Repo-by-repo pass with automated search plus manual validation. Classification: styling, assets, content, configuration, code patterns. Tiering T0 (token-ready) through T4 (CMS/legal content).\n\nBaseline: 510 items found, 305 requiring action, six parallel CSS systems documented. That vocabulary let design and engineering argue about priority with IDs, not opinions.",
    },
    {
      heading: "Outcomes",
      body: "Shared roadmap with measurable slices per tier. Token and CDN programs ran in parallel once tiers were agreed. Tier 1 styling burndown fed directly into multibrand rollout sequencing and adoption quickstarts.",
    },
    {
      heading: "Reflections",
      body: "Early reports were too verbose for execs — a one-page risk summary fixed uptake. Next: continuous crawl in CI with allowlists so inventory does not rot between brand launches.",
    },
  ],
};
