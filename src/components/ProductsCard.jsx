import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../api/ProductSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const ProductsCard = ({
  additionalImageUrls,
  brandName,
  colour,
  id,
  imageUrl,
  name,
  price,
  url,
  isSellingFast,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2 * index,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 1,
      }}
      className="card relative shadow hover:shadow-2xl  border-gray-500 border-2  rounded-xl overflow-hidden  cursor-pointer"
    >
      <div className=" w-full h-64">
        <Link to={`/product/${id}`}>
          <img
            className="w-full h-full rounded-lg object-cover hover:scale-105 duration-500"
            src={`https://${imageUrl}`}
            alt="products"
          />
        </Link>
      </div>
      <div className="info p-2 relative">
        <h5 className="font-semibold text-base">{name.substring(0, 19)}</h5>
        <div className="flex items-center  justify-between gap-3 relative ">
          <p className="font-bold text-sm">{price.current.text}</p>
          <p
            onClick={() => {
              dispatch(addToCart({ id, imageUrl, name, price, quantity: 1 }));
              toast.success(
                `${name.substring(0, 10)} add to cart successfully !`
              );
            }}
            className="  w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 "
          >
            <FaCartPlus className="hover:scale-110 duration-300" />
          </p>
        </div>
      </div>
      {isSellingFast && (
        <div className="absolute z-20 w-36 text-center text-xl rotate-45 font-semibold text-white top-3 -right-10 bg-red-500 p-2">
          Sale
        </div>
      )}
    </motion.div>
  );
};

export default ProductsCard;
