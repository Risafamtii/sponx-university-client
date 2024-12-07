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
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/club-details" element={<ClubDetailsPage />} />
      <Route path="/bank-details" element={<BankDetails />} />

    </Routes>
  );
};

export default AppRoutes;
