import React, { useState } from 'react';
import './Rekomendasi.css';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import "../components/Overlay.css";

const Rekomendasi = () => {
  const [search] = useState('');
  
  const menuItems = [
    { id: 1, name: 'Paket Chicken Katsu', price: 25000, image: 'chicken-katsu.jpg' },
    { id: 2, name: 'Paket Ayam Geprek', price: 22000, image: 'ayam-geprek.jpg' },
    { id: 3, name: 'Paket Nasi Goreng', price: 20000, image: 'nasi-goreng.jpg' },
    { id: 4, name: 'Paket Burger', price: 27000, image: 'burger.jpg' },
  ];

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rekomendasi">
      <Navbar
        isLoggedIn={false}
        handleLoginClick={() => {}}
        handleProfileClick={() => {}}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Rekomendasi Makanan</h1>
      </div>

      <div className="breadcrumb">Home/Rekomendasi</div>

      <div className="menu-section">
        <h2>Best Seller</h2>
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="menu-section">
        <h2>Harga Terjangkau</h2>
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rekomendasi;
