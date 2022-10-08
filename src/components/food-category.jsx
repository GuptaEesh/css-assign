import React from "react";
import "./components.css";

const FoodCategory = ({ foodDesc, foodImg, foodType }) => {
  return (
    <div className="flex flex-col items-center space-around food-type">
      <picture>
        <img loading="eager" src={foodImg} alt={foodType} />
      </picture>
      <h2>{foodType}</h2>
      <p>{foodDesc}</p>
    </div>
  );
};

export { FoodCategory };
