import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id,
    );
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "10.21.2023",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };
  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu fixed right-0 h-[calc(100vh-68px)] w-[360px] flex-col rounded-lg border border-black bg-white`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer text-black"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="flex-1 overflow-y-scroll px-6">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.image}
            handleDelete={handleDelete}
            price={product.price}
          />
        ))}
      </div>
      <div className="mb-6 mt-4 px-6">
        <p className="mb-2 flex items-center justify-between">
          <span className="font-light">Total:</span>
          <span className="bg-red-50 text-2xl font-medium">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to={"/my-orders/last"}>
          <button
            className="w-full rounded-lg bg-black py-3 text-white"
            onClick={() => {
              handleCheckout();
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
