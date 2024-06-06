import { Link } from "react-router-dom";

const ItemCard = ({ recipe, editHandler, deleteHandler }) => {
  return (
    <div className="item-card">
      <img src={recipe.image} />
      <div>
        <span className="title">
          <b>{recipe.name}</b>
        </span>
        <p>
          {recipe.calories < 250 ? <span id="type">Snack</span> : <></>}
          <i>
            {recipe.calories * recipe.servings}kcal / {recipe.servings}{" "}
            {recipe.servings == 1 ? <>serving</> : <>servings</>}
          </i>
        </p>
        <div>
          <button
            id="edit-btn"
            onClick={(event) => {
              editHandler(recipe.id, event);
            }}
          >
            Edit
          </button>

          <button
            id="delete-btn"
            onClick={(event) => {
              deleteHandler(recipe.id, event);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
