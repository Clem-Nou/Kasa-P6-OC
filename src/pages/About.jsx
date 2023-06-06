import React from 'react'
import ApartmentBanner from '../components/ApartmentBanner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.css'

function About() {
  return (
    <>
      <div className="about_page">
        <ApartmentBanner />
        <div className="about_container">
          <DescriptionPanel />
          <DescriptionPanel />
          <DescriptionPanel />
          <DescriptionPanel />
        </div>
      </div>
    </>
  )
}

export default About
