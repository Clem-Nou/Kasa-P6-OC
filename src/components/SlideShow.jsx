import React, { useState, useEffect } from 'react'
import './SlideShow.css'
import forwardButton from '../assets/forward-button.svg'
import backButton from '../assets/back-button.svg'

export function Slideshow({ photos }) {
  const [currentImg, setCurrentImg] = useState(0)
  const numberOfImages = photos.length

  const nextPhoto = () => {
    setCurrentImg(prevImg => (prevImg + 1) % numberOfImages)
  }

  const previousPhoto = () => {
    setCurrentImg(prevImg => (prevImg - 1 + numberOfImages) % numberOfImages)
  }

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') {
      nextPhoto()
    } else if (event.key === 'ArrowLeft') {
      previousPhoto()
    }
  }

  useEffect(() => {
    // Add event listener for keyboard navigation on component mount
    window.addEventListener('keydown', handleKeyDown)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="listing-slideshow">
      <span
        className={
          numberOfImages > 1
            ? 'slideshow-button slideshow-back'
            : 'slideshow-button slideshow-back slideshow-button-hidden'
        }
        onClick={previousPhoto}
      >
        <img src={backButton} alt="back button" />
      </span>

      {photos.map((item, index) => (
        <img
          src={item}
          alt={`Apartment - ${index + 1}`}
          className={`slideshow-image slideshow-image-${index}`}
          key={`Apartment - ${index}`}
          style={{
            transform: `translateX(calc((${index} - ${currentImg}) * 100%))`
          }}
        />
      ))}

      <span
        className={
          numberOfImages > 1
            ? 'slideshow-button slideshow-forward'
            : 'slideshow-button slideshow-forward slideshow-button-hidden'
        }
        onClick={nextPhoto}
      >
        <img src={forwardButton} alt="forward button" />
      </span>

      <div className="slideshow-counter">
        {currentImg + 1}/{numberOfImages}
      </div>
    </section>
  )
}
