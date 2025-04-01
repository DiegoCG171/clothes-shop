import { Col } from "antd";
import { CSSProperties } from "react";

const circleStyle: CSSProperties = {
  position: "absolute",
  width: "340px",
  height: "340px",
  backgroundColor: "#E9E9EB",
  borderRadius: "50%",
  opacity: 0.6,
  zIndex: 1,
  right: "25%",
  top: "60%",
  transform: "translateY(-50%)"
};

const imageContainerStyle: CSSProperties = {
  position: "absolute",
  width: "340px",
  height: "340px",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  right: "22%",
  top: "62%",
  transform: "translateY(-50%)"
};

const imageStyle: CSSProperties = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
  objectFit: "contain"
};

const starStyle: CSSProperties = {
  position: "absolute",
  width: "38px",
  height: "37.32px",
  top: "100px",
  right: "550px",
  zIndex: 3,
  backgroundColor: "#ECE7E8",
  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
};

export const ImageSection = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Col span={12} style={{ 
      display: "flex", 
      justifyContent: "flex-end",
      height: "100%",
    }}>
      <div style={circleStyle} />
      
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt="Imagen" style={imageStyle} />
      </div>

      <div style={starStyle} />
    </Col>
  );
};