import React from 'react'
import './DescriptionPanel.css'

export function DescriptionPanel() {
  return (
    <div className="description_panel">
      <h3 className="description_panel_title">
        <span>Description</span>
        <i className="fa-solid fa-chevron-up"></i>
      </h3>

      <p className="description_panel_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        laudantium, rem iste dolore magni omnis. Laborum ad deleniti
        consequuntur expedita tenetur at provident cumque, fugit velit enim
        dolore molestiae sed, fuga aliquid nesciunt! Cumque pariatur ducimus
        libero nemo enim inventore voluptatibus, maxime magnam neque. Ipsa
        accusamus quam nam necessitatibus officiis.
      </p>
    </div>
  )
}
