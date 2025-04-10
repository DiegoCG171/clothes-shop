import {
  AboutPage,
  ContactPage,
  ErrorPage,
  HomePage,
  ProductListPage,
  ProductPage,
  ProfilePage,
} from "../../pages";
import { JSX } from "react";

interface Route {
  path: string;
  element: JSX.Element;
}

export const mainRoutes: Route[] = [
  {
    path: "/home",
    element: <HomePage />,
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
