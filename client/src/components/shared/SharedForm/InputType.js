import React from "react";

const InputType = ({
  label,
  value,
  onChange,
  name,
  placeholder,
  inputType,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white">{label}</label>
      <input
        className="w-full px-4 py-2 rounded-md mb-2 text-black border outline-none"
        placeholder={placeholder}
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputType;
