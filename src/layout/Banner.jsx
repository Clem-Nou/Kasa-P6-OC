import React from 'react'
import './Banner.css'

export function Banner({ img, text, alt, source }) {
  return (
    <section
      className={
        source === 'about'
          ? 'banner-container banner-container-about'
          : 'banner-container'
      }
    >
      {/* Overlay du banner */}
      <div
        className={
          source === 'about'
            ? 'banner-overlay banner-overlay-about'
            : 'banner-overlay'
        }
      ></div>

      {/* Image du banner */}
      <img src={img} alt={alt} />

      {/* Texte du banner */}
      {text && <h1 className="banner-header">{text}</h1>}
    </section>
  )
}

export default Banner
