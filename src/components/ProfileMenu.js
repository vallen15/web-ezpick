import React from 'react';
import './ProfileMenu.css';

const ProfileMenu = ({ onLogout, onClose }) => {
  const handleNavigation = (page) => {
    alert(`Navigasi ke halaman ${page}`);
  };

  return (
    <div className="profile-menu">
      <button className="close-button" onClick={onClose}>X</button> {/* Tombol silang */}
      <div className="profile-menu-header">
        <img 
          src="https://via.placeholder.com/100"
          alt="Profile" 
          className="profile-menu-image" 
        />
        <p>Nama Pengguna</p>
      </div>
      <button 
        className="profile-menu-item" 
        onClick={() => handleNavigation('Notifikasi')}
      >
        Notifikasi
      </button>
      <button 
        className="profile-menu-item" 
        onClick={() => handleNavigation('Riwayat')}
      >
        Riwayat
      </button>
      <button 
        className="profile-menu-item" 
        onClick={() => handleNavigation('Edit Profil')}
      >
        Edit Profil
      </button>
      <button 
        className="profile-menu-item logout-button" 
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileMenu;
