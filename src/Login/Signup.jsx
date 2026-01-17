import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [step, setStep] = useState(1); // 1=signup, 2=otp, 3=logged in
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const API = "http://localhost:5000/api/auth";

  // ✅ Auto login if user already stored (OTP or Google)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        const user = JSON.parse(storedUser);
        setName(user.name);
        setEmail(user.email);
        setStep(3); // ✅ logged in screen
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setOtp("");
    setStep(1);
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/signup`, {
        name,
        email,
        phone,
        password,
      });
      alert(res.data.message);
      setStep(2); // OTP screen
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // ---------------- VERIFY OTP ----------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/verify-otp`, { email, otp });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setName(res.data.user.name);
      setEmail(res.data.user.email);

      setStep(3); // ✅ logged in screen
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  // ---------------- GOOGLE SIGNUP ----------------
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>

      {/* ✅ STEP 3 — LOGGED IN SCREEN */}
      {step === 3 && (
        <div style={{ textAlign: "center" }}>
          <h2>Welcome 🎉</h2>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* ✅ STEP 1 — SIGNUP */}
      {step === 1 && (
        <form onSubmit={handleSignup}>
          <h2>Signup</h2>

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
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Send OTP</button>

          <hr />

          <button
            type="button"
            onClick={handleGoogleSignup}
            style={{ background: "#db4437", color: "white", width: "100%" }}
          >
            Continue with Google
          </button>
        </form>
      )}

      {/* ✅ STEP 2 — OTP */}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <h2>Verify OTP</h2>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
