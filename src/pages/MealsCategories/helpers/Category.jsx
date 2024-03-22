import React from "react";
import { useNavigate } from "react-router-dom";
const Category = ({ img, title }) => {
  const navigate = useNavigate();
  function onCategoryClick() {
    navigate(`${title}`);
  }
  return (
    <div
      className="flex flex-col gap-3 items-center mb-16 cursor-pointer hover:bg-white group transition-all rounded-lg"
      onClick={onCategoryClick}
    >
      <div>
        <img src={img} alt={title} />
      </div>
      <h3 className="text-seconday font-medium text-[1.75rem] group-hover:text-primary transition-all">
        {title}
      </h3>
    </div>
  );
};

export default Category;
