import React from 'react'
import './ErrorPageNotFound.css'
import Navbar from '../layout/Navbar'
import Main from '../layout/Main'
import { NavLink } from 'react-router-dom'

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error_page">
          <h1 className="error_title">404</h1>
          <h2 className="error_subtitle">
            Oups ! La page que vous demandez n'existe pas.
          </h2>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </Main>
    </>
  )
}

export default ErrorPageNotFound
