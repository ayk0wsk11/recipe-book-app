import { NavLink } from "react-router-dom";

const Sidebar = ({ recipes, sidebarClosed }) => {
  return (
    <div
      className="sidebar"
      style={sidebarClosed ? { display: "none" } : { display: "flex" }}
    >
      <ul className="sidebar-ul">
        {recipes.map((recipe) => {
          return (
            <NavLink id="sidebar-links" key={recipe.id} to={`/recipe-details/${recipe.id}`}>
              <li>{recipe.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
