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

Built with ❤️ using React + Vite + Tailwind CSS
