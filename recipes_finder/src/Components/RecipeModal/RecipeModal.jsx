import React from "react";
import uuid from "react-uuid";
import Modal from "@mui/material/Modal";
import "./index.scss";

export const RecipeModal = ({ data, open, close }) => {
  let ingredients = [];
  let measures = [];
  for (let i = 1; i <= 20; i++) {
    let value = data[`strIngredient${i}`];
    if (typeof value === "string" && value.length > 0) {
      ingredients.push(value);
    }
  }
  for (let i = 1; i <= 20; i++) {
    let value = data[`strMeasure${i}`];
    if (value.length > 0) {
      measures.push(value);
    }
  }
  let ingObj = ingredients.reduce((acc, key, i) => {
    acc[key] = measures[i];
    return acc;
  }, {});

  return (
    <Modal open={open} onClose={close}>
      <div className="modal">
        <h2>
          {data.strMeal}
          <div className="meal__category">
            <span>{data.strCategory}</span>,<span>{data.strArea}</span>
          </div>
        </h2>
        <div className="meal__header">
          <img src={data.strMealThumb} alt={data.strMeal} />
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {Object.entries(ingObj).map(([ingredient, measure]) => {
              return (
                <li key={uuid()}>
                  {ingredient}: {measure}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipe__inst">
          <p>{data.strInstructions}</p>
        </div>
      </div>
    </Modal>
  );
};
