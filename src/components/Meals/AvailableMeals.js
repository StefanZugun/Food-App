import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const mealsList = props.meals.map((item) => (
    <MealItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
