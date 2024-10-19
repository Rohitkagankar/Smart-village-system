import React from 'react';
import './Item.css'; // Assuming you want to style the component

const Item = ({ image, title, description, price, onClick }) => {
  return (
    <div className="item-card">
      <img src={image} alt={title} className="item-image" />
      <div className="item-info">
        <h2 className="item-title">{title}</h2>
        <p className="item-description">{description}</p>
        <p className="item-price">Price: ₹{price}</p>
        <button onClick={onClick} className="item-button">Learn More</button>
      </div>
    </div>
  );
};

export default Item;
