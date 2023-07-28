import React from "react";
import Button from "../UI/Button";

const Cart = ({toggleCart}) => {
  const selectedItems = [
    {
      id: "c2",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ];
  const cartItems = (
    <ul>
      {selectedItems.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <>
    <section className="backdrop" onClick={toggleCart}></section>
    <section className="modal">
        {cartItems}
        <div className="total">
          <span className="text">Total Amount</span>
          <span>35.62</span>
        </div>
        <div className="modal-footer">
          <Button text='Close' classname='secondary' onClick={toggleCart}/>
          <Button text='Order' classname='primary'/>
        </div>
      </section>
    </>
  );
};

export default Cart;
