import React from "react";
import { CartIcon } from "../Cart/CartIcon";
export const HeaderCartButton = ({toggleCart}) => {
  return (
    <button className="header-cart" type="button" onClick={toggleCart}>
      <span>
        <CartIcon color="#eee"/>
      </span>
      <span className="cart-text">Your Cart</span>
      <span className="badg">3</span>
    </button>
  );
};

export default HeaderCartButton;