import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Recipes from "./components/Recipes";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import recipesJson from "./assets/recipes.json"
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";


function App() {
  const data = recipesJson
  return (
    <>
      <div className="app">
        <Navbar /> 
        <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard data={data}/>} />
          <Route path="/recipeDetail/:id" element={<RecipeDetails data={data}/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
