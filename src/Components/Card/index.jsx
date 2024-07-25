import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { PlusCircleIcon, CheckIcon } from "@heroicons/react/24/outline";

const Card = (data) => {
  const {
    count,
    setCount,
    openProductDetail,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isSignOut,
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const showProduct = (productDetail) => {
    if (isSignOut) {
      navigate("sign-in");
    } else {
      openProductDetail();
      closeCheckoutSideMenu();
      setProductToShow(productDetail);
    }
  };

  const addProductToCart = (productData) => {
    if (isSignOut) {
      navigate("sign-in");
    } else {
      setCount(count + 1);
      setCartProducts([...cartProducts, productData]);
      openCheckoutSideMenu();
      closeProductDetail();
    }
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <CheckIcon
          className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      );
    } else {
      return (
        <PlusCircleIcon
          className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white"
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(data.data);
          }}
        />
      );
    }
  };
  return (
    <div
      className="h-60 w-56 cursor-pointer bg-white"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 h-4/5 w-full bg-white/60">
        <span className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
          {data.data.category}
        </span>
        <img
          className="h-full w-full rounded-lg object-cover"
          src={data.data.image}
          alt="headphones"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="mr-2 truncate text-sm font-light">
          {data.data.title}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
