import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2>Recipe Finder</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
