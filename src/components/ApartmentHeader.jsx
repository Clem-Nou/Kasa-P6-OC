import React from 'react'
import './ApartmentHeader.css'

export function ApartmentHeader({
  title,
  location,
  tags,
  hostName,
  hostPicture,
  rating
}) {
  const starCount = 5
  const [firstName, lastName] = hostName.split(' ')

  return (
    <div className="apartment_header">
      {/* Section pour afficher le titre, l'emplacement et les tags de l'appartement */}
      <div className="apartment_title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="apartment_tags">
          {/* Itération sur la liste des tags de l'appartement */}
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Section pour afficher les détails du propriétaire de l'appartement */}
      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h2>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h2>
          <div className="apartment_owner_badge">
            {/* Affichage de l'image du propriétaire */}
            <img src={hostPicture} alt="Host" />
          </div>
        </div>
        <div className="apartment_owner_stars">
          {/* Affichage du rating sous forme d'étoiles */}
          {[...Array(starCount)].map((_, index) => (
            // On crée un tableau contenant 'starCount' éléments vides ('Undefined')
            <i
              className={`fa-solid fa-star ${
                index < rating ? 'star_on' : 'star_off'
              }`}
              key={index}
            ></i>
            // Affichage de chaque étoile, si l'index est inférieur à la note, l'étoile est activée, sinon elle est désactivée
            // index = 0 : 0 < 1, donc l'étoile correspondante sera "allumée" (star on).
            // index = 1 : 1 < 1, donc l'étoile correspondante sera "éteinte" (star off).
          ))}
        </div>
      </div>
    </div>
  )
}
