import React, { useState } from 'react'
import './DescriptionPanel.css'

export function DescriptionPanel({ title, content, openByDefault }) {
  // On déclare isContentVisible avec la fonction SetIsContentVisible
  // On initialise isContentVisible avec le hook useState comme openByDefault
  const [isContentVisible, setIsContentVisible] = useState(openByDefault)

  // La fonction toggleContent permet d'inverser isContentVisible via setIsContentVisible
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    // On crée les description panels qui prennent la classe open seulement si isContentVisible = true
    // Le h3 description_panel_title contient un onClick qui appelle toggleContent pour inverser isContentVisible
    <div className={`description_panel ${isContentVisible ? 'open' : ''}`}>
      {/* Titre du panneau de description avec possibilité de basculer le contenu */}
      <h3 className="description_panel_title" onClick={toggleContent}>
        <span>{title}</span>
        {/* Icône indiquant si le contenu est visible ou masqué */}
        <i
          className={`fa-solid fa-chevron-${isContentVisible ? 'up' : 'down'}`}
        ></i>
      </h3>

      {/* Contenu du panneau de description */}
      <div
        className={`description_panel_content ${
          isContentVisible ? 'visible' : ''
        }`}
      >
        {content}
      </div>
    </div>
  )
}
