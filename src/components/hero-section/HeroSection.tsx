import { Row } from "antd";
import { HeroText, HeroImage } from "./";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <Row className="hero-row">
        <HeroText />
        <HeroImage />
      </Row>
    </div>
  );
};
