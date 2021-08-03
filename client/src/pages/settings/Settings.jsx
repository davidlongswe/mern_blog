import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__update-title">Update your account</span>
          <span className="settings__delete-title">Delete your account</span>
        </div>
        <form action="" className="settings__form">
          <label>Profile picture</label>
          <div className="settings__pp">
            <img
              src="https://www.pngkey.com/png/full/590-5904853_glen-circle-profile-fundraising.png"
              alt="pp"
            />
            <label htmlFor="fileInput">
              <i className="settings__pp-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeHolder="David" />
          <label>Email</label>
          <input type="email" placeHolder="David@gmail.com" />
          <label>Password</label>
          <input type="password" placeHolder="******" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
