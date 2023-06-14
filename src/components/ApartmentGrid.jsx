import React from 'react'
import './ApartmentGrid.css'
import ApartmentCard from './ApartmentsCard.jsx'
import apartmentsData from '../data/apartments.json'

function ApartmentGrid() {
  return (
    <div className="gallery">
      {/* Itération sur la liste des appartements */}
      {apartmentsData.map(apartment => (
        <ApartmentCard
          key={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  )
}

export default ApartmentGrid
