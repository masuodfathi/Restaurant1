import React from "react";
import { CartIcon } from "../Cart/CartIcon";
export const HeaderCartButton = (props) => {
  return (
    <button className="header-cart">
      <span>
        <CartIcon color="#eee"/>
      </span>
      <span>Your Cart</span>
      <span className="badg">3</span>
    </button>
  );
};

export default HeaderCartButton;