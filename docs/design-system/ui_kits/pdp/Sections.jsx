// Sections.jsx — the below-the-fold content sections
const { useState } = React;

function TrustMarkers() {
  const items = [
    ["1945","Est."],["GMP","Cert."],["ISO","9001"],
    ["FDA","Comp."],["AYUSH","Lic."]
  ];
  return (
    <div className="trust-markers">
      {items.map(([v,l])=>(
        <div className="trust-markers__cell" key={v}>
          <div className="trust-markers__num">{v}</div>
          <div className="trust-markers__label">{l}</div>
        </div>
      ))}
    </div>
  );
}

function CrossSell() {
  const [added, setAdded] = useState(false);
  const toggle = () => setAdded(a => !a);
  return (
    <div className="cross-sell">
      <div className="cross-sell__img"><img src="files/figma/cross-sell.webp" alt="Bhringarajasava"/></div>
      <div className="cross-sell__info">
        <div className="cross-sell__title">Add internal support</div>
        <div className="cross-sell__desc">Bhringarajasava — fermented herbal brew for hair growth from within.</div>
      </div>
      <button className={"cross-sell__add" + (added?" is-added":"")} onClick={toggle}>
        {added ? "✓ Added" : "+ ₹225"}
      </button>
    </div>
  );
}

function Mechanism() {
  return (
    <section className="mechanism">
      <div className="mechanism__eyebrow">Complete Hair Recovery</div>
      <h2 className="mechanism__title">One oil for complete hair recovery</h2>
      <div className="mechanism__body">
        <p>Hair recovery needs two wins — <strong>reduce the fall</strong> and <strong>support new growth</strong>. Most oils address one. Neelibhringadi works both sides.</p>
        <p style={{marginTop:"1em"}}><strong>Neeli</strong> cools scalp inflammation that weakens follicles. <strong>Bhringaraja</strong> activates dormant roots. <strong>Amla</strong> fortifies the shaft from within. The <strong>triple-milk base</strong> carries all three deeper than a standard oil carrier — processed over eleven days to bind the herbal essence to the oil.</p>
      </div>
    </section>
  );
}

function HonestSequence() {
  return (
    <section className="honest">
      <div className="honest__eyebrow">What to Expect</div>
      <h2 className="honest__title">The honest sequence.</h2>
      <p className="honest__sub">Root strength comes before visible density.</p>
    </section>
  );
}

function Timeline() {
  const steps = [
    {stage:"First time", uses:"Day 1", eyebrow:"First application", title:"Scalp cools immediately", text:"The Neeli acts immediately. Oil absorbs without heaviness.", img:"timeline-1.webp"},
    {stage:"Week 2–3", uses:"~ 8 uses", eyebrow:"Early signal", title:"Less in the shower", text:"Fall reduction is the first signal. The follicle is strengthening.", img:"timeline-2.webp"},
    {stage:"Month 3+", uses:"~ 36 uses", eyebrow:"Full cycle", title:"Continued improvement — visible change", text:"Three months completes a cycle. Visible density increase at the crown.", img:"timeline-3.webp"},
  ];
  return (
    <section className="timeline">
      <div className="timeline__inner">
        {steps.map(({stage, uses, eyebrow, title, text, img})=>(
          <div className="timeline__step" key={stage}>
            <div className="timeline__thumb"><img src={`files/figma/${img}`} alt=""/></div>
            <div className="timeline__body">
              <div className="timeline__stage-row">
                <span className="timeline__stage">{stage}</span>
                <span className="timeline__uses">{uses}</span>
              </div>
              <div className="timeline__eyebrow">{eyebrow}</div>
              <h3 className="timeline__title">{title}</h3>
              <p className="timeline__text">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="timeline__disclaimer">Based on consistent use as directed. Individual results may vary.</p>
    </section>
  );
}

function Ingredients() {
  const data = [
    {name:"Bhringaraj", ing:"bhringaraj", desc:"Supports hair growth. Activates follicles and increases scalp circulation."},
    {name:"Amla", ing:"amla", desc:"Minimises hair fall. Strengthens the hair shaft with natural Vitamin C."},
    {name:"Neeli", ing:"neeli", desc:"Cools and recovers. Reduces scalp inflammation and promotes regrowth."},
    {name:"Coconut Oil", ing:"coconut", desc:"Deep nourishment. Traditional carrier that mimics natural scalp lipids."},
  ];
  return (
    <section className="ingredients">
      <div className="ingredients__eyebrow">Key Ingredients</div>
      <div className="ingredients__grid">
        {data.map(({name, ing, desc})=>(
          <article className="ing-card" data-ing={ing} key={name}>
            <div className="ing-card__img"></div>
            <div className="ing-card__body">
              <h3 className="ing-card__name">{name}</h3>
              <p className="ing-card__desc">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Milks() {
  const milks = [
    {name:"Coconut milk", key:"coconut", desc:"Nourishes and moisturises the scalp."},
    {name:"Goat milk", key:"goat", desc:"Addresses dandruff and improves hair texture."},
    {name:"Cow milk", key:"cow", desc:"Controls hair fall and promotes hair growth."},
  ];
  return (
    <section className="milks">
      <div className="milks__eyebrow">The Secret Base</div>
      <h2 className="milks__title">Three milks. One complete formula.</h2>
      <p className="milks__intro">Three nourishing milks work together for a healthier scalp and stronger, smoother hair.</p>
      <div className="milks__grid">
        {milks.map(({name, key, desc})=>(
          <div className="milk" data-milk={key} key={key}>
            <div className="milk__icon"></div>
            <div className="milk__body">
              <h3 className="milk__name">{name}</h3>
              <p className="milk__desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatsIn() {
  return (
    <section className="whats-in">
      <div className="whats-in__header">
        <div className="whats-in__eyebrow">Is it right for you?</div>
        <h2 className="whats-in__title">What's in it. What isn't.</h2>
      </div>
      <div className="whats-in__card">
        <div>
          <div className="whats-in__col-label">What's in</div>
          <div className="whats-in__item">
            <span className="whats-in__icon whats-in__icon--yes"><img src="files/figma/i-check.svg" alt=""/></span>
            <div>
              <div className="whats-in__item-title">100% natural ingredients</div>
              <p className="whats-in__item-desc">No mineral oil, parabens or synthetic fragrance. Pure botanical extraction.</p>
            </div>
          </div>
          <div className="whats-in__item">
            <span className="whats-in__icon whats-in__icon--yes"><img src="files/figma/i-check2.svg" alt=""/></span>
            <div>
              <div className="whats-in__item-title">Triple-milk &amp; sesame oil base</div>
              <p className="whats-in__item-desc">Traditional carrier that mimics scalp lipids. Deeply penetrative.</p>
            </div>
          </div>
          <div className="whats-in__item">
            <span className="whats-in__icon whats-in__icon--yes"><img src="files/figma/i-check.svg" alt=""/></span>
            <div>
              <div className="whats-in__item-title">Helps prevent premature graying</div>
              <p className="whats-in__item-desc">Neeli and Bhringaraja work together to support natural hair colour.</p>
            </div>
          </div>
        </div>
        <div className="whats-in__divider" aria-hidden="true"></div>
        <div>
          <div className="whats-in__col-label whats-in__col-label--no">What's out</div>
          <div className="whats-in__item whats-in__item--no">
            <span className="whats-in__icon whats-in__icon--no"><img src="files/figma/i-x.svg" alt=""/></span>
            <div>
              <div className="whats-in__item-title">No parabens</div>
              <p className="whats-in__item-desc">We use natural antioxidants to preserve the formula.</p>
            </div>
          </div>
          <div className="whats-in__item whats-in__item--no">
            <span className="whats-in__icon whats-in__icon--no"><img src="files/figma/i-x.svg" alt=""/></span>
            <div>
              <div className="whats-in__item-title">No artificial fragrance</div>
              <p className="whats-in__item-desc">The scent is purely from herbs and the carrier oil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ts = [
    {name:"Priya M.", meta:"Bengaluru • 6 weeks", tag:"Less fall — week 3", text:'"Less hair in the shower drain by week three. That was the first sign it was working. The routine is simple enough to actually stick with."'},
    {name:"Arjun V.", meta:"Kochi • 3 months", tag:"Density improved", text:'"New growth visible at the temples after three months. Consistent use was the key. It\'s a recovery system, not a quick fix."'},
  ];
  return (
    <section className="testimonials">
      <div className="testimonials__grid">
        {ts.map(({name, meta, tag, text})=>(
          <div className="testimonial" key={name}>
            <div className="testimonial__stars">
              {Array.from({length:5}).map((_,i)=><img key={i} src="files/figma/star.svg" alt=""/>)}
            </div>
            <div className="testimonial__name">{name}</div>
            <div className="testimonial__meta">{meta}</div>
            <span className="testimonial__tag">{tag}</span>
            <p className="testimonial__text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppGuide() {
  const steps = [
    {num:"1", label:"Warm", desc:"Warm oil penetrates — cold oil sits on the surface."},
    {num:"2", label:"Apply", desc:"Apply an adequate amount gently onto the scalp and hair."},
    {num:"3", label:"Massage", desc:"Circular motion, 5 minutes. Fingertips, not nails."},
  ];
  return (
    <section className="app-guide">
      <img className="app-guide__image" src="files/figma/lifestyle.webp" alt="Your Easy Massage Ritual — Gently massage warm oil onto the scalp"/>
      <div className="app-guide__patch">
        <img src="files/figma/i-info.svg" alt=""/>Always patch test first
      </div>
      <div className="app-guide__steps">
        {steps.map(({num, label, desc})=>(
          <div className="app-guide__step" key={num}>
            <div className="app-guide__num">{num}</div>
            <div className="app-guide__label">{label}</div>
            <p className="app-guide__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    {label:"Ingredients", us:"4 primary ingredients + triple milk base + 15 supporting botanicals", them:"Mineral oil base + synthetic fragrance + 1–2 herbal extracts"},
    {label:"Processing", us:"7-day classical Taila Paka extraction", them:"Machine-mixed, same day"},
    {label:"Result Timeline", us:"2–3 weeks for fall reduction; 2+ months for visible growth", them:"Cosmetic only — coats hair surface"},
    {label:"Side Effects", us:"None reported. Patch test recommended.", them:"Pore clogging, residue buildup"},
  ];
  return (
    <section className="compare">
      <h2 className="compare__title">How it compares</h2>
      <div className="compare__grid">
        <div className="compare__col compare__col--us">
          <div className="compare__col-name">Neelibhringadi Keram</div>
          {rows.map(({label, us})=>(
            <div className="compare__row" key={label}>
              <div className="compare__row-label">{label}</div>
              <div className="compare__row-val">{us}</div>
            </div>
          ))}
        </div>
        <div className="compare__col compare__col--them">
          <div className="compare__col-name">Generic hair oil</div>
          {rows.map(({label, them})=>(
            <div className="compare__row" key={label}>
              <div className="compare__row-label">{label}</div>
              <div className="compare__row-val">{them}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion() {
  const items = [
    {label:"Full ingredient list", content:<p>Sesame oil, coconut milk, cow milk, goat milk, Neeli (Indigofera tinctoria), Bhringaraja (Eclipta alba), Amla (Emblica officinalis), and a blend of classical herbs prepared by the traditional 11-day <em>taila paka</em> process.</p>},
    {label:"Preparation — 7 days", content:<p>Each batch is cooked in a copper vessel over a precisely controlled low flame. The 7-day classical Taila Paka extraction allows the herbal essences to bind with the oil base — a compressed timeline changes the potency profile.</p>},
    {label:"Safety & interactions", content:<p>External use only. Always patch test before first full application. Pregnant or nursing? Talk to your doctor before starting a new topical regimen — the formula is not tested for this cohort.</p>},
    {label:"Frequently asked", content:<><p><strong>When will I see results?</strong> Expect fall reduction around week 2–3, visible density change by month 3.</p><p><strong>Can I use it daily?</strong> Two to three applications a week is enough. Over-oiling doesn't help absorption.</p><p><strong>Does the scent fade?</strong> Yes — the herbal base is strong on first wear, much softer after a 30-min soak and wash.</p></>},
  ];
  const [open, setOpen] = useState([0]);
  const toggle = (idx) => setOpen(open.includes(idx) ? open.filter(i=>i!==idx) : [...open, idx]);
  return (
    <section className="go-deeper">
      <div className="go-deeper__eyebrow">Information</div>
      <h2 className="go-deeper__title">Go deeper.</h2>
      <div className="accordion" id="accordion">
        {items.map(({label, content}, idx)=>(
          <div className={"accordion__item" + (open.includes(idx)?" is-open":"")} key={label}>
            <button className="accordion__btn" onClick={()=>toggle(idx)}>
              <span className="accordion__label">{label}</span>
              <img className="accordion__chev" src="files/figma/chevron.svg" alt=""/>
            </button>
            <div className="accordion__panel">
              <div className="accordion__content">{content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const rs = [
    {name:"Anjali K.", text:'"Excellent for postpartum hair fall. Within a month, the amount of hair on my brush was noticeably less. The routine is easy to keep up."'},
    {name:"Rohan S.", text:'"Started using it for early greying. Two months in, the texture has improved and the earthy smell has grown on me. No heaviness."'},
  ];
  return (
    <section className="reviews">
      <div className="reviews__header">
        <div>
          <div className="reviews__eyebrow">Feedback</div>
          <h2 className="reviews__title">Customer Reviews</h2>
        </div>
        <div className="reviews__score">
          <div className="reviews__stars">
            {Array.from({length:4}).map((_,i)=><img key={i} src="files/figma/star.svg" alt=""/>)}
            <img src="files/figma/star-half.svg" alt=""/>
          </div>
          <div className="reviews__score-num">4.64 / 5.0</div>
        </div>
      </div>
      <div className="reviews__grid">
        {rs.map(({name, text})=>(
          <article className="review" key={name}>
            <header className="review__head">
              <span className="review__name">{name}</span>
              <span className="review__verified">Verified Purchase</span>
            </header>
            <div className="review__stars">
              {Array.from({length:5}).map((_,i)=><img key={i} src="files/figma/star.svg" alt=""/>)}
            </div>
            <p className="review__text">"{text}"</p>
          </article>
        ))}
      </div>
      <a href="#" className="reviews__cta">Read all 86 reviews</a>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing">
      <p className="closing__text">Some formulas don't need improving.<strong>This is one of them.</strong></p>
    </section>
  );
}

function StickyBar() {
  const [added, setAdded] = useState(false);
  const onAdd = () => { setAdded(true); setTimeout(()=>setAdded(false), 1500); };
  return (
    <div className="sticky-bar">
      <div className="sticky-bar__inner">
        <div className="sticky-bar__thumb"><img src="files/figma/hero-1.webp" alt=""/></div>
        <div className="sticky-bar__info">
          <div className="sticky-bar__title">Neelibhringadi Keram</div>
          <div className="sticky-bar__sub">200 ml &nbsp;•&nbsp; ₹315</div>
        </div>
        <button className={"atc sticky-bar__atc" + (added?" is-added":"")} onClick={onAdd}>
          <span className="atc__icon"><img src="files/figma/reorder.svg" alt=""/></span>
          <span className="atc__main">
            <span className="atc__main-top">{added ? "✓ Added to Cart" : "Reorder Now"}</span>
          </span>
          <span className="atc__price">
            <span className="atc__price-old">₹350</span>
            <span className="atc__price-new">₹315</span>
          </span>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, {TrustMarkers, CrossSell, Mechanism, HonestSequence, Timeline, Ingredients, Milks, WhatsIn, Testimonials, AppGuide, Compare, Accordion, Reviews, Closing, StickyBar});
