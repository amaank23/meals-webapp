import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`shadow-xl shadow-seconday font-medium text-base bg-button hover:bg-transparent transition-all duration-300 border border-button py-4 px-[2.6875rem] text-white rounded-[.5rem] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
