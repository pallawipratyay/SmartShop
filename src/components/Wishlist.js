import React from "react";

function Wishlist({ wishlist, setWishlist }) {
  const removeItem = (index) => {
    const updated = [...wishlist];
    updated.splice(index, 1);
    setWishlist(updated);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "30px",
            background: "linear-gradient(90deg, #ff6a00, #ee0979)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(255,106,0,0.3)"
          }}
        >
          ❤️ My Wishlist
        </h2>
      </h2>

      {wishlist.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          

          <button
            style={{ background: "red", color: "white" }}
            onClick={() => removeItem(index)}
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
