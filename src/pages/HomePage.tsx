import { BestSellingProductList } from "../components/products/BestSellingProductList"
import { Row } from "antd";
import { TextSection } from "./HomePage/TextSection";
import { ImageSection } from "./HomePage/ImageSection";
import { containerStyle, rowStyle } from "./HomePage/styles";
import Image from "./Img/Hero Image.svg"; 

export const HomePage = () => {
  return (
    <><div style={containerStyle}>
      <Row style={rowStyle} align="middle">
        <TextSection />
        <ImageSection imageUrl={Image} />
      </Row>
    </div>

    <div>
        <BestSellingProductList />
        <BestSellingProductList type="showcase" />
      </div></>
  )
}
