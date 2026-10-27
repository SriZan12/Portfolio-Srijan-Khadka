# Srijan Khadka — Professional Portfolio

**Live:** https://srizan12.github.io/Portfolio-Srijan-Khadka/

Android, Kotlin Multiplatform and API-driven software development.

## Design credit

This portfolio closely adapts [Brittany Chiang's v4 design](https://v4.brittanychiang.com/), using the [MIT-licensed source](https://github.com/bchiang7/v4). Copyright (c) 2018 Brittany Chiang. The original license is included in `LICENSE`; source attribution is preserved here and in the stylesheet. The visible design-credit footer was removed at Srijan's request.

The design is implemented as static HTML/CSS/JavaScript with Srijan's own content and free Inter/Roboto Mono font replacements. It is not a pixel-identical copy. Published projects use official app icons and direct Android/iOS store links. Logos belong to their respective owners; their sources are recorded in `assets/sources.json`.

The About Me image is an AI-generated illustration of a fictional programmer, created for this portfolio. It replaces the initials graphic and is delivered as a 768px WebP with accessible alternative text and reserved dimensions.

## Preview and deploy

Run `python -m http.server 8080` and visit `http://localhost:8080`. No install or build step is required for the website.

GitHub Pages publishes the root of `main`. Future changes to this branch deploy automatically.

## Edit

- `index.html`: content, employers and projects
- `styles.css`: appearance and responsive layout
- `app.js`: employer tabs, mobile navigation and interactions
- `assets/`: official app icons, source metadata and earlier illustrations
- `resume.html`: printable résumé

Personal content reflects the résumé supplied in October 2026. SriSu is in development and has not been published to either store, as confirmed by Srijan. It uses a text wordmark and a public GitHub link.

## QA — 27 October 2026

Real headless Edge browser checks passed at widths 320, 390, 600, 768, 1024 and 1440 pixels. Coverage includes native mobile navigation and focus, employer links and keyboard tabs, app-icon loading, Android/iOS links, clipboard success and failure, contact actions, the résumé route and print action, reduced motion and JavaScript-disabled content. No page errors or failed local assets were found.

All ten store URLs returned HTTP 200 and matched the intended apps. Website titles and logos link to the product websites or official store listing. The GeoKrishi listing is GeoKrishi Farm, published by Pathway Technologies and Services. Store availability can vary by region.
