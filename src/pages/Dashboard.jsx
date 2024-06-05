import Recipes from "../components/Recipes";
import AddRecipe from "../components/AddRecipe";

const Dashboard = ({ data, dataHandler }) => {
  return (
    <>
    <div className="dashboard">
      <AddRecipe data={data} dataHandler={dataHandler} />
      <div id="recipes-container">
      <Recipes data={data} dataHandler={dataHandler} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
