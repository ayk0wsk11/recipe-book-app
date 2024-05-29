import { useState } from "react";
import recipesJson from "../assets/recipes.json";
import ItemCard from "./ItemCard";

const Recipes = () => {
  const [recipe, setRecipe] = useState(recipesJson);

  function handleDeleteRecipe(recipeId) {
    setRecipe(recipe.filter((aRecipeId) => recipeId !== aRecipeId.id));
  }

  return (
    <div className="recipes">
      {recipe.map((recipe) => (
        <ItemCard
          key={recipe.id}
          recipe={recipe}
          deleteHandler={handleDeleteRecipe}
        />
      ))}
    </div>
  );
};
export default Recipes;
