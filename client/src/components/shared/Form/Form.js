import {
  Button,
  Radio,
  RadioGroup,
  Typography,
  Link,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import InputType from "./InputType";
import { useStyles } from "../../../styles/loginStyles";
import { handleLogin, handleRegister } from "../../../services/authService";
import { useSelector } from "react-redux";

const Form = ({ submitBtn, formTitle, formType }) => {
  const { error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    role: "donor",
    email: "",
    password: "",
    name: "",
    organisationName: "",
    hospitalName: "",
    website: "",
    address: "",
    phone: "",
  });

  const classes = useStyles();

  const handleRadioChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className={classes.styleForm}
      onSubmit={(e) => {
        if (formType === "login")
          return handleLogin(
            e,
            formData.email,
            formData.password,
            formData.role
          );
        else if (formType === "register")
          return handleRegister(
            e,
            formData.name,
            formData.role,
            formData.email,
            formData.password,
            formData.organisationName,
            formData.hospitalName,
            formData.address,
            formData.phone
          );
      }}
    >
      <Typography variant="h3" padding={1}>
        {" "}
        {formTitle}
      </Typography>
      <RadioGroup
        name="role"
        value={formData.role}
        onChange={handleRadioChange}
        row
      >
        <FormControlLabel value="donor" control={<Radio />} label="Donor" />
        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
        <FormControlLabel
          value="hospital"
          control={<Radio />}
          label="Hospital"
        />
        <FormControlLabel
          value="organisation"
          control={<Radio />}
          label="Organisation"
        />
      </RadioGroup>

      {(() => {
        switch (true) {
          case formType === "login":
            return (
              <>
                <InputType
                  label={"Email"}
                  name="email"
                  inputType={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputType
                  label={"Password"}
                  name="password"
                  inputType={"password"}
                  value={formData.password}
                  onChange={handleChange}
                />
              </>
            );
          case formType === "register":
            return (
              <>
                {(formData.role === "admin" || formData.role === "donor") && (
                  <InputType
                    label={"Name"}
                    name="name"
                    inputType={"string"}
                    value={formData.name}
                    onChange={handleChange}
                  />
                )}
                <InputType
                  label={"Email"}
                  name="email"
                  inputType={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputType
                  label={"Password"}
                  name="password"
                  inputType={"password"}
                  value={formData.password}
                  onChange={handleChange}
                />

                {formData.role === "organisation" && (
                  <InputType
                    label={"Orgainsation Name"}
                    name="organisationName"
                    inputType={"string"}
                    value={formData.organisationName}
                    onChange={handleChange}
                  />
                )}

                {formData.role === "hospital" && (
                  <InputType
                    label={"Hospital Name"}
                    name="hospitalName"
                    inputType={"string"}
                    value={formData.hospitalName}
                    onChange={handleChange}
                  />
                )}

                <InputType
                  label={"Website"}
                  name="website"
                  inputType={"string"}
                  value={formData.website}
                  onChange={handleChange}
                />

                <InputType
                  label={"Address"}
                  name="address"
                  inputType={"string"}
                  value={formData.address}
                  onChange={handleChange}
                />

                <InputType
                  label={"Phone"}
                  name="phone"
                  inputType={"number"}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </>
            );
          default:
            return null;
        }
      })()}
      {error && <Typography color="red"> {error}</Typography>}

      <Button
        type="submit"
        variant="contained"
        sx={{ padding: "1rem", width: "60%" }}
      >
        {" "}
        {submitBtn}{" "}
      </Button>

      {formType === "login" ? (
        <Typography>
          {" "}
          Not Registered Yet? Register <Link href="/register">here</Link>
        </Typography>
      ) : (
        <Typography>
          {" "}
          Already have account? LogIn <Link href="/login">here</Link>{" "}
        </Typography>
      )}
    </form>
  );
};

export default Form;
