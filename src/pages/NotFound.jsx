import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h3>404 NotFound</h3>
      <Link to="/">
      <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
