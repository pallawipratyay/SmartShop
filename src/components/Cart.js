import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {

  const navigate = useNavigate(); // ✅ HOOK ANDAR

  // ❌ Remove
  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        minHeight: "100vh"
      }}
    >
      <h2 style={{
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #ff6a00, #ee0979)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "30px"
      }}>
        🛒 My Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty 😢</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              margin: "15px auto",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div style={{ marginTop: "10px" }}>
              
              {/* 👉 ORDER → CHECKOUT PAGE */}
              <button
                onClick={() => navigate("/checkout", { state: item })}
                style={{ marginRight: "10px" }}
              >
                Order Now 🛍
              </button>

              {/* ❌ REMOVE */}
              <button
                onClick={() => removeFromCart(index)}
                style={{ background: "red", color: "white" }}
              >
                Remove ❌
              </button>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;