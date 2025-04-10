import { Col } from "antd";
import Ellipse from '../../pages/Img/Ellipse.svg';
import BurstPucker from '../../pages/Img/Burst-pucker.svg';
import HeroImage from '../../pages/Img/Hero Image.svg';
import "../../styles/components/hero-section/image-section.css";

export const ImageSection = () => { 
  return (
    <Col span={12} className="image-section-container">
      <img 
        src={Ellipse} 
        alt="Círculo" 
        className="circle-style" 
      />
      
      <div className="image-container-style">
        <img 
          src={HeroImage}  
          alt="Hero" 
        />
      </div>
    
      <img 
        src={BurstPucker} 
        alt="Estrella decorativa" 
        className="star-style" 
      />
    </Col>
  );
};