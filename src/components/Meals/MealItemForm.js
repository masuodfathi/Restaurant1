import React, { useRef } from "react";
import Input from "../UI/Input";

const MealItemForm = ({ id, addToCart }) => {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      return;
    }
    addToCart(+enteredAmount);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        Input={{
          id: id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          label: "Amount",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default MealItemForm;