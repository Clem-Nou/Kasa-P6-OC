import React, { useState } from 'react'
import './DescriptionPanel.css'

export function DescriptionPanel({ title, content, openByDefault }) {
  const [isContentVisible, setIsContentVisible] = useState(openByDefault)

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
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
