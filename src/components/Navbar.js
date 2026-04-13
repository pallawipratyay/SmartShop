import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ handleLogout, user }) {
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
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h3>🛍 SmartShop</h3>
        {user && (
          <span style={{ fontSize: "0.95rem", opacity: 0.9 }}>
            Welcome, {user.name}
          </span>
        )}
      </div>

      <div>
        <Link to="/home" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/cart" style={{ margin: "10px", color: "white" }}>Cart</Link>
        <Link to="/orders" style={{ margin: "10px", color: "white" }}>Orders</Link>
        <Link to="/wishlist" style={{ margin: "10px", color: "white" }}>Wishlist</Link>

        {user ? (
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
        ) : (
          <>
            <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
            <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;