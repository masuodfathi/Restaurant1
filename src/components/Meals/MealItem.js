import React from "react";
import MealItemForm from "./MealItemForm";
import { useCartContext } from "../../store/CartContext";

const MealItem = ({ id, name, description, price }) => {
  const cartCTX = useCartContext();
  const addItemHandler = (amount) => {
    cartCTX.addItam({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
      <li className="meal-item" key={id}>
        <section>
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="price primary-color">${price.toFixed(2)}</p>
        </section>
        <section>
          <MealItemForm id={id} addToCart={addItemHandler} />
        </section>
      </li>
  );
};

export default MealItem;
