import { useContext } from "react";
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
    setProductPrice
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    closeCheckoutSideMenu();
    setProductToShow(productDetail);
  };

  const addProductToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <CheckIcon 
        className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 text-white bg-black" 
        onClick={(e) => {
          e.stopPropagation();
        }}
        />
      );
    } else {
      return (
        <PlusCircleIcon
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6  rounded-full m-2 bg-white"
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
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5 bg-white/60">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg "
          src={data.data.image}
          alt="headphones"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light  mr-2 truncate">
          {data.data.title}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
