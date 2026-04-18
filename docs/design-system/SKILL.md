---
name: kerala-ayurveda-design
description: Use this skill to generate well-branded interfaces and assets for Kerala Ayurveda (KAL), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand core:** Sage archetype. Heritage as proof, clinical transparency, process as differentiator, quiet confidence. Never boastful, never mystical.
- **Primary colors:** `--green` #1E4B3C (anchor), `--cream` #F9F8F3 (surface), `--rust` #864E3A (CTA only — NOT green).
- **Type pairing:** Amstir (display serif, single weight 400) + Avenir (body sans, weights 400/500/800/900). Hierarchy via size, not weight.
- **No gradients, no emoji, no exclamation marks, no scarcity tactics.**
- **Icons:** custom SVGs in `assets/` — reference as `<img>` tags, not a sprite.
- **Copy rules:** sentence-case headlines with periods, ALL-CAPS labels with letter-spacing, em-dash signature connector, "helps/supports/minimizes" never "cures/stops/guaranteed".

## Files

- `colors_and_type.css` — all tokens (colors, type, shadows, radii, motion)
- `README.md` — brand overview, content + visual foundations, iconography
- `fonts/` — Amstir + 7 Avenir weights (woff2)
- `assets/` — logo, hero + ingredient photography, icon SVGs
- `preview/` — design-system cards (colors, type, components, brand)
- `ui_kits/pdp/` — full KAL Global product-detail-page UI kit in JSX
- `brand-guide/` — full narrative, tone, positioning, design references (if present)
