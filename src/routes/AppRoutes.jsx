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
import AdminEventsView from '../pages/Admin/EventsView';
import AdminReport from '../pages/Admin/Report';
import AdminFeedback from '../pages/Admin/Feedback';


import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/FooterComp';
import LoginPage from '../pages/LoginPage';

import ClubLayout from '../layouts/ClubLayout'
import ClubOverview from '../pages/Club/Overview'
import ClubBank from '../pages/Club/BankDetails'
import ClubDetails from '../pages/Club/ClubDetailsPage'
import ClubEvents from '../pages/Club/MyEvents'
import ClubProfile from '../pages/Club/Profile'
import ClubSelectAd from '../pages/Club/SelectedAd'
import ClubAdvertise from '../pages/Club/AdvertiseEvents'
import ClubEventDetails from '../pages/Club/EventDetails'
import ClubCreateEvent from '../pages/Club/CreateEvent'

import CompanyLayout from '../layouts/CompanyLayout';
import CompanyOverview from '../pages/Company/Overview';
import CompanyProfile from '../pages/Company/Profile';
import CompanyPayment from '../pages/Company/Payment';

import AdminCompanyView from '../pages/Admin/CompanyView';
import AdminClubView from '../pages/Admin/ClubView';
//import AdminCompanyAdd from '../pages/Admin/CompanyAdd';

import CompanySponsorship from '../pages/Company/Sponsorship';
import CompanyEvents from '../pages/Company/Eventlist';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />

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
        <Route path ="users/companies/view/:id" element ={<AdminCompanyView/>}/>
        {/* <Route path ="users/companies/add" element={<AdminCompanyAdd/>}/> */}
        <Route path ="users/clubs/view" element={<AdminClubView/>}/>
        <Route path ="events/view" element={<AdminEventsView/>}/>
        <Route path ="events/view/report" element={<AdminReport/>}/>
        <Route path ="events/view/feedback" element={<AdminFeedback/>}/>
      </Route>

        <Route path='/club' element={<ClubLayout />}>
          <Route path="overview" element={<ClubOverview />} />
          <Route path="advertise" element={<ClubAdvertise />} />
          <Route path="bankdetails" element={<ClubBank />} />
          <Route path="myevents" element={<ClubEvents />} />
          <Route path="eventdetails" element={<ClubEventDetails />} />
          <Route path="createevent" element={<ClubCreateEvent />} />
          <Route path="profile" element={<ClubProfile />} />
          <Route path="selectad" element={<ClubSelectAd />} />
        </Route>

        <Route path="/company" element={<CompanyLayout />}>
          <Route path="overview" element={<CompanyOverview />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="payment" element={<CompanyPayment />} />
          <Route path="sponsorship" element={<CompanySponsorship />} />
          <Route path="events" element={<CompanyEvents />} />
        </Route>

      </Routes>
    </Router>

  )
}

export default AppRoutes
