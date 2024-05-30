import GitLogo from "../images/github-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={GitLogo} alt="GitLogo" />
      <a
        href="https://github.com/ayk0wsk11/recipe-book-app.git"
        target="_blank"
      >
        Github Repository
      </a>
    </div>
  );
};

export default Footer;
