import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        {post.photo && (
          <img
            className="single-post__image"
            src={post.photo}
            alt="post thumb"
          />
        )}
        <h1 className="single-post__title">
          {post.title}
          <div className="single-post__edit">
            <i className="single-post__icon far fa-edit"></i>
            <i className="single-post__icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__author">
            Author:
            <Link className="link" to={`/?=user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post__desc">{post.desc}</p>
      </div>
    </div>
  );
}
