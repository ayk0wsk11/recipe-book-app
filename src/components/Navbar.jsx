import { Link } from "react-router-dom";
import NavbarIcon from "../images/menu-icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <button id="navbar-btn">
        <img src={NavbarIcon} />
        </button>
      </div>

      <Link to={"/"}>
        <div><h3>Home</h3></div>
      </Link>

      <Link to={"/about"}>
        <div><h3>About</h3></div>
      </Link>
    </div>
  );
};

export default Navbar;
