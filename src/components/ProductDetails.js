import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../assets/products";

function ProductDetails({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>❌ No Product Found</h2>;
  }

  const addReview = () => {
    if (rating !== "") {
      setReviews([...reviews, rating]);
      setRating("");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      <h2>{product.name}</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        ₹{product.price}
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => addToCart(product)}
          style={{
            margin: "5px",
            padding: "10px",
            background: "#ff6a00",
            color: "#fff",
            border: "none",
            borderRadius: "20px"
          }}
        >
          Add to Cart
        </button>

        <button
          onClick={() => addToWishlist(product)}
          style={{
            margin: "5px",
            padding: "10px",
            background: "#ee0979",
            color: "#fff",
            border: "none",
            borderRadius: "20px"
          }}
        >
          ❤️ Wishlist
        </button>
      </div>

      {/* ✅ BUY FIX */}
      <button
        onClick={() => navigate("/checkout", { state: product })}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "20px"
        }}
      >
        Buy Now 💳
      </button>

      {/* ⭐ Rating */}
      <h3>⭐ Give Rating</h3>
      <input
        type="number"
        placeholder="1-5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ padding: "5px" }}
      />
      <button
        onClick={addReview}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Submit
      </button>

      {/* Reviews */}
      <h4 style={{ marginTop: "20px" }}>Reviews:</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((r, i) => <p key={i}>⭐ {r}</p>)
      )}
    </div>
  );
}

export default ProductDetails;