import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div> Header</div>
      <div> {children}</div>
    </>
  );
};

export default Layout;
