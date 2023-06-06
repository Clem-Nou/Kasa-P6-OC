import React from 'react'
import './ApartmentsCard.css'
import apartmentsData from '../data/apartments.json'

function apartmentCard() {
  return (
    <>
      {apartmentsData.map(apartment => (
        <div key={apartment.id} className="apartment">
          <div className="apartment_img">
            <img src={apartment.cover} alt={apartment.title} />
            <div className="apartment_info">
              <h3>{apartment.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default apartmentCard
