const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const recipes = require("./data/recipes.json");
const chefs = require("./data/chefs.json");
const blogs = require("./data/blogs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Programmer Recipe");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipe = recipes.find(
    (recipe) => parseInt(recipe.food_id) === id
  );
  res.send(selectedRecipe);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.filter(
    (recipe) => parseInt(recipe.chef_id) === id
  );
  const selectedChef = chefs.find((chef) => parseInt(chef.chef_id) === id);
  res.send({ chefInfo: selectedChef, recipes: selectedRecipes });
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(port, () => {
  console.log("Programmer Recipe Running");
});
