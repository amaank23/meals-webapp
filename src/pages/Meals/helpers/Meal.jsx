import React, { useEffect, useState } from "react";
import Button from "../../../components/Buttons/Button";
import Heart from "./../../../assets/heart.svg";
import HeartFilled from "./../../../assets/heartfilled.svg";
import { addToFavouties, isFavouriteExist } from "./../../../utils/utils";
const Meal = ({ name, img, id }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  function toggleFavourite() {
    setIsFavourite((prev) => !prev);
    addToFavouties({ name, img, id });
  }
  useEffect(() => {
    if (isFavouriteExist(id)) {
      setIsFavourite(true);
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 items-center mb-16 cursor-pointer hover:bg-white group transition-all rounded-lg">
      <div className="p-9 relative">
        <Button
          onClick={toggleFavourite}
          className="w-[40px] h-[40px] !p-0 flex items-center justify-center hover:bg-orange-200 absolute top-10 right-10"
        >
          <img
            src={isFavourite ? HeartFilled : Heart}
            className="w-[25px] h-[25px]"
          />
        </Button>
        <img src={img} alt={name} className="" />
      </div>
      <h3 className="text-seconday font-medium text-[1.75rem] group-hover:text-primary transition-all">
        {name}
      </h3>
    </div>
  );
};

export default Meal;
