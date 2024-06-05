import { Link, useNavigate } from "react-router-dom";

import ItemCard from "./ItemCard";

const Recipes = ({ data, dataHandler }) => {

  const nav = useNavigate();

  function handleDeleteRecipe(id, event) {
    event.preventDefault();
    dataHandler(data.filter((recipe) => id !== recipe.id));
  }

  function handleEditRecipe(id, event) {
    event.preventDefault();
    nav(`/edit/${id}`);
  }
  

  return (
    <div className="recipes">
      {data.map((data) => {
        return (
          <Link id="item-card-link" key={data.id} to={`/recipe-details/${data.id}`}>
            <ItemCard recipe={data} editHandler={handleEditRecipe} deleteHandler={handleDeleteRecipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
