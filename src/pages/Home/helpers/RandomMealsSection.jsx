import React from "react";
import Button from "../../../components/Buttons/Button";

const RandomMealsSection = () => {
  return (
    <div className="py-[7.125rem] bg-seconday flex justify-center items-center h-screen relative px-4">
      <div className="flex flex-col items-center">
        <h2 className="max-w-[58rem] mb-4 text-[1.875rem] md:text-[3.75rem] font-bold text-primary text-center">
          Discover Your Next Culinary: Random Meal Generator
        </h2>
        <p className="text-primary  text-center font-medium text-[.875rem] md:text-[1.125rem]">
          Let Chance Guide Your Taste Buds to Exciting New Flavors
        </p>
        <Button className={"mt-[2.125rem] !shadow-primary"}>
          Generate Random Meal
        </Button>
      </div>
    </div>
  );
};

export default RandomMealsSection;
