import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CHAT_EXAMPLES } from "@/lib/chatContext";
import { usePortfolioChrome } from "@/context/PortfolioChromeContext";

export function ChatPanel() {
  const navigate = useNavigate();
  const { chatOpen: open, setChatOpen: setOpen } = usePortfolioChrome();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [route, setRoute] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function followRoute(path: string) {
    const [pathname, hashPart] = path.split("#");
    const base = pathname && pathname.length > 0 ? pathname : "/";
    navigate(base);
    if (hashPart) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hashPart);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.location.hash = hashPart;
      });
    }
  }

  async function submit() {
    const q = query.trim();
    if (!q || loading) return;
    setLoading(true);
    setError(null);
    setMessage(null);
    setRoute(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = (await res.json()) as {
        message?: string;
        route?: string | null;
      };
      if (!res.ok) {
        setError(data.message ?? "Request failed.");
        return;
      }
      setMessage(data.message ?? "");
      setRoute(typeof data.route === "string" ? data.route : null);
    } catch {
      setError(
        "Could not reach the assistant. On local Vercel dev or production with OPENAI_API_KEY it should respond.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed right-4 top-[4.25rem] z-[52] md:top-[5rem]">
      <div
        id="portfolio-chat-panel"
        ref={panelRef}
        role="dialog"
        aria-label="Portfolio assistant"
        className="glass w-[min(100vw-2rem,22rem)] rounded-xl p-4 flex flex-col gap-3"
      >
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Ask where to go
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close assistant"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Natural language navigation. Examples:{" "}
            {CHAT_EXAMPLES.slice(0, 2).join(" · ")}.
          </p>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void submit();
              }
            }}
            rows={3}
            placeholder="Ask a question…"
            className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
          <button
            type="button"
            onClick={() => void submit()}
            disabled={loading || !query.trim()}
            className="rounded-lg bg-foreground text-background px-3 py-2 text-xs font-medium disabled:opacity-50"
          >
            {loading ? "Thinking…" : "Send"}
          </button>
          {error ? <p className="text-xs text-destructive">{error}</p> : null}
          {message ? (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {message}
            </p>
          ) : null}
          {route ? (
            <button
              type="button"
              onClick={() => followRoute(route)}
              className="text-sm font-medium text-foreground border-b border-foreground pb-0.5 self-start hover:opacity-80"
            >
              Go there{" "}
              <span aria-hidden className="link-arrow">
                →
              </span>
            </button>
          ) : null}
      </div>
    </div>
  );
}
