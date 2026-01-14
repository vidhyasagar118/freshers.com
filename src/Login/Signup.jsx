import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "./Login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Step 1: Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Signup successful! OTP sent to console/email.");
        setShowOtpInput(true); // show OTP input
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Signup failed. Please try again later.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("OTP verified! You can now login.");
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("OTP verification failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        {!showOtpInput && (
          <>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
          </>
        )}

        {showOtpInput && (
          <>
            <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
            <button type="button" onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
        {!showOtpInput && <p>Already have an account? <Link to="/login">Login</Link></p>}
      </form>
    </div>
  );
};

export default Signup;
