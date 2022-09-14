import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {["Sushi"].map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
        </div>
      ))}
    </ul>
  );
  console.log(cartCtx);
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      {cartCtx.totalAmount !== 0 && (
        <div>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={props.onCloseCart}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </div>
      )}
      {cartCtx.totalAmount === 0 && (
        <div className={classes.total}>
          <h5>
            You Don't have anything ordered! Please add items to eat today!
          </h5>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={props.onCloseCart}
            >
              Add Items
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
