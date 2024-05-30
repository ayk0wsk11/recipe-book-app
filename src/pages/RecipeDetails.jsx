import { useParams } from "react-router-dom";

const RecipeDetails = ({ data }) => {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id == id);
  return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>{recipe.calories}</h3>
    </div>
  );
};

export default RecipeDetails;
