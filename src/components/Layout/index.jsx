import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="relative">
      <Sidebar open={open} close={toggleOpen} />
      <button
        className="fixed left-4 top-4 z-10 bg-white p-5 rounded-full"
        onClick={toggleOpen}
      >
        <GiHamburgerMenu fontSize={20} />
      </button>
      {children}
    </div>
  );
};

export default Layout;
