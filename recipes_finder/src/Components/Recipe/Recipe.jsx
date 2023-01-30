import React, {useState} from "react";
// import uuid from "react-uuid";
import "./index.scss";
import { RecipeModal } from "../RecipeModal/RecipeModal";

export const Recipe = ({ data }) => {
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="recipe__thumbnail">
        <button onClick={handleOpen}>open modal</button>
        <h2>{data.strMeal}</h2>
        <img src={data.strMealThumb} alt={data.strMeal} />
      </div>
      {open && (
        <RecipeModal data={data} open={open} close={handleClose}/>
      )}
    </>
  );
};
