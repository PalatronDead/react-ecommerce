import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = order?.length - 1;
  }
  return (
    <>
      <Layout>
        <div className="relative mb-4 mt-4 flex w-80 items-center justify-center sm:mt-0">
          <Link to={"/my-orders"} className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-black" />
          </Link>
          <h1 className="text-xl font-medium">My Order</h1>
        </div>
        <div className="flex w-80 flex-col">
          {order?.[index]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
