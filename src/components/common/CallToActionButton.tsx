import { Button } from "antd";
import { TbArrowNarrowRight } from "react-icons/tb";

interface Props {
  text?: string;
}

export const CallToActionButton = ({text = 'Button Text'}: Props) => {
  return (
    <Button
      style={{
        width: 200
      }}
      icon={<TbArrowNarrowRight size={24} style={{ marginTop: 8 }} />}
      iconPosition="end"
      className="call-to-action-button"
    >
      {text}
    </Button>
  );
};
