import React from "react";
import "./deliveryitem.css";


const DeliveryItem = ({ items}) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={items.cover}
          className="delivery-item-image"
          alt={items.title}
        />
      </div>
      <div className="delivery-item-title">{items.title}</div>
    </div>
  );
};

export default DeliveryItem;


