// Header.jsx — Sticky frosted header with hamburger + nav + cart
const { useState: useStateHdr } = React;
function Header() {
  const [menuOpen, setMenuOpen] = useStateHdr(false);
  const close = () => setMenuOpen(false);
  return (
    <>
      <header className="header" id="header">
        <div className="header__inner">
          <button className="header__menu" aria-label="Open menu" onClick={()=>setMenuOpen(true)}>
            <span></span><span></span>
          </button>
          <nav className="header__nav">
            <a href="#">Shop All</a>
            <a href="#">Hair Care</a>
            <a href="#">Skin Care</a>
            <a href="#">Wellness</a>
          </nav>
          <a className="header__logo" href="#">
            <img src="files/figma/logo.webp" alt="Kerala Ayurveda"/>
          </a>
          <a className="header__cart" href="#" aria-label="Cart">
            <img src="files/figma/i-bag.svg" alt=""/>
          </a>
        </div>
      </header>
      <div className={"mobile-menu" + (menuOpen?" is-open":"")} aria-hidden={String(!menuOpen)}>
        <div className="mobile-menu__backdrop" onClick={close}></div>
        <aside className="mobile-menu__panel">
          <button className="mobile-menu__close" aria-label="Close menu" onClick={close}>
            <img src="files/figma/i-x.svg" alt=""/>
          </button>
          <a className="mobile-menu__logo" href="#">
            <img src="files/figma/logo.webp" alt="Kerala Ayurveda"/>
          </a>
          <nav className="mobile-menu__nav">
            <a href="#">Shop All</a>
            <a href="#">Hair Care</a>
            <a href="#">Skin Care</a>
            <a href="#">Wellness</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
          </nav>
        </aside>
      </div>
    </>
  );
}
window.Header = Header;
