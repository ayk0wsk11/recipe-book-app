import { Link } from "react-router-dom";
import NavbarIcon from "../images/menu-icon.png";
import NavbarLogo from "../images/logo.png";

const Navbar = ({ sidebarHandler }) => {
  return (
    <div className="navbar">
      <div>
        <button
          id="navbar-btn"
          onClick={() => {
            sidebarHandler();
          }}
        >
          <img src={NavbarIcon} />
        </button>
      </div>

      <Link className="navbar-links" to={"/"}>
        <div className="navbar-logo">
          <img src={NavbarLogo} />
          <h2>Home</h2>
        </div>
      </Link>

      <Link className="navbar-links" to={"/about"}>
        <div>
          <h2>About</h2>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
