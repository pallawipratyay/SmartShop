import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ item, addToCart, addToWishlist }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`, { state: item })}
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
      }}

      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src={item.image}
        alt=""
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3 style={{ margin: "10px 0" }}>{item.name}</h3>
      <p style={{ fontWeight: "bold" }}>₹{item.price}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(item);
          }}
        >
          Add to Cart
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(item);
          }}
        >
          ❤️ Wishlist
        </button>

      </div>
    </div>
  );
}

export default Product;