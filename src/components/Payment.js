import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment({ placeOrder }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select payment method");
      return;
    }

    if (method === "online") {
      alert("Payment Successful 💳");
    } else {
      alert("Order placed with Cash on Delivery 💵");
    }

    placeOrder(state);
    navigate("/orders");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Payment Page 💳</h2>

      <h3>{state.name}</h3>
      <p>₹{state.price}</p>

      <div>
        <label>
          <input
            type="radio"
            name="payment"
            value="online"
            onChange={(e) => setMethod(e.target.value)}
          />
          Online Payment 💳
        </label>

        <br /><br />

        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery 💵
        </label>
      </div>

      <br />

      <button onClick={handlePayment}>
        Confirm Order
      </button>
    </div>
  );
}

export default Payment;