import React, { useState } from "react";
import { gift, jeans_fash } from "../assets/images";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { logout } from "../api/ProductSlice/CartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((store) => store.cart);
  console.log("login", user);

  const [Signup, setSignup] = useState(true);
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, name);

    if (Signup) {
      if (email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: name });
        toast.success("You have been Sign Up successfully");
        navigate("/");
      }
    } else {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You have been Sign In successfully");
      navigate("/");
    }
  };
  const handleGoogle = async () => {
    const google = new GoogleAuthProvider();
    await signInWithPopup(auth, google);

    navigate("/");
  };
  const dispatch = useDispatch();
  const SignOut = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="login_profile">
      <img src={gift} className=" w-full h-screen object-cover" alt="bag" />
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mt-28 max-w-lg mx-auto login_card p-6 rounded gap-4 flex flex-col items-center">
          {user ? (
            <div className="profile flex flex-col gap-3">
              <h3 className="font-bold mb-3 text-2xl">
                Welcome to your profile
              </h3>
              <div className="flex justify-between items-center">
                <img
                  className="w-32 h-32 border-black border-4 rounded-full "
                  src={user ? user.photoURL : jeans_fash}
                  alt="User_Profile"
                />
                <button
                  className="p-2 bg-black text-white rounded-md hover:bg-gray-900"
                  onClick={SignOut}
                >
                  Sign Out{" "}
                </button>
              </div>
              <p className="uppercase font-bold">
                Mr <span className="font-normal">{user?.displayName}</span>
              </p>
              <p className="font-bold">
                Used email: <span className="font-normal">{user.email}</span>
              </p>
              <p className="font-bold">
                Total Transactions:{" "}
                <span className="font-normal">50 transactions</span>
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-bold text-3xl">
                {Signup ? " Register" : "Welcome again"} in to Hanot
              </h1>
              {Signup ? (
                <>
                  {/* <h1 className=" text-2xl">Sign Up</h1> */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 w-full"
                  >
                    <input
                      className="w-full p-2 rounded shadow-sm"
                      type="email"
                      onChange={(e) => setEamil(e.target.value)}
                      placeholder="Email address"
                    />
                    <input
                      className="w-full p-2 rounded shadow-sm"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <input
                      className="w-full p-2 rounded shadow-sm"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your store name"
                    />

                    <button
                      className="p-2 bg-black text-white rounded-sm hover:bg-gray-900"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <p>
                    I already have an account{" "}
                    <span
                      onClick={() => setSignup(false)}
                      className="text-red-500 font-bold cursor-pointer hover:text-red-600"
                    >
                      Sign In
                    </span>
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <b className="font-extrabold">Or</b>
                    <GoogleButton onClick={handleGoogle} />
                    {/* <AppleLogin className="w-40 cursor-pointer" /> */}
                  </div>
                </>
              ) : (
                <>
                  {/* <h1 className=" text-2xl">Sign In</h1> */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 w-full"
                  >
                    <input
                      className="w-full p-2 rounded shadow-sm"
                      type="email"
                      onChange={(e) => setEamil(e.target.value)}
                      placeholder="Email address"
                    />
                    <input
                      className="w-full p-2 rounded shadow-sm"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />

                    <button
                      className="p-3 bg-black text-white rounded-sm hover:bg-gray-900"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </form>
                  <p>
                    I don't have an account{" "}
                    <span
                      onClick={() => setSignup(true)}
                      className="text-red-500 font-bold cursor-pointer hover:text-red-600"
                    >
                      Sign Up
                    </span>
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <b className="font-extrabold">Or</b>
                    <GoogleButton onClick={handleGoogle} className="w-40" />
                    {/* <AppleLogin className="w-40" /> */}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
