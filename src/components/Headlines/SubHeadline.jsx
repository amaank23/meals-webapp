import React from "react";

const SubHeadline = ({ children, className = "" }) => {
  return (
    <p
      className={`text-center font-medium text-[.875rem] md:text-[1.125rem] ${className}`}
    >
      {children}
    </p>
  );
};

export default SubHeadline;
