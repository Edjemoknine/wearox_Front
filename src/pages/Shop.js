import React, { useState } from "react";
import shop from "../assets/shop.jpg";
import { useGetProductsQuery } from "../api/ProductApi";
import Products from "../components/Products";
// import Sale from "./Sale";

const Shop = () => {
  const [category, setCategory] = useState("4209");
  const [page, setPage] = useState(20);
  const { data: shoes, isLoading } = useGetProductsQuery({
    category,
    offset: page,
    limit: 20,
  });

  // const list = listsPro.sort(() => Math.random() - 0.5);
  const Shoes = shoes?.products;

  return (
    <div>
      <div className="w-full  md:h-72 h-60 relative">
        <img className="w-full h-full object-cover" src={shop} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <h1
          className="text-center md:text-7xl text-3xl sm:text-5xl  relative leading-normal"
          style={{
            // fontSize: "5rem",
            textShadow: "5px 5px 5px rgba(0,0,0,0.5)",
            color: "white",
            fontWeight: "bolder",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          Welcome To Our Shop
        </h1>
      </div>
      <div className=" container justify-center  mt-6 flex gap-3">
        <button
          className="bg-black text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={() => setCategory("4209")}
        >
          Shoes
        </button>
        <button
          className="bg-black text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={() => setCategory("4210")}
        >
          Accessoirs
        </button>
        <button
          className="bg-black text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={() => setCategory("4208")}
        >
          Jeans
        </button>
        <button
          className="bg-black text-white rounded-md px-2 py-1 cursor-pointer"
          onClick={() => setCategory("4213")}
        >
          Top
        </button>
      </div>
      <Products products={Shoes} loading={isLoading} />
      <div className="flex justify-center gap-3 py-3">
        <button
          className="px-2 py-1 bg-black text-white"
          disabled={isLoading}
          onClick={() => setPage((prev) => prev - 20)}
        >
          Prev
        </button>
        <span className="px-2 py-1">{page / 20}</span>
        <button
          className="px-2 py-1 bg-black text-white"
          disabled={isLoading}
          onClick={() => setPage((prev) => prev + 20)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
