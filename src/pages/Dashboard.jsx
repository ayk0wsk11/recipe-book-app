import Recipes from "../components/Recipes";
import AddRecipe from "../components/AddRecipe";

const Dashboard = ({ data, dataHandler }) => {
  return (
    <div className="dashboard">
      <AddRecipe data={data} dataHandler={dataHandler} />
      <Recipes data={data} dataHandler={dataHandler} />
    </div>
  );
};

export default Dashboard;
