import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./HomePage";
import RecipesPage from "./RecipesPage";
import AddRecipePage from "./AddRecipe";
import Bolognese from "./recipes/Bolognese";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="add-recipe" element={<AddRecipePage />} />
          <Route path="recipes/bolognese" element={<Bolognese />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
