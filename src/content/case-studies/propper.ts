import type { CaseStudy } from "./types";

export const propper: CaseStudy = {
  slug: "propper",
  title: "Propper — handoff audit tool",
  teaser:
    "Built in forty-eight hours at an Into Design Systems hackathon. Figma shows a slice of what engineering needs — Propper checks prop completeness, token alignment, and teaches why gaps matter.",
  workRole: "Hackathon lead / product concept",
  metrics: [
    { label: "Build window", value: "48 hours" },
    { label: "Event", value: "Into DS hackathon" },
    { label: "Coverage gap", value: "~60%" },
    { label: "Check tracks", value: "3" },
  ],
  atAGlance: {
    role: "Concept + team lead — hackathon prototype",
    scope:
      "Problem framing, audit rules, education-first UX, MCP-style integration spike",
    team: "Cross-functional hackathon squad (design + engineering)",
    timeline: "Two-day build; prototype status afterward",
    platforms: "Figma plugin / MCP-adjacent workflow (prototype)",
    outcomes:
      "Working demo that quantifies handoff gaps and teaches structural mismatches between Figma and TypeScript",
  },
  artifacts: [
    {
      id: "prototype",
      label: "Prototype",
      blurb: "Demo UI with sample audit report (private / event repo).",
      isPrivate: true,
    },
    {
      id: "rules",
      label: "Rule set",
      blurb: "Prop completeness, reserved words, token trace checks.",
      isPrivate: true,
    },
    {
      id: "edu",
      label: "Copy deck",
      blurb: "Education-first strings explaining each finding.",
      isPrivate: true,
    },
    {
      id: "figma",
      label: "Figma file",
      blurb: "Test components with intentional gaps for demo.",
      isPrivate: true,
    },
    {
      id: "recording",
      label: "Demo",
      blurb: "Short walkthrough recording (if shareable).",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "Hackathon repository (share on request).",
      isPrivate: true,
    },
  ],
  relatedWork: ["aurora", "adoption", "audit"],
  sections: [
    {
      heading: "Context",
      body: "Handoff breaks for predictable reasons: props that are variants in Figma but booleans in code, names that collide with language keywords, labels drawn as text instead of composable accessible primitives. I pitched Propper at Into Design Systems to make those gaps visible and teach while it checks — not shame designers.",
    },
    {
      heading: "What we built in 48 hours",
      body: "Three check tracks: prop completeness, reserved-word collisions, token trace (fills and strokes must bind to variables, not one-off hex). Demo focused on button and input families — enough complexity to show modeling mismatches without drowning judges in false positives.\n\nEach finding pairs an explanation with a suggested mapping. Disabled as a variant matrix → boolean isDisabled, with a note about ARIA drift.",
    },
    {
      heading: "Outcomes",
      body: "Hackathon outcome: peer validation, a reusable narrative for why “Figma completeness” is the wrong metric, and a backlog of rules if productionized. Education strings mattered as much as detection — audits without teaching create defensiveness.",
    },
    {
      heading: "Reflections",
      body: "Forty-eight hours meant depth over breadth. Next if extended: connect suggestions to the same flattened token output Aurora ships so fixes reference real --primary names, not illustrative placeholders.",
    },
  ],
};
