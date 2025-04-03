import { Row } from "antd";
import { TextSection } from "./TextSection";
import { ImageSection } from "./ImageSection"; 
import "./HeroSection.css";

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

