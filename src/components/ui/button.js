import React from "react";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      className={
        className ||
        "w-full py-3 px-4 bg-[#2ACAA8] text-white font-semibold rounded-lg hover:bg-[#23A891] focus:outline-none focus:ring-2 focus:ring-[#3CE6BD] focus:ring-offset-2 focus:ring-offset-[#252F2D] transition duration-300 ease-in-out shadow-md hover:shadow-lg"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
