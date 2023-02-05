import React, { useState, useRef } from "react";
import { Recipe } from "../Recipe/Recipe";
import "./index.scss";

export const RecipeFinder = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const inputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    let searchRef = inputRef.current.value;

    searchRef = searchRef.trim();

    if (searchRef === null || searchRef === "") {
      setSearchError("Invalid value");
    } else {
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRef}`
      )
        .then(async (response) => await response.json())
        .then(async (data) => setRecipes(data.meals))
        .catch((error) => console.log(error));
    }
  }

  return (
    <section className="recipes">
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Find a recipe
            <input
              type="text"
              name="food"
              className="form__label--input"
              ref={inputRef}
            />
          </label>
          <button type="submit" className="form__button">
            Search
          </button>
          <p className="form__error">{searchError}</p>
        </form>
      </div>
      <div className="recipes__container">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.idMeal} data={recipe} />;
        })}
      </div>
    </section>
  );
};
