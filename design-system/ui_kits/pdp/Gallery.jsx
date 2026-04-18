// Gallery.jsx
const { useState } = React;
function Gallery() {
  const slides = [
    {src:"files/figma/hero-1.webp", alt:"Neelibhringadi Keram — bottle"},
    {src:"files/figma/hero-2.webp", alt:"Supports hair growth, minimises fall"},
    {src:"files/figma/hero-3.webp", alt:"Three powerful ingredients"},
    {src:"files/figma/hero-4.webp", alt:"Triple-milk formula"},
    {src:"files/figma/hero-5.webp", alt:"Kerala Ayurveda — built on trust"},
  ];
  const [i, setI] = useState(0);
  const go = (n) => setI((n + slides.length) % slides.length);
  return (
    <div className="gallery">
      <div className="gallery__stage" id="galleryStage">
        {slides.map(({src, alt}, idx) => (
          <img key={src} src={src} data-slide={idx} className={"gallery__img" + (i===idx?" is-active":"")} alt={alt}/>
        ))}
        <button className="gallery__arrow gallery__arrow--prev" onClick={()=>go(i-1)} aria-label="Prev">
          <img src="files/figma/chevron.svg" alt=""/>
        </button>
        <button className="gallery__arrow gallery__arrow--next" onClick={()=>go(i+1)} aria-label="Next">
          <img src="files/figma/chevron.svg" alt=""/>
        </button>
        <div className="gallery__thumbs" id="galleryThumbs">
          {slides.map(({src}, idx) => (
            <button key={src} data-slide={idx} className={"gallery__thumb" + (i===idx?" is-active":"")} onClick={()=>go(idx)}>
              <img src={src} alt=""/>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
window.Gallery = Gallery;
