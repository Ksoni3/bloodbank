import React from "react";
import { useSelector } from "react-redux";
import Form from "../../components/shared/SharedForm/Form";
import registerIcon from "../../assets/registerIcon.jpg";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import donationIcon from "../../assets/donationIcon.png";

const Register = () => {
  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
      <div className="min-h-screen  w-10/12  mx-auto  ">
        <div className="flex items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-semibold inline-block my-8">
              {" "}
              Donate Blood Today!!!
            </h1>
            <p className="bg-rose-400 py-1 lg:w-1/2 rounded-md text-center text-white font-semibold mb-8">
              {" "}
              A portal for everything you need!!!
            </p>
            <p className="mb-3 lg:mb-0 ">
              Create an account to access your donation history, update your
              details, manage how we contact you, what you’d like to hear about
              and more.{" "}
            </p>
          </div>

          <img
            src={donationIcon}
            alt="#abc"
            className="hidden lg:inline-block h-96 w-96"
          />
        </div>
        <hr className="mt-2" />
        <div className="flex flex-col lg:flex-row ">
          <div>
            <Form
              submitBtn="Register"
              formTitle="Create an account"
              formType="register"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-40 h-3/4 lg:py-10 lg:pl-16 ">
            <div className="my-6 lg:w-3/4">
              <h2 className="mb-5 font-bold">Benefits of an account​</h2>
              <p>
                You can securely view and update your personal information as
                well as access your donation history at any time.
              </p>
            </div>
            <div className="my-5 w-3/4 ">
              <h2 className="mb-5 font-bold">Get ready for tax time​</h2>
              <p>
                You can access and download the past two years' tax receipts and
                transaction history at any time, ready for your tax lodgement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
