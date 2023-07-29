import React from "react";

const CartItems = ({ price, id, name, amount, onRemove, onAdd }) => {
  const removeItem = () => {
    onRemove(id);
  };
  const addItem = () => {
    onAdd({
      id: id,
      name:name,
      amount:1,
      price:price,
    });
  };
  return (
    <li>
      <div>
        <h4>{name}</h4>
        <div>
          <span>{price}</span>
          <span>{amount}</span>
        </div>
      </div>
      <div>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
