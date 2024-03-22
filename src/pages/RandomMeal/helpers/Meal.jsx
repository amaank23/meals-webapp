import React, { useEffect, useState } from "react";
import Headline from "../../../components/Headlines/Headline";
import SubHeadline from "../../../components/Headlines/SubHeadline";
import Heart from "./../../../assets/heart.svg";
import HeartFilled from "./../../../assets/heartfilled.svg";
import Button from "../../../components/Buttons/Button";
import { addToFavouties, isFavouriteExist } from "../../../utils/utils";
const Meal = ({ meal }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  function toggleFavourite() {
    setIsFavourite((prev) => !prev);
    addToFavouties({
      name: meal.strMeal,
      img: meal.strMealThumb,
      id: meal.idMeal,
    });
  }
  useEffect(() => {
    if (isFavouriteExist(meal.idMeal)) {
      setIsFavourite(true);
    }
  }, []);
  return (
    <div className="bg-primary relative pt-[7.125rem]">
      <div className="flex flex-col justify-center items-center">
        <Headline className="max-w-[49.75rem] text-seconday mb-6">
          {meal.strMeal}
        </Headline>
        <div className="relative">
          <Button
            onClick={toggleFavourite}
            className="w-[40px] h-[40px] !p-0 flex items-center justify-center hover:bg-orange-200 absolute top-2 right-2"
          >
            <img
              src={isFavourite ? HeartFilled : Heart}
              className="w-[25px] h-[25px]"
            />
          </Button>
          <img src={meal.strMealThumb} className="h-[400px]" />
        </div>
        <SubHeadline className="text-seconday mt-16 !text-[20px]">
          Instructions:
        </SubHeadline>
        <SubHeadline className="text-seconday mt-4 max-w-[1000px] !text-[16px] leading-8">
          {meal.strInstructions}
        </SubHeadline>
      </div>
    </div>
  );
};

export default Meal;
