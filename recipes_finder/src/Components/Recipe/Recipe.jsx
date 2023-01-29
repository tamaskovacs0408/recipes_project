import React from "react";
import uuid from "react-uuid";
import "./index.scss";

export const Recipe = ({ data }) => {
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
  }, {})

  return (
    <>
      <div className="recipe__thumbnail">
        <h2>{data.strMeal}</h2>
        <img src={data.strMealThumb} alt={data.strMeal} />
        <p>{data.strInstructions}</p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
        </div>
        <ul>
          {Object.entries(ingObj).map(([ingredient, measure]) => {
            return <li key={uuid()}>{ingredient}: {measure}</li>
          })}
        </ul>
      </div>
    </>
  );
};
