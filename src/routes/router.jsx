import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../layout/Footer'
import Home from '../pages/Home'
import ApartmentPage from '../pages/ApartmentPage'
import About from '../pages/About'
import ErrorPageNotFound from '../pages/ErrorPageNotFound'

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/apartment',
        element: <ApartmentPage />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default router
