import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Login failed");
    }
  };

  if (user) {
    return (
      <div className="auth-container">
        <div className="user-info-card">
          <img src={`${API_URL}${user.Imgsrc}`} alt="" width="120" />
          <h2>{user.name}</h2>
          <p>Enrollment: {user.enrollmentnum}</p>
          <p>Email: {user.email}</p>

          <button
            onClick={() => {
              localStorage.clear();
              setUser(null);
              navigate("/signup");
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
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button>Login</button>
        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
