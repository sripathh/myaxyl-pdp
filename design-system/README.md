# Kerala Ayurveda Design System

The visual and verbal system for **Kerala Ayurveda (KAL)** — a trusted, holistic
Ayurvedic wellness brand bringing the 5,000-year-old healing science of Ayurveda
to modern consumers through products, clinical services, wellness retreats, and
education.

This design system was extracted from the **Neelibhringadi Keram PDP prototype**
and the **KAL Brand Document**. It covers the **KAL Global (Products)** business
line — the line this system defaults to. Other lines (Clinics, Ayurvedagram,
Academy, RU) share the same foundation with archetype modifiers; see
`brand-guide/brand-tone.md §8` for per-line voice shifts.

> **Brand essence:** "Authentic Ayurveda personalised for your Holistic Wellness"
> **Positioning formula:** Authentic = Heritage + Proven

---

## Sources

- **Figma file** (Neeli.fig) — mounted as VFS. 4 pages, 9 top-level frames.
  Focus areas: `/Mobile`, `/Desktop/Desktop`, `/Desktop/main`, `/Desktop/Mobile`.
- **Codebase** — `neeli-prototype/` mounted via File System Access API.
  Live prototype at `neeli-prototype/index.html` (980 lines of hand-authored
  HTML/CSS/JS). Brand guides at `neeli-prototype/brand-guide/`:
  - `brand-positioning.md` — architecture, values, trust arch, personas
  - `brand-tone.md` — voice attributes, register, language rules, CTAs
  - `brand-narrative-style.md` — master narrative, zones, storytelling devices
  - `design.md` — color, type, spacing, components (canonical)
- **Uploaded fonts** — Amstir-Regular + Avenir family (8 weights).
- **Uploaded logo** — `uploads/logo.webp`.

---

## Index

| Path | What's there |
|---|---|
| `README.md` | This file — brand overview, content & visual foundations |
| `SKILL.md` | Machine-readable skill manifest for Claude Code |
| `colors_and_type.css` | All CSS variables (color, type, shadow, radii, motion) |
| `fonts/` | `Amstir-Regular.woff2`, 7 Avenir weights |
| `assets/` | Logo, hero imagery, ingredient photos, icon SVGs |
| `preview/` | Design-system-tab cards: colors, type, components, brand |
| `ui_kits/pdp/` | KAL Global Product Detail Page — full click-through kit |
| `brand-guide/` | Full brand narrative, tone, positioning references |

---

## 1. Brand Architecture

KAL operates five business lines, each sharing the Sage archetype core:

| Line | Archetype Mix | Tone |
|---|---|---|
| **KAL Global** (Products) — *default in this system* | Sage + Innocent | Minimalist, Heritage, Credible, Relatable, Pure |
| KAL Clinics | Sage + Everyman + Caregiver | Warm, Relatable, Empathetic |
| KAL Ayurvedagram | Sage + Explorer | Calm, Authentic, Immersive, Sophisticated |
| RU (sub-brand) | Sage + Everyman + Creator | Smart, Crisp, With a Wink |
| KAL Academy | Sage + Creator + Explorer | Knowledgeable, Intellectual, Inspiring |

**Sage is the non-negotiable core.** When in doubt, apply the Sage's voice:
knowledgeable, assured, guiding.

---

## 2. Content Fundamentals

### Voice — five attributes on a spectrum

| Attribute | The brand is | The brand is not |
|---|---|---|
| **Confident, not boastful** | "Two wins. One formula." | No superlatives, no "!" |
| **Precise, not clinical** | "Fall reduction in 2-3 weeks" | Never medical-journal |
| **Warm, not soft** | "A cooling sensation within minutes" | Never flowery or vague |
| **Honest, not modest** | "Individual results may vary" | Never apologetic |
| **Authoritative, not exclusive** | Sanskrit + plain English | Never gatekeeps |

### Person / pronouns

- Product is second person — **"What you'll feel first"**, **"Is this for you?"**
- Brand rarely says "we"; it speaks as an institution, not a hustle.
- Testimonials are first person past tense — **"Less hair in the shower drain by week three."**

### Casing

| Context | Rule | Example |
|---|---|---|
| Headlines / H2 | Sentence case with a period | "The honest sequence." |
| Section labels | ALL CAPS + letter-spacing | "WHAT TO EXPECT" |
| CTAs / buttons | ALL CAPS + letter-spacing | "ADD TO CART" |
| Badges | ALL CAPS | "HAIR FALL · HAIR GROWTH" |
| Product name | Title case | "Neelibhringadi Keram" |
| Body | Sentence case only |  |

### Punctuation

- **Period** ends every sentence, including fragments. "Go deeper." not "Go deeper"
- **Em dash (—)** is the signature connector. "Supports new growth — within the first few weeks."
- **Bullet (·)** separates label segments inline. "HAIR FALL · HAIR GROWTH"
- **Exclamation marks — never.** Ellipses — never.

### Hedging verbs (compliance + trust)

Always: *helps, supports, minimizes, promotes, traditionally used to*
Never: *cures, stops, eliminates, guaranteed, proven to*

### Banned words (KAL Global)

*best, ancient* (use "classical" or "80+ year"), *breakthrough, revolutionary,
secret, ultimate, amazing, incredible, luxurious, mystical, silky, exotic.*
RU sub-brand is permitted "ancient"; KAL Global is not.

### Tone signatures (quotable)

- "Some formulas don't need improving. This is one of them."
- "Two wins. One formula."
- "Four herbs. Three milks. One formula."
- "Heritage is not nostalgia — it is evidence."
- "Root strength comes before visible density."
- "Thirty minutes, three times a week. Warm, massage, leave, rinse."

### Emoji

**Never.** Not in product copy, not in marketing, not in decks. Unicode
checkmarks (✓) are permitted only inside ATC success states ("✓ Added to Cart").
The brand uses icon SVGs, not emoji or unicode glyphs, for functional imagery.

---

## 3. Visual Foundations

### Overall vibe

Quiet, credible, editorial. The page reads like a **heritage pharmacy** — clean
surfaces, earthy accents, generous type. Nothing moves quickly, nothing shouts.
The palette is dominated by forest green and cream with warm rust/amber accents.
Imagery is warm-toned, natural, slightly golden — never cool, never mystical.

### Color

- **Two primary surfaces:** `--cream` (#F9F8F3) and `--white`.
- **One primary anchor:** `--green` (#1E4B3C) — section headings, logos, badges.
- **Three dark accents:** `#2A4A3D`, `#364837`, `#435a45` — used as immersive
  section backgrounds (honest sequence, stats bar, gallery).
- **One warm CTA color:** `--rust` (#864E3A) — reserved for purchase actions.
  **ATC is never green.**
- **Amber** (#FBBF24) is used for star ratings and as an amber-border accent on timeline thumbnails and cross-sell.
- Ink is always near-black `#191D18` with percentage variants (80/70/60/40/30).

See `colors_and_type.css` for the full token set including extended **Base
Palette 2** (Bhoomi Green, Wild Sage, Deep River, Chandan Soil, Burnt Nectar)
reserved for sub-brand / extension contexts.

### Type pairing

- **Amstir** (display serif) — headlines, prices, product names. Single weight
  (400). Hierarchy is through **size alone**, never weight. No native italic.
- **Avenir** (body sans) — everything else. Weights 400 / 500 / 800 / 900 with
  italics on 400 / 500 / 800. Editorial italic is Avenir-italic, not Amstir.
- Display sizes carry **negative letter-spacing** (−0.35 → −0.14px). Uppercase
  labels carry **positive tracking** (1 → 2.8px).

### Backgrounds

- Solid colors only. **No gradients, no noise, no patterns.**
- Section rhythm alternates: cream → white → cream → dark-green → repeat,
  closing on dark green. (See `design.md §1 Section Backgrounds`.)
- Imagery is **full-bleed** in gallery and application guide; otherwise imagery
  is confined to product cards (113px thumbnails, 80px milk circles).

### Imagery vibe

Warm, natural, lightly golden. Botanicals photographed on clean surfaces.
Hair/body photography is hand-focused, close-crop, no model faces. No stock,
no AI art. All hero gallery images use the gallery green (`#435a45`) as the
tray bg — imagery visually "sits" on that surface.

### Animation & motion

- **`ease` universally.** No custom cubic-beziers, no bounces, no springs.
- Durations are a deliberately short set: `0.1s` (press) · `0.15s` (hover bg) ·
  `0.2s` (opacity/hover) · `0.25s` (chevron rotate) · `0.3s` (menu slide,
  accordion expand) · `0.4s` (gallery crossfade).
- Gallery crossfades via opacity — **never a slide or zoom**.
- All motion is disabled under `@media (prefers-reduced-motion: reduce)`.

### Hover states

| Thing | Hover effect |
|---|---|
| Nav link | `opacity: 0.6 → 1` |
| Gallery arrow | `bg: rgba(255,255,255,0.85) → 1.0` |
| ATC button | `bg: --rust → --rust-dark (#743F2E)` |
| Cross-sell add | `bg: --amber → --amber-dark` |
| Reviews outline CTA | inverts — `bg: white → --green` with `color: --green → white` |
| Accordion trigger | `bg: white → --cream` |

The pattern: **opacity or a one-step color swap**. Never scale, never lift.

### Press states

- ATC `transform: scale(0.99)` on `:active` — subtle press.
- **No other element scales on press.** No ripples.

### Borders

- Default section/card border: `rgba(192,200,195,0.25)` — a cool soft grey, tuned
  to disappear on cream. Use via `--border-soft`.
- Stronger divider (trust markers, what's-in): `rgba(192,200,195,0.4)`.
- On dark green, borders are white with low alpha: `rgba(255,255,255,0.10/0.15/0.20)`.
- Borders are **1px** everywhere except the reviews outline CTA (`2px`) and
  active gallery thumbnail (`2px`).
- **No gradient borders, no dashed, no colored section dividers** except the
  amber-bordered thumbnail (timeline/cross-sell product) which uses
  `1px solid var(--amber)` as a product-quality accent.

### Shadows

Three-tier system tinted to purpose:

| Tier | Value | Tint |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | neutral — card rest, arrows |
| `--shadow-md` | `0 2px 12px rgba(0,0,0,0.08)` | neutral — thumb tray |
| `--shadow-lg` | `0 8px 32px rgba(30,75,60,0.12)` | **green-tinted** — menu panel |

Specialty shadows:
- **CTA (rust)**: `0 2px 8px rgba(134,78,58,0.25)` — ATC only.
- **Header sticky**: `0 2px 20px rgba(30,75,60,0.06)` — barely-there green.
- **Sticky bar (desktop upward)**: `0 -4px 24px rgba(30,75,60,0.10)`.

**Rule:** Brand shadows are green-tinted. CTA shadows are rust-tinted. Generic
UI uses neutral black alpha. Shadows are soft and low-spread — never dramatic.

### Protection gradients vs capsules

KAL does not use overlay gradients to protect text on imagery. Where text sits
on a colored surface (gallery, honest sequence, testimonials, closing), the
**surface itself is a solid color** — no protection gradient needed.

Capsule patterns (pill badges with `border-radius: 999px`) are used for:
- Product category badge (green outline)
- Gallery "BEST SELLER" badge (green solid, off-yellow text)
- Verified review badges

### Layout rules

- Header: `sticky; top: 0; z-index: 90` — frosted glass
  `rgba(253,252,248,0.92)` + `backdrop-filter: blur(6px)`.
- PDP gallery (desktop 1024+): `position: sticky; top: 72px`.
- Sticky buy bar: `fixed; bottom: 0; z-index: 80`. Body always reserves
  `padding-bottom: 80px` (mob) / `100px` (desk).
- Max-widths are **context-specific**, not a single container: 1440 (page),
  1298 (testimonials), 1143 (what's-in), 1100 (milks), 900 (reviews),
  720 (mechanism body), 700 (compare), 520 (milks intro), 440 (closing CTA),
  340 (honest sequence sub), 280 (app guide step desc).
- Mobile padding is `24px` horizontal; desktop section padding grows to
  `40–80px` horizontal and `48–120px` vertical.

### Transparency & blur

- `backdrop-filter: blur(4px)` → gallery arrows.
- `backdrop-filter: blur(6px)` → sticky header.
- `backdrop-filter: blur(10px)` → desktop sticky buy bar.
- **No frosted cards, no glass panels inside content**. Blur is reserved for
  floating chrome (header, sticky bar, gallery arrows).

### Color vibe of imagery

Warm, slightly golden, natural light. Saturation is normal — not high, not
muted. No B&W, no grain, no duotone. Ingredient photography uses **neutral
cream/white product surfaces**; hero photography uses warm natural
environments. Imagery always sits on a colored surface (`#435a45` gallery,
`--cream` cards) — never on pure white.

### Corner radii

| Token | Value | Usage |
|---|---|---|
| `--r-xs` | 3px | Testimonial tags |
| `--r-sm` | 6px | Gallery thumbnails |
| `--r-md` | 8px | Cards, accordion, icon panels |
| `--r-lg` | 10px | ATC button, ritual guide, thumbnails |
| `--r-xl` | 12px | Cross-sell strip, milk cards, compare cols |
| `--r-pill` | 999px | Category badges, trust pills |

**Rule:** Never more than **12px** on a content card. The system's roundness
is gentle — feels crafted, not plastic. Radii grow with surface size, not
importance.

### Card style

Cards are **white on cream** or **cream on white**, 8–12px radius, `1px solid
--border-soft`, `var(--shadow-sm)` at rest. **No hover lift**. No colored
left-border accent. No rounded-corner-with-colored-stripe patterns.

---

## 4. Iconography

### System

KAL uses **custom SVG icons** shipped as individual files, referenced via
`<img src>` tags — not a sprite, not an icon font, not a CDN library. Every
icon in the PDP is in `assets/` (14 SVGs covering: bag, cash, check ×2, info,
return, truck, x, chevron, reorder, ritual, ritual-night, star, star-half).

### Style

- **1.5px stroke** line icons, no fills except the stars.
- Rounded line caps/joins (`stroke-linejoin: round`).
- Currentcolor-based — icons inherit color from context.
- Size grid: `12px` (inline in stats), `16px` (delivery badges, gallery arrows,
  body accents), `20–22px` (ATC, ritual guide), `32px` (section-level callouts).
- On dark surfaces, icons use `filter: brightness(0) invert(1)` to appear
  white — they are authored in ink and inverted at use.

### Emoji

Never used. Not in product copy, not in marketing, not as inline accents.

### Unicode as icons

- `•` / `·` used as inline separators (between label fragments).
- `↑` used as prefix on testimonial result tags.
- `✓` used only in the "Added to Cart" success state and "in-stock" check rows.
- Star rating glyphs use dedicated `star.svg` / `star-half.svg` — not Unicode ★.

### Logo

Wordmark-only; stored as `assets/logo.webp`. Usually sits at `~44–48px` height
in the header. Never place on imagery without a clean solid backdrop. Never
recolor — it ships in its own color (dark green/brown on cream).

### Substitutions

**None.** All original icons and fonts are provided. The only "fallback" is
Amstir → Cormorant Garamond → Georgia in the CSS stack, which should not
activate in practice.

---

## 5. Products represented

Only one product is fully represented in the provided materials:

- **Neelibhringadi Keram** — Ayurvedic hair oil. ₹315 (MRP ₹350). 200ml.
  KAL Global line. Helps minimize hair fall and supports new growth.
  The entire PDP, brand tone guide, and Figma file are built around this SKU.

The brand operates 300+ formulations (classical Ayurvedic products), 20+
clinics, 3 wellness retreats, and an Academy — but the design system and
UI kit in this project cover the **product page surface** only.

---

## 6. What's next / caveats

- The UI kit in `ui_kits/pdp/` recreates the PDP as modular JSX components
  plus a live click-through at `ui_kits/pdp/index.html`.
- No slide template was provided; slide samples were **not** created.
- No app or separate marketing site was provided; UI kit coverage is
  limited to the product detail page surface.
- All fonts and icons are original — no substitutions were necessary.

See `SKILL.md` for a machine-readable manifest.
