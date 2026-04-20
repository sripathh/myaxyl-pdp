# MYAXYL_CONTENT_GAPS_UPDATE.md

> **For Claude Code.** These are surgical update instructions derived from a gap analysis between the Myaxyl Oil medical content source and the current PDP content spec. This file has passed a full brand tone, narrative style, and sentence structure audit. Execute changes in the order listed. Each instruction provides the exact text to locate and the exact replacement. Do not rewrite, paraphrase, or expand beyond what is specified.
>
> **Files this session will modify:**
> 1. `MYAXYL_OIL_PDP_CONTENT.md` — the content spec
> 2. `docs/index.html` — the prototype (if already built); if not yet built, the content spec is the source of truth
>
> **Brand tone rules in effect throughout:**
> - Hedging verbs only: helps, supports, minimizes, promotes, traditionally used to
> - No exclamation marks. No emoji. Sentence case + period on all headlines.
> - Em dash (—) for qualifiers. No superlatives. No banned words.
> - Body sentences: 8–20 words. Technical sentences (ingredient/process): up to 35 words. Never compound technical claims.
>
> **Total changes: 9 items across 7 sections**

---

## Overview

| # | Gap addressed | Section | Change type |
|---|---|---|---|
| 1 | Neuronal lipid story + "all stages" precision | §2.7 Mechanism body | Copy rewrite (5 sentences) |
| 2 | Rasna: antioxidant + tissue regeneration mechanism | §2.11 Ingredient card | Copy tightening |
| 3 | Lemongrass: oxygen delivery + toxin clearance | §2.12 Sesame base section | Copy upgrade |
| 4 | No dependency/tolerance/resistance as positive claim | §2.13 What's Out | Item addition |
| 5 | Collagen synthesis + dependency row corrections | §2.15 Compare table | Row addition + 2 row updates |
| 6 | Deep massage not required; correct massage instruction | §2.17 Application guide Step 02 | Copy correction + addition |
| 7 | Bahya Snehan + Tridosha science | §2.18 Accordion — 5th item | Item addition |
| 8 | Will the pain return — honest recovery FAQ | §3.1 FAQ | 1 Q&A addition |
| 9 | Nidan Parivarjan — the rest principle | §3.1 FAQ | 1 Q&A addition |

---

## Part A — Content spec changes (`MYAXYL_OIL_PDP_CONTENT.md`)

---

### Change 1 — Mechanism body copy (§2.7)

**What changed and why:** The mechanism paragraph adds the neuronal lipid insight (why oil reaches pain pathways where aerosol sprays cannot), the "all stages" precision on Devadaru and Nandivriksha, and the Rasna oxidative stress function. The paragraph stays at 5 sentences — the neuronal insight is embedded into sentence 2 using the em dash connector rather than expanding to 7 sentences. The final sentence restores the declarative mechanism close rather than a benefits summary. Competitor framing has been removed: the neuronal insight is expressed through Myaxyl's own mechanism, not as an argument against alternatives.

**Locate this exact text in §2.7:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow — sesame oil carries the herbal actives into deep tissue where the healing happens. Devadaru and Nandivriksha calm the inflammatory pathway without blocking it. Rasna supports tissue repair. Your body's inflammatory response is how it heals — Myaxyl supports that process, it doesn't suppress it.
```

**Replace with:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow — sesame oil is a lipid, recognised by the body's neural tissue as its natural carrier into the nerve pathway where pain originates. Devadaru and Nandivriksha support the body's inflammatory response at every stage of recovery — not just the acute phase, but through the full healing cycle. Rasna helps reduce oxidative stress at the injury site, supporting tissue regeneration from within. The body heals through inflammation — Myaxyl supports that process, it doesn't suppress it.
```

---

### Change 2 — Rasna ingredient card (§2.11)

**What changed and why:** The antioxidant and oxidative stress function has been added — this is the mechanism behind why Rasna drives tissue regeneration and is the most clinically precise claim in the ingredient set. The three functions (reduce oxidative stress, support regeneration, calm inflammation + immune response) are now expressed as one compound outcome via the em dash, keeping the sentence at 18 words within the body sentence ceiling and matching the visual weight of the other three ingredient cards.

**Locate this exact text in the ingredients table in §2.11:**
```
| Rasna | *Alpinia galanga* | Recovery | Traditionally used to support tissue repair in musculoskeletal care. Sourced from West Bengal. | *Rasna* |
```

**Replace with:**
```
| Rasna | *Alpinia galanga* | Recovery | Helps reduce oxidative stress at the injury site — supporting tissue regeneration, calming inflammation, and quieting the immune response. Traditionally used in musculoskeletal care. Sourced from West Bengal. | *Rasna* |
```

---

### Change 3 — Lemongrass card in sesame base section (§2.12)

**What changed and why:** Adds the specific purpose of lemongrass's circulation increase — oxygen and nutrient delivery to the healing tissue, plus clearance of inflammatory byproducts. Relevant particularly for the fitness persona where lactic acid build-up is a known complaint.

**Locate this exact text in the 3-card table in §2.12:**
```
| 3 | Lemongrass | Gentle warmth. Improves local circulation to the application site. |
```

**Replace with:**
```
| 3 | Lemongrass | Gentle warmth. Increases local blood flow to deliver oxygen and nutrients to the healing tissue — and helps clear inflammatory byproducts from the site. |
```

---

### Change 4 — What's Out section (§2.13)

**What changed and why:** The medical document explicitly lists no dependency, tolerance, and resistance as a named benefit category — a positive product claim, not just the absence of a negative. Adding it to What's Out makes it a first-class claim. Currently this only appears as a passive entry in the compare table.

**Locate this exact text in §2.13:**
```
**What's out (3 X items):**
- No menthol (no counterirritant sting)
- No capsaicin (no burning sensation)
- No synthetic fragrance or mineral oil
```

**Replace with:**
```
**What's out (4 X items):**
- No menthol (no counterirritant sting)
- No capsaicin (no burning sensation)
- No synthetic fragrance or mineral oil
- No dependency, tolerance build-up, or resistance risk
```

**Note for prototype:** The What's Out component renders from a data array. Add one entry to the out-items array — same X icon (`i-x.svg`) as the other three items.

---

### Change 5 — Compare table (§2.15)

**Three edits to this table.**

**5a — Update Mechanism row:** "Supports inflammatory response" stays as a bare fact. The "at every stage" qualifier belongs in the mechanism body paragraph (already added in Change 1), not in the fact table which must remain adjective-free.

**5b — Update Dependency row:** Remove "rebound" — this word does not appear in the medical source document. Replace with the exact phrasing from the source: no dependency, no tolerance, no resistance.

**5c — Add Collagen synthesis row:** The medical document identifies collagen synthesis inhibition as the specific mechanism behind why NSAID-based sprays prevent healing. The Myaxyl column states the factual position accurately: no inhibition.

**Locate the full table in §2.15:**
```
| Attribute | Myaxyl Oil | Generic Pain Spray |
|---|---|---|
| Mechanism | Supports inflammatory response | Blocks pain signal |
| Absorption | Deep tissue via sesame oil base | Superficial sensory block |
| Recovery | Tissue repair and regeneration | No curative action |
| Dependency | None reported | Tolerance risk with repeated use |
```

**Replace with:**
```
| Attribute | Myaxyl Oil | Generic Pain Spray |
|---|---|---|
| Mechanism | Supports inflammatory response | Blocks pain signal |
| Absorption | Deep tissue via sesame oil base | Superficial sensory block |
| Collagen synthesis | No inhibition | Inhibited — slows repair and regeneration |
| Recovery | Tissue repair and regeneration | No curative action |
| Dependency | No dependency, no tolerance, no resistance | Dependency and tolerance risk with repeated use |
```

**Also update the section note** from:
```
No editorialising above or below the table. Facts in columns.
```
to:
```
No editorialising above or below the table. Facts in columns. The table now has 5 rows — ensure the prototype renders all 5.
```

---

### Change 6 — Application guide Step 02 (§2.17)

**What changed and why:** Two corrections in one. First, "direction of hair growth" is scalp-massage language carried from a hair oil context — incorrect and confusing for a joint and muscle pain oil applied to knees, backs, and shoulders. Corrected to "over the affected area." Second, the medical document states "deep seated massage not required as Myaxyl has deep penetrating power" — added as "light pressure" and "no deep kneading required," which corrects a common misapplication behaviour while signalling the mechanism.

**Locate this exact text in §2.17:**
```
| 02 | MASSAGE | Circular motions in the direction of hair growth. Let each layer absorb before adding more. |
```

**Replace with:**
```
| 02 | MASSAGE | Gentle circular motions over the affected area. Light pressure — the formula penetrates on its own. No deep kneading required. |
```

---

### Change 7 — Accordion 5th item (§2.18)

**What changed and why:** The accordion currently has no entry covering the Ayurvedic scientific framework — specifically Bahya Snehan (the classically prescribed treatment modality for external injury), the tridosha breakdown of pain presentation, and why the oil format is prescribed rather than incidental. This is Zone 4 sceptic/depth material for the buyer who wants to understand the system.

Four corrections applied versus the first draft:
- Trigger label: period removed (consistent with all other accordion triggers which are label-style without periods)
- Adhyavata gloss: corrected from backward parenthetical to the brand standard Term — gloss format
- S5 compound claim (three herb assignments in one sentence): split into three separate sentences
- Final clause: "suppressing the symptoms of its recovery" corrected to "suppressing its natural healing response" (recovery itself has no symptoms)

**Locate the full accordion table in §2.18:**
```
| Trigger | Content |
|---|---|
| Preparation method — Thaila Paaka | Fresh juice of Nandivriksha is combined with a fine paste of Devadaru and Rasna in a sesame oil base. The mixture is heated on low flame in the classical Thaila Paaka method, until the water content has evaporated and the herbal actives have bound to the oil. Essential oils — eucalyptus and lemongrass — are infused at the final stage overnight. The oil is filtered warm. |
| Safety & side effects | For external use only. Patch test before first application. Avoid open wounds — apply around the area instead. Avoid contact with eyes, nose, and mouth. Rare: mild tingling or warmth in sensitive users — usually subsides within minutes. Safe during pregnancy for external use. Adult supervision recommended for younger children. |
| Full ingredient list | Devadaru (*Cedrus deodara*), Nandivriksha (*Tabernaemontana divaricata*), Rasna (*Alpinia galanga*), Sesame oil (*Sesamum indicum*) base, Eucalyptus oil, Lemongrass oil, Peppermint essential oil. No synthetic fragrance. No mineral oil. No parabens. |
| When not to use | Not to be applied directly on open wounds or broken skin. Not to be taken internally. If rigorous exercise is immediately planned, allow 10-15 minutes after application. Avoid cold showers or cold beverages immediately post-application — they work against the oil's warming action. |
```

**Replace with:**
```
| Trigger | Content |
|---|---|
| Preparation method — Thaila Paaka | Fresh juice of Nandivriksha is combined with a fine paste of Devadaru and Rasna in a sesame oil base. The mixture is heated on low flame in the classical Thaila Paaka method, until the water content has evaporated and the herbal actives have bound to the oil. Essential oils — eucalyptus and lemongrass — are infused at the final stage overnight. The oil is filtered warm. |
| Safety & side effects | For external use only. Patch test before first application. Avoid open wounds — apply around the area instead. Avoid contact with eyes, nose, and mouth. Rare: mild tingling or warmth in sensitive users — usually subsides within minutes. Safe during pregnancy for external use. Adult supervision recommended for younger children. |
| Full ingredient list | Devadaru (*Cedrus deodara*), Nandivriksha (*Tabernaemontana divaricata*), Rasna (*Alpinia galanga*), Sesame oil (*Sesamum indicum*) base, Eucalyptus oil, Lemongrass oil, Peppermint essential oil. No synthetic fragrance. No mineral oil. No parabens. |
| When not to use | Not to be applied directly on open wounds or broken skin. Not to be taken internally. If rigorous exercise is immediately planned, allow 10-15 minutes after application. Avoid cold showers or cold beverages immediately post-application — they work against the oil's warming action. |
| The Ayurvedic science — why oil, why these herbs | In Ayurveda, pain (Ruja) is the classical expression of aggravated Vata dosha. External injury — Aghata — disturbs Vata in the Asthi (bone) and Mamsa (muscle) tissues, triggering a tridoshic response: heat and redness from aggravated Pitta, swelling from aggravated Kapha, pain and stiffness from Vata. The classical first-line treatment for this presentation is Bahya Snehan — external application of a lipid-based formulation to the affected tissue. Sesame oil is the classical base for Vata-predominant musculoskeletal conditions. Devadaru and Nandivriksha help balance the vitiated Vata and Pitta. Rasna addresses Adhyavata — the Vata governing the lower joints and extremities. Lemongrass and eucalyptus support the Kapha component. The treatment goal is Tridosha balance — restoring the body's natural equilibrium, not suppressing its natural healing response. |
```

**Note for prototype:** The accordion component renders from a data array. Add the 5th entry. The trigger string has no period — consistent with existing triggers.

---

### Change 8 — FAQ: honest recovery framing (§3.1)

**What changed and why:** One Q&A added, not two. The second Q&A from the earlier draft ("What is the risk of staying on pain-suppressing sprays long-term?") used fear-based framing and competitive copy in a FAQ context — both against the brand tone. It has been dropped. The first Q&A ("Will the pain return?") is retained but the fear-adjacent verb ("risks incomplete healing") has been softened to a calm, factual statement. The brand tone guide for FAQ is "calm + direct, no alarm, no evasion."

**Locate this exact text in §3.1:**
```
**Q: How long does one bottle last?**
The 200 ml bottle covers approximately 30 sessions for a single joint area, used 1-2 times daily. Roughly ₹15 per session.
```

**Replace with:**
```
**Q: How long does one bottle last?**
The 200 ml bottle covers approximately 30 sessions for a single joint area, used 1-2 times daily. Roughly ₹15 per session.

**Q: Will the pain return once I stop using Myaxyl?**
Myaxyl supports tissue repair rather than masking the pain signal — so when the underlying tissue heals, the tendency toward recurring pain reduces. When inflammation is managed without supporting the healing process, the underlying tissue may not fully recover, which means the same injury can recur more easily. Continued use through the recovery phase, not just the acute episode, is where the long-term benefit is built.
```

---

### Change 9 — FAQ: Nidan Parivarjan rest principle (§3.1)

**What changed and why:** The medical document identifies rest as the first Ayurvedic treatment principle for acute injury (Nidan Parivarjan — removal of the causative factor). This is clinically accurate and useful. The framing carefully distinguishes between pain relief (fast, what Myaxyl delivers) and tissue structural recovery (4-5 days of reduced load, independent of treatment) — so it does not contradict the "back to gym in two days" testimonial.

**Append this immediately after the Q&A added in Change 8:**
```
**Q: Should I rest the injury while using Myaxyl?**
Myaxyl helps with pain and inflammation quickly — but the tissue itself needs time to heal. In Ayurveda, the first principle of treatment for acute injury is Nidan Parivarjan — removing the causative factor, meaning reduced load on the affected tissue. Muscle, ligaments, and tendons typically need approximately 4-5 days of reduced activity before they can safely resume full load. Myaxyl supports recovery during this rest window. Resuming full activity before the tissue has recovered extends the healing timeline regardless of what treatment is applied.
```

---

## Part B — Prototype changes (`docs/index.html`)

If the prototype has already been built, apply the following code-level changes. Each change maps to the corresponding Part A item. All changes are to data values only — do not refactor, rename, or restructure components.

> Before editing: read `docs/index.html` in full. Locate each component by searching for the text strings provided below.

---

### B1 — Mechanism component

**Find the body text that contains:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs.
```

**Replace the full body text with:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow — sesame oil is a lipid, recognised by the body's neural tissue as its natural carrier into the nerve pathway where pain originates. Devadaru and Nandivriksha support the body's inflammatory response at every stage of recovery — not just the acute phase, but through the full healing cycle. Rasna helps reduce oxidative stress at the injury site, supporting tissue regeneration from within. The body heals through inflammation — Myaxyl supports that process, it doesn't suppress it.
```

---

### B2 — Ingredients component: Rasna card

**Find the Rasna card data entry. Current description:**
```
Traditionally used to support tissue repair in musculoskeletal care. Sourced from West Bengal.
```

**Replace description with:**
```
Helps reduce oxidative stress at the injury site — supporting tissue regeneration, calming inflammation, and quieting the immune response. Traditionally used in musculoskeletal care. Sourced from West Bengal.
```

All other Rasna fields unchanged.

---

### B3 — Sesame base section: Lemongrass card

**Find the Lemongrass card data entry. Current description:**
```
Gentle warmth. Improves local circulation to the application site.
```

**Replace with:**
```
Gentle warmth. Increases local blood flow to deliver oxygen and nutrients to the healing tissue — and helps clear inflammatory byproducts from the site.
```

---

### B4 — WhatsIn component: 4th "out" item

**Find the What's Out array. Currently 3 items. Add a 4th entry:**
```
No dependency, tolerance build-up, or resistance risk
```

Same X icon (`i-x.svg`) as the other items.

---

### B5 — Compare component: 3 edits

**Find the rows data array.**

**5a — Mechanism row. Find:**
```
["Mechanism", "Supports inflammatory response", "Blocks pain signal"]
```
No change needed — this row stays as-is. Do not add "at every stage."

**5b — Add Collagen synthesis row as row 3** (after Absorption, before Recovery):
```javascript
["Collagen synthesis", "No inhibition", "Inhibited — slows repair and regeneration"]
```

**5c — Update Dependency row. Find:**
```
["Dependency", "None reported", "Tolerance risk with repeated use"]
```
**Replace with:**
```javascript
["Dependency", "No dependency, no tolerance, no resistance", "Dependency and tolerance risk with repeated use"]
```

The component now renders 5 rows.

---

### B6 — Application guide: Step 02

**Find step 02 in the steps array:**
```
["02", "MASSAGE", "Circular motions in the direction of hair growth. Let each layer absorb before adding more."]
```

**Replace with:**
```javascript
["02", "MASSAGE", "Gentle circular motions over the affected area. Light pressure — the formula penetrates on its own. No deep kneading required."]
```

---

### B7 — Accordion component: 5th item

**Find the items array. Currently 4 items. Add 5th entry at the end:**
```javascript
[
  "The Ayurvedic science — why oil, why these herbs",
  "In Ayurveda, pain (Ruja) is the classical expression of aggravated Vata dosha. External injury — Aghata — disturbs Vata in the Asthi (bone) and Mamsa (muscle) tissues, triggering a tridoshic response: heat and redness from aggravated Pitta, swelling from aggravated Kapha, pain and stiffness from Vata. The classical first-line treatment for this presentation is Bahya Snehan — external application of a lipid-based formulation to the affected tissue. Sesame oil is the classical base for Vata-predominant musculoskeletal conditions. Devadaru and Nandivriksha help balance the vitiated Vata and Pitta. Rasna addresses Adhyavata — the Vata governing the lower joints and extremities. Lemongrass and eucalyptus support the Kapha component. The treatment goal is Tridosha balance — restoring the body's natural equilibrium, not suppressing its natural healing response."
]
```

Note: trigger string has no terminal period — consistent with all other accordion triggers.

---

### B8 + B9 — FAQ additions

The two new Q&As (Changes 8 and 9) live in §3.1 of the content spec as reference data. If the prototype includes a rendered FAQ section, add both Q&As there using the same accordion or expandable pattern as other FAQ items. If no FAQ section is rendered in the prototype, no code change is needed now — they are available for post-launch deployment.

---

## Part C — Post-change verification

### Content spec
- [ ] §2.7 mechanism body is exactly 5 sentences
- [ ] §2.7 S2 contains "sesame oil is a lipid" and "neural tissue" and "nerve pathway" — no competitor comparison clause
- [ ] §2.7 S5 closes on the mechanism: "The body heals through inflammation — Myaxyl supports that process"
- [ ] §2.11 Rasna description leads with "oxidative stress" and lists three outcomes via em dash
- [ ] §2.12 Lemongrass card includes "oxygen and nutrients" and "inflammatory byproducts"
- [ ] §2.13 What's Out has 4 items; 4th is dependency/tolerance/resistance
- [ ] §2.15 has 5 rows; Collagen synthesis is row 3; Dependency row uses medical-source language (no "rebound"); Mechanism row unchanged from original
- [ ] §2.17 Step 02 says "over the affected area" — no reference to hair growth direction
- [ ] §2.17 Step 02 includes "Light pressure" and "No deep kneading required"
- [ ] §2.18 accordion has 5 items; 5th trigger has no period; "Adhyavata" is glossed as "the Vata governing the lower joints"; S5 is split into three single-claim sentences; final sentence ends "not suppressing its natural healing response"
- [ ] §3.1 FAQ has 10 Q&As (was 8; +1 "Will the pain return" +1 "Should I rest the injury")
- [ ] Only one FAQ added in Change 8 — the competitor-risk Q&A has been removed

### Prototype
- [ ] Mechanism section body is 5 sentences; no competitor comparative clause
- [ ] Rasna card description leads with oxidative stress
- [ ] Lemongrass card shows oxygen/byproduct language
- [ ] What's Out column renders 4 items
- [ ] Compare table renders 5 rows; Collagen synthesis row present; Mechanism row unchanged
- [ ] Application guide Step 02 says "over the affected area" — not "direction of hair growth"
- [ ] Accordion renders 5 items; 5th trigger has no period; 5th panel text has 8 sentences with herb claims separated
- [ ] No new compliance violations — run the full tone checklist from §3.3

### Tone spot-check on new copy
- [ ] No competitor named anywhere outside the compare table
- [ ] No fear-based language — "risks" replaced with "may not fully recover"
- [ ] All Sanskrit terms glossed inline: Ruja, Aghata, Asthi, Mamsa, Bahya Snehan, Adhyavata, Nidan Parivarjan all carry plain-language explanations
- [ ] Compare table values are bare facts — no editorial adjectives on either column
- [ ] Accordion trigger 5 has no period (matches the other 4 triggers)
- [ ] "direction of hair growth" does not appear anywhere in the file

---

*End of update instructions. This file is a one-time execution document — once all changes are applied and verified, archive it.*
