import { Link } from "react-router-dom";

const RecipesPage = () => {
  return (
    <div className="recipes-page">
      <h2>Recipes</h2>
      <ul>
        <li><Link to="/recipes/Bolognese">Bolognese</Link></li>
        <li><Link to="/recipes/BananaBread">Banana Bread</Link></li>
        <li><Link to="/recipes/Brioche">Brioche</Link></li>
      </ul>
    </div>
  );
};

export default RecipesPage;
