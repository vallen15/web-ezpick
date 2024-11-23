import React from "react";
import "./RegisterPopup.css";

const RegisterPopup = ({ onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Registrasi</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="tel" placeholder="No. Tlp" required />
        <button type="submit" className="popup-button">
          Submit
        </button>
      </form>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  </div>
);

export default RegisterPopup;
