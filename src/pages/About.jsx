import React from 'react'
import Banner from '../layout/Banner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.css'
import AboutBanner from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

function About() {
  return (
    <>
      <div className="about_page">
        {/* Composant Banner affichant une bannière avec une image spécifique pour la page About */}
        <Banner img={AboutBanner} alt={'montagne enneigées'} source="about" />

        <div className="about_container">
          {/* Composant DescriptionPanel affichant une description avec un titre et un contenu spécifique */}
          <DescriptionPanel
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            openByDefault={true}
          />

          <DescriptionPanel
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            openByDefault={true}
          />

          <DescriptionPanel
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            openByDefault={true}
          />

          <DescriptionPanel
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            openByDefault={true}
          />
        </div>
      </div>
    </>
  )
}

export default About
