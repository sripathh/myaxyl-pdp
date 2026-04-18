// ProductInfo.jsx
function ProductInfo() {
  return (
    <div className="info">
      <span className="info__badge">Minimises hair fall &nbsp;•&nbsp; Supports hair growth</span>
      <h1 className="info__title">Neelibhringadi Keram</h1>
      <p className="info__subtitle">One oil for complete hair recovery</p>
      <p className="info__meta">Made by BAMS doctors in our GMP &amp; ISO–certified facility. FDA compliant and AYUSH licensed.</p>

      <div className="ritual">
        <div className="ritual__icon"><img src="files/figma/ritual.svg" alt=""/></div>
        <div>
          <div className="ritual__label">The Ritual Guide</div>
          <div className="ritual__text">Warm slightly. Massage into roots. Leave for 30–60 mins. Use two to three times a week.</div>
        </div>
      </div>

      <div className="badges">
        <span className="badge"><img src="files/figma/i-truck.svg" alt=""/>2–4 day delivery</span>
        <span className="badge"><img src="files/figma/i-cash.svg" alt=""/>COD available</span>
        <span className="badge"><img src="files/figma/i-return.svg" alt=""/>7-day returns</span>
      </div>
    </div>
  );
}
window.ProductInfo = ProductInfo;
