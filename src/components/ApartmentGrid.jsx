import React from 'react'
import './ApartmentGrid.css'
import ApartmentCard from './ApartmentsCard.jsx'
import apartmentsData from '../data/apartments.json'

function ApartmentGrid() {
  return (
    <div className="gallery">
      {apartmentsData.map(apartment => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  )
}

export default ApartmentGrid