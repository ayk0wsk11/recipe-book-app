import { Link } from "react-router-dom";

const ItemCard = ({ recipe, editHandler, deleteHandler }) => {
  function isMeal() {
    if (recipe.calories > 250)
      return (
        <h4>
          Type: <br />
          Meal
        </h4>
      );
    return (
      <h4>
        Type: <br />
        Snack
      </h4>
    );
  }

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
        {recipe.calories}
      </h4>
      {isMeal()}
      <div>

        
        <button id="edit-btn" onClick={(event)=>{editHandler(recipe.id, event)}}>
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
