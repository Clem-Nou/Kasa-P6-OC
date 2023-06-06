import React from 'react'
import Banner from '../layout/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'
import Main from '../layout/Main.jsx'

import './Home.css'

function Home() {
  return (
    <div>
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </div>
  )
}

export default Home
