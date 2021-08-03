import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="sidebar"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          saepe deleniti neque praesentium quibusdam id, debitis provident eos
          veniam error laborum! Maxime, facilis aliquam consectetur temporibus
          illo rem cupiditate numquam.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          {cats.map((cat, index) => {
            return (
              <Link key={index} className="link" to={`/?cat=${cat.name}`}>
                <li className="sidebar__list-item">{cat.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
