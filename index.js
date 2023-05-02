const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const foods = require("./data/foods.json");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Programmer Recipe");
});

app.get("/foods", (req, res) => {
  res.send(foods);
});

app.get("/food/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedFood = foods.find((food) => parseInt(food.food_id) === id);
  res.send(selectedFood);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedFoods = foods.filter((food) => parseInt(food.chef_id) === id);
  res.send(selectedFoods);
});

app.listen(port, () => {
  console.log("Programmer Recipe Running");
});
