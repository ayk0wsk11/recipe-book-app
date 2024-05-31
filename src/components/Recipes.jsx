import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";

const Recipes = ({ data, dataHandler }) => {

  function handleDeleteRecipe(id, event) {
    event.preventDefault();
    dataHandler(data.filter((recipe) => id !== recipe.id));
  }

  return (
    <div className="recipes">
      {data.map((data) => {
        return (
          <Link key={data.id} to={`/recipe-details/${data.id}`}>
            <ItemCard recipe={data} deleteHandler={handleDeleteRecipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
