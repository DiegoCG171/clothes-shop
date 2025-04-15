import { HeroSection } from "../components/hero-section/";
import { FashionSection } from "../components/fashion-section/FashionSection";
import { BestSellingProductList } from "../components/products/BestSellingProductList";
import { FeaturesSection } from "../components/features-section";

export const HomePage = () => {
  return (
    <>
        <HeroSection />
        <FeaturesSection />
        <BestSellingProductList />
        <FashionSection />
        <BestSellingProductList type="showcase" />
    </>
  );
};
