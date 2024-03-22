import axios from "axios";
import React, { useEffect, useState } from "react";
import useApiData from "../../../hooks/useApiData";
import Spinner from "./../../../components/Loader";
import FavouriteMeal from "./FavouriteMeal";
const FavouritesList = () => {
  const [meals, setMeals] = useApiData();
  useEffect(() => {
    const favourites = localStorage.getItem("favourites");
    if (favourites) {
      setMeals([...JSON.parse(favourites)]);
    }
  }, []);
  return (
    <>
      {meals.data.length > 0 ? (
        <div className="mt-[8.75rem] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {meals.data.map((item) => (
            <FavouriteMeal
              name={item.name}
              img={item.img}
              key={item.id}
              id={item.id}
              setMeals={setMeals}
              meals={meals.data}
            />
          ))}
        </div>
      ) : (
        <div className="h-[100vh]">
          <p className="text-white text-center text-2xl">
            No Favourite Meal Found
          </p>
        </div>
      )}
    </>
  );
};

export default FavouritesList;
