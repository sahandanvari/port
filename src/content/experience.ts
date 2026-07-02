export interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  type: "full-time" | "contract" | "freelance";
  period: string;
  bullets: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Pacific Programming & Tech Inc.",
    location: "Vancouver, Canada",
    role: "Product Designer / Design Systems Lead",
    type: "full-time",
    period: "Sep 2022 — Present",
    bullets: [
      "Lead the design system team, owning two design systems end to end — Aurora for customer-facing products and Luminis for internal apps — including their management, maintenance, and governance",
      "Aurora: designed from scratch — identified the paradigms already living in the products, converted designers' decisions into a systematic language, and shipped it first as a Figma library, then as React components",
      "Aurora: scaled it into a multi-brand system — design tokens, production components, Storybook, a composition-patterns registry, and a reference website documenting tokens, theming, and patterns — with a white-label token pipeline (Figma → structured JSON → generated theme packages) consumed across React, Vue, and Razor stacks",
      "Luminis: built the internal-apps system as a shadcn/ui fork so teams and AI tools can build with it directly using familiar conventions, extended with complex application components like the DataView table and the app sidebar layout",
      "Made both systems agentic and AI-ready: machine-readable component contracts (props, variants, accessibility) with MCP retrieval, plus agent guardrails that keep AI-generated UI from drifting from production",
      "Crafted the design-to-development handover process — starter kits, office hours, and contribution guidelines adopted across design and engineering",
      "Led the design team on the redesign of a massive CRM application for a 700-agent call center, delivering a user-friendly product that met the center's operational needs",
      "Established accessibility tooling and guidelines, and used user-testing platforms and analytics to drive data-driven design decisions",
    ],
  },
  {
    company: "Lomio Travel",
    location: "Istanbul, Türkiye",
    role: "Product Design Lead",
    type: "full-time",
    period: "Aug 2021 — Sep 2022",
    bullets: [
      "Led the design team on a new travel-booking product end to end — from ideation to launch — in a highly competitive market",
      "Conducted 200+ interviews with potential users, refining the design solution based on their feedback",
      "Educated and guided the team toward consistent, scalable components, laying the groundwork for a design system launch post-release",
    ],
  },
  {
    company: "Türksat Satellite Communications",
    location: "Istanbul, Türkiye",
    role: "User Experience Designer",
    type: "contract",
    period: "Jan 2020 — Sep 2021",
    bullets: [
      "Redesigned the four core websites of Turkey's leading satellite company around a newly redesigned brand identity, keeping core functionality intact",
      "Won 2nd place for best corporate website design 2020 (Altın Örümcek awards) with the Türksat corporate website, turksat.com.tr",
      "Kept the brand identity consistent across all product lines while improving the overall user experience",
    ],
  },
  {
    company: "Green Wing Co. W.L.L",
    location: "Istanbul, Türkiye",
    role: "Design Manager",
    type: "full-time",
    period: "Jan 2018 — Sep 2021",
    bullets: [
      "Managed and led a design team of 8 building e-commerce websites and a mobile app for a multi-brand fashion company — delivered on time, on budget, and to quality standards",
      "Leveraged user-behavior data from testing and analytics to improve the user experience and drive conversions",
    ],
  },
];
