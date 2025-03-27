import LogoMark from "../../assets/Logomark.svg";
import LogoFooter from "../../assets/LogomarkFooter.svg";

interface Props {
  type?: "header" | "footer";
}

export const Logo = ({ type = "header" }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={type === "header" ? LogoMark : LogoFooter}
        alt={type === "header" ? "Logo Mark" : "Logo Footer"}
      />
      <p style={{ marginLeft: 12, fontWeight: 700, fontSize: 20 }}>Ecommerce</p>
    </div>
  );
};
