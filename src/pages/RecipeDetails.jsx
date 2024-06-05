import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RecipeDetails = ({ data }) => {
  const { id } = useParams();
  const nav = useNavigate();

  const recipe = data.find((recipe) => recipe.id == id);

  useEffect(() => {
    if (!recipe) {
      nav("*");
    }
  }, []);

  if (!recipe) {
    return null; // Render nothing while navigating
  }

  return (
    <div className="recipe-detail">
      <img src={recipe.image} />
      <div className="recipe-detail-text">
        <h1>Recipe: {recipe.name}</h1>
        <h3>Calories: {recipe.calories * recipe.servings}</h3>
        <h3>Servings: {recipe.servings}</h3>
        <h3>Type: {recipe.calories > 250 ? <>Meal</> : <>Snack</>}</h3>
      </div>
    </div>
  );
};

export default RecipeDetails;
