# CLAUDE.md

> Project instructions for Claude Code. Read this file at the start of every session. It establishes how this project works — conventions, constraints, and where to find detail.

---

## What this project is

A Product Detail Page (PDP) build for **Myaxyl Oil** — Kerala Ayurveda's classical pain-relief oil. The PDP is a single-page mobile-first web build following the Kerala Ayurveda brand design system and the KAL DTC Conversion Framework (v3.1).

The goal: a production-grade PDP that converts first-time visitors — educated, credible, honest about timelines, and architected around the product's actual behaviour (fast pain relief, long-term recovery).

---

## Before you do anything, read these in order

1. **This file** — project rules
2. **`design-system/README.md`** — Kerala Ayurveda brand foundation, visual language, content rules
3. **`design-system/SKILL.md`** — machine-readable design system summary
4. **`MYAXYL_OIL_PDP_CONTENT.md`** — full build specification (section architecture, copy, structured data, compliance checklists)
5. **`framework/KAL_PDP_Archetype_Framework.html`** — archetype tuning rules (how execution blocks weight across product types)

Only then start writing code.

---

## Project structure

```
project-root/
├── CLAUDE.md                          ← this file
├── MYAXYL_OIL_PDP_CONTENT.md          ← full build spec
├── design-system/                     ← read-only brand system
│   ├── README.md
│   ├── SKILL.md
│   ├── colors_and_type.css            ← all design tokens
│   ├── fonts/
│   ├── assets/                        ← icons + shared imagery
│   └── ui_kits/pdp/                   ← PDP component patterns
│       ├── Header.jsx
│       ├── Gallery.jsx
│       ├── StatsBar.jsx
│       ├── ProductInfo.jsx
│       ├── Sections.jsx
│       ├── pdp.css
│       └── index.html
├── framework/                         ← strategy docs (reference)
│   └── KAL_PDP_Archetype_Framework.html
└── myaxyl/                            ← build output folder
    ├── index.html
    ├── myaxyl.css                     ← additive overrides only
    ├── assets/                        ← Myaxyl-specific imagery
    └── HANDOFF.md                     ← produced at build completion
```

Never modify files in `design-system/` or `framework/`. These are read-only inputs.

---

## Build conventions

### File structure
- **`myaxyl/index.html`** — single-file HTML with inline React and Babel (React 18 + Babel Standalone via CDN)
- **`myaxyl/myaxyl.css`** — additive styles only. All base tokens come from `design-system/colors_and_type.css`. All component patterns extend from `design-system/ui_kits/pdp/pdp.css`.
- Link order in `<head>`:
  ```html
  <link rel="stylesheet" href="../design-system/colors_and_type.css">
  <link rel="stylesheet" href="../design-system/ui_kits/pdp/pdp.css">
  <link rel="stylesheet" href="myaxyl.css">
  ```

### Component approach
- The design system provides PDP component patterns (Header, Gallery, Stats Bar, Product Info, section components, Sticky Bar). Build Myaxyl's PDP using these patterns where they apply.
- Where the content spec defines a section that doesn't map to a pre-built pattern (the sensory callout, the persona tiles, the sesame-oil base), build it fresh following the design system's structural conventions: eyebrow + H2 + body + optional media, using the existing token palette.
- All icons come from `design-system/assets/*.svg`. Reference as `<img>` tags, not a sprite.

### Asset resolution
- **Icons** — `design-system/assets/*.svg` (direct reference)
- **Product photography** — pull from Shopify CDN URLs specified in the content spec (§1.5), or download into `myaxyl/assets/`
- **Missing photography** (ingredients, some timeline imagery) — use the placeholder tile pattern defined in the content spec. Flag in handoff notes.

---

## Non-negotiables

These rules apply to every line of code, copy, and visual decision. Violating any of them is a build failure.

### Copy (brand tone)
- **Hedging verbs only:** helps, supports, minimizes, promotes, traditionally used to
- **Never:** cures, stops, eliminates, guaranteed, proven to
- **No exclamation marks.** Anywhere.
- **No emoji.** Unicode `✓` allowed only in Add-to-Cart success state and check rows.
- **Sentence case headlines with a period.** Including fragments. "Go deeper." not "Go deeper".
- **ALL CAPS + letter-spacing** reserved for section labels and CTAs.
- **Em dash (—)** for qualifiers. Not hyphen.
- **Bullet separator (·)** for inline label fragments.
- **Banned words:** best, ancient, breakthrough, revolutionary, secret, ultimate, amazing, incredible, luxurious, mystical, silky, exotic.
- **Testimonial attribution format:** `— First name Last initial., City`

### Visual
- **Primary CTAs are rust** (`--rust`, `#864E3A`), never green.
- **Amber** (`--amber`, `#FBBF24`) is used for ratings and small accents only, never for primary CTAs.
- **Amstir** (serif) for headlines, prices, product name, italic quotes. Single weight (400). Hierarchy comes from size, never from font-weight.
- **Avenir** (sans) for everything else — body, labels, buttons, meta.
- **No gradients, no noise, no patterns, no decorative flourishes.**
- **Borders are 1px.** Exceptions are documented in the design system.
- **Shadows follow the three-tier system.** Brand shadows are green-tinted; CTA shadows are rust-tinted; generic UI uses neutral black alpha.
- **All motion uses `ease`.** Durations only from: 0.1s / 0.15s / 0.2s / 0.25s / 0.3s / 0.4s. No custom cubic-beziers.
- **Section backgrounds alternate:** cream → white → cream → dark green → repeat, closing on dark green.

### Framework
- **4 zones:** Anchor (Z1 — above the fold) → Mechanism (Z2 — first scroll) → Depth (Z3 — deep scroll) → Close (Z4 — end of page).
- **11 execution blocks** — weighted per the archetype rules in `framework/KAL_PDP_Archetype_Framework.html`.
- **Sticky buy bar** present on the page. Body reserves 80px bottom padding (mobile) / 100px (desktop).
- **Operating rule:** Every section must answer yes to *"Does this increase relevance, belief, ease of starting, or ease of completing?"* If no, cut it.

---

## When you get stuck

### Ambiguous spec
Ask the user. Don't guess, don't infer, don't fill with plausible-sounding copy. An unclear specification is a signal to pause, not a problem to solve alone.

### Missing asset
Use the placeholder tile pattern defined in the content spec (cream background, soft border, italic serif label). Flag the dependency in your handoff notes. Do not substitute with stock imagery or AI-generated images.

### Framework conflict
When the general framework and the Myaxyl content spec disagree, the content spec wins. The spec documents archetype-specific resolutions that sit on top of the general rules.

### Compliance fail during QA
Fix the copy or visual, don't rationalise. The rules exist because a single tone-off line breaks the brand's quiet-confidence voice. Rewrite rather than hedge your way past a failed check.

---

## What to defer (out of scope)

Unless the content spec explicitly includes these, do not build them:

- A/B test variants
- Personalisation or dynamic content by visitor segment
- Subscription or auto-ship flows
- Expert consultation CTAs
- Reorder quick-buy bar
- Review capture or submission UI

---

## Handoff discipline

When the build is complete, produce `myaxyl/HANDOFF.md` covering:

1. What's built
2. What's placeholdered and why (missing assets, pending content)
3. Open dependencies (imagery, review seeding, merchandising team sign-off)
4. Compliance checklist results — all three from the content spec (tone / visual / framework)
5. Known issues and suggested next steps

Keep it brief. The content spec is the detailed doc; the handoff is the status update.

---

## Current task

**Build:** Myaxyl Oil PDP
**Spec:** `MYAXYL_OIL_PDP_CONTENT.md`
**Archetype treatment:** Fast-relief primary with Topical modifiers applied in full; long-term recovery benefit retained as core differentiation (Zone 2 depth is preserved).
**Output:** `myaxyl/index.html` + `myaxyl/myaxyl.css`

The content spec is self-contained — every section's copy, structured data, component structure, and compliance checks are in that single file. Read it end-to-end before writing any code.

---

## Version

**v1.0** — April 2026 — Initial project brief.

When this file gets updated, bump the version and note what changed.
