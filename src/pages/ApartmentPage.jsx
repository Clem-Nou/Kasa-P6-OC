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
  const {
    tags,
    equipments,
    host: { name: hostName, picture: hostPicture },
    pictures: picturesList,
    rating,
    title,
    location
  } = accommodation

  return (
    <main className="apartment_page">
      {/* Composant Slideshow pour afficher les photos */}
      <Slideshow photos={picturesList} />

      {/* Composant ApartmentHeader pour afficher les informations de l'appartement */}
      <ApartmentHeader
        title={title}
        location={location}
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
                {/* Itération sur la liste des équipements */}
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
