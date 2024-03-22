import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealsCategories from "./pages/MealsCategories";
import axios from "axios";
import Meals from "./pages/Meals";
import RandomMeal from "./pages/RandomMeal";
function App() {
  axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<MealsCategories />} />
        <Route path="/meals/:title" element={<Meals />} />
        <Route path="/meals/random-meal" element={<RandomMeal />} />
      </Routes>
    </>
  );
}

export default App;
