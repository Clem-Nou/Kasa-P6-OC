import React from 'react'
import Banner from '../layout/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'
import Main from '../layout/Main.jsx'
import HeaderBanner from '../assets/banner.png'

import './Home.css'

function Home() {
  return (
    <div>
      <Main>
        {/* Composant Banner pour afficher la bannière principale */}
        <Banner
          img={HeaderBanner}
          alt={'Chez vous, partout et ailleurs'}
          text={'Chez vous, partout et ailleurs'}
        />
        {/* Composant ApartmentGrid pour afficher la grille des appartements */}
        <ApartmentGrid />
      </Main>
    </div>
  )
}

export default Home
