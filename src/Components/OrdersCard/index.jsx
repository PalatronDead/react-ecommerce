import { ChevronRightIcon } from "@heroicons/react/24/outline";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="mb-3 mt-3 flex w-80 items-center justify-between rounded-lg border border-black p-4">
      <div className="flex w-full justify-between">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-2xl font-medium">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 cursor-pointer text-black" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
