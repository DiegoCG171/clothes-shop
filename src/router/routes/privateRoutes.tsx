import {
  LoginPage,
  RegisterPage
} from "../../pages";
import { JSX } from "react";

interface Route {
  path: string;
  element: JSX.Element;
}

export const privateRoutes: Route[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
];
