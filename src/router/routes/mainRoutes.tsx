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

type Roles = 'admin' | 'user' | 'suport' | 'tester';

export interface RouteInterface {
  path: string;
  element: JSX.Element;
  roles?: Roles[]
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
    roles: ['user','suport']
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
    roles: [ 'user','tester']
  },
  {
    path: "/contact",
    element: <ContactPage />,
    roles: ['user','admin','suport']
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    roles: ['admin',]
  },
];
