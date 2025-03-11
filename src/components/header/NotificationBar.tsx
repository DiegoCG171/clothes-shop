interface Props {
  message?: string;
  action?: string;
}

export const NotificationBar = ({
  message = "Get 25% OFF on your first order.",
  action = "Order Now",
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#0e1422",
        color: "#fff",
        height: 32,
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ marginRight: 8 }}>{message}</span>
      <span>{action}</span>
    </div>
  );
};
