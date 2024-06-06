import { Link } from "react-router-dom";

import GitLogo from "../images/github-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/ayk0wsk11/recipe-book-app.git"
          target="_blank"
        >
          <img src={GitLogo} alt="GitLogo" />
        </a>
      </div>
      <div>
        <Link className="navbar-links" to={"/about"}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Footer;
