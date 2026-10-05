# 社團法人台灣雀樂協會官網

TAIWAN HAPPINESS ASSOCIATION — official website source.

## Architecture
- Next.js App Router + React
- Static export (`output: export`)
- No database, no login, no collection of member credentials in v1
- Bilingual Chinese / English
- Portable: Vercel, GitHub Pages, Netlify, Cloudflare Pages, or any static host

## Local development
```bash
npm install
npm run dev
```

## Production verification
```bash
npm run release-check
```
This runs the project QA script and `next build`. Static output is generated in `out/`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **New Project** and import the repository.
3. Framework preset: **Next.js**. No environment variables are required for v1.
4. Deploy. Vercel will build the static export.
5. After buying a domain, add it in **Project → Settings → Domains** and update DNS at the registrar.

## Deploy to GitHub Pages
A workflow is included at `.github/workflows/deploy-pages.yml`. Enable GitHub Pages with **GitHub Actions** as the source. The workflow builds and publishes `out/`.

> If publishing under a repository subpath rather than a custom domain/root domain, set an appropriate `basePath` / `assetPrefix` in `next.config.mjs` before using GitHub Pages.

## Domain strategy
Keep the domain registered in the Association's own account. DNS may point to Vercel now and can be moved later without changing the website source. Do not transfer domain ownership to a web vendor unless there is a specific governance reason.

## Content governance
- Health pages show a `last updated` date and primary sources.
- General education only; not individualized medical advice.
- International harm-reduction content must be distinguished from Taiwan-specific legal/service availability.
- Do not publish member payment status, personal contact lists, case records, health records, or passwords.

## Public contact
- 社團法人台灣雀樂協會 / TAIWAN HAPPINESS ASSOCIATION
- 台北市北投區文林北路75巷77號8樓
- +886-2-7749-1702
- twnhpy@gmail.com

## Release
v1.0.0-rc.1 — 2026-10-05
