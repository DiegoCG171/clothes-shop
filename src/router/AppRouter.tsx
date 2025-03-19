import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes/"
import { MainLayout } from "../components/layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
     <MainLayout >
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
     </MainLayout>
    </BrowserRouter>
  );
};
