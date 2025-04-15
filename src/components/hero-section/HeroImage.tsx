import { Col } from "antd";
import Ellipse from "../../assets/Ellipse.svg";
import Image from "../../assets/HeroImage.svg";
import BurstPucker from "../../assets/Burst-pucker.svg";

export const HeroImage = () => {
  return (
    <Col span={12} className="hero-image-section-container">
      <img src={Ellipse} alt="Decorative star" className="hero-circle" />
      <div className="hero-image-container">
        <img src={Image} alt="Man in a white shirt" />
      </div>
      <img src={BurstPucker} alt="Decorative star" className="hero-star" />
    </Col>
  );
};
