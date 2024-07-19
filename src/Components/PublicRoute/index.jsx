import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const PublicRoute = ({ children }) => {
  const { isSignOut } = useContext(ShoppingCartContext);

  if (!isSignOut) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
