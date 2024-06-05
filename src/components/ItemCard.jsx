import { Link } from "react-router-dom";

const ItemCard = ({ recipe, editHandler, deleteHandler }) => {
  return (
    <div className="item-card">
      <img src={recipe.image} />
      <h4>
        Name: <br />
        {recipe.name}
      </h4>

      <h4>
        Calories:
        <br />
        {recipe.calories * recipe.servings}
      </h4>
      <h4>
        Servings:
        <br />
        {recipe.servings}
      </h4>
      <h4>
        Type: <br />
        {recipe.calories > 250 ? <>Meal</> : <>Snack</>}
      </h4>
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
  );
};

export default ItemCard;
