import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;

  return (
    <div className="top">
      <div className="top__left">
        <i className="top__icon fab fa-facebook-square"></i>
        <i className="top__icon fab fa-twitter-square"></i>
        <i className="top__icon fab fa-instagram-square"></i>
        <i className="top__icon fab fa-pinterest-square"></i>
      </div>
      <div className="top__center">
        <ul className="top__list">
          <li className="top__list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top__list-item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="top__list-item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="top__list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top__list-item">
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <img
            className="top__img"
            src="https://www.pngkey.com/png/full/590-5904853_glen-circle-profile-fundraising.png"
            alt="profile"
          />
        ) : (
          <ul className="top__list">
            <li className="top__list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top__list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top__search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
