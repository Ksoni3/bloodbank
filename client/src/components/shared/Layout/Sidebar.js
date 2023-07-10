import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userMenu from "./Menus/userMenu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (a) => {
    navigate(a);
  };

  return (
    <div className=" mt-10">
      {userMenu.map((singleMenu, index) => {
        const { name, path, icon } = singleMenu;
        const isActive = location.pathname === path;
        return (
          <div key={index} className=" my-4 py-2 text-xl">
            <div
              className="  w-3/4 mx-auto flex items-center  gap-5 cursor-pointer"
              onClick={() => handleMenuClick(path)}
            >
              {" "}
              {icon}
              <p className="mb-3 pt-3"> {name}</p>
            </div>
            <hr className={`w-3/4 mx-auto  ${isActive ? "block" : "hidden"}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

{
  /* <div className="menu">
        {user?.role === "organisation" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/">Inventory</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/donar" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/donar">Donar</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/hospital" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/hospital">Hospital</Link>
            </div>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <div
              className={`menu-item ${
                location.pathname === "/donar-list" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-warehouse"></i>
              <Link to="/donar-list">Donar List</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/hospital-list" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/hospital-list">Hospital List</Link>
            </div>
            <div
              className={`menu-item ${
                location.pathname === "/org-list" ? "active" : ""
              }`}
            >
              <i className="fa-solid fa-hospital"></i>
              <Link to="/org-list">Organisation List</Link>
            </div>
          </>
        )}
        {(user?.role === "donar" || user?.role === "hospital") && (
          <div
            className={`menu-item ${
              location.pathname === "/orgnaisation" ? "active" : ""
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/orgnaisation">Orgnaisation</Link>
          </div>
        )}
        {user?.role === "hospital" && (
          <div
            className={`menu-item ${
              location.pathname === "/consumer" ? "active" : ""
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/consumer">Consumer</Link>
          </div>
        )}
        {user?.role === "donar" && (
          <div
            className={`menu-item ${
              location.pathname === "/donation" ? "active" : ""
            }`}
          >
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/donation">Donation</Link>
          </div>
        )}
      </div> */
}
