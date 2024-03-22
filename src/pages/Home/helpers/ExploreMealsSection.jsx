import React from "react";
import MealImg from "./../../../assets/meal.svg";
import Button from "./../../../components/Buttons/Button";
import Headline from "../../../components/Headlines/Headline";
import SubHeadline from "../../../components/Headlines/SubHeadline";
const ExploreMealsSection = () => {
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
        <Button className={"mt-[2.125rem]"}>Explore Meals</Button>
      </div>
    </div>
  );
};

export default ExploreMealsSection;
