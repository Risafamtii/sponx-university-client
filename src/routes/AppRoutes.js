import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AdvertiseEvents from "../pages/AdvertiseEvents";
// import { decodeJWT, isTokenExpired } from "../utils/auth";
import SignupPage from "../pages/SignupPage";
import ClubDetailsPage from "../pages/ClubDetailsPage";
import BankDetails from "../pages/BankDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ad" element={<AdvertiseEvents/>} />

    </Routes>
  );
};

export default AppRoutes;
