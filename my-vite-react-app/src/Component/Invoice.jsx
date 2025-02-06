import React from "react";
import "./Invoice.css";

const Invoice = () => {
  const items = [
    { name: "Vegetable Burger", price: 25, image: "https://i.pinimg.com/736x/97/da/26/97da268ca85129275b94af124e9862ed.jpg" },
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
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div className="summary-item">
          <span>Sub Total</span>
          <span>$85</span>
        </div>
        <div className="summary-item">
          <span>Tax</span>
          <span>-$6</span>
        </div>
        <div className="horizontal-line"><p>______________________</p></div>
        <div className="summary-total">
          <strong>Total Payment</strong>
          <strong>$79</strong>
        </div>
        <h4>Payment Method</h4>
        <div className="payment-methods">
          <div className="payment-row">
          <img src="https://images.sftcdn.net/images/t_app-icon-m/p/c421d069-1fe6-4505-85c9-fc80c2ee9769/374478980/payment-bird-logo" alt="Method 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoKU2DWF-OE9fALVdU3N8czP4GXZ72kboFA&s" alt="Method 2" />
          </div>
          <div className="payment-row">
          <img src="https://pbs.twimg.com/card_img/1884964890055421952/fspGGpx7?format=png&name=4096x4096" alt="Method 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s" alt="Method 4" />
          </div>
        </div>
        
      </div>
      <button className="order-button">Place An Order Now</button>
    </div>
  );
};

export default Invoice;