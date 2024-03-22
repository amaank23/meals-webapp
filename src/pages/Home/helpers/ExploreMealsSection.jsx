import React from "react";
import MealImg from "./../../../assets/meal.svg";
import Button from "./../../../components/Buttons/Button";
const ExploreMealsSection = () => {
  return (
    <div className="py-[7.125rem] bg-primary flex justify-center items-center h-screen relative px-4">
      <img
        src={MealImg}
        alt=""
        className="absolute right-0 top-0 hidden md:block"
      />
      <div className="flex flex-col items-center">
        <h2 className="max-w-[49.75rem] mb-4 text-[1.875rem] md:text-[3.75rem] font-bold text-seconday text-center">
          Delightful Dining: Explore Our Delectable Meals
        </h2>
        <p className="text-seconday text-center font-medium text-[.875rem] md:text-[1.125rem]">
          Discover a World of Flavor with Every Bite
        </p>
        <Button className={"mt-[2.125rem]"}>Explore Meals</Button>
      </div>
    </div>
  );
};

export default ExploreMealsSection;
