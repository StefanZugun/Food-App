import React, { useContext, useRef } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Input from "./Input";
import CartContext from "../../store/cart-context";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);

  const inputRef = useRef();

  const price = `$${props.price.toFixed(2)}`;

  const submitHandler = () => {
    const item = { ...props, amount: Number(inputRef.current.value) };
    cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <Input
          label="Amount"
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          ref={inputRef}
        />
        <MealItemForm onClick={submitHandler} />
      </div>
    </li>
  );
};

export default MealItems;
