import React from "react";
import "./LoginPopup.css";

const LoginPopup = ({ onClose, onLogin, onRegisterClick }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={onLogin} className="popup-button">
          Masuk
        </button>
      </form>
      <p>
        Belum ada akun?{" "}
        <span onClick={onRegisterClick} className="link">
          Daftar dulu
        </span>
      </p>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  </div>
);

export default LoginPopup;
