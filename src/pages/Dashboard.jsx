import Recipes from "../components/Recipes";
import AddRecipe from "../components/AddRecipe";

const Dashboard = ({ data, dataHandler }) => {
  return (
    <>
      <div className="dashboard">
        <div id="recipes-container">
          <Recipes data={data} dataHandler={dataHandler} />
        </div>
        <AddRecipe data={data} dataHandler={dataHandler} />
      </div>
    </>
  );
};

export default Dashboard;
