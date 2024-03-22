import React from "react";
import Headline from "../../components/Headlines/Headline";
import { useParams } from "react-router-dom";
import MealsList from "./helpers/MealsList";

const index = () => {
  const params = useParams();
  return (
    <div className="bg-primary relative pt-[7.125rem]">
      <div className="flex flex-col justify-center items-center">
        <Headline className="max-w-[49.75rem] text-seconday">
          {params.title}
        </Headline>
      </div>
      <MealsList title={params.title} />
    </div>
  );
};

export default index;
