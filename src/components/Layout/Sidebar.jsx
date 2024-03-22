import React from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
const Sidebar = ({ open, close }) => {
  return (
    <Drawer
      title="Meals App"
      placement={"left"}
      closable={false}
      onClose={close}
      open={open}
      key={"left"}
      width={250}
    >
      <div className="flex flex-col gap-3 text-xl">
        <Link
          className="text-center hover:text-seconday"
          to={"/"}
          onClick={close}
        >
          Home
        </Link>
        <Link
          className="text-center hover:text-seconday"
          to={"/meals"}
          onClick={close}
        >
          Meals
        </Link>
        <Link
          className="text-center hover:text-seconday"
          to={"/meals/random-meal"}
          onClick={close}
        >
          Meal Generator
        </Link>
        <Link
          className="text-center hover:text-seconday"
          to={"/favourites"}
          onClick={close}
        >
          Favourites Meals
        </Link>
      </div>
    </Drawer>
  );
};

export default Sidebar;
