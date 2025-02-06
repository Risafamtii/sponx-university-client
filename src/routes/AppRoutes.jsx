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

import ClubLayout from '../layouts/ClubLayout'
import ClubOverview from '../pages/Club/Overview'
import ClubBank from '../pages/Club/BankDetails'
import ClubDetails from '../pages/Club/ClubDetailsPage'
import ClubEvents from '../pages/Club/MyEvents'
import ClubProfile from '../pages/Club/Profile'
import ClubSelectAd from '../pages/Club/SelectedAd'
import ClubAdvertise from '../pages/Club/AdvertiseEvents'


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
        <Route path ="payments" element ={<AdminPayments/>}/>
        <Route path ="notifications/compose" element ={<AdminCompose/>}/>
        <Route path ="notifications/sent" element ={<AdminSent/>}/>
        <Route path ="settings" element ={<AdminSettings/>}/>
      </Route>

      <Route path='/club' element={<ClubLayout/>}>
        <Route path ="overview" element ={<ClubOverview/>}/>
        <Route path ="advertise" element ={<ClubAdvertise/>}/>
        <Route path ="bankdetails" element ={<ClubBank/>}/>
        <Route path ="clubdetails" element ={<ClubDetails/>}/>
        <Route path ="myevents" element ={<ClubEvents/>}/>
        <Route path ="profile" element ={<ClubProfile/>}/>
        <Route path ="selectad" element ={<ClubSelectAd/>}/>
      </Route>
      
    </Routes>
  </Router>

  )
}

export default AppRoutes
