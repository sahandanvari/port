import { next } from "@vercel/edge";

/** Maintenance gate disabled — site is public. */
const MAINTENANCE_UNTIL_MS = 0;

export const config = {
  matcher: ["/((?!maintenance\\.html|favicon\\.svg).*)"],
};

function mastermindAuth(request: Request): Response {
  const expectedUser = process.env.BASIC_AUTH_USER || "sahand";
  const expectedPass =
    process.env.BASIC_AUTH_PASSWORD || process.env.DASHBOARD_PASSWORD;

  if (!expectedPass) {
    return new Response("Set BASIC_AUTH_PASSWORD in Vercel project settings.", {
      status: 503,
    });
  }

  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const colon = decoded.indexOf(":");
      const user = decoded.slice(0, colon);
      const pass = decoded.slice(colon + 1);
      if (user === expectedUser && pass === expectedPass) {
        return next();
      }
    } catch {
      /* invalid base64 */
    }
  }

  return new Response("YouTube Mastermind — sign in required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="YouTube Mastermind", charset="UTF-8"',
    },
  });
}

function maintenanceRedirect(request: Request): Response | null {
  if (Date.now() >= MAINTENANCE_UNTIL_MS) return null;

  const url = new URL(request.url);
  if (url.pathname === "/maintenance.html") return null;

  const previewKey = process.env.MAINTENANCE_PREVIEW_KEY;
  if (previewKey && url.searchParams.get("preview") === previewKey) {
    return null;
  }

  return Response.redirect(new URL("/maintenance.html", url.origin), 307);
}

export default function middleware(request: Request) {
  const maintenance = maintenanceRedirect(request);
  if (maintenance) return maintenance;

  const url = new URL(request.url);
  if (url.pathname === "/mastermind" || url.pathname.startsWith("/mastermind/")) {
    return mastermindAuth(request);
  }

  return next();
}
