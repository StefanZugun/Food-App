import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartCtx.totalAmount !== 0 && (
        <div>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
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
