import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = (e) => {
    e.preventDefault();

    // LocalStorage me save
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful ✅");
    navigate("/login");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#667eea,#764ba2)"
    }}>
      <form onSubmit={handleSignup} style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center"
      }}>
        <h2>Signup ✨</h2>

        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        /><br /><br />

        <button style={{
          background: "linear-gradient(90deg,#ff6a00,#ee0979)",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "20px"
        }}>
          Signup
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;