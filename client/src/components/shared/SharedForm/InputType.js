import React from "react";

const InputType = ({ label, type, value, onChange, name, inputType }) => {
  return (
    <div className="mb-4">
      <label className="block text-white">{label}</label>
      <input
        className="w-full px-4 py-2 rounded-md mb-2 text-black outline-none"
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputType;
