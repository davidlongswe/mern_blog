import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="write__image"
        src="https://wpmu.mah.se/nmict172group7/files/2017/09/blog.jpg"
        alt=""
      />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <i className="write__icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
          />
        </div>
        <div className="write__form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write__input write__text"
          ></textarea>
        </div>
        <button className="write__submit">Publish</button>
      </form>
    </div>
  );
}
