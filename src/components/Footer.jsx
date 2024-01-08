import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPaypal,
  FaUser,
  FaHome,
  FaAddressBook,
} from "react-icons/fa";
import {
  visa,
  puma_shoes,
  puma,
  adidas,
  adidas_parallex,
} from "../assets/images";
import Newsletter from "./Newslater";
const Footer = () => {
  return (
    <>
      <Newsletter />

      <div className="bg-white text-black pt-14">
        <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-7">
            <div>
              {/* <img className="w-10" src={logo} alt="logo" /> */}
              <h1 className="text-3xl font-bold capitalize">Hanot</h1>
            </div>
            <p>&copy; puma.com</p>
            <div>
              {" "}
              <img className="w-28" src={visa} alt="visa" />
            </div>
            <div className="flex gap-3">
              <FaGithub />
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>

          <div className=" pt-2">
            <h1 className="text-xl font-semibold mb-4">locate us</h1>
            <div className="flex flex-col gap-2 text-base text-gray-400">
              <p>Algeia, Chlef</p>
              <p>Mobile: +213 656643018</p>
              <p>Phone: 004244 34568027</p>
              <p>e-mail: moknineAGL@gamil.com</p>
            </div>
          </div>
          <div className="pt-2">
            <h1 className="text-xl font-semibold mb-4">profile</h1>
            <div className="flex flex-col gap-2 text-base text-gray-400">
              <p className=" flex gap-2 items-center hover:text-white transition duration-300 cursor-pointer">
                <span>
                  <FaUser />
                </span>{" "}
                my account
              </p>
              <p className=" flex gap-2 items-center hover:text-white transition duration-300 cursor-pointer">
                <span>
                  <FaPaypal />
                </span>{" "}
                checkout
              </p>
              <p className=" flex gap-2 items-center hover:text-white transition duration-300 cursor-pointer">
                <span>
                  <FaHome />
                </span>{" "}
                order tracking
              </p>
              <p className=" flex gap-2 items-center hover:text-white transition duration-300 cursor-pointer">
                <span>
                  <FaAddressBook />
                </span>{" "}
                help & support
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-wrap gap-3  justify-center w-full">
              <img
                className="w-20 h-20 object-cover hover:scale-110 transition-all duration-300 cursor-pointer hover:border-red-500 border"
                src={puma_shoes}
                alt="blogs"
              />
              <img
                className="w-20 h-20 object-cover hover:scale-110 transition-all duration-300 cursor-pointer hover:border-red-500 border"
                src={adidas}
                alt="blogs"
              />
              <img
                className="w-20 h-20 object-cover hover:scale-110 transition-all duration-300 cursor-pointer hover:border-red-500 border"
                src={puma}
                alt="blogs"
              />
              <img
                className="w-20 h-20 object-cover hover:scale-110 transition-all duration-300 cursor-pointer hover:border-red-500 border"
                src={adidas_parallex}
                alt="blogs"
              />
            </div>
          </div>
        </div>
        <p className="text-center py-6 pt-10 text-gray-400">
          &copy; 2023 Moknine All rights Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
