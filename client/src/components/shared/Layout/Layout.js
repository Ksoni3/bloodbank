import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 text-center  ">
        <div className="md:col-span-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white h-screen">
          <Sidebar />
        </div>
        <div className="md:col-span-4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
