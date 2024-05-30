import { useState } from "react";
import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";

const Recipes = ({ data }) => {
  const [recipes, setRecipes] = useState(data);

  function handleDeleteRecipe(id, event) {
    event.preventDefault();
    setRecipes(recipes.filter((recipe) => id !== recipe.id));
  }

  return (
    <div className="recipes">
      {recipes.map((recipe) => {
        return (
          <Link key={recipe.id} to={`/recipe-details/${recipe.id}`}>
            <ItemCard recipe={recipe} deleteHandler={handleDeleteRecipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
