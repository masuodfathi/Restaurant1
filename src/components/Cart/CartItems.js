import React from "react";

const CartItems = ({ price, name, amount, onRemove, onAdd }) => {
//   const removeItem = () => {
//     onRemove(id);
//   };
//   const addItem = () => {
//     onAdd({
//       id: id,
//       name:name,
//       amount:1,
//       price:price,
//     });
//   };
  return (
    <li className="cart-items">
      <div>
        <h4>{name}</h4>
        <div className="cart-items-price-amount">
          <span>{price.toFixed(2)}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="cart-items-buttons">
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
