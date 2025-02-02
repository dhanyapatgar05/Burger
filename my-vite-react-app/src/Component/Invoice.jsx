import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaMoneyBillWave, FaHamburger, FaCheese, FaDrumstickBite } from "react-icons/fa";

const Invoice = () => {
  const items = [
    { name: "Vegetable Burger", price: 25, image: <FaHamburger className="text-2xl" /> },
    { name: "Meat Burger", price: 28, image: <FaDrumstickBite className="text-2xl" /> },
    { name: "Cheese Burger", price: 32, image: <FaCheese className="text-2xl" /> },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = -6;
  const total = subtotal + tax;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-80">
      <h2 className="text-xl font-bold mb-4">Invoice</h2>
      <div>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{item.image}</span>
            <div className="flex-1 ml-2">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-red-500">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="text-sm">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total Payment</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between gap-3 mb-4">
        <FaCcVisa className="text-2xl" />
        <FaCcMastercard className="text-2xl" />
        <FaPaypal className="text-2xl" />
        <FaMoneyBillWave className="text-2xl" />
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600">
        Place An Order Now
      </button>
    </div>
  );
};

export default Invoice;
