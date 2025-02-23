import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
// import RecipesPage from "./RecipesPage";  // Placeholder for recipes page
import AddRecipe from "./AddRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/recipes" element={<RecipesPage />} /> */}
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
