import React from "react";
import Button from "../UI/Button";
import { useCartContext } from "../../store/CartContext";

const Cart = ({toggleCart}) => {
  const cartCTX = useCartContext()
  const selectedItems = cartCTX.items
  const hasItem = selectedItems.length > 0;
  const cartItems = (
    <ul>
      {selectedItems.map((item) => {
        return <li key={item.id}>{item.name}</li>;
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
          <span>{totalamount.toFixed(2)}</span>
        </div>
        <div className="modal-footer">
          <Button text='Close' classname='secondary' onClick={toggleCart}/>
          {hasItem && <Button text='Order' classname='primary'/>}
        </div>
      </section>
    </>
  );
};

export default Cart;
