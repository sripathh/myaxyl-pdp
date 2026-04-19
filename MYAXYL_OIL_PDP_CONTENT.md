# Myaxyl Oil — PDP Content & Build Specification

> **For Claude Code.** This file is the single source of truth for building the Myaxyl Oil PDP. It pairs with the Kerala Ayurveda design system (`design-system/`) and the KAL DTC Conversion Framework v3.1.
>
> **Build target:** A single-page mobile-first PDP for Myaxyl Oil at `docs/index.html`, following the architecture defined in Part 1 and populated with the copy and data in Part 2.
>
> **Authored by:** Sripath (KAL DTC conversion)
> **Revision:** v1.0 — April 2026
> **Archetype treatment:** Fast-relief primary with Topical modifiers applied in full; long-term recovery benefit retained as core differentiation.

---

# Part 1 — Build Instructions

## 1.1 Project setup

1. Unzip the design system folder as `design-system/` at the project root.
2. Create `docs/` alongside it. Output target: `docs/index.html` (single-file HTML with inline JSX, React 18 + Babel Standalone via CDN).
3. Link CSS in this order inside `<head>`:
   ```html
   <link rel="stylesheet" href="../design-system/colors_and_type.css">
   <link rel="stylesheet" href="../design-system/ui_kits/pdp/pdp.css">
   <link rel="stylesheet" href="myaxyl.css">
   ```
4. **Do not modify** `colors_and_type.css` or `pdp.css`. All Myaxyl-specific styles go in `myaxyl.css` as additive overrides. This keeps the design system usable for future builds.
5. React and Babel script tags:
   ```html
   <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
   <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
   <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
   ```

## 1.2 Section architecture

The Myaxyl PDP is built around five architectural decisions specific to this product. Each one is driven by the archetype (Fast-relief Topical with long-term benefit) and the product's actual differentiation story.

### 1. Sesame oil base section
The classical differentiator for this formulation is not the herbs alone but the carrier — sesame oil, known in Ayurveda as the Queen of oils for its 45-63% derivable oil content and deep-tissue absorption. A dedicated section presents the base with a 3-card layout: one hero card (sesame oil) plus two supporting cards (eucalyptus and lemongrass — the other oil-phase ingredients).

### 2. First-use sensory callout
The Topical archetype requires a proactive description of what the user will feel on first application. Myaxyl has an unusual sensory profile — cooling and warming simultaneously, with no menthol burn and no capsaicin sting. A single callout section after the mechanism explanation addresses this, backed by one micro-testimonial confirming the sensation.

### 3. Competitive comparison in the Zone 2/3 bridge
For fast-relief pain products, the competition at first purchase is the active alternative the consumer already uses (NSAID sprays, topical gels), not inaction. This makes competitive comparison a primary conversion lever rather than sceptic-only material, so the compare block sits in the bridge between Zone 2 (mechanism) and Zone 3 (depth), not at the end of the page.

### 4. Self-selection persona tiles
Myaxyl serves four distinct use cases — fitness and sport, working professionals with postural pain, geriatric care, and kids and teens. Rather than targeting one persona, a dedicated "Is this for you?" tile section lets the user self-identify. Four tiles, equal weight, no primary/secondary hierarchy.

### 5. Dual-partner regimen cross-sell
The regimen strip holds two partner products: a format partner (Myaxyl Cream 20g — same formula, different format for on-the-go use) and an internal-support partner (Yogaraja Guggulu Tablets — oral joint support for sustained care). Presented as equal-weight cards in a rust band below the product info.

## 1.3 Section order (top to bottom)

The canonical section order for the Myaxyl Oil PDP. Background colors follow the alternating cream → white → cream → dark green rhythm.

| # | Section | Background | Purpose |
|---|---|---|---|
| 1 | Header | frosted cream | Logo, nav, cart — sticky |
| 2 | Gallery | `--green-gallery` (#435a45) | Product imagery with thumbnail strip |
| 3 | Stats bar | `--green-stats` (#364837) | 4-cell credential row — scrolls with gallery |
| 4 | Product info | `--white` | Badge, H1, tagline, ritual panel, price, ATC |
| 5 | Trust markers | `--cream` | 5-cell row: Est. 1945 / GMP / ISO / FDA / AYUSH |
| 6 | Regimen strip | `--rust` | 2 cards — Myaxyl Cream + Yogaraja Guggulu |
| 7 | Mechanism | `--white` | "Two actions. One oil." — the dual-benefit explanation |
| 8 | First-use sensory callout | `--cream` | What you'll feel first |
| 9 | Honest sequence | `--green-honest` (#2A4A3D) | Dark centrepiece — the timeline anchor |
| 10 | Timeline | `--white` | 3-phase timeline with images |
| 11 | Ingredients | `--cream` | 4 herb cards with Latin names and role badges |
| 12 | Sesame oil base | `--white` | 3-card section on the carrier and essential oils |
| 13 | What's in / What's out | `--cream` | Clean-label reassurance, 2-column |
| 14 | Testimonials (curated) | `--green` (#1E4B3C) | 2 extended, timeframe-tagged testimonials |
| 15 | Compare | `--white` | Myaxyl vs Generic Pain Spray — 2-column fact table |
| 16 | Persona tiles | `--cream` | 4 tiles: fitness / professionals / geriatric / kids & teens |
| 17 | Application guide | `--white` | Full-width lifestyle image + 3-step ritual |
| 18 | Accordion ("Go deeper") | `--cream` | 4 items: preparation, safety, full ingredients, usage notes |
| 19 | Reviews | `--white` | Aggregate score + 2 review cards + outline CTA |
| 20 | Closing | `--green` (#1E4B3C) | Heritage echo + final CTA |
| 21 | Sticky buy bar | fixed-position | Thumb + title + price + ATC |
| 22 | Footer spacer | inherits | 90px empty space to clear the sticky bar |

## 1.4 Section implementation notes

Implementation detail for each section. Copy and data are in Part 2; this part covers component structure, key styling decisions, and interaction behaviour.

### Header (§1)
Sticky top (`z-index: 90`). Frosted cream background (`rgba(253,252,248,0.92)` + `backdrop-filter: blur(6px)`). Logo, nav links, cart icon. Height ~72px.

### Gallery (§2)
5 slides with crossfade transition (0.4s opacity). Thumbnail strip scrolls horizontally below. Best-seller pill badge top-left on slide 1. Left/right arrows (visible on hover desktop, persistent 0.5 opacity on touch). Swipe-enabled on mobile (40px threshold).

On desktop ≥1024px, the gallery + stats bar become sticky (`position: sticky; top: 72px`) while the right column (product info) scrolls.

### Stats bar (§3)
4-column grid on dark green. Each cell: star icon (12×12), large serif number, small uppercase label. Cells separated by thin white-alpha borders.

### Product info (§4)
The decision-ready zone. Vertical flex layout with 16px gaps. Contains badge → H1 → subtitle → credential meta → rating → micro-testimonial → ritual panel → delivery badges → size selector → ATC button.

The ritual panel is a `--off-yellow` card with an amber icon. It carries the usage guidance to Zone 1 — users know how to apply the oil before they buy.

Size selector is a 2-option toggle (200ml default, 60ml trial). On selection, the ATC button's price block and sub-line update dynamically.

### Trust markers (§5)
5-column grid on cream. Each cell: large serif value (e.g., "1945") + small label ("Est."). Cells separated by thin borders. 8-10px label font on mobile.

### Regimen strip (§6)
Two-card layout in a rust band. On desktop ≥768px, cards sit side-by-side; on mobile, stacked. Each card: product image, name, one-line rationale, amber "+₹NNN" button that toggles to "✓ Added" on click.

```jsx
<section className="regimen">
  <div className="regimen__label">COMPLETE THE REGIMEN</div>
  <div className="regimen__grid">
    {/* card 1: Myaxyl Cream */}
    {/* card 2: Yogaraja Guggulu */}
  </div>
</section>
```

The rust band matches the CTA hue. The label above the cards is ALL CAPS with letter-spacing in `--off-yellow`.

### Mechanism (§7)
White background. Centered content, `max-width: 720px`. Brown eyebrow, large serif H2, medium-weight body paragraph (4-5 sentences). The mechanism explanation is the longest prose block on the page and is where the product's differentiation story lives.

### First-use sensory callout (§8)
Cream background. Brown eyebrow "FIRST USE", H2 "What you'll feel first.", single paragraph describing the cooling-and-warming sensation, then a micro-testimonial with amber left-border.

```jsx
<section className="sensory">
  <div className="eyebrow" style={{color:'var(--brown)'}}>First use</div>
  <h2>What you'll feel first.</h2>
  <p className="sensory__body">...</p>
  <blockquote className="microquote">"..." <cite>— Name L., City</cite></blockquote>
</section>
```

### Honest sequence (§9)
Dark green centrepiece (`--green-honest`). Off-yellow text. Centered Amstir serif quote, larger size. Sub-line in Avenir italic below. This section is the emotional pivot of the page — it acknowledges the timeline honestly and reframes patience as a feature.

### Timeline (§10)
White background. Cinnamon eyebrow "WHAT TO EXPECT", serif H2 "The honest sequence." 3-column grid on desktop, stacked on mobile. Each step: amber-bordered thumbnail image, stage label (uppercase), step title (serif), body text. Disclaimer row below the grid in small ink-40 italic.

### Ingredients (§11)
Cream background. 4-card grid. Each card: image tile (alternating left/right on mobile, top on desktop), role badge (colored pill), name, Latin binomial in italic, function description.

Role badge colors come from the design system's role tokens. Myaxyl's role labels map to the color tokens as follows:

| Role label | CSS class | Token family | Color |
|---|---|---|---|
| Pain Relief | `role--pain-relief` | `--role-recovery-*` | Blue |
| Anti-Inflammatory | `role--anti-inflammatory` | `--role-strength-*` | Amber |
| Recovery | `role--recovery` | `--role-growth-*` | Green |
| Absorption | `role--absorption` | `--role-nourish-*` | Gold |

Add these four class definitions in `myaxyl.css` using the existing token values.

### Sesame oil base (§12)
White background. Brown eyebrow "THE BASE", serif H2, centered intro paragraph (`max-width: 520px`). Below the intro: 3-card row with 1 hero card (Sesame Oil, wider) and 2 supporting cards (Eucalyptus, Lemongrass, narrower). Circle icons (80px diameter) for each. Desktop grid: `grid-template-columns: 1.6fr 1fr 1fr`. Mobile: flex-wrap.

### What's in / What's out (§13)
Cream background. Brown eyebrow, serif H2 "Clean, by the back label." Two columns separated by a vertical divider. Left column "What's in" — 3 items with pale green check circles. Right column "What's out" — 3 items with pale red X circles.

### Testimonials — curated (§14)
Dark green background (`--green`). 2 testimonials in a side-by-side grid on desktop, stacked on mobile. Each testimonial: amber star row, serif italic quote (off-yellow color), name, meta line (city + timeframe), timeframe result tag (e.g., "↑ Fast Recovery") with amber top-border.

### Compare (§15)
White background. Brown eyebrow "COMPARE", serif H2 "Why not a generic pain spray?" 2-column grid on desktop ≥640px, stacked on mobile. Left column "Myaxyl Oil" uses `#2a4a3d` background with off-yellow text. Right column "Generic Pain Spray" uses cream background with ink-80 text. 4 rows, each with a label and value in each column.

### Persona tiles (§16)
Cream background. Brown eyebrow "IS THIS FOR YOU?", serif H2 "Who uses Myaxyl Oil." 4-column grid on desktop ≥1024px, 2×2 on tablet, single column on mobile. Each tile: white card with 1px soft border and `--shadow-sm`, `--r-md` radius. Heading (persona label, Avenir heavy uppercase, letter-spaced) + 2-3 line body description.

```jsx
<section className="personas">
  <div className="eyebrow" style={{color:'var(--brown)'}}>Is this for you?</div>
  <h2>Who uses Myaxyl Oil.</h2>
  <div className="personas__grid">
    {personas.map(p => (
      <div className="persona-card" key={p.label}>
        <div className="persona-card__label">{p.label}</div>
        <div className="persona-card__desc">{p.desc}</div>
      </div>
    ))}
  </div>
</section>
```

### Application guide (§17)
White background. Full-bleed lifestyle image above the content. Brown eyebrow "HOW TO USE", serif H2 "Warm · Massage · Leave." 3-step grid. Each step: large serif numeral (01/02/03) in green, uppercase label, description paragraph (`max-width: 280px` per step).

### Accordion (§18)
Cream background. Cinnamon eyebrow "INFORMATION", serif H2 "Go deeper." Accordion list — 4 items. Each item: full-width trigger button (label + chevron), panel that expands (`max-height: 0` → `800px`, 0.3s ease). Multiple items can be open simultaneously. Chevron rotates 90° when open (0.25s).

### Reviews (§19)
White background. Cinnamon eyebrow "CUSTOMER REVIEWS", serif H2 with aggregate score. 2 review cards side-by-side on desktop, stacked on mobile. Each card: amber star row, "Verified Purchase" badge, quote in serif italic, name (uppercase), city. Below grid: outline CTA button "Read all N reviews" — green border inverts to filled green on hover.

### Closing (§20)
Dark green background (`--green`). Centered content. Serif H2 "Some formulas don't need improving." with sub-line in serif italic below. Off-yellow CTA button with the price. Rational anchor line beneath ("200 ml · ~30 sessions · ~₹15 per session").

### Sticky buy bar (§21)
Fixed to bottom (`z-index: 80`). On mobile: transparent background, ATC button full-width, thumbnail and info hidden. On desktop ≥1024px: frosted cream background (`rgba(253,252,248,0.96)` + `backdrop-filter: blur(10px)`), upward shadow, inline thumbnail + product name + price + ATC button. ATC button width: `min-width: 340px; max-width: 420px`.

### Footer spacer (§22)
Empty `<div style={{height:'90px'}}></div>` at the bottom of the page to ensure the sticky bar never covers closing content.

## 1.5 Asset strategy

### Gallery hero imagery — local assets

The 6 gallery hero images are stored at `design-system/assets/hero-1.webp` through `hero-6.webp`. Reference them directly as local file paths:

| Slot | File | Purpose |
|---|---|---|
| 1 | `design-system/assets/hero-1.webp` | Primary product shot — 200ml bottle, front-facing hero angle |
| 2 | `design-system/assets/hero-2.webp` | Secondary product shot — 60ml trial size or alternate angle |
| 3 | `design-system/assets/hero-3.webp` | Application context — oil being applied to affected area |
| 4 | `design-system/assets/hero-4.webp` | Lifestyle context — active use scenario (sport, recovery, work) |
| 5 | `design-system/assets/hero-5.webp` | Detail shot — texture, pour, or packaging close-up |
| 6 | `design-system/assets/hero-6.webp` | Back label or supplementary context |

**Dependency:** All 6 hero files must depict Myaxyl Oil specifically. Replace the placeholder files currently in `design-system/assets/` with Myaxyl-specific photography before the build goes live. File names remain the same (`hero-1.webp` through `hero-6.webp`) — swap the files in-place.

### Regimen partner imagery — Shopify CDN

| Purpose | URL |
|---|---|
| Myaxyl Cream (regimen partner) | `https://keralaayurveda.com/cdn/shop/files/MyaxylCream.png` |
| Yogaraja Guggulu Tablets (regimen partner) | `https://keralaayurveda.com/cdn/shop/files/YogarajaGugguluTablets.png` |

Reference these directly in `<img src="...">` or download into `docs/assets/` if local hosting is preferred.

### Placeholder tiles — for imagery not yet available

For ingredient cards (Devadaru, Nandivriksha, Rasna, Sesame seed), timeline images, application-guide lifestyle image, and the sesame-oil-base section icons: use CSS-rendered placeholder tiles.

```css
.placeholder-tile{
  background:var(--cream);
  border:1px solid var(--border-soft);
  aspect-ratio:1/1;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:var(--serif);
  font-style:italic;
  color:var(--ink-60);
  font-size:13px;
  text-align:center;
  padding:8px;
}
```

Each placeholder carries a small italic serif label (e.g., *Devadaru*). This is a known dependency, flagged in the QA checklist and the handoff note.

### Icons — from the design system

All `assets/*.svg` from the design system work as-is: `chevron.svg`, `i-bag.svg`, `i-cash.svg`, `i-check.svg`, `i-info.svg`, `i-return.svg`, `i-truck.svg`, `i-x.svg`, `ritual.svg`, `star.svg`, `star-half.svg`. Reference via `<img src="../design-system/assets/...">`.

## 1.6 Copy compliance — non-negotiable rules

Enforced throughout this file. Any edit to the copy must preserve them:

1. **Hedging verbs.** Always: *helps, supports, minimizes, promotes, traditionally used to*. Never: *cures, stops, eliminates, guaranteed, proven to*.
2. **No exclamation marks.** Anywhere. Not in copy, not in badges, not in testimonials.
3. **Sentence case for headlines.** Every headline ends with a period — fragments too. "Go deeper." not "Go deeper".
4. **ALL CAPS for section labels and CTAs only** — with letter-spacing.
5. **Em dash (—)** is the signature connector. Use for qualifiers: *"...within minutes — no menthol burn."*
6. **Bullet separator (·)** for inline label fragments: *"JOINT PAIN · MUSCLE RECOVERY · SPORTS INJURY"*.
7. **Banned words:** best, ancient, breakthrough, revolutionary, secret, ultimate, amazing, incredible, luxurious, mystical, silky, exotic.
8. **No emoji.** Unicode checkmark `✓` allowed only in Add-to-Cart success state and check rows.
9. **Testimonials:** First person, past tense observation. Attribution format `— First name Last initial., City`.
10. **Price formatting:** `₹437` not `Rs 437`; MRP strikethrough always where a discount exists; per-session math where relevant.

## 1.7 Framework compliance — what the PDP must do

The v3.1 framework requirements for Myaxyl's archetype treatment. Acceptance criteria:

- **#2 outcome promise is dual-beat** — speed first, recovery second. Do not lead with recovery.
- **#4 mechanism retains full Zone 2 depth** — the "supports inflammation, doesn't block it" argument is the differentiation story and must be present in full.
- **#4a sensory callout is present** — required for Topical archetype.
- **#5 timeline uses a compressed-span structure** — Minutes / Day 1 / Week 2+ (not a multi-week or multi-month span).
- **#6 usage is elevated to Zone 1** — ritual panel visible above the fold, with technique instruction.
- **#7 safety is proactive** — consolidated in Zone 3, not scattered across FAQ.
- **#8 social proof is dual-deployed** — curated set in Zone 2 (Testimonials section, §14), aggregate UGC block in Zone 4 (Reviews section, §19).
- **Comparison is elevated to the Zone 2/3 bridge** — position #15 in the section order.
- **Persona tiles include all 4 personas** — fitness, professionals, geriatric, kids & teens.
- **Regimen cross-sell is dual** — format partner (Myaxyl Cream) + internal-support partner (Yogaraja Guggulu Tablets).

---

# Part 2 — Section-by-Section Content

Each section below maps to the section order defined in §1.3 and provides the exact copy and structured data to populate. Copy is final — do not rewrite. Data tables are complete — do not invent entries.

## 2.1 Header (§1)
**Logo:** `../design-system/assets/logo.webp`
**Nav links:** Shop by Concern · Shop by Doshas · Self Care Bundles · Clinics · Academy

No copy changes from the design system default. The header is a reusable chrome element.

## 2.2 Gallery (§2)
**6 slides.** Best-seller pill badge on slide 1. All images are local assets from `design-system/assets/`.

| Slot | Image path | Alt text |
|---|---|---|
| 1 | `design-system/assets/hero-1.webp` | Myaxyl Pain Relief Oil 200ml bottle — front-facing hero |
| 2 | `design-system/assets/hero-2.webp` | Myaxyl Pain Relief Oil 60ml travel size |
| 3 | `design-system/assets/hero-3.webp` | Myaxyl Oil being applied to affected area |
| 4 | `design-system/assets/hero-4.webp` | Active-use lifestyle context |
| 5 | `design-system/assets/hero-5.webp` | Detail shot — texture and pour |
| 6 | `design-system/assets/hero-6.webp` | Back label and supplementary context |

**Gallery badge:** `BEST SELLER · PAIN RELIEF`

**Implementation note:** The Gallery component pattern in the design system references a fixed list of hero files. For Myaxyl, the array extends to 6 images: `["hero-1","hero-2","hero-3","hero-4","hero-5","hero-6"].map(n => \`../design-system/assets/${n}.webp\`)`.

## 2.3 Stats bar (§3)
**4 cells:**

| Cell | Value | Label |
|---|---|---|
| 1 | 4.7 ★ | rating |
| 2 | N (pull live) | reviews |
| 3 | 94% | recommend |
| 4 | ~₹15 | per session |

The review count should pull live from Shopify if possible; otherwise use the count displayed on the live Shopify PDP at build time.

## 2.4 Product info (§4)

**Category badge:**
`· JOINT PAIN · MUSCLE RECOVERY · SPORTS INJURY`

**H1 (product name):**
`Myaxyl Oil`

**Italic subtitle (serif):**
`Relief within minutes, recovery that lasts the days that follow.`

**Meta line (credentials):**
`Made by BAMS doctors  ·  GMP & ISO-certified facility  ·  FDA compliant & AYUSH licensed`

**Rating block:**
`★★★★★  4.7 · N reviews`

**Micro-testimonial (amber left-border card):**
```
"Back to the gym in two days — and not because the pain came back."
— Aditi M., Mumbai
```

**Ritual panel (the Zone 1 usage headline, elevated):**
```
THE RITUAL
A few drops. Circular massage, direction of hair growth. Absorbs in about a minute.
```

**Delivery badges (3):**
- `2-4 day delivery` (i-truck.svg)
- `COD available` (i-cash.svg)
- `Easy returns` (i-return.svg)

**Size selector (above ATC):**
- 200 ml — default, ₹437 (MRP ₹460, 5% off)
- 60 ml — trial size, ₹150 (MRP, no discount)

Dynamic state — the price block updates on size change. 60 ml does not carry a sale discount, so no strikethrough is shown when selected.

## 2.5 Trust markers (§5)
**5 cells (value / label):**

| Cell | Value | Label |
|---|---|---|
| 1 | 1945 | Est. |
| 2 | GMP | Certified |
| 3 | ISO | Certified |
| 4 | FDA | Compliant |
| 5 | AYUSH | Licensed |

## 2.6 Regimen strip (§6)

**Section label (small, above grid):**
`COMPLETE THE REGIMEN`

**Card 1 — Format partner:**
- Image: `MyaxylCream.png`
- Title: `Myaxyl Cream 20g`
- Rationale: `For when you can't sit with oil — quick touch-ups, travel, office.`
- Button: `+ ₹80` → `✓ Added`

**Card 2 — Internal partner:**
- Image: `YogarajaGugguluTablets.png`
- Title: `Yogaraja Guggulu Tablets`
- Rationale: `Internal joint support — for sustained care beyond the application.`
- Button: `+ ₹170` → `✓ Added`

## 2.7 Mechanism (§7)

**Eyebrow:** `HOW IT WORKS` (brown)

**H2 headline:**
`Two actions. One oil.`

**Body paragraph:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow. Sesame oil carries the herbal actives into deep tissue — neurons are wrapped in a lipid-recognising membrane, which is why an oil-based formula reaches pain pathways at the neural level while an aerosol spray cannot. Devadaru and Nandivriksha support the body's inflammatory response at every stage of recovery — not just the acute phase, but through the full healing cycle. Rasna helps reduce oxidative stress at the injury site, supporting tissue regeneration from within. The result is relief that comes quickly and recovery that holds.
```

## 2.8 First-use sensory callout (§8)

**Eyebrow:** `FIRST USE` (brown)

**H2 headline:**
`What you'll feel first.`

**Body paragraph:**
```
A cooling sensation on contact — the eucalyptus settling in. Within seconds, a light warmth as the sesame oil absorbs. No menthol burn. No capsaicin sting. The cool-and-warm combination is the formula signalling it's working.
```

**Micro-testimonial (amber left-border):**
```
"The first time I used it, I was waiting for the burn. It never came — just a calm cooling that turned into warmth."
— Rohan B., Bengaluru
```

## 2.9 Honest sequence (§9)

**Quote (Amstir serif, centered, `--off-yellow` color):**
`Relief is fast. Recovery takes a little longer.`

**Sub-line (serif italic, smaller):**
`Both matter — and you get both.`

## 2.10 Timeline (§10)

**Eyebrow:** `WHAT TO EXPECT` (cinnamon)
**H2:** `The honest sequence.`

**3 steps:**

| Stage | Title | Body | Image placeholder |
|---|---|---|---|
| Within minutes | Cooling and warmth sets in. | The pain signal softens. Stiffness begins to ease. | *Application* (italic) |
| Within the day | Swelling reduces. | Mobility returns. A full range of motion feels closer. | *Recovery* (italic) |
| Week 2 onward | Tissue recovers. | Fewer recurrences. Better flexibility over time. | *Long term* (italic) |

**Disclaimer (small, centered, under grid):**
`Based on consistent use as directed. Individual results may vary.`

## 2.11 Ingredients (§11)

**Eyebrow:** `WHAT'S INSIDE` (brown)
**H2:** `Four actives. One formula.`

**4 ingredient cards.**

| Name | Latin | Role | Description | Placeholder label |
|---|---|---|---|---|
| Devadaru | *Cedrus deodara* | Pain Relief | Himalayan cedar with alpha and beta himachalene — the pain-relief action. Sourced from Nepal. | *Devadaru* |
| Nandivriksha | *Tabernaemontana divaricata* | Anti-Inflammatory | Alkaloids and terpenoids calm inflammatory cytokines. Native to Kerala — used as fresh juice. | *Nandivriksha* |
| Rasna | *Alpinia galanga* | Recovery | Helps reduce inflammatory cytokines, calms the immune response at the injury site, and supports tissue regeneration by reducing oxidative stress. Traditionally used in musculoskeletal care. Sourced from West Bengal. | *Rasna* |
| Sesame Oil | *Sesamum indicum* | Absorption | The classical base — 45-63% derivable oil content. Carries the actives into deep tissue. | *Sesame* |

**Role badge CSS** (add to `myaxyl.css`):

```css
.role--pain-relief{
  background:var(--role-recovery-bg);
  color:var(--role-recovery-fg);
}
.role--anti-inflammatory{
  background:var(--role-strength-bg);
  color:var(--role-strength-fg);
}
.role--recovery{
  background:var(--role-growth-bg);
  color:var(--role-growth-fg);
}
.role--absorption{
  background:var(--role-nourish-bg);
  color:var(--role-nourish-fg);
}
```

## 2.12 Sesame oil base (§12)

**Eyebrow:** `THE BASE` (brown)
**H2:** `The Queen of oils.`

**Intro paragraph (serif, `max-width: 520px`, centered):**
```
The classical differentiator is not just what's in the oil — it's what carries it. Sesame oil holds the highest percentage of carrier-grade oil among traditional bases, and it's the one Ayurveda reaches for first in musculoskeletal care.
```

**3 cards:**

| Card | Label | Description |
|---|---|---|
| 1 (hero, wider) | Sesame Oil | 45-55% derivable oil. Oleic and linoleic acids that the body cannot synthesize on its own. Deep-tissue absorption — the classical carrier for external pain formulations. |
| 2 | Eucalyptus | Cooling on contact. Desensitises surface pain receptors. |
| 3 | Lemongrass | Gentle warmth. Increases local blood flow to deliver oxygen and nutrients to the healing tissue — and helps clear inflammatory byproducts from the site. |

Circle icon tiles at 80px diameter. Hero card (Sesame Oil) spans wider on desktop (`grid-template-columns: 1.6fr 1fr 1fr`). Mobile: wrap to flex column.

## 2.13 What's in / What's out (§13)

**Eyebrow:** `WHAT'S IN IT` (brown)
**H2:** `Clean, by the back label.`

**What's in (3 check items):**
- 100% natural herbal actives
- Cold-pressed sesame oil base
- Herbal oils (eucalyptus, lemongrass, peppermint)

**What's out (4 X items):**
- No menthol (no counterirritant sting)
- No capsaicin (no burning sensation)
- No synthetic fragrance or mineral oil
- No dependency, tolerance build-up, or resistance risk

## 2.14 Testimonials (§14)

**2 testimonials:**

| Quote | Name · City · Time | Result tag |
|---|---|---|
| "Back to the gym in two days — and not because the pain came back. My quad was actually healing, not just numbed." | Aditi M. · Mumbai · Day 2 | ↑ Fast Recovery |
| "I've used a pain spray for years. Switched to this after a bad sprain. The mornings are what changed — less stiffness, easier to get moving." | Anil R. · Pune · Week 3 | ↑ Less Stiffness |

## 2.15 Compare (§15)

**Eyebrow:** `COMPARE` (brown)
**H2:** `Why not a generic pain spray?`

**Column headers:**
- Us: `Myaxyl Oil`
- Them: `Generic Pain Spray`

**4 rows:**

| Attribute | Myaxyl Oil | Generic Pain Spray |
|---|---|---|
| Mechanism | Supports inflammatory response at every stage | Blocks pain signal |
| Absorption | Deep tissue via sesame oil base | Superficial sensory block |
| Collagen synthesis | Unaffected — tissue repair continues | Inhibited — slows repair and regeneration |
| Recovery | Tissue repair and regeneration | No curative action |
| Dependency | No tolerance, no resistance, no rebound | Tolerance and dependency risk with repeated use |

No editorialising above or below the table. Facts in columns. The table now has 5 rows — ensure the prototype renders all 5.

## 2.16 Application guide (§17)

**Eyebrow:** `HOW TO USE` (brown)
**H2:** `Warm · Massage · Leave.`

**Lifestyle image:** full-bleed above the steps. Use a Myaxyl lifestyle image from §1.5, or a placeholder tile with `aspect-ratio: 21/9` labelled *Application lifestyle*.

**3 steps:**

| Step | Label | Description |
|---|---|---|
| 01 | WARM | Self-warming formula. No heating needed — just a few drops in the palm. |
| 02 | MASSAGE | Circular motions in the direction of hair growth. Light pressure — the formula penetrates on its own. No deep kneading required. |
| 03 | LEAVE | Absorbs in about a minute. Leave on, or rinse with warm water and mild soap if preferred. Apply 1-2 times daily. |

## 2.18 Accordion (§18)

**Eyebrow:** `INFORMATION` (cinnamon)
**H2:** `Go deeper.`

**4 items:**

| Trigger | Content |
|---|---|
| Preparation method — Thaila Paaka | Fresh juice of Nandivriksha is combined with a fine paste of Devadaru and Rasna in a sesame oil base. The mixture is heated on low flame in the classical Thaila Paaka method, until the water content has evaporated and the herbal actives have bound to the oil. Essential oils — eucalyptus and lemongrass — are infused at the final stage overnight. The oil is filtered warm. |
| Safety & side effects | For external use only. Patch test before first application. Avoid open wounds — apply around the area instead. Avoid contact with eyes, nose, and mouth. Rare: mild tingling or warmth in sensitive users — usually subsides within minutes. Safe during pregnancy for external use. Adult supervision recommended for younger children. |
| Full ingredient list | Devadaru (*Cedrus deodara*), Nandivriksha (*Tabernaemontana divaricata*), Rasna (*Alpinia galanga*), Sesame oil (*Sesamum indicum*) base, Eucalyptus oil, Lemongrass oil, Peppermint essential oil. No synthetic fragrance. No mineral oil. No parabens. |
| When not to use | Not to be applied directly on open wounds or broken skin. Not to be taken internally. If rigorous exercise is immediately planned, allow 10-15 minutes after application. Avoid cold showers or cold beverages immediately post-application — they work against the oil's warming action. |
| The Ayurvedic science — why oil, why these herbs. | In Ayurveda, pain (Ruja) is the classical expression of aggravated Vata dosha. External injury — Aghata — disturbs Vata in the Asthi (bone) and Mamsa (muscle) tissues, triggering a tridoshic inflammation: heat from aggravated Pitta, swelling from aggravated Kapha, pain and stiffness from Vata. The classical first-line treatment for this presentation is Bahya Snehan — external application of a lipid-based formulation to the affected tissue. Sesame oil is the classical base for Vata-predominant musculoskeletal conditions. Devadaru and Nandivriksha help balance the vitiated Vata and Pitta; Rasna supports the lower extremities (Adhyavata); lemongrass and eucalyptus address the Kapha component. The treatment goal is Tridosha balance — restoring the body's natural equilibrium, not suppressing the symptoms of its recovery. |

## 2.19 Reviews (§19)

**Eyebrow:** `CUSTOMER REVIEWS` (cinnamon)
**H2:** `4.7 · N verified reviews` (N = pull live)

**2 extended review cards:**

| Quote | Name · City |
|---|---|
| "My father has knee stiffness every morning. We switched from a generic spray to this on his doctor's advice. A few weeks in, he's moving around the house without the first-hour limp. Slower than the spray, but the mornings are genuinely better now." | Meera K. · Kochi |
| "Got a bad ankle sprain playing tennis. Iced it, then started using this twice a day. The cooling is real — not a numbing block, more like the swelling actually going down. Walked fine on day three." | Karthik V. · Hyderabad |

**Outline CTA:** `Read all N reviews`

## 2.20 Closing (§20)

**H2 (serif, centered):**
`The Proprietary Kerala Ayurveda formulation.`

**Sub-line (serif italic, smaller):**
`This is one of them.`

**CTA button (`--off-yellow` background, `--green` text):**
`Add to Cart — ₹437`

**Rational anchor (below CTA, small):**
`200 ml · ~30 sessions · ~₹15 per session`

## 2.21 Sticky buy bar (§21)

**Thumbnail:** `design-system/assets/hero-1.webp` (same as gallery slide 1)
**Title:** `Myaxyl Oil`
**Sub:** `200 ml · ₹437`
**ATC:**
- Icon: `i-bag.svg`
- Main: `Add to Cart`
- New price: `₹437`

---

# Part 3 — Reference Data

## 3.1 Full FAQ (for use in accordion or supplementary panel)

These are answers to likely consumer questions. The Accordion (§2.18) uses the top 4 most-common items. The remaining Q&As can be held for post-launch use or a dedicated FAQ page.

**Q: How fast does Myaxyl Oil work?**
Cooling sets in within minutes of application. Pain reduction and improved mobility are typically felt within the day. Long-term recovery benefits build over two weeks of consistent use.

**Q: Does it burn like generic pain sprays?**
No. Myaxyl contains no menthol, no capsaicin, and no counterirritants. The cooling comes from eucalyptus; the warmth comes from the sesame oil base and lemongrass — both gentle. No burn, no sting.

**Q: Can it be used on nerve pain?**
Myaxyl is formulated for musculoskeletal pain — joints, muscles, sprains, sports injuries. For nerve pain specifically, consult a Kerala Ayurveda doctor for a more suitable formulation.

**Q: Can kids and teens use it?**
Yes. Safe for external application across ages. Adult supervision recommended for younger children. Patch test before first use.

**Q: Is it safe during pregnancy?**
Safe for external use during pregnancy. Patch test recommended. Avoid abdominal application without consulting a doctor.

**Q: Do I need to warm the oil before applying?**
No. Myaxyl's formulation is self-warming — the sesame oil base and essential oils activate warmth on contact. Heating is not required.

**Q: Can I use it with ongoing medication?**
Myaxyl is external-use only. It does not interact with oral medication at the systemic level. If you are on topical treatments for the same area, consult your doctor before combining.

**Q: How long does one bottle last?**
The 200 ml bottle covers approximately 30 sessions for a single joint area, used 1-2 times daily. Roughly ₹15 per session.

**Q: Will the pain return once I stop using Myaxyl?**
Myaxyl supports tissue repair rather than masking the pain signal — so when the underlying tissue heals, the tendency toward recurring pain reduces. Suppressing inflammation without supporting recovery risks incomplete healing, which increases the likelihood of the same injury recurring and the pain returning. Continued use through the recovery phase, not just the acute episode, is where the long-term benefit is built.

**Q: What is the risk of staying on pain-suppressing sprays long-term?**
Repeated suppression of the inflammatory response — without supporting recovery — can lead to incomplete tissue healing, creating weak spots that are more vulnerable to re-injury. Over time, prolonged inflammation that does not fully resolve can contribute to chronic pain that is increasingly difficult to address with topical treatment alone. Myaxyl is designed to support the body's natural healing cycle at every stage, reducing the likelihood of this progression.

**Q: Should I rest the injury while using Myaxyl?**
Myaxyl helps with pain and inflammation quickly — but the tissue itself needs time to restore its structural strength. In Ayurveda, the first principle of treatment for acute injury is Nidan Parivarjan — removing the causative factor, meaning reduced load on the affected tissue. Muscle, ligaments, and tendons typically need approximately 4-5 days of reduced activity before they can safely resume full load. Myaxyl supports recovery during this rest window. Resuming full activity before the tissue has recovered extends the healing timeline regardless of what treatment is applied.

## 3.2 Additional testimonials (rotation pool)

The two primary testimonials are in §2.14 (Zone 2 curated) and §2.19 (Zone 4 extended). Additional options for rotation:

- "I was sceptical about an oil over a spray — the spray is just faster. But the spray wore off in two hours and the oil got me through a full workday." — Divya T., Chennai · Week 1
- "Used it for my father's arthritis. He says it doesn't feel like medicine, which I think is the point." — Rohit S., Delhi · Month 1
- "The cooling is the most unusual part — you expect a burn from other sprays. This just feels calm." — Anjali D., Bengaluru · Day 1

All testimonials must be validated through the review seeding process before going live. Use placeholders in the interim if seeding is incomplete.

## 3.3 Compliance check — tone

Before marking the build complete, verify every item:

- [ ] Every outcome claim uses hedging verbs (helps / supports / minimizes / promotes)
- [ ] No exclamation marks anywhere in the copy
- [ ] All H2 headlines end with a period, including fragments
- [ ] Section labels are ALL CAPS with letter-spacing (use `.eyebrow` class)
- [ ] No banned words (best, ancient, breakthrough, revolutionary, secret, ultimate, amazing, incredible, luxurious, mystical, silky, exotic)
- [ ] Em dash (—) used consistently; not hyphen (-)
- [ ] Bullet separator (·) used for label fragments
- [ ] All prices formatted as `₹N` with MRP strikethrough where a discount exists
- [ ] Testimonial attribution follows `— First name Last initial., City` pattern
- [ ] Compare table has no editorial adjectives — facts only

## 3.4 Compliance check — visual

- [ ] Background rhythm follows cream → white → cream → dark green → repeat, closing on dark green
- [ ] All primary CTAs are rust (`--rust` `#864E3A`), never green
- [ ] Amber (`--amber`) is used only for ratings / amber accents, never for primary CTAs
- [ ] All shadows match the three-tier system (`--shadow-sm`/`md`/`lg` plus specialty)
- [ ] Amstir used only for headlines, prices, product names, italic quotes, ritual text — everything else is Avenir
- [ ] No gradients, no noise, no decorative patterns
- [ ] No emoji anywhere (Unicode ✓ allowed only in Add-to-Cart success state and check rows)
- [ ] Role badges use the existing `--role-*` tokens (no new color introductions — only new class names)
- [ ] Sticky bar reserves bottom padding (80px mobile, 100px desktop)
- [ ] Gallery uses `--green-gallery` (`#435a45`) as tray background

## 3.5 Compliance check — framework

- [ ] #2 outcome promise leads with speed, then recovery
- [ ] #4 mechanism is full-depth — 4-5 sentences covering mechanism plus ingredients
- [ ] #4a sensory callout exists as a standalone section (§2.8)
- [ ] #5 timeline uses Minutes / Day 1 / Week 2+ structure
- [ ] #6 usage is visible in Zone 1 (ritual panel) and expanded in Zone 3 (application guide)
- [ ] #7 safety is consolidated and proactive (in accordion plus warnings in app guide)
- [ ] #8 is dual-deployed: Zone 2 curated testimonials (2 cards, timeframe-tagged) plus Zone 4 full reviews aggregate
- [ ] Comparison section is positioned at #15 in the section order, not at the end
- [ ] Persona tiles are present — 4 tiles, all four personas covered
- [ ] Regimen strip is 2 cards: format-ecosystem partner plus internal-support partner

---

# Part 4 — Handoff Notes

## 4.1 Known dependencies (non-blocking)

- **Gallery photography** — The 6 hero files at `design-system/assets/hero-1.webp` through `hero-6.webp` must be Myaxyl-specific product photography. If the current files in that folder are placeholders or depict a different product, they need to be swapped in-place before launch. File names stay the same; only the file contents change.
- **Ingredient photography** — Devadaru, Nandivriksha, Rasna, Sesame not currently available. Build with placeholder tiles per §1.5. Flagged for photography commission.
- **Review seeding** — 4.7 rating is live but curated reviews for Zone 2 (§2.14) need validation from the review agency. Placeholders acceptable at launch; swap in validated reviews post-seed.
- **Review count (N)** — Pull live from Shopify at build time. If unavailable, use the count displayed on the live Shopify PDP at build date.

## 4.2 Out of scope for this build

- No A/B test variants. Ship the v1 build first.
- No personalisation. First-time and returning visitors see the same PDP in this version.
- No expert consultation CTA — Myaxyl is OTC-forward.
- No subscription or auto-ship. Single-purchase PDP only.

## 4.3 Post-build review

Once the build is complete:

1. Load on mobile (375×812 iPhone SE, 390×844 iPhone 14) — verify sticky bar doesn't clip content, gallery swipes, accordion opens cleanly.
2. Load on desktop (1280px, 1440px) — verify sticky gallery doesn't detach, regimen cards sit side-by-side, persona tiles are 4-column.
3. Run through the three compliance checklists (§3.3 / §3.4 / §3.5). Any unchecked item is a blocker.
4. Read every line of copy aloud. The tone target is quiet confidence — authoritative without being boastful, warm without being sentimental. Anything that sounds like chemical-spray marketing ("fast results", "instant relief" as promises, urgency tactics) fails the tone check. Rewrite to match.

---

*End of content file. This file is self-contained — Claude Code should not need additional guidance beyond this and the design system folder. If ambiguity arises, defer to `design-system/README.md` and `design-system/SKILL.md`.*
