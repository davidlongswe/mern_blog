import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="register__input"
          type="username"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="register__input"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register__button">
          <Link className="link" to="/register">
            register
          </Link>
        </button>
        <button className="register__login-button" type="submit">
          <Link className="link" to="/login">
            login
          </Link>
        </button>
      </form>
    </div>
  );
}
