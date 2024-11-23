import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, price, image }) => {
  return (
    <div className="menu-item">
      <img src= "https://via.placeholder.com/100" alt="menu-image" className="menu-image" />
      <p className="menu-name">{name}</p>
      <p className="menu-price">Rp. {price.toLocaleString()}</p>
    </div>
  );
};

export default MenuItem;
