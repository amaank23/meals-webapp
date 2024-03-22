import React from "react";
import MealImg from "./../../../assets/meal.svg";
import Button from "./../../../components/Buttons/Button";
import Headline from "../../../components/Headlines/Headline";
import SubHeadline from "../../../components/Headlines/SubHeadline";
import { useNavigate } from "react-router-dom";
const ExploreMealsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[7.125rem] bg-primary flex justify-center items-center h-screen relative px-4">
      <img
        src={MealImg}
        alt=""
        className="absolute right-0 top-0 hidden md:block"
      />
      <div className="flex flex-col items-center">
        <Headline className="max-w-[49.75rem] text-seconday">
          Delightful Dining: Explore Our Delectable Meals
        </Headline>
        <SubHeadline className="text-seconday">
          Discover a World of Flavor with Every Bite
        </SubHeadline>
        <div className="flex gap-4">
          <Button
            className={"mt-[2.125rem]"}
            onClick={() => navigate("/meals")}
          >
            Explore Meals
          </Button>
          <Button
            className={"mt-[2.125rem]"}
            onClick={() => navigate("/favourites")}
          >
            Your Favourite Meals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMealsSection;
