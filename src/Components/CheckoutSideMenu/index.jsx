import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    productToShow,
    cartProducts,
  } = useContext(ShoppingCartContext);

  console.log("cart: ", cartProducts);
  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu overflow-scroll flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="w-6 h-6 text-black cursor-pointer"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6">
      {cartProducts.map((product) => (
        <OrderCard
          key={product.id}
          title={product.title}
          imageURL={product.image}
          price={product.price}
        />
      ))}
      </div>
     
    </aside>
  );
};

export default CheckoutSideMenu;
