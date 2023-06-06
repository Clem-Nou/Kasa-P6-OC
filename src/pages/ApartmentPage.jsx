import React from 'react'
import './ApartmentPage.css'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { ApartmentBanner } from '../components/ApartmentBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'

function ApartmentPage() {
  return (
    <div className="apartment_page">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment_description_area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  )
}
export default ApartmentPage
