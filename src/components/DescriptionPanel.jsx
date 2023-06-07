import React, { useState } from 'react'
import './DescriptionPanel.css'

export function DescriptionPanel({ title, content, openByDefault }) {
  const [isContentVisible, setIsContentVisible] = useState(openByDefault)

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    <div className={`description_panel ${isContentVisible ? 'open' : ''}`}>
      <h3 className="description_panel_title" onClick={toggleContent}>
        <span>{title}</span>
        {isContentVisible ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </h3>

      <div className="description_panel_content">{content}</div>
    </div>
  )
}
