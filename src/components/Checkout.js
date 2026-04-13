import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout({ placeOrder }) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");

  // 🎟 Coupon
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>No Product Selected ❌</h2>;
  }

  // 🎟 Apply Coupon (FIXED)
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "SAVE10") {
      setDiscount(Math.round(product.price * 0.1));
      alert("10% Discount Applied 🎉");
    } else if (code === "FLAT200") {
      setDiscount(200);
      alert("₹200 Discount Applied 🎉");
    } else {
      alert("Invalid Coupon ❌");
      setDiscount(0);
    }
  };

  const finalPrice = product.price - discount;

  // 📦 Place Order (with validation)
  const handleOrder = () => {
    if (!name || !mobile || !address) {
      alert("Please fill all details ❌");
      return;
    }

    // 📱 Mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Enter valid mobile number ❌");
      return;
    }

    const orderData = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      productName: product.name,
      price: finalPrice,
      image: product.image,
      name,
      mobile,
      address,
      payment,
      discount,
      status: "Order Placed"
    };

    placeOrder(orderData);

    alert("Order Placed Successfully 🎉");
    navigate("/orders");
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>🧾 Checkout</h2>

        <h3>{product.name}</h3>
        <p>Original Price: ₹{product.price}</p>

        {/* 🎟 Coupon */}
        <input
          placeholder="Enter Coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={inputStyle}
        />

        <button onClick={applyCoupon} style={couponBtn}>
          Apply Coupon 🎟
        </button>

        <p>Discount: ₹{discount}</p>
        <h3>Final Price: ₹{finalPrice}</h3>

        {/* USER DETAILS */}
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Full Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
        />

        {/* 💳 Payment */}
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          <label>
            <input
              type="radio"
              value="COD"
              checked={payment === "COD"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on Delivery
          </label>

          <br />

          <label>
            <input
              type="radio"
              value="Online"
              checked={payment === "Online"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Online Payment 💳
          </label>
        </div>

        <button onClick={handleOrder} style={orderBtn}>
          Place Order 🛍
        </button>
      </div>
    </div>
  );
}

// 🎨 Styles
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #fdfbfb, #ebedee)"
};

const cardStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "15px",
  width: "350px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  textAlign: "center"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const couponBtn = {
  marginTop: "10px",
  padding: "8px",
  borderRadius: "10px",
  border: "none",
  background: "#ff6a00",
  color: "white"
};

const orderBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "10px",
  background: "linear-gradient(90deg, #ff6a00, #ee0979)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer"
};

export default Checkout;