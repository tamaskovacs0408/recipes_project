import React, {useState} from "react";
import { RecipeModal } from "../RecipeModal/RecipeModal";
import "./index.scss";

export const Recipe = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="recipe__thumbnail" onClick={handleOpen}>
        <h2>{data.strMeal}</h2>
        <img src={data.strMealThumb} alt={data.strMeal} />
      </div>
      {open ? (
        <RecipeModal data={data} open={open} close={handleClose} />
      ) : null}
    </>
  );
};
