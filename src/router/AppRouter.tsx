import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { AuthRouter } from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { MainRouter } from "./MainRouter";

export const AppRouter = () => {
  const idUser = "s";

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRouter idUser={idUser}>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter idUser={idUser}>
              <MainRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
