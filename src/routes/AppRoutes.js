import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ClubDetailsPage from "../pages/ClubDetailsPage";
import BankDetails from "../pages/BankDetails";
import EventForm from "../pages/EventForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/club-details" element={<ClubDetailsPage />} />
      <Route path="/bank-details" element={<BankDetails />} />
      <Route path="/event-form" element={<EventForm />} />

    </Routes>
  );
};

export default AppRoutes;
