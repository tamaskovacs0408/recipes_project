import React from 'react'
import './index.scss'

export const Recipe = ({data}) => {
  return (
    <>
      <div>
        <h2>{data.strMeal}</h2>
        <p>{data.strInstructions}</p>
      </div>
    </>
  );
}
