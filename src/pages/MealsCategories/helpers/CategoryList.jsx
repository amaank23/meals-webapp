import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import useApiData from "../../../hooks/useApiData";
import Spinner from "./../../../components/Loader";
const CategoryList = () => {
  const [mealsCategories, setMealsCategories, toggleLoading] = useApiData();
  async function getAllMealsCategories() {
    try {
      let res = await axios.get("categories.php");
      setMealsCategories(res.data.categories);
      toggleLoading.setLoadingToFalse();
    } catch (error) {
      toggleLoading.setLoadingToFalse();
    }
  }
  useEffect(() => {
    getAllMealsCategories();
  }, []);
  return (
    <Spinner loading={mealsCategories.loading}>
      <div className="mt-[8.75rem] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mealsCategories.data.length &&
          mealsCategories.data.map((item) => (
            <Category
              title={item.strCategory}
              img={item.strCategoryThumb}
              key={item.idCategory}
            />
          ))}
      </div>
    </Spinner>
  );
};

export default CategoryList;
