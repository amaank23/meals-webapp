import React from "react";
import Headline from "../../components/Headlines/Headline";
import { useParams } from "react-router-dom";
import FavouritesList from "./helpers/FavouritesList";
const index = () => {
  const params = useParams();
  return (
    <div className="bg-primary relative pt-[7.125rem]">
      <div className="flex flex-col justify-center items-center">
        <Headline className="max-w-[49.75rem] text-seconday">
          Favourite Meals
        </Headline>
      </div>
      <FavouritesList title={params.title} />
    </div>
  );
};

export default index;
