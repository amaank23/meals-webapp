import React from "react";

const Headline = ({ children, className = "" }) => {
  return (
    <h2
      className={`mb-4 text-[1.875rem] md:text-[3.75rem] font-bold text-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default Headline;
