import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
          <li className="top__list-item" onClick={handleLogout}>
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <Link className="link" to="/settings">
            <img className="top__img" src={PF + user.profilePic} alt="" />
          </Link>
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
