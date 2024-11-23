import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginPopup from "../components/LoginPopup";
import RegisterPopup from "../components/RegisterPopup";
import ProfileMenu from "../components/ProfileMenu";
import MenuPopup from "../components/MenuPopup"; // Import the MenuPopup component
import "./Beranda.css";
import "../components/Overlay.css";

const Beranda = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false); // State for MenuPopup

  const handleLoginClick = () => setShowLoginPopup(true);
  const handleRegisterClick = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
  };

  const closePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
    setShowProfileMenu(false);
    setShowMenuPopup(false); // Close MenuPopup when needed
  };

  const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);

  return (
    <div className="beranda">
      {(showLoginPopup || showRegisterPopup || showProfileMenu || showMenuPopup) && (
        <div className="overlay"></div>
      )}

      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        handleProfileClick={handleProfileClick}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      <div className="categories">
        <Link to="/Promo" className="category-card">
          <img src="https://via.placeholder.com/100" alt="Promo" />
          <p>Special Promo</p>
        </Link>
        <Link to="/Paket" className="category-card">
          <img src="https://via.placeholder.com/100" alt="Paket" />
          <p>Paket</p>
        </Link>
        <div
          className="category-card"
          onClick={() => setShowMenuPopup(true)} // Open MenuPopup when clicked
        >
          <img src="https://via.placeholder.com/100" alt="Menu" />
          <p>Menu</p>
        </div>
      </div>

      {showLoginPopup && (
        <LoginPopup
          onClose={closePopup}
          onLogin={handleLogin}
          onRegisterClick={handleRegisterClick}
        />
      )}

      {showRegisterPopup && <RegisterPopup onClose={closePopup} />}

      {showProfileMenu && isLoggedIn && (
        <ProfileMenu
          onLogout={handleLogout}
          onClose={() => setShowProfileMenu(false)}
        />
      )}

      {showMenuPopup && <MenuPopup onClose={closePopup} />} {/* Show MenuPopup */}
    </div>
  );
};

export default Beranda;
