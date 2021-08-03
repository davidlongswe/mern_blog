import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input
          className="login__input"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="login__button">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
        <button className="login__register-button">
          <Link className="link" to="/register">
            register
          </Link>
        </button>
      </form>
    </div>
  );
}
