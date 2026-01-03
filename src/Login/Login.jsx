import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // store logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // check if already logged in
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("user", JSON.stringify(data)); // save full user info
      setUser(data);
      alert("Login successful");
      navigate("/"); // optional redirect
    } else {
      setError(data.message);
    }
  };

  if (user) {
    return (
      <div className="auth-container">
        <div className="user-info-card">
          <img src={user.Imgsrc} alt={user.name} />
          <h2>{user.name}</h2>
          <p>Enrollment: {user.enrollmentnum || "N/A"}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => {
              localStorage.clear();
              setUser(null);
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>

        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
