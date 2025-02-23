import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome to Recipe Finder</h1>
      <div className="flex gap-4">
        <Link to="/recipes">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">View Recipes</button>
        </Link>
        <Link to="/add-recipe">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Add Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
