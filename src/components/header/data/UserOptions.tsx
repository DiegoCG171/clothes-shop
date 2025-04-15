import { ReactElement } from "react";
import { TbShoppingCart, TbUserCircle } from "react-icons/tb";

interface UserOptions {
  name: string;
  icon: ReactElement
}

export const userOptions: UserOptions[] = [
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
