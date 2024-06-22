import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart - Increase Quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Add Products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // checkoutSideMenu Detail - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
