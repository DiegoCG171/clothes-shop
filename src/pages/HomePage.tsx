import { FashionSection } from "../components/FashionSection";
import { HeroPage } from "../components/HomePage/hero-section";
import { BestSellingProductList } from "../components/products/BestSellingProductList";

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
