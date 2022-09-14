import React from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
      <button onClick={props.onClick}>+Add</button>
    </div>
  );
};

export default MealItemForm;
