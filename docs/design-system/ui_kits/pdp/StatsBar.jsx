// StatsBar.jsx
function StatsBar() {
  const Star = () => (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M6 0l1.8 3.6L12 4.2 9 7l.7 4L6 9l-3.7 2L3 7 0 4.2l4.2-.6z"/>
    </svg>
  );
  return (
    <div className="stats">
      <div className="stats__cell">
        <div className="stats__num">4.64 <Star/></div>
        <div className="stats__label">Ratings</div>
      </div>
      <div className="stats__cell">
        <div className="stats__num">312</div>
        <div className="stats__label">Reviews</div>
      </div>
      <div className="stats__cell">
        <div className="stats__num">94%</div>
        <div className="stats__label">Recommend</div>
      </div>
      <div className="stats__cell">
        <div className="stats__num">₹10.50</div>
        <div className="stats__label">Per use</div>
      </div>
    </div>
  );
}
window.StatsBar = StatsBar;
