import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentsCard.css'

function ApartmentCard({ apartment }) {
  return (
    <Link to={`/apartment/${apartment.id}`} className="apartment">
      {/* Conteneur de la carte de l'appartement */}
      <div className="apartment_img">
        {/* Image de couverture de l'appartement */}
        <img src={apartment.cover} alt={apartment.title} />
        {/* Informations supplémentaires de l'appartement */}
        <div className="apartment_info">
          <h3>{apartment.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ApartmentCard
