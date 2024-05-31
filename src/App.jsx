import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

/* import components */
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

/* import pages*/
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

/* import recipe data */
import recipesJson from "./assets/recipes.json";

function App() {
  const [recipes, setRecipes] = useState(recipesJson);

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard data={recipes} dataHandler={setRecipes} />} />
          <Route
            path="/recipe-details/:id"
            element={<RecipeDetails data={recipes} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
