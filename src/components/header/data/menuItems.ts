import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];


export const menuItems: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Categories",
    key: "categories",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contact",
    key: "contact",
  },
];
