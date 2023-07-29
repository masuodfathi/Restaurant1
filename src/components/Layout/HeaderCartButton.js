import React, { useEffect, useState } from "react";
import { CartIcon } from "../Cart/CartIcon";
import { useCartContext } from "../../store/CartContext";
export const HeaderCartButton = ({toggleCart}) => {
  const [badgClass,setBadgeClass] = useState(false);
  const cartCTX = useCartContext();
  const numberOfCartItems = cartCTX.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0);
  const badgclasses = `badg ${badgClass? 'bump' : ''}`;
  const items = cartCTX.items;
  useEffect(()=>{
    if(items.length===0){
      return;
    }
    else{
      setBadgeClass(true);
    }
    const timer = setTimeout(()=>{
      setBadgeClass(false)
    },300)
    return(()=>{
      clearTimeout(timer)
    })
  },[items])
  return (
    <button className="header-cart " type="button" onClick={toggleCart}>
      <span>
        <CartIcon color="#eee"/>
      </span>
      <span className="cart-text">Your Cart</span>
      <span className={badgclasses}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;