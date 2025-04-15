import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "../components/layout"
import { mainRoutes } from "./routes"

export const MainRouter = () => {
  return (
    <MainLayout >
    <Routes>
      {mainRoutes.map(({path, element}) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
   </MainLayout>
  )
}
