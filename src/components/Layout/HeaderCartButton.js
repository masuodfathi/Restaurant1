import React from "react";
import { CartIcon } from "../Cart/CartIcon";
import { useCartContext } from "../../store/CartContext";
export const HeaderCartButton = ({toggleCart}) => {
  const cartCTX = useCartContext();
  const numberOfCartItems = cartCTX.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0);

  return (
    <button className="header-cart" type="button" onClick={toggleCart}>
      <span>
        <CartIcon color="#eee"/>
      </span>
      <span className="cart-text">Your Cart</span>
      <span className="badg">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;