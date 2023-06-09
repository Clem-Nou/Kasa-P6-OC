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
    // Ajoute un écouteur d'événement pour la navigation au clavier au montage du composant
    window.addEventListener('keydown', handleKeyDown)

    // Nettoie l'écouteur d'événement au démontage du composant
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="listing-slideshow">
      {/* Bouton précédent */}
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

      {/* Affichage des images du diaporama */}
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

      {/* Bouton suivant */}
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

      {/* Compteur du diaporama */}
      <div className="slideshow-counter">
        {currentImg + 1}/{numberOfImages}
      </div>
    </section>
  )
}
