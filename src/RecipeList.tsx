import { useState } from "react";
import Bolognese from "./recipes/Bolognese";
import BananaBread from "./recipes/BananaBread";
import Brioche from "./recipes/Brioche";

const recipes = [
  { name: "Spaghetti Bolognese", component: <Bolognese /> },
  { name: "Avocado Toast", component: <BananaBread /> },
  { name: "Chicken Curry", component: <Brioche /> },
];

const RecipeList = () => {
  const [search, setSearch] = useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipe-list">
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div key={index}>{recipe.component}</div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
