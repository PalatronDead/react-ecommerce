import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  const { id, title, imageURL, price, handleDelete } = props;
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <figure className="h-20 w-20">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="ml-4 text-lg font-medium">${price}</p>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer text-black"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default OrderCard;
