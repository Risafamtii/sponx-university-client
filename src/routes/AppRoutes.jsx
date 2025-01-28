// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";
// import ClubDetailsPage from "../pages/ClubDetailsPage";
// import BankDetails from "../pages/BankDetails";
// import AdvertiseEvents from "../pages/AdvertiseEvents";
// import SelectedAd from "../pages/SelectedAd";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/club-details" element={<ClubDetailsPage />} />
//       <Route path="/bank-details" element={<BankDetails />} />
//       <Route path="/advertise-events" element={<AdvertiseEvents />} />
//       <Route path="/selected-ad" element={<SelectedAd />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import AdminOverview from '../pages/Admin/Overview'
import AdminBids from '../pages/Admin/Bids'
import AdminCompanies from '../pages/Admin/Companies'
import AdminClubs from '../pages/Admin/Clubs'
import AdminEvents from '../pages/Admin/Events'
import AdminPayments from '../pages/Admin/Payments'
import AdminSettings from '../pages/Admin/Settings'
import AdminCompose from '../pages/Admin/Compose'
import AdminSent from '../pages/Admin/Sent'
import Home from '../pages/Home/Home'
import Header from '../components/Header'
import Footer from '../components/FooterComp'
import LoginPage from '../pages/LoginPage'



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
        path="/"
        element={
          <>
          <Header/>
          <Home/>
          <Footer/>
          </>
        }
      />
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/admin" element={<AdminLayout/>}>
        <Route path ="overview" element ={<AdminOverview/>}/>
        <Route path ="bids" element ={<AdminBids/>}/>
        <Route path ="events" element ={<AdminEvents/>}/>
        <Route path ="users/companies" element ={<AdminCompanies/>}/>
        <Route path ="users/clubs" element ={<AdminClubs/>}/>
        <Route path ="payments" element ={<AdminCompose/>}/>
        <Route path ="notifications/compose" element ={<AdminOverview/>}/>
        <Route path ="notifications/sent" element ={<AdminSent/>}/>
        <Route path ="settings" element ={<AdminSettings/>}/>


      </Route>
    </Routes>
  </Router>

  )
}

export default AppRoutes
