import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = ({ data, dataHandler }) => {
  const { id } = useParams();
  const foundRecipe = data.find((recipe) => (recipe.id === id)); 

  const [name, setName] = useState(foundRecipe.name); 
  const [calories, setCalories] = useState(foundRecipe.calories);
  const [image, setImage] = useState(foundRecipe.image);
  const [servings, setServings] = useState(foundRecipe.servings);

  const nav = useNavigate();
  
  function handleEdit(event) {
    event.preventDefault();
    const updated = {id, name, calories, image, servings };
    const updatedRecipes = data.map((recipe) => recipe.id === id ? updated : recipe)
    dataHandler(updatedRecipes);
    nav("/");
  }

  return (
    <div>
      <h1>Edit Recipe</h1>

      <form onSubmit={handleEdit}>
        <div>
          <label>
            Name:   
            <input
              name="name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Name"
            />
          </label>

          <label>
            Calories:
            <input
              name="calories"
              value={calories}
              type="number"
              min={0}
              onChange={(event) => {
                setCalories(event.target.value);
              }}
              placeholder="Calories"
            />
          </label>

          <label>
            Image:
            <input
              name="image"
              type="url"
              onChange={(event) => {
                setImage(event.target.value);
              }}
              placeholder="Image"
            />
          </label>

          <label>
            Servings:
            <input
              name="servings"
              value={servings}
              type="number"
              min={1}
              onChange={(event) => {
                setServings(event.target.value);
              }}
              placeholder="Servings"
            />
          </label>

          <button id="add-recipe-btn" type="submit">Edit Recipe</button>
        </div>
      </form>
    </div>
  );
};
