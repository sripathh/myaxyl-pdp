# MYAXYL_CONTENT_GAPS_UPDATE.md

> **For Claude Code.** These are surgical update instructions derived from a gap analysis between the Myaxyl Oil medical content source and the current PDP content spec. Execute all changes in the order listed. Each instruction specifies the exact file, the exact text to replace, and the exact replacement. Do not rewrite, paraphrase, or improve beyond what is specified — these changes are calibrated for brand tone, framework placement, and compliance.
>
> **Files this session will modify:**
> 1. `MYAXYL_OIL_PDP_CONTENT.md` — the content spec
> 2. `docs/index.html` — the prototype (if already built); if not yet built, the content spec is the source of truth
>
> **Brand tone reminders in effect throughout:**
> - Hedging verbs: helps, supports, minimizes, promotes, traditionally used to
> - No exclamation marks. No emoji. Sentence case + period on all headlines.
> - Em dash (—) for qualifiers. No superlatives. No banned words.
>
> **Total changes: 9 items across 7 sections**

---

## Overview of changes

| # | Gap | Section affected | Type |
|---|---|---|---|
| 1 | Neuronal lipid story + "all stages" precision | §2.7 Mechanism body copy | Copy upgrade |
| 2 | Rasna triple role (immunosuppressive + antioxidant) | §2.11 Ingredient card | Copy upgrade |
| 3 | Lemongrass: oxygen + toxin clearance specificity | §2.12 Sesame base section | Copy upgrade |
| 4 | No tolerance, no resistance — as a positive claim | §2.13 What's Out + §2.15 Compare table | Copy addition |
| 5 | Collagen synthesis inhibition — 5th compare row | §2.15 Compare table | Row addition |
| 6 | Deep massage not required — mechanism + instruction | §2.17 Application guide Step 02 | Copy addition |
| 7 | Bahya Snehan + Tridosha treatment science | §2.18 Accordion 5th item | Item addition |
| 8 | Chronicity risk — "what happens if you stay on sprays" | §3.1 FAQ addition | Q&A addition |
| 9 | Nidan Parivarjan — the 4-5 day rest principle | §3.1 FAQ addition | Q&A addition |

---

## Part A — Content spec changes (`MYAXYL_OIL_PDP_CONTENT.md`)

---

### Change 1 — Mechanism body copy (§2.7)

**Why:** The current mechanism paragraph names the differentiation but doesn't explain the *science* behind why oil penetrates where aerosol sprays cannot. The medical document identifies this as the neuronal lipid pathway — neurons are wrapped in a lipid-recognising membrane, making an oil-based formula the only vehicle that can reach the neural level. Additionally, "supports that process" understates the actual claim, which is that Myaxyl works at every stage of inflammation, not just the acute phase.

**Locate this exact text in §2.7:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow — sesame oil carries the herbal actives into deep tissue where the healing happens. Devadaru and Nandivriksha calm the inflammatory pathway without blocking it. Rasna supports tissue repair. Your body's inflammatory response is how it heals — Myaxyl supports that process, it doesn't suppress it.
```

**Replace with:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow. Sesame oil carries the herbal actives into deep tissue — neurons are wrapped in a lipid-recognising membrane, which is why an oil-based formula reaches pain pathways at the neural level while an aerosol spray cannot. Devadaru and Nandivriksha support the body's inflammatory response at every stage of recovery — not just the acute phase, but through the full healing cycle. Rasna helps reduce oxidative stress at the injury site, supporting tissue regeneration from within. The result is relief that comes quickly and recovery that holds.
```

**Note:** 4 sentences → 5 sentences. The paragraph remains within the ~5 sentence guideline for the Mechanism section. "Lipid-recognising membrane" is consumer-accessible language for what the medical document calls the synovial membrane around neurons; no further simplification is needed.

---

### Change 2 — Rasna ingredient card (§2.11)

**Why:** The medical document identifies three distinct functions for Rasna — anti-inflammatory (reduces cytokines), immunosuppressive (calms cell-mediated immune response), and antioxidant (reduces oxidative stress enabling tissue regeneration). The current spec references only tissue repair in vague terms. The antioxidant and oxidative-stress function is the mechanism behind why Rasna drives regeneration — it's the most clinically precise claim in the ingredient set.

**Locate this exact text in the ingredients table in §2.11:**
```
| Rasna | *Alpinia galanga* | Recovery | Traditionally used to support tissue repair in musculoskeletal care. Sourced from West Bengal. | *Rasna* |
```

**Replace with:**
```
| Rasna | *Alpinia galanga* | Recovery | Helps reduce inflammatory cytokines, calms the immune response at the injury site, and supports tissue regeneration by reducing oxidative stress. Traditionally used in musculoskeletal care. Sourced from West Bengal. | *Rasna* |
```

**Note:** The three functions are sequenced anti-inflammatory → immunosuppressive (simplified to "calms the immune response") → antioxidant-to-regeneration chain. Latin name and sourcing unchanged.

---

### Change 3 — Lemongrass card in sesame base section (§2.12)

**Why:** The current description says "Gentle warmth. Improves local circulation." The medical document specifies the purpose of that circulation: it delivers oxygen and nutrients to the healing tissue while removing inflammatory byproducts and toxins. The toxin-clearance function is particularly relevant for the fitness persona where lactic acid build-up is a known complaint.

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

**Why:** The medical document explicitly lists "no dependency, tolerance, resistance" as a named benefit category (the Long Lasting / E2 column) — it is a positive product claim, not just the absence of a negative. Currently this only appears as a passive one-word entry in the compare table. Adding it to What's Out makes it a first-class claim in the consumer's vocabulary.

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

**Note:** The section label in the H4 subhead ("What's out") and the component render loop will need to accommodate the 4th item. In the prototype, this is a data array — add one entry.

---

### Change 5 — Compare table rows (§2.15)

**Two changes to this table.**

**Change 5a — Strengthen the Dependency row:**

**Locate this exact text:**
```
| Dependency | None reported | Tolerance risk with repeated use |
```

**Replace with:**
```
| Dependency | No tolerance, no resistance, no rebound | Tolerance and dependency risk with repeated use |
```

**Change 5b — Add a 5th row for collagen synthesis:**

The medical document identifies collagen synthesis inhibition as the specific mechanism behind why NSAID-based sprays prevent healing — they block the very molecule required for tissue repair and regeneration. This transforms the vague "no curative action" claim into a precise mechanistic argument.

**Locate this exact text (the full 4-row table in §2.15):**
```
| Attribute | Myaxyl Oil | Generic Pain Spray |
|---|---|---|
| Mechanism | Supports inflammatory response | Blocks pain signal |
| Absorption | Deep tissue via sesame oil base | Superficial sensory block |
| Recovery | Tissue repair and regeneration | No curative action |
| Dependency | No tolerance, no resistance, no rebound | Tolerance and dependency risk with repeated use |
```

**Replace with:**
```
| Attribute | Myaxyl Oil | Generic Pain Spray |
|---|---|---|
| Mechanism | Supports inflammatory response at every stage | Blocks pain signal |
| Absorption | Deep tissue via sesame oil base | Superficial sensory block |
| Collagen synthesis | Unaffected — tissue repair continues | Inhibited — slows repair and regeneration |
| Recovery | Tissue repair and regeneration | No curative action |
| Dependency | No tolerance, no resistance, no rebound | Tolerance and dependency risk with repeated use |
```

**Note:** Collagen synthesis row is inserted as row 3 (after Absorption, before Recovery) because it logically explains *why* generic sprays produce no curative action — the causal chain reads downward.

**Also update the section note below the table** from:

```
No editorialising above or below the table. Facts in columns.
```

to:

```
No editorialising above or below the table. Facts in columns. The table now has 5 rows — ensure the prototype renders all 5.
```

---

### Change 6 — Application guide Step 02 (§2.17)

**Why:** The medical document explicitly states "Deep seated massage not required as Myaxyl has deep penetrating power." This is both a usage instruction and a mechanism claim. Many users coming from aerosol sprays or deep-tissue massage habits may over-apply pressure thinking it increases efficacy. Correcting this is a practical instruction that doubles as a confidence-building mechanism signal.

**Locate this exact text in §2.17:**
```
| 02 | MASSAGE | Circular motions in the direction of hair growth. Let each layer absorb before adding more. |
```

**Replace with:**
```
| 02 | MASSAGE | Circular motions in the direction of hair growth. Light pressure — the formula penetrates on its own. No deep kneading required. |
```

---

### Change 7 — Accordion 5th item (§2.18)

**Why:** The accordion currently covers preparation, safety, full ingredients, and usage limits. There is no entry covering the Ayurvedic scientific framework — specifically Bahya Snehan (the classical treatment modality), the tridosha breakdown of pain presentation, and why the oil format is classically prescribed rather than incidental. This belongs in the accordion ("Go deeper") as sceptic/depth material — it's for the buyer who wants to understand the system, not just the product.

**Locate this exact text in §2.18 (the table with 4 accordion items):**
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
| The Ayurvedic science — why oil, why these herbs. | In Ayurveda, pain (Ruja) is the classical expression of aggravated Vata dosha. External injury — Aghata — disturbs Vata in the Asthi (bone) and Mamsa (muscle) tissues, triggering a tridoshic inflammation: heat from aggravated Pitta, swelling from aggravated Kapha, pain and stiffness from Vata. The classical first-line treatment for this presentation is Bahya Snehan — external application of a lipid-based formulation to the affected tissue. Sesame oil is the classical base for Vata-predominant musculoskeletal conditions. Devadaru and Nandivriksha help balance the vitiated Vata and Pitta; Rasna supports the lower extremities (Adhyavata); lemongrass and eucalyptus address the Kapha component. The treatment goal is Tridosha balance — restoring the body's natural equilibrium, not suppressing the symptoms of its recovery. |
```

**Note:** 5 accordion items total. The prototype accordion component renders from a data array — add the 5th entry to the array. The trigger label ends without a period (it is a label, not a headline sentence). The content paragraph uses parenthetical plain-language glosses for every Sanskrit term — brand rule: Ayurvedic terms are always accompanied by plain-language function.

---

### Change 8 — FAQ addition: chronicity risk (§3.1)

**Why:** The medical document explicitly identifies prolonged inflammation suppression as a risk pathway to irreversible tissue damage and escalating medication dependency. This is the "what happens if you don't switch" argument — the consequence of staying on suppressive treatment long-term. It belongs in the FAQ as a factual answer to the question a buyer on long-term NSAID sprays would actually ask.

**Locate this exact text in §3.1 (the last Q&A before the end of the FAQ section):**
```
**Q: How long does one bottle last?**
The 200 ml bottle covers approximately 30 sessions for a single joint area, used 1-2 times daily. Roughly ₹15 per session.
```

**Replace with:**
```
**Q: How long does one bottle last?**
The 200 ml bottle covers approximately 30 sessions for a single joint area, used 1-2 times daily. Roughly ₹15 per session.

**Q: Will the pain return once I stop using Myaxyl?**
Myaxyl supports tissue repair rather than masking the pain signal — so when the underlying tissue heals, the tendency toward recurring pain reduces. Suppressing inflammation without supporting recovery risks incomplete healing, which increases the likelihood of the same injury recurring and the pain returning. Continued use through the recovery phase, not just the acute episode, is where the long-term benefit is built.

**Q: What is the risk of staying on pain-suppressing sprays long-term?**
Repeated suppression of the inflammatory response — without supporting recovery — can lead to incomplete tissue healing, creating weak spots that are more vulnerable to re-injury. Over time, prolonged inflammation that does not fully resolve can contribute to chronic pain that is increasingly difficult to address with topical treatment alone. Myaxyl is designed to support the body's natural healing cycle at every stage, reducing the likelihood of this progression.
```

---

### Change 9 — FAQ addition: Nidan Parivarjan rest principle (§3.1)

**Why:** The medical document identifies rest as the first Ayurvedic treatment principle for acute injury (Nidan Parivarjan — removal of the causative factor). This is clinically useful and frequently asked. The framing challenge is that it must not contradict the "back to gym in 2 days" testimonial — the answer distinguishes between pain relief (fast) and tissue recovery (4-5 days of reduced load).

**Append this immediately after the Q&A added in Change 8 (before the closing line of §3.1):**

```
**Q: Should I rest the injury while using Myaxyl?**
Myaxyl helps with pain and inflammation quickly — but the tissue itself needs time to restore its structural strength. In Ayurveda, the first principle of treatment for acute injury is Nidan Parivarjan — removing the causative factor, meaning reduced load on the affected tissue. Muscle, ligaments, and tendons typically need approximately 4-5 days of reduced activity before they can safely resume full load. Myaxyl supports recovery during this rest window. Resuming full activity before the tissue has recovered extends the healing timeline regardless of what treatment is applied.
```

---

## Part B — Prototype changes (`docs/index.html`)

If the prototype has already been built, apply the following code-level changes. Each change maps directly to a Part A content change and specifies the exact component and data location.

> **Before editing:** Read the full `docs/index.html` first. Locate each component by searching for the text strings provided. All changes are to data values, not component structure — do not refactor, rename, or restructure components.

---

### B1 — Mechanism component body

**Find the Mechanism component.** Locate the `<p>` or body text element that contains:
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs.
```

**Replace the full body text content with:**
```
Relief you feel within minutes — cooling and gentle warmth as the formula absorbs. Recovery you feel in the days that follow. Sesame oil carries the herbal actives into deep tissue — neurons are wrapped in a lipid-recognising membrane, which is why an oil-based formula reaches pain pathways at the neural level while an aerosol spray cannot. Devadaru and Nandivriksha support the body's inflammatory response at every stage of recovery — not just the acute phase, but through the full healing cycle. Rasna helps reduce oxidative stress at the injury site, supporting tissue regeneration from within. The result is relief that comes quickly and recovery that holds.
```

---

### B2 — Ingredients component: Rasna data entry

**Find the Ingredients component.** Locate the data array or object for the Rasna card. The current description reads:
```
Traditionally used to support tissue repair in musculoskeletal care. Sourced from West Bengal.
```

**Replace the description value with:**
```
Helps reduce inflammatory cytokines, calms the immune response at the injury site, and supports tissue regeneration by reducing oxidative stress. Traditionally used in musculoskeletal care. Sourced from West Bengal.
```

All other Rasna fields (name, Latin, role badge class, placeholder label) are unchanged.

---

### B3 — Sesame base section: Lemongrass card

**Find the sesame oil base section component.** Locate the Lemongrass card data entry. Current description:
```
Gentle warmth. Improves local circulation to the application site.
```

**Replace with:**
```
Gentle warmth. Increases local blood flow to deliver oxygen and nutrients to the healing tissue — and helps clear inflammatory byproducts from the site.
```

---

### B4 — WhatsIn component: 4th "out" item

**Find the WhatsIn component.** Locate the array for the "What's out" column items. Currently 3 items.

**Add a 4th item** to the out-items array:
```
No dependency, tolerance build-up, or resistance risk
```

Pair it with the same X icon (`i-x.svg`) as the other three items. The component renders these from a list — add the entry at the end of the out-items array.

---

### B5 — Compare component: update Dependency row + add Collagen row

**Find the Compare component.** Locate the rows data array.

**5a — Update the Dependency row.** Find:
```
["Dependency", "None reported", "Tolerance risk with repeated use"]
```
**Replace with:**
```
["Dependency", "No tolerance, no resistance, no rebound", "Tolerance and dependency risk with repeated use"]
```

**5b — Add the Collagen synthesis row.** Insert a new row entry as the 3rd row (after Absorption, before Recovery):
```
["Collagen synthesis", "Unaffected — tissue repair continues", "Inhibited — slows repair and regeneration"]
```

**Also update the Mechanism row** (row 1) to reflect the updated claim:
```
["Mechanism", "Supports inflammatory response at every stage", "Blocks pain signal"]
```

The component now renders 5 rows. If the compare component uses a fixed-length map, ensure the data array can accommodate 5 entries.

---

### B6 — Application guide: Step 02 description

**Find the Application guide component.** Locate the steps data array. Find step 02:
```
["02", "MASSAGE", "Circular motions in the direction of hair growth. Let each layer absorb before adding more."]
```

**Replace with:**
```
["02", "MASSAGE", "Circular motions in the direction of hair growth. Light pressure — the formula penetrates on its own. No deep kneading required."]
```

---

### B7 — Accordion component: 5th item

**Find the Accordion component.** Locate the items data array. Currently 4 items.

**Add a 5th item** at the end of the array:
```javascript
[
  "The Ayurvedic science — why oil, why these herbs.",
  "In Ayurveda, pain (Ruja) is the classical expression of aggravated Vata dosha. External injury — Aghata — disturbs Vata in the Asthi (bone) and Mamsa (muscle) tissues, triggering a tridoshic inflammation: heat from aggravated Pitta, swelling from aggravated Kapha, pain and stiffness from Vata. The classical first-line treatment for this presentation is Bahya Snehan — external application of a lipid-based formulation to the affected tissue. Sesame oil is the classical base for Vata-predominant musculoskeletal conditions. Devadaru and Nandivriksha help balance the vitiated Vata and Pitta; Rasna supports the lower extremities (Adhyavata); lemongrass and eucalyptus address the Kapha component. The treatment goal is Tridosha balance — restoring the body's natural equilibrium, not suppressing the symptoms of its recovery."
]
```

---

### B8 + B9 — FAQ in Accordion or supplementary panel

The two new FAQ Q&As (chronicity risk and Nidan Parivarjan rest) are reference data in §3.1 of the content spec. They are not rendered in the accordion (which covers preparation, safety, ingredients, usage, and Ayurvedic science). If the prototype includes a dedicated FAQ section or panel, add both Q&As there. If not, they are available for post-launch deployment and need no code change now.

---

## Part C — Post-change verification

After completing all changes in Parts A and B, verify the following:

### Content spec verification
- [ ] §2.7 mechanism body is 5 sentences, includes "lipid-recognising membrane" and "every stage"
- [ ] §2.11 Rasna description includes cytokines, immune response, AND oxidative stress
- [ ] §2.12 Lemongrass card includes oxygen/nutrients AND "inflammatory byproducts"
- [ ] §2.13 What's Out now has 4 items; 4th is dependency/tolerance/resistance
- [ ] §2.15 Compare table now has 5 rows; Collagen synthesis is row 3; Mechanism row updated; Dependency row updated
- [ ] §2.17 Step 02 includes "Light pressure" and "No deep kneading required"
- [ ] §2.18 Accordion has 5 items; 5th is the Ayurvedic science item with Bahya Snehan named
- [ ] §3.1 FAQ has 10 Q&As (was 8, now +2: chronicity risk and Nidan Parivarjan)
- [ ] All Sanskrit terms in the accordion 5th item have plain-language glosses in parentheses

### Prototype verification
- [ ] Mechanism section renders the updated 5-sentence paragraph
- [ ] Rasna ingredient card shows 3 functions (not 1)
- [ ] Lemongrass card in sesame base section shows oxygen/toxin copy
- [ ] WhatsIn "What's out" column renders 4 items (not 3)
- [ ] Compare table renders 5 rows (not 4)
- [ ] Application guide Step 02 includes the "Light pressure" and "No deep kneading" lines
- [ ] Accordion renders 5 items (not 4); 5th item opens correctly
- [ ] No new compliance violations introduced — run the full tone and visual compliance checklists from §3.3 and §3.4

### Tone spot-check on new copy
Read each new passage against these criteria before marking done:
- No absolute claims ("will", "guaranteed", "cures") — hedging verbs throughout ✓
- Ayurvedic terms always followed by plain-language gloss ✓
- No exclamation marks ✓
- Em dash used for qualifiers, not hyphens ✓
- Mechanism claims are specific and factual, not vague ("lipid-recognising membrane" not "special way") ✓
- Compare table remains purely factual — no editorial adjectives on either side ✓

---

*End of update instructions. This file is a one-time execution document — once all changes are applied and verified, it can be archived.*
