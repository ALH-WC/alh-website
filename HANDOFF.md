# Handoff: ALH-website

Stand van zaken op 29 september 2026. Lees daarna eerst `CLAUDE.md` en `docs/design-system.md`: die twee zijn leidend. Dit bestand vat alleen samen waar we staan.

## Huidige status

- **Live:** https://alh-website.vercel.app (Vercel-project `alh-website`, team `alh-wc`). Elke merge naar `main` wordt automatisch gedeployed.
- **Branch:** `feat/cms-seo-import` is gelijk aan `main` (laatste merge: PR #126). Er is geen openstaand werk en er zijn geen open PR's.
- **Indexering:** alle pagina's staan nog op `noindex, follow` tot de domeinoverstap naar amsterdamlifehomes.com.
- **Feedbackronde van 26 t/m 29 september:** afgerond en live.

### Wat er deze ronde is opgeleverd

| PR | Wijziging |
|---|---|
| #120 | Hero-H1 staat op elke pagina op exact dezelfde hoogte als op /renting, op desktop en telefoon. Het lettertype was al overal gelijk. Verder: nieuwe foto in "About us" op de homepage, de logo-carrousel draait 30% langzamer (37s) en de logo's werden zwart. |
| #121 | Logo's in de carrousel in donker zand `#A89679` in plaats van zwart. |
| #122 | De About-foto is aan de onderkant bijgesneden (bronbestand 2000x1230). |
| #123 | De carrousel stond kort rechts naast "Ready to start?". Vervangen door #124. |
| #124 | De carrousel staat nu rechts in de intro-rij van de reviews op de homepage, in twee rijen van negen logo's die tegen elkaar in lopen, met 24px tussen de rijen. Het "Ready to start?"-blok is weer volle breedte. |
| #125, #126 | CTA-balk (pop-up rechtsonder): afgeronde hoeken (10px op de balk, 6px op de knoppen), donker zand-brons `#6E5A43` en geen binnenlijn. Deze PR's zijn in een andere sessie gemaakt. |

## Beslissingen (staan ook in de design-doc)

- **Altijd mergen:** PR's naar `main` direct zelf mergen na lokale controle; niet eerst vragen. Daarna wachten tot de deploy klaar is en controleren op productie.
- **Eén H1-hoogte voor alle hero's:** wat onder de H1 staat (subtekst of knop) krijgt een vaste hoogte: 87px op desktop, 165px op telefoon. Een kortere subtekst mag de H1 nooit lager laten zakken.
- **Logo-carrousel:**
  - kleur donker zand `#A89679` (alleen voor de carrousel, nooit voor tekst);
  - snelheid 37s voor de volledige rij van 18 logo's;
  - Reddit is in het SVG-bestand zelf ingekleurd, met een wit gezichtje;
  - de homepage gebruikt de `stacked`-variant (twee rijen, in `.qRevSide`);
  - /b2b houdt de enkele rij.
- **CTA-balk:** de enige afgeronde en de enige niet-espresso vlak in het systeem. Dat is een bewuste uitzondering, gekozen in het klantgesprek van september 2026.
- **Afgewezen:** de "blend 3"-richting (/renting-2). Niet opnieuw voorstellen.

## Openstaande taken

1. **Asana bijwerken:** de wijzigingen van deze feedbackronde zijn nog niet in Asana gezet ("ALH - Website 2.0"), omdat er geen taak voor genoemd was. Vraag welke taak het is en zet daar de checkbox, de Status-kolom en een afrondingscommentaar.
2. **Corporate-hero op telefoon:** "Housing your expat employees" loopt op telefoons over 4 regels, terwijl de vaste regeleinden er 3 voorschrijven. Dit was al zo vóór deze ronde. De H1 blijft wel netjes uitgelijnd.
3. **Kleine onjuistheden in de design-doc:**
   - sectie 8 (de homepage-opbouw) noemt de carrousel nog als losse rij;
   - sectie 7 geeft voor de home-hero andere regeleinden dan sectie 4.2 en de code.

   Rechttrekken bij de volgende wijziging aan die secties.
4. **Content (blog, via Sanity):** zie `docs/content-refresh-queue.md`.
   - Het belastingartikel en het feestdagen-2025-artikel staan op `noIndex` tot de cijfers of de opzet zijn bijgewerkt.
   - Een aantal artikelen met gedateerde cijfers verouderen langzaam.
5. **Placeholder-data in reviews:** alleen Elora & Garrett, Melissa & Chad, Stephanie & Tomas en Sally, Paul & Amy hebben echte klantdata. De rest wacht nog op gegevens van de klant.
6. **Pet-FAQ:** heeft nog echte tekst nodig, want de oude site toont daar standaardtekst.
7. **Domeinoverstap (later):**
   - `OG_BASE` in `src/lib/og.ts` omzetten naar amsterdamlifehomes.com;
   - de `noindex`-vlaggen overal weghalen;
   - de canonical op de homepage bijwerken.

## Praktische tips voor de volgende sessie

- **Screenshots:** het browserpaneel in de app tekent niet als het venster verborgen is. `shot.mjs` in de scratchpad van deze sessie stuurt Chrome headless aan (via het Chrome DevTools Protocol, met native WebSocket) en maakt zo screenshots op elke breedte. Het script is makkelijk opnieuw te maken:
  - Chrome starten met `--headless=new --remote-debugging-port`;
  - `Emulation.setDeviceMetricsOverride`, dan `Page.navigate`;
  - naar het element scrollen;
  - `Page.captureScreenshot`.
- **Regeleinden:** verschillende bestanden gebruiken CRLF (`renting.module.css`, `logos.ts`, `page.tsx`). Scripts die bestanden bewerken moeten de bestaande regeleinden behouden, anders ontstaat er een enorme diff.
- **Afbeeldingen:** omzetten naar webp met `sharp`, dat al in `node_modules` staat.
- **Stijlen:** alle body-stijlen zitten in `src/app/renting/renting.module.css`. De laag "QUIET SYSTEM" staat onderaan en wint via de cascade.
