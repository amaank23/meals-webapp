import React, { useEffect } from "react";
import Headline from "../../components/Headlines/Headline";
import SubHeadline from "../../components/Headlines/SubHeadline";
import CategoryList from "./helpers/CategoryList";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-primary relative pt-[7.125rem] px-4">
      <div className="flex flex-col justify-center items-center">
        <Headline className="max-w-[49.75rem] text-seconday">
          Delightful Dining: Explore Our Delectable Meals
        </Headline>
        <SubHeadline className="text-seconday">
          Discover a World of Flavor with Every Bite
        </SubHeadline>
      </div>
      <CategoryList />
    </div>
  );
};

export default index;
