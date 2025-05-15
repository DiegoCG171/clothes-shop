import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "../components/layout"
import { mainRoutes, RouteInterface} from "./routes"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const MainRouter = () => {

  const {user} = useSelector( (state: RootState) => state.auth )
  const [routes, setRoutes] = useState<RouteInterface[]>();


  useEffect(() => {
    const filteredRoutes = mainRoutes.filter(  route => route.roles?.includes(user.role));
    setRoutes(filteredRoutes)
  }, [user.role]);

  return (
    <MainLayout >
    <Routes>
      {routes?.map(({path, element}) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to={user.role === 'admin' ? '/dashboard' : '/home'} replace />} />
    </Routes>
   </MainLayout>
  )
}
