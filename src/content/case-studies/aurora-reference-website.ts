import type { CaseStudy } from "./types";

export const auroraReferenceWebsite: CaseStudy = {
  slug: "aurora-reference-website",
  title: "The system's front door",
  teaser:
    "A living prototype built from the same components it documents — Design and Develop tabs, token pages, and an Interaction Builder that ships on Aurora, not beside it.",
  workRole: "Design system lead",
  heroMedia: {
    src: "/work/aurora-reference/front-door.png",
    alt: "Aurora reference site — component gallery, theme switcher, and search as the system's front door",
    fit: "cover",
  },
  metrics: [
    { label: "Doc surface", value: "Dual tab" },
    { label: "Dogfooding", value: "100%" },
    { label: "Live theming", value: "Yes" },
    { label: "Aurora releases", value: "98 tracked" },
  ],
  atAGlance: {
    role: "Design system lead — documentation product owner",
    scope:
      "Aurora reference site (apps/aurora-website): component gallery, token reference, patterns, Interaction Builder, release notes",
    team: "Design system core; design partners for copy and anatomy; frontend for site shell",
    timeline: "Shipped alongside Aurora library growth; continuous release with components",
    platforms: "React, Vite, @ppt/aurora, Tailwind v4",
    outcomes:
      "Single front door for Aurora; designers and engineers share one URL; site breaks when components break — intentional quality gate",
  },
  artifacts: [
    {
      id: "site",
      label: "Reference site",
      blurb: "Production docs app at internal URL; Design/Develop tabs per component.",
      isPrivate: true,
    },
    {
      id: "builder",
      label: "Interaction Builder",
      blurb: "Live preview of generated hover/active values per theme.",
      isPrivate: true,
    },
    {
      id: "glossary",
      label: "Glossary",
      blurb: "Shared vocabulary with designer and developer definitions where they differ.",
      isPrivate: true,
    },
    {
      id: "themes",
      label: "Theme switcher",
      blurb: "Live swap across twelve theme packages without leaving the page.",
      isPrivate: true,
    },
    {
      id: "releases",
      label: "Release notes",
      blurb: "Consumer-facing changelog aligned to ninety-eight published releases.",
      isPrivate: true,
    },
    {
      id: "code",
      label: "Code",
      blurb: "apps/aurora-website source (private).",
      isPrivate: true,
    },
  ],
  relatedWork: ["aurora", "mcp", "interaction-tokens"],
  sections: [
    {
      heading: "Documentation that eats its own cooking",
      body: "Storybook alone was not enough. Feature teams wanted a narrative: why this token exists, when to use this pattern, what breaks if you skip the empty state. Designers wanted anatomy and do-not examples without opening dev tools. Engineers wanted copy-paste imports that match the version they ship.\n\nI built the Aurora reference site as a product, not a sidecar. Every page renders real @ppt/aurora components. If a button variant regresses, the docs site fails visually before consumers file tickets. That dogfooding choice was deliberate pain — and it kept the library honest through ninety-eight releases.",
      images: [
        {
          label: "Reference site home with theme switcher and component search",
          aspect: "wide",
          src: "/work/aurora-reference/front-door.png",
          alt: "Aurora reference site — component gallery, theme switcher, and search as the system's front door",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Design tab and Develop tab",
      body: "Each component page splits into two audiences on purpose. The Design tab shows anatomy, variant matrix, spacing notes, and do-not examples — the things a designer needs in a review. The Develop tab shows imports, props tables, code samples, and accessibility expectations — the things an engineer needs at midnight.\n\nThey share the same live preview instance so neither side argues about a stale screenshot. When we add a variant, both tabs update in the same release train. Breaking changes ship with migration notes on the Develop tab before the semver tag lands.",
      images: [
        {
          label: "Design tab — anatomy, variants, and do-not examples",
          aspect: "pair",
          src: "/work/aurora-reference/design-tab.png",
          alt: "Component documentation Design tab with anatomy and variant matrix",
          fit: "contain",
        },
        {
          label: "Develop tab — imports, props, and code samples",
          aspect: "pair",
          src: "/work/aurora-reference/develop-tab.png",
          alt: "Component documentation Develop tab with props table and code samples",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Tokens and Interaction Builder",
      body: "Token pages document semantic roles, not hex archaeology. Roughly forty authored color decisions per brand sit behind the scenes, excluding alpha ramp generation. Twelve interaction roles drive hover and active generation, with inverse inv- variants for dark-native products.\n\nThe Interaction Builder page lets anyone preview generated states before filing a change. I used it in workshops with designers who still asked for slightly darker hover. The builder shows the contract output, not an opinion. That reduced back-and-forth in Figma comments and gave engineers a URL to cite in PR review.",
    },
    {
      heading: "Living prototype, not a screenshot museum",
      body: "Marketing sites for design systems often freeze PNGs and drift within a quarter. I refused that. The reference site is a Vite app that imports the same package consumers import. Theme switching loads real theme.css bundles from the twelve theme packages. Pattern pages compose multiple components the way production apps do — filters above data layouts, confirmation flows with correct action order.\n\nWhen customer-facing products shipped Aurora in production, the reference site was where squads pointed new hires first. It was the system's front door: enter here, learn the vocabulary, leave with working imports.",
      images: [
        {
          label: "Pattern page composing multiple Aurora components with live theme swap",
          aspect: "wide",
          src: "/work/graphics/aurora-reference/live-pattern.svg",
          alt: "Illustration of a pattern page composing multiple components with live theme switching",
          fit: "contain",
        },
      ],
    },
    {
      heading: "Release notes as a consumer product",
      body: "Ninety-eight releases meant ninety-eight chances to break trust. Release notes on the site mirror the consumer message: what changed, who is affected, migration steps for breaking API shifts. I write them for the engineer merging on Monday, not the system team celebrating on Friday.\n\nLinking docs to semver removed the where do I see what shipped question. MCP tools can point to the same pages so agents cite current props, not training-data guesses.",
    },
    {
      heading: "MCP and the reference site together",
      body: "MCP resolves Figma frames to Storybook stories; the reference site is where humans verify the match. When resolve_from_figma returns a story ID, the developer opens the corresponding reference page to confirm copy, footer layout, and action order. The three-role workflow assumes both surfaces stay aligned — registry for machines, reference site for eyes.\n\nSkills document the workflow explicitly: Figma equals what and copy; Storybook and reference site equal how and chrome; delta table equals what you changed and why.",
    },
    {
      heading: "Outcomes and maintenance cost",
      body: "Directional wins: shared URL in onboarding; fewer is this variant documented threads; design review comments linking to do-not examples instead of Slack screenshots. Cost: every component PR potentially touches the site; we budget that time in definition of done.\n\nTradeoff: the site is slower to fancy than a static site generator with cached images. Win: truth. What failed early: trying to document components we had not shipped in the package yet. Fixed by gating reference pages on stable exports. Next: usage analytics on which Develop tab sections correlate with fewer support tickets.",
    },
  ],
};
