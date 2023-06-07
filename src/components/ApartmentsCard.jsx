import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentsCard.css'

function ApartmentCard({ apartment }) {
  return (
    <Link to={`/apartment/${apartment.id}`} className="apartment">
      <div className="apartment_img">
        <img src={apartment.cover} alt={apartment.title} />
        <div className="apartment_info">
          <h3>{apartment.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ApartmentCard
