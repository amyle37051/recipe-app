import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipesPage from "./RecipesPage";
import AddRecipe from "./AddRecipe";
import Bolognese from "./recipes/Bolognese";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes/bolognese" element={<Bolognese />} />
      </Routes>
    </Router>
  );
}

export default App;
