import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const ProtectedRoute = ({ children }) => {
  const { isSignOut } = useContext(ShoppingCartContext);

  if (isSignOut) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
