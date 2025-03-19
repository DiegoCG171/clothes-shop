import { JSX } from "react";
import { Header, NotificationBar } from "../header";
import { Footer } from "../footer";

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
      <Footer />
    </div>
  );
};
