import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { AuthRouter } from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { MainRouter } from "./MainRouter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const AppRouter = () => {
  const { id } = useSelector((state: RootState) => state.auth.user);

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
            <PublicRouter idUser={id}>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter idUser={id}>
              <MainRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
