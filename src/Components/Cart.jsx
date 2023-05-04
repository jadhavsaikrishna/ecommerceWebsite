import React, { useState } from "react";
import "./Cart.css"; // import the stylesheet

function Cart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    const removedItem = updatedItems.splice(index, 1)[0];
    setItems(updatedItems);
    setTotalPrice(totalPrice - removedItem.price);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Shopping Cart</h1>
      <ul className="cart-item-list">
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(3)}</span>
            <button onClick={() => removeItem(index)}>-</button>
          </li>
        ))}
      </ul>
      <div className="cart-total-price">Total: ${totalPrice.toFixed(2)}</div>
      <button onClick={() => addItem({ name: "Item", price: 9.99 })}>
        Add Item
      </button>
    </div>
  );
}

export default Cart;
