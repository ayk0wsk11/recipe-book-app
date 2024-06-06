import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div id="recipe-detail-header">
          <h1>Recipe: {recipe.name}</h1>
          {recipe.calories < 250 ? (
            <span id="type">Snack</span>
          ) : (
            <span id="type-2">Meal</span>
          )}
        </div>
        <div id="recipe-detail-h4">
          <h4>
            {recipe.calories * recipe.servings}kcal / {recipe.servings}{" "}
            {recipe.servings == 1 ? <>serving</> : <>servings</>}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
