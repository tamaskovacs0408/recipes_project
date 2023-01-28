import React from "react";
import "./index.scss";

export const Recipe = ({ data }) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let value = data[`strIngredient${i}`];
    if (typeof value === "string" && value.length > 0) {
      ingredients.push(value)
    }
  }
  console.log(data)
  console.log(ingredients)
  return (
    <>
      <div>
        <h2>{data.strMeal}</h2>
        <p>{data.strInstructions}</p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
        </div>
        <ul>
          {ingredients.map(element => {
            return <li key={data.strMeal}>{element}</li>
          })}
        </ul>
      </div>
    </>
  );
};
