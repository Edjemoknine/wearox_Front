import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductDetailsQuery,
  useGetProductsQuery,
  useGetSimilairQuery,
} from "../api/ProductApi";
import parse from "html-react-parser";
import { addToCart } from "../api/ProductSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import Products from "../components/Products";

const Details = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductDetailsQuery(id);
  const { data: similairProducts, isLoading } = useGetSimilairQuery(id);
  console.log(similairProducts);
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  const handleadd = () => {
    dispatch(addToCart({ ...data, quantity }));
    toast.success(`${data.name.substring(0, 10)} add to cart successfully !`);
  };

  const [quantity, setQuantity] = useState(1);
  const [currentImg, setCuurentImg] = useState(0);
  const handleImg = (id) => {
    setCuurentImg(id);
  };

  const { data: New } = useGetProductsQuery({
    category: 4213,
    offset: 0,
    limit: 4,
  });
  const NewArrival = New?.products;

  if (isFetching)
    return (
      <div className="container  w-full h-screen flex justify-center items-center ">
        Loading ...
      </div>
    );

  return (
    <div className="container min-h-[70vh]">
      <div className="  md:pt-10s pt-6 grid md:grid-cols-3 gap-6 ">
        <div className="md:col-span-1 gap-3 flex md:flex-col flex-row-reverse  ">
          <div className=" h-[450px] w-full">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              src={`https://${data?.media.images[currentImg].url}`}
              alt="Products details"
              className=" w-full object-cover h-full shadow shadow-gray-500 duration-500 ease-linear"
            />
          </div>
          <div className="grid md:grid-cols-4 gap-3 md:mt-3">
            {data.media.images.map((img, i) => {
              return (
                <motion.img
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 * i,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="cursor-pointer w-24 shadow-md transition-all ease-linear duration-300 shadow-black hover:scale-105"
                  src={`https://${img.url}`}
                  alt="imgAlt"
                  key={i}
                  onClick={() => handleImg(i)}
                />
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="md:col-span-2  flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">{data?.name}</h1>
          <div className="flex items-center gap-3 text-xl font-bold">
            <h3 className="text-gray-500 line-through text-sm font-light">
              {data?.price.previous.text}
            </h3>
            <h3>{data?.price.current.text}</h3>
          </div>

          <div className="add_To_Cart flex gap-6">
            <div className="border p-2 flex gap-6">
              <p>Quantity</p>
              <div className="flex justify-between gap-3 items-center">
                <button
                  onClick={() =>
                    setQuantity(quantity === 1 ? quantity : quantity - 1)
                  }
                  className="border w-8 h-8"
                >
                  -
                </button>
                <p className="w-14 text-center">{quantity}</p>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border w-8 h-8"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleadd}
              className="bg-black hover:bg-gray-900 p-3 text-white"
            >
              add to cart
            </button>
          </div>

          <p className="mt-2">
            <span className="font-bold"> Product Type:</span> {data?.brand.name}{" "}
            {data?.productType.name}
          </p>
          <p>
            <span className="font-bold ">Gender:</span> {data?.gender}
          </p>

          <p className="text-sm">{parse(data?.description)}</p>
        </motion.div>
      </div>
      <div className="flex justify-start">
        <Heading
          text={"New Arrival"}
          parg={`Summer Collection New Modern Design`}
        />
      </div>
      <Products products={NewArrival} loading={isLoading} />
    </div>
  );
};

export default Details;
