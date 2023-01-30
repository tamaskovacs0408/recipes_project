import React from "react";
import uuid from "react-uuid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const RecipeModal = ({ data, open, close }) => {
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
  }, {});

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
    <div className="modal" aria-hidden="true">
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {/* <div className="modal-content">
        <h2>{data.strMeal}</h2>
        <img src={data.strMealThumb} alt={data.strMeal} />
        <p>{data.strInstructions}</p>
        <p>{data.strInstructions}</p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
        </div>
        <ul>
          {Object.entries(ingObj).map(([ingredient, measure]) => {
            return (
              <li key={uuid()}>
                {ingredient}: {measure}
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
