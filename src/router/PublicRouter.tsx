import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children?: JSX.Element;
    idUser: string;
}

export const PublicRouter = ({children, idUser}: Props) => {
  return idUser ? <Navigate to="/home" /> : children
}
