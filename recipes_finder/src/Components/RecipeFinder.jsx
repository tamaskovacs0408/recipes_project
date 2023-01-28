import React, {useState, useEffect} from 'react';
import '.index.scss';

export const RecipeFinder = () => {
  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  const [searchValue, setSearchValue] = useState(null);
  const [recipes, setRecipes] = useState(null);

  

  return (
    <div className='form__container'>
      <form className='form'>
        <label className='form__label'>
          <input type="text" name='food' className='form__label--input'/>
        </label>
        <button type='submit' className='form__button'>Search</button>
        <p className='form__error'></p>
      </form>
    </div>
  )
}
