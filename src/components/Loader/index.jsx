import React from "react";
import Spinner from "./../../assets/spinner.svg";
const index = ({ loading = false, children }) => {
  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <img src={Spinner} alt="" className="w-[200px] h-[200px]" />
      </div>
    );
  }
  return <>{children}</>;
};

export default index;
