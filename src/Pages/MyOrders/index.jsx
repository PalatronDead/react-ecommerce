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
        {order.map((order, index) => {
          <Link key={index} to={`/my-orders${order.id}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
            ;
          </Link>;
        })}
      </Layout>
    </>
  );
}

export default MyOrders;
