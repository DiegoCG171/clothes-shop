import { JSX, useEffect, useState } from "react";
import { Header, NotificationBar } from "../header";
import { Footer } from "../footer";

interface Props {
  children: JSX.Element;
}

type FooterTypes = "default" | "without-newsletter";

export const MainLayout = ({ children }: Props) => {
  
  const [typeFooter, setTypeFooter] = useState<FooterTypes>('default');

  useEffect(() => {
      setTypeFooter('without-newsletter')
  }, []);

  return (
    <div>
      <NotificationBar message="Get 50% OFF on your first order." />
      <Header />
      {children}
      <Footer type={typeFooter} />
    </div>
  );
};
