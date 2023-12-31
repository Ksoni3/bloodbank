import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/auth/Homepage";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./components/Routes/ProtectRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import Donor from "./pages/auth/Donor";
import Hospital from "./pages/auth/Hopital";
import Organisation from "./pages/auth/Organisation";

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

        {/* <Route
          path="/homepage"
          element={
            <ProtectRoute>
              {" "}
              <LandingPage />
            </ProtectRoute>
          }
        ></Route> */}

        <Route path="/homepage" element={<Homepage />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/organisation" element={<Organisation />} />
      </Routes>
    </>
  );
};

export default App;
