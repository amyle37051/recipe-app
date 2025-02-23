import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";  // Adjust path if needed
// import RecipesPage from "./RecipesPage";  // Placeholder for recipes page
// import AddRecipePage from "./AddRecipePage";  // Placeholder for add recipe page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
