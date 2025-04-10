import { Navigate, Route, Routes } from "react-router-dom"
import { privateRoutes } from "./routes"

export const AuthRouter = () => {
  return (
    <Routes>
      {
        privateRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))
      }
      <Route path="/auth/*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}
