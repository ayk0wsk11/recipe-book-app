const ItemCard = ({ recipe, deleteHandler }) => {
  function isMeal() {
    if (recipe.calories > 250) return <span>Meal</span>;
    return <span>Snack</span>;
  }

  return (
    <div className="item-card">
      <img src={recipe.image} />
      <p>{recipe.name}</p>
      {isMeal()}
      <div>
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
