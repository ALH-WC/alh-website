# Handoff: Amsterdam Life Homes website

Last updated: 2026-09-29. Read this with `CLAUDE.md` (rules and environment) and `docs/design-system.md` (the design, the only copy). This file is the snapshot of where things stand; it does not repeat the rules.

## Current status

**The whole marketing site is rebuilt and live on staging**, https://alh-website.vercel.app, with every page set to `noindex`. Framer still serves the public domain amsterdamlifehomes.com until the cutover.

| Page | State |
|---|---|
| `/` home | Live. Brand video hero, three-stat pile, statement, about split, four service tiles, photo band with two article cells and the guide tile, three reviews, employers marquee, closing invitation. |
| `/renting` | Live. The fullest service page: positioning, qualification gate, abroad or here, process, fee, reviews, FAQ, contact form. |
| `/letting`, `/buying`, `/b2b` | Live, each with its own body layout from its Asana study. |
| `/about`, `/reviews`, `/contact` | Live. |
| `/blog` + articles | Live. Own editorial layout (approved, never restyle), Mixta + Inter fonts. Content in Sanity. |
| `/studio` | Sanity Studio, same deployment. |

- Repo `ALH-WC/alh-website`, branch `feat/cms-seo-import`, PRs into `main`. Last merged PR: #126.
- Design system: **the Quiet System** (v3). Refined through six client feedback rounds in August 2026 and small September changes (below).
- Asana "ALH - Website 2.0" was cleaned on 2026-08-29: shipped cards closed, the real remaining work is listed there and below.
- Business-level record lives in `ALH-WC/alh-hq` (`docs/state/website.md`, `docs/decisions/`). It was backfilled on 2026-09-24 and matches this file.

## Decisions (recent and standing)

- **Stay on the Quiet System.** A refinement toward lokersrealestate.nl + thepropertyagency.nl ("blend 3": cream bands, italic accent, pull quote) was built as `/renting-2` and **rejected** on 2026-09-26 (hardly any visible difference). Removed. Do not propose it again. Lesson: subtle tint and rhythm shifts do not read as a redesign to the client; any future refinement must be visibly structural.
- **CTA bar exceptions** (the only two in the system): 10px rounded corners (6px on its buttons), and a dark sand-bronze ground `#6E5A43` instead of espresso, with **no** border or inner line. Text: "Let's talk! We respond within 24 hours." above "Fill in our form" and "Schedule a free video intake call".
- **One design doc.** `docs/design-system.md` is the only copy since 2026-09-26; the old desktop master is a retired pointer. Cloud sessions have no project memory, so standing decisions go in the repo.
- **Stats:** 250+ expats housed, 9+ yrs of experience, 85% from referrals, 3.5 wks average search (not on the homepage pile).
- **CTA labels are fixed:** "Schedule a free video call" on heroes and closings, "Schedule a free video intake call" in the CTA bar and drawer. The response promise is 24 hours.
- **Reviews:** four carry real client meta (Elora & Garrett, Melissa & Chad, Stephanie & Tomas, Sally, Paul & Amy); the rest show placeholder tags. Review dates are never shown.
- **Employers marquee:** 18 real client-supplied logos, one shared `LogoMarquee`, per-logo optical heights in `src/lib/logos.ts`.
- **Brand one-pager for PDFs:** `Desktop\Claude\Amsterdam Life Homes\ALH-Brand-Essentials.pdf` (logo, colours with hex/RGB/CMYK, fonts, layout, voice, CTA). Rebuild it if the system changes.

## Open tasks

**Before the domain cutover**
1. **Verify the lead pipeline.** Every form posts to `/api/lead` and stores a `lead` document in Sanity, but only if `SANITY_API_WRITE_TOKEN` is set in the Vercel project env. Last production test returned `stored: false`. Unverified since; check in the Vercel dashboard (the local Vercel CLI token has expired).
2. **Cookie Settings and Privacy Policy pages** on the new site; the footer links still point to Framer.
3. **Domain cutover** (Asana task has the full checklist): attach amsterdamlifehomes.com to the Vercel project, remove `noindex` site-wide, submit the sitemap in Search Console, 301s for any Framer paths that differ, verify share images, favicon, and leads on the real domain, retire Framer.

**Waiting on Wassily**
4. Real budget and found-in data for the remaining reviews.
5. The real answer to the pet FAQ on `/renting` (the page shows a flagged placeholder).
6. Approval for the Trump visa article refresh; review of the content writing standard.

**After the cutover**
7. One 2-week measurement pass across all pages (GA4 + Search Console).
8. Analytics under the Cal.com epic: UTM tagging, GA4 booking events, booking flow QA.
9. Blog BreadcrumbList schema and a crawl check of internal links.

**Blog content** runs in the separate Asana project "ALH - Blog" and the scheduled pipeline; not tracked here.

## Environment notes

- Local sessions (desktop app, folder `Website\alh`) have `.env.local`, project memory, and network access. Cloud sessions need `alh-website.vercel.app` allowed in their network settings.
- The portal is a separate product: repo `ALH-WC/alh-portal` (home base, no code yet), live prototype still at `Itsyouitsus/ALH-Portal`. Work on it in its own session in `Portal\alh-portal`.
