import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./styles.css";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`${isProductDetailOpen ? "flex" : "hidden"} product-detail-sm sm:product-detail fixed right-0 h-[40vh] w-full flex-col overflow-y-scroll rounded-lg border border-black bg-white sm:h-[calc(100vh-68px)] sm:w-[360px]`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <XMarkIcon className="h-8 w-8" onClick={closeProductDetail} />
      </div>
      <figure className="h-[360px] overflow-y-scroll px-6">
        <img
          className="h-full w-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col overflow-y-scroll p-6">
        <span className="mb-2 text-2xl font-medium">
          ${productToShow.price}
        </span>
        <span className="text-md mb-2 font-medium">{productToShow.title}</span>
        <span className="text-sm font-light">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
