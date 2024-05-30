const ItemCard = ({ recipe, deleteHandler }) => {
  console.log(recipe);
  console.log(deleteHandler);
  return (
    <div className="item-card">
      <img src={recipe.image}/>
      <p>{recipe.name}</p>
      {recipe.calories > 300 ? (
        <span>This is not very healthy</span>
      ) : (
        <span>This seems healthy</span>
      )}
      <div>
        <button id="delete-btn"
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
