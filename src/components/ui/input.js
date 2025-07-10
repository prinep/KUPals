import React from "react";

const Input = ({ id, type, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full p-3 bg-[#354240] border border-[#455553] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CE6BD] transition duration-200 shadow-sm"
        required
      />
    </>
  );
};

export default Input;
