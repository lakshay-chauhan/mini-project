import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ children }) => (
  <div style={{ padding: "24px", width: "350px", background: "white", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
    {children}
  </div>
);
const Button = ({ children, onClick }) => (
  <button
    style={{
      width: "100%",
      padding: "10px",
      background: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s",
    }}
    onClick={onClick}
    onMouseOver={(e) => (e.target.style.background = "#0056b3")}
    onMouseOut={(e) => (e.target.style.background = "#007bff")}
  >
    {children}
  </button>
);
const Input = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      marginBottom: "12px",
    }}
  />
);

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (email === "lakshay@gmail.com" && password === "lakshay@123") {
      window.location.href = "/sportify.html";



    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to right, #67b6ff, #9b59b6)"
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "16px" }}>
            Login
          </h2>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleAuth}>Login</Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthPage;
