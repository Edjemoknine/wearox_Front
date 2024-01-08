import React, { useEffect, useState } from "react";
import { adidas, cartImg, logo } from "../assets/images";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const { cart, user } = useSelector((store) => store.cart);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="w-full z-50 shadow-sm bg-slate-200 h-16  border-gray-800 sticky top-0 left-0">
      <div className="container h-full flex justify-between items-center">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-8" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold">Hanot</h1>
        </Link>
        <div className="flex nav items-center gap-6">
          <ul
            className={
              open
                ? "absolute w-72 top-[110%]  transition-all duration-300 right-2 md:flex flex-col bg-slate-50 shadow-md py-6 rounded-lg flex items-center gap-8 md:flex-row  md:top-0 md:w-auto  md:relative"
                : "absolute w-72 -top-[310%] transition-all duration-300 right-2 flex-col md:flex md:bg-inherit md:shadow-none  bg-slate-50 shadow-md py-6 rounded-lg items-center gap-8 md:w-auto md:right-0 md:flex-row md:top-0 md:relative"
            }
          >
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to={"/about"}>About</Link>
            </li>
            <li className={location.pathname === "/Shop" ? "active" : ""}>
              <Link to={"/Shop"}>Shop</Link>
            </li>

            <li className={location.pathname === "/blogs" ? "active" : ""}>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
          <div className="relative ">
            <Link to={"/cart"}>
              <img
                className="w-7 cursor-pointer z-20"
                src={cartImg}
                alt="cart"
              />
              <span className="absolute select-none top-1/2 font-bold -translate-y-[30%] -translate-x-[50%] left-1/2 text-sm">
                {cart?.length}
              </span>
            </Link>
          </div>
          <div>
            <Link to={"/login"}>
              {" "}
              <img
                className="w-7 h-7 border-2 border-gray-500 cursor-pointer rounded-full"
                src={user ? user.reloadUserInfo?.photoUrl : adidas}
                alt="user"
              />
            </Link>
          </div>
          <FaBars
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
