import { Link } from "react-router-dom";
import BackButton from "./components/BackButton.tsx";

const RecipesPage = () => {
  return (
    <div className="recipes-page">
      <BackButton />
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
