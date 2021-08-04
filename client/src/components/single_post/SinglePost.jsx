import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        {post.photo && (
          <img
            className="single-post__image"
            src={PF + post.photo}
            alt="post thumb"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            defaultValue={title}
            className="single-post__title-input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post__title">
            {title}
            {post.username === user?.username && (
              <div className="single-post__edit">
                <i
                  className="single-post__icon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post__icon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            className="single-post__desc-input"
            defaultValue={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post__desc">{desc}</p>
        )}
        {updateMode && (
          <button className="single-post__button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
