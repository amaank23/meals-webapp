import axios from "axios";
import React, { useEffect, useState } from "react";
import useApiData from "../../../hooks/useApiData";
import Spinner from "./../../../components/Loader";
import Meal from "./Meal";
const MealsList = ({ title }) => {
  const [meals, setMeals, toggleLoading] = useApiData();
  async function getAllMeals() {
    try {
      let res = await axios.get(`filter.php?c=${title}`);
      setMeals(res.data.meals);
      toggleLoading.setLoadingToFalse();
    } catch (error) {
      toggleLoading.setLoadingToFalse();
    }
  }
  useEffect(() => {
    getAllMeals();
  }, []);
  return (
    <Spinner loading={meals.loading}>
      <div className="mt-[8.75rem] px-4 grid grid-cols-3">
        {meals.data.length &&
          meals.data.map((item) => (
            <Meal
              name={item.strMeal}
              img={item.strMealThumb}
              key={item.idMeal}
              id={item.idMeal}
            />
          ))}
      </div>
    </Spinner>
  );
};

export default MealsList;
