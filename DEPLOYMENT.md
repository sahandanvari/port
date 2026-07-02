# Deployment Guide: sahandanvari.com on Vercel

## Current Status

✅ Project built successfully  
✅ Git repository initialized with first commit  
✅ Ready for deployment

## Next Steps

### 1. Push to GitHub

First, create a private repo on GitHub called "port" or "portfolio", then:

```bash
cd /Users/user/Documents/DSDS/port
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/port.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

Option A: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow prompts - connect your GitHub account and select the "port" repo.

Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up / log in with GitHub
3. Click "New Project"
4. Import the GitHub repo "port"
5. Select React + Vite template
6. Click Deploy

### 3. Point Domain to Vercel

Once deployed, Vercel will give you a deployment URL. Then:

1. Go to GoDaddy dashboard
2. Find DNS settings for sahandanvari.com
3. Add Vercel's DNS records (Vercel will provide exact records)
4. Wait 15-30 minutes for DNS propagation

The site will then be live at sahandanvari.com!

---

## What's Ready Now

- ✅ Clean "coming soon" landing page
- ✅ Dark/light mode toggle (persisted to localStorage)
- ✅ Monochrome theming with CSS custom properties
- ✅ Responsive design
- ✅ Tailwind CSS v3 configured

## Next Work (After Deployment)

- Phase 1: Build full theming system (color, typography, radius, spacing sliders)
- Phase 2: Create full page sections (Hero, About, Work, Resources, Contact)
- Phase 3: Add scroll animations and polish

---

## Portfolio assistant (`/api/chat`)

The **Ask** floating button calls a Vercel serverless function at `/api/chat` (see `api/chat.ts`).

1. In the Vercel project → **Settings → Environment Variables**, add:
   - `OPENAI_API_KEY` — your OpenAI API key (server-side only; not prefixed with `VITE_`).
2. Redeploy. The assistant uses model `gpt-4o-mini` and returns JSON with `message` and optional `route`.

`vercel.json` rewrites exclude `/api/*` and `/mastermind/*` so the SPA fallback does not swallow API routes or the private mastermind dashboard.

Local `npm run dev` does not run Vercel functions; use `vercel dev` if you need chat locally, or test on a preview deployment.

---

## YouTube Mastermind (`/mastermind`)

Private creator dashboard (hook bank, roadmap, learning guide) at **https://sahandanvari.com/mastermind**.

- Static files live in `public/mastermind/` (built from the Youtube project — see `dashboard/DEPLOY.md` there).
- `middleware.ts` protects `/mastermind/*` with HTTP Basic Auth.
- Vercel env vars: `BASIC_AUTH_USER`, `BASIC_AUTH_PASSWORD` (same project as the portfolio).

After updating playbook data in the Youtube repo:

```bash
cd "/Users/user/Desktop/Sahand Anvari/Youtube/dashboard"
npm run sync-port
```

Then commit `public/mastermind/` in this repo and redeploy.

---

Built with ❤️ using React + Vite + Tailwind CSS
