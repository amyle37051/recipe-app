import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import CSS for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Recipe Finder</h1>
      <div className="button-container">
        <Link to="/recipes">
          <button className="view-recipes">View Recipes</button>
        </Link>
        <Link to="/add-recipe">
          <button className="add-recipe">Add Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
