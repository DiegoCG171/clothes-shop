import { TbShoppingCart, TbUserCircle } from "react-icons/tb";

export const userOptions = [
  {
    name: "shopping",
    icon: (
      <TbShoppingCart size={24} color="#5C5F6A" style={{ cursor: "pointer" }} />
    ),
  },
  {
    name: "userProfile",
    icon: (
      <TbUserCircle size={24} color="#5C5F6A" style={{ cursor: "pointer" }} />
    ),
  },
];
