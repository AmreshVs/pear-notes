# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Privacy-conscious note-takers who are tired of cloud notes. They land on the site deciding whether to download Pear Notes on Android, iOS, Windows, macOS, or Linux. Technical evaluators may visit, but the copy is written for the mainstream privacy seeker first.

## Product Purpose

The website markets Pear Notes, a peer-to-peer notes app, and routes visitors to download it. Supporting pages: FAQ, Privacy, Terms, Contact. Success is a visitor who understands the privacy model and installs the app.

## Positioning

No server at all, including for AI. Notes are encrypted on-device (AES-256) and synced peer-to-peer (Hyperswarm, Hypercore, Autobase), with no server in the middle. Optional AI features run on open models downloaded once and then work offline, so there is no AI provider and nowhere to send anything. A cloud notes app cannot truthfully make this claim.

## Operating Context

Static Astro site on GitHub Pages under base path `/pear-notes`. Landing page has a hero device composite, features, an on-device AI section, a tabbed mobile/desktop screenshot tour, a security section, a "three steps" explainer, an FAQ teaser, and downloads. Screenshots live in `src/assets/screenshots/<platform>/` and the build fails if one is missing.

## Capabilities and Constraints

- Lock individual notes behind Face ID, Touch ID, Windows Hello, or a synced password.
- Password-sealed `.pnbk` vault export and restore on any device.
- Six optional on-device AI features: Ask AI, AI tools, voice typing, translate, on-device AI, activity log.
- Zero-knowledge: the maintainers cannot read notes.
- Build stack is Astro (existing); all CSS in `src/styles/global.css`.

## Evidence on Hand

Real screenshots from shipped builds. The AI screens are still placeholder images pending capture and must not be presented as final. No testimonials, user counts, reviews, benchmarks, or pricing exist.

## Product Principles

1. Privacy claims must be literally true and specific; never overstate.
2. Never invent proof: no fake testimonials, numbers, ratings, or pricing.
3. Show the real app (shipped-build screenshots) rather than illustrations of it.
4. Explain the mechanism (no server, on-device AI) in plain language before jargon.
5. Every page should lead back toward downloading the app.
