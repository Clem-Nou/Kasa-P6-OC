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
        <Banner
          img={HeaderBanner}
          alt={'Chez vous, partout et ailleurs'}
          text={'Chez vous, partout et ailleurs'}
        />
        <ApartmentGrid />
      </Main>
    </div>
  )
}

export default Home
