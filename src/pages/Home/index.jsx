import React, { useEffect } from "react";
import ExploreMealsSection from "./helpers/ExploreMealsSection";
import RandomMealsSection from "./helpers/RandomMealsSection";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ExploreMealsSection />
      <RandomMealsSection />
    </div>
  );
};

export default index;
