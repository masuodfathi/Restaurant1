import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItam: (item) => {},
  removeItem: (id) => {},
});

const defaultCartContext = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existItemindex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existItem = state.items[existItemindex];
      let updatedItems;
      if (existItem) {
        const updatedItem = {
          ...existItem,
          amount: existItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existItemindex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      const existItemIndex = state.items.findIndex(item=> item.id === action.id);
      const existCartItem = state.items[existItemIndex];
      const updatedCartTotalAmount = state.totalAmount - existCartItem.price;
      let updatedCartItems;
      if (existCartItem.amount === 1) {
        updatedCartItems = state.items.filter(item=> item.id !== action.id);
      }else{
        const updatedCartItem = {...existCartItem,amount:existCartItem.amount -1};
        updatedCartItems = [...state.items];
        updatedCartItems[existItemIndex] = updatedCartItem;
      }
      return{
        items:updatedCartItems,
        totalAmount: updatedCartTotalAmount
      }
    default:
      return defaultCartContext;
  }
};
export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartContext
  );

  const addHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeHandler = (id) => {
    dispatchCartAction({type:"REMOVE",id:id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItam: addHandler,
    removeItem: removeHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContext;
