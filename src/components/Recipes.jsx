import { useState } from "react";
import { Link } from "react-router-dom";
// import recipesJson from "../assets/recipes.json";
import ItemCard from "./ItemCard";

const Recipes = ({ data }) => {
  const [recipe, setRecipe] = useState(data);

  function handleDeleteRecipe(recipeId, event) {
    event.preventDefault();
    setRecipe(recipe.filter((aRecipeId) => recipeId !== aRecipeId.id));
  }

  return (
    <div className="recipes">
      {recipe.map((recipe) => {return(
        <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
          <ItemCard recipe={recipe} deleteHandler={handleDeleteRecipe} />
        </Link>
      )})}
    </div>
  );
};
export default Recipes;
