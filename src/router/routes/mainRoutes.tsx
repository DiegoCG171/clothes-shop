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
import AdminDashboard from "../../pages/AdminDashboard";

export interface RouteInterface {
  path: string;
  element: JSX.Element;
  roles?: string[]
}

export const mainRoutes: RouteInterface[] = [
  {
    path: "/home",
    element: <HomePage />,
    roles: ['admin', 'user']
  },
  {
    path: "/categories",
    element: <ProductListPage/>,
    roles: ['user']
  },
  {
    path: "/product",
    element: <ProductPage />,
    roles: ['user']
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    roles: ['user']
  },
  {
    path: "/error",
    element: <ErrorPage />,
    roles: ['user']
  },
  {
    path: "/about",
    element: <AboutPage />,
    roles: [ 'user']
  },
  {
    path: "/contact",
    element: <ContactPage />,
    roles: ['user']
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    roles: ['admin',]
  },
];
