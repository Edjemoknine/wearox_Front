import { Link } from "react-router-dom";
import { fesh } from "../assets/images";
const Hero = () => {
  return (
    <div className=" bg-slate-200 overflow-hidden relative ">
      <div className="container relative h-[320px] md:h-screen grid md:place-content-center md:grid-cols-2">
        <div className="md:-mt-10 z-10 relative flex flex-col pt-10 md:pt-0 justify-center bg-ed-400 items-start md:gap-6 gap-4">
          <h3 className="font-bold">Trade-in-offer</h3>
          <h1 className="md:text-5xl leading-9 font-bold text-3xl">
            Super value deals <br />
            <span className="text-green-900 mt-6">On all products</span>
          </h1>
          <p className="text-gray-500">
            Save more with coupons & up to 70% off!
          </p>

          <Link
            className="px-4 py-2 duration-300 rounded-md bg-black text-white font-semibold hover:border-black hover:bg-transparent border-2 hover:text-black w-fit"
            to={"/shop"}
          >
            Shop Now
          </Link>
        </div>
        <div className="flex w-60 md:w-[440px] absolute top-3 md:right-16 sm:-right-3 -right-10  items-end ">
          <img className="w-full h-full z-0 object-cover" src={fesh} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
