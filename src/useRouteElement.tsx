import { useRoutes, Outlet } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/HomePage'

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ])

  return routeElement
}

export default useRouteElement
