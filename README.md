# Idea to Funded — Website

A two-page marketing site for Idea to Funded, built with **Next.js 14 (App Router)**,
**TypeScript**, and **Tailwind CSS**.

- `/` — the main landing page (hero, impact numbers, partner strip, services for
  founders vs. institutions, Capital Copilot, Academy, testimonials, CTA, footer).
  The free webinar is linked in two places: the hero banner and the Academy section.
- `/pitch-and-get-funded-webinar` — the dedicated "Pitch & Get Funded" webinar
  registration page, with a live countdown, registration form, and FAQ.

Fonts (Fraunces + Manrope) are self-hosted via `@fontsource`, so the site builds and
loads without any runtime calls to Google Fonts. Images are served through
`next/image` for automatic AVIF/WebP + lazy loading, and both pages are statically
generated at build time for fast first loads.

---

## 1. Prerequisites

Install once, on your machine, using **Git Bash**:

```bash
# Check you have Node 18+ and npm
node -v
npm -v

# Check you have Git
git -v
```

If either is missing, install Node.js (which includes npm) from nodejs.org, and
Git for Windows (which includes Git Bash) from git-scm.com.

---

## 2. Run the site locally

Open **Git Bash**, then:

```bash
cd /path/to/idea-to-funded
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser. Edit any file in `src/` and the page
updates automatically.

To build the optimized production version and preview it exactly as it will run
live:

```bash
npm run build
npm run start
```

---

## 3. Push the project to GitHub (all from Git Bash)

```bash
# 1. From inside the project folder, initialize git (skip if already a repo)
git init

# 2. Stage and commit everything
git add .
git commit -m "Initial commit: Idea to Funded website"

# 3. Create a new, empty repository on GitHub first (via github.com → New repository).
#    Do NOT add a README/.gitignore/license there — this project already has them.
#    Then connect your local project to it:
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 4. Rename your branch to main (GitHub's default) and push
git branch -M main
git push -u origin main
```

After the first push, any future changes are just:

```bash
git add .
git commit -m "Describe what changed"
git push
```

---

## 4. Deploying it live

The fastest path for a Next.js site is **Vercel** (made by the Next.js team, free tier
available):

1. Push the repo to GitHub (above).
2. Go to vercel.com → New Project → import the GitHub repo.
3. Leave the defaults (Vercel auto-detects Next.js) → Deploy.
4. Add your custom domain under Project → Settings → Domains.

Every future `git push` to `main` will auto-deploy.

---

## 5. Project structure

```
src/
  app/
    layout.tsx                 Root layout, fonts, global SEO metadata
    page.tsx                   Homepage
    globals.css                Tailwind + base styles
    sitemap.ts / robots.ts     SEO
    pitch-and-get-funded-webinar/
      page.tsx                 Webinar landing page
  components/
    Header.tsx, Footer.tsx, Hero.tsx, ImpactStats.tsx, LogoStrip.tsx,
    WhatWeDo.tsx, CapitalCopilot.tsx, Academy.tsx, Testimonials.tsx,
    CTABanner.tsx, GrowthLine.tsx (signature scroll motif)
    webinar/                   Countdown, RegisterForm, FaqAccordion
    ui/                        Button, SectionHeading, Reveal
  lib/
    site-data.ts                All copy/content in one place — edit here first
public/
  favicon.ico, icon-*.png, apple-touch-icon.png, og-image.png, logo-full.png
```

**To update copy** (stats, testimonials, service descriptions, FAQ, webinar date,
etc.), edit `src/lib/site-data.ts` — almost everything pulls from there.

**To change the webinar date/time**, edit `WEBINAR_DATE_ISO` in `site-data.ts` and
the matching `startDate` in the JSON-LD block in
`src/app/pitch-and-get-funded-webinar/page.tsx`.

**Brand colors** (edit in `tailwind.config.ts`):
| Name    | Hex       |
|---------|-----------|
| Cream   | `#ede2d0` |
| Ink     | `#0d4143` |
| White   | `#ffffff` |
| Gold    | `#c88c16` |
| Flare   | `#f06d38` |

---

## 6. Before going live — replace placeholders

- `mailto:hello@ideatofunded.com` links in `CTABanner.tsx` and `Footer.tsx` — swap
  for your real inbox, or point to a form/CRM.
- Social links in `Footer.tsx` (`href="#"`) — add your real profile URLs.
- `RegisterForm.tsx` currently just shows a success state on submit — connect it to
  your email service (Mailchimp, ConvertKit, HubSpot, etc.) or a serverless
  function before launch.
- Update `metadataBase` / canonical URLs in `layout.tsx` and
  `pitch-and-get-funded-webinar/page.tsx` if the live domain differs from
  `ideatofunded.com`.
- Swap `public/og-image.png` for a custom-designed share image if you'd like
  something more elaborate than the generated placeholder.
