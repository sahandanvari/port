import type { WritingPost } from "./types";

/**
 * Seed writing — add more entries here or split into per-slug files later.
 */
export const writingPosts: WritingPost[] = [
  {
    slug: "ids-ai-2026-what-i-learned",
    title: "What I took home from IDS AI 2026",
    dek: "My third Into Design Systems in a row — and the first one where nobody asked if AI matters to design systems. The whole conference was about what to build so it works.",
    publishedAt: "2026-06-29",
    readTime: "8 min",
    tags: ["conference", "AI", "design systems", "MCP"],
    relatedWorkSlug: "mcp",
    sections: [
      {
        heading: "Three years, one shifting question",
        body: "I have attended Into Design Systems three years running — 2024, 2025, and now the 2026 AI edition. The arc is telling. Two years ago AI was a lightning-talk curiosity. Last year it was a track. This year it was the entire conference: two days, fourteen-plus sessions, and a hackathon where designers shipped working Figma plugins in 48 hours.\n\nThe question changed too. Nobody asked “will AI change design systems?” The sessions asked “what does a design system have to look like for AI to use it safely?” That reframing matters — it moves the work from speculation to infrastructure, which is where systems people are actually useful.",
      },
      {
        heading: "AI scales what you already have",
        body: "The line that stuck with me came from Jesse Gardner’s session on design systems as AI infrastructure: if your system is fragmented, AI accelerates fragmentation; if it is coherent, AI amplifies consistency. Probability is not correctness — for products serving millions, “likely right” is not a contract. The design system is the context layer that turns a guessing model into a constrained one.\n\nThat maps exactly to what I see in my own work. The value is not the chat box. It is tokens, component contracts, accessibility behavior, and governance rules encoded where a model can retrieve them — safety rails, not a UI library.",
      },
      {
        heading: "Onboard the model like a literal new hire",
        body: "Miro’s design system team told the most honest adoption story: six people serving 48+ product teams, who started treating AI as a new teammate that is enthusiastic, fast, extremely literal, and has zero tolerance for ambiguity. Their fixes were unglamorous — intent descriptions, “do not use for” guidance on tokens and icons, small reusable skills instead of giant prompts, and quality gates the AI cannot skip.\n\nDiana Wolosin’s benchmarking from Indeed backed it with data: the format you feed an LLM directly changes output quality, and structured JSON metadata beats prose documentation for machine consumption. Machine-readable does not replace human docs; it is the second audience your docs always needed.",
      },
      {
        heading: "Trust ladders, not blank checks",
        body: "Romina Kavcic’s agentic design systems talk gave the maintenance problem a shape I keep reusing: a self-healing loop — Observe → Detect → Suggest → Fix → Learn — with agents earning autonomy in steps. Intern suggests only. Junior drafts PRs for low-risk mechanical fixes. Senior auto-fixes narrow, reversible, test-covered changes.\n\nThis is governance work, not model work. If you cannot write down what an agent must never do, no amount of model quality saves you. I came home and tightened exactly that in my own guardrails: explicit allowed actions per level, and a “never do” list that lives next to the code.",
      },
      {
        heading: "Prototype for discovery, then burn the branch",
        body: "Nate Baldwin’s session reframed AI prototyping for me: the goal is discovery, not validation — surfacing hidden constraints before you commit to an architecture. His “branch and burn” habit (let the AI be sloppy on a disposable branch, keep a ten-bullet insights note, delete the code) and his four-step flow — context priming, detailed planning, plan refinement, implementation — are the most copyable process ideas I heard all week.\n\nIt works because it separates speed from commitment. AI makes exploration nearly free; the discipline is refusing to ship the exploration.",
      },
      {
        heading: "What lands on my backlog",
        body: "Concrete take-homes I am acting on: harden one library first (intent plus “do not use for” on the highest-traffic tokens and icons, then test whether an agent picks correctly); stand up a weekly drift report for one measurable violation class, like hard-coded values; keep skills small and testable instead of growing a mega-prompt; and score design-code parity instead of arguing about it — the FigmaLint demo took a component from 26 to 100 by binding hard-coded values to tokens, which proves parity is a number you can move.\n\nThe validating part: contracts, MCP retrieval, and guardrails — the bets I have been making in Aurora and Luminis — were the mainstream position on that stage. The gap between “has a design system” and “has an AI-ready design system” is now the interesting place to work.",
      },
    ],
  },
  {
    slug: "systems-builders-can-trust",
    title: "Design systems AI can build with",
    dek: "Consistency is not a vibe. It is contracts, tokens, and intent written down where both humans and models can read them.",
    publishedAt: "2026-03-17",
    readTime: "5 min",
    tags: ["design systems", "AI", "governance"],
    sections: [
      {
        heading: "What “AI-ready” actually means",
        body: "Teams hear “AI-ready” and picture a chat box in Figma. The useful version is quieter: a system where the rules are explicit enough that a model does not have to guess your spacing scale, your semantic colors, or which component owns accessibility for a label.\n\nThat is the same bar you want for a mid-level engineer joining on a Monday. The difference is scale. A model will touch more files, faster, with less shame. If the system is ambiguous, you get confident wrong output. If the system is legible, you get drafts you can review instead of rework from scratch.",
      },
      {
        heading: "The three surfaces that matter",
        body: "Tokens: names that describe intent, not paint swatches, with modes and themes that resolve predictably. Components: props and slots documented like an API, not like a poster. Docs and metadata: the “why” and “when not to” that never fit in a variable value.\n\nYou do not need perfection on day one. You need one place where each decision lives, and a pipeline that keeps production honest. When those exist, AI becomes an accelerator. When they do not, AI becomes a second team inventing a parallel UI.",
      },
      {
        heading: "How I work with that bar",
        body: "I ship pipelines that flatten complexity for consumers (one CSS surface, predictable names) while keeping the inner model maintainable for the team. I build docs sites that eat our own dogfood. I treat handoff gaps as product bugs, not etiquette issues.\n\nIf you are hiring for someone to make your system safe for agents and humans at the same time, that is the through-line in my case studies.",
      },
    ],
  },
  {
    slug: "ai-is-a-new-user",
    title: "AI is a new user of your design system",
    dek: "Same onboarding problem as a human hire: wrong icon, wrong token, wrong assumption — unless you teach intent, not just labels.",
    publishedAt: "2026-02-24",
    readTime: "6 min",
    tags: ["metadata", "MCP", "documentation"],
    sections: [
      {
        heading: "Names are not enough",
        body: "An icon called “text-style” that actually means “font family” will confuse a person. It will confuse a model faster, because the model reads the name and assumes the obvious mapping. The fix is not “prompt harder.” The fix is metadata: what it represents, what it is for, and what it must never stand in for.\n\nThe same rule hits tokens. Two backgrounds can both resolve to white. Without intent and guardrails, any automated consumer picks one and moves on. You already knew that was brittle for humans. AI makes the cost visible in pull requests instead of in quiet design debt.",
      },
      {
        heading: "Machine-readable is still human-readable",
        body: "Structured JSON for tools does not replace prose for people. It complements it. Humans skim for examples. Models parse for fields. The overlap is discipline: one source of truth, updated when the system changes.\n\nWhen documentation was treated as optional, the system could still limp along if a few experts carried the map in their heads. That map does not transfer to an agent. You either write it down in a consistent shape, or you accept drift at machine speed.",
      },
      {
        heading: "What I optimize for",
        body: "I prioritize descriptions that answer real questions: when to use a token, when not to, what broke last time someone improvised. I connect those fields to build output where possible so consumers never see the whole three-layer token graph unless they want to.\n\nIf your roadmap includes MCP, skills, or generated UI, this is the layer you fund first. The connector is only as good as what it can read.",
      },
    ],
  },
  {
    slug: "flatten-your-tokens",
    title: "Your developers should not have to understand your token graph",
    dek: "A flat CSS variable map can hide a sophisticated hierarchy. That is good API design, not secrecy.",
    publishedAt: "2025-10-07",
    readTime: "5 min",
    tags: ["tokens", "DX", "pipelines"],
    relatedWorkSlug: "token-pipeline",
    sections: [
      {
        heading: "Complexity belongs inside the pipeline",
        body: "Designers think in roles, relationships, and brand modes. Developers need to set a class, reference a variable, and move on. If they must learn your entire taxonomy before they can style a primary button, the system will lose to inline styles and ad hoc utilities.\n\nI treat the build step as the translation layer. Nested Token Studio structure can stay nested for authors. The artifact that ships is flat, predictable, and named for usage: semantic variables consumers can memorize.",
      },
      {
        heading: "Generated states are part of the contract",
        body: "Interaction is not a hand-wavy “make it darker.” It is a small set of named roles and deterministic rules for hover and active, including cases like transparent surfaces where naive color math fails.\n\nWhen generation lives in one script, you get parity across themes and brands. When it lives in individual engineers’ heads, you get five interpretations of “slightly darker.”",
      },
      {
        heading: "Why this helps AI-assisted coding",
        body: "Models do better when the file they read looks like the mental model you want: clear names, fewer indirections, fewer places to guess. Flat output does not mean shallow thinking upstream. It means you did the work so the consumer — human or model — does not pay your complexity tax on every line.",
      },
    ],
  },
  {
    slug: "dark-mode-is-accessibility",
    title: "Dark mode is an accessibility feature, not a product choice",
    dek: "I renamed light and dark to default and dark. A surface can be dark by nature and still owe users a real accessibility mode. Those ideas cannot collide.",
    publishedAt: "2025-11-04",
    readTime: "5 min",
    tags: ["tokens", "accessibility", "modes"],
    relatedWorkSlug: "token-pipeline",
    sections: [
      {
        heading: "Default is not a brightness claim",
        body: "Calling the baseline mode “light” teaches teams the wrong lesson: that default equals bright backgrounds. Some products are dark on purpose. Users can still enable dark mode at the OS level for vision comfort or low light. Your token model has to separate “what this product is” from “what the user needs.”\n\nI use default and dark in the token system. Default is the product’s primary presentation. Dark is the accessibility overlay that respects user preference without pretending every product starts from paper white.",
      },
      {
        heading: "Why inverted tokens exist",
        body: "Dark-native interfaces still need pairs that read correctly when focus rings, tooltips, and inverted sections appear. I generate inv- variants alongside base interaction roles so engineers do not hand-pick contrast per screen.\n\nWhen accessibility mode engages on a dark-native product, you do not double-invert into unreadable mud. The contract is explicit in variables, not argued in pull requests.",
      },
      {
        heading: "How this shows up in reviews",
        body: "The argument stops being “we are a dark app, we do not need dark mode.” It becomes a checklist: default tokens, dark mode tokens, inverted roles where required, and documentation that shows all three. That is design systems work in the same way keyboard order is: boring on paper, expensive when missing.",
      },
    ],
  },
  {
    slug: "token-naming",
    title: "A token name is a product decision",
    dek: "Calling something --primary or --brand or --action is not taste. It is a theory of what should remap when the business changes its mind.",
    publishedAt: "2025-09-09",
    readTime: "5 min",
    tags: ["tokens", "naming", "multibrand"],
    sections: [
      {
        heading: "Names encode behavior",
        body: "Semantic names describe intent, not paint. --primary is not “our blue.” It is “the color surfaces use when they need to signal primary action within this theme.” When marketing asks for a new accent, you remap aliases, not every component file.\n\nIf you name tokens after literal hues, you get correct previews in Figma and wrong incentives in code. People start using --blue-600 because it is “accurate,” and the system stops protecting you during a rebrand.",
      },
      {
        heading: "Where designers and developers disagree",
        body: "Designers often think in gradients, campaign art, and one-off illustrations. Developers think in props, state, and conditional CSS. Token names sit on the border. Resolving that border is facilitation work: workshops, examples, and a glossary that gives each side vocabulary the other can parse.\n\nI keep designer-facing definitions adjacent to developer-facing ones in docs. Same token, two explanations. Same spelling everywhere else.",
      },
      {
        heading: "What I default to",
        body: "Semantic roles first. Component-scoped tokens only when composition requires it. Document the exception path when marketing needs a time-boxed gradient that will not become a permanent role. Names are cheap to type and expensive to change; choose like you mean it.",
      },
    ],
  },
  {
    slug: "ds-not-component-library",
    title: "A design system is not a component library",
    dek: "Components are the visible tip. The system is tokens, pipelines, docs, office hours, starters, and the rules that keep production honest.",
    publishedAt: "2025-08-12",
    readTime: "6 min",
    tags: ["design systems", "operations", "governance"],
    sections: [
      {
        heading: "Why people confuse the two",
        body: "Components are easy to screenshot. Tokens look like spreadsheets. Pipelines look like scripts someone else maintains. So leadership asks for “the library status” and measures health in Figma counts.\n\nThat measurement is incomplete. A full library with no build step, no adoption path, and no contribution rules still fails in production. I talk about the system as infrastructure: the parts users never applaud but always depend on.",
      },
      {
        heading: "The inventory beside the library",
        body: "My work includes Python generators, doc sites, interaction tooling, audit spreadsheets, office hours, hackathon experiments like handoff audits, and starter kits. Each piece answers a different failure mode: drift, opacity, mistrust, or speed.\n\nWhen you hire a design system lead, ask which of those pieces they have shipped, not only how many buttons they drew.",
      },
      {
        heading: "How I communicate scope",
        body: "I show a simple map: authoring → build → publish → adopt → measure. Components sit in the middle, not at the start. Framing it this way keeps roadmaps honest when you need a quarter of pipeline work without a single new icon.",
      },
    ],
  },
  {
    slug: "zero-to-one",
    title: "The order you build a design system matters more than the parts",
    dek: "Inventory before tokens. Tokens before big governance theater. Dogfood before you preach. Sequence is survival.",
    publishedAt: "2025-07-15",
    readTime: "7 min",
    tags: ["process", "design systems", "strategy"],
    sections: [
      {
        heading: "Start with what already shipped",
        body: "Dan Mall’s collect → common → good framing is still the best argument against greenfield daydreams. I gathered what eight isolated designers had actually produced, then converged components from that reality. Starting from ideal states would have collapsed the first time a squad opened a legacy screen.\n\nInventory tells you where reuse already wants to happen. That is your adoption wedge.",
      },
      {
        heading: "What I resisted doing first",
        body: "Perfect taxonomy diagrams, council meetings with no artifacts, and a 40-page governance PDF nobody reads. Those feel like progress. They are procrastination.\n\nI shipped painful convergence in Figma, hooked tokens early, and let documentation emerge from what teams asked twice. Governance hardened once the library had users.",
      },
      {
        heading: "The payoff",
        body: "When sequence is right, metrics follow naturally: fewer duplicate primitives, faster answers in support, theme packages that do not require heroics. When sequence is wrong, you get a beautiful style guide browsing app that nothing in production imports.",
      },
    ],
  },
  {
    slug: "oklch-vs-hsl",
    title: "Aurora uses HSL. Luminis uses OKLCH. Here is why.",
    dek: "Two codebases, two color spaces, one rule: pick the math that matches how that system will be edited and consumed.",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    tags: ["color", "tokens", "Luminis"],
    sections: [
      {
        heading: "HSL fits deterministic generation",
        body: "Aurora generates hover and active steps from base roles using lightness shifts. HSL makes that logic easy to explain, test, and snapshot across six theme packages. Teams know what “plus ten” means in debugging.\n\nThe goal is predictability for a pipeline that serves multiple brands and stacks that expect CSS variables today, not a color-science flex.",
      },
      {
        heading: "OKLCH fits perceptual edits",
        body: "Luminis targets internal tools where designers nudge chroma and lightness across many neutrals. OKLCH keeps those nudges visually even across hues. The cost is more explanation in docs and stricter fallbacks for older stacks.\n\nSplitting by product line is honest. Pretending one color space is universally optimal is not.",
      },
      {
        heading: "What stays constant",
        body: "Semantic naming, mode separation, and generated companion variables. The space is an implementation detail until someone breaks contrast. Then it becomes a lecture worth giving once, with examples pinned in the repo.",
      },
    ],
  },
  {
    slug: "metrics",
    title: "How do you know your design system is working?",
    dek: "Adoption means different things to leadership, feature teams, and the systems group. I track a small set of honest signals and label each as measured, estimated, or proxy.",
    publishedAt: "2026-01-13",
    readTime: "6 min",
    tags: ["metrics", "adoption", "leadership"],
    sections: [
      {
        heading: "Three audiences, three definitions",
        body: "Leadership wants reduced time to rebrand or launch a surface. Feature teams want fewer blockers and clearer examples. The systems team wants fewer duplicate components and less reactive firefighting.\n\nOne score cannot satisfy all three. I publish a dashboard-style narrative with separate bullets, each tied to an artifact: search results, support tags, migration checklists, or audit burndown.",
      },
      {
        heading: "Proxies I actually use",
        body: "Repeat questions in Slack, doc searches, starter kit clones if tracked, PR comments about tokens, and audit tier closure counts. None is perfect. Together they show direction when headcount forbids a full analytics program.\n\nI call them proxies in writing so nobody mistakes correlation for science.",
      },
      {
        heading: "What I will not claim",
        body: "I do not invent precision where sampling was informal. If a number is directional, it stays labeled that way until finance and engineering sign off on a real instrument. Credibility compounds when your labels tell the truth.",
      },
    ],
  },
  {
    slug: "40-percent",
    title: "Figma captures about forty percent of what a developer needs",
    dek: "Disabled is not a variant. Type collides with keywords. Labels are not decorative text. These gaps became a hackathon tool called Propper.",
    publishedAt: "2026-02-03",
    readTime: "5 min",
    tags: ["handoff", "Figma", "tooling"],
    relatedWorkSlug: "propper",
    sections: [
      {
        heading: "Variants lie by omission",
        body: "A disabled button modeled only as a separate variant teaches the wrong contract. Code wants a boolean and a focus strategy. Design tools optimize for canvas speed, not runtime truth.\n\nWhen you model the gap explicitly, designers do not feel blamed. The tool’s bias becomes visible. That visibility is the start of a useful conversation.",
      },
      {
        heading: "Reserved words and prop names",
        body: "Naming a prop type in Figma is fast. Shipping it in TypeScript is not. The mismatch shows up late, usually as a rushed rename PR. I document a short “never use” list and safer alternates. Boring, effective.\n\nSame for slots versus flat text for labels. Accessibility belongs in the component API, not in a comment stuck to a frame.",
      },
      {
        heading: "From observation to prototype",
        body: "Propper, built in a focused hackathon window, checks prop completeness, token alignment, and suggests small fixes. The point is education-first output: why the gap matters, not only that it exists.\n\nIf your team is arguing about handoff, build the checklist into something visible. Opinions deflate when the mirror is specific.",
      },
    ],
  },
  {
    slug: "stakeholder-education",
    title:
      "Marketing wants to change one color. Here is what actually happens.",
    dek: "The token playground exists because a single swatch request touched dozens of surfaces. Demos beat slides for token literacy.",
    publishedAt: "2025-12-16",
    readTime: "4 min",
    tags: ["tokens", "stakeholders", "education"],
    sections: [
      {
        heading: "The request sounds small",
        body: "A campaign lead points at primary. They want it slightly greener. The work is not dragging a slider. It is regression-testing contrast on buttons, links, charts, focus rings, and partner embeds that inherit the same semantic role.\n\nIf you explain that only in words, you sound defensive. If you show it in a playground connected to real components, you sound like a partner.",
      },
      {
        heading: "What I built",
        body: "A live playground on the docs site runs real components against theme files. Stakeholders move a semantic role and see which surfaces re-skin. They stop imagining “just this button” because the UI proves otherwise.\n\nEducation becomes self-serve. You get fewer emergency escalations and cleaner prioritization when a change is truly global.",
      },
      {
        heading: "The takeaway",
        body: "Treat literacy tools as product work. They belong in the roadmap next to components. A leadership demo that takes five minutes pays off for quarters.",
      },
    ],
  },
  {
    slug: "governance-encoded",
    title: "Governance works when it lives in the repo, not in a meeting",
    dek: "Notion drifts. CI does not. I push rules into tokens, lint, templates, and changelogs so agents and humans read the same contract.",
    publishedAt: "2026-04-07",
    readTime: "6 min",
    tags: ["governance", "AI", "engineering"],
    sections: [
      {
        heading: "Meetings are a lossy format",
        body: "Decisions made verbally evaporate. The new hire and the model never attended anyway. I still run meetings for alignment, but the record is always code or structured docs tied to releases.\n\nWhen governance is encoded, reviews become comparisons against a stable rule, not a memory contest.",
      },
      {
        heading: "Layers that scale with agents",
        body: "Token rules set non-negotiables for color and spacing. Templates set doc shape. Changelogs set migration expectations. Skills or MCP connectors can point to those sources instead of improvising from a generic tutorial.\n\nThis is the same lesson conference talks stressed in 2026: retrieval is cheap; wrong context is expensive. Encode the foundations so they are not optional fetches.",
      },
      {
        heading: "What I watch for",
        body: "Over-fitting lint rules that block valid exceptions. Encode flexibility paths: snowflakes with owners, expirations, and promotion criteria. Governance without escape hatches becomes another shadow system built in frustration.",
      },
    ],
  },
  {
    slug: "prototype-for-discovery",
    title: "Prototype for the unknown, not for the sign-off",
    dek: "Disposable spikes teach constraints before architecture commitments. Keep the note, delete the branch.",
    publishedAt: "2026-04-21",
    readTime: "5 min",
    tags: ["process", "AI", "risk"],
    sections: [
      {
        heading: "Two different reasons to prototype",
        body: "Stakeholder prototypes sell a direction. Discovery prototypes stress-test assumptions. When AI tools compress build time, teams confuse the two and commit to the first shiny branch.\n\nI timebox spikes explicitly. The output is a short write-up: what we learned, what broke, what we will not ship. The code may be trash. The notes are not.",
      },
      {
        heading: "Pair spikes with a fixed review gate",
        body: "Human review before merge is still the contract. AI can explore fast; humans still own naming, accessibility, and release risk. I document the gate in the same place as coding standards so nobody pretends it was implied.\n\nThis matches what I heard from teams shipping agentic workflows: trust ladders beat blank checks.",
      },
      {
        heading: "Why this matters for systems",
        body: "Tokens and components are expensive to unwind. A cheap prototype that invalidates a wrong taxonomy saves six months of deprecation pain. Celebrate the throwaways. They are cheaper than production regrets.",
      },
    ],
  },
  {
    slug: "mcp-is-a-librarian",
    title: "MCP is a librarian, not a database dump",
    dek: "I kept seeing teams reach for more context when retrieval was the actual problem. Small, deterministic fetches beat a firehose.",
    publishedAt: "2026-05-05",
    readTime: "6 min",
    tags: ["MCP", "AI", "design systems"],
    relatedWorkSlug: "mcp",
    sections: [
      {
        heading: "The firehose mistake",
        body: "When a model underperforms, the reflex is often “give it more.” More files. More Storybook. More wiki exports. That is sometimes right. More often it is the wrong shape of information: everything at once, with no contract about what a component is allowed to do.\n\nI treat the design system as something you query, not something you paste. The model should receive the slice that answers the task — props, tokens, usage rules — not the entire repo history.",
      },
      {
        heading: "Why scope beats volume",
        body: "A full codebase context window can land in the tens of thousands of tokens before you have written a single instruction. That is expensive twice: in dollars and in attention. In one benchmark across eight documentation formats, JSON-shaped content used on the order of eighty percent fewer tokens than MDX-heavy hybrids — and at a thousand queries a month the cost gap was roughly twenty-five dollars versus a hundred twenty-five (IDS AI 2026). I use that order of magnitude as a sanity check whenever someone proposes “just embed the whole docs site.”\n\nThere is another ceiling worth naming: once context fills roughly half the window, quality tends to fall off — not because the model is lazy, but because signal gets crowded out. I plan retrieval assuming that cliff exists.",
      },
      {
        heading: "What I optimize for",
        body: "Deterministic retrieval for facts: tokens, component APIs, lint rules. Stochastic reasoning for composition and tradeoffs. If those two layers blur, you get confident wrong answers with receipts.\n\nMCP-style tools are how I keep the boundary clean. The librarian fetches the right book. The model argues about the chapter — not about whether the book exists.",
      },
    ],
  },
  {
    slug: "trust-ladders-agentic-design-systems",
    title: "Trust ladders for agentic design systems",
    dek: "Blank-check automation is not governance. You need a ladder — and a place to write down what the agent is not allowed to do.",
    publishedAt: "2026-05-19",
    readTime: "6 min",
    tags: ["governance", "AI", "automation"],
    sections: [
      {
        heading: "Three rungs, not one switch",
        body: "I default to three modes. Suggest-only when risk is high or confidence is low: comments, diffs, no direct writes. Draft pull requests when the task is bounded and reviewable. Limited auto-fix only when the change is reversible, test-covered, and narrow — token binding, lintable structure, renames with a map.\n\nHumans still own naming, accessibility, and release risk. The ladder is not bureaucracy. It is how you keep velocity without turning production into a roulette wheel.",
      },
      {
        heading: "Prompt cost is not abstract",
        body: "One hackathon team compared a vague two-minute prompt to a tight one for the same outcome and saw roughly a five-hundred-fold difference in token spend — plus the obvious quality gap (IDS AI 2026). I take that seriously: unclear instructions are a tax on every run.\n\nOn the support side, a team that wired MCP to their internal design system reported on the order of seventy to eighty percent less volume in Slack-style support after rollout — not because people stopped asking questions, but because answers became self-serve (IDS AI 2026). That is the product goal: fewer one-off explanations, more repeatable retrieval.",
      },
      {
        heading: "What I write down",
        body: "Guardrails live next to code: rules, skills, and an explicit “do not” list for agents — the patterns that look fine in a demo and fail in production. Planning still gets the bulk of the calendar; implementation stays small enough to review; tests and human gates close the loop.\n\nIf your org cannot describe what “safe” means, no model size fixes that. The ladder is the spec.",
      },
    ],
  },
  {
    slug: "components-as-data-storybook-gap",
    title: "Components as data: what agents need that Storybook does not tell them",
    dek: "Storybook is for eyes. Agents need fields — and a single fetch that returns the contract, not a repo grep.",
    publishedAt: "2026-05-26",
    readTime: "6 min",
    tags: ["metadata", "AI", "components"],
    relatedWorkSlug: "component-registry",
    sections: [
      {
        heading: "The gap",
        body: "A beautiful story is not a schema. Designers and engineers can infer intent from layout. A model infers from strings on a page — and inference is where drift starts.\n\nI want one structured record per component: props, variants, accessibility obligations, when to use it, when not to. That record can feed docs, linters, and retrieval tools. Storybook stays the canvas; the contract is the source.",
      },
      {
        heading: "What good indexing looks like",
        body: "Split parsing by concern — accessibility, implementation, localization, design language — then merge into a single JSON-shaped artifact per component. In one public-sector style setup, regenerating the code index took on the order of ten seconds and produced three artifacts: a library index, a usage graph, and token relationships (IDS AI 2026). That is the shape of “components as data” I aim for: small files, fast regen, explicit links.\n\nCode Connect fits here as mail merge: bind Figma properties to code props so “what you see” and “what ships” share one mapping instead of two oral histories.",
      },
      {
        heading: "Parity is measurable",
        body: "One audit surfaced fifty-one hard-coded token usages out of sixty-nine in a sample — then automated fixes and linting took a parity score from twenty-six to one hundred (IDS AI 2026). I cite that not as a universal benchmark for every org, but as proof that “how bound are we to tokens?” is a question you can score.\n\nIf agents are consumers, parity is part of accessibility. Wrong token, wrong contrast, wrong component — all look like small slips until they compound. Fields and scores turn slips into failing tests.",
      },
    ],
  },
  {
    slug: "storybook-skeleton-figma-copy",
    title: "Figma is the copy, Storybook is the skeleton",
    dek: "We ended pixel-matching debates by naming a precedence rule: the matched story defines chrome; Figma supplies content and copy.",
    publishedAt: "2026-06-09",
    readTime: "4 min",
    tags: ["Figma", "Storybook", "governance"],
    relatedWorkSlug: "component-registry",
    sections: [
      {
        heading: "The fight we were tired of having",
        body: "Every Figma-to-code review became a measuring contest: padding, radius, centering, font size. Designers defended the frame. Engineers defended the story. Both were right about different things.\n\nThe rule we encoded: Storybook is the skeleton — structure, alignment, spacing, drawer width, footer layout come from the matched story. Figma drives copy and content. Do not add className overrides to match Figma's visual choices unless the product brief explicitly asks for pixel parity.",
      },
      {
        heading: "Why this helps humans and agents",
        body: "Humans stop re-litigating chrome on every screen. Agents stop pasting Figma MCP output as production code. The registry's figma-interpretation global rule makes the precedence machine-readable — a blocker, not a suggestion.\n\nIt is not anti-Figma. Figma remains where we explore brand and language. Code remains where we ship behavior. The rule just names who owns which layer.",
      },
    ],
  },
  {
    slug: "one-skill-source-three-agents",
    title: "One skill source, three agents",
    dek: "Cursor, Claude, and Copilot read the same canonical skills — synced from one folder so agent guidance never drifts.",
    publishedAt: "2026-06-16",
    readTime: "5 min",
    tags: ["AI", "tooling", "governance"],
    relatedWorkSlug: "mcp",
    sections: [
      {
        heading: "The duplication trap",
        body: "Teams wire AI assistants one tool at a time. Cursor gets rules. Claude gets skills. Copilot gets instructions. Within a month the three disagree on imports, token usage, and which component to pick.\n\nI moved the source of truth to `.agents/skills/` and `.agents/agents/` with a sync script that generates tool-specific copies. Change the canonical file once; run sync; every environment updates.",
      },
      {
        heading: "Distribution beyond the repo",
        body: "The Claude Code plugin packages the same skills for install outside the monorepo. Starter kits ship Cursor rules and Copilot instruction mirrors so consuming apps inherit the same guardrails.\n\nForty-two skills sounds like a lot until you realize each one answers a narrow question: which component, which token, which pattern, which review gate. Agents fetch the librarian's shelf — they do not read the whole library at once.",
      },
    ],
  },
];

export function getWritingPost(slug: string): WritingPost | undefined {
  return writingPosts.find((p) => p.slug === slug);
}
