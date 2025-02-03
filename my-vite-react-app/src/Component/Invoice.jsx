import React from "react";
import "./Invoice.css";

const Invoice = () => {
  const items = [
    { name: "Vegetable Burger", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnlT9S6v-wsXciae3Mtt633Es5G0DefO90Q&s" },
    { name: "Meat Burger", price: 28, image: "https://png.pngtree.com/png-clipart/20241129/original/pngtree-burger-with-vegetable-png-image_17410928.png" },
    { name: "Cheese Burger", price: 32, image: "https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-burger-sauce-png-image_9113991.png" },
  ];

  return (
    <div className="invoice-container">
      <h2 className="invoice-title">Invoice</h2>
      {items.map((item, index) => (
        <div key={index} className="invoice-item">
          <img src={item.image} alt={item.name} className="invoice-image" />
          <div className="invoice-details">
            <span className="invoice-name">{item.name}</span>
            <span className="invoice-price">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Invoice;