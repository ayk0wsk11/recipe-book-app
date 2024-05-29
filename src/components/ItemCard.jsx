const ItemCard = ({ recipe, deleteHandler }) => {
  console.log(recipe);
  console.log(deleteHandler);
  return (
    <div className="item-card">
      <p>{recipe.name}</p>
      {recipe.calories > 300 ? (
        <span>This is not very healthy</span>
      ) : (
        <span>This seems healthy</span>
      )}
      <button
        onClick={() => {
          deleteHandler(recipe.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default ItemCard;
