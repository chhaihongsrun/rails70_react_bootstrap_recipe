import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import RecipeIndex from "../components/Recipes/RecipeIndex";
import RecipeView from "../components/Recipes/RecipeView";
import CreateRecipe from "../components/Recipes/RecipeCreate";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipeIndex />} />
      <Route path="/recipe/:id" element={<RecipeView />} />
      <Route path="/recipe" element={<CreateRecipe />} />
    </Routes>
  </BrowserRouter>
);
