import { Row } from "antd";
import { TextSection } from "./text-section";
import { ImageSection } from "./image-section"; 
import "../../styles/components/hero-section/hero-section.css";

export const HeroPage = () => {
    return (
        <div className="home-container">
        <Row className="home-row" align="middle">
          <TextSection/>
          <ImageSection/>
        </Row>
      </div>
    );
}

