import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nike_shoes } from "../assets/images";
import { FaArrowLeft } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { clearCart, total } from "../api/ProductSlice/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, Total, user } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(total());
  }, [cart]);
  const [payNow, setPayNow] = useState(false);
  const handleCheckout = () => {
    if (!user) {
      toast.error("You must be Sign in for Checkout !");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setPayNow(true);
    }
  };
  const payment = async (token) => {
    await axios.post("https://wear-back-qa26.vercel.app/", {
      amount: Total * 100,
      token: token,
    });
  };
  return (
    <div className="">
      <img className="w-full h-60 object-cover" src={nike_shoes} alt="" />
      <div className="container py-6 grid md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-3">Shopping Cart</h1>
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="pt-3 border-t-2 flex justify-between items-center border-gray-500">
            <button
              className="bg-red-500 p-2 text-white font-semibold hover:bg-red-700"
              onClick={() => dispatch(clearCart())}
            >
              Reset Cart{" "}
            </button>
            <p>Cleaning up the cart from all products </p>
          </div>
          <Link
            className="flex group transition-all duration-300 items-center gap-1 mt-3 text-gray-400 hover:text-black"
            to={"/"}
          >
            <FaArrowLeft className="group-hover:pr-2 transition duration-300" />{" "}
            go shopping
          </Link>
        </section>
        <section className="bg-slate-50 px-3 flex flex-col gap-4 col-span-1">
          <h1 className="text-2xl font-bold">Cart Total</h1>
          <p className="flex gap-3">
            Subtotal <b>${Total.toFixed(2)}</b>
          </p>
          <span className="flex gap-3">
            shipping
            <p>
              We offer free products tracking and free shipping , just get sure
              you are ready to amazed about shipping time
            </p>
          </span>
          <hr className="border-gray-500" />
          <div className="flex font-bold justify-between items-center py-6">
            <span>Total</span>
            <span>${Total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-black hover:bg-gray-900 p-2 transition-all duration-300 hover:tracking-wider text-white"
          >
            Procced to checkout
          </button>
          {payNow && (
            <div className="flex justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Nw3P2JHeljPBR5To6PXFAxO9hTY07HM3fkLSGuyv1j77mem5atLNHedmuXodAAPBdn8DAwKbzwFl8Dbd4u1QioL00RpYEpXxs"
                name="Hanot Online Shopping"
                amount={Total.toFixed(2) * 100}
                label="Pay by Hanoy"
                description={`Your Payment amount is $${Total.toFixed(2)}`}
                token={payment}
                email={user.email}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;
