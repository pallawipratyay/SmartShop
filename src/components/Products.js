import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../assets/products";

function Products({ addToCart, addToWishlist }) {
  const navigate = useNavigate();

  // 🔹 States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  // 🔹 Filter Logic
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    const matchPrice =
      priceRange === "All" ||
      (priceRange === "low" && item.price < 1000) ||
      (priceRange === "mid" &&
        item.price >= 1000 &&
        item.price <= 2000) ||
      (priceRange === "high" && item.price > 2000);

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div style={{ padding: "20px" }}>
      
      {/* 🔍 FILTER SECTION */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            margin: "10px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            width: "250px",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "10px"
          }}
        >
          <option value="All">All Category</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          onChange={(e) => setPriceRange(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "10px"
          }}
        >
          <option value="All">All Price</option>
          <option value="low">Below ₹1000</option>
          <option value="mid">₹1000 - ₹2000</option>
          <option value="high">Above ₹2000</option>
        </select>
      </div>

      {/* 🛍️ PRODUCTS GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {filteredProducts.length === 0 ? (
          <h2>No Products Found ❌</h2>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              style={{
                width: "220px",
                margin: "15px",
                padding: "15px",
                borderRadius: "15px",
                background: "#fff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "0.3s"
              }}
              onClick={() => navigate(`/product/${item.id}`)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <h4 style={{ marginTop: "10px" }}>{item.name}</h4>
              <p style={{ fontWeight: "bold" }}>₹{item.price}</p>

              {/* Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                style={{
                  margin: "5px",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  background: "#ff6a00",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToWishlist(item);
                }}
                style={{
                  margin: "5px",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  background: "#ee0979",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                ❤️ Wishlist
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;