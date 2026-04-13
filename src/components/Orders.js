import React, { useEffect } from "react";

function Orders({ orders, setOrders }) {

  // 🔥 SAVE IN LOCAL STORAGE (IMPORTANT)
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // 🚚 Track Order
  const trackOrder = (index) => {
    const updated = [...orders];

    if (updated[index].status === "Order Placed") {
      updated[index].status = "Shipped 🚚";
    } else if (updated[index].status === "Shipped 🚚") {
      updated[index].status = "Out for Delivery 🛵";
    } else if (updated[index].status === "Out for Delivery 🛵") {
      updated[index].status = "Delivered ✅";
    }

    setOrders(updated);
  };

  // ❌ Cancel Order
  const cancelOrder = (index) => {
    const updated = [...orders];
    updated[index].status = "Cancelled ❌";
    setOrders(updated);
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)"
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px"
        }}
      >
        📦 My Orders
      </h2>

      {/* EMPTY */}
      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders yet 😢</p>
      ) : (
        orders.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              margin: "15px auto",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              maxWidth: "500px"
            }}
          >
            {/* 🔥 ORDER ID + DATE */}
            <p><b>Order ID:</b> {item.id}</p>
            <p><b>Date:</b> {item.date}</p>

            {/* PRODUCT */}
            {item.image && (
              <img
                src={item.image}
                alt={item.productName}
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px"
                }}
              />
            )}
            <h3>{item.productName}</h3>
            <p><b>Price:</b> ₹{item.price}</p>

            {/* USER DETAILS */}
            <p><b>Name:</b> {item.name}</p>
            <p><b>Mobile:</b> {item.mobile}</p>
            <p><b>Address:</b> {item.address}</p>
            <p><b>Payment:</b> {item.payment}</p>

            {/* STATUS */}
            <p
              style={{
                fontWeight: "bold",
                color:
                  item.status === "Delivered ✅"
                    ? "green"
                    : item.status === "Cancelled ❌"
                    ? "red"
                    : "#ff6a00"
              }}
            >
              Status: {item.status}
            </p>

            {/* BUTTONS */}
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => trackOrder(index)}
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  border: "none",
                  background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Track 🚚
              </button>

              <button
                onClick={() => cancelOrder(index)}
                style={{
                  padding: "8px 15px",
                  borderRadius: "20px",
                  border: "none",
                  background: "red",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Cancel ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;