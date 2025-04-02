import { JSX, useState } from "react";
import { Header, NotificationBar } from "../header";
import { Footer } from "../footer";

interface Props {
  children: JSX.Element;
}

type FooterTypes = "default" | "without-newsletter";

export const MainLayout = ({ children }: Props) => {
  
  const [typeFooter] = useState<FooterTypes>('default');

  return (
    <div>
      <NotificationBar message="Get 50% OFF on your first order." />
      <Header />
      {children}
      <Footer type={typeFooter} />
    </div>
  );
};
