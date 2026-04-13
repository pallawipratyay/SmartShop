import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setUser }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = loginData;
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!storedUser) {
      alert("No account found. Please signup first.");
      navigate("/signup");
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
    setUser(storedUser);
    navigate("/home");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "linear-gradient(90deg,#ff6a00,#ee0979)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don’t have account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
