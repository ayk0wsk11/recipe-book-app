import { useParams } from "react-router-dom";

const RecipeDetails = ({ data }) => {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id == id);
  return (
    <div className="recipe-detail">
      <img src={recipe.image}/>
      <div className="recipe-detail-text">
      <h1>Recipe:{recipe.name}</h1>
      <h3>Calories:{recipe.calories}</h3>
      </div>
    </div>
  );
};

export default RecipeDetails;
