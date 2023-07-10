import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import Form from "../../components/shared/SharedForm/Form";
import donationIcon from "../../assets/donationIcon.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading } = useSelector((state) => state.auth);
  if (token) {
    navigate("/homepage");
    return;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
      <div className="h-screen w-10/12 lg:w-11/12 flex flex-col lg:flex-row items-center lg:justify-around mx-auto ">
        <div className="order-2 lg:order-1">
          <Form submitBtn="Submit" formTitle="Login Page" formType="login" />
        </div>

        <img
          src={donationIcon}
          alt="#abc"
          className="inline-block w-1/2 order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default Login;
