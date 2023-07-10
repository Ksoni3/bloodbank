import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiDonateBlood, BiUserCircle, BiMenu } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { BiHomeCircle } from "react-icons/bi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  //function to show menu on mobile devices
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getIconBasedOnRole = () => {
    if (user?.role === "donor") {
      return (
        <BiUserCircle className="text-blue-500 text-2xl hidden lg:inline-block" />
      );
    } else if (user?.role === "admin") {
      return <RiAdminLine className="text-blue-500 text-2xl" />;
    } else {
      return <BiHomeCircle className="text-blue-500 text-2xl" />;
    }
  };

  return (
    <header className="bg-black w-full ">
      <div className=" w-10/12 lg:w-11/12 mx-auto py-4  flex justify-between items-center relative">
        <div className="flex items-center">
          <BiDonateBlood className="text-red-500 text-2xl" />
          <h1 className="text-white text-lg ml-2">Blood Bank App</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-white text-lg mr-4 hidden lg:inline-block">
            Welcome {user?.name || user?.hospitalName || user?.organisationName}
          </h1>
          {getIconBasedOnRole()}
          <button
            className="hidden lg:block bg-rose-500 hover:bg-rose-700 text-white font-semibold py-2 px-4 ml-4 rounded-md"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out
          </button>
          <BiMenu
            className="inline-block lg:hidden text-rose-500 font-bold text-3xl"
            onClick={handleShowMenu}
          />
        </div>
      </div>
      <hr />
      <div
        className={`lg:hidden w-screen h-36 bg-black ${
          showMenu ? "block" : "hidden"
        } flex items-center justify-center`}
      >
        <div className="w-3/4  h-3/4 flex flex-col justify-center gap-5">
          <h1 className="text-white text-lg  text-center">
            Welcome {user?.name || user?.hospitalName || user?.organisationName}
            <span className="uppercase ml-2 bg-gray-500  rounded">
              {user?.role}
            </span>
          </h1>
          <button
            className=" bg-rose-500 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-md"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
