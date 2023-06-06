import React from 'react'
import './ApartmentHeader.css'

export function ApartmentHeader() {
  return (
    <div className="apartment_header">
      <div className="apartment_title">
        <h1>Cozy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div className="apartment_tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris</span>
        </div>
      </div>

      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h2>
            <span>Alexandre</span>
            <span>Dumas</span>
          </h2>
          <div className="apartment_owner_badge"></div>
        </div>
        <div className="apartment_owner_stars">
          <i className="fa-solid fa-star star_on"></i>
          <i className="fa-solid fa-star star_on"></i>
          <i className="fa-solid fa-star star_on"></i>
          <i className="fa-solid fa-star star_off"></i>
          <i className="fa-solid fa-star star_off"></i>
        </div>
      </div>
    </div>
  )
}
