import { XMarkIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="mb-3 flex items-center justify-between border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
