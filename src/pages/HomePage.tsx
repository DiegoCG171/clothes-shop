import { BestSellingProductList } from "../components/products/BestSellingProductList";
import { FashionSection } from "../components/FashionSection"; //
import { HeroPage } from "./HomePage/HeroPage";

export const HomePage = () => {
  return (
    <>
        <HeroPage></HeroPage>
        <BestSellingProductList />
        <FashionSection />
        <BestSellingProductList type="showcase" />
    </>
  );
};
