import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/auth/Homepage";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./components/Routes/ProtectRoute";
import PublicRoute from "./components/Routes/PublicRoute";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/"
          element={
            <ProtectRoute>
              {" "}
              <Homepage />
            </ProtectRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
