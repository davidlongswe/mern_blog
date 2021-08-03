import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img className="post__image" src={post.photo} alt="blog thumb" />
      )}
      <div className="post__info">
        <div className="post__categories">
          {post.categories.map((cat) => {
            return <span className="post__category">{cat.name}</span>;
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="post__title">{post.title}</span>
        </Link>

        <hr />
        <span className="post__date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post__description">{post.desc}</p>
    </div>
  );
}
