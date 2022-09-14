import React from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "./CartIcon";

// Button Accepts the following props:
// text - The text on the button
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.text}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
