import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import SignUp from "../SignUp";
import PublicRoute from "../../Components/PublicRoute";
import ProtectedRoute from "../../Components/ProtectedRoute";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/all",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/electronics",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/jewelery",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/men'sclothing",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/women'sclothing",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-account",
      element: (
        <ProtectedRoute>
          <MyAccount />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-order",
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-orders/last",
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-orders/:id",
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    { path: "/*", element: <NotFound /> },
    {
      path: "/sign-in",
      element: (
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      ),
    },
    {
      path: "/sign-up/edit",
      element: (
        <ProtectedRoute>
          <SignUp />
        </ProtectedRoute>
      ),
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
