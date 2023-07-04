import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <header className="bg-black py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <BiDonateBlood className="text-red-500 text-2xl" />
        <h1 className="text-white text-lg ml-2">Blod Bank App</h1>
      </div>
      <div className="flex items-center">
        <h1 className="text-white text-lg mr-4">
          Welcome {user?.name || user?.hospitalName || user?.organisationName}
          <span className="uppercase ml-2 bg-gray-500 p-2 rounded">
            {user?.role}
          </span>
        </h1>
        <BiUserCircle className="text-red-500 text-2xl" />
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-4"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          {token ? "Log Out" : "Log In"}
        </button>
      </div>
    </header>
  );
};

export default Header;
