import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <div className="middleContent">
          <Sidebar />
          <div className="main">Display content</div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
