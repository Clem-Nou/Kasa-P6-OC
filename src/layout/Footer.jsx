import React from 'react'
import './Footer.css'
import logoDark from '../assets/logoDark.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={logoDark} alt="logo" />
      </div>
      <div className="footer_text">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
