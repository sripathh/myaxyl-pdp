# Myaxyl Oil PDP — Handoff

**Build date:** 2026-04-19
**Content update:** 2026-04-19 — 9 changes applied from `MYAXYL_CONTENT_GAPS_UPDATE.md` (mechanism copy, Rasna card, Lemongrass card, What's Out 4th item, Compare table 5 rows, Step 02, Accordion 5th item, 3 FAQ additions)
**Spec version:** `MYAXYL_OIL_PDP_CONTENT.md` v1.0
**Output:** `docs/index.html` + `docs/myaxyl.css`

---

## 1. What's built

All 21 sections per §1.3 of the content spec, in the specified order (persona tiles dropped per merchandising direction):

1. Header (sticky, frosted)
2. Gallery (6 slides, crossfade, swipe, best-seller flag)
3. Stats bar (4 cells — rating / reviews / recommend / per session)
4. Product info — badge, H1, subtitle, meta, rating, micro-testimonial, ritual panel, delivery badges, **size selector (200 ml / 60 ml with dynamic ATC price)**, ATC
5. Trust markers (Est. 1945 / GMP / ISO / FDA / AYUSH)
6. Regimen strip (rust band, 2 cards — Myaxyl Cream + Yogaraja Guggulu)
7. Mechanism — full Zone 2 depth
8. First-use sensory callout (new component, per §2.8)
9. Honest sequence (dark green centrepiece)
10. Timeline (Minutes / Day 1 / Week 2+)
11. Ingredients (4 cards with Latin names + role badges)
12. Sesame oil base (new section, 3-card layout: hero + 2 supporting, per §2.12)
13. What's in / What's out
14. Testimonials (2 timeframe-tagged, amber-top-border tag)
15. Compare (Myaxyl vs Generic Pain Spray)
16. Application guide (Warm · Massage · Leave)
17. Accordion — Go deeper (5 items — preparation, safety, full ingredients, usage, Ayurvedic science)
18. Reviews (aggregate + 2 extended cards + outline CTA)
19. Closing (heritage echo + off-yellow CTA + per-session anchor)
20. Sticky buy bar (mobile ATC-only / desktop full inline)
21. 90px footer spacer

CSS is additive overrides only — no edits to `design-system/colors_and_type.css` or `design-system/ui_kits/pdp/pdp.css`.

---

## 2. Placeholdered (and why)

| Item | State | Reason |
|---|---|---|
| Ingredient images (Devadaru, Nandivriksha, Rasna, Sesame seed) | Cream placeholder tile with italic serif label | Photography not yet commissioned |
| Timeline step images (Application / Recovery / Long term) | Amber-bordered placeholder tile | Timeline photography pending |
| Sesame-base icons (Sesame / Eucalyptus / Lemongrass, 80px circles) | Circular placeholder tile with italic serif label | Ingredient iconography not yet produced |
| Application-guide lifestyle image (21:9 hero above steps) | Wide placeholder tile | Lifestyle shoot pending |
| Hero gallery files (hero-1..hero-6.webp) | Referenced directly from `design-system/assets/` | Files must be swapped in-place with Myaxyl-specific photography before launch — current files are Neelibhringadi placeholders |

Placeholder tiles use the pattern defined in §1.5 of the spec: `--cream` background, `--border-soft`, `var(--serif)` italic label, `var(--ink-60)` color.

---

## 3. Open dependencies (non-blocking)

- **Gallery photography swap** — `design-system/assets/hero-1.webp` through `hero-6.webp` need Myaxyl-specific imagery. File names stay the same; only contents change.
- **Ingredient + timeline + sesame-base + lifestyle photography** — commission and replace placeholder tiles.
- **Review seeding** — `215` review count + `4.7` rating are hardcoded; pull live from Shopify at final build or post-launch.
- **Zone 2 curated testimonials** (Priya M., Anil R.) — await validation from the review seeding agency. Copy is per spec §2.14; swap in validated attribution post-seed.
- **Regimen partner images** — load from Shopify CDN (`MyaxylCream.png`, `YogarajaGugguluTablets.png`). Consider downloading into `docs/assets/` for offline builds.

---

## 4. Compliance results

### Tone (§3.3)
- [x] Outcome claims use hedging verbs (helps / supports / minimizes / promotes)
- [x] No exclamation marks in copy (verified via grep — only matches are JSX `!` operators and CSS `!important`)
- [x] All H2 headlines end with a period, including fragments ("Go deeper.", "Two actions. One oil.", "What you'll feel first.", etc.)
- [x] Section labels ALL CAPS via `.eyebrow` class (letter-spaced)
- [x] No banned words (verified via grep: best, ancient, breakthrough, revolutionary, secret, ultimate, amazing, incredible, luxurious, mystical, silky, exotic)
- [x] Em dash (—) used throughout for qualifiers
- [x] Bullet separator (·) used for inline label fragments ("Joint Pain · Muscle Recovery · Sports Injury")
- [x] Prices formatted as `₹N` with MRP strikethrough on 200 ml; no strikethrough on 60 ml (no discount)
- [x] Testimonial attribution format: `— Priya M., Mumbai`
- [x] Compare table — facts only, no editorial adjectives

### Visual (§3.4)
- [x] Background rhythm — cream (trust) → rust (regimen accent) → white (mechanism) → cream (sensory) → dark green (honest) → white (timeline) → cream (ingredients) → white (sesame) → cream (whats-in) → dark green (testimonials) → white (compare) → cream (personas) → white (app guide) → cream (accordion) → white (reviews) → dark green (closing)
- [x] All primary CTAs are rust (`--rust` `#864E3A`). Amber used only for ratings, timeline thumb border, regimen-card add button (amber-per-kit pattern)
- [x] Shadows follow three-tier system via tokens
- [x] Amstir used only for headlines, prices, product name, italic quotes, ritual text
- [x] No gradients, noise, or decorative patterns
- [x] No emoji — `✓` used only in ATC "Added" state, regimen "✓ Added" state, and `.review__verified::before` (per kit)
- [x] Role badges use existing `--role-*` tokens (no new color introductions)
- [x] Sticky bar reserves 80px mobile / 100px desktop bottom padding (via kit's `body` rule); extra 90px spacer added
- [x] Gallery uses `--green-gallery` (`#435a45`) tray

### Framework (§3.5)
- [x] #2 outcome promise leads with speed ("cooling within minutes") then recovery ("over the days that follow")
- [x] #4 mechanism is full-depth — 5 sentences: dual action, lipid-recognising membrane explanation (why oil > aerosol), "at every stage of recovery" claim, Rasna oxidative stress function, closing result line
- [x] #4a sensory callout is a standalone section (Sensory component)
- [x] #5 timeline uses Minutes / Day 1 / Week 2+ (compressed span)
- [x] #6 usage is in Zone 1 (ritual panel above fold) and expanded in Zone 3 (app guide)
- [x] #7 safety is consolidated in Zone 3 accordion + patch-test warning in app guide
- [x] #8 social proof is dual-deployed — Zone 2 Testimonials (2 cards, timeframe-tagged) + Zone 4 Reviews (aggregate + 2 extended)
- [x] Comparison positioned at #15 in section order (Zone 2/3 bridge), not at end
- [x] Regimen strip — dual partner (format: Myaxyl Cream; internal: Yogaraja Guggulu)

---

## 5. Known issues

- **Ingredient card grid on desktop** — the parent kit CSS uses `nth-child(even)` to flip image order on mobile. The Myaxyl override uses `ing-card--myx` modifier to force the mobile layout uniform across all 4 cards (113px image left, body right). Verify desktop layout on 1024+ displays; if mobile-only flip is preferred, remove the `!important` grid-template-columns override on `.ing-card--myx` in `myaxyl.css`.
- **Gallery `min-height: 560px` on desktop** — ensures the sticky column has visible space even before imagery loads. Remove once hero images are in place if any layout jitter is seen.
- **The ritual copy references "direction of hair growth"** — this phrasing is per the spec §2.4 but reads oddly for a musculoskeletal product. Flagging for a copy review; likely intended as "direction of muscle fibre" or similar. Kept verbatim per the spec (which is final copy).

---

## 6. Suggested next steps

1. Commission Myaxyl-specific photography (6 hero shots + 4 ingredient shots + 3 timeline shots + 3 sesame-base icons + 1 lifestyle hero).
2. Swap `design-system/assets/hero-1..6.webp` in-place.
3. Pull live review count from Shopify; replace the hardcoded `215` in three locations (Stats bar, Product info rating line, Reviews section title + outline CTA).
4. Validate Zone 2 curated testimonials (Priya M., Anil R.) and Zone 4 extended reviews (Meera K., Karthik V.) via the review seeding agency.
5. Confirm the "direction of hair growth" wording in the ritual panel and app-guide step 02 with merchandising.
6. QA on the target device widths (375, 390, 1280, 1440) per §4.3 post-build review.

---

*End of handoff.*
