import React, {useState, useEffect} from 'react';

export const RecipeFinder = () => {
  return (
    <div className='form__container'>
      <form className='form'>
        <label className='form__label'>
          <input type="text" name='food' className='form__label__input'/>
        </label>
        <button type='submit' className='form__button'>Search</button>
        <p className='form__error'></p>
      </form>
    </div>
  )
}
