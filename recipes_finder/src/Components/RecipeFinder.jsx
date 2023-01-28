import React, { useState, useEffect } from "react";
import ".index.scss";

export const RecipeFinder = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [searchError, setSearchError] = useState(null);

  const recipeSearching = async (e) => {
    e.preventDefault();

    let inputValue = searchValue.trim();

    if (inputValue.length() === 0 || inputValue === null) {
      setSearchError("Invalid input");
    } else {
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      )
        .then(async (response) => await response.json())
        .then(async (json) => setRecipes(json));
    }
  };

  useEffect(() => {
    recipeSearching();
    console.log(recipes);
  })

  return (
    <div className="form__container">
      <form className="form" onSubmit={recipeSearching()}>
        <label className="form__label">
          <input
            type="text"
            name="food"
            className="form__label--input"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button type="submit" className="form__button">
          Search
        </button>
        <p className="form__error">{searchError}</p>
      </form>
    </div>
  );
};
