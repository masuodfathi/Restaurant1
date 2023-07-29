import React from "react";
import Button from "../UI/Button";
import { useCartContext } from "../../store/CartContext";
import CartItems from "./CartItems";

const Cart = ({ toggleCart }) => {
  const cartCTX = useCartContext();
  const selectedItems = cartCTX.items;
  const hasItem = selectedItems.length > 0;

  const cartItemRemoveHandler = (id) => {

  };

  const cartItemAddHandler = (item) => {
    cartCTX.addItam(item);
  };

  const cartItems = (
    <ul>
      {selectedItems.map((item) => {
        return <CartItems {...item} 
        key={item.id}
        onRemove={cartItemRemoveHandler}
        onAdd={cartItemAddHandler} />;
      })}
    </ul>
  );
  const totalamount = cartCTX.totalAmount;
  return (
    <>
      <section className="backdrop" onClick={toggleCart}></section>
      <section className="modal">
        {cartItems}
        <div className="total">
          <span className="text">Total Amount</span>
          <span>${totalamount.toFixed(2)}</span>
        </div>
        <div className="modal-footer">
          <Button text="Close" classname="secondary" onClick={toggleCart} />
          {hasItem && <Button text="Order" classname="primary" />}
        </div>
      </section>
    </>
  );
};

export default Cart;
