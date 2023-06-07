import React from 'react'
import './ApartmentPage.css'
import data from '../data/apartments.json'
import { useParams, Navigate } from 'react-router-dom'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { Slideshow } from '../components/SlideShow'

function ApartmentPage() {
  // Récupérer l'identifiant de logement à partir des paramètres d'URL
  const { id } = useParams()

  // Trouver le logement correspondant à l'identifiant dans la liste des logements
  const accommodation = data.find(accommodation => accommodation.id === id)

  // Si le logement n'existe pas, rediriger vers la page d'erreur 404
  if (!accommodation) {
    return <Navigate to="/404" />
  }

  // Récupération des valeurs du logement pour les stocker dans des variables
  const tags = accommodation.tags
  const equipments = accommodation.equipments
  const hostName = accommodation.host.name
  const hostPicture = accommodation.host.picture
  const picturesList = accommodation.pictures
  const rating = accommodation.rating
  return (
    <main className="apartment_page">
      <Slideshow photos={picturesList} />

      <ApartmentHeader
        title={accommodation.title}
        location={accommodation.location}
        tags={tags}
        hostName={hostName}
        hostPicture={hostPicture}
        rating={rating}
      />

      <article className="apartment_description_area">
        {/* Description du logement */}
        <div className="apartment_description">
          <DescriptionPanel
            title="Description"
            content={accommodation.description}
          />
        </div>
        {/* Équipements du logement */}
        <div className="collapse_equipment">
          <DescriptionPanel
            title="Equipements"
            content={
              <ul className="equipment_container">
                {equipments.map(equipment => (
                  <li
                    key={`${accommodation.id}-${equipment}`}
                    className="accommodation_equipments_list"
                  >
                    {equipment}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </article>
    </main>
  )
}

export default ApartmentPage
