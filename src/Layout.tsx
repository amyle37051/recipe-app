import { Outlet, Link } from "react-router-dom";
import "./Layout.css";


export default function Layout() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <h2>Recipe Finder</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/add-recipe">Add Recipe</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
