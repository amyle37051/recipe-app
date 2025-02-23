import React, { useState } from "react";

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
}

const AddRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input type="text" name="name" value={recipe.name} onChange={handleChange} required />

        <label>Ingredients:</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />

        <label>Instructions:</label>
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
