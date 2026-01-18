import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../config";
import "./Login.css";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enrollmentnum, setEnrollmentnum] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
const sendOtp = async () => {
  try {
    const res = await fetch(`${API_URL}/api/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("OTP sent to your email");
      setStep(2);
    } else {
      setError(data.message || "OTP send failed");
    }
  } catch (err) {
    console.error(err);
    setError("Server not reachable");
  }
};

  const verifySignup = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/verify-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          enrollmentnum,
          otp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful");
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Signup</h2>

        {step === 1 && (
          <>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input
              placeholder="Enrollment No"
              onChange={(e) => setEnrollmentnum(e.target.value)}
            />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifySignup}>Verify & Signup</button>
          </>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Already user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
