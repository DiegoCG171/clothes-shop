import { Col } from "antd";
import Ellipse from '../Img/Ellipse.svg';
import BurstPucker from '../Img/Burst-pucker.svg';
import HeroImage from '../Img/Hero Image.svg';
import "./ImageSection.css";

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