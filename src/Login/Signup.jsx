import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { API_URL } from "../config";

const Signup = () => {
  const [step, setStep] = useState(1); // 1 = signup, 2 = otp
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ================= SEND OTP =================
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email 📩");
        setStep(2);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch {
      setError("Server error. Try again later.");
    }

    setLoading(false);
  };

  // ================= VERIFY OTP =================
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful ✅ Please login");
        navigate("/login");
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch {
      setError("OTP verification failed");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      {step === 1 ? (
        // ========== SIGNUP FORM ==========
        <form className="auth-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Sign Up"}
          </button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      ) : (
        // ========== OTP FORM ==========
        <form className="auth-form" onSubmit={handleVerifyOtp}>
          <h2>Verify OTP</h2>

          <p style={{ fontSize: "14px" }}>
            OTP sent to <b>{email}</b>
          </p>

          <input
            placeholder="Enter 6 digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p
            style={{ cursor: "pointer", color: "#0a58ca" }}
            onClick={() => setStep(1)}
          >
            ← Change Email
          </p>
        </form>
      )}
    </div>
  );
};

export default Signup;
