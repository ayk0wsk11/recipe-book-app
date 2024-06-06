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
        <img className="navbar-logo" src={NavbarLogo} />
      </Link>

      <div></div>
    </div>
  );
};

export default Navbar;
