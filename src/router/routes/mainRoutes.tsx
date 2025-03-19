import {
  AboutPage,
  ContactPage,
  ErrorPage,
  HomePage,
  LoginPage,
  ProductListPage,
  ProductPage,
  ProfilePage,
} from "../../pages";
import { JSX } from "react";

interface Route {
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/categories",
    element: <ProductListPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/error",
    element: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
];
