import { JSX } from "react";
import { Header, NotificationBar } from "../header";

interface Props {
  children: JSX.Element;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <NotificationBar
        message="Get 50% OFF on your first order."
      />
      <Header />
      {children}
      <h2>Footer</h2>
    </div>
  );
};
