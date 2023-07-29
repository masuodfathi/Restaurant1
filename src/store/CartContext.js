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
      const updatedItems = state.items.concat(action.item);
      // console.log('State.items: ' + JSON.stringify(state.items));
      // console.log('Action.item ' + JSON.stringify(action.item));
      // console.log('Updated items ' + JSON.stringify(updatedItems));
      const updatedTotalAmount =
        state.totalAmount + (action.item.price * action.item.amount);
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    case "REMOVE":
      break;
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
  const removeHandler = (id) => {};

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
