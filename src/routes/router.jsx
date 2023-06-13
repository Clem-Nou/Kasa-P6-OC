import { createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Home from '../pages/Home'
import ApartmentPage from '../pages/ApartmentPage'
import About from '../pages/About'
import ErrorPageNotFound from '../pages/ErrorPageNotFound'

// Layout principal qui comprend la barre de navigation, le contenu de la page et le pied de page
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />{' '}
      {/* Outlet permet d'afficher le contenu de la page correspondant à l'URL */}
      <Footer />
    </>
  )
}

// Création du navigateur de l'application avec les différentes routes
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Utilisation du layout principal pour toutes les routes
    errorElement: <ErrorPageNotFound />, // Utilisation de la page d'erreur 404 pour les erreurs de route
    children: [
      { path: '/', element: <Home /> }, // Route pour la page d'accueil
      { path: '/apartment/:id', element: <ApartmentPage /> }, // Route pour la page d'un appartement spécifique
      { path: '/about', element: <About /> } // Route pour la page "À propos"
    ]
  }
])

export default router
