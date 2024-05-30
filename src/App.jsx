import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Recipes from "./components/Recipes";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        
        <div className="content">
          <Sidebar />
          <div className="recipes">
            <Recipes />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
