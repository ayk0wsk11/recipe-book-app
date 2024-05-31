import { useState } from "react";

const AddRecipe = ({ data, dataHandler }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  function handleAddRecipe(event) {
    event.preventDefault();
    const newRecipe = {
      id: data.length + 1,
      name,
      calories,
      image,
      servings,
    };

    dataHandler([...data, newRecipe]);
  }
  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleAddRecipe}>
        <span id="add-recipe">Add a Recipe</span>
        <div>
          <label>
            Name:   
            <input
              name="name"
              type="text"
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
              type="number"
              min={1}
              onChange={(event) => {
                setServings(event.target.value);
              }}
              placeholder="Servings"
            />
          </label>

          <button id="add-recipe-btn" type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};
export default AddRecipe;
