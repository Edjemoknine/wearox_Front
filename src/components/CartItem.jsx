import {
  decreaseAmount,
  deleteFCart,
  increaseAmount,
} from "../api/ProductSlice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-6 items-center mb-3">
      <Link to={`/product/${item.id}`}>
        <img
          className="w-32 h-32 object-cover"
          src={`http://${item.imageUrl}`}
          alt=""
        />
      </Link>
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="font-semibold">{item.name.substring(0, 15)}</h3>
          <button
            onClick={() =>
              dispatch(deleteFCart(item.id)) &&
              toast.error("produst has been deleted !")
            }
            className="bg-red-500 p-1 cursor-pointer hover:bg-red-600 text-white rounded-md text-xs"
          >
            delete
          </button>
        </div>
        <p className="font-semibold">${item.price.current.value}</p>
        <div className="flex gap-6 font-light border p-2 items-center">
          Quantity
          <p
            onClick={() => dispatch(decreaseAmount(item))}
            className="border w-7 h-7 text-center hover:bg-black hover:text-white transition duration-300 select-none cursor-pointer"
          >
            -
          </p>
          <p>{item.quantity}</p>
          <p
            onClick={() => dispatch(increaseAmount(item))}
            className="border w-7 h-7 text-center hover:bg-black hover:text-white transition duration-300 select-none cursor-pointer"
          >
            +
          </p>
        </div>
        <p className="font-semibold">
          ${item.price.current.value * item.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
