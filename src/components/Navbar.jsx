import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar_logo">
          <img src="logo.png" alt="logo" className="logo" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="link">Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div className="link">A Propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar
