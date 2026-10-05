# Taiwan Happiness Association — Web Brand Spec

## Design read
- Artifact: bilingual public-health NGO website
- Audience: people who use drugs / people in recovery, families, youth, general public, healthcare professionals, social workers, educators
- Visual language: calm public-health editorial, warm institutional trust, human-centered community support
- Mode: redesign · preserve
- Visual variance: 4/10
- Motion intensity: 2/10
- Information density: 5/10
- Asset dependence: 8/10
- Brand fidelity: 9/10

## Protected brand assets
- Primary logo: `/public/images/logo.jpg`
- Wordmark / name lockup: `/public/images/logo-with-name.webp`
- Original generated homepage illustration: `/public/images/illustrations/hero-home.webp`
- Association-provided program imagery: `/public/images/programs/*`
- Association-provided event imagery: `/public/images/events/*`

## Color system
- Ink: #18352f
- Deep ink: #102f29
- Primary teal: #2f7566
- Dark teal: #20584d
- Secondary teal: #3f8a78
- Mint: #dff2e9
- Soft mint surface: #edf7f2
- Warm gold accent: #f0b54a
- Sky: #dceff3
- Paper: #fbfdf9
- Cream: #fffaf0
- Divider: #dfe8e4

Use teal as the dominant action and brand color. Use gold sparingly for emphasis, warnings, and warm accents.

## Typography
Use system-first CJK-safe sans-serif typography to avoid additional third-party font requests:
`"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`

- H1: strong editorial scale, tight line-height
- H2: clear section breaks
- Body: generous 1.8–1.85 line-height on long-form health content
- Avoid more than two font families

## Spacing
Base rhythm: 8px.
Common increments: 8 / 16 / 24 / 32 / 48 / 64 / 80 / 96.

## Radius
- Small: 14px
- Medium: 22–24px
- Large: 32–36px
- Pills only for compact controls, tags, and badges

## Shadows
- Elevation 1: subtle card separation
- Elevation 2: hero / major feature blocks
Avoid heavy floating-card aesthetics across the whole site.

## Motion
- 180–200ms transitions
- Ease: cubic-bezier(.2,.8,.2,1)
- Motion only for hover/focus affordance
- Respect `prefers-reduced-motion`

## Content / UX principles
1. Keep health information readable before decorative elements.
2. Maintain a non-stigmatizing, respectful visual tone.
3. Prefer source transparency and last-updated dates.
4. Keep the logo persistently visible in the header and footer.
5. Use real Association assets or original generated assets; do not pull unlicensed images from third-party news pages.
6. Mobile layouts should collapse cleanly without horizontal scrolling.
7. Interactive controls require visible keyboard focus.
