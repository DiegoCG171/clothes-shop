import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ErrorPage, HomePage, LoginPage, ProductListPage, ProductPage, ProfilePage } from "../pages"

export const AppRouter = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/products-list" element={<ProductListPage />}/>
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/error" element={<ErrorPage />}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
     </Routes>
    </BrowserRouter>
  )
}
 3    