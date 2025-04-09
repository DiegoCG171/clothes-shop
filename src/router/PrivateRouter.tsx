import { JSX } from "react"
import { Navigate } from "react-router-dom";

interface Props {
    children?: JSX.Element;
    idUser: string;
}

export const PrivateRouter = ({children, idUser}: Props) => {
  return idUser ? children : <Navigate to="/auth/login" replace />
}
