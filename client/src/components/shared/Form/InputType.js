import React from "react";
import { TextField } from "@mui/material";

const InputType = ({ label, type, value, onChange, name, inputType }) => {
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        type={inputType}
        name={name}
        onChange={onChange}
        fullWidth
      />
    </>
  );
};

export default InputType;
