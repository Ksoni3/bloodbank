import React, { useState } from "react";
import InputType from "./InputType";
import { handleLogin, handleRegister } from "../../../services/authService";
import { useSelector } from "react-redux";
import { IoMdLogIn } from "react-icons/io";

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
    <div className="flex  min-h-3/4  w-full  ">
      <form className="  py-10 my-5 ">
        <h3 className="text-4xl font-semibold mb-10  text-start ">
          {formTitle}
        </h3>
        <div className=" flex flex-wrap mb-4 font-semibold">
          <div className="mr-4 font-semibold">
            <input
              type="radio"
              id="donor"
              name="role"
              value="donor"
              checked={formData.role === "donor"}
              onChange={handleRadioChange}
            />
            <label htmlFor="donor" className="ml-2 ">
              Donor
            </label>
          </div>
          <div className="mr-4 ">
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              checked={formData.role === "admin"}
              onChange={handleRadioChange}
            />
            <label htmlFor="admin" className="ml-2">
              Admin
            </label>
          </div>
          <div className="mr-4">
            <input
              type="radio"
              id="hospital"
              name="role"
              value="hospital"
              checked={formData.role === "hospital"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hospital" className="ml-2">
              Hospital
            </label>
          </div>
          <div className="mr-4">
            <input
              type="radio"
              id="organisation"
              name="role"
              value="organisation"
              checked={formData.role === "organisation"}
              onChange={handleRadioChange}
            />
            <label htmlFor="organisation" className="ml-2">
              Organisation
            </label>
          </div>
        </div>

        {(() => {
          switch (true) {
            case formType === "login":
              return (
                <>
                  <InputType
                    label="Email"
                    name="email"
                    inputType="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputType
                    label="Password"
                    name="password"
                    inputType="password"
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
                      label="Name"
                      name="name"
                      inputType="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  )}
                  <InputType
                    label="Email"
                    name="email"
                    inputType="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputType
                    label="Password"
                    name="password"
                    inputType="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  {formData.role === "organisation" && (
                    <InputType
                      label="Organisation Name"
                      name="organisationName"
                      inputType="text"
                      value={formData.organisationName}
                      onChange={handleChange}
                    />
                  )}

                  {formData.role === "hospital" && (
                    <InputType
                      label="Hospital Name"
                      name="hospitalName"
                      inputType="text"
                      value={formData.hospitalName}
                      onChange={handleChange}
                    />
                  )}

                  <InputType
                    label="Website"
                    name="website"
                    inputType="text"
                    value={formData.website}
                    onChange={handleChange}
                  />

                  <InputType
                    label="Address"
                    name="address"
                    inputType="text"
                    value={formData.address}
                    onChange={handleChange}
                  />

                  <InputType
                    label="Phone"
                    name="phone"
                    inputType="number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </>
              );
            default:
              return null;
          }
        })()}
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-rose-400  hover:bg-rose-600  text-white font-bold py-3 px-4 rounded w-60 mb-4"
          onClick={(e) => {
            e.preventDefault();
            if (formType === "login")
              handleLogin(e, formData.email, formData.password, formData.role);
            else if (formType === "register")
              handleRegister(
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
          {submitBtn}
        </button>

        {formType === "login" ? (
          <a href="/register" className=" hover:underline">
            <p>Not Registered Yet? Register here</p>
          </a>
        ) : (
          <a href="/login" className="hover:underline">
            <p className="flex items-center gap-2">
              Already have an account? Log In{" "}
              <IoMdLogIn className="text-2xl text-red-400" />
            </p>
          </a>
        )}
      </form>
    </div>
  );
};

export default Form;
