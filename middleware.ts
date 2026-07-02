import { next } from "@vercel/edge";

export const config = {
  matcher: ["/mastermind", "/mastermind/:path*"],
};

export default function middleware(request: Request) {
  const expectedUser = process.env.BASIC_AUTH_USER || "sahand";
  const expectedPass = process.env.BASIC_AUTH_PASSWORD || process.env.DASHBOARD_PASSWORD;

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
