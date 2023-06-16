import React, { useState, useEffect } from 'react'
import './SlideShow.css'
import forwardButton from '../assets/forward-button.svg'
import backButton from '../assets/back-button.svg'

export function Slideshow({ photos }) {
  // Mise en place de 2 variables
  // CurrentImg est initialisé à 0 avec le hook useState, ainsi la première image sera affichée
  // setCurrentImg est une fonction spéciale qui nous permet de mettre à jour la valeur de la variable currentImg.
  // Lorsque nous l'appelons avec un nouveau numéro d'image, cela met à jour la valeur de currentImg avec ce nouveau numéro.
  const [currentImg, setCurrentImg] = useState(0)
  const numberOfImages = photos.length

  const nextPhoto = () => {
    setCurrentImg(prevImg => (prevImg + 1) % numberOfImages)
    // La fonction `nextPhoto` est utilisée pour passer à l'image suivante dans le diaporama.
    // Elle met à jour l'état `currentImg` en utilisant la fonction `setCurrentImg`.

    // Cette fonction prend l'ancienne valeur de `currentImg` (appelée `prevImg`) et ajoute 1 pour passer à l'index de l'image suivante.

    // L'opération `(prevImg + 1) % numberOfImages` assure que l'index reste dans la plage valide des images disponibles.
    // L'opérateur `%` (modulo) calcule le reste de la division entre `(prevImg + 1)` et `numberOfImages`,
    // ce qui permet de revenir à 0 une fois que l'index atteint la dernière image.
    // Cela crée un effet de boucle dans le diaporama, où le passage de la dernière image mène à la première image.
  }

  const previousPhoto = () => {
    setCurrentImg(prevImg => (prevImg - 1 + numberOfImages) % numberOfImages)
    // La fonction `previousPhoto` est utilisée pour passer à l'image précédente dans le diaporama.
    // Elle met à jour l'état `currentImg` en utilisant la fonction `setCurrentImg`.

    // Cette fonction prend l'ancienne valeur de `currentImg` (appelée `prevImg`), soustrait 1 et ajoute `numberOfImages`
    // pour s'assurer que l'index reste dans la plage valide des images disponibles.

    // L'opération `(prevImg - 1 + numberOfImages) % numberOfImages` effectue un ajustement cyclique de l'index,
    // où la soustraction de 1 peut entraîner un nombre négatif, puis l'addition de `numberOfImages`
    // et le modulo assure que l'index reste dans la plage valide des images.
  }

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') {
      nextPhoto() // Appeler la fonction `nextPhoto` lorsque la touche "ArrowRight" est enfoncée
    } else if (event.key === 'ArrowLeft') {
      previousPhoto() // Appeler la fonction `previousPhoto` lorsque la touche "ArrowLeft" est enfoncée
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
            ? 'slideshow-button slideshow-back' // Ajoute la classe 'slideshow-back' si le nombre d'images est supérieur à 1
            : 'slideshow-button slideshow-back slideshow-button-hidden' // Ajoute les classes 'slideshow-back' et 'slideshow-button-hidden' si le nombre d'images est inférieur ou égal à 1
        }
        onClick={previousPhoto} // Lorsque le bouton précédent est cliqué, appeler la fonction `previousPhoto`
      >
        <img src={backButton} alt="back button" />
      </span>

      {/* Affichage des images du diaporama */}
      {photos.map((item, index) => (
        <img
          src={item}
          alt={`Apartment - ${index + 1}`}
          className={`slideshow-image slideshow-image-${index}`} // Ajoute la classe 'slideshow-image' et 'slideshow-image-X' où X est l'index de l'image
          key={`Apartment - ${index}`} // Clé unique pour chaque image
          style={{
            transform: `translateX(calc((${index} - ${currentImg}) * 100%))` // Applique une transformation CSS pour déplacer l'image horizontalement
          }}
        />
      ))}

      {/* Bouton suivant */}
      <span
        className={
          numberOfImages > 1
            ? 'slideshow-button slideshow-forward' // Ajoute la classe 'slideshow-forward' si le nombre d'images est supérieur à 1
            : 'slideshow-button slideshow-forward slideshow-button-hidden' // Ajoute les classes 'slideshow-forward' et 'slideshow-button-hidden' si le nombre d'images est inférieur ou égal à 1
        }
        onClick={nextPhoto} // Lorsque le bouton suivant est cliqué, appeler la fonction `nextPhoto`
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
