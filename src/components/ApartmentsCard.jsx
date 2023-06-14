import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentsCard.css'

function ApartmentCard({ title, cover, id }) {
  return (
    <Link to={`/apartment/${id}`} className="apartment">
      {/* Conteneur de la carte de l'appartement */}
      <div className="apartment_img">
        {/* Image de couverture de l'appartement */}
        <img src={cover} alt={title} />
        {/* Informations supplémentaires de l'appartement */}
        <div className="apartment_info">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ApartmentCard
