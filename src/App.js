import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CartProvider";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [modalIsActive, setModalIsActive] = useState(false);

  //Function that closes the Modal and Shopping Cart
  const modalCloseHandler = () => {
    setModalIsActive(false);
  };

  const modalOpenHandler = () => {
    setModalIsActive(true);
  };

  return (
    <CartProvider>
      <Header onShowCart={modalOpenHandler} />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
      {modalIsActive && <Cart onCloseCart={modalCloseHandler} />}
    </CartProvider>
  );
}

export default App;
