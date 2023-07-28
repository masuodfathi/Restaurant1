import React, { createContext, useContext } from 'react';

const CartContext = createContext({
    items:[],
    totalAmount:0,
    addItam:(item)=>{},
    removeItem: (id)=>{},
});

const CartProvider = props =>{
    return(
        <CartContext.Provider>
            
        </CartContext.Provider>
    )
}

export default CartContext