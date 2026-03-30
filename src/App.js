import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  // 🔐 LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🛒 DATA STATES
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 🔥 ORDER STATE WITH LOCAL STORAGE
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  // 🔁 LOGIN CHECK
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  // 🛒 ADD TO CART
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // ❤️ ADD TO WISHLIST
  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  // 📦 PLACE ORDER (WITH LOCAL STORAGE)
  const placeOrder = (item) => {
    const updatedOrders = [...orders, item];

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setCart([]); // cart clear
  };

  // 🚪 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>

      {/* 🔝 NAVBAR */}
      <Navbar handleLogout={handleLogout} />

      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* SIGNUP */}
        <Route path="/signup" element={<Signup />} />

        {/* HOME */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Products
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={
            isLoggedIn ? (
              <Orders orders={orders} setOrders={setOrders} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={
            isLoggedIn ? (
              <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            isLoggedIn ? (
              <Checkout placeOrder={placeOrder} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;