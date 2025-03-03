import HomePage from "./HomePage"; // Ensure this file exists
import RecipesPage from "./RecipesPage";
import AddRecipe from "./AddRecipe";
import Bolognese from "./recipes/Bolognese";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route path="recipes/bolognese" element={<Bolognese />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
