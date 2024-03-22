import React, { useEffect } from "react";
import Button from "../../components/Buttons/Button";
import useApiData from "../../hooks/useApiData";
import axios from "axios";
import Spinner from "./../../components/Loader";
import Meal from "./helpers/Meal";

const index = () => {
  const [meal, setMeal, toggleLoading] = useApiData();
  async function generateRandomMeal() {
    toggleLoading.setLoadingToTrue();
    try {
      let res = await axios.get(`random.php`);
      setMeal(res.data.meals);
      toggleLoading.setLoadingToFalse();
    } catch (error) {
      toggleLoading.setLoadingToFalse();
    }
  }
  useEffect(() => {
    toggleLoading.setLoadingToFalse();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {meal.data.length ? (
        <Meal meal={meal.data[0]} />
      ) : (
        <div className="flex justify-center items-center bg-primary h-screen">
          <Spinner loading={meal.loading}>
            <Button onClick={generateRandomMeal}>Generate Random Meal</Button>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default index;
