/**
 * Vercel Serverless Function — OpenAI proxy for portfolio navigation assistant.
 * Set OPENAI_API_KEY in Vercel project settings (Environment Variables).
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

const SYSTEM_PROMPT = `You are a concise navigator for Sahand Anvari's portfolio site.
Site owner: Sahand Anvari, Design System Lead — AI-ready infrastructure. Tone: professional, direct, no hype.

Valid routes (use exact paths):
- / — Home (hero, overview, case studies list, writing preview, about, contact)
- /work/aurora — Aurora design system (34 components, docs, tokens)
- /work/luminis — Luminis internal system (frozen shadcn, Wave pilot, starters)
- /work/token-pipeline — Python token build, flatten_tokens, dual output
- /work/interaction-tokens — Interaction roles, hover/active generation, default vs dark accessibility
- /work/multibrand — Multibrand theming, theme.css swap, inventory tie-in
- /work/adoption — Adoption, docs, starter kits, office hours
- /work/asset-gallery — Enterprise inventory (13 repos, 510 items, T0–T4) + AI gallery, semantic search, dedupe
- /work/propper — Hackathon handoff audit prototype
- /work/starter-kit — Wave pilot to starter kit and Cursor rules
- /writing — Writing index
- /writing/systems-builders-can-trust — Design systems AI can build with
- /writing/ai-is-a-new-user — AI as a new user of the system
- /writing/flatten-your-tokens — Flat token output for developers
- /writing/dark-mode-is-accessibility — Default vs dark accessibility framing
- /writing/token-naming — Semantic token naming
- /writing/ds-not-component-library — System vs library
- /writing/zero-to-one — Order of operations building a DS
- /writing/oklch-vs-hsl — Color spaces across codebases
- /writing/metrics — How to measure a design system
- /writing/40-percent — Figma handoff gaps / Propper
- /writing/stakeholder-education — Token playground / marketing asks
- /writing/governance-encoded — Governance in repo vs meetings
- /writing/prototype-for-discovery — Spikes vs sign-off prototypes
- /writing/mcp-is-a-librarian — MCP as scoped retrieval vs context dumps
- /writing/trust-ladders-agentic-design-systems — Guardrails, trust tiers, prompt cost
- /writing/components-as-data-storybook-gap — Machine-readable contracts, indexing, parity
- /design-systems — Design systems landing (scope, artifacts, AI-ready infrastructure section, case study links)
- /resume — Resume and experience timeline
- /artifacts — Artifacts / screenshot gallery placeholders

Rules:
- Answer in first person only when describing Sahand's work; otherwise neutral navigator voice.
- If the user wants to navigate, set "route" to a path above or null if none.
- Keep "message" to 1–3 short sentences.
- No gambling, sportsbook, or client-specific confidential names.
- Respond ONLY with valid JSON: {"message": string, "route": string | null}

Examples:
User: go home → {"message":"Opening the home page.","route":"/"}
User: tell me about Sahand → {"message":"Sahand leads design systems work spanning Aurora, Luminis, token pipelines, and adoption. The About section on the home page has the narrative.","route":"/#about"}
User: aurora case study → {"message":"Here is the Aurora case study.","route":"/work/aurora"}
`;

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed", route: null });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(503).json({
      message:
        "Chat is offline: add OPENAI_API_KEY in Vercel env vars to enable this assistant.",
      route: null,
    });
    return;
  }

  let body: { query?: string };
  try {
    body =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    res.status(400).json({ message: "Invalid JSON body.", route: null });
    return;
  }

  const query = typeof body.query === "string" ? body.query.trim() : "";
  if (!query) {
    res.status(400).json({ message: "Missing query.", route: null });
    return;
  }

  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: query },
          ],
          temperature: 0.3,
          max_tokens: 350,
        }),
      },
    );

    if (!openaiRes.ok) {
      const errText = await openaiRes.text();
      console.error("OpenAI error", openaiRes.status, errText);
      res.status(502).json({
        message: "The assistant is temporarily unavailable. Try again later.",
        route: null,
      });
      return;
    }

    const data = (await openaiRes.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const raw = data.choices?.[0]?.message?.content?.trim() ?? "";

    let parsed: { message?: string; route?: string | null };
    try {
      parsed = JSON.parse(raw) as { message?: string; route?: string | null };
    } catch {
      res.status(502).json({
        message: "Could not parse assistant response.",
        route: null,
      });
      return;
    }

    const message =
      typeof parsed.message === "string"
        ? parsed.message
        : "Here is what I found.";
    let route: string | null =
      typeof parsed.route === "string" ? parsed.route : null;
    if (route === "") route = null;

    res.status(200).json({ message, route });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Something went wrong. Try again in a moment.",
      route: null,
    });
  }
}
