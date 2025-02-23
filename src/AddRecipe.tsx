import { useState } from "react";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ recipeName, ingredients, instructions });
    setRecipeName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input 
            type="text" 
            value={recipeName} 
            onChange={(e) => setRecipeName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Ingredients:
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            required 
          />
        </label>
        <label>
          Instructions:
          <textarea 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
