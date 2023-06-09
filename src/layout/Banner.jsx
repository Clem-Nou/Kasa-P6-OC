import React from 'react'
import './Banner.css'

export function Banner(props) {
  return (
    <section
      className={
        props.source === 'about'
          ? 'banner-container banner-container-about'
          : 'banner-container'
      }
    >
      {/* Overlay du banner */}
      <div
        className={
          props.source === 'about'
            ? 'banner-overlay banner-overlay-about'
            : 'banner-overlay'
        }
      ></div>

      {/* Image du banner */}
      <img src={props.img} alt={props.alt} />

      {/* Texte du banner */}
      {props.text && <h1 className="banner-header">{props.text}</h1>}
    </section>
  )
}

export default Banner
