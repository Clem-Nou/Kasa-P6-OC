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
      <div className="apartment_title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="apartment_tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h2>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h2>
          <div className="apartment_owner_badge">
            <img src={hostPicture} alt="Host" />
          </div>
        </div>
        <div className="apartment_owner_stars">
          {[...Array(starCount)].map((_, index) => (
            <i
              className={`fa-solid fa-star ${
                index < rating ? 'star_on' : 'star_off'
              }`}
              key={index}
            ></i>
          ))}
        </div>
      </div>
    </div>
  )
}
