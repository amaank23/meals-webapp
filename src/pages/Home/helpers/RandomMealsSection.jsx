import React from "react";
import Button from "../../../components/Buttons/Button";
import SubHeadline from "../../../components/Headlines/SubHeadline";
import Headline from "../../../components/Headlines/Headline";
import { useNavigate } from "react-router-dom";

const RandomMealsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[7.125rem] bg-seconday flex justify-center items-center h-screen relative px-4">
      <div className="flex flex-col items-center">
        <Headline className="max-w-[58rem] text-primary ">
          Discover Your Next Culinary: Random Meal Generator
        </Headline>
        <SubHeadline className="text-primary">
          Let Chance Guide Your Taste Buds to Exciting New Flavors
        </SubHeadline>
        <Button
          className={"mt-[2.125rem] !shadow-primary"}
          onClick={() => navigate("/meals/random-meal")}
        >
          Generate Random Meal
        </Button>
      </div>
    </div>
  );
};

export default RandomMealsSection;
