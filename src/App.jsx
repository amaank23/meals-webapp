import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;
