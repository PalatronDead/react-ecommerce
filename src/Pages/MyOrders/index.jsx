import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="relative mb-4 mt-4 flex w-80 items-center justify-center sm:mt-0">
          <h1 className="text-xl font-medium">My Orders</h1>
        </div>
        {order.map((order, index) => (
          <Link key={index} to={`/my-order/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
}

export default MyOrders;
