import { Row, Col, Flex} from "antd";
import { TbTruck, TbShieldCheck,  TbAward } from "react-icons/tb";


const IconTruck = () => (
  <TbTruck
    size={24} // Tamaño del icono
    style={{
      backgroundColor: "#F6F6F6", // Gris (equivalente a bg-gray-300)
      borderRadius: "50%", // Hace el fondo circular
      padding: "8px", // Espaciado interno
    }}
  />
);
const IconAward = () => (
  <TbAward
    size={24} // Tamaño del icono
    style={{
      backgroundColor: "#F6F6F6", // Gris (equivalente a bg-gray-300)
      borderRadius: "50%", // Hace el fondo circular
      padding: "8px", // Espaciado interno
    }}
  />
);
const IconShield = () => (
  <TbShieldCheck
    size={24} // Tamaño del icono
    style={{
      backgroundColor: "#F6F6F6", // Gris (equivalente a bg-gray-300)
      borderRadius: "50%", // Hace el fondo circular
      padding: "8px", // Espaciado interno
    }}
  />
);

export function Section () {
  return (
    <Flex align="center" vertical>
      
      <Row  justify="center" style={{ width: "80vw", paddingBlock: 80 , }}>
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconTruck />
          </div>
          <p style={{ color: "#202533", marginTop: 12, marginBottom: 15, lineHeight: 1, fontWeight: 500 }}>
            Free Shipping 
          </p>
          <p style={{color: "#5C5F6A"}}>
            upgrade your style today and get FREE <br /> 
            shipping on all orders! Don´t miss out.
          </p>
        </Col>
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconAward />
          </div>
          <p style={{ color: "#202533", marginTop: 12, marginBottom: 15, lineHeight: 1, fontWeight: 500 }}>
            Satisfaction Award
          </p>
          <p style={{color: "#5C5F6A"}}>
            Shop confidently with our Satisfaction <br /> 
            guarantee: Love it or get a refound.
          </p>
        </Col>
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconShield />
          </div>
          <p style={{ color: "#202533", marginTop: 12, marginBottom: 15, lineHeight: 1, fontWeight: 500 }}>
            Secure Payment
          </p>
          <p style={{color: "#5C5F6A"}}>
            Your security is our priority. Your <br /> 
            payments are secure with us
          </p>
        </Col>
      </Row>
    </Flex>
  );
}