import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Lien vers la page d'accueil */}
      <NavLink to="/">
        <div className="navbar_logo">
          {/* Logo affiché dans la barre de navigation */}
          <img src={logo} alt="logo" className="logo" />
        </div>
      </NavLink>
      {/* Lien vers la page d'accueil */}
      <NavLink to="/">
        <div className="link">Accueil</div>
      </NavLink>
      {/* Lien vers la page "A Propos" */}
      <NavLink to="/about">
        <div className="link">A Propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar
