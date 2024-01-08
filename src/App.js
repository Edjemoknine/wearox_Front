import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// import Element from "./pages/Element";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Details from "./pages/Details";
import "react-toastify/dist/ReactToastify.min.css";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./api/ProductSlice/CartSlice";

import AboutUs from "./components/AboutUs";
import "slick-carousel/slick/slick.css";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick-theme.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(login(user));
    });
    return () => onsubscribe();
  }, [user]);

  return (
    <Router> 
      <Header />
      <ToastContainer theme="dark" />
      <SkeletonTheme baseColor="#ccc" highlightColor="#444">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SkeletonTheme>
      <Footer />
    </Router>
  );
}

export default App;
