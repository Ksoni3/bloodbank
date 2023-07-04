import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="h-screen relative">
      <img src={wallpaper} alt="#wallpaper" className="w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="w-3/4 md:w-2/5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-white text-center lg:text-start">
        <h1 className="text-xl md:text-4xl font-bold  lg:my-6 ">
          Donate Blood To Save Life
        </h1>
        <p className="text-md lg:text-lg my-6">
          Blood Donation will cost you nothing, but it will save a life! Donate
          your blood for a reason, let the reason to be life.
        </p>
        <div className=" mx-auto lg:mx-0 w-10/12 lg:w-3/5  flex  gap-9 lg:gap-10 mt-9 font-semibold">
          <button
            className=" p-3 bg-rose-500 w-32 rounded-sm hover:scale-105 ease-in-out duration-300 "
            onClick={handleLogIn}
          >
            Log In
          </button>
          <button
            className="border p-3 bg-gray-700 w-32 rounded-sm hover:scale-105 ease-in-out duration-300"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
      {/* <Form submitBtn="Submit" formTitle="Login Page" formType="login" /> */}
    </div>
  );
};

export default LandingPage;
