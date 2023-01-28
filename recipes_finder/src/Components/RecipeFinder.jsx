import React, { useState } from "react";

export const RecipeFinder = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [recipes, setRecipes] = useState("");
  const [searchError, setSearchError] = useState(null);

async function handleSubmit(e) {
  e.preventDefault();
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  )
    .then(async (response) => await response.json())
    .then(async (data) => setRecipes(data.meals));
    
}

console.log(recipes);

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
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
        {/* <p className="form__error">{searchError}</p> */}
      </form>
    </div>
  );
};
