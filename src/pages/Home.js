import React, { useState } from "react";

import Products from "../components/Products";
import { useGetProductsQuery } from "../api/ProductApi";

import Heading from "../components/Heading";
import {
  fast,
  free,
  Gift,
  save,
  support,
  confirme,
  puma,
  adidas,
  nike_shoes,
} from "../assets/images";
import {
  FaUserFriends,
  FaCreditCard,
  FaTruck,
  FaSteamSymbol,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const features = [
  {
    title: "Free Shipping",
    img: free,
  },
  {
    title: "Online Order ",
    img: fast,
  },
  {
    title: "Save Money",
    img: save,
  },
  {
    title: "Promotions",
    img: Gift,
  },
  {
    title: "Happy Sell",
    img: confirme,
  },
  {
    title: "F24/7 Support",
    img: support,
  },
];

const Home = () => {
  const { data, isFetching } = useGetProductsQuery({
    category: 4209,
    offset: 0,
    limit: 8,
  });
  const { data: New, isLoading } = useGetProductsQuery({
    category: 4213,
    offset: 0,
    limit: 8,
  });
  const NewArrival = New?.products;
  // console.log(NewArrival);
  const Allproducts = data?.products;

  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <div className="container sm:grid-cols-2 grid md:grid-cols-6 mt-6 text-center gap-3">
        {features.map((pr) => (
          <div
            className="border rounded hover:scale-105 duration-300 cursor-pointer p-3"
            key={pr.title}
          >
            <div className="md:h-20 h-40 flex justify-center b-red-100 items-center">
              <img
                className="w-full h-full object-contain"
                src={pr.img}
                alt={pr.title}
              />
            </div>
            <h4 className="text-xs mt-3 rounded w-fit mx-auto px-6 bg-black text-white  py-1">
              {" "}
              {pr.title}
            </h4>
          </div>
        ))}
      </div>

      <Heading
        text={"Featured Products"}
        parg={`Summer Collection New Modern Design`}
      />
      <Products products={Allproducts} loading={isFetching} />

      <div className="relative h-64 flex justify-center flex-col items-center">
        <img
          className=" absolute top-0 left-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="call"
        />
        <div className="relative text-center text-white flex z-20 justify-center flex-col items-center gap-6  ">
          <p>Repair Services</p>
          <h1 className="md:text-4xl text-3xl font-bold">
            Up to <span className="text-red-500">70% Off</span> - All t-Shirts &
            Accessories
          </h1>
          <Link className="px-4 py-2 rounded bg-white text-black" to={"/shop"}>
            Explore More
          </Link>
        </div>
        <div className="absolute top-0 z-0 left-0 w-full h-full bg-black/80"></div>
      </div>
      <Heading
        text={"New Arrival"}
        parg={`Summer Collection New Modern Design`}
      />
      <Products products={NewArrival} loading={isLoading} />

      <div className="container py-6">
        {/* <Heading text={"2023 Trends"} parg={`Custumer Smart Skirt`} /> */}
        <div className="grid md:grid-cols-2 gap-3  my-6">
          <div className="cont1 flex flex-col gap-3">
            <div className="relative  overflow-hidden">
              <div className="absolute bottom-10 left-7 text-white">
                <h1 className="text-2xl mb-6 font-semibold">New Arrivals</h1>
                <Link
                  className="border-white text-sm transition-all duration-300 rounded-lg p-2 hover:bg-white hover:text-black border-2"
                  to={""}
                >
                  Discover More
                </Link>
              </div>
              <img className="w-full h-full object-cover" src={adidas} alt="" />
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute bottom-10 left-7 text-white">
                <h1 className="text-2xl mb-6 font-semibold">New Arrivals</h1>
                <Link
                  className="border-white text-sm transition-all duration-300 rounded-lg p-2 hover:bg-white hover:text-black border-2"
                  to={""}
                >
                  Discover More
                </Link>
              </div>
              <img className="w-full h-full object-cover" src={puma} alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden h-full">
            <div className="absolute bottom-10 left-7 text-white">
              <h1 className="text-2xl mb-6 font-semibold">New Arrivals</h1>
              <Link
                className="border-white text-sm transition-all duration-300 rounded-lg p-2 hover:bg-white hover:text-black border-2"
                to={""}
              >
                Discover More
              </Link>
            </div>
            <img
              className="w-full h-full object-cover"
              src={nike_shoes}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mb-10">
        <Heading text={"Our Statistics"} parg={``} />
        <div className="py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-3 text-center">
          <div className="card border p-5 cursor-pointer rounded-md hover:shadow flex flex-col items-center group gap-3">
            <div className="icons shadow-xl bg-black p-4 cursor-pointer group-hover:bg-white  border-black border-2 transition-all duration-300 rounded-md ">
              <FaSteamSymbol className="text-white group-hover:text-black text-3xl" />
            </div>
            <h1 className="font-bold">Easy Order System</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              perferendis!
            </p>
          </div>
          <div className="card border p-5 cursor-pointer rounded-md hover:shadow flex flex-col items-center group gap-3">
            <div className="icons shadow-xl bg-black p-4 cursor-pointer group-hover:bg-white  border-black border-2 transition-all duration-300 rounded-md ">
              <FaTruck className="text-white group-hover:text-black text-3xl" />
            </div>
            <h1 className="font-bold">On Time Delivery</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              perferendis!
            </p>
          </div>
          <div className="card border p-5 cursor-pointer rounded-md hover:shadow flex flex-col items-center group gap-3">
            <div className="icons shadow-xl bg-black p-4 cursor-pointer group-hover:bg-white  border-black border-2 transition-all duration-300 rounded-md ">
              <FaCreditCard className="text-white group-hover:text-black text-3xl" />
            </div>
            <h1 className="font-bold">Money Back Gaurantee</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              perferendis!
            </p>
          </div>
          <div className="card border p-5 cursor-pointer rounded-md hover:shadow flex flex-col items-center group gap-3">
            <div className="icons shadow-xl bg-black p-4 cursor-pointer group-hover:bg-white  border-black border-2 transition-all duration-300 rounded-md ">
              <FaUserFriends className="text-white group-hover:text-black text-3xl" />
            </div>
            <h1 className="font-bold">24/7 Customer Support</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              perferendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
