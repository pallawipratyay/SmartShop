import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ handleLogout }) {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();        // state clear
    navigate("/login");    // redirect
  };

  return (
    <div style={{
      padding: "15px",
      background: "linear-gradient(90deg,#ff6a00,#ee0979)",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h3>🛍 SmartShop</h3>

      <div>
        <Link to="/home" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/cart" style={{ margin: "10px", color: "white" }}>Cart</Link>
        <Link to="/orders" style={{ margin: "10px", color: "white" }}>Orders</Link>
        <Link to="/wishlist" style={{ margin: "10px", color: "white" }}>Wishlist</Link>

        <button
          onClick={logout}
          style={{
            marginLeft: "15px",
            background: "red",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;